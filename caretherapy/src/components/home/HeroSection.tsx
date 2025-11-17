"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-5 md:py-15">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Helping you move better, live stronger, and perform with confidence.".split(" ").map((word, index) => (
              <motion.span key={index} initial={{ opacity: 0, filter: "blur(4px)", y: 10 }} animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1, ease: "easeInOut",}} className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 0.3, delay: 0.8, }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-xl font-normal italic text-neutral-600 dark:text-neutral-400" >
          CARE Therapy provides evidence-based adapted therapeutic and rehabilitative exercise. We strive to empower individuals to achieve optimal health and well-being.
        </motion.p>
        <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 0.3, delay: 1, }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4" >
          <Link href="/about">
            <Button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
              Learn More About Us
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
              Get In Contact
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}