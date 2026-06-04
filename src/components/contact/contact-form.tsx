// TODO: wire submission to backend
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import { contactFormSchema, type ContactFormInput } from "@/types/form";
import type { Dictionary } from "@/lib/dictionary";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input, Textarea } from "@/components/ui/input";

// Zod stores message *codes* (e.g. "invalidEmail"); resolve them to the active
// language here so validation copy is localized like everything else.
type ValidationKey = keyof Dictionary["validation"];

export function ContactForm() {
  const { translations } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
  });

  const onSubmit = (formData: ContactFormInput) => {
    // PROTOTYPE: send to backend / email service (e.g. Resend).
    console.log("Contact form submitted:", formData);
  };

  const resolveError = (code?: string) =>
    code ? translations.validation[code as ValidationKey] : undefined;

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-surface p-10 text-center">
        <CheckCircle2 className="text-gold" size={44} />
        <h3 className="font-heading text-xl font-semibold text-text">
          {translations.contactPage.submittedTitle}
        </h3>
        <p className="max-w-sm text-sm text-text/70">{translations.contactPage.submittedBody}</p>
        <Button variant="secondary" size="sm" onClick={() => reset()}>
          {translations.contactPage.submit}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      <FormField
        label={translations.contactPage.fullName}
        htmlFor="fullName"
        required
        error={resolveError(errors.fullName?.message)}
        requiredHint={translations.serviceForm.requiredHint}
      >
        <Input id="fullName" hasError={Boolean(errors.fullName)} {...register("fullName")} />
      </FormField>

      <FormField
        label={translations.contactPage.email}
        htmlFor="email"
        required
        error={resolveError(errors.email?.message)}
        requiredHint={translations.serviceForm.requiredHint}
      >
        <Input id="email" type="email" hasError={Boolean(errors.email)} {...register("email")} />
      </FormField>

      <FormField
        label={translations.contactPage.phoneNumber}
        htmlFor="phoneNumber"
        required
        error={resolveError(errors.phoneNumber?.message)}
        requiredHint={translations.serviceForm.requiredHint}
      >
        <Input
          id="phoneNumber"
          type="tel"
          hasError={Boolean(errors.phoneNumber)}
          {...register("phoneNumber")}
        />
      </FormField>

      <FormField label={translations.contactPage.notes} htmlFor="notes">
        <Textarea id="notes" {...register("notes")} />
      </FormField>

      <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto sm:self-start">
        {translations.contactPage.submit}
      </Button>
    </form>
  );
}
