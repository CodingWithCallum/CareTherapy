"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { 
  Star,
  Quote,
  ArrowRight,
  Filter,
  TrendingUp,
  Heart,
  Users,
  Activity,
  Award,
  MapPin,
  Calendar
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Categories for filtering
  const categories = [
    { id: "All", name: "All Stories", icon: Users },
    { id: "Elderly", name: "Elderly Care", icon: Heart },
    { id: "Rehabilitation", name: "Post-Injury", icon: Activity },
    { id: "Performance", name: "Sports Performance", icon: TrendingUp },
    { id: "Chronic", name: "Chronic Conditions", icon: Award },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Nick Rogan",
      role: "Account Executive",
      category: "Rehabilitation",
      location: "Johannesburg",
      image: "", //https://api.dicebear.com/7.x/avataaars/svg?seed=Nick
      rating: 5,
      date: "2024-10",
      program: "CARE Elite Program",
      condition: "Running Injury Recovery",
      testimonial: "I had an excellent experience with CARE Therapy. I worked with Cameron on a tailored rehabilitation program for my leg, after a fall whilst running, and the results have been outstanding. Their evidence based approach and attention to detail made a significant difference in my recovery. The exercises were well structured, easy to follow, and adapted to my specific needs. My leg feels much better, and I've gained both strength and confidence in my movement. I highly recommend CARE Therapy for anyone seeking professional, personalized rehabilitative care.",
      highlights: [
        "Evidence-based approach",
        "Well-structured exercises",
        "Personalized care",
        "Significant recovery progress"
      ]
    },
    {
      id: 2,
      name: "Callum Barry",
      role: "Software Developer",
      category: "Performance",
      location: "Pretoria",
      image: "", //https://api.dicebear.com/7.x/avataaars/svg?seed=Callum
      rating: 5,
      date: "2024-09",
      program: "CARE Mobility Package",
      condition: "Return to Running Program",
      testimonial: "Cameron helped me start my training plan to rebuild my running strength after a period of time away from running due to injury. Within weeks, I noticed significant improvements and recently started to run more freely with less pain. His insights into running form and strength training have been invaluable. I highly recommend him to anyone looking to improve their performance or return from injury.",
      highlights: [
        "Quick improvements",
        "Expert form guidance",
        "Strength training focus",
        "Pain-free running return"
      ]
    },
    {
      id: 3,
      name: "Joan",
      role: "Retired",
      category: "Elderly",
      location: "Johannesburg",
      image: "", //https://api.dicebear.com/7.x/avataaars/svg?seed=Joan
      rating: 5,
      date: "2024-08",
      program: "CARE Elite Program",
      condition: "Balance & Mobility",
      testimonial: "Before working with Cameron, I had been living with vertigo and drop foot. I was unsteady and becoming increasingly reliant on my cane for walking. Since starting our Adapted Exercise sessions, my balance and walking have improved so much that I now only use my cane occasionally. I feel stronger, more stable, and more confident moving throughout my day. I'm also sleeping better, feeling more positive, and experiencing far less pain.",
      highlights: [
        "Reduced cane dependency",
        "Improved balance significantly",
        "Better sleep quality",
        "Increased confidence"
      ]
    },
    {
      id: 4,
      name: "Tara Pohl",
      role: "Medical Officer - Intern",
      category: "Performance",
      location: "Pretoria",
      image: "", //https://api.dicebear.com/7.x/avataaars/svg?seed=Tara
      rating: 5,
      date: "2024-11",
      program: "CARE Mobility Package",
      condition: "Sports Injury Recovery",
      testimonial: "Cameron has been instrumental in my recovery from a sports injury. His expertise in rehabilitation and personalized training plans have made a significant difference in my progress readying myself for my next trail run later this year. I highly recommend him to anyone looking to improve their fitness or recover from an injury.",
      highlights: [
        "Expert rehabilitation",
        "Personalized training",
        "Trail run preparation",
        "Comprehensive recovery"
      ]
    }
  ];

  // Filter testimonials
  const filteredTestimonials = selectedCategory === "All" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  // Stats for hero section
  const stats = [
    { icon: Users, value: "100+", label: "Happy Clients" },
    { icon: Star, value: "5.0", label: "Average Rating" },
    { icon: TrendingUp, value: "95%", label: "Success Rate" },
    { icon: Award, value: "8+", label: "Years Experience" },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-20 pb-10 px-4 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Client Success Stories
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Real experiences from real people. Discover how CARE Therapy has helped clients 
              achieve their health and movement goals.
            </p>
          </motion.div>

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-card border rounded-xl p-6 text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-3">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              );
            })}
          </div> */}
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 border-b sticky top-20 z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center gap-4 overflow-x-auto pb-2">
            {/* <Filter className="w-5 h-5 text-muted-foreground flex-shrink-0" /> */}
            <div className="flex gap-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                      selectedCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted hover:bg-muted/80"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {filteredTestimonials.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No testimonials found in this category.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-14 h-14">
                        <AvatarImage src={testimonial.image} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <MapPin className="w-3 h-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{testimonial.location}</span>
                        </div>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-primary/20" />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Program & Condition Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                      <Activity className="w-3 h-3" />
                      {testimonial.program}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-muted text-foreground text-xs font-semibold rounded-full">
                      {testimonial.condition}
                    </span>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Highlights */}
                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase tracking-wider">
                      Key Results:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {testimonial.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="text-xs text-muted-foreground">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t">
                    <Calendar className="w-3 h-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {new Date(testimonial.date).toLocaleDateString('en-US', { 
                        month: 'long', 
                        year: 'numeric' 
                      })}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Video Testimonials Section (Placeholder) */}
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
              See Their Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch video testimonials from clients sharing their transformation stories
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary border-b-8 border-b-transparent ml-1" />
                  </div>
                  <div className="absolute top-4 right-4 px-2 py-1 bg-background/80 backdrop-blur rounded text-xs font-semibold">
                    {item}:32
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2">Coming Soon</h3>
                  <p className="text-sm text-muted-foreground">
                    Video testimonials will be added here soon
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            animate={{ opacity: 1}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-12"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our Success Stories
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Every client's journey is unique, but they all share one thing in common: 
                  a commitment to improving their health and movement. Your success story could be next.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Evidence-based, personalized programs",
                    "MSc Kinesiology specialist",
                    "Flexible home visit options",
                    "Proven track record of results"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                        <Star className="w-3 h-3 text-primary fill-primary" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card border rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
                <p className="text-muted-foreground mb-6">
                  Book your R600 intro session and experience the difference personalized 
                  therapeutic exercise can make in your life.
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="block">
                    <Button size="lg" className="w-full">
                      Book Your Intro Session
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/services" className="block">
                    <Button size="lg" variant="outline" className="w-full">
                      View Our Programs
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Share Your Story CTA */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            animate={{ opacity: 1 }}
            className="bg-card border rounded-2xl p-12 text-center"
          >
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Current Client?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We'd love to hear about your experience! Your story could inspire others 
              to take the first step toward better health and movement.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Share Your Story
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}