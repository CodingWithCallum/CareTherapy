"use client";

import { motion } from "motion/react";
import {
  Target, Heart, TrendingUp, MapPin, Award, Users, Medal,
  HeartPlus, UsersRound, GraduationCap, Trophy, Briefcase,
  CheckCircle2, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

// Client component due to animations - metadata in root layout

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
              proactive exercise in real-world settings.
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
                  by offering expert-guided, proactive adapted exercise in real-world settings.
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
                description: "We adapt to each client's goals and environment, ideal for elderly individuals, post-injury recovery, or young athletes.",
              },
              {
                icon: TrendingUp,
                title: "Long-term Focus",
                description: "We emphasize sustainable mobility and performance enhancement, not just short-term fixes.",
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

      {/* Our Team Section */}
      <section id="our-team" className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expert guidance from a qualified professional dedicated to your mobility, independence, and performance
            </p>
          </motion.div>

          {/* Cameron's Profile Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-card border rounded-2xl overflow-hidden shadow-lg">
              <div className="grid md:grid-cols-5 gap-0">
                {/* Left Column - Image & Quick Stats */}
                <div className="md:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 p-8 flex flex-col items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <Avatar className="w-48 h-48 border-4 border-background shadow-xl mb-6">
                      <AvatarImage src="/cameron_libera_linkedin.jpeg" alt="Cameron" />
                      <AvatarFallback className="text-4xl bg-primary text-primary-foreground">
                        CH
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <h3 className="text-2xl font-bold mb-1 text-center">Cameron</h3>
                  <p className="text-sm text-muted-foreground mb-6 text-center">
                    Founder and Adapted Exercise Specialist
                  </p>

                  {/* Quick Stats */}
                  <div className="w-full space-y-4">
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Briefcase className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">2+</p>
                      <p className="text-xs text-muted-foreground">Years Experience</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <GraduationCap className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">MSc</p>
                      <p className="text-xs text-muted-foreground">Kinesiology</p>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <Trophy className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-2xl font-bold">Division 2</p>
                      <p className="text-xs text-muted-foreground">Rugby Athlete</p>
                    </div>
                  </div>
                </div>

                {/* Right Column - Bio & Credentials */}
                <div className="md:col-span-3 p-8 md:p-10">
                  <div className="space-y-6">
                    {/* Introduction */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" />
                        About Cameron
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        I am an Adaptive exercise specialist | Flexologist | Founder of CARE Therapy with a strong
                        foundation in rehabilitative and adapted movement. I hold an MSc in Kinesiology with
                        a specialization in Adapted Physical Activity from California State University, and earned my
                        Undergraduate and Honours degrees in Human Kinetics and Ergonomics from Rhodes University.
                      </p>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Briefcase className="w-5 h-5 text-primary" />
                        Professional Journey
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        With professional experience in personal training and athletic performance since 2019, and a clinical
                        focus on functional and adapted exercise since 2022, I bring both scientific expertise and personal
                        insight to my work. As a former Varsity Shield and U.S. Division II rugby player, I understand the
                        physical demands of performance and the journey through injury recovery.
                      </p>
                    </div>

                    {/* Specialized Experience */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        Specialized Experience
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        My adapted exercise experience includes working at the renowned Center of Achievement in California,
                        where I provided specialized support for individuals with neurological and physical disabilities.
                        I now lead CARE Therapy with a commitment to holistic, evidence-based care that bridges rehabilitation,
                        functional movement, and performance enhancement.
                      </p>
                    </div>

                    {/* Education Credentials */}
                    <div className="pt-6 border-t">
                      <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        Academic Qualifications
                      </h4>
                      <div className="space-y-4">
                        {/* Masters */}
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">Master of Science in Kinesiology</p>
                            <p className="text-sm text-muted-foreground">Specialization: Adapted Physical Activity</p>
                            <p className="text-sm text-muted-foreground">California State University, Northridge, USA</p>
                          </div>
                        </div>

                        {/* Honours */}
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">B.SocSci Honours in Human Kinetics & Ergonomics</p>
                            <p className="text-sm text-muted-foreground">Rhodes University, South Africa</p>
                          </div>
                        </div>

                        {/* Undergraduate */}
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-semibold">B.SocSci in Human Kinetics & Ergonomics and Psychology</p>
                            <p className="text-sm text-muted-foreground">Rhodes University, South Africa</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Credentials Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-8">
              <h4 className="text-center text-lg font-semibold mb-6">Areas of Expertise</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  "Adapted Physical Activity",
                  "Adapted Functional Exercise",
                  "Post-Injury Recovery",
                  "Athletic Performance",
                  "Elderly Care & Mobility",
                  "Movement Assessment",
                  "Strength & Conditioning",
                  "Functional Fitness"
                ].map((expertise, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (index * 0.05) }}
                    className="bg-background rounded-lg p-3 text-center text-sm font-medium"
                  >
                    {expertise}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section id="our-values" className="py-20 px-4">
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
                description: "Using proven adapted approaches",
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
                className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
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
                description: "Guided exercise to restore function and prevent injuries.",
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
                    <Icon className="mx-auto text-primary" size={48} />
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
            initial={{ opacity: 0, }} animate={{ opacity: 1, }} transition={{ duration: 0.3, delay: 0.75, }}
            style={{ pointerEvents: 'auto' }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're recovering from an injury, looking to prevent future issues,
              or wanting to enhance your performance, we're here to help.
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