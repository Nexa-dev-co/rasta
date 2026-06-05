"use client";

import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { Service } from "@/types/service";
import { classNames } from "@/lib/class-names";

interface ServiceTileProps {
  service: Service;
  isActive: boolean;
  onSelect: () => void;
}

// A single bento tile. Premium services (VIP) get the gold gradient treatment
// and a large watermark icon; the rest are clean light cards that lift on hover.
export function ServiceTile({ service, isActive, onSelect }: ServiceTileProps) {
  const { language, translations } = useLanguage();
  const ServiceIcon = service.icon;
  const title = language === "ar" ? service.titleAr : service.titleEn;
  const description = language === "ar" ? service.descriptionAr : service.descriptionEn;
  const featured = Boolean(service.isPremium);

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-haspopup="dialog"
      aria-label={`${translations.servicesPage.requestService}: ${title}`}
      className={classNames(
        "group relative flex h-full w-full flex-col justify-between overflow-hidden rounded-2xl p-6 text-start transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        featured
          ? "bg-gradient-to-br from-navy to-navy-hover text-white ring-1 ring-gold/50 hover:shadow-2xl"
          : "border border-black/5 bg-background text-text hover:-translate-y-1 hover:border-navy/20 hover:shadow-lg",
        isActive && "ring-2 ring-gold",
      )}
    >
      {/* Oversized watermark crest behind the featured tile's content. */}
      {featured && (
        <ServiceIcon
          aria-hidden
          size={180}
          className="pointer-events-none absolute -bottom-8 -end-6 text-gold/10"
        />
      )}

      <div className="relative flex items-start justify-between">
        <span
          className={classNames(
            "inline-flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
            featured
              ? "bg-gold/20 text-gold"
              : "bg-navy/10 text-navy group-hover:bg-navy group-hover:text-white",
          )}
        >
          <ServiceIcon size={24} />
        </span>
        {featured && (
          <span className="rounded-full border border-gold/50 px-3 py-1 text-xs font-medium uppercase tracking-wider text-gold">
            {translations.servicesPage.featured}
          </span>
        )}
      </div>

      <div className="relative mt-4">
        <h3 className={classNames("font-heading font-semibold", featured ? "text-2xl" : "text-lg")}>
          {title}
        </h3>
        <p
          className={classNames(
            "mt-2 text-sm leading-relaxed",
            featured ? "text-white/85" : "text-text/70",
          )}
        >
          {description}
        </p>
      </div>

      <span
        className={classNames(
          "relative mt-5 inline-flex items-center gap-1.5 text-sm font-medium",
          featured ? "text-gold" : "text-navy",
        )}
      >
        {translations.servicesPage.requestService}
        <ArrowUpRight
          size={16}
          aria-hidden
          className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100"
        />
      </span>
    </button>
  );
}
