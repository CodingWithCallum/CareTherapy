"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const socialLinks = [
    //{ icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/care_therapy_sa/", label: "Instagram" },
    //{ icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/care-therapy-centre-for-adaptive-rehabilitative-exercise-therapy/", label: "LinkedIn" }
  ];

  const quickLinks = [
    { label: "About Us", href: "/about" },
    { label: "Our Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" }
  ];

  const services = [
    { label: "Therapeutic Exercise", href: "/services#therapeutic-exercise" },
    { label: "Post-Injury Rehabilitation", href: "/services#post-injury-rehabilitation" },
    { label: "Movement Assessment", href: "/services#movement-assessment" },
    { label: "Elderly Care", href: "/services#elderly-care" },
    { label: "Sports Performance", href: "/services#sports-performance" },
    { label: "Mobile Sessions", href: "/services#home-sessions" }
  ];

  return (
    <footer className="relative bg-muted/80 border-t overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 py-12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-primary/10">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-bold">CARE Therapy</h3>
                <span className="text-xs text-muted-foreground">Adapted functional exercise</span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Bridging the gap between rehabilitation and fitness through expert-guided, 
              proactive exercise therapy in real-world settings.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-9 h-9 rounded-lg bg-background border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              Our Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <ul className="space-y-4">
              <li>
                <motion.a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 3 }}
                  className="flex items-start space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <MapPin size={18} className="mt-0.5 flex-shrink-0 group-hover:text-primary" />
                  <span>
                    Mobile service available throughout<br />
                    Johannesburg & surrounding areas
                  </span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="tel:+27797908846"
                  whileHover={{ x: 3 }}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Phone size={18} className="flex-shrink-0 group-hover:text-primary" />
                  <span>+27 79 790 8846</span>
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="mailto:caretherapysa@gmail.co.za"
                  whileHover={{ x: 3 }}
                  className="flex items-center space-x-3 text-sm text-muted-foreground hover:text-primary transition-colors group"
                >
                  <Mail size={18} className="flex-shrink-0 group-hover:text-primary" />
                  <span>caretherapysa@gmail.com</span>
                </motion.a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="pt-8 border-t"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} CARE Therapy. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>•</span>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
              <span>•</span>
              <Link href="/sitemap" className="hover:text-primary transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Credit */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-xs text-muted-foreground text-center mt-4"
          >
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              className="inline-block"
            >
              ❤️
            </motion.span>
            {" "}by{" "}
            <a
              href="https://github.com/CodingWithCallum"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Callum Barry
            </a>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  );
}