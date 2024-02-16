import { NextSeo } from "next-seo";
import Content from "../_common/components/Content";
import PageTitle from "../_common/components/PageTitle";
import Link from "../_common/components/Link";
import ContactForm from "../_common/components/ContactForm";
import { styled } from "../lib/styles/stitches.config";

const PGPKey = styled("code", {
  fontSize: "0.925em",
  letterSpacing: "0.075em",
  wordSpacing: "-0.3em",
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

      <Content
        css={{
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <p>
          Fill out this quick form and I'll get back to you as soon as I can! You can also{" "}
          <Link href="mailto:corentindevjs@gmail.com">email me directly</Link>.
        </p>
        <p>
          🔐 You can grab my public key here:{" "}
          <Link href="/pubkey.asc" title="My Public PGP Key" rel="pgpkey authn" openInNewTab>
            <PGPKey>2AB5 62FA CED0 D4F2 4D07 310F D90E C481 4942 ED2E</PGPKey>
          </Link>
          .
        </p>

        <ContactForm />
      </Content>
    </>
  );
};

export default Contact;
