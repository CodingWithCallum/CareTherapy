'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown,
  Heart, 
  Users, 
  BookOpen, 
  Mail,
  Info,
  Dumbbell,
  Target,
  Activity,
  UserCheck,
  MapPin,
  Book,
  Sparkles,
  Library,
  TrendingUp
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';
// Import blog data functions
import { getFeaturedPost } from '@/data';

// Logo component
const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative w-20 h-20 rounded-full overflow-hidden flex items-center justify-center">
        <Image src="/Cam_Logo_no_extened@4x.png" alt="Care Therapy Logo" width={75} height={75}/>
      </div>
      <div className="hidden sm:block">
        <div className="font-bold text-xl text-foreground">Care Therapy</div>
        <div className="text-xs text-muted-foreground">Exercise & Rehabilitation</div>
      </div>
    </div>
  );
};

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  
  // Get featured blog post for navigation
  const featuredPost = getFeaturedPost();

  // Navigation data structure with dynamic blog content
  const navigationItems = [
    {
      title: 'About Us',
      href: '/about',
      icon: Info,
      hasDropdown: true,
      featured:{
        title: 'Our Story',
        description: 'Learn about our mission and what sets us apart',
        href: '/about',
        icon: Activity,
      },
      items: [
        {
          title: 'Our Team',
          href: '/about#our-team',
          description: 'Meet our qualified exercise therapists',
          icon: Users,
        },
        {
          title: 'Our Values',
          href: '/about#our-values',
          description: 'The principles that guide everything we do',
          icon: Heart,
        },
      ],
    },
    {
      title: 'Services',
      href: '/services',
      icon: Dumbbell,
      hasDropdown: true,
      featured: {
        title: 'Our Pricing & Offerings',
        description: 'View our detailed services and pricing plans',
        href: '/services',
        icon: Activity,
      },
      items: [
        {
          title: 'Therapeutic Exercise',
          href: '/services#therapeutic-exercise',
          description: 'Personalized programs for function and movement',
          icon: Dumbbell,
        },
        {
          title: 'Post-Injury Rehabilitation',
          href: '/services#post-injury-rehabilitation',
          description: 'Guided recovery after injury or surgery',
          icon: Heart,
        },
        {
          title: 'Movement Assessment',
          href: '/services#movement-assessment',
          description: 'Comprehensive analysis of movement patterns',
          icon: Activity,
        },
        {
          title: 'Elderly Care',
          href: '/services#elderly-care',
          description: 'Maintain independence and quality of life',
          icon: UserCheck,
        },
        {
          title: 'Sports Performance',
          href: '/services#sports-performance',
          description: 'Optimize athletic performance',
          icon: Target,
        },
        {
          title: 'Mobile Sessions',
          href: '/services#home-sessions',
          description: 'We come to you at home or location',
          icon: MapPin,
        },
      ],
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: BookOpen,
      hasDropdown: true,
      featured: featuredPost ? {
        title: featuredPost.title,
        description: featuredPost.excerpt.substring(0, 100) + '...',
        href: `/blog/${featuredPost.slug}`,
        icon: Sparkles,
      } : {
        title: 'Latest Articles',
        description: 'Expert insights and practical tips',
        href: '/blog',
        icon: Sparkles,
      },
      items: [
        {
          title: 'All Blog Posts',
          href: '/blog',
          description: 'Browse our complete collection of articles',
          icon: Library,
        },
        // {
        //   title: 'I\'m Feeling Lucky',
        //   href: '/blog#random',
        //   description: 'Let us surprise you with a random article',
        //   icon: Sparkles,
        // },
        {
          title: 'Most Popular',
          href: '/blog#popular-posts',
          description: 'Our most-read articles and guides',
          icon: TrendingUp,
        },
      ]
    },
    {
      title: 'Resources',
      href: '/',
      icon: Mail,
      hasDropdown: true,
      featured:{
        title: 'Contact Us',
        href: '/contact',
        description: 'Get in touch for consultations and inquiries',
        icon: Mail
      },
      items:[
        {
          title: 'FAQs',
          href: '/faq',
          description: 'Common questions about our services',
          icon: Book,
        },
        {
          title: 'Success Stories',
          href: '/testimonials',
          description: 'Hear from our satisfied clients',
          icon: Heart,
        }
      ]
    },
  ];

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenMobileDropdown(null);
  }, [pathname]);

  // Check if current path matches link
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.hasDropdown ? (
                    <>
                      <NavigationMenuTrigger 
                        className={cn(
                          "text-base font-medium",
                          isActive(item.href) && "text-primary"
                        )}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[500px] p-4">
                          {item.featured && (
                            <div className="mb-4">
                              <NavigationMenuLink asChild>
                                <Link 
                                  href={item.featured.href}
                                  className="group relative overflow-hidden rounded-lg border bg-gradient-to-br from-primary/10 to-primary/5 p-6 hover:shadow-md transition-all block"
                                >
                                  <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                      <item.featured.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                      <div className="font-semibold mb-1 group-hover:text-primary transition-colors line-clamp-1">
                                        {item.featured.title}
                                      </div>
                                      <p className="text-sm text-muted-foreground line-clamp-2">
                                        {item.featured.description}
                                      </p>
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </div>
                          )}
                          
                          <div className="grid grid-cols-2 gap-3">
                            {item.items?.map((subItem) => (
                              <NavigationMenuLink key={subItem.title} asChild>
                                <Link 
                                  href={subItem.href}
                                  className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center gap-2 mb-1">
                                    <subItem.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                                    <div className="text-sm font-medium leading-none">
                                      {subItem.title}
                                    </div>
                                  </div>
                                  <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50",
                          isActive(item.href) && "text-primary"
                        )}
                      >
                        <item.icon className="w-4 h-4 mr-2" />
                        {item.title}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* CTA Button - Desktop */}
        <div className="hidden lg:block">
          <Link href="/contact">
            <Button size="default" className="font-medium">
              <Mail className="w-4 h-4 mr-2" />
              Request A Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-accent rounded-md transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.title}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setOpenMobileDropdown(
                          openMobileDropdown === item.title ? null : item.title
                        )}
                        className={cn(
                          "flex w-full items-center justify-between rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent",
                          isActive(item.href) && "text-primary bg-accent"
                        )}
                      >
                        <span className="flex items-center gap-2">
                          <item.icon className="w-4 h-4" />
                          {item.title}
                        </span>
                        <ChevronDown
                          className={cn(
                            "w-4 h-4 transition-transform",
                            openMobileDropdown === item.title && "rotate-180"
                          )}
                        />
                      </button>
                      
                      {openMobileDropdown === item.title && (
                        <ul className="mt-2 ml-4 space-y-1 border-l-2 border-primary/20 pl-4">
                          {/* Featured item in mobile */}
                          {item.featured && (
                            <li>
                              <Link
                                href={item.featured.href}
                                className="block rounded-md px-3 py-2 text-sm bg-primary/5 border border-primary/20"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <item.featured.icon className="w-3 h-3 text-primary" />
                                  <span className="font-medium text-primary">Featured</span>
                                </div>
                                <p className="text-xs font-semibold mb-1 line-clamp-1">{item.featured.title}</p>
                                <p className="text-xs text-muted-foreground line-clamp-2">
                                  {item.featured.description}
                                </p>
                              </Link>
                            </li>
                          )}
                          {item.items?.map((subItem) => (
                            <li key={subItem.title}>
                              <Link
                                href={subItem.href}
                                className="block rounded-md px-3 py-2 text-sm hover:bg-accent transition-colors"
                              >
                                <div className="flex items-center gap-2 mb-1">
                                  <subItem.icon className="w-3 h-3 text-muted-foreground" />
                                  <span className="font-medium">{subItem.title}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                  {subItem.description}
                                </p>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-2 rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent",
                        isActive(item.href) && "text-primary bg-accent"
                      )}
                    >
                      <item.icon className="w-4 h-4" />
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t">
              <Link href="/contact">
                <Button size="lg" className="w-full font-medium">
                  <Mail className="w-4 h-4 mr-2" />
                  Get Started
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}