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
  description: 'Professional exercise therapy and rehabilitation services in Johannesburg. Mobile physiotherapy, elderly mobility training, sports injury prevention, and personalized recovery programs. Book your consultation today.',
  keywords: [
    'exercise therapy Johannesburg',
    'physiotherapy Johannesburg',
    'mobile physiotherapy',
    'rehabilitation services',
    'elderly mobility training',
    'sports injury prevention',
    'therapeutic exercise',
    'home physiotherapy',
  ],
  openGraph: {
    title: 'CARE Therapy | Professional Exercise and Rehabilitation Services in Johannesburg',
    description: 'Expert mobile physiotherapy and exercise therapy services throughout Johannesburg. Specializing in elderly mobility, sports injury prevention, and personalized rehabilitation programs.',
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
        <HeroSectionOne/>
        <InfoSection/>
        <ServicesOverview/>
        <TestimonialSection/>
        <FeaturedBlogPost/>
      </div>
    </>
  );
}
