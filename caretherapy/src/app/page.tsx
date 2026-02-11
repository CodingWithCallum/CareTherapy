import { Metadata } from "next";
import { HeroSectionOne } from "@/components/home/HeroSection";
import InfoSection from "@/components/home/InfoSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedBlogPost from "@/components/home/FeaturedBlogPost";
import TestimonialSection from "@/components/home/TestimonialHome";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  generateLocalBusinessSchema,
  generateWebSiteSchema
} from "@/lib/seo/schemas";
import { SITE_CONFIG } from "@/config/seo";

export const metadata: Metadata = {
  title: 'Home',
  description: 'Professional exercise therapy and rehabilitation services in Paarl and Val de Vie. Specializing in assisted stretching, older adults wellness, high-performance coaching, and mobile rehabilitation. Book your session today.',
  keywords: [
    'exercise therapy Paarl',
    'physiotherapy Paarl',
    'Val de Vie wellness',
    'assisted stretching Paarl',
    'older adults wellness Paarl',
    'mobile rehabilitation Paarl',
    'therapeutic exercise Val de Vie',
    'rehabilitation services Paarl',
  ],
  openGraph: {
    title: 'CARE Therapy | Professional Exercise and Rehabilitation Services in Paarl & Val de Vie',
    description: 'Expert mobile exercise therapy services throughout Paarl and Val de Vie. Specializing in assisted stretching, older adults wellness, and high-performance coaching.',
    url: SITE_CONFIG.url,
    images: ['/logo.png'],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          generateLocalBusinessSchema(),
          generateWebSiteSchema(),
        ]}
      />
      <div className="w-full">
        <HeroSectionOne />
        <InfoSection />
        <ServicesOverview />
        <TestimonialSection />
        <FeaturedBlogPost />
      </div>
    </>
  );
}
