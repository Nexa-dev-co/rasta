import { forwardRef, type ButtonHTMLAttributes } from "react";
import { classNames } from "@/lib/class-names";

type ButtonVariant = "primary" | "secondary" | "ghost" | "gold";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-navy text-white hover:bg-navy-hover",
  secondary: "bg-white text-navy border border-navy hover:bg-surface",
  ghost: "bg-transparent text-navy hover:bg-surface",
  gold: "bg-gold text-text hover:brightness-105",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-base",
  lg: "h-13 px-8 text-lg",
};

// Shared button. `active:scale-[0.97]` gives the press micro-interaction the
// design system calls for; color transitions are handled per variant.
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={classNames(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium",
        "transition-all duration-200 active:scale-[0.97]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-60",
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...rest}
    />
  );
});
