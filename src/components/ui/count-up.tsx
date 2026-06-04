"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface CountUpProps {
  target: number;
  durationMs?: number;
  className?: string;
}

// Counts from 0 up to `target` once the number scrolls into view, with an
// ease-out curve and locale thousands separators.
export function CountUp({ target, durationMs = 1400, className }: CountUpProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLSpanElement>({ threshold: 0.4 });
  const [value, setValue] = useState(0);
  const hasRunRef = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRunRef.current) return;
    hasRunRef.current = true;

    let frameId = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setValue(Math.round(eased * target));
      if (progress < 1) frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [isVisible, target, durationMs]);

  return (
    <span ref={elementRef} className={className}>
      {value.toLocaleString()}
    </span>
  );
}
