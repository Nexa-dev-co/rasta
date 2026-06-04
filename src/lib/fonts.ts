import { Montserrat, Poppins, Cairo } from "next/font/google";

// English headings — Montserrat (bold/semibold per the design system)
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

// English body — Poppins (regular/medium)
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-poppins",
  display: "swap",
});

// Arabic headings + body — Cairo carries the whole Arabic experience
export const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-cairo",
  display: "swap",
});

// Convenience: every font variable in one className for the <html> element
export const fontVariables = `${montserrat.variable} ${poppins.variable} ${cairo.variable}`;
