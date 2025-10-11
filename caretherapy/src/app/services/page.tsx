"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Clock, DollarSign, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
// Import data from centralized data file
import { getAllServices, getAllPackages, getPopularPackage } from "@/data";

// Import Lucide icons dynamically
import * as Icons from "lucide-react";

export default function ServicesPage() {
  // Get data from data files
  const services = getAllServices();
  const packages = getAllPackages();

  // Helper to get icon component by name
  const getIconComponent = (iconName: string) => {
    const IconComponent = Icons[iconName as keyof typeof Icons] as any;
    return IconComponent || Icons.Activity;
  };

  // Color gradients for each service (cycling through)
  const gradients = [
    "from-blue-500/20 to-blue-600/20",
    "from-red-500/20 to-red-600/20",
    "from-green-500/20 to-green-600/20",
    "from-purple-500/20 to-purple-600/20",
    "from-orange-500/20 to-orange-600/20",
    "from-teal-500/20 to-teal-600/20",
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert-guided exercise therapy and rehabilitation services tailored to your unique needs and goals. 
              We bring evidence-based care directly to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-12">
            {services.map((service, index) => {
              const IconComponent = getIconComponent(service.icon || "Activity");
              const gradient = gradients[index % gradients.length];

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative overflow-hidden rounded-2xl border bg-card hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-50`} />
                  
                  <div className="relative grid md:grid-cols-5 gap-8 p-8 md:p-10">
                    {/* Left Column - Icon and Overview */}
                    <div className="md:col-span-2 space-y-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-primary-foreground">
                        <IconComponent className="w-8 h-8" />
                      </div>
                      
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">
                          {service.title}
                        </h2>
                        <p className="text-muted-foreground text-lg">
                          {service.description}
                        </p>
                      </div>

                      {/* Session Details */}
                      <div className="space-y-3 pt-4 border-t">
                        {service.duration && (
                          <div className="flex items-center gap-3 text-sm">
                            <Clock className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">Duration:</strong> {service.duration}
                            </span>
                          </div>
                        )}
                        {service.price && (
                          <div className="flex items-center gap-3 text-sm">
                            <DollarSign className="w-5 h-5 text-primary" />
                            <span className="text-muted-foreground">
                              <strong className="text-foreground">Investment:</strong> {service.price}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Right Column - Benefits and CTA */}
                    <div className="md:col-span-3 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg font-semibold mb-4">Key Benefits</h3>
                        <ul className="space-y-3 mb-8">
                          {service.features?.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Link href="/contact" className="flex-1">
                          <Button className="w-full group" size="lg">
                            Book This Service
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                        <Link href="/contact">
                          <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            Ask a Question
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Flexible Packages
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Save with our multi-session packages designed for ongoing care and better results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center space-y-4">
                  <h3 className="text-xl font-bold">{pkg.name}</h3>
                  <div>
                    <p className="text-3xl font-bold text-primary">R{pkg.price.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">{pkg.sessions} Sessions</p>
                  </div>
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold">
                    {pkg.discount}% off
                  </div>
                  <p className="text-sm text-muted-foreground pt-4 border-t">
                    {pkg.description}
                  </p>
                  <Link href="/contact" className="block pt-4">
                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? "default" : "outline"}
                    >
                      Select Package
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
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
              Not Sure Which Service is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a free consultation. We'll discuss your goals, assess your needs, 
              and recommend the best service or package for your situation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-base">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-base">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}