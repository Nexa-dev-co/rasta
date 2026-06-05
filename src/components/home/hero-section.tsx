"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const { translations, direction } = useLanguage();
  const headlineWords = translations.hero.headline.split(" ");

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Full-bleed background image */}
      <Image
        src="/WhatsApp%20Image%202026-06-05%20at%2012.34.16%20AM.jpeg"
        alt="RASTA Security — strength and presence"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Dark overlay for legibility */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Brand-coloured gradient wash at bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(123,28,46,0.55) 0%, transparent 55%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 py-24 text-center sm:px-6 lg:px-8">
        {/* Eyebrow badge */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-black/30 px-4 py-1.5 text-sm font-medium text-gold backdrop-blur-sm"
        >
          <ShieldCheck size={16} aria-hidden />
          {translations.hero.eyebrow}
        </motion.span>

        {/* Headline — word-by-word stagger */}
        <h1 className="mt-6 font-heading text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          {headlineWords.map((word, index) => (
            <motion.span
              key={`${word}-${index}`}
              className="inline-block"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.15 + index * 0.08,
                ease: "easeOut",
              }}
            >
              {word}
              {index < headlineWords.length - 1 ? " " : ""}
            </motion.span>
          ))}
        </h1>

        {/* Gold accent rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.3 + headlineWords.length * 0.08,
          }}
          className="mx-auto mt-5 h-1 w-24 rounded-full bg-gradient-to-r from-gold via-yellow-200 to-gold"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.35 + headlineWords.length * 0.08,
          }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg"
        >
          {translations.hero.subheadline}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.45 + headlineWords.length * 0.08,
          }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link href="/contact">
            <Button
              variant="gold"
              size="lg"
              className="group w-full whitespace-nowrap sm:w-auto"
            >
              {translations.hero.primaryCta}
              {direction === "ltr" && (
                <ArrowRight
                  size={18}
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              )}
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              className="group w-full whitespace-nowrap border border-white/30 bg-white/10 text-white hover:bg-white/20 sm:w-auto"
            >
              {translations.hero.secondaryCta}
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-1 text-white/60"
      >
        <span className="text-xs font-medium uppercase tracking-widest">
          {translations.hero.scroll || "Scroll"}
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}
