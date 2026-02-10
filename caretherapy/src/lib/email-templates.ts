/**
 * Email Templates for CARE Therapy Contact Form
 */

interface ContactFormData {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    preferredContact?: string;
}

/**
 * Generates the HTML for the business notification email
 */
export function getBusinessNotificationHtml(formData: ContactFormData, ip: string): string {
    const timestamp = new Date().toLocaleString();

    return `
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
        <p style="margin: 4px 0;">Submitted: ${timestamp}</p>
        <p style="margin: 4px 0;">IP Address: ${ip}</p>
      </div>
    </div>
  `;
}

/**
 * Generates the HTML for the user confirmation email
 */
export function getUserConfirmationHtml(formData: ContactFormData): string {
    return `
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
  `;
}
