/**
 * SEO Configuration
 * Centralized SEO settings for the entire website
 */

export const SITE_CONFIG = {
  name: 'CARE Therapy',
  fullName: 'Centre for Adaptive Rehabilitative Exercise Therapy',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://caretherapy.co.za',
  description: 'Expert exercise therapy and rehabilitation services in Paarl and Val de Vie. Specializing in assisted stretching, older adults wellness, high-performance coaching, and mobile rehabilitation.',
  locale: 'en_ZA',
  keywords: [
    'exercise therapy Paarl',
    'rehabilitation services Western Cape',
    'mobile assisted stretching Paarl',
    'elderly mobility training',
    'sports injury prevention',
    'adaptive exercise programs',
    'post-surgery rehabilitation',
    'therapeutic exercise',
    'movement assessment',
    'home exercise therapy',
  ],
  author: 'CARE Therapy',
} as const;

export const DEFAULT_OG_IMAGE = '/logo.png';

export const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/care_therapy_sa/',
  linkedin: 'https://www.linkedin.com/company/care-therapy-centre-for-adaptive-rehabilitative-exercise-therapy/',
} as const;

/**
 * Generate SEO-optimized page title
 */
export function generateTitle(pageTitle?: string): string {
  if (!pageTitle) {
    return `${SITE_CONFIG.name} | Professional Exercise and Rehabilitation Services`;
  }
  return `${pageTitle} | ${SITE_CONFIG.name}`;
}

/**
 * Generate canonical URL for a page
 */
export function generateCanonicalUrl(path: string): string {
  // Remove trailing slash and ensure leading slash
  const cleanPath = path === '/' ? '' : path.replace(/\/$/, '');
  return `${SITE_CONFIG.url}${cleanPath}`;
}

/**
 * Generate Open Graph image URL
 */
export function generateOgImageUrl(imagePath?: string): string {
  if (!imagePath) {
    return `${SITE_CONFIG.url}${DEFAULT_OG_IMAGE}`;
  }

  // If external URL, return as-is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  // If local path, prepend site URL
  return `${SITE_CONFIG.url}${imagePath}`;
}
