import type { ComponentProps } from "react";
import { HeartIcon, NextjsLogo } from "../Icons";
import { styled, theme, keyframes } from "../../../lib/styles/stitches.config";
import Link from '../Link';


const Wrapper = styled('footer', {
  width: "100%",
  padding: "1.25em 1.5em",
  borderTop: `1px solid ${ theme.colors.kindaLight }`,
  backgroundColor: theme.colors.backgroundOuter,
  color: theme.colors.mediumDark,
  transition: `background ${ theme.transitions.fade }, border ${ theme.transitions.fade }`,

  "@medium": {
    padding: "1em 1.25em",
  }
});

const Row = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: theme.sizes.maxLayoutWidth,
  margin: "0 auto",
  justifyContent: "space-between",
  fontSize: "0.85em",
  lineHeight: 2.3,

  "@medium": {
    fontSize: "0.8em",
    display: "block"
  }
});

const PainLink = styled(Link, {
  color: theme.colors.mediumDark
});

const NextjsLink = styled(PainLink, {
  "&:hover": {
    color: theme.colors.medium
  }
});

const ViewSourceLink = styled(PainLink, {
  paddingBottom: "2px",
  borderBottom: `1px solid ${ theme.colors.light }`,

  "&:hover": {
    borderColor: theme.colors.kindaLight
  }
});

const Icon = styled('svg', {
  width: "1.25em",
  height: "1.25em",
  verticalAlign: "-0.25em",
  margin: "0 0.075em",
  fill: "currentColor"
});

const Heart = styled("span", {
  display: "inline-block",
  color: theme.colors.error,

  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${ keyframes({
      "0%": { transform: "scale(1)" },
      "2%": { transform: "scale(1.25)" },
      "4%": { transform: "scale(1)" },
      "6%": { transform: "scale(1.2)" },
      "8%": { transform: "scale(1)" },
      "100%": { transform: "scale(1)" },
    }) } 10s ease 7.5s infinite`,
    willChange: "transform",
  },
});

export type FooterProps = ComponentProps<typeof Wrapper>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <Wrapper { ...rest }>
      <Row>
        <div>
          Content licensed under CC-BY-4.0, 2001 – 2022.{ " " }
        </div>
        <div>
          Made with{ " " }
          <Heart title="love">
            <Icon as={ HeartIcon } />
          </Heart>{ " " }
          and{ " " }
          <NextjsLink
            href="https://nextjs.org/"
            title="Powered by Next.js"
            aria-label="Next.js"
            underline={ false }
          >
            <Icon as={ NextjsLogo } />
          </NextjsLink>
          .{ " " }
        </div>
      </Row>
    </Wrapper>
  )
}

export default Footer;
