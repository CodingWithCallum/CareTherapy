"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Heart, Users, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "We provide evidence-based, personalized therapy tailored to your unique needs.",
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Our experts with international accreditation have years of experience helping clients thrive.",
  },
  {
    icon: Award,
    title: "Evidence-Based",
    description: "We use proven approaches backed by scientific research to guide you through your recovery.",
  },
  {
    icon: Shield,
    title: "Safe & Confidential",
    description: "Your privacy and safety are our top priorities in every session.",
  },
];

export default function InfoSection() {
  return (
    <section className="relative py-5 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose CareTherapy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing exceptional exercise and rehabilitative care in studio or at in your home environment where you can grow, heal, and recover at your own comfort.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="bg-card border rounded-xl p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="bg-muted/50 rounded-2xl p-8 md:p-12 border">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Learn more about our approach, meet our team, and discover how we can 
              support you on your path to excellence.
            </p>
            <motion.div initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 0.3, delay: 1, }}
              className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4" >
              <Link href="/about">
                <Button size="lg" className="text-base">
                  Learn More About Us
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}