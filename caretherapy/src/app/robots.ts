import { MetadataRoute } from 'next';

/**
 * Dynamic robots.txt Generation
 *
 * This file generates a robots.txt for search engine crawlers.
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://caretherapy.co.za';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
