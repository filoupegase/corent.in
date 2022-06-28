import type { ComponentProps } from 'react';
import NextLink from "next"
import { styled } from '../../../lib/styles/stitches.config';
import { baseUrl } from "../../../lib/config"


const StyledLink = styled(NextLink, {
  color: "$link",
  textDecoration: "none",

  variants: {
    underline: {
      // nice animated link underline effect
      true: {
        setUnderlineVars: {},
        // underline height is based on link's font size
        $$underlineSize: "calc(0.1em + 0.05rem)",

        backgroundImage: `linear-gradient($$underlineColor, $$underlineColor)`,
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% $$underlineSize",
        paddingBottom: "0.2rem",

        "@media (prefers-reduced-motion: no-preference)": {
          transition: "background-size 0.25s ease-in-out",
        },

        "&:hover": {
          backgroundSize: "100% $$underlineSize",
        }
      },
      false: {}
    }
  }
});

export type LinkProps = ComponentProps<typeof StyledLink> & {
  openInNewTab?: boolean
}

// Ce composant détecte automatiquement si ce lien doit s'ouvrir dans la même fenêtre
// (par défaut pour les liens internes) ou dans un nouvel onglet

// @ts-ignore
const Link = ({ href, rel, target, prefetch = false, underline = true, openInNewTab, ...rest }: LinkProps) => {
  // @ts-ignore
  const isExternal = typeof href === "string" && !(href.startsWith("/") || href.startsWith("#") || href.startsWith(baseUrl));

  if (openInNewTab || isExternal) {
    return (
        <StyledLink
            href={ href }
            target={ target || "_black" }
            rel={ `${ rel || '' } noopener ${ isExternal ? "noreferrer" : "" }`.trim() }
            underline={ underline }
            { ...rest }
        />
    );
  }
  return (
      <StyledLink
          { ...{ href, rel, target, prefetch, underline, ...rest } }
      />
  );
}

export default Link;
