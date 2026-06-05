"use client";

import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { socialLinks } from "@/lib/social-links";
import { ContactForm } from "@/components/contact/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { SavannaPattern } from "@/components/ui/savanna-pattern";

export default function ContactView() {
  const { translations } = useLanguage();

  const infoItems = [
    { icon: Phone, label: translations.contactPage.phoneLabel, value: socialLinks.phone, href: `tel:${socialLinks.phone}` },
    { icon: Mail, label: translations.contactPage.emailLabel, value: socialLinks.email, href: `mailto:${socialLinks.email}` },
    { icon: MessageCircle, label: translations.contactPage.whatsAppLabel, value: socialLinks.phone, href: socialLinks.whatsApp },
    { icon: Clock, label: translations.contactPage.hoursLabel, value: translations.contactPage.hoursValue },
  ];

  return (
    <div className="relative overflow-hidden bg-surface">
      <SavannaPattern className="text-clay/[0.05]" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <Reveal className="mb-10 text-center">
            <h1 className="font-heading text-4xl font-bold text-text">
              {translations.contactPage.heading}
            </h1>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gold" />
            <p className="mt-4 text-text/70">{translations.contactPage.subheading}</p>
          </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Form */}
          <Reveal className="rounded-2xl bg-background p-6 shadow-sm sm:p-8">
            <ContactForm />
          </Reveal>

          {/* Direct contact info */}
          <Reveal delay={0.1} className="flex flex-col gap-4">
            <h2 className="font-heading text-lg font-semibold text-text">
              {translations.contactPage.infoHeading}
            </h2>
            <ul className="flex flex-col gap-3">
              {infoItems.map((item) => {
                const ItemIcon = item.icon;
                const content = (
                  <span className="flex items-center gap-3 rounded-xl bg-background p-4 shadow-sm transition-colors hover:bg-navy/5">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-navy/10 text-navy">
                      <ItemIcon size={18} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-xs uppercase tracking-wide text-text/50">{item.label}</span>
                      <span className="text-sm font-medium text-text">{item.value}</span>
                    </span>
                  </span>
                );

                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        {...(item.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
