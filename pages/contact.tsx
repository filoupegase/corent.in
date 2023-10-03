import { NextSeo } from "next-seo";
import Content from "../_common/components/Content";
import PageTitle from "../_common/components/PageTitle";
import Link from "../_common/components/Link";
import ContactForm from "../_common/components/ContactForm";
import { styled } from "../lib/styles/stitches.config";

const Wrapper = styled(Content, {
  maxWidth: "600px",
  margin: "0 auto",
});

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Me"
        openGraph={{
          title: "Contact Me",
        }}
      />

      <PageTitle>📬 Contact Me</PageTitle>

      <Wrapper>
        <p>
          Fill out this quick form and I'll get back to you as soon as I can! You can also{" "}
          <Link href="mailto:corentindevjs@gmail.com">email me directly</Link>.
        </p>

        <ContactForm />
      </Wrapper>
    </>
  );
};

export default Contact;
