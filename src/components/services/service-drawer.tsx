"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { Service } from "@/types/service";
import { classNames } from "@/lib/class-names";
import { ServiceForm } from "@/components/services/service-form";

interface ServiceDrawerProps {
  service: Service | null;
  onClose: () => void;
}

// Side panel that holds a service's intake form. Slides in from the inline-end
// edge (right in LTR, left in RTL), dims the page, and traps Escape + scroll
// while open. One drawer instance serves every service.
export function ServiceDrawer({ service, onClose }: ServiceDrawerProps) {
  const { translations, language, direction } = useLanguage();
  const isRtl = direction === "rtl";

  // Lock body scroll and close on Escape while the drawer is open.
  useEffect(() => {
    if (!service) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [service, onClose]);

  const title = service ? (language === "ar" ? service.titleAr : service.titleEn) : "";
  const description = service ? (language === "ar" ? service.descriptionAr : service.descriptionEn) : "";
  const ServiceIcon = service?.icon;

  return (
    <AnimatePresence>
      {service && ServiceIcon && (
        <div className="fixed inset-0 z-[60]">
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden
          />

          <motion.aside
            role="dialog"
            aria-modal="true"
            aria-label={title}
            initial={{ x: isRtl ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: isRtl ? "-100%" : "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className={classNames(
              "absolute top-0 flex h-full w-full max-w-lg flex-col bg-surface shadow-2xl",
              isRtl ? "left-0" : "right-0",
            )}
          >
            <header className="flex items-start justify-between gap-4 border-b border-black/5 bg-background p-6">
              <div className="flex items-start gap-3">
                <span
                  className={classNames(
                    "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl",
                    service.isPremium ? "bg-gold/15 text-gold" : "bg-navy/10 text-navy",
                  )}
                >
                  <ServiceIcon size={24} />
                </span>
                <div>
                  <h2 className="font-heading text-xl font-semibold text-text">{title}</h2>
                  <p className="mt-1 text-sm text-text/70">{description}</p>
                </div>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label={translations.servicesPage.closeForm}
                className="shrink-0 rounded-full p-2 text-text/60 transition-colors hover:bg-black/5 hover:text-text"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              {/* Key by id so the form fully resets when a different service opens. */}
              <ServiceForm key={service.id} service={service} />
            </div>
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
