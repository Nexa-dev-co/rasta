"use client";

import { useLanguage } from "@/context/language-context";
import { ServicesGrid } from "@/components/services/services-grid";
import { Reveal } from "@/components/ui/reveal";
import { DotPattern } from "@/components/ui/dot-pattern";

export default function ServicesView() {
  const { translations } = useLanguage();

  return (
    <div className="relative overflow-hidden bg-surface">
      <DotPattern className="text-navy/[0.04]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <Reveal className="mb-10 text-center">
          <h1 className="font-heading text-4xl font-bold text-text">
            {translations.servicesPage.heading}
          </h1>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />
          <p className="mt-4 text-text/70">{translations.servicesPage.subheading}</p>
        </Reveal>

        <ServicesGrid />
      </div>
    </div>
  );
}
