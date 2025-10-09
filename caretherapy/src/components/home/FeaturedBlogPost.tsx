"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// This would eventually come from your CMS or database
const featuredPost = {
  slug: "understanding-anxiety-triggers",
  title: "Understanding Anxiety: Common Triggers and Coping Strategies",
  excerpt: "Anxiety affects millions of people worldwide. Learn how to identify your triggers and develop effective coping mechanisms to manage anxiety in your daily life.",
  author: {
    name: "Dr. Sarah Johnson",
    role: "Clinical Psychologist",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  publishedAt: "March 15, 2024",
  readTime: "8 min read",
  category: "Mental Health",
  featuredImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=800&auto=format&fit=crop&q=60",
};

export default function FeaturedBlogPost() {
  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert insights, practical tips, and the latest research in mental health and wellness.
          </p>
        </motion.div>

        {/* Featured Post Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-full overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                  style={{ backgroundImage: `url(${featuredPost.featuredImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{featuredPost.publishedAt}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-3 mb-6 pb-6 border-b">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={featuredPost.author.avatar} alt={featuredPost.author.name} />
                      <AvatarFallback>
                        <User className="w-5 h-5" />
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-sm">{featuredPost.author.name}</p>
                      <p className="text-xs text-muted-foreground">{featuredPost.author.role}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href={`/blog/${featuredPost.slug}`} className="flex-1">
                    <Button className="w-full group/btn" size="lg">
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto">
                      View All Posts
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">
            Want more insights and updates? Subscribe to our newsletter for weekly mental health tips.
          </p>
          <Link href="/blog">
            <Button variant="ghost" className="group">
              Explore More Articles
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}