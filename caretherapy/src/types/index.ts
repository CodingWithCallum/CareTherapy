// ============================================
// TYPES FILE - Data Structure Definitions
// ============================================
// This file defines the shape of data used throughout the application.
// Benefits:
// - Type safety: Catch errors before runtime
// - Autocomplete: Better developer experience
// - Documentation: Self-documenting code
// - Consistency: Same data structure everywhere

// --------------------------------------------
// Service Types
// --------------------------------------------
// Defines the structure for therapy services
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string; // Optional: for card previews
  icon?: string; // Optional: icon name from lucide-react
  price?: string; // Optional: e.g., "$100/session"
  duration?: string; // Optional: e.g., "60 minutes"
  features?: string[]; // Optional: list of service features
  image?: string; // Optional: service image URL
}

// --------------------------------------------
// Blog Post Types
// --------------------------------------------
// Defines the structure for blog posts
export interface BlogPost {
  id: string;
  slug: string; // URL-friendly version of title (e.g., "understanding-anxiety")
  title: string;
  excerpt: string; // Short preview text
  content: string; // Full blog post content (can be markdown)
  author: Author;
  publishedAt: Date | string;
  updatedAt?: Date | string; // Optional: when post was last updated
  category: string; // e.g., "Mental Health", "Wellness Tips"
  tags?: string[]; // Optional: e.g., ["anxiety", "coping-strategies"]
  featuredImage?: string; // Optional: main image URL
  readTime?: string; // Optional: e.g., "5 min read"
  featured?: boolean; // Optional: mark as featured post
}

// --------------------------------------------
// Author Types
// --------------------------------------------
// Defines the structure for blog authors/therapists
export interface Author {
  id: string;
  name: string;
  role?: string; // e.g., "Licensed Therapist", "Clinical Psychologist"
  bio?: string; // Short biography
  avatar?: string; // Profile picture URL
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// --------------------------------------------
// Testimonial Types
// --------------------------------------------
// Defines the structure for client testimonials
export interface Testimonial {
  id: string;
  name: string;
  role?: string; // Optional: e.g., "Client", "Patient"
  content: string; // The testimonial text
  rating?: number; // Optional: 1-5 star rating
  avatar?: string; // Optional: profile picture URL
  date?: Date | string; // Optional: when testimonial was given
}

// --------------------------------------------
// Team Member Types
// --------------------------------------------
// Defines the structure for team/staff members
export interface TeamMember {
  id: string;
  name: string;
  role: string; // e.g., "Senior Therapist"
  specializations?: string[]; // e.g., ["Anxiety", "Depression", "PTSD"]
  bio: string;
  image?: string;
  credentials?: string[]; // e.g., ["PhD", "Licensed Clinical Psychologist"]
  yearsOfExperience?: number;
  email?: string;
  phone?: string;
}

// --------------------------------------------
// Contact Form Types
// --------------------------------------------
// Defines the structure for contact form submissions
export interface ContactFormData {
  name: string;
  email: string;
  phone?: string; // Optional
  subject?: string; // Optional
  message: string;
  preferredContactMethod?: "email" | "phone"; // Optional
  agreedToPrivacyPolicy?: boolean; // Optional: for GDPR compliance
}

// --------------------------------------------
// Navigation Types
// --------------------------------------------
// Defines the structure for navigation menu items
export interface NavLink {
  href: string;
  label: string;
  icon?: string; // Optional: icon name
  subLinks?: NavLink[]; // Optional: for dropdown menus
}

// --------------------------------------------
// FAQ Types
// --------------------------------------------
// Defines the structure for Frequently Asked Questions
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string; // Optional: group FAQs by category
}

// --------------------------------------------
// Appointment Types
// --------------------------------------------
// Defines the structure for appointment bookings
export interface Appointment {
  id: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  serviceId: string; // References Service.id
  therapistId?: string; // Optional: References TeamMember.id
  preferredDate: Date | string;
  preferredTime: string;
  notes?: string; // Optional: additional information
  status: "pending" | "confirmed" | "cancelled" | "completed";
}

// --------------------------------------------
// SEO Metadata Types
// --------------------------------------------
// Defines the structure for SEO metadata on pages
export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string; // Open Graph image for social sharing
  canonicalUrl?: string;
}

// --------------------------------------------
// Utility Types
// --------------------------------------------
// Helper types for common patterns

// API Response wrapper
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[];
  totalCount: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Form validation state
export interface FormErrors {
  [key: string]: string | undefined;
}

// --------------------------------------------
// Example Usage in Components:
// --------------------------------------------
/*

import { Service, BlogPost, ContactFormData } from '@/types';

// In a component:
const services: Service[] = [
  {
    id: '1',
    title: 'Individual Therapy',
    description: 'One-on-one sessions...',
    price: '$100/session'
  }
];

const handleSubmit = (data: ContactFormData) => {
  // TypeScript knows exactly what properties data has
  console.log(data.name, data.email, data.message);
};

*/