"use client";

import { motion } from "motion/react";
import { use } from "react";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft, ArrowRight, User, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Import data from centralized data file
import { getPostBySlug, getRelatedPosts } from "@/data";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  
  // Get post data from data file
  const post = getPostBySlug(slug);
  const relatedPosts = getRelatedPosts(slug, 3);

  // If post not found, show 404
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you\'re looking for doesn\'t exist.</p>
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Back Button */}
      <div className="border-b">
        <div className="container mx-auto max-w-4xl px-4 py-6 relative z-50">
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Category Badge */}
            <div className="mb-6">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {post.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 mb-8 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-between pb-8 border-b">
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14">
                  <AvatarImage src={post.author.avatar} />
                  <AvatarFallback>
                    <User className="w-6 h-6" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-lg">{post.author.name}</p>
                  <p className="text-sm text-muted-foreground">{post.author.role}</p>
                </div>
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground mr-2 hidden sm:inline">Share:</span>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      {post.featuredImage && (
        <section className="px-4 mb-12">
          <div className="container mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${post.featuredImage})` }}
              />
            </motion.div>
          </div>
        </section>
      )}

      {/* Article Content */}
<article className="px-4 pb-16">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="prose prose-lg dark:prose-invert max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-foreground/90 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline
              prose-strong:text-foreground prose-strong:font-semibold
              prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
              prose-ol:my-6 prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-foreground/90 prose-li:my-2"
          >
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </motion.div>
        </div>
      </article>

      {/* Author Bio */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border rounded-xl p-8"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <Avatar className="w-20 h-20">
                <AvatarImage src={post.author.avatar} />
                <AvatarFallback>
                  <User className="w-8 h-8" />
                </AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-bold mb-2">About {post.author.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{post.author.role}</p>
                <p className="text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="px-4 py-16">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8">Related Articles</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.div
                    key={relatedPost.slug}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <div className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full">
                        <div className="relative h-40 overflow-hidden">
                          <div 
                            className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                            style={{ backgroundImage: `url(${relatedPost.featuredImage})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        </div>
                        <div className="p-5">
                          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-3">
                            {relatedPost.category}
                          </span>
                          <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h3>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            animate={{ opacity: 1}}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the benefits of therapeutic exercise for yourself. 
              Book a consultation to discuss your goals and how we can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="text-base">
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="text-base">
                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}