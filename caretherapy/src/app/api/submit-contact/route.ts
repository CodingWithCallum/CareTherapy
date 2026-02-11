// app/api/submit-contact/route.ts (Server-side code)
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';
import { CONTACT_INFO } from '@/config/contact';
import { getBusinessNotificationHtml, getUserConfirmationHtml } from '@/lib/email-templates';

// Professional email configuration
const EMAIL_FROM = 'Contact Form <onboarding@resend.dev>'; // Using Resend default for free tier
const CONFIRMATION_FROM = 'CARE Therapy <onboarding@resend.dev>';

// South African phone validation regex
// Handles: 0123456789, +27123456789, 012 345 6789, (+27) 21 140 9554
const SA_PHONE_REGEX = /^(?:\(?\+27\)?|0)\s?\(?\d{2}\)?\s?\d{3}\s?\d{4}$/;

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string()
    .optional()
    .refine((val: string | undefined) => !val || SA_PHONE_REGEX.test(val), {
      message: 'Invalid South African phone number format',
    }),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
  preferredContact: z.enum(['email', 'phone']).optional(),
  turnstileToken: z.string().min(1, 'Turnstile token is required'),
});

// Get Turnstile secret key (validated at runtime)
const TURNSTILE_SECRET_KEY = process.env.TURNSTILE_SECRET_KEY;

// Initialize Resend (instantiated inside handler to avoid build-time errors)
let resend: Resend | null = null;

// Rate limiting map (in production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60000; // 1 minute
const MAX_REQUESTS = 5; // 5 requests per minute

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= MAX_REQUESTS) {
    return false;
  }

  record.count++;
  return true;
}

export async function POST(request: Request) {
  try {
    // Validate environment variable at runtime
    if (!TURNSTILE_SECRET_KEY) {
      console.error('[Config Error] TURNSTILE_SECRET_KEY is not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      console.warn(`[Rate Limit] IP: ${ip} exceeded limit`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Validate request body with Zod
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: validationResult.error.issues.map((err: z.ZodIssue) => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { turnstileToken, ...formData } = validationResult.data;

    // Verify the token with Cloudflare using POST body
    const verificationResponse = await fetch(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: TURNSTILE_SECRET_KEY,
          response: turnstileToken,
        }),
      }
    );

    const verificationData = await verificationResponse.json();

    // Check the verification result
    if (!verificationData.success) {
      console.warn('[Security] Turnstile verification failed', {
        ip,
        error: verificationData['error-codes'],
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { error: 'Security verification failed. Please try again.' },
        { status: 400 }
      );
    }

    console.info('[Success] Contact form submission verified', { ip });

    // Send email notifications using Resend
    try {
      // Lazy initialization to avoid build-time errors
      if (!resend && process.env.RESEND_API_KEY) {
        resend = new Resend(process.env.RESEND_API_KEY);
      }

      if (!resend) {
        throw new Error('Resend client could not be initialized. Missing RESEND_API_KEY.');
      }

      // Send notification email to business
      const businessEmailResult = await resend.emails.send({
        from: EMAIL_FROM,
        to: [CONTACT_INFO.email.display],
        subject: `New Contact Form: ${formData.subject}`,
        html: getBusinessNotificationHtml(formData, ip),
      });

      if (businessEmailResult.error) {
        console.error('[Email Error] Business notification failed:', businessEmailResult.error);
      }

      // Send confirmation email to user
      const userEmailResult = await resend.emails.send({
        from: CONFIRMATION_FROM,
        to: [formData.email],
        subject: 'Thank you for contacting CARE Therapy',
        html: getUserConfirmationHtml(formData),
      });

      if (userEmailResult.error) {
        console.error('[Email Error] User confirmation failed:', userEmailResult.error);
      }

      console.info('[Success] Contact form emails process completed', {
        to: formData.email,
        businessEmailId: businessEmailResult.data?.id,
        userEmailId: userEmailResult.data?.id,
      });
    } catch (emailError) {
      console.error('[Critical Error] Email service failure:', emailError);
      // We still return success to the user as the message is "received" by the server
    }

    return NextResponse.json({
      message: 'Form submitted successfully!',
      data: {
        name: formData.name,
        email: formData.email,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('[Critical Error] Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request.' },
      { status: 500 }
    );
  }
}
