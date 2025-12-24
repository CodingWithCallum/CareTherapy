import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { ReCaptchaProvider } from 'next-recaptcha-v3';
import { SITE_CONFIG } from "@/config/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'CARE Therapy | Professional Exercise and Rehabilitation Services in Johannesburg',
    template: '%s | CARE Therapy',
  },
  description: SITE_CONFIG.description,
  keywords: [
    'exercise therapy Johannesburg',
    'rehabilitation services South Africa',
    'mobile physiotherapy Johannesburg',
    'elderly mobility training',
    'sports injury prevention',
    'adaptive exercise programs',
    'post-surgery rehabilitation',
    'therapeutic exercise',
    'movement assessment',
    'home exercise therapy',
  ],
  authors: [{ name: SITE_CONFIG.author }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: SITE_CONFIG.locale,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'CARE Therapy | Professional Exercise and Rehabilitation Services in Johannesburg',
    description: SITE_CONFIG.description,
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'CARE Therapy Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CARE Therapy | Professional Exercise and Rehabilitation Services in Johannesburg',
    description: SITE_CONFIG.description,
    images: ['/logo.png'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''}>
          <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="min-h-screen w-full bg-white relative">
              <div className="absolute inset-0 z-0" style={{ backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #bfdbfe 100%)`,
                backgroundSize: "100% 100%", }} />
              <div className="min-h-screen w-full relative overflow-hidden">
                <div className="absolute inset-0 z-0" style={{backgroundImage: `radial-gradient(circle 600px at 0% 200px, #bfdbfe, transparent), radial-gradient(circle 600px at 100% 200px, #bfdbfe, transparent)`,}}/>
                {children}
                <Footer/>
              </div>
            </div>
          </div>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
