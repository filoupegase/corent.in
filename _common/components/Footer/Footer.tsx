import type { ComponentProps } from "react";
import { styled, theme, keyframes } from "../../../lib/styles/stitches.config";


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
