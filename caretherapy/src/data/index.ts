/**
 * Data Index File
 * 
 * Central export point for all data in the application.
 * Import data from here in your components for consistency.
 * 
 * Example usage:
 * import { getAllPosts, getAllServices } from '@/data';
 */

// Blog Posts
export {
  blogPosts,
  getAllPosts,
  getPostBySlug,
  getFeaturedPost,
  getPostsByCategory,
  getAllCategories,
  getRelatedPosts,
  searchPosts,
  getRandomPost,
  getPopularPosts,
  getRecentPosts
} from './blog-posts';

// Services
export {
  services,
  servicePackages,
  getAllServices,
  getServiceById,
  getFeaturedServices,
  getAllPackages,
  calculatePackageSavings,
  getPopularPackage
} from './services';

// Re-export types
export type { ServicePackage } from './services';