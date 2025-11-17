
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CareTherapy',
  description: 'How CareTherapy collects, uses, and protects your personal information in accordance with POPIA.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: 17 November 2025
          </p>
        </header>

        <div className="prose prose-lg max-w-none mx-auto text-muted-foreground">
          <p>
            CareTherapy ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website [Your Website URL] (the "Site"). This policy is drafted in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA) of the Republic of South Africa.
          </p>

          <h2 className="text-foreground">1. Collection of Your Information</h2>
          <p>
            We may collect personal information about you in a variety of ways. The information we may collect on the Site includes:
          </p>
          <ul>
            <li>
              <strong>Personal Data:</strong> Personally identifiable information, such as your name, email address, and telephone number, that you voluntarily give to us when you fill out a contact form or otherwise interact with the Site.
            </li>
            <li>
              <strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
            </li>
          </ul>

          <h2 className="text-foreground">2. Use of Your Information</h2>
          <p>
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
          </p>
          <ul>
            <li>Respond to your inquiries and consultation requests.</li>
            <li>Email you with newsletters or other information about our services, with your consent.</li>
            <li>Improve the functionality and user experience of our Site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
          </ul>

          <h2 className="text-foreground">3. Legal Basis for Processing</h2>
          <p>
            We process your personal information based on the following legal grounds as set out in POPIA:
          </p>
          <ul>
            <li><strong>Consent:</strong> We may process your information if you have given us consent to do so for a specific purpose.</li>
            <li><strong>Legitimate Interest:</strong> We may process your information when it is reasonably necessary to achieve our legitimate business interests.</li>
            <li><strong>Performance of a Contract:</strong> We may process your personal information to fulfill the terms of our contract with you.</li>
          </ul>

          <h2 className="text-foreground">4. Disclosure of Your Information</h2>
          <p>
            We do not share, sell, rent or trade your personal information with any third parties for their commercial purposes. We may share information we have collected about you in certain situations, such as:
          </p>
          <ul>
            <li><strong>By Law or to Protect Rights:</strong> If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others.</li>
            <li><strong>Third-Party Service Providers:</strong> We may share your information with third parties that perform services for us or on our behalf, such as data analysis, email delivery, and hosting services.</li>
          </ul>

          <h2 className="text-foreground">5. Security of Your Information</h2>
          <p>
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-foreground">6. Your Rights Under POPIA</h2>
          <p>
            As a data subject in South Africa, you have the following rights:
          </p>
          <ul>
            <li>The right to be notified that your personal information is being collected.</li>
            <li>The right to access the personal information we hold about you.</li>
            <li>The right to request the correction, destruction, or deletion of your personal information.</li>
            <li>The right to object to the processing of your personal information.</li>
            <li>The right to lodge a complaint with the Information Regulator.</li>
          </ul>
          <p>
            To exercise these rights, please contact us using the contact information provided below.
          </p>

          <h2 className="text-foreground">7. Use of Cookies</h2>
          <p>
            We may use cookies and other tracking technologies on the Site to help customize the Site and improve your experience. You are free to decline our cookies if your browser permits, but some parts of our Site may not work properly for you.
          </p>

          <h2 className="text-foreground">8. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date of this Privacy Policy. You are encouraged to periodically review this Privacy Policy to stay informed of our updates.
          </p>

          <h2 className="text-foreground">9. Contact Us</h2>
          <p>
            If you have questions or comments about this Privacy Policy, please contact our Information Officer:
          </p>
          <p>
            Email: info@caretherapy.co.za <br />
            Phone: +27 12 345 6789 <br />
            Address: [Your Business Address, Johannesburg, South Africa]
          </p>
        </div>
      </div>
    </div>
  );
}
