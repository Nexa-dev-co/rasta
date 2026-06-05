"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Eye, Award, Zap } from "lucide-react";
import { useLanguage } from "@/context/language-context";

const VALUE_ICONS = [ShieldCheck, Eye, Award, Zap];

export default function AboutView() {
  const { translations } = useLanguage();
  const t = translations.aboutPage;

  const values = [
    { label: t.disciplineLabel, desc: t.disciplineDesc },
    { label: t.presenceLabel, desc: t.presenceDesc },
    { label: t.integrityLabel, desc: t.integrityDesc },
    { label: t.adaptabilityLabel, desc: t.adaptabilityDesc },
  ];

  return (
    <div className="bg-background">
      {/* ── Page header ─────────────────────────────────────────── */}
      <section className="bg-footer px-4 py-20 text-center sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="font-heading text-4xl font-bold text-white sm:text-5xl"
        >
          {t.heading}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold"
        />
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          {t.subheading}
        </motion.p>
      </section>

      {/* ── Who We Are — text + uniform image ───────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full bg-navy/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-navy">
              {t.whoWeAreHeading}
            </span>
            <p className="mt-4 text-base leading-relaxed text-text sm:text-lg">
              {t.whoWeAreBody}
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-surface bg-surface p-5">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy">
                  {t.missionHeading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text/80">
                  {t.missionBody}
                </p>
              </div>
              <div className="rounded-xl border border-surface bg-surface p-5">
                <h3 className="font-heading text-sm font-bold uppercase tracking-wider text-navy">
                  {t.visionHeading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text/80">
                  {t.visionBody}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Uniform image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            <div className="overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gold/30 lg:rounded-3xl">
              <Image
                src="/uniform.jpeg"
                alt="RASTA security personnel in standard uniform"
                width={900}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            {/* Gold accent corner */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-4 -end-4 h-24 w-24 rounded-full bg-gold/15 blur-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Values grid ─────────────────────────────────────────── */}
      <section className="bg-surface px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="text-center"
          >
            <h2 className="font-heading text-3xl font-bold text-text sm:text-4xl">
              {t.valuesHeading}
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-gold" />
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => {
              const Icon = VALUE_ICONS[index];
              return (
                <motion.div
                  key={value.label}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col gap-3 rounded-2xl bg-background p-6 shadow-sm ring-1 ring-black/5"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy/10 text-navy">
                    <Icon size={22} aria-hidden />
                  </span>
                  <h3 className="font-heading text-base font-bold text-text">
                    {value.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-text/70">
                    {value.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
