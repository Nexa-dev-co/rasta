import type { ReactNode } from "react";

interface FormFieldProps {
  label: string;
  htmlFor: string;
  required?: boolean;
  error?: string;
  requiredHint?: string;
  children: ReactNode;
}

// Labelled wrapper shared by the contact form and every service intake form.
// Keeps label/required-marker/error layout consistent in one place.
export function FormField({
  label,
  htmlFor,
  required = false,
  error,
  requiredHint,
  children,
}: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={htmlFor} className="text-sm font-medium text-text">
        {label}
        {required && (
          <span className="text-gold" aria-label={requiredHint} title={requiredHint}>
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}
