/**
 * Blog Analytics - Client-Side View Tracking
 *
 * Uses localStorage to track blog post views.
 * This is privacy-friendly (no external services) and free.
 *
 * Note: View counts are per-browser, not global.
 * For global analytics, use Google Analytics 4.
 */

const STORAGE_KEY = 'caretherapy_blog_views';

export interface ViewData {
  [slug: string]: {
    count: number;
    lastViewed: string;
    firstViewed: string;
  };
}

/**
 * Track a blog post view
 * Increments view count and updates timestamps
 */
export function trackBlogView(slug: string): void {
  if (typeof window === 'undefined') return;

  try {
    const views = getAllViews();
    const now = new Date().toISOString();

    if (views[slug]) {
      // Update existing view
      views[slug] = {
        count: views[slug].count + 1,
        lastViewed: now,
        firstViewed: views[slug].firstViewed,
      };
    } else {
      // First view
      views[slug] = {
        count: 1,
        lastViewed: now,
        firstViewed: now,
      };
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(views));
  } catch (error) {
    // Silently fail if localStorage is blocked
    console.error('Failed to track blog view:', error);
  }
}

/**
 * Get view count for a specific post
 */
export function getPostViews(slug: string): number {
  if (typeof window === 'undefined') return 0;

  try {
    const views = getAllViews();
    return views[slug]?.count || 0;
  } catch {
    return 0;
  }
}

/**
 * Get all view data
 */
export function getAllViews(): ViewData {
  if (typeof window === 'undefined') return {};

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  } catch {
    return {};
  }
}

/**
 * Get most viewed posts
 * Returns array of [slug, count] sorted by view count descending
 */
export function getMostViewedPosts(limit: number = 10): Array<[string, number]> {
  const views = getAllViews();

  return Object.entries(views)
    .map(([slug, data]) => [slug, data.count] as [string, number])
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

/**
 * Get recently viewed posts
 * Returns array of [slug, date] sorted by last viewed descending
 */
export function getRecentlyViewedPosts(limit: number = 5): Array<[string, string]> {
  const views = getAllViews();

  return Object.entries(views)
    .map(([slug, data]) => [slug, data.lastViewed] as [string, string])
    .sort((a, b) => new Date(b[1]).getTime() - new Date(a[1]).getTime())
    .slice(0, limit);
}

/**
 * Clear all view data (for testing or privacy)
 */
export function clearAllViews(): void {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear views:', error);
  }
}

/**
 * Export view data (for backup or migration)
 */
export function exportViews(): string {
  const views = getAllViews();
  return JSON.stringify(views, null, 2);
}

/**
 * Import view data (for restore or migration)
 */
export function importViews(data: string): boolean {
  if (typeof window === 'undefined') return false;

  try {
    const parsed = JSON.parse(data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    return true;
  } catch (error) {
    console.error('Failed to import views:', error);
    return false;
  }
}
