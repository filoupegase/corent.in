import { ErrorBoundary } from "react-error-boundary";
import Link from "../Link";
import Time from "../Time";
import NoteTitle from "../PostTitle";
import { FiCalendar, FiTag, FiEdit, FiEye } from "react-icons/fi";
import { styled, theme } from "../../../lib/styles/stitches.config";
import * as config from "../../../lib/config";
import type { PostFrontMatter } from "../../../types";
import HitCounter from "../HitCounter";

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

const TagList = styled("span", {
  witheSpace: "normal",
  display: "inline-flex",
  flexWrap: "wrap",
});

const Tag = styled("span", {
  textTransform: "lowercase",
  whiteSpace: "nowrap",
  marginRight: "0.75em",

  "&::before": {
    content: "\\0023",
    paddingRight: "0.125em",
    color: theme.colors.light,
  },

  "&:last-of-type": {
    marginRight: 0,
  },
});

export type NoteMetaProps = Pick<PostFrontMatter, "slug" | "date" | "title" | "htmlTitle" | "tags">;

const PostMeta = ({ slug, date, tags, title, htmlTitle }: NoteMetaProps) => {
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
            <Icon as={FiCalendar} />
            <Time date={date} format="MMMM D, YYYY" />
          </MetaLink>
        </MetaItem>

        {tags && (
          <MetaItem>
            <Icon as={FiTag} />
            <TagList>
              {tags.map((tag) => (
                <Tag key={tag} title={tag} aria-label={`Tagged with ${tag}`}>
                  {tag}
                </Tag>
              ))}
            </TagList>
          </MetaItem>
        )}
        <MetaItem>
          <MetaLink
            href={`https://github.com/${config.githubRepo}/corent.in/blob/develop/notes/${slug}.mdx`}
            title={`Edit "${title}" on GitHub`}
            underline={false}
          >
            <Icon as={FiEdit} />
            <span>Improve This Post</span>
          </MetaLink>
        </MetaItem>

        {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && (
          <MetaItem
            css={{
              // fix potential layout shift when number of hits loads
              minWidth: "7em",
              marginRight: 0,
            }}
          >
            {/* completely hide this block if anything goes wrong on the backend */}
            <ErrorBoundary fallback={null}>
              <Icon as={FiEye} />
              <HitCounter slug={`notes/${slug}`} />
            </ErrorBoundary>
          </MetaItem>
        )}
      </Wrapper>

      <NoteTitle {...{ slug, title, htmlTitle }} />
    </>
  );
};

export default PostMeta;
