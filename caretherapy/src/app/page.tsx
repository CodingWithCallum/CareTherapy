import Image from "next/image";
import { HeroSectionOne } from "@/components/home/HeroSection";
import {MarqueeDemo} from "@/components/home/TestimonialHome";

export default function Home() {
  return (
    <div >
      <main >
        <HeroSectionOne/>
        <MarqueeDemo/>
      </main>
      <footer >

      </footer>
    </div>
  );
}
