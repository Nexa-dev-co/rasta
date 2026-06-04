import { classNames } from "@/lib/class-names";

interface DotPatternProps {
  // Dot grid spacing in pixels.
  size?: number;
  // Pass a text-* color (with opacity) to tint the dots, e.g. "text-navy/[0.05]".
  className?: string;
}

// Faint decorative dot grid for section backgrounds. The dots use currentColor,
// so set their tint via a text-* utility on `className`.
export function DotPattern({ size = 22, className }: DotPatternProps) {
  return (
    <div
      aria-hidden
      className={classNames("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: "radial-gradient(currentColor 1px, transparent 1px)",
        backgroundSize: `${size}px ${size}px`,
      }}
    />
  );
}
