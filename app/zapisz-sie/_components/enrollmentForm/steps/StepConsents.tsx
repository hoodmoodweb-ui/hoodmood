import { useFormContext } from "react-hook-form";

import type { EnrollmentFormData } from "@/lib/schemas/enrollmentSchema";
import FormCheckboxField from "@/myComponents/forms/fields/FormCheckboxField";

export default function StepConsents() {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext<EnrollmentFormData>();

  return (
    <section className=" px-1 ">
      <FormCheckboxField<EnrollmentFormData>
        control={control}
        name="consentsAccepted"
        id="consents-accepted"
        error={errors.consentsAccepted}
        disabled={isSubmitting}
        label={
          <p className="ui-muted-copy text-xs leading-6 dark:text-white/80">
            Akceptuję{" "}
            <a
              href="/regulamin"
              className="underline decoration-white/35 underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              regulamin
            </a>{" "}
            i{" "}
            <a
              href="/polityka-prywatnosci"
              className="underline decoration-white/35 underline-offset-4"
              target="_blank"
              rel="noopener"
            >
              politykę prywatności
            </a>
            .
          </p>
        }
      />
    </section>
  );
}
