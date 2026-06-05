import { classNames } from "@/lib/class-names";

interface SavannaPatternProps {
  // Tile size in pixels.
  size?: number;
  // Pass a text-* color (with opacity) to tint the motif, e.g. "text-clay/[0.06]".
  className?: string;
}

// A mudcloth-inspired geometric weave (nested diamonds + woven ticks) for
// section backgrounds — the "premium savanna" texture that succeeds the plain
// dot grid. It is painted as a CSS mask filled with currentColor, so the tint
// follows a text-* utility on `className`, mirroring the dot pattern's API.
const TILE = encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' width='44' height='44' viewBox='0 0 44 44'>" +
    "<g fill='none' stroke='black' stroke-width='1.1'>" +
    "<path d='M22 3 L41 22 L22 41 L3 22 Z'/>" +
    "<path d='M22 13 L31 22 L22 31 L13 22 Z'/>" +
    "</g>" +
    "<g fill='black'>" +
    "<circle cx='22' cy='22' r='1.5'/>" +
    "<circle cx='22' cy='0.5' r='1'/><circle cx='22' cy='43.5' r='1'/>" +
    "<circle cx='0.5' cy='22' r='1'/><circle cx='43.5' cy='22' r='1'/>" +
    "</g>" +
    "</svg>",
);

export function SavannaPattern({ size = 44, className }: SavannaPatternProps) {
  const mask = `url("data:image/svg+xml,${TILE}")`;
  return (
    <div
      aria-hidden
      className={classNames("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundColor: "currentColor",
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskSize: `${size}px ${size}px`,
        maskSize: `${size}px ${size}px`,
        WebkitMaskRepeat: "repeat",
        maskRepeat: "repeat",
      }}
    />
  );
}
