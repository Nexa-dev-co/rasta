"use client";

import { Clock, ShieldCheck, UserCheck, Users } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

// PROTOTYPE: trust metrics are placeholders pending real company figures.
// `target` drives the count-up; `staticValue` is for non-numeric metrics (24/7).
const stats = [
  { icon: ShieldCheck, target: 12, suffix: "+", labelKey: "yearsExperience" },
  { icon: Users, target: 240, suffix: "+", labelKey: "clientsServed" },
  { icon: UserCheck, target: 1800, suffix: "+", labelKey: "guardsDeployed" },
  { icon: Clock, staticValue: "24/7", labelKey: "uptime" },
] as const;

export function StatsBar() {
  const { translations } = useLanguage();

  return (
    <section className="relative z-10 bg-surface">
      <div className="mx-auto max-w-6xl px-4 pt-6 pb-4 sm:px-6 lg:px-8 lg:pt-14">
        {/* Floating panel that lifts over the hero on small screens. */}
        <Reveal className="-mt-4 sm:-mt-10 lg:mt-0">
          <div className="grid grid-cols-2 gap-6 rounded-3xl border-t-4 border-gold bg-background p-6 shadow-2xl ring-1 ring-black/5 sm:p-8 lg:grid-cols-4 lg:divide-x lg:divide-black/10 rtl:lg:divide-x-reverse">
            {stats.map((stat, index) => {
              const StatIcon = stat.icon;
              return (
                <Reveal
                  key={stat.labelKey}
                  delay={index * 0.1}
                  className="flex flex-col items-center gap-2 text-center lg:px-4"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <StatIcon size={24} />
                  </span>
                  <p className="font-heading text-3xl font-bold text-navy sm:text-4xl">
                    {"staticValue" in stat ? (
                      stat.staticValue
                    ) : (
                      <>
                        <CountUp target={stat.target} />
                        {stat.suffix}
                      </>
                    )}
                  </p>
                  <p className="text-sm text-text/70">{translations.stats[stat.labelKey]}</p>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
