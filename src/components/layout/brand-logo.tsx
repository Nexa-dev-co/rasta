import Image from "next/image";
import { classNames } from "@/lib/class-names";

interface BrandLogoProps {
  // Show the wordmark text next to the crest. Off for compact placements.
  withText?: boolean;
  // Light text for dark backgrounds (navbar/footer), dark for light sections.
  tone?: "light" | "dark";
  size?: number;
  className?: string;
}

// The supplied logo art sits on a black field, so we frame it in a black,
// rounded badge on every surface — that reads as intentional instead of a
// stray dark square on the navy navbar.
export function BrandLogo({
  withText = true,
  tone = "light",
  size = 40,
  className,
}: BrandLogoProps) {
  return (
    <span className={classNames("inline-flex items-center gap-2.5", className)}>
      <span
        className="inline-flex items-center justify-center overflow-hidden rounded-lg bg-black ring-1 ring-gold/40"
        style={{ width: size, height: size }}
      >
        <Image
          src="/logo.jpeg"
          alt="RASTA Security Services & Close Protection"
          width={size}
          height={size}
          className="h-full w-full object-cover"
          priority
        />
      </span>
      {withText && (
        <span className="flex flex-col leading-none">
          <span
            className={classNames(
              "font-heading text-lg font-bold tracking-wide",
              tone === "light" ? "text-white" : "text-text",
            )}
          >
            RASTA
          </span>
          <span
            className={classNames(
              "text-[10px] uppercase tracking-[0.18em]",
              tone === "light" ? "text-gold" : "text-gold",
            )}
          >
            Close Protection
          </span>
        </span>
      )}
    </span>
  );
}
