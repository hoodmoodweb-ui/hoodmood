import { z } from "zod";

export const contactFormSchema = z.object({
  fullName: z.string().min(2, "Imię i nazwisko musi zawierać minimum 2 znaki"),
  email: z.string().email("Podaj prawidłowy adres e-mail"),
  phone: z.preprocess(
    (value) =>
      typeof value === "string" ? value.replace(/\D/g, "").slice(0, 9) : value,
    z
      .string()
      .regex(/^\d{9}$/, "Numer telefonu musi zawierać dokładnie 9 cyfr"),
  ),
  message: z.string().min(10, "Wiadomość musi zawierać minimum 10 znaków"),
  termsAccepted: z
    .boolean()
    .refine(
      (val) => val === true,
      "Musisz zaakceptować regulamin i politykę prywatności",
    ),
});

export type ContactFormInput = z.input<typeof contactFormSchema>;
export type ContactFormData = z.output<typeof contactFormSchema>;
