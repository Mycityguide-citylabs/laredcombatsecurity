"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Shield, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const emergencyPhone = "+263 715 077 419";

  return (
    <>
      {/* Emergency Banner */}
      <div className="bg-destructive text-destructive-foreground text-center py-2 text-sm font-medium">
        <Phone className="inline mr-1 h-3 w-3" />
        24/7 Emergency Response: <a href={`tel:${emergencyPhone.replace(/\s/g, "")}`} className="underline font-semibold hover:text-destructive-foreground/80">{emergencyPhone}</a>
      </div>

      {/* Main Navigation */}
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/95 backdrop-blur-sm border-b border-border shadow-sm"
            : "bg-transparent"
        )}
      >
        <nav className="container-custom" aria-label="Main navigation">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 focus-visible-ring rounded-md"
              aria-label="La'Red Combat Security - Home"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Shield className="h-6 w-6" aria-hidden="true" />
              </div>
              <div className="hidden sm:block">
                <span className="block font-heading font-semibold text-lg text-foreground">
                  La'Red Combat Security
                </span>
                <span className="block text-[10px] font-semibold tracking-widest text-destructive uppercase">
                  Registered Act 24:31
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground focus-visible-ring rounded px-2 py-1"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${emergencyPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 focus-visible-ring transition-colors"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Emergency
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:bg-muted focus-visible-ring"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div id="mobile-menu" className="md:hidden py-4 border-t border-border animate-slide-down">
              <nav className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-3 text-base font-medium text-foreground hover:bg-muted rounded-lg focus-visible-ring"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={`tel:${emergencyPhone.replace(/\s/g, "")}`}
                  className="mx-4 mt-2 flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-base font-semibold text-primary-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-5 w-5" aria-hidden="true" />
                  Emergency: {emergencyPhone}
                </a>
              </nav>
            </div>
          )}
        </nav>
      </header>

      <style jsx>{`
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-down {
          animation: slide-down 0.2s ease-out;
        }
      `}</style>
    </>
  );
}