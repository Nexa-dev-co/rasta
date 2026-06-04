# CLAUDE.md — Security Company Website

This file defines how code should be written, structured, and named in this project.
Follow these rules in every suggestion, generation, and edit.

---

## Project Overview

A **B2B security services company website** — frontend-only prototype.
Built with React (Next.JS), TypeScript, Tailwind CSS, and React Router.
No backend. All forms are UI-only (no submission logic yet).

---

## Stack

**Frontend:** React 18, TypeScript, Tailwind CSS, React Router v6, Framer Motion (animations)

**Forms:** React Hook Form + Zod (validation schemas defined, submission stubbed)

**Icons:** Lucide React

**Fonts:**
- English: Montserrat / Poppins (via Google Fonts)
- Arabic: Cairo / DIN Next Arabic (via Google Fonts)

**i18n:** Arabic + English — use `dir="rtl"` on the root `<html>` for Arabic mode.

---

## Brand Colors

Always use these — never hardcode arbitrary colors outside of this map.

```ts
// lib/colors.ts — sourced from official uniform palette (public/uniform.jpeg)
export const colors = {
  navy:       "#7B1C2E",   // Burgundy — navbar, primary buttons, accents
  navyHover:  "#A0243E",   // Burgundy hover state
  gold:       "#D4AF37",   // Gold — logo accent, VIP highlight
  background: "#FFFFFF",   // Page background
  surface:    "#F5F2F2",   // Section backgrounds, cards (warm tint)
  text:       "#2B2B2B",   // Main body text
  darkGray:   "#3D3D3D",   // Dark gray from uniform palette
  footer:     "#111111",   // Black from uniform palette — footer background
} as const;
```

Reference via Tailwind custom config or inline CSS variables — never raw hex strings scattered in components.

---

## Project Structure

```
src/
  components/
    ui/                     # Shared base components (Button, Input, Badge)
      button.tsx
      input.tsx
      form-field.tsx
    layout/
      navbar.tsx
      footer.tsx
      fab-menu.tsx          # Floating Action Button (social links)
    home/
      hero-section.tsx
      stats-bar.tsx
      why-us-section.tsx
    services/
      service-card.tsx
      service-form.tsx      # Generic intake form per service
      services-grid.tsx
    contact/
      contact-form.tsx
  pages/
    home-page.tsx           # Thin shell → imports HomeView
    services-page.tsx       # Thin shell → imports ServicesView
    contact-page.tsx        # Thin shell → imports ContactView
  views/
    home-view.tsx           # Assembles home sections
    services-view.tsx       # Assembles services grid + forms
    contact-view.tsx        # Assembles contact form
  lib/
    colors.ts               # Brand color constants
    fonts.ts                # Font configuration
  types/
    service.ts              # Service type definitions
    form.ts                 # Form input types
  hooks/
    useScrollAnimation.ts   # Intersection Observer for scroll reveals
    useFabMenu.ts           # FAB open/close state
```

### Page Shell Rule

`page.tsx` files are **empty shells**. They import and render one root view. All real UI lives inside `views/` or `components/`.

```tsx
// pages/home-page.tsx
import { HomeView } from "@/views/home-view";

export default function HomePage() {
  return <HomeView />;
}
```

---

## Naming Rules

### Variables & Parameters

**Never abbreviate.** Names describe exactly what the value is.

```ts
// ❌ Wrong
const s = service.id;
const fn = (e: Event) => {};

// ✅ Correct
const serviceId = service.id;
const handleFormSubmit = (event: Event) => {};
```

### Files

Kebab-case. Name describes what the file **does or contains**.

```
// ❌
utils.ts
helpers.ts
misc.ts

// ✅
format-phone-number.ts
calculate-guard-count.ts
parse-service-form.ts
```

### Components

PascalCase, named after what they render:

```
HeroSection.tsx
ServiceCard.tsx
SecurityIntakeForm.tsx
FabMenu.tsx
```

### Hooks

Verb-first naming describing the action:

```ts
useScrollAnimation()   // scroll-triggered reveal
useFabMenu()           // FAB open/close toggle
useServiceForm()       // form state for a service intake
```

---

## Exports

- **Pages & views** → `default export`
- **Components, hooks, utils, types** → `named export`

---

## Component Rules

### Animations

Use **Framer Motion** for all page-level animations. Use CSS transitions for hover/micro-interactions.

```tsx
// ✅ Scroll reveal pattern
<motion.div
  initial={{ opacity: 0, y: 32 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true }}
>
  <ServiceCard service={service} />
</motion.div>
```

### Hero Section

The hero must have:
- Full-viewport height
- Animated headline (staggered word/line reveal)
- A subtle background element (geometric pattern, not a photo)
- A primary CTA button linking to `/contact`
- A secondary CTA linking to `/services`

### FAB (Floating Action Button)

A fixed button in the bottom-right corner. On click, expands to show:
- WhatsApp link
- Facebook link
- (Optionally) phone number

```tsx
// components/layout/fab-menu.tsx
// State: open/closed
// Links: configured via props or constants in lib/social-links.ts
```

### Service Forms

Each service section has an intake form. Forms are **UI only** — no submission logic.
Mark the form container with `data-service="compound"` etc. for future wiring.

Each form must include a `// TODO: wire submission to backend` comment at the top.

---

## Services List

Defined as a typed array in `types/service.ts`:

```ts
export type ServiceCategory =
  | "compounds"
  | "malls"
  | "clubs"
  | "healthcare"
  | "factories"
  | "vip-protection"
  | "cyber-security"
  | "smart-systems"
  | "security-plans"
  | "consulting"
  | "events";
```

Each service has: `id`, `titleAr`, `titleEn`, `descriptionAr`, `descriptionEn`, `formFields`.

---

## Forms

All forms use **React Hook Form + Zod**:

```ts
// types/form.ts
export const contactFormSchema = z.object({
  fullName:    z.string().min(2),
  email:       z.string().email(),
  phoneNumber: z.string().min(10),
  notes:       z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
```

Form submissions are stubbed:

```ts
const onSubmit = (formData: ContactFormInput) => {
  // TODO: send to backend / email service
  console.log("Form submitted:", formData);
};
```

---

## State Management

- **UI state** (FAB open, mobile menu) → `useState` / custom hooks
- **Form state** → React Hook Form
- No global state library needed for this prototype

---

## TypeScript

- `interface` for object shapes, `type` for unions and computed types
- No `any`. Use `unknown` and narrow.
- Infer types from Zod schemas — don't duplicate

---

## Comments

Comments explain **why**, not what.

```ts
// ❌ Useless
// Get the service
const currentService = getServiceById(serviceId);

// ✅ Explains intent
// We derive the service from the URL param rather than global state
// so deep links and page refreshes always show the correct service form
const currentService = getServiceById(serviceId);
```

Multi-step functions get step comments:

```ts
async function initializePage() {
  // 1. Parse service ID from URL
  // 2. Scroll to that service section if present
  // 3. Open its intake form accordion
}
```

---

## i18n / RTL

- All user-visible strings should be in both Arabic and English
- Use a `lang` context (`"ar"` | `"en"`) at the root
- RTL direction is set on `<html dir="rtl">` for Arabic — do not hack with `text-align: right` in components
- Arabic font: Cairo — English font: Montserrat

---

## General Rules

- No magic numbers — extract as named constants
- No commented-out code left in PRs
- Import order: external packages → `@/` aliases → relative imports
- The prototype has no auth, no API calls, no env variables
- Keep the `// PROTOTYPE:` prefix on any code that is intentionally stubbed
