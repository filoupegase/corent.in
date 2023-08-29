import { NextSeo } from "next-seo";
import Content from "../../_common/components/Content";
import { authorName } from "../../lib/config";
import { styled, theme } from "../../lib/styles/stitches.config";

const H1 = styled("h1", {
  margin: "0 0 0.5em -1px",
  fontSize: "1.8em",
  fontWeight: 500,
  lineHeight: 1.1,
  color: theme.colors.text,

  "@medium": {
    fontSize: "1.6em",
  },
});

const Notes = () => {
  return (
    <>
      <NextSeo
        title="Notes"
        description={`Recent posts by ${authorName}.`}
        openGraph={{
          title: "Notes",
        }}
      />

      <Content>
        <H1>Coming soon 🥘</H1>
      </Content>
    </>
  );
};

export default Notes;
