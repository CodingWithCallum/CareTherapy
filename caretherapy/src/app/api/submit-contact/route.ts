// app/api/submit-contact/route.ts (Server-side code)

import { NextResponse } from 'next/server';

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY;

export async function POST(request: Request) {
  const data = await request.json();
  const { reCaptchaToken, ...formData } = data;

  if (!reCaptchaToken) {
    return NextResponse.json({ error: 'reCAPTCHA token missing.' }, { status: 400 });
  }

  // 1. Verify the token with Google
  const verificationResponse = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${reCaptchaToken}`,
    { method: 'POST' }
  );
  
  const verificationData = await verificationResponse.json();

  // 2. Check the verification result
  if (!verificationData.success || verificationData.score < 0.5) { // Use a score threshold, e.g., 0.5
    // Log suspicious activity
    console.warn('reCAPTCHA failed or low score:', verificationData);
    // Return a generic success to bots to avoid revealing the check, 
    // but don't process the form data.
    return NextResponse.json({ message: 'Submission received (but not processed due to low score).' }); 
  }

  // --- 3. PROCEED WITH FORM PROCESSING (Email sending, database write, etc.) ---
  console.log('reCAPTCHA verified. Processing form data:', formData);
  
  // Example: Send an email, save to database, etc.

  // --------------------------------------------------------------------------

  return NextResponse.json({ message: 'Form submitted successfully!' }, { status: 200 });
}