import innerText from "react-innertext";
import HeadingAnchor from "../HeadingAnchor";
import type { ComponentPropsWithoutRef } from "react";
import { styled, theme } from "../../../lib/styles/stitches.config";

const Anchor = styled(HeadingAnchor, {
  margin: "0 0.4em",
  padding: "0 0.2em",
  color: theme.colors.medium,
  opacity: 0, // overridden on hover below (except on small screens)

  "&:hover, &:focus-visible": {
    color: theme.colors.link,
  },

  "@medium": {
    margin: "0 0.2em",
    padding: "0 0.4em",

    // don't require hover to show anchor link on small (likely touch) screens
    opacity: 1,
  },
});

const H = styled("h1", {
  marginTop: "1em",
  marginBottom: "0.5em",
  lineHeight: 1.5,

  // offset (approximately) with sticky header so jumped-to content isn't hiding behind it.
  // note: use rem so it isn't based on the heading's font size.
  scrollMarginTop: "5.5rem",

  "@medium": {
    scrollMarginTop: "6.5rem",
  },

  // show anchor link when hovering anywhere over the heading line, or on keyboard tab focus
  [`&:hover ${Anchor}, ${Anchor}:focus-visible`]: {
    opacity: 1,
  },

  variants: {
    // subtle horizontal rule under the heading, set by default on `<h2>`s
    divider: {
      true: {
        paddingBottom: "0.25em",
        borderBottom: `1px solid ${theme.colors.kindaLight}`,
      },
      false: {},
    },
  },
});

export type HeadingProps = ComponentPropsWithoutRef<typeof H> & {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  divider?: boolean;
};

const Heading = ({ level, id, divider, children, ...rest }: HeadingProps) => {
  return (
    <H as={`h${level}`} id={id} divider={divider || level === 2} {...rest}>
      {children}

      {/* add anchor link to H2s and H3s. ID is either provided or automatically generated by rehype-slug. */}
      {id && (level === 2 || level === 3) && <Anchor id={id} title={innerText(children)} />}
    </H>
  );
};

export const H1 = (props: Omit<HeadingProps, "level">) => <Heading level={1} {...props} />;
export const H2 = (props: Omit<HeadingProps, "level">) => <Heading level={2} {...props} />;
export const H3 = (props: Omit<HeadingProps, "level">) => <Heading level={3} {...props} />;
export const H4 = (props: Omit<HeadingProps, "level">) => <Heading level={4} {...props} />;
export const H5 = (props: Omit<HeadingProps, "level">) => <Heading level={5} {...props} />;
export const H6 = (props: Omit<HeadingProps, "level">) => <Heading level={6} {...props} />;

export default Heading;
