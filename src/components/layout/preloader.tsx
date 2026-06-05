"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BrandLogo } from "@/components/layout/brand-logo";

// localStorage key that marks a visitor as having already seen the intro.
const VISITED_KEY = "rasta_visited";

export function Preloader() {
  const prefersReducedMotion = useReducedMotion();
  // Render the overlay on the first paint so first-time visitors never glimpse
  // the page underneath. Returning visitors are hidden pre-paint by the inline
  // script in the layout (html[data-returning]), then unmounted in the effect.
  const [isVisible, setIsVisible] = useState(true);

  // How long the intro lingers before it fades out. Trimmed for reduced motion.
  const displayDurationMs = prefersReducedMotion ? 700 : 2100;

  useEffect(() => {
    const hasVisited = (() => {
      try {
        return Boolean(window.localStorage.getItem(VISITED_KEY));
      } catch {
        // Private mode / storage blocked: treat as returning so we never trap
        // the visitor behind an overlay that can't record that it was shown.
        return true;
      }
    })();

    if (hasVisited) {
      setIsVisible(false);
      return;
    }

    // First-time visitor: lock scrolling under the overlay, then reveal the site.
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => {
      try {
        window.localStorage.setItem(VISITED_KEY, "1");
      } catch {
        // Ignore — worst case the intro shows again next visit.
      }
      setIsVisible(false);
    }, displayDurationMs);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, [displayDurationMs]);

  // Restore scrolling the moment the overlay starts leaving.
  useEffect(() => {
    if (!isVisible) document.body.style.overflow = "";
  }, [isVisible]);

  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="rasta-preloader"
          aria-hidden
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-footer"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <motion.div
            className="relative flex flex-col items-center gap-6"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease }}
          >
            {/* Gold ring that draws itself around the crest. */}
            <div className="relative flex items-center justify-center">
              <svg
                className="absolute h-[104px] w-[104px] -rotate-90"
                viewBox="0 0 104 104"
                fill="none"
              >
                <motion.circle
                  cx="52"
                  cy="52"
                  r="50"
                  stroke="var(--color-gold)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  initial={prefersReducedMotion ? false : { pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.4, ease }}
                />
              </svg>
              <BrandLogo withText={false} size={72} />
            </div>

            {/* Wordmark fades up just behind the crest. */}
            <motion.div
              className="flex flex-col items-center"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5, ease }}
            >
              <span className="font-heading text-2xl font-bold tracking-[0.35em] text-white">
                RASTA
              </span>
              <span className="mt-1.5 text-[10px] uppercase tracking-[0.4em] text-gold">
                Close Protection
              </span>
            </motion.div>
          </motion.div>

          {/* Slim gold progress line at the base. */}
          <div className="absolute bottom-16 h-px w-40 overflow-hidden bg-white/15">
            <motion.div
              className="h-full origin-left bg-gold"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: displayDurationMs / 1000, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
