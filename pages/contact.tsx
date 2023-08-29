import { NextSeo } from "next-seo";
import { styled } from "../lib/styles/stitches.config";
import Content from "../_common/components/Content";
import PageTitle from "../_common/components/PageTitle";

const Heading2 = styled("h2", {
  margin: "0.5em 0 0.5em -1px",
  fontSize: "1.65em",
  fontWeight: 400,
  lineHeight: 1.4,
  color: "$text",
  "@medium": {
    fontSize: "1.25em",
  },
});

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
        <Heading2>coming soon 🗂</Heading2>
      </Wrapper>
    </>
  );
};

export default Contact;
