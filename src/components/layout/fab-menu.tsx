"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Phone, Shield, X } from "lucide-react";
import { useFabMenu } from "@/hooks/useFabMenu";
import { useLanguage } from "@/context/language-context";
import { socialLinks } from "@/lib/social-links";
import { FacebookIcon, WhatsAppIcon } from "@/components/ui/social-icons";

// How far each action sits from the main button's center, in pixels.
const ORBIT_RADIUS = 80;
// cos45° = sin45° = √½, so the diagonal action lands at equal x/y offsets.
const DIAGONAL = Math.round(ORBIT_RADIUS * Math.SQRT1_2);

// PROTOTYPE: links point at placeholder accounts (see lib/social-links.ts).
// Icons orbit the button (no text labels) so the layout is identical in LTR
// and RTL — there are no words to flip. `offset` is the open-state position
// relative to the button center: negative x = left, negative y = up.
export function FabMenu() {
  const { isOpen, toggle, close } = useFabMenu();
  const { translations } = useLanguage();

  const actions = [
    {
      key: "whatsApp",
      label: translations.fab.whatsApp,
      href: socialLinks.whatsApp,
      icon: WhatsAppIcon,
      className: "bg-[#25D366] text-white",
      external: true,
      // Directly above the button
      offset: { x: 0, y: -ORBIT_RADIUS },
    },
    {
      key: "facebook",
      label: translations.fab.facebook,
      href: socialLinks.facebook,
      icon: FacebookIcon,
      className: "bg-[#1877F2] text-white",
      external: true,
      // 45° up-and-to-the-left
      offset: { x: -DIAGONAL, y: -DIAGONAL },
    },
    {
      key: "phone",
      label: translations.fab.phone,
      href: `tel:${socialLinks.phone}`,
      icon: Phone,
      className: "bg-navy text-white",
      external: false,
      // Straight to the left of the button
      offset: { x: -ORBIT_RADIUS, y: 0 },
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="relative">
        <AnimatePresence>
          {isOpen &&
            actions.map((action, index) => {
              const ActionIcon = action.icon;
              return (
                <motion.a
                  key={action.key}
                  href={action.href}
                  title={action.label}
                  aria-label={action.label}
                  onClick={close}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  // Sit centered over the 56px button (4px inset for the 48px icon),
                  // then spring out to the orbit offset when open.
                  className={`absolute bottom-1 right-1 inline-flex h-12 w-12 items-center justify-center rounded-full shadow-lg ${action.className}`}
                  initial={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
                  animate={{ x: action.offset.x, y: action.offset.y, opacity: 1, scale: 1 }}
                  exit={{ x: 0, y: 0, opacity: 0, scale: 0.3 }}
                  transition={{ type: "spring", stiffness: 360, damping: 24, delay: index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <ActionIcon size={20} />
                </motion.a>
              );
            })}
        </AnimatePresence>

        <button
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
          aria-label={isOpen ? translations.fab.close : translations.fab.open}
          className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-gold text-text shadow-xl ring-4 ring-gold/20 transition-transform hover:scale-105 active:scale-95"
        >
          <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            {isOpen ? <X size={24} /> : <Shield size={24} />}
          </motion.span>
        </button>
      </div>
    </div>
  );
}
