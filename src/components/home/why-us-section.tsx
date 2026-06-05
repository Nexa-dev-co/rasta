"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Eye, Scale, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Reveal } from "@/components/ui/reveal";
import { SavannaPattern } from "@/components/ui/savanna-pattern";

// Value propositions mirror the brand's stated standards (from the uniform spec).
const valueProps = [
  { icon: BadgeCheck, titleKey: "professional", bodyKey: "professionalDesc" },
  { icon: Eye, titleKey: "strongPresence", bodyKey: "strongPresenceDesc" },
  { icon: Scale, titleKey: "integrity", bodyKey: "integrityDesc" },
  { icon: ShieldCheck, titleKey: "protection", bodyKey: "protectionDesc" },
] as const;

export function WhyUsSection() {
  const { translations } = useLanguage();

  return (
    <section className="relative z-30 -mt-8 overflow-hidden rounded-t-[2.5rem] bg-surface shadow-[0_-12px_30px_-18px_rgba(0,0,0,0.18)]">
      <SavannaPattern className="text-clay/[0.06]" />
      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
            {translations.whyUs.heading}
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((prop, index) => {
            const PropIcon = prop.icon;
            return (
              <Reveal key={prop.titleKey} delay={(index % 4) * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -8, rotate: -1 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative flex h-full flex-col items-center gap-3 overflow-hidden rounded-2xl border border-white/60 bg-background/80 p-7 text-center shadow-sm backdrop-blur-sm transition-shadow hover:shadow-[0_24px_45px_-18px_rgba(212,175,55,0.5)]"
                >
                  {/* Glowing halo behind the icon. */}
                  <span
                    aria-hidden
                    className="absolute top-5 h-16 w-16 rounded-full bg-gold/40 blur-2xl transition-all duration-300 group-hover:bg-gold/60"
                  />
                  <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold/25 to-navy/15 text-gold ring-1 ring-gold/30">
                    <PropIcon size={26} />
                  </span>
                  <h3 className="relative font-heading text-lg font-semibold text-text">
                    {translations.whyUs[prop.titleKey]}
                  </h3>
                  <p className="relative text-sm leading-relaxed text-text/70">
                    {translations.whyUs[prop.bodyKey]}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
