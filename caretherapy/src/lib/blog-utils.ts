/**
 * Blog Utilities
 * Helper functions for blog post management
 */

/**
 * Calculate reading time based on content length
 * Average reading speed: 200 words per minute
 * @param content - HTML content string
 * @returns Formatted reading time (e.g., "5 min read")
 */
export function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;

  // Strip HTML tags to get plain text
  const textContent = content.replace(/<[^>]*>/g, '');

  // Count words (split by whitespace and filter empty strings)
  const wordCount = textContent.split(/\s+/).filter(word => word.length > 0).length;

  // Calculate minutes (minimum 1 minute)
  const minutes = Math.max(1, Math.ceil(wordCount / wordsPerMinute));

  return `${minutes} min read`;
}

/**
 * Calculate word count of content
 * @param content - HTML content string
 * @returns Number of words
 */
export function getWordCount(content: string): number {
  const textContent = content.replace(/<[^>]*>/g, '');
  return textContent.split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Extract first N characters from HTML content for preview
 * @param content - HTML content string
 * @param length - Maximum length (default: 160 for meta descriptions)
 * @returns Plain text excerpt
 */
export function extractTextExcerpt(content: string, length: number = 160): string {
  const textContent = content.replace(/<[^>]*>/g, '');
  if (textContent.length <= length) {
    return textContent;
  }
  return textContent.substring(0, length).trim() + '...';
}
