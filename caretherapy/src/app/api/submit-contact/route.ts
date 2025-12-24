// app/api/submit-contact/route.ts (Server-side code)

import { NextResponse } from 'next/server';
import { z } from 'zod';
import { Resend } from 'resend';

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100, 'Name is too long'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000, 'Message is too long'),
  preferredContact: z.enum(['email', 'phone']).optional(),
  reCaptchaToken: z.string().min(1, 'reCAPTCHA token is required'),
});

// Get reCAPTCHA secret key (validated at runtime)
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

// Initialize Resend for email sending
const resend = new Resend(process.env.RESEND_API_KEY);

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
    if (!RECAPTCHA_SECRET_KEY) {
      console.error('RECAPTCHA_SECRET_KEY environment variable is not configured');
      return NextResponse.json(
        { error: 'Server configuration error. Please contact support.' },
        { status: 500 }
      );
    }

    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
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
          details: validationResult.error.issues.map(err => ({
            field: err.path.join('.'),
            message: err.message,
          })),
        },
        { status: 400 }
      );
    }

    const { reCaptchaToken, ...formData } = validationResult.data;

    // Verify the token with Google using POST body (more secure)
    const verificationResponse = await fetch(
      'https://www.google.com/recaptcha/api/siteverify',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
          secret: RECAPTCHA_SECRET_KEY,
          response: reCaptchaToken,
        }),
      }
    );

    const verificationData = await verificationResponse.json();

    // Check the verification result
    if (!verificationData.success || verificationData.score < 0.5) {
      // Log suspicious activity (without sensitive data)
      console.warn('reCAPTCHA verification failed', {
        success: verificationData.success,
        score: verificationData.score,
        ip,
        timestamp: new Date().toISOString(),
      });

      // Return error to prevent bot submissions
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Log successful verification (without sensitive form data)
    console.info('Contact form submission verified', {
      ip,
      timestamp: new Date().toISOString(),
      score: verificationData.score,
    });

    // Send email notifications using Resend
    try {
      // Validate Resend API key is configured
      if (!process.env.RESEND_API_KEY) {
        console.error('RESEND_API_KEY not configured');
        throw new Error('Email service not configured');
      }

      // Send notification email to business
      await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: ['caretherapysa@gmail.com'],
        subject: `New Contact Form: ${formData.subject}`,
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2563eb; margin-bottom: 24px;">New Contact Form Submission</h2>

            <div style="background: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 8px 0;"><strong>Name:</strong> ${formData.name}</p>
              <p style="margin: 8px 0;"><strong>Email:</strong> ${formData.email}</p>
              <p style="margin: 8px 0;"><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p style="margin: 8px 0;"><strong>Subject:</strong> ${formData.subject}</p>
              <p style="margin: 8px 0;"><strong>Preferred Contact:</strong> ${formData.preferredContact || 'Not specified'}</p>
            </div>

            <div style="background: #ffffff; border: 1px solid #e5e7eb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <p style="margin: 0 0 8px 0;"><strong>Message:</strong></p>
              <p style="margin: 0; white-space: pre-wrap;">${formData.message}</p>
            </div>

            <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;">

            <div style="font-size: 12px; color: #6b7280;">
              <p style="margin: 4px 0;">Submitted: ${new Date().toLocaleString()}</p>
              <p style="margin: 4px 0;">IP Address: ${ip}</p>
              <p style="margin: 4px 0;">reCAPTCHA Score: ${verificationData.score}</p>
            </div>
          </div>
        `,
      });

      // Send confirmation email to user
      await resend.emails.send({
        from: 'CARE Therapy <onboarding@resend.dev>',
        to: [formData.email],
        subject: 'Thank you for contacting CARE Therapy',
        html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #2563eb 0%, #3b82f6 100%); padding: 32px; text-align: center; border-radius: 8px 8px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px;">CARE Therapy</h1>
              <p style="color: rgba(255,255,255,0.9); margin: 8px 0 0 0; font-size: 14px;">Centre for Adaptive Rehabilitative Exercise Therapy</p>
            </div>

            <div style="background: white; padding: 32px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
              <h2 style="color: #1f2937; margin: 0 0 16px 0;">We received your message!</h2>

              <p style="color: #4b5563; line-height: 1.6; margin: 0 0 16px 0;">
                Hi ${formData.name},
              </p>

              <p style="color: #4b5563; line-height: 1.6; margin: 0 0 24px 0;">
                Thank you for contacting CARE Therapy. We've received your message and will respond within 24 hours during business hours.
              </p>

              <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 0 0 24px 0; border-left: 4px solid #2563eb;">
                <p style="margin: 0 0 8px 0; font-weight: 600; color: #1f2937;">Your message:</p>
                <p style="margin: 0; color: #4b5563; white-space: pre-wrap;">${formData.message}</p>
              </div>

              <div style="background: #eff6ff; padding: 16px; border-radius: 8px; margin: 0 0 24px 0;">
                <p style="margin: 0; color: #1e40af; font-size: 14px;">
                  <strong>📞 Need immediate assistance?</strong><br>
                  Call us at <a href="tel:+27797908846" style="color: #2563eb; text-decoration: none;">+27 79 790 8846</a>
                </p>
              </div>

              <hr style="margin: 24px 0; border: none; border-top: 1px solid #e5e7eb;">

              <p style="color: #4b5563; margin: 0 0 16px 0; line-height: 1.6;">
                Best regards,<br>
                <strong style="color: #1f2937;">The CARE Therapy Team</strong>
              </p>

              <div style="font-size: 12px; color: #6b7280; padding-top: 16px; border-top: 1px solid #e5e7eb;">
                <p style="margin: 4px 0; font-weight: 600; color: #1f2937;">CARE Therapy</p>
                <p style="margin: 4px 0;">Centre for Adaptive Rehabilitative Exercise Therapy</p>
                <p style="margin: 4px 0;">Phone: <a href="tel:+27797908846" style="color: #2563eb; text-decoration: none;">+27 79 790 8846</a></p>
                <p style="margin: 4px 0;">Email: <a href="mailto:caretherapysa@gmail.com" style="color: #2563eb; text-decoration: none;">caretherapysa@gmail.com</a></p>
                <p style="margin: 4px 0;">Mobile service throughout Johannesburg & surrounding areas</p>
              </div>
            </div>
          </div>
        `,
      });

      console.info('Contact form emails sent successfully', {
        to: formData.email,
        timestamp: new Date().toISOString(),
      });
    } catch (emailError) {
      console.error('Failed to send contact form emails:', emailError);
      // Continue to return success - don't expose email system failures to users
      // Monitor logs for email delivery issues
    }

    return NextResponse.json({
      message: 'Form submitted successfully!',
      data: {
        name: formData.name,
        email: formData.email,
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'An error occurred processing your request.' },
      { status: 500 }
    );
  }
}