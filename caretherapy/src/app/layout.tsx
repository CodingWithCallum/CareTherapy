import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareTherapy | Professional Therapy Services",
  description: "Providing compassionate and professional therapy services to help you live your best life.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header/>
          <main className="flex-1">
          <div className="min-h-screen w-full bg-white relative overflow-hidden">
          {/* Blue Corner Glow Background */}
            <div className="absolute inset-0 z-0" style={{backgroundImage: `radial-gradient(circle 600px at 0% 200px, #bfdbfe, transparent), radial-gradient(circle 600px at 100% 200px, #bfdbfe, transparent)`,}}/>
            {children}
          </div>
          </main>
          <Footer/>
        </div>
      </body>
    </html>
  );
}
