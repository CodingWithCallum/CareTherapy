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
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
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
      </body>
    </html>
  );
}
