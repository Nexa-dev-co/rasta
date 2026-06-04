import type { LucideIcon } from "lucide-react";

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

// The kinds of inputs an intake form can render. Keep this list small and
// explicit so the generic ServiceForm can switch over it exhaustively.
export type ServiceFormFieldType = "text" | "number" | "select" | "textarea" | "date";

export interface ServiceFormFieldOption {
  value: string;
  labelEn: string;
  labelAr: string;
}

export interface ServiceFormField {
  name: string;
  type: ServiceFormFieldType;
  labelEn: string;
  labelAr: string;
  required: boolean;
  // Only meaningful for `select` fields
  options?: ServiceFormFieldOption[];
}

export interface Service {
  id: ServiceCategory;
  icon: LucideIcon;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  // Marks VIP / premium services that get the gold accent treatment
  isPremium?: boolean;
  formFields: ServiceFormField[];
}
