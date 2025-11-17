
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | CareTherapy',
  description: 'The terms and conditions for using the CareTherapy website and services.',
};

export default function TermsOfServicePage() {
  return (
    <div className="relative z-10">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Last Updated: 17 November 2025
          </p>
        </header>

        <div className="prose prose-lg max-w-none mx-auto text-muted-foreground">
          <p>
            Welcome to CareTherapy. These Terms of Service ("Terms") govern your use of our website located at [Your Website URL] (the "Site") and the services offered. Our services are primarily provided in the Republic of South Africa.
          </p>
          <p>
            By accessing or using our Site, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Site.
          </p>

          <h2 className="text-foreground">1. No Medical Advice</h2>
          <p>
            The content on this Site, including text, graphics, images, and other material, is for informational purposes only and is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this Site. Reliance on any information provided by this Site is solely at your own risk.
          </p>

          <h2 className="text-foreground">2. Use of the Website</h2>
          <p>
            You agree to use the Site for lawful purposes only. You are prohibited from using the Site:
          </p>
          <ul>
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate CareTherapy, a CareTherapy employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Site, or which, as determined by us, may harm the Site or users of the Site or expose them to liability.</li>
          </ul>

          <h2 className="text-foreground">3. Intellectual Property Rights</h2>
          <p>
            The Site and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by CareTherapy, its licensors, or other providers of such material and are protected by South African and international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
          </p>
          <p>
            You may use the Site for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Site.
          </p>

          <h2 className="text-foreground">4. Privacy and Personal Information</h2>
          <p>
            Your use of the Site is also governed by our Privacy Policy. We are committed to protecting your privacy in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). By using this Site, you consent to the processing of your personal information as described in our Privacy Policy.
          </p>

          <h2 className="text-foreground">5. Third-Party Links</h2>
          <p>
            The Site may contain links to third-party websites or services that are not owned or controlled by CareTherapy. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that CareTherapy shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
          </p>

          <h2 className="text-foreground">6. Disclaimer of Warranties and Limitation of Liability</h2>
          <p>
            The Site is provided on an "AS IS" and "AS AVAILABLE" basis. CareTherapy makes no representations or warranties of any kind, express or implied, as to the operation of their site or the information, content, or materials included on this site. You expressly agree that your use of this site is at your sole risk.
          </p>
          <p>
            To the full extent permissible by South African law, CareTherapy disclaims all warranties, express or implied. CareTherapy does not warrant that the Site, its servers, or e-mail sent from CareTherapy are free of viruses or other harmful components. In no event shall CareTherapy, its directors, employees, or agents be liable for any direct, indirect, incidental, special, punitive, or consequential damages whatsoever.
          </p>

          <h2 className="text-foreground">7. Governing Law and Jurisdiction</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of the Republic of South Africa, without regard to its conflict of law provisions. Any dispute arising from these Terms shall be resolved in the courts of South Africa.
          </p>

          <h2 className="text-foreground">8. Changes to Terms</h2>
          <p>
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice before any new terms taking effect. By continuing to access or use our Site after those revisions become effective, you agree to be bound by the revised terms.
          </p>

          <h2 className="text-foreground">9. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us at:
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
