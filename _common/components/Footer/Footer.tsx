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


export type FooterProps = ComponentProps<typeof Wrapper>;

const Footer = ({ ...rest }: FooterProps) => {
  return (
    <Wrapper { ...rest }>

    </Wrapper>
  )
}

export default Footer;
