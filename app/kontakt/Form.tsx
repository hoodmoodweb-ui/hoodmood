import { Checkbox } from "@/components/ui/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupTextarea } from "@/components/ui/input-group";
import { buttonPrimaryStyes } from "@/myComponents/common/ButtonPrimary";
import { inputStyles } from "@/myComponents/pages/pricing/PricingFilterBar";
import { Mail, MessageSquareText, Phone, User } from "lucide-react";

export default function Form() {
  return (
     <form action="" className="flex flex-col gap-8">
              <Field className="flex flex-col gap-2.5">
                {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
                <FieldLabel
                  htmlFor="searchInput"
                  className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                >
                  Imię i nazwisko
                </FieldLabel>
                <InputGroup className={inputStyles}>
                  <InputGroupInput
                    id="input-field-username"
                    type="text"
                    placeholder="Wprowadź imię i nazwisko"
                  />
                  <InputGroupAddon>
                    <User className="text-black/35 dark:text-white/35" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <div className="flex flex-col gap-8 md:flex-row">
                <Field className="flex flex-col gap-2.5">
                  {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
                  <FieldLabel
                    htmlFor="searchInput"
                    className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                  >
                    Adres e-mail
                  </FieldLabel>
                  <InputGroup className={inputStyles}>
                    <InputGroupInput
                      id="input-field-username"
                      type="text"
                      placeholder="Wprowadź imię i nazwisko"
                    />
                    <InputGroupAddon>
                      <Mail className="text-black/35 dark:text-white/35" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
                <Field className="flex flex-col gap-2.5">
                  {/* <FieldLabel htmlFor="searchInput">Wyszukaj zajęć</FieldLabel> */}
                  <FieldLabel
                    htmlFor="searchInput"
                    className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                  >
                    Numer telefonu
                  </FieldLabel>
                  <InputGroup className={inputStyles}>
                    <InputGroupInput
                      id="input-field-username"
                      type="text"
                      placeholder="Wprowadź imię i nazwisko"
                    />
                    <InputGroupAddon>
                      <Phone className="text-black/35 dark:text-white/35" />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              </div>
              <Field>
                <FieldLabel
                  htmlFor="input-field-textarea"
                  className="text-[11px] uppercase tracking-[0.16em] text-black/55 dark:text-white/55 font-semibold    pl-1  "
                >
                  Wiadomość
                </FieldLabel>
                <InputGroup className={inputStyles}>
                  <InputGroupTextarea
                    id="input-field-textarea"
                    placeholder="Treść wiadomości"
                    className="min-h-[200px]"
                  />
                  <InputGroupAddon align={"block-start"} className="border-b ">
                    <MessageSquareText className="text-black/35 dark:text-white/35" />
                  </InputGroupAddon>
                </InputGroup>
              </Field>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox id="terms-checkbox" name="terms-checkbox" />
                  <FieldLabel
                    htmlFor="terms-checkbox"
                    className="inline-flex max-w-full text-wrap"
                  >
                    <p>
                      Zapoznałem się z{" "}
                      <a
                        href="/regulamin"
                        className="underline"
                        target="_blank"
                        rel="noopener"
                      >
                        regulaminem
                      </a>{" "}
                      i akceptuję{" "}
                      <a
                        className="underline"
                        href="/polityka-prywatnosci"
                        target="_blank"
                        rel="noopener"
                      >
                        politykę prywatności
                      </a>
                    </p>
                  </FieldLabel>
                </Field>
              </FieldGroup>
              <button
                type="submit"
                className={buttonPrimaryStyes + "hover:cursor-pointer"}
              >
                Wyślij
              </button>
            </form>
  )
}
