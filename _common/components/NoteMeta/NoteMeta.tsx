import Link from "../Link";
import Time from "../Time";
import { styled, theme } from "../../../lib/styles/stitches.config";
import type { NoteFrontMatter } from "../../../types";
import { DateIcon } from "../Icons";

const Wrapper = styled("div", {
  display: "inline-flex",
  flexWrap: "wrap",
  fontSize: "0.825em",
  lineHeight: 2.3,
  letterSpacing: "0.04em",
  color: theme.colors.medium,
});

const MetaItem = styled("div", {
  marginRight: "1.6em",
  whiteSpace: "nowrap",
});

const MetaLink = styled(Link, {
  color: "inherit",
});

const Icon = styled("svg", {
  width: "1.2em",
  height: "1.2em",
  verticalAlign: "-0.2em",
  marginRight: "0.6em",
});

export type NoteMetaProps = Pick<NoteFrontMatter, "slug" | "date" | "title" | "htmlTitle" | "tags">;

const NoteMeta = ({ slug, date, title, htmlTitle, tags }: NoteMetaProps) => {
  return (
    <>
      <Wrapper>
        <MetaItem>
          <MetaLink
            href={{
              pathname: "/notes/[slug]",
              query: { slug },
            }}
            underline={false}
          >
            <Icon as={DateIcon} />
            <Time date={date} format="MMMM D, YYYY" />
          </MetaLink>
        </MetaItem>
      </Wrapper>
    </>
  );
};

export default NoteMeta;
