"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { socialLinks } from "@/lib/social-links";
import { BrandLogo } from "@/components/layout/brand-logo";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/social-icons";

export function Footer() {
  const { translations } = useLanguage();
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "/", label: translations.nav.home },
    { href: "/services", label: translations.nav.services },
    { href: "/about", label: translations.nav.about },
    { href: "/contact", label: translations.nav.contact },
  ];

  return (
    <footer className="bg-footer text-white/80">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        {/* Brand + motto */}
        <div className="flex flex-col gap-4">
          <BrandLogo />
          <p className="max-w-xs text-sm leading-relaxed text-white/60">
            {translations.brand.motto}
          </p>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
            {translations.footer.quickLinks}
          </h2>
          <ul className="flex flex-col gap-2">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + social */}
        <div className="flex flex-col gap-3">
          <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-gold">
            {translations.footer.followUs}
          </h2>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`tel:${socialLinks.phone}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Phone size={16} aria-hidden /> {socialLinks.phone}
            </a>
            <a href={`mailto:${socialLinks.email}`} className="inline-flex items-center gap-2 transition-colors hover:text-white">
              <Mail size={16} aria-hidden /> {socialLinks.email}
            </a>
          </div>
          <div className="mt-2 flex gap-3">
            <a
              href={socialLinks.whatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={translations.fab.whatsApp}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-text"
            >
              <WhatsAppIcon size={18} />
            </a>
            <a
              href={socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={translations.fab.facebook}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-text"
            >
              <FacebookIcon size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
          © {currentYear} {translations.brand.name} — {translations.footer.rights}
        </p>
      </div>
    </footer>
  );
}
