"use client";

import { useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, ShieldCheck, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { Button } from "@/components/ui/button";

/* ------------------------------------------------------------------ */
/*  Tiny floating particle – subtle, brand‑coloured, infinitely drifting  */
/* ------------------------------------------------------------------ */
function Particle({ className, duration = 24 }: { className?: string; duration?: number }) {
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute rounded-full bg-gold/20 ${className}`}
      animate={{
        x: [0, 30, -20, 0],
        y: [0, -40, 20, 0],
        scale: [1, 1.2, 0.9, 1],
        opacity: [0.15, 0.25, 0.1, 0.15],
      }}
      transition={{
        // Deterministic per-particle durations keep render pure (no Math.random).
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

/* ------------------------------------------------------------------ */
/*  Main hero section                                                  */
/* ------------------------------------------------------------------ */
export function HeroSection() {
  const { translations, direction } = useLanguage();
  const ArrowIcon = direction === "rtl" ? null : ArrowRight;

  // ---- mouse‑tracked spotlight ---- //
  const sectionRef = useRef<HTMLElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 80, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 80, damping: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY],
  );

  // ---- 3D tilt for photo panel (desktop) ---- //
  const photoRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const photoSpringX = useSpring(rotateX, { stiffness: 100, damping: 30 });
  const photoSpringY = useSpring(rotateY, { stiffness: 100, damping: 30 });

  const handlePhotoMove = (e: React.MouseEvent) => {
    const rect = photoRef.current?.getBoundingClientRect();
    if (!rect) return;
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const maxTilt = 8; // degrees
    rotateX.set(((offsetY - centerY) / centerY) * -maxTilt);
    rotateY.set(((offsetX - centerX) / centerX) * maxTilt);
  };

  const handlePhotoLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  // ---- headline words stagger ---- //
  const headlineWords = translations.hero.headline.split(" ");

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex cursor-default items-center overflow-hidden bg-navy lg:min-h-[calc(100vh-4rem)]"
    >
      {/* ---------- Dynamic spotlight (mouse‑follow) ---------- */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(600px circle at center, rgba(149,178,214,0.12) 0%, transparent 70%)",
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* ---------- Small screens: subtle navy texture instead of hidden image ---------- */}
      <div aria-hidden className="absolute inset-0 lg:hidden">
        <div className="absolute inset-0 bg-navy" />
      </div>

      {/* ---------- Desktop geometric backdrop + floating particles ---------- */}
      <div aria-hidden className="absolute inset-0 hidden lg:block">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* static ambient glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 55% at 75% 25%, rgba(95,163,214,0.28) 0%, transparent 60%)",
          }}
        />

        {/* floating particles – keep it light and clean */}
        <Particle className="top-[15%] left-[10%] h-3 w-3" duration={22} />
        <Particle className="bottom-[25%] left-[5%] h-2 w-2" duration={28} />
        <Particle className="top-[40%] right-[12%] h-4 w-4" duration={32} />
        <Particle
          className="bottom-[10%] right-[20%] h-2.5 w-2.5"
          duration={25}
        />
        <Particle className="top-[70%] left-[60%] h-2 w-2" duration={30} />
      </div>

      {/* ---------- Content grid ---------- */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-5 overflow-hidden px-4 py-8 pb-12 sm:gap-8 sm:px-6 sm:py-10 sm:pb-14 lg:grid-cols-[1fr_1.2fr] lg:gap-12 lg:px-8 lg:py-20">
        {/* ---------- Photo panel – visible on ALL screen sizes ---------- */}
        <motion.div
          ref={photoRef}
          onMouseMove={handlePhotoMove}
          onMouseLeave={handlePhotoLeave}
          className="order-last lg:order-last"
          style={{ perspective: 800 }}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.div
            className="relative mx-auto w-full max-w-xs overflow-hidden rounded-2xl shadow-2xl ring-1 ring-gold/40 sm:max-w-sm md:max-w-lg lg:max-w-none lg:rounded-3xl"
            style={{
              rotateX: photoSpringX,
              rotateY: photoSpringY,
              transformStyle: "preserve-3d",
            }}
          >
            <Image
              src="/uniform.jpeg"
              alt="RASTA security personnel in standard uniform"
              width={1000}
              height={1000}
              priority
              className="w-full h-auto"
            />
            {/* shine accent that moves with tilt – clean visual upgrade */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl lg:rounded-3xl"
              style={{
                background:
                  "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 45%, transparent 50%)",
                backgroundSize: "200% 200%",
                backgroundPosition: "100% 100%",
                x: useTransform(photoSpringY, [-8, 8], [-20, 20]),
                y: useTransform(photoSpringX, [-8, 8], [-15, 15]),
              }}
            />
            <span className="absolute bottom-4 start-4 inline-flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-medium text-gold backdrop-blur-sm">
              <ShieldCheck size={14} aria-hidden />
              {translations.brand.tagline}
            </span>
          </motion.div>
        </motion.div>

        {/* ---------- Text column ---------- */}
        <div className="order-first text-center lg:order-first lg:text-start">
          {/* eyebrow badge */}
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-3 py-1 text-xs font-medium text-gold backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-sm"
          >
            <ShieldCheck size={16} aria-hidden />
            {translations.hero.eyebrow}
          </motion.span>

          {/* headline – word by word with individual shimmer */}
          <h1 className="mt-4 font-heading text-3xl font-bold leading-tight text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {headlineWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                className="relative inline-block"
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.15 + index * 0.08,
                  ease: "easeOut",
                }}
              >
                {word}
                {/* subtle animated underline for each word on hover (web/desktop) */}
                <motion.span
                  aria-hidden
                  className="absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 bg-gold/70 transition-transform group-hover:scale-x-100 rtl:origin-right"
                />
                {index < headlineWords.length - 1 ? " " : ""}
              </motion.span>
            ))}
          </h1>

          {/* gold accent rule – enhanced with a slow gradient shift */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.3 + headlineWords.length * 0.08,
            }}
            className="mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-gold via-yellow-200 to-gold bg-[length:200%_100%] mx-auto sm:mt-6 lg:mx-0"
            style={{
              backgroundPosition: "0% 0%",
              animation: "shimmer 3s ease-in-out infinite",
            }}
          >
            <style jsx>{`
              @keyframes shimmer {
                0%,
                100% {
                  background-position: 0% 0%;
                }
                50% {
                  background-position: 200% 0%;
                }
              }
            `}</style>
          </motion.div>

          {/* subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.35 + headlineWords.length * 0.08,
            }}
            className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:mt-6 sm:text-lg mx-auto lg:mx-0"
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
            className="mt-6 flex flex-col items-center gap-3 sm:mt-9 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Link href="/contact">
              <Button
                variant="gold"
                size="lg"
                className="group w-full whitespace-nowrap sm:w-auto"
              >
                {translations.hero.primaryCta}
                {ArrowIcon && (
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
                className="group w-full whitespace-nowrap border border-white/30 bg-white/5 text-white hover:bg-white/15 sm:w-auto"
              >
                {translations.hero.secondaryCta}
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ---------- Scroll indicator (desktop only) ---------- */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/50 lg:flex"
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
