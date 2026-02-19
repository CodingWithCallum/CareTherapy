/**
 * Blog Utilities
 * Helper functions for blog post management
 */

/**
 * Average reading speed: 200 words per minute
 */
const WORDS_PER_MINUTE = 200;

/**
 * Calculate reading time from plain text
 * @param text - Plain text string
 * @returns Formatted reading time (e.g., "5 min read")
 */
export function calculateReadingTimeFromText(text: string): string {
  const wordCount = getWordCountFromText(text);
  const minutes = Math.max(1, Math.ceil(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}

/**
 * Calculate word count from plain text
 * @param text - Plain text string
 * @returns Number of words
 */
export function getWordCountFromText(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Calculate reading time based on content length
 * Average reading speed: 200 words per minute
 * @param content - HTML content string
 * @returns Formatted reading time (e.g., "5 min read")
 */
export function calculateReadingTime(content: string): string {
  // Strip HTML tags to get plain text
  const textContent = content.replace(/<[^>]*>/g, '');
  return calculateReadingTimeFromText(textContent);
}

/**
 * Calculate word count of content
 * @param content - HTML content string
 * @returns Number of words
 */
export function getWordCount(content: string): number {
  const textContent = content.replace(/<[^>]*>/g, '');
  return getWordCountFromText(textContent);
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
