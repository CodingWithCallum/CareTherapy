"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === link.href
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 hover:bg-accent rounded-md transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background border-b md:hidden">
          <ul className="flex flex-col py-4 px-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-medium transition-colors hover:text-primary ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}