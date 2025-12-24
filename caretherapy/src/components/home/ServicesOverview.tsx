"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import data from centralized data file
import { getFeaturedServices } from "@/data";
// Import Lucide icons dynamically
import * as Icons from "lucide-react";

export default function ServicesOverview() {
  // Get first 4 services for home page overview
  const services = getFeaturedServices(4);

  // Helper to get icon component by name
  const getIconComponent = (iconName: string): React.ComponentType<{ className?: string; size?: number }> => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    if (typeof IconComponent === 'function') {
      return IconComponent as React.ComponentType<{ className?: string; size?: number }>;
    }
    return Icons.Activity;
  };

  return (
    <section className="relative py-20 px-4 ">
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
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of exercise and functional adaptive exercise services designed to meet you where you are and to support your unique journey towards growth, moving better and independence. 
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = getIconComponent(service.icon || "Activity");

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card border rounded-xl p-8 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors flex-shrink-0">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">
                        {service.shortDescription || service.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  {service.features && (
                    <ul className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

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
            );
          })}
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