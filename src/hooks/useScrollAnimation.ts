"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationOptions {
  // Fraction of the element that must be visible before it counts as revealed.
  threshold?: number;
  // Reveal only once and then stop observing (the common case for entrances).
  once?: boolean;
}

// Intersection Observer wrapper for scroll-triggered reveals. Most of the site
// uses Framer Motion's whileInView, but this hook covers plain DOM cases where
// pulling in motion components would be overkill.
export function useScrollAnimation<ElementType extends HTMLElement = HTMLDivElement>({
  threshold = 0.2,
  once = true,
}: ScrollAnimationOptions = {}) {
  const elementRef = useRef<ElementType>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, once]);

  return { elementRef, isVisible };
}
