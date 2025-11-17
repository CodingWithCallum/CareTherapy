"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";
import { 
  ChevronDown, 
  Search,
  ArrowRight,
  Mail,
  Phone,
  Clock,
  MapPin,
  CreditCard,
  Shield,
  Users,
  Calendar,
  Activity,
  Heart,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // FAQ Categories
  const categories = [
    { id: "All", name: "All Questions", icon: HelpCircle },
    { id: "Services", name: "Services & Programs", icon: Activity },
    { id: "Pricing", name: "Pricing & Payment", icon: CreditCard },
    { id: "Booking", name: "Booking & Scheduling", icon: Calendar },
    { id: "Medical", name: "Medical & Health", icon: Heart },
    { id: "General", name: "General Info", icon: Users },
  ];

  // FAQ Data
  const faqs = [
    // Services & Programs
    {
      category: "Services",
      question: "What is the difference between CARE Therapy and physiotherapy?",
      answer: "While physiotherapy typically focuses on acute injuries and short-term treatment, CARE Therapy emphasizes long-term movement health, preventative care, and performance enhancement. We bridge the gap between rehabilitation and fitness through expert-guided, adaptive therapeutic exercise programs designed for sustainable results."
    },
    {
      category: "Services",
      question: "What does the Intro Session include?",
      answer: "The R600 Intro Session is a comprehensive 60-minute appointment that includes: a personalized assessment of your movement patterns, strength, flexibility, and balance; a tailored exercise/stretch trial session designed for your specific needs; and detailed recommendations for your recovery or mobility plan. This is the best way to experience CARE Therapy before committing to a longer program."
    },
    {
      category: "Services",
      question: "Which package is right for me?",
      answer: "It depends on your goals and needs:\n\n• **Intro Session (R600)**: Perfect if you\'re new and want to try before committing\n• **CARE Mobility Package (R4,400/month)**: Ideal for long-term recovery, chronic conditions, or maintaining independence with 2x/week sessions\n• **CARE Elite Program (R6,500/month)**: Best for stroke recovery, post-op rehabilitation, or clients wanting maximum results with 3x/week intensive support\n\nWe\'ll help you choose the right option during your intro session."
    },
    {
      category: "Services",
      question: "Do you offer home visits?",
      answer: "Yes! We provide mobile services throughout Pretoria and Johannesburg. We bring all necessary equipment to your home, making it convenient and comfortable for you to receive professional therapeutic care in your familiar environment."
    },
    {
      category: "Services",
      question: "What conditions do you treat?",
      answer: "We work with a wide range of conditions including:\n• Chronic pain and movement dysfunction\n• Post-surgery rehabilitation\n• Stroke recovery\n• Balance and fall prevention (elderly care)\n• Sports injuries and performance enhancement\n• Mobility limitations\n• Postural problems\n• General weakness or deconditioning\n\nIf you\'re unsure whether we can help with your specific condition, please contact us for a consultation."
    },
    
    // Pricing & Payment
    {
      category: "Pricing",
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including bank transfers (EFT), credit/debit cards, and cash. Payment is typically due at the time of service or can be arranged on a monthly billing cycle for package clients."
    },
    {
      category: "Pricing",
      question: "Do you accept medical aid?",
      answer: "Yes, we work with most major medical aid providers. We can provide you with an invoice and necessary documentation to submit to your medical aid for reimbursement. Please check with your specific medical aid regarding coverage for exercise therapy services. We recommend contacting them before your first session to understand your benefits."
    },
    {
      category: "Pricing",
      question: "Is there a cancellation fee?",
      answer: "We require 24 hours notice for cancellations. Cancellations made with less than 24 hours notice may be charged at 50% of the session fee. This policy helps us maintain our scheduling efficiency and serve all our clients effectively."
    },
    {
      category: "Pricing",
      question: "What are the Flexible Voucher Packs?",
      answer: "Flexible Voucher Packs allow you to purchase 5 or 10 sessions at discounted rates without committing to a monthly program. These are perfect if you:\n• Prefer pay-as-you-go flexibility\n• Need occasional sessions rather than regular weekly appointments\n• Want to save compared to single-session pricing\n• Are transitioning from a structured program to maintenance\n\nContact us for current voucher pack pricing and terms."
    },
    {
      category: "Pricing",
      question: "Are there discounts for long-term commitments?",
      answer: "Yes! Our 12-month programs (CARE Mobility Package and CARE Elite Program) offer significant savings compared to paying per session. Additionally, we offer:\n• Flexible Voucher Packs at discounted rates\n• Family/couple packages (inquire for details)\n• Potential medical aid reimbursement\n\nThe longer your commitment, the more value you receive."
    },
    
    // Booking & Scheduling
    {
      category: "Booking",
      question: "How do I book my first appointment?",
      answer: "Booking is easy! You can:\n• Fill out the contact form on our website\n• Call us directly at +27 76 456 7890\n• Email us at info@caretherapy.co.za\n• Click the \'Request A Consultation\' button in the navigation\n\nWe\'ll respond within 24 hours during business days to schedule your intro session at a time that works for you."
    },
    {
      category: "Booking",
      question: "What are your business hours?",
      answer: "Our service hours are:\n• Monday - Friday: 7:00 AM - 7:00 PM\n• Saturday: 8:00 AM - 2:00 PM\n• Sunday: Closed\n\nWe offer flexible scheduling including early morning and evening appointments to accommodate your schedule. Home visit appointments can be arranged within these hours."
    },
    {
      category: "Booking",
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-5 days in advance, especially for home visits. However, we\'ll do our best to accommodate urgent needs. For package clients with regular weekly sessions, we\'ll establish a consistent schedule that works for both parties."
    },
    {
      category: "Booking",
      question: "Can I change my appointment time?",
      answer: "Yes, you can reschedule appointments with 24 hours notice. Please contact us as soon as possible if you need to change your appointment. We\'ll work with you to find an alternative time that fits your schedule."
    },
    {
      category: "Booking",
      question: "What happens if I need to pause my program?",
      answer: "We understand that life circumstances can change. For monthly package clients, we can arrange a temporary pause for medical reasons, travel, or other circumstances. Please discuss your situation with us, and we\'ll work out the best solution. Note that the 12-month programs are designed for consistent progress, so extended breaks may affect your results."
    },
    
    // Medical & Health
    {
      category: "Medical",
      question: "Do I need a referral from my doctor?",
      answer: "No, you don\'t need a doctor\'s referral to start with CARE Therapy. However, if you\'re recovering from surgery, have a serious medical condition, or are claiming through medical aid, we recommend getting a referral as it may:\n• Help with medical aid claims\n• Ensure we have complete information about your condition\n• Demonstrate medical necessity for insurance purposes\n\nWe\'ll assess your needs during the intro session and recommend if medical clearance would be beneficial."
    },
    {
      category: "Medical",
      question: "What qualifications does the therapist have?",
      answer: "Our lead therapist holds an MSc in Kinesiology with specialized training in:\n• Advanced rehabilitation and adapted exercise\n• Chronic condition management\n• Stroke recovery protocols\n• Elderly care and fall prevention\n• Sports performance and injury prevention\n\nWe maintain continuing education to stay current with the latest evidence-based practices in therapeutic exercise."
    },
    {
      category: "Medical",
      question: "Is exercise therapy safe for seniors?",
      answer: "Absolutely! In fact, appropriate exercise is one of the most beneficial things seniors can do for their health. Our programs are specifically designed for elderly clients, focusing on:\n• Fall prevention and balance training\n• Maintaining functional independence\n• Safe, progressive strengthening\n• Flexibility and mobility maintenance\n• Social engagement and mental well-being\n\nWe carefully assess each individual and adapt exercises to their current abilities and limitations."
    },
    {
      category: "Medical",
      question: "Can you help with chronic pain?",
      answer: "Yes! Therapeutic exercise is highly effective for managing many types of chronic pain. Through:\n• Movement pattern correction\n• Strengthening weak areas\n• Improving flexibility and mobility\n• Addressing postural issues\n• Progressive, pain-free exercise protocols\n\nMany of our clients experience significant pain reduction and improved function. However, we\'ll refer you to appropriate medical professionals if we identify issues beyond our scope."
    },
    {
      category: "Medical",
      question: "What should I wear to sessions?",
      answer: "Wear comfortable, loose-fitting athletic clothing that allows free movement. For home sessions:\n• Athletic shorts or comfortable pants\n• T-shirt or tank top\n• Athletic shoes or trainers\n• Have water available\n\nFor studio sessions (if applicable), the same dress code applies. We want you to be comfortable and able to move freely during exercises."
    },
    
    // General Info
    {
      category: "General",
      question: "What areas do you serve?",
      answer: "We provide mobile services throughout:\n• Pretoria and surrounding areas\n• Johannesburg and surrounding areas\n\nOur home visit service means you don\'t need to travel. We bring our expertise and equipment directly to you. If you\'re outside these areas, contact us to discuss possibilities."
    },
    {
      category: "General",
      question: "How long are sessions?",
      answer: "Session lengths vary by service:\n• Intro Session: 60 minutes\n• Standard Package Sessions: 60 minutes\n• Stretch Therapy Add-on: 30 minutes\n• Movement Assessment: 60-90 minutes\n\nWe focus on quality over quantity, ensuring each session is productive and tailored to your needs."
    },
    {
      category: "General",
      question: "Will I get homework exercises?",
      answer: "Yes! An important part of your program includes exercises to do between sessions. These:\n• Reinforce what we work on during sessions\n• Accelerate your progress\n• Build consistent habits\n• Are tailored to your schedule and abilities\n• Come with clear instructions and modifications\n\nWe\'ll demonstrate each exercise and provide written/video instructions for reference."
    },
    {
      category: "General",
      question: "How quickly will I see results?",
      answer: "Results vary depending on your starting point, goals, and consistency. Generally:\n• **Immediate**: Many clients feel better after their first session\n• **2-4 weeks**: Noticeable improvements in pain, mobility, or strength\n• **6-12 weeks**: Significant functional improvements\n• **3-6 months**: Substantial progress toward major goals\n\nConsistency is key! Regular sessions combined with homework exercises produce the best outcomes. The 12-month programs are designed to create lasting, sustainable changes."
    },
    {
      category: "General",
      question: "Can family members join sessions?",
      answer: "Yes! We encourage family involvement, especially for elderly clients or those recovering from significant injuries. Family members can:\n• Learn exercises to help between sessions\n• Provide encouragement and support\n• Better understand the recovery process\n• Participate in certain activities (inquire about family/couple packages)\n\nLet us know if you\'d like family members involved, and we\'ll accommodate accordingly."
    },
    {
      category: "General",
      question: "What if I\'m not seeing progress?",
      answer: "Communication is crucial. If you\'re not seeing expected progress, we\'ll:\n• Reassess your program and adjust exercises\n• Review your homework compliance and technique\n• Consider if frequency needs to increase\n• Check for other factors affecting progress\n• Refer to other specialists if needed\n\nYour success is our priority. We include regular re-assessments to track progress and make necessary adjustments to keep you on track toward your goals."
    }
  ];

  // Filter FAQs based on search and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch = 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Group FAQs by category for display
  const groupedFaqs = categories
    .filter(cat => cat.id !== "All")
    .map(cat => ({
      ...cat,
      faqs: filteredFaqs.filter(faq => faq.category === cat.id)
    }))
    .filter(group => group.faqs.length > 0);

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
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Find answers to common questions about CARE Therapy services, pricing, and programs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 border-b sticky top-20 bg-background/95 backdrop-blur z-40">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col gap-6">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${
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

      {/* FAQ Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12">
              <HelpCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">
                No questions found matching your search. Try different keywords or browse all categories.
              </p>
            </div>
          ) : selectedCategory === "All" ? (
            // Show grouped by category when "All" is selected
            <div className="space-y-12">
              {groupedFaqs.map((group, groupIndex) => {
                const Icon = group.icon;
                return (
                  <motion.div
                    key={group.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: groupIndex * 0.1 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h2 className="text-2xl font-bold">{group.name}</h2>
                    </div>

                    <Accordion type="single" collapsible className="space-y-4">
                      {group.faqs.map((faq, index) => (
                        <AccordionItem 
                          key={index} 
                          value={`${group.id}-${index}`}
                          className="bg-card border rounded-xl px-6 overflow-hidden"
                        >
                          <AccordionTrigger className="hover:no-underline py-6">
                            <span className="text-left font-semibold">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 text-muted-foreground whitespace-pre-line">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </motion.div>
                );
              })}
            </div>
          ) : (
            // Show single category results
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-card border rounded-xl px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="hover:no-underline py-6">
                      <span className="text-left font-semibold">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground whitespace-pre-line">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          )}
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Can\'t find what you\'re looking for? We\'re here to help!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                title: "Call Us",
                content: "+27 76 456 7890",
                description: "Mon-Fri: 7am-7pm",
                href: "tel:+27764567890"
              },
              {
                icon: Mail,
                title: "Email Us",
                content: "info@caretherapy.co.za",
                description: "Response within 24hrs",
                href: "mailto:info@caretherapy.co.za"
              },
              {
                icon: Calendar,
                title: "Book a Session",
                content: "Schedule Now",
                description: "Start your journey",
                href: "/contact"
              },
              {
                icon: MapPin,
                title: "Service Areas",
                content: "Pretoria & JHB",
                description: "Mobile home visits",
                href: "/services"
              }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <div className="bg-card border rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 group h-full">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-primary mb-1">{item.content}</p>
                      <p className="text-xs text-muted-foreground">{item.description}</p>
                    </div>
                  </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your R600 intro session today and experience the CARE Therapy difference. 
              No long-term commitment required!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-base">
                  Book Your Intro Session
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base">
                  View All Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}