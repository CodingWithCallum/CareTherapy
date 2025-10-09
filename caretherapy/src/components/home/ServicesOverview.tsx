"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { User, Users, Home, UsersRound, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: User,
    title: "Individual Therapy",
    description: "One-on-one sessions focused on your personal growth, mental health, and well-being.",
    features: ["Anxiety & Depression", "Stress Management", "Personal Development"],
  },
  {
    icon: Users,
    title: "Couples Therapy",
    description: "Strengthen your relationship through improved communication and conflict resolution.",
    features: ["Communication Skills", "Conflict Resolution", "Intimacy Building"],
  },
  {
    icon: Home,
    title: "Family Therapy",
    description: "Create harmony and understanding within your family dynamic and relationships.",
    features: ["Family Dynamics", "Parenting Support", "Generational Healing"],
  },
  {
    icon: UsersRound,
    title: "Group Therapy",
    description: "Connect with others facing similar challenges in a supportive group environment.",
    features: ["Peer Support", "Shared Experiences", "Community Building"],
  },
];

export default function ServicesOverview() {
  return (
    <section className="relative py-20 px-4 bg-muted/30">
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
            Our Therapy Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of therapeutic services designed to meet you where you are 
            and support your unique journey toward healing and growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <Link 
                  href="/services" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-sm font-medium group"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Link href="/services">
            <Button size="lg" variant="default" className="text-base">
              View All Services
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}