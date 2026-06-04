// Brand colors — the single source of truth for the RASTA palette.
// Tailwind exposes these as utilities (bg-navy, text-gold, ...) via the
// @theme block in app/globals.css. Reference them through those utilities or
// these constants — never scatter raw hex strings in components.
// Colors sourced from the official uniform palette (public/uniform.jpeg).
export const colors = {
  navy: "#7B1C2E", // Burgundy — navbar, primary buttons, accents
  navyHover: "#A0243E", // Burgundy hover state
  gold: "#D4AF37", // Gold — logo accent, VIP highlight
  background: "#FFFFFF", // Page background
  surface: "#F5F2F2", // Section backgrounds, cards (warm tint)
  text: "#2B2B2B", // Main body text
  darkGray: "#3D3D3D", // Dark gray from uniform palette
  footer: "#111111", // Black from uniform palette — footer background
} as const;

export type BrandColor = keyof typeof colors;
