import { HeroSectionOne } from "@/components/home/HeroSection";
import InfoSection from "@/components/home/InfoSection";
import ServicesOverview from "@/components/home/ServicesOverview";
import FeaturedBlogPost from "@/components/home/FeaturedBlogPost";
import TestimonialSection from "@/components/home/TestimonialHome";

export default function Home() {
  return (
    <div className="w-full">
      <HeroSectionOne/>
      <InfoSection/>
      <ServicesOverview/>
      <TestimonialSection/>
      <FeaturedBlogPost/>
    </div>
  );
}
