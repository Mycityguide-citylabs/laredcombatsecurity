"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Shield, Phone, Mail, MapPin, ArrowRight, CheckCircle, MessageSquare, Globe, Send, Users, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const navSections = [
    {
      title: "Services",
      links: [
        { label: "Armed & Static Guards", href: "#services" },
        { label: "CCTV & Surveillance", href: "#services" },
        { label: "Rapid Response", href: "#services" },
        { label: "K9 Patrols", href: "#services" },
        { label: "Private Investigations", href: "#services" },
        { label: "Cash In Transit", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#about" },
        { label: "Our Team", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Security Audits", href: "#services" },
        { label: "Debt Recovery", href: "#services" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", href: "#contact" },
        { label: "Emergency Hotline", href: "tel:+263715077419" },
        { label: "Security Audit Request", href: "#contact" },
        { label: "Client Portal", href: "#" },
        { label: "FAQs", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Act Chapter 24:31 Compliance", href: "#" },
        { label: "Licensing Info", href: "#" },
      ],
    },
  ];

  const trustSignals = [
    "Registered under Act (Chapter 24:31)",
    "Fully Licensed & Insured",
    "24/7 Emergency Response",
    "National Coverage Across Zimbabwe",
    "ISO 9001 Quality Management",
  ];

  return (
    <footer className="bg-primary/95 text-primary-foreground" role="contentinfo">
      {/* Main Footer Grid */}
      <div className="container-custom py-16 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-5">
          {/* Brand Column */}
          <div className="xl:col-span-2 space-y-6">
            <Link href="/" className="flex items-center gap-3" aria-label="La'Red Combat Security - Home">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Shield className="h-7 w-7 text-white" aria-hidden="true" />
              </div>
              <div>
                <span className="block font-heading font-semibold text-xl text-white">
                  La'Red Combat Security
                </span>
                <span className="block text-xs font-semibold tracking-widest text-amber-300 uppercase">
                  Registered Act 24:31
                </span>
              </div>
            </Link>

            <p className="max-w-xs text-primary-foreground/80 leading-relaxed">
              Professional security services across Zimbabwe. Registered under Act (Chapter 24:31).
              Armed guards, CCTV, rapid response, K9 patrols, and event security.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap gap-3" role="list" aria-label="Trust signals">
              {trustSignals.map((signal, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium transition-colors hover:bg-white/20"
                  role="listitem"
                >
                  <CheckCircle className="h-3 w-3 text-amber-300" aria-hidden="true" />
                  {signal}
                </span>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-primary-foreground/60">Follow us:</span>
              <div className="flex items-center gap-2">
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary-foreground/80 transition-colors hover:bg-white/20 hover:text-white focus-visible-ring"
                  aria-label="Facebook"
                >
                  <Users className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary-foreground/80 transition-colors hover:bg-white/20 hover:text-white focus-visible-ring"
                  aria-label="X (Twitter)"
                >
                  <MessageSquare className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary-foreground/80 transition-colors hover:bg-white/20 hover:text-white focus-visible-ring"
                  aria-label="LinkedIn"
                >
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </a>
                <a
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-primary-foreground/80 transition-colors hover:bg-white/20 hover:text-white focus-visible-ring"
                  aria-label="Instagram"
                >
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Columns */}
          {navSections.map((section) => (
            <nav key={section.title} aria-label={section.title + " navigation"}>
              <h4 className="mb-4 font-heading font-semibold text-white">{section.title}</h4>
              <ul className="space-y-3" role="list">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-primary-foreground/80 transition-colors hover:text-white focus-visible-ring rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 pt-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            &copy; 2026 La'Red Combat Security (PVT) LTD. All rights reserved.
            Registered under Act (Chapter 24:31).
          </p>

          <div className="flex items-center gap-6 text-sm text-primary-foreground/60">
            <Link href="#" className="hover:text-white transition-colors focus-visible-ring rounded">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors focus-visible-ring rounded">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors focus-visible-ring rounded">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href="tel:+263715077419"
          className="flex items-center justify-center gap-2 bg-destructive px-4 py-3 text-white font-semibold"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          24/7 Emergency: +263 715 077 419
        </a>
      </div>
    </footer>
  );
}