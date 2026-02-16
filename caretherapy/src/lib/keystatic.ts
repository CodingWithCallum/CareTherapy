/**
 * Keystatic Reader Utility
 * 
 * Server-side only — uses the Keystatic Reader API to read .mdoc content.
 * This file should only be imported in React Server Components or server-side code.
 */
import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';
import { BlogPost } from '@/types';

import path from 'path';

// Create a reader instance pointing to the REPO root (one level up from project root)
// This matches the 'caretherapy/src/data/posts' path in config
const reader = createReader(path.join(process.cwd(), '..'), keystaticConfig);

// Default author info (Cameron is the primary author)
const DEFAULT_AUTHOR = {
    id: 'cameron',
    name: 'Cameron',
    role: 'Founder & Adapted Exercise Specialist',
    bio: 'Founder of CARE Therapy with a strong foundation in rehabilitative and adapted movement.',
    avatar: '/cameron_libera_linkedin.jpeg',
};

/**
 * Extract plain text from Keystatic document AST for word count / reading time.
 * This avoids the need for the heavy documentToHtml conversion.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractPlainText(nodes: any): string {
    if (!nodes) return '';
    const arr = Array.isArray(nodes) ? nodes : (nodes.children ?? []);

    let text = '';
    for (const node of arr) {
        if (node.text !== undefined) {
            text += node.text + ' ';
        }
        if (node.children) {
            text += extractPlainText(node.children);
        }
    }
    return text;
}

/**
 * Calculate reading time from plain text
 */
function calcReadingTime(text: string): string {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
}

/**
 * Build a BlogPost object from a Keystatic entry. 
 * Content is set to empty string since the detail page uses DocumentRenderer.
 */
function buildBlogPost(
    slug: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    entry: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    contentNodes: any,
): BlogPost {
    const tags = entry.tags
        ? entry.tags.split(',').map((t: string) => t.trim()).filter(Boolean)
        : [];

    const plainText = extractPlainText(contentNodes);

    return {
        id: slug,
        slug,
        title: entry.title,
        excerpt: entry.excerpt || '',
        content: '', // Content rendered via DocumentRenderer, not stored as HTML string
        author: {
            ...DEFAULT_AUTHOR,
            name: entry.authorName || DEFAULT_AUTHOR.name,
            role: entry.authorRole || DEFAULT_AUTHOR.role,
        },
        publishedAt: entry.publishedDate || new Date().toISOString().split('T')[0],
        category: entry.category || 'General',
        tags,
        featuredImage: entry.coverImage || undefined,
        readTime: calcReadingTime(plainText),
        featured: entry.featured || false,
    };
}

/**
 * Get all published blog posts from Keystatic
 * Filters out drafts and sorts by date (newest first)
 */
export async function getAllKestaticPosts(): Promise<BlogPost[]> {
    const allPosts = await reader.collections.posts.all();

    const posts: BlogPost[] = [];

    for (const post of allPosts) {
        const entry = post.entry;

        // Skip drafts
        if (entry.draft) continue;

        // Resolve the document content for reading time
        const contentDoc = await entry.content();
        posts.push(buildBlogPost(post.slug, entry, contentDoc));
    }

    // Sort by date, newest first
    return posts.sort(
        (a, b) => new Date(b.publishedAt as string).getTime() - new Date(a.publishedAt as string).getTime()
    );
}

/**
 * Get a single blog post by slug from Keystatic.
 * Returns both the BlogPost metadata AND the raw document AST
 * so the page can pass the document to DocumentRenderer.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getKestaticPostWithDocument(slug: string): Promise<{ post: BlogPost; document: any } | null> {
    const entry = await reader.collections.posts.read(slug, { resolveLinkedFiles: true });
    if (!entry) return null;

    const post = buildBlogPost(slug, entry, entry.content);

    return {
        post,
        document: entry.content, // Raw document AST for DocumentRenderer
    };
}

/**
 * Get a single blog post by slug from Keystatic (metadata only)
 */
export async function getKestaticPost(slug: string): Promise<BlogPost | null> {
    const result = await getKestaticPostWithDocument(slug);
    return result?.post ?? null;
}

/**
 * Get the featured post from Keystatic
 */
export async function getKestaticFeaturedPost(): Promise<BlogPost | null> {
    const posts = await getAllKestaticPosts();
    return posts.find(p => p.featured) || null;
}

/**
 * Get all unique categories from Keystatic posts
 */
export async function getKestaticCategories(): Promise<string[]> {
    const posts = await getAllKestaticPosts();
    const categories = posts.map(p => p.category);
    return ['All', ...Array.from(new Set(categories))];
}

/**
 * Get related posts by category (excluding current slug)
 */
export async function getKestaticRelatedPosts(currentSlug: string, limit: number = 3): Promise<BlogPost[]> {
    const posts = await getAllKestaticPosts();
    const currentPost = posts.find(p => p.slug === currentSlug);
    if (!currentPost) return [];

    return posts
        .filter(p => p.slug !== currentSlug && p.category === currentPost.category)
        .slice(0, limit);
}

/**
 * Get all post slugs from Keystatic (for generateStaticParams)
 */
export async function getKestaticPostSlugs(): Promise<string[]> {
    return await reader.collections.posts.list();
}
