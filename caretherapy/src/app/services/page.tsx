"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Clock, 
  ArrowRight, 
  Check, 
  Star,
  Sparkles,
  Award,
  Dumbbell,
  Heart,
  Activity,
  Users,
  Target,
  MapPin,
  Download,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicesPage() {
  // Pricing packages
  const pricingPackages = [
    {
      id: "intro",
      name: "Start Here",
      subtitle: "Intro Session",
      price: "R600",
      period: "once-off",
      duration: "60 minutes",
      description: "The best way to experience CARE Therapy before committing to a package.",
      features: [
        "Personalised assessment",
        "Tailored exercise/stretch trial session",
        "Recommendations for your recovery or mobility plan"
      ],
      cta: "Book Your Intro Session",
      icon: Sparkles,
      popular: false,
      color: "from-blue-500/20 to-blue-600/20"
    },
    {
      id: "mobility",
      name: "Most Popular",
      subtitle: "CARE Mobility Package",
      price: "R4,400",
      period: "per month",
      commitment: "12-month program",
      sessions: "2x/week, 60-minute sessions",
      description: "Ideal for long-term recovery, chronic conditions, or maintaining independence.",
      features: [
        "Adaptive therapeutic exercise",
        "Strength, flexibility, and balance training",
        "Progress tracking and regular re-assessments"
      ],
      cta: "Get Started",
      icon: Star,
      popular: true,
      color: "from-primary/20 to-primary/30"
    },
    {
      id: "elite",
      name: "Premium",
      subtitle: "CARE Elite Program",
      price: "R6,500",
      period: "per month",
      commitment: "12-month program",
      sessions: "3x/week, 60-minute sessions",
      description: "Best for stroke recovery, post-op rehabilitation, and clients who want maximum results.",
      features: [
        "Intensive personalised support",
        "Faster recovery and results",
        "Includes flexibility/stretching integration"
      ],
      cta: "Choose Elite",
      icon: Award,
      popular: false,
      color: "from-purple-500/20 to-purple-600/20"
    }
  ];

  // Add-on services
  const addOns = [
    {
      name: "Stretch Therapy Sessions",
      price: "from R350",
      duration: "30 min",
      description: "Targeted flexibility and mobility work"
    },
    {
      name: "Flexible Voucher Packs",
      price: "Discounted rates",
      duration: "5 or 10 sessions",
      description: "Pay-as-you-go with savings"
    }
  ];

  // Therapy types
  const therapyTypes = [
    {
      id: "therapeutic-exercise",
      title: "Therapeutic Exercise",
      icon: Dumbbell,
      description: "Personalized exercise programs designed to address specific movement dysfunctions, improve strength, flexibility, and restore optimal physical function.",
      benefits: [
        "Improved strength and flexibility",
        "Enhanced movement patterns",
        "Injury prevention",
        "Pain reduction",
        "Better posture and alignment"
      ],
      idealFor: "Recovery from injury, chronic pain management, movement optimization"
    },
    {
      id: "post-injury-rehabilitation",
      title: "Post-Injury Rehabilitation",
      icon: Heart,
      description: "Guided recovery programs that help you safely return to activities after injury or surgery through progressive loading and movement re-education.",
      benefits: [
        "Structured recovery pathway",
        "Progressive exercise protocols",
        "Movement re-education",
        "Scar tissue management",
        "Return to sport/activity planning"
      ],
      idealFor: "Post-surgery recovery, sports injuries, accident rehabilitation"
    },
    {
      id: "movement-assessment",
      title: "Movement Assessment",
      icon: Activity,
      description: "Comprehensive analysis using evidence-based screening tools to identify compensations, imbalances, and areas of dysfunction.",
      benefits: [
        "Identify movement compensations",
        "Assess strength and flexibility",
        "Postural analysis",
        "Functional movement screening",
        "Personalized recommendations"
      ],
      idealFor: "Initial consultation, performance optimization, injury prevention"
    },
    {
      id: "elderly-care",
      title: "Elderly Care & Mobility",
      icon: Users,
      description: "Specialized programs focused on maintaining and improving mobility, balance, and functional independence for seniors.",
      benefits: [
        "Fall prevention strategies",
        "Balance and coordination training",
        "Strength maintenance",
        "Functional movement for daily activities",
        "Social engagement opportunities"
      ],
      idealFor: "Seniors, chronic conditions, maintaining independence, fall risk reduction"
    },
    {
      id: "sports-performance",
      title: "Sports Performance Enhancement",
      icon: Target,
      description: "Performance programs that help athletes improve physical capabilities, reduce injury risk, and enhance sports-specific skills.",
      benefits: [
        "Sport-specific training",
        "Power and speed development",
        "Injury prevention protocols",
        "Movement optimization",
        "Performance testing and monitoring"
      ],
      idealFor: "Athletes, competitive sports, performance enhancement, injury prevention"
    },
    {
      id: "home-sessions",
      title: "Mobile Home Sessions",
      icon: MapPin,
      description: "Professional Adapted and functional exercise care delivered directly to your home, community setting, or preferred location across Pretoria and Johannesburg.",
      benefits: [
        "No travel required",
        "Familiar environment",
        "Flexible scheduling",
        "Real-world training setting",
        "Family involvement opportunities"
      ],
      idealFor: "Home-bound clients, busy schedules, seniors, convenience"
    }
  ];

  // Why choose CARE
  const whyChoose = [
    {
      icon: Award,
      title: "MSc Kinesiology Specialist",
      description: "Advanced rehabilitative & adapted exercise expertise"
    },
    {
      icon: Users,
      title: "Specialized Focus",
      description: "Adapted to specific client needs and goals to deliver the best possible care"
    },
    {
      icon: MapPin,
      title: "Home Visits Available",
      description: "Service in Pretoria & Johannesburg bring our expertise to your doorstep"
    },
    {
      icon: CheckCircle2,
      title: "Proven Programs",
      description: "Flexibility, balance, strength, and functional independence"
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Our Services & Pricing
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert-guided exercise therapy and rehabilitation services tailored to your unique needs. 
              Choose the package that's right for you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Packages Section */}
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
              Choose Your Package
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Flexible options designed for your recovery journey and goals
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPackages.map((pkg, index) => {
              const Icon = pkg.icon;
              return (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 ${
                    pkg.popular ? "ring-2 ring-primary scale-105 md:scale-110 z-10" : ""
                  }`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-50`} />
                  
                  {/* Popular badge */}
                  {pkg.popular && (
                    <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg text-xs font-semibold">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="relative p-8">
                    {/* Icon */}
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Package name */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-primary uppercase tracking-wider">
                        {pkg.name}
                      </p>
                      <h3 className="text-2xl font-bold">{pkg.subtitle}</h3>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{pkg.price}</span>
                        <span className="text-muted-foreground">/ {pkg.period}</span>
                      </div>
                      {pkg.commitment && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {pkg.commitment}
                        </p>
                      )}
                      {pkg.sessions && (
                        <p className="text-sm font-medium text-primary mt-2">
                          {pkg.sessions}
                        </p>
                      )}
                      {pkg.duration && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {pkg.duration}
                        </p>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mb-6">
                      {pkg.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/contact" className="block">
                      <Button 
                        className="w-full group" 
                        size="lg"
                        variant={pkg.popular ? "default" : "outline"}
                      >
                        {pkg.cta}
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Add-on Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-8 md:p-10"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Add-On Services (Optional)</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {addOns.map((addon, index) => (
                <div key={index} className="bg-card border rounded-xl p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold">{addon.name}</h4>
                    <span className="text-primary font-bold">{addon.price}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{addon.duration}</p>
                  <p className="text-sm text-muted-foreground">{addon.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" className="group">
                <Download className="w-4 h-4 mr-2" />
                Download Full CARE Package Options
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Therapy Types Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Therapy Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive therapeutic approaches tailored to your specific needs
            </p>
          </motion.div>

          <div className="space-y-12">
            {therapyTypes.map((therapy, index) => {
              const Icon = therapy.icon;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={therapy.id}
                  id={therapy.id}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="scroll-mt-24"
                >
                  <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className={`grid md:grid-cols-2 gap-0 ${!isEven ? 'md:flex-row-reverse' : ''}`}>
                      {/* Icon/Visual Side */}
                      <div className={`bg-gradient-to-br from-primary/10 to-primary/5 p-12 flex items-center justify-center ${!isEven ? 'md:order-2' : ''}`}>
                        <div className="text-center">
                          <div className="inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-primary/20 text-primary mb-6">
                            <Icon className="w-12 h-12" />
                          </div>
                          <h3 className="text-2xl font-bold mb-2">{therapy.title}</h3>
                          <p className="text-sm text-primary font-semibold">
                            Ideal for: {therapy.idealFor}
                          </p>
                        </div>
                      </div>

                      {/* Content Side */}
                      <div className={`p-8 md:p-10 ${!isEven ? 'md:order-1' : ''}`}>
                        <p className="text-muted-foreground mb-6 text-lg">
                          {therapy.description}
                        </p>

                        <h4 className="font-semibold mb-4">Key Benefits:</h4>
                        <ul className="space-y-2 mb-6">
                          {therapy.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{benefit}</span>
                            </li>
                          ))}
                        </ul>

                        <Link href="/contact">
                          <Button className="group">
                            Learn More & Book
                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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

      {/* Why Choose CARE Section */}
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
              Why Choose CARE Therapy?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="bg-card border rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your intro session today and experience the CARE Therapy difference. 
              We'll assess your needs and create a personalized plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-base">
                  Book Your Intro Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/testimonials">
                <Button size="lg" variant="outline" className="text-base">
                  View Our Success Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}