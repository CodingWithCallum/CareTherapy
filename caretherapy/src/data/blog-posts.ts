import { BlogPost } from "@/types";
import { calculateReadingTime } from "@/lib/blog-utils";
import { getMostViewedPosts, getAllViews } from "@/lib/blog-analytics";

/**
 * Blog Posts Data File
 * 
 * This file contains all blog post data for the CARE Therapy website.
 * Each post follows the BlogPost type defined in /types/index.ts
 * 
 * To add a new blog post:
 * 1. Copy an existing post object
 * 2. Update all fields with new content
 * 3. Ensure the slug is unique and URL-friendly
 * 4. Update the publishedAt date
 * 5. Choose appropriate category and tags
 */

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "coming-soon",
    title: "Coming Soon",
    excerpt: "Watch this space for expert insights on movement, recovery, and performance.",
    content: "<p>We are working on bringing you valuable content. Check back soon!</p>",
    author: {
      id: "cameron",
      name: "Cameron",
      role: "Founder & Adapted Exercise Specialist",
      bio: "Founder of CARE Therapy with a strong foundation in rehabilitative and adapted movement.",
      avatar: "/cameron_libera_linkedin.jpeg",
    },
    publishedAt: "2024-03-20",
    category: "General",
    tags: ["coming soon"],
    featuredImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&auto=format&fit=crop&q=60",
    readTime: "1 min read",
    featured: true,
  }
];

/**
 * Helper Functions for Blog Data
 */

// Get all blog posts with auto-calculated reading time
export const getAllPosts = (): BlogPost[] => {
  return blogPosts
    .map(post => ({
      ...post,
      readTime: calculateReadingTime(post.content)
    }))
    .sort((a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
};

// Get a single post by slug with auto-calculated reading time
export const getPostBySlug = (slug: string): BlogPost | undefined => {
  const post = blogPosts.find(post => post.slug === slug);
  if (!post) return undefined;

  return {
    ...post,
    readTime: calculateReadingTime(post.content)
  };
};

// Get featured post with auto-calculated reading time
export const getFeaturedPost = (): BlogPost | undefined => {
  const post = blogPosts.find(post => post.featured);
  if (!post) return undefined;

  return {
    ...post,
    readTime: calculateReadingTime(post.content)
  };
};

// Get posts by category with auto-calculated reading time
export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return getAllPosts();
  return blogPosts
    .filter(post => post.category === category)
    .map(post => ({
      ...post,
      readTime: calculateReadingTime(post.content)
    }));
};

// Get all unique categories
export const getAllCategories = (): string[] => {
  const categories = blogPosts.map(post => post.category);
  return ["All", ...Array.from(new Set(categories))];
};

// Get related posts (by category, excluding current post) with auto-calculated reading time
export const getRelatedPosts = (currentSlug: string, limit: number = 3): BlogPost[] => {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post =>
      post.slug !== currentSlug &&
      post.category === currentPost.category
    )
    .map(post => ({
      ...post,
      readTime: calculateReadingTime(post.content)
    }))
    .slice(0, limit);
};

/**
 * Get a random blog post for "I'm Feeling Lucky" with auto-calculated reading time
 */
export const getRandomPost = (): BlogPost | undefined => {
  if (blogPosts.length === 0) return undefined;
  const randomIndex = Math.floor(Math.random() * blogPosts.length);
  const post = blogPosts[randomIndex];

  return {
    ...post,
    readTime: calculateReadingTime(post.content)
  };
};

/**
 * Get most popular posts based on actual view counts
 * Falls back to recent posts if no view data exists
 * @param limit - Number of posts to return
 */
export const getPopularPosts = (limit: number = 6): BlogPost[] => {
  // Get view data from localStorage
  const viewData = getAllViews();
  const hasViewData = Object.keys(viewData).length > 0;

  if (hasViewData) {
    // Sort by actual view counts
    const mostViewedSlugs = getMostViewedPosts(limit);

    // Map slugs to full post objects
    const popularPosts: BlogPost[] = [];
    for (const [slug] of mostViewedSlugs) {
      const post = blogPosts.find(p => p.slug === slug);
      if (post) {
        popularPosts.push({
          ...post,
          readTime: calculateReadingTime(post.content)
        });
      }
    }
    return popularPosts;
  }

  // Fallback: return most recent posts if no view data
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map(post => ({
      ...post,
      readTime: calculateReadingTime(post.content)
    }))
    .slice(0, limit);
};

/**
 * Get recent posts with auto-calculated reading time
 * @param limit - Number of posts to return
 */
export const getRecentPosts = (limit: number = 6): BlogPost[] => {
  return blogPosts
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .map(post => ({
      ...post,
      readTime: calculateReadingTime(post.content)
    }))
    .slice(0, limit);
};

// Search posts by query with auto-calculated reading time
export const searchPosts = (query: string): BlogPost[] => {
  const lowercaseQuery = query.toLowerCase();
  return blogPosts
    .filter(post =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
    .map(post => ({
      ...post,
      readTime: calculateReadingTime(post.content)
    }));
};