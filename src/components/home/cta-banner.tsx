"use client";

import Link from "next/link";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

export function CtaBanner() {
  const { translations } = useLanguage();

  return (
    <section className="relative z-40 bg-surface">
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        {/* Floating navy card that lifts over the section above. */}
        <Reveal className="relative -mt-8 overflow-hidden rounded-[2rem] bg-navy px-6 py-16 shadow-2xl sm:px-10">
          {/* Faint geometric accent inside the card. */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(60% 60% at 80% 20%, white 0%, transparent 60%)",
            }}
          />
          <div className="relative flex flex-col items-center gap-6 text-center">
            <h2 className="max-w-2xl font-heading text-3xl font-bold text-white sm:text-4xl">
              {translations.ctaBanner.heading}
            </h2>
            <p className="max-w-xl text-white/80">{translations.ctaBanner.subheading}</p>
            <Link href="/contact">
              <Button variant="gold" size="lg">
                {translations.ctaBanner.button}
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
