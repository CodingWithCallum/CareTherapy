import { getAllPosts } from '@/data/blog-posts';
import { getAllServices } from '@/data/services';

export async function GET() {
  const baseUrl = 'https://www.caretherapy.co.za'; // Replace with your actual domain

  const staticPages = [
    '', // Homepage
    '/about',
    '/contact',
    '/faq',
    '/testimonials',
    '/terms',
    '/privacy',
    '/sitemap', // User-facing sitemap
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date().toISOString(),
  }));

  const blogPosts = getAllPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt).toISOString(),
  }));

  const services = getAllServices().map((service) => ({
    url: `${baseUrl}/services#${service.id}`, // Linking to anchor for services
    lastModified: new Date().toISOString(),
  }));

  const allUrls = [...staticPages, ...blogPosts, ...services];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(({ url, lastModified }) => {
      return `
    <url>
      <loc>${url}</loc>
      <lastmod>${lastModified}</lastmod>
    </url>
  `;
    })
    .join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
