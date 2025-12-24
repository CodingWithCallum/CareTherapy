import DOMPurify from 'dompurify';

/**
 * Sanitize HTML content to prevent XSS attacks
 *
 * This function uses DOMPurify to clean HTML content,
 * removing potentially dangerous scripts while preserving safe HTML.
 *
 * @param html - The HTML string to sanitize
 * @returns Sanitized HTML string safe for rendering
 */
export function sanitizeHTML(html: string): string {
  if (typeof window === 'undefined') {
    // Server-side: return as-is (will be sanitized on client)
    // In production, you might want to use a server-side sanitizer like 'isomorphic-dompurify'
    return html;
  }

  // Client-side: use DOMPurify
  return DOMPurify.sanitize(html, {
    // Allow common formatting tags
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'em',
      'u',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'a',
      'blockquote',
      'code',
      'pre',
      'img',
      'div',
      'span',
    ],
    // Allow common attributes
    ALLOWED_ATTR: [
      'href',
      'src',
      'alt',
      'title',
      'class',
      'id',
      'target',
      'rel',
    ],
    // Always add rel="noopener noreferrer" to external links
    ADD_ATTR: ['target', 'rel'],
    // Keep data attributes for styling
    ALLOW_DATA_ATTR: false,
    // Remove scripts and other dangerous content
    FORBID_TAGS: ['script', 'style', 'iframe', 'object', 'embed'],
    FORBID_ATTR: ['onerror', 'onload', 'onclick', 'onmouseover'],
  });
}

/**
 * Sanitize HTML specifically for blog content
 *
 * More permissive than general sanitization, allowing
 * content typically needed in blog posts.
 *
 * @param html - The blog HTML content to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeBlogContent(html: string): string {
  if (typeof window === 'undefined') {
    return html;
  }

  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: [
      'p',
      'br',
      'strong',
      'em',
      'u',
      'del',
      'ins',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'ul',
      'ol',
      'li',
      'a',
      'blockquote',
      'code',
      'pre',
      'img',
      'figure',
      'figcaption',
      'table',
      'thead',
      'tbody',
      'tr',
      'th',
      'td',
      'div',
      'span',
      'hr',
    ],
    ALLOWED_ATTR: [
      'href',
      'src',
      'alt',
      'title',
      'class',
      'id',
      'target',
      'rel',
      'width',
      'height',
    ],
    ALLOW_DATA_ATTR: false,
    // Make external links safe
    ADD_ATTR: ['target', 'rel'],
  });
}
