import Content from "../../_common/components/Content";
import PageTitle from "../../_common/components/PageTitle";
import Link from "../../_common/components/Link";
import ContactForm from "./form";
import { metadata as defaultMetadata } from "../layout";
import type { Metadata, Route } from "next";

export const metadata: Metadata = {
  title: "Contact Me",
  openGraph: {
    ...defaultMetadata.openGraph,
    title: "Contact Me",
    url: "/contact",
  },
  alternates: {
    ...defaultMetadata.alternates,
    canonical: "/contact",
  },
};

export default function Page() {
  return (
    <>
      <PageTitle>📬 Contact Me</PageTitle>

      <Content
        style={{
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
          <Link href={"/pubkey.asc" as Route} title="My Public PGP Key" rel="pgpkey authn" openInNewTab>
            <code style={{ fontSize: "0.925em", letterSpacing: "0.075em", wordSpacing: "-0.3em" }}>
              2AB5 62FA CED0 D4F2 4D07 310F D90E C481 4942 ED2E
            </code>
          </Link>
          .
        </p>

        <ContactForm />
      </Content>
    </>
  );
}
