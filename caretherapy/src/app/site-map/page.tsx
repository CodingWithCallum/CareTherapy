
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/data/blog-posts';
import { getAllServices } from '@/data/services';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sitemap | CareTherapy',
  description: 'A complete overview of all pages on the CareTherapy website.',
};

export default function SitemapPage() {
  const posts = getAllPosts();
  const services = getAllServices();

  const staticPages = [
    { href: '/', title: 'Home' },
    { href: '/about', title: 'About Us' },
    { href: '/services', title: 'Our Services' },
    { href: '/blog', title: 'Blog' },
    { href: '/contact', title: 'Contact Us' },
    { href: '/faq', title: 'Frequently Asked Questions' },
    { href: '/testimonials', title: 'Testimonials' },
    { href: '/terms', title: 'Terms of Service' },
    { href: '/privacy', title: 'Privacy Policy' },
  ];

  return (
    <div className="relative z-10">
      <div className="container mx-auto px-4 py-16 lg:py-24 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Sitemap
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A complete guide to the pages on our website.
          </p>
        </header>

        <div className="space-y-12">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Main Pages</h2>
            <ul className="space-y-2">
              {staticPages.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="group flex items-center text-muted-foreground hover:text-primary transition-colors">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{page.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Our Services</h2>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.id}>
                  <Link href={`/services#${service.id}`} className="group flex items-center text-muted-foreground hover:text-primary transition-colors">
                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4 border-b pb-2">Blog Posts</h2>
            <ul className="space-y-2">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="group flex items-center text-muted-foreground hover:text-primary transition-colors">
                     <ArrowRight className="w-4 h-4 mr-2 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    <span>{post.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
