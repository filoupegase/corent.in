"use client";

import { useActionState, useState } from "react";
import { Input } from "@/components/ui/input";
import { send, type ContactState, type ContactInput } from "@/lib/server/resend";

const ContactForm = () => {
  const [formState, formAction, pending] = useActionState<ContactState, FormData>(send, {
    success: false,
    message: "",
  });

  // keep track of input so we can repopulate the fields if the form fails
  const [formFields, setFormFields] = useState<Partial<ContactInput>>({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form action={formAction} className="my-6 space-y-4">
      <div>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formFields.name}
          onChange={(e) => {
            setFormFields({ ...formFields, name: e.target.value });
          }}
          disabled={pending || formState.success}
          aria-invalid={formState.errors?.name ? "true" : undefined}
        />
        {formState.errors?.name && (
          <span className="text-destructive text-[0.8rem] font-semibold">{formState.errors.name[0]}</span>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
