import type { ComponentProps } from "react";
import { styled, theme, keyframes } from "../../../lib/styles/stitches.config";
import Link from '../Link';


const Wrapper = styled('footer', {
  width: "100%",
  padding: "1.25em 1.5em",
  backgroundColor: theme.colors.backgroundOuter,
  color: theme.colors.mediumDark,
  transition: `background ${ theme.transitions.fade }, border ${ theme.transitions.fade }`,

  "@medium": {
    padding: "1em 1.25em",
  },
});

const Row = styled("div", {
  display: "flex",
  width: "100%",
  maxWidth: theme.sizes.maxLayoutWidth,
  margin: "0 auto",
  justifyContent: "space-between",
  fontSize: "0.85em",
  lineHeight: 2.3,

  "@meduim": {
    fontSize: "0.8em",
    display: "block"
  }
});

const PainLink = styled(Link, {
  color: theme.colors.mediumDark
});


export type FooterProps = ComponentProps<typeof Wrapper>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <Wrapper { ...rest }>
      <Row>

      </Row>
    </Wrapper>
  )
}

export default Footer;
