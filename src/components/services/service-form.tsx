// TODO: wire submission to backend
"use client";

import { useForm } from "react-hook-form";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/language-context";
import type { Service } from "@/types/service";
import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form-field";
import { Input, Select, Textarea } from "@/components/ui/input";

interface ServiceFormProps {
  service: Service;
}

// Generic intake form rendered from a service's `formFields`. UI only — submit
// logs to the console and shows a confirmation; no network call (prototype).
export function ServiceForm({ service }: ServiceFormProps) {
  const { translations, language } = useLanguage();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (formData: Record<string, unknown>) => {
    // PROTOTYPE: replace with CRM / intake API wiring.
    console.log(`Service request submitted [${service.id}]:`, formData);
  };

  if (isSubmitSuccessful) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-xl bg-surface p-8 text-center">
        <CheckCircle2 className="text-gold" size={40} />
        <h4 className="font-heading text-lg font-semibold text-text">
          {translations.serviceForm.submittedTitle}
        </h4>
        <p className="max-w-sm text-sm text-text/70">{translations.serviceForm.submittedBody}</p>
        <Button variant="secondary" size="sm" onClick={() => reset()}>
          {translations.servicesPage.requestService}
        </Button>
      </div>
    );
  }

  return (
    <form
      data-service={service.id}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid gap-5 sm:grid-cols-2"
    >
      {service.formFields.map((field) => {
        const label = language === "ar" ? field.labelAr : field.labelEn;
        const fieldError = errors[field.name];
        const errorMessage = fieldError ? translations.validation.required : undefined;
        const registration = register(field.name, { required: field.required });
        // Textareas span the full width; everything else sits in the two-col grid.
        const isFullWidth = field.type === "textarea";

        return (
          <div key={field.name} className={isFullWidth ? "sm:col-span-2" : undefined}>
            <FormField
              label={label}
              htmlFor={`${service.id}-${field.name}`}
              required={field.required}
              error={errorMessage}
              requiredHint={translations.serviceForm.requiredHint}
            >
              {field.type === "textarea" ? (
                <Textarea
                  id={`${service.id}-${field.name}`}
                  hasError={Boolean(fieldError)}
                  {...registration}
                />
              ) : field.type === "select" ? (
                <Select
                  id={`${service.id}-${field.name}`}
                  defaultValue=""
                  hasError={Boolean(fieldError)}
                  {...registration}
                >
                  <option value="" disabled>
                    {translations.serviceForm.selectPlaceholder}
                  </option>
                  {field.options?.map((option) => (
                    <option key={option.value} value={option.value}>
                      {language === "ar" ? option.labelAr : option.labelEn}
                    </option>
                  ))}
                </Select>
              ) : (
                <Input
                  id={`${service.id}-${field.name}`}
                  type={field.type}
                  hasError={Boolean(fieldError)}
                  {...registration}
                />
              )}
            </FormField>
          </div>
        );
      })}

      <div className="sm:col-span-2">
        <Button type="submit" variant="primary" size="md" className="w-full sm:w-auto">
          {translations.serviceForm.submit}
        </Button>
      </div>
    </form>
  );
}
