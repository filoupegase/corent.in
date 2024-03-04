import NextLink from "next/link";
import objStr from "obj-str";
import { styled, theme, stitchesConfig } from "../../../lib/styles/stitches.config";
import type { ComponentPropsWithoutRef } from "react";

const StyledLink = styled(NextLink, {
  color: theme.colors.link,
  textDecoration: "none",

  variants: {
    underline: {
      // fancy animated link underline effect (on by default)
      true: {
        // sets psuedo linear-gradient() for the underline's color; see stitches config for the weird calculation behind
        // the local `$$underlineColor` variable.
        ...stitchesConfig.utils.setUnderlineColor({ color: "$colors$linkUnderline" }),

        backgroundImage: "linear-gradient($$underlineColor, $$underlineColor)",
        backgroundPosition: "0% 100%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "0% 2px",
        paddingBottom: "3px",

        "@media (prefers-reduced-motion: no-preference)": {
          transition: `background-size ${theme.transitions.linkHover}`,
        },

        "&:hover, &:focus-visible": {
          backgroundSize: "100% 2px",
        },
      },
      false: {},
    },
  },
});

export type LinkProps = ComponentPropsWithoutRef<typeof StyledLink> & {
  openInNewTab?: boolean;
};

const Link = ({ href, rel, target, prefetch = false, underline = true, openInNewTab, ...rest }: LinkProps) => {
  // Ce composant détecte automatiquement si ce lien doit s'ouvrir ou non dans la même fenêtre (valeur par défaut pour les
  // liens) ou un nouvel onglet (par défaut pour les liens externes).
  // Les valeurs par défaut peuvent être remplacées par `openInNewTab={true}`.
  const isExternal =
    typeof href === "string" &&
    !(
      ["/", "#"].includes(href[0]) ||
      (process.env.NEXT_PUBLIC_BASE_URL && href.startsWith(process.env.NEXT_PUBLIC_BASE_URL))
    );

  if (openInNewTab || isExternal) {
    return (
      <StyledLink
        href={href}
        target={target || "_blank"}
        rel={objStr({
          [`${rel}`]: rel, // prepend whatever string is passed via optional `rel` prop
          noopener: true,
          noreferrer: isExternal, // don't add "noreferrer" if link isn't external, and only opening in a new tab
        })}
        underline={underline}
        {...rest}
      />
    );
  }

  // If link is to an internal page, simply pass *everything* along as-is to next/link.
  return <StyledLink {...{ href, rel, target, prefetch, underline, ...rest }} />;
};

export default Link;
