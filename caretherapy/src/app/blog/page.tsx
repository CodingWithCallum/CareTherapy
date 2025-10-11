"use client";

import { motion } from "motion/react";
import { useState } from "antml:parameter>
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Search, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// Import data from centralized data file
import { getAllPosts, getFeaturedPost, getAllCategories } from "@/data";

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get data from data files
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const featuredPost = getFeaturedPost();

  // Filter posts based on category and search
  const filteredPosts = allPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              Our Blog
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Expert insights, practical tips, and the latest in therapeutic exercise and rehabilitation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 px-4 border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && selectedCategory === "All" && !searchQuery && (
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="h-1 w-12 bg-primary rounded-full" />
                <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Featured Article
                </span>
              </div>

              <Link href={`/blog/${featuredPost.slug}`}>
                <div className="bg-card border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-full overflow-hidden">
                      <div 
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                        style={{ backgroundImage: `url(${featuredPost.featuredImage})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                          {featuredPost.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 md:p-10 flex flex-col justify-between">
                      <div>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6">
                          {featuredPost.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{featuredPost.readTime}</span>
                          </div>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-3 pb-6 border-b">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={featuredPost.author.avatar} />
                            <AvatarFallback>
                              <User className="w-5 h-5" />
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold text-sm">{featuredPost.author.name}</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Button className="group/btn">
                          Read Full Article
                          <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No articles found. Try adjusting your search or filters.
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <article className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 group h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden">
                        <div 
                          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url(${post.featuredImage})` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                            <Tag className="w-3 h-3" />
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-1">
                        <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Meta */}
                        <div className="flex items-center justify-between pt-4 border-t text-xs text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3" />
                            <span>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>

                        {/* Author */}
                        <div className="flex items-center gap-2 mt-4">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={post.author.avatar} />
                            <AvatarFallback>
                              <User className="w-4 h-4" />
                            </AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">{post.author.name}</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-primary/5 border border-primary/20 rounded-2xl p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest articles, tips, and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all bg-background"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}