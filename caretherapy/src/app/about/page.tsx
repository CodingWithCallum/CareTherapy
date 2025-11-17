"use client";

import { motion } from "motion/react";
import { Target, Heart, TrendingUp, MapPin, Award, Users, Medal, HeartPlus, UsersRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Story
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Bridging the gap between rehabilitation and fitness through expert-guided, 
              proactive exercise therapy in real-world settings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our Mission & What Sets Us Apart
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  CARE Therapy aims to bridge the gap between rehabilitation and fitness 
                  by offering expert-guided, proactive exercise therapy in real-world settings.
                </p>
                <p className="text-lg">
                  Unlike physiotherapy, which typically focuses on acute injuries, CARE Therapy 
                  emphasizes long-term movement health and performance enhancement.
                </p>
                <p className="text-lg">
                  We prioritize preventative care: improving posture, strength, balance, and 
                  mobility before issues become disabling.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5" />
              {/* Placeholder for image */}
              <div className="absolute inset-0 flex items-center justify-center bg-muted">
                <Heart className="w-24 h-24 text-primary/20" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Makes CARE Therapy Different
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We bring personalized, evidence-based care directly to you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "We Come to You",
                description: "CARE Therapy brings the service to you — at home, in community settings, or on the field. No more traveling to appointments.",
              },
              {
                icon: Target,
                title: "Tailored to Your Goals",
                description: "We adapt to each client\'s goals and environment, ideal for elderly individuals, post-injury recovery, or young athletes.",
              },
              {
                icon: TrendingUp,
                title: "Long-term Focus",
                description: "We emphasize sustainable movement health and performance enhancement, not just short-term fixes.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: "Preventative Care",
                description: "Proactive approach to movement health",
              },
              {
                icon: Award,
                title: "Evidence-Based",
                description: "Using proven therapeutic approaches",
              },
              {
                icon: Users,
                title: "Client-Centered",
                description: "Tailored to individual needs and goals",
              },
              {
                icon: TrendingUp,
                title: "Performance Focus",
                description: "Long-term health and enhancement",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Who We Serve
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              CARE Therapy is designed for individuals at every stage of their movement journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Elderly Individuals",
                description: "Improving mobility, balance, and independence for a better quality of life.",
                icon: UsersRound,
              },
              {
                title: "Post-Injury Recovery",
                description: "Guided rehabilitation to restore function and prevent future injuries.",
                icon: HeartPlus,
              },
              {
                title: "Young Athletes",
                description: "Performance enhancement and injury prevention for competitive edge.",
                icon: Medal,
              },
            ].map((group, index) => {
              const Icon = group.icon; 
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border rounded-xl p-8 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-5xl mb-4">
                    <Icon className="mx-auto" size={48} /> 
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{group.title}</h3>
                  <p className="text-muted-foreground">{group.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you\'re recovering from an injury, looking to prevent future issues, 
              or wanting to enhance your performance, we\'re here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services">
                <Button size="lg" className="text-base">
                  View Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="text-base">
                  Get In Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}