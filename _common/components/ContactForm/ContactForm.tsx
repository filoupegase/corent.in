import { useState } from "react";
import { Formik } from "formik";

type FormValues = {
  name: string;
  email: string;
  message: string;
  "h-captcha-response": string;
};

export type ContactFormProps = {
  className?: string;
};

const ContactForm = ({ className }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [success, setSuccess] = useState(false);
  const [feedback, setFeedback] = useState("");

  return (
    <Formik
      onSubmit={() => console.log("onSub")}
      initialValues={{
        name: "",
        email: "",
        message: "",
        "h-captcha-response": "",
      }}
      validate={(values: FormValues) => {
        const errors: Partial<Record<keyof FormValues, boolean>> = {};

        errors.name = !values.name;
        errors.email = !values.email; // also loosely validated that it's email-like via browser (not foolproof)
        errors.message = !values.message;
        errors["h-captcha-response"] = !values["h-captcha-response"];

        if (!errors.name && !errors.email && !errors.message && !errors["h-captcha-response"]) {
          setFeedback("");
          return {};
        } else {
          setSuccess(false);
          setFeedback("Please make sure that all fields are properly filled in.");
        }

        return errors;
      }}
    >
      {/*{({ setFieldValue, isSubmitting }: FormikProps<FormValues>) => (*/}
      {/*  */}
      {/*))}*/}
    </Formik>
  );
};

export default ContactForm;
