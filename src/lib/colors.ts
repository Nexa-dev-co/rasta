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
  surface: "#F4F0E8", // Section backgrounds, cards — warm savanna sand
  text: "#2B2B2B", // Main body text
  darkGray: "#3D3D3D", // Dark gray from uniform palette
  footer: "#111111", // Black from uniform palette — footer background

  // Savanna earth tones — the "subtle & premium" African accent layer. Used for
  // section textures and warm highlights; they harmonise with burgundy + gold.
  clay: "#A8472E", // Terracotta clay — earthy accent
  ochre: "#C68A3C", // Savanna ochre — warm secondary accent
  charcoal: "#2B2622", // Warm charcoal — deep earth tone
} as const;

export type BrandColor = keyof typeof colors;
