'use client';

import * as React from 'react';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import { BookAlert, Rss, MessageCircleHeart  } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import type { ComponentProps } from 'react';

// Simple logo component for the navbar
const Logo = (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
  return (
    <Image src="/Cam_Logo_no_extened@4x.png" alt="CareTherapy Logo Dark Blue" width={64} height={64} className="rounded-full"/>
  );
};

// Hamburger icon component
const HamburgerIcon = ({ className, ...props }: React.SVGAttributes<SVGElement>) => (
  <svg className={cn('pointer-events-none', className)} width={16} height={16} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <path d="M4 12L20 12" className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]" />
    <path d="M4 12H20" className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45" />
    <path d="M4 12H20" className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]" />
  </svg>
);

// Types
export interface NavbarNavItem {
    href?: string;
    label: string;
    submenu?: boolean;
    type?: 'description' | 'simple' | 'icon';
    items?: Array<{
    href: string;
    label: string;
    description?: string;
    icon?: string;
  }>;
}

export interface NavbarProps extends React.HTMLAttributes<HTMLElement> {
  logo?: React.ReactNode;
  logoHref?: string;
  navigationLinks?: NavbarNavItem[];
  signInText?: string;
  signInHref?: string;
  ctaText?: string;
  ctaHref?: string;
  onSignInClick?: () => void;
  onCtaClick?: () => void;
}

// Default navigation links
const defaultNavigationLinks: NavbarNavItem[] = [
  { href: '#', label: 'Home' },
  {
    label: 'About Us',
    submenu: true,
    type: 'simple', //User descirption for advanced submenu
    items: [
      {
        href: '#OurStory',
        label: 'Our Story',
        description: 'Learn about the journey that lead to Care Therapy.',
      },
      {
        href: '#OurTeam',
        label: 'Our Team',
        description: 'Learn about our qualified and experienced team behind Care Therapy.',
      },
    ],
  },
  {
    label: 'Services',
    submenu: true,
    type: 'simple',
    items: [
      { href: '/services', label: 'Our Services', description: 'An overview of the services at Care Therapy.' },
      { href: '/services', label: 'Service Pricing', description: 'Our pricing for our services and packages.' },
      { href: '/services', label: 'Service Benefits', description: 'Learn which service or package suits you best.' },
      { href: '/services', label: 'Service FAQs', description: 'Confused? Want to know more? Visit our FAQ.' },
    ],
  },
  {
    label: 'More',
    submenu: true,
    type: 'icon',
    items: [
      { href: '/Testimonials', label: 'Testimonials', icon: 'BookOpenIcon' },
      { href: '/Blog', label: 'Blog', icon: 'Rss' },
      { href: '/Disclaimer', label: 'Disclaimer', icon: 'InfoIcon' },
    ],
  },
];

export const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    {
      className,
      logo = <Logo />,
      logoHref = '#',
      navigationLinks = defaultNavigationLinks,
      ctaText = 'Contact Us',
      ctaHref = '#ContactUs',
      onCtaClick,
      ...props
    },
    ref
  ) => {
    const [isMobile, setIsMobile] = useState(false);
    const containerRef = useRef<HTMLElement>(null);

    useEffect(() => {
      const checkWidth = () => {
        if (containerRef.current) {
          const width = containerRef.current.offsetWidth;
          setIsMobile(width < 768); // 768px is md breakpoint
        }
      };

      checkWidth();

      const resizeObserver = new ResizeObserver(checkWidth);
      if (containerRef.current) {
        resizeObserver.observe(containerRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }, []);

    // Combine refs
    const combinedRef = React.useCallback((node: HTMLElement | null) => {
      containerRef.current = node;
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    }, [ref]);

    const renderIcon = (iconName: string) => {
      switch (iconName) {
        case 'MessageCircleHeart':
          return <MessageCircleHeart size={32} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'Rss':
          return <Rss size={32} className="text-foreground opacity-60" aria-hidden={true} />;
        case 'BookAlert':
          return <BookAlert size={32} className="text-foreground opacity-60" aria-hidden={true} />;
        default:
          return null;
      }
    };

    return (
      <header ref={combinedRef} className={cn('sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-6 [&_*]:no-underline', className)} {...props} >
        <div className="container mx-auto flex h-20 max-w-screen-2xl items-center justify-between gap-4">
          {/* Left side */}
          <div className="flex items-center gap-2">
            {/* Mobile menu trigger */}
            {isMobile && (
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="group h-9 w-9 hover:bg-accent hover:text-accent-foreground"
                    variant="ghost" size="icon" >
                    <HamburgerIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-64 p-1">
                  <NavigationMenu className="max-w-none">
                    <NavigationMenuList className="flex-col items-start gap-0">
                      {navigationLinks.map((link, index) => (
                        <NavigationMenuItem key={index} className="w-full">
                          {link.submenu ? (
                            <>
                              <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">
                                {link.label}
                              </div>
                              <ul>
                                {link.items?.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <button onClick={(e) => e.preventDefault()} className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline" >
                                      {item.label}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <button onClick={(e) => e.preventDefault()} className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer no-underline" >
                              {link.label}
                            </button>
                          )}
                          {/* Add separator between different types of items */}
                          {index < navigationLinks.length - 1 &&
                            ((!link.submenu && navigationLinks[index + 1].submenu) ||
                              (link.submenu && !navigationLinks[index + 1].submenu) ||
                              (link.submenu &&
                                navigationLinks[index + 1].submenu &&
                                link.type !== navigationLinks[index + 1].type)) && (
                              <div role="separator" aria-orientation="horizontal" className="bg-border -mx-1 my-1 h-px w-full" />
                            )}
                        </NavigationMenuItem>
                      ))}
                    </NavigationMenuList>
                  </NavigationMenu>
                </PopoverContent>
              </Popover>
            )}
            {/* Main nav */}
            <div className="flex items-center gap-6">
              <button onClick={(e) => e.preventDefault()} className="flex items-center space-x-4 text-primary hover:text-primary/90 transition-colors cursor-pointer" >
                <div className="text-2xl">
                  {logo}
                </div>
                <span className="hidden font-bold text-xl sm:inline-block">Care Therapy</span>
              </button>
              {/* Navigation menu */}
              {!isMobile && (
                <NavigationMenu className="flex">
                  <NavigationMenuList className="gap-2">
                {navigationLinks.map((link, index) => (
                  <NavigationMenuItem key={index} className="text-lg font-bold">
                    {link.submenu ? (
                      <>
                        <NavigationMenuTrigger className="text-lg font-bold">
                          {link.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          {link.type === 'description' && link.label === 'About Us' ? (
                            <div className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                              <div className="row-span-3">
                                <NavigationMenuLink asChild>
                                  <button onClick={(e) => e.preventDefault()} className="flex h-full w-full select-none flex-col justify-center items-center text-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-pointer" >
                                    <div className="mb-3 text-xl font-semibold"> 
                                      Care Therapy
                                    </div>
                                    <p className="text-sm leading-tight text-muted-foreground">
                                      abc abc abc abc abc abc abc abc abc abc abc.
                                    </p>
                                  </button>
                                </NavigationMenuLink>
                              </div>
                              {link.items?.map((item, itemIndex) => (
                                <ListItem key={itemIndex} title={item.label} href={item.href} type={link.type} >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          ) : link.type === 'simple' ? (
                            <div className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                              {link.items?.map((item, itemIndex) => (
                                <ListItem key={itemIndex} title={item.label} href={item.href} type={link.type} >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          ) : link.type === 'icon' ? (
                            <div className="grid w-[400px] gap-3 p-4">
                              {link.items?.map((item, itemIndex) => (
                                <ListItem key={itemIndex} title={item.label} href={item.href} icon={item.icon} type={link.type} >
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          ) : (
                            <div className="grid gap-3 p-4">
                              {link.items?.map((item, itemIndex) => (
                                <ListItem key={itemIndex} title={item.label} href={item.href} type={link.type}>
                                  {item.description}
                                </ListItem>
                              ))}
                            </div>
                          )}
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <NavigationMenuLink href={link.href} className={cn(navigationMenuTriggerStyle(), 'cursor-pointer')} onClick={(e) => e.preventDefault()} >
                        <span className="text-lg font-bold">{link.label}</span>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                ))}
                </NavigationMenuList>
                </NavigationMenu>
              )}
            </div>
          </div>
          {/* Right side */}
          <div className="flex items-center gap-3">
            <Button size="sm" className="text-base font-medium px-4 h-9 rounded-md shadow-sm" onClick={(e) => {
                e.preventDefault(); if (onCtaClick) onCtaClick(); }} >
              {ctaText}
            </Button>
          </div>
        </div>
      </header>
    );
  }
);

Navbar.displayName = 'Navbar';

// ListItem component for navigation menu items
const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'> & {
    title: string;
    href?: string;
    icon?: string;
    type?: 'description' | 'simple' | 'icon';
    children?: React.ReactNode;
  }
>(({ className, title, children, icon, type, ...props }, ref) => {
  const renderIconComponent = (iconName?: string) => {
    if (!iconName) return null;
    switch (iconName) {
      case 'BookOpenIcon':
        return <MessageCircleHeart className="h-20 w-20" />;
      case 'LifeBuoyIcon':
        return <Rss className="h-20 w-20" />;
      case 'InfoIcon':
        return <BookAlert className="h-20 w-20" />;
      default:
        return null;
    }
  };

  return (
    <NavigationMenuLink asChild>
      <a ref={ref} onClick={(e) => e.preventDefault()} className={cn('block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground cursor-pointer', className)} {...props} >
        {type === 'icon' && icon ? (
          <div className="flex items-start space-x-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-lg bg-muted">
              {renderIconComponent(icon)}
            </div>
            <div className="space-y-1">
              <div className="text-lg font-medium leading-tight">{title}</div>
              {children && (
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {children}
                </p>
              )}
            </div>
          </div>
        ) : (
          <>
            <div className="text-lg font-medium leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                {children}
              </p>
            )}
          </>
        )}
      </a>
    </NavigationMenuLink>
  );
});
ListItem.displayName = 'ListItem';

export { Logo, HamburgerIcon };