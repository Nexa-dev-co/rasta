// Brand colors — the single source of truth for the RASTA palette.
// Tailwind exposes these as utilities (bg-navy, text-gold, ...) via the
// @theme block in app/globals.css. Reference them through those utilities or
// these constants — never scatter raw hex strings in components.
export const colors = {
  navy: "#2F6FAE", // Header, navbar, primary buttons
  navyHover: "#5FA3D6", // Button hover state
  gold: "#D4AF37", // VIP / highlight / accent
  background: "#FFFFFF", // Page background
  surface: "#F2F5F8", // Section backgrounds, cards
  text: "#2B2B2B", // Main body text
  footer: "#2B2B2B", // Footer background
} as const;

export type BrandColor = keyof typeof colors;
