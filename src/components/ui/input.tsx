import {
  forwardRef,
  type InputHTMLAttributes,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { classNames } from "@/lib/class-names";

const baseControlClasses = classNames(
  "w-full rounded-lg border border-black/10 bg-white px-4 py-2.5 text-text",
  "placeholder:text-text/40 transition-colors",
  "focus:border-navy focus:outline-none focus:ring-2 focus:ring-navy/30",
  "disabled:cursor-not-allowed disabled:bg-surface",
);

const invalidClasses = "border-red-500 focus:border-red-500 focus:ring-red-500/30";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { hasError, className, ...rest },
  ref,
) {
  return (
    <input
      ref={ref}
      className={classNames(baseControlClasses, hasError && invalidClasses, className)}
      {...rest}
    />
  );
});

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  hasError?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { hasError, className, rows = 4, ...rest },
  ref,
) {
  return (
    <textarea
      ref={ref}
      rows={rows}
      className={classNames(baseControlClasses, "resize-y", hasError && invalidClasses, className)}
      {...rest}
    />
  );
});

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  hasError?: boolean;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  { hasError, className, children, ...rest },
  ref,
) {
  return (
    <select
      ref={ref}
      className={classNames(baseControlClasses, "appearance-none pr-10", hasError && invalidClasses, className)}
      {...rest}
    >
      {children}
    </select>
  );
});
