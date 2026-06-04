import { z } from "zod";

// Contact form — the only form with a fixed, hand-written schema. Service
// intake forms are dynamic and validated loosely (see ServiceForm).
export const contactFormSchema = z.object({
  fullName: z.string().min(2, { message: "tooShort" }),
  email: z.string().email({ message: "invalidEmail" }),
  phoneNumber: z.string().min(10, { message: "invalidPhone" }),
  notes: z.string().optional(),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
