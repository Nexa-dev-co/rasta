"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { services } from "@/data/services";
import { Reveal } from "@/components/ui/reveal";
import { DotPattern } from "@/components/ui/dot-pattern";

// The home grid previews the first six services; the full set lives on /services.
const SNAPSHOT_COUNT = 6;

export function ServicesSnapshot() {
  const { translations, language } = useLanguage();
  const featured = services.slice(0, SNAPSHOT_COUNT);

  return (
    <section className="relative z-20 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-background shadow-[0_-12px_30px_-18px_rgba(0,0,0,0.25)]">
      <DotPattern className="text-navy/[0.04]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            {translations.servicesSnapshot.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />
          <p className="mt-4 text-text/70">{translations.servicesSnapshot.subheading}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, index) => {
            const ServiceIcon = service.icon;
            const title = language === "ar" ? service.titleAr : service.titleEn;
            const description = language === "ar" ? service.descriptionAr : service.descriptionEn;
            return (
              <Reveal key={service.id} delay={(index % 3) * 0.1}>
                <Link
                  href={`/services#${service.id}`}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-black/5 bg-surface p-6 transition-all hover:-translate-y-1 hover:border-navy/20 hover:shadow-lg"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy/10 text-navy transition-colors group-hover:bg-navy group-hover:text-white">
                    <ServiceIcon size={24} />
                  </span>
                  <h3 className="font-heading text-lg font-semibold text-text">{title}</h3>
                  <p className="text-sm leading-relaxed text-text/70">{description}</p>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-medium text-navy transition-colors hover:text-navy-hover"
          >
            {translations.servicesSnapshot.viewAll}
            <ArrowRight size={18} className="rtl:rotate-180" aria-hidden />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
