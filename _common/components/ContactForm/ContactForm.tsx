import { useState } from "react";
import { Formik, Form, Field } from "formik";
import TextareaAutosize from "react-textarea-autosize";
import Link from "../Link";
import Captcha from "../Captcha";
import { SiMarkdown } from "react-icons/si";
import { styled, css, theme } from "../../../lib/styles/stitches.config";
import type { FormikHelpers, FormikProps, FieldInputProps, FieldMetaProps } from "formik";

// CSS applied to both `<input />` and `<textarea />`
const InputStyles = css({
  width: "100%",
  padding: "0.8em",
  margin: "0.6em 0",
  border: `2px solid ${theme.colors.light}`,
  borderRadius: theme.radii.corner,
  color: theme.colors.text,
  backgroundColor: theme.colors.superDuperLight,
  transition: `background ${theme.transitions.fade}`,

  "&:focus": {
    outline: "none",
    borderColor: theme.colors.link,
  },

  variants: {
    missing: {
      true: {
        borderColor: theme.colors.error,
      },
      false: {},
    },
  },
});

const Input = styled("input", InputStyles);

const TextArea = styled(TextareaAutosize, InputStyles, {
  marginBottom: 0,
  lineHeight: 1.5,
  minHeight: "10em",
  resize: "vertical",
});

const MarkdownTip = styled("div", {
  fontSize: "0.825em",
  lineHeight: 1.75,
});

const MarkdownTipIcon = styled(SiMarkdown, {
  width: "1.25em",
  height: "1.25em",
  verticalAlign: "-0.25em",
  marginRight: "0.25em",
});

const HCaptcha = styled(Captcha, {
  margin: "1em 0",
});

const ActionRow = styled("div", {
  display: "flex",
  alignItems: "center",
  minHeight: "3.75em",
});

const SubmitButton = styled("button", {
  flexShrink: 0,
  height: "3.25em",
  padding: "1em 1.25em",
  marginRight: "1.5em",
  border: 0,
  borderRadius: theme.radii.corner,
  cursor: "pointer",
  userSelect: "none",
  fontWeight: 500,
  color: theme.colors.text,
  backgroundColor: theme.colors.kindaLight,

  "&:hover, &:focus-visible": {
    color: theme.colors.superDuperLight,
    backgroundColor: theme.colors.link,
  },

  variants: {
    hidden: {
      true: {
        display: "none",
      },
      false: {},
    },
  },
});

const SubmitIcon = styled("span", {
  fontSize: "1.3em",
  marginRight: "0.3em",
  lineHeight: 1,
});

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

  const handleSubmit = (values: FormValues, { setSubmitting }: FormikHelpers<FormValues>) => {
    // once a user attempts a submission, this is true and stays true whether or not the next attempt(s) are successful
    setSubmitted(true);
  };

  return (
    <Formik
      onSubmit={handleSubmit}
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
      {({ setFieldValue, isSubmitting }: FormikProps<FormValues>) => (
        <Form className={className} name="contact">
          <Field name="name">
            {({ field, meta }: { field: FieldInputProps<string>; meta: FieldMetaProps<string> }) => (
              <Input
                type="text"
                placeholder="Name"
                disabled={success}
                missing={!!(meta.error && meta.touched)}
                {...field}
              />
            )}
          </Field>

          <Field name="email">
            {({ field, meta }: { field: FieldInputProps<string>; meta: FieldMetaProps<string> }) => (
              <Input
                type="email"
                inputMode="email"
                placeholder="Email"
                disabled={success}
                missing={!!(meta.error && meta.touched)}
                {...field}
              />
            )}
          </Field>

          <Field name="message">
            {({ field, meta }: { field: FieldInputProps<string>; meta: FieldMetaProps<string> }) => (
              <TextArea
                placeholder="Write something..."
                minRows={5}
                disabled={success}
                missing={!!(meta.error && meta.touched)}
                {...field}
              />
            )}
          </Field>

          <MarkdownTip>
            <MarkdownTipIcon /> Basic{" "}
            <Link href="https://commonmark.org/help/" title="Markdown reference sheet" css={{ fontWeight: 600 }}>
              Markdown syntax
            </Link>{" "}
            is allowed here, e.g.: <strong>**bold**</strong>, <em>_italics_</em>, [
            <Link href="https://corent-in.vercel.app" underline={false} openInNewTab>
              links
            </Link>
            ](https://corent-in.vercel.app), and <code>`code`</code>.
          </MarkdownTip>

          <HCaptcha onVerify={(token) => setFieldValue("h-captcha-response", token)} />

          <ActionRow>
            <SubmitButton
              type="submit"
              title="Send Message"
              aria-label="Send Message"
              onClick={() => setSubmitted(true)}
              disabled={isSubmitting}
              hidden={success}
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <SubmitIcon>📤</SubmitIcon> <span>Send</span>
                </>
              )}
            </SubmitButton>

            <></>
          </ActionRow>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
