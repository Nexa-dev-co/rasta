"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Globe, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { classNames } from "@/lib/class-names";
import { BrandLogo } from "@/components/layout/brand-logo";

const SCROLL_THRESHOLD_PX = 12;

export function Navbar() {
  const { translations, toggleLanguage } = useLanguage();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Frosted/condensed treatment kicks in after a small scroll offset.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > SCROLL_THRESHOLD_PX);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: translations.nav.home },
    { href: "/services", label: translations.nav.services },
    { href: "/about", label: translations.nav.about },
    { href: "/contact", label: translations.nav.contact },
  ];

  return (
    <header
      className={classNames(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-footer/90 shadow-lg backdrop-blur-md" : "bg-footer",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="RASTA home">
          <BrandLogo />
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={classNames(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  isActive ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10 hover:text-white",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-3 py-1.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
          >
            <Globe size={16} aria-hidden />
            {translations.nav.languageToggle}
          </button>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2 text-white md:hidden"
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? translations.fab.close : translations.fab.open}
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/10 bg-footer md:hidden">
          <div className="flex flex-col gap-1 px-4 py-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={classNames(
                    "rounded-lg px-4 py-3 text-base font-medium transition-colors",
                    isActive ? "bg-white/15 text-white" : "text-white/80 hover:bg-white/10",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
