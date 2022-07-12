import React from 'react';
import Link, { LinkProps } from '../_common/components/Link';
import { styled, keyframes, darkTheme } from '../lib/styles/stitches.config';


const ColorfulLink = ({
                        lightColor,
                        darkColor,
                        css,
                        ...rest
                      }: LinkProps & {
  lightColor: string;
  darkColor: string;
}) => {
  return (
    <Link
      css={ {
        color: lightColor,
        setUnderlineVars: { color: lightColor },
        [`.${ darkTheme } &`]: {
          color: darkColor,
          setUnderlineVars: { color: darkColor },
        },
        ...css
      } }
      { ...rest }
    />
  );
};

const Heading1 = styled("h1", {
  margin: "0 0 0.5em -1px",
  fontSize: "1.8em",
  fontWeight: 500,
  lineHeight: 1.1,
  color: "$text",
  "@medium": {
    fontSize: "1.6em",
  },
});

const UnderHeadOne = styled("h3", {
  margin: "0 0 0.5em -1px",
  fontSize: "1.45em",
  fontWeight: 500,
  lineHeight: 1.1,
  color: "$text",
  "@medium": {
    fontSize: "1.30em",
  },
});

const Heading2 = styled("h2", {
  margin: "0.5em 0 0.5em -1px",
  fontSize: "1.35em",
  fontWeight: 400,
  lineHeight: 1.4,
  color: "$text",
  "@medium": {
    fontSize: "1.25em",
  },
});

const Paragraph = styled("p", {
  margin: "0.85em 0",
  lineHeight: 1.7,
  color: "$text",
  "&:last-of-type": {
    marginBottom: 0,
  },
  "@medium": {
    fontSize: "0.95em",
    lineHeight: 1.825,
  },
})

const Wave = styled("span", {
  display: "inline-block",
  marginLeft: "0.1em",
  fontSize: "1.2em",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${ keyframes({
      "0%": { transform: "rotate(0deg)" },
      "5%": { transform: "rotate(15deg)" },
      "10%": { transform: "rotate(-8deg)" },
      "15%": { transform: "rotate(14deg)" },
      "20%": { transform: "rotate(-4deg)" },
      "25%": { transform: "rotate(10deg)" },
      "30%": { transform: "rotate(0deg)" },
      "100%": { transform: "rotate(0deg)" },
    }) } 5s ease 1s infinite`,
    transformOrigin: "65% 80%",
    willChange: "transform",
  }
});

const Sup = styled("sup", {
  margin: "0 0.15em",
  fontSize: "0.65em"
});

const PGPKey = styled("code", {
  marginLeft: "0.15em",
  wordSpacing: "-0.4em"
});

const Quiet = styled(ColorfulLink, {
  // rotated 🪄 emoji on hover
  "&:hover": {
    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='30' style='font-size:24px'><text y='50%' transform='rotate(-70 0 0) translate(-20, 6)'>🪄</text></svg>") 5 5, auto`,
  }
})

const Index = () => {
  return (
    <>
      <Heading1>
        Hi there! I'm Coco <Wave>👋</Wave>
      </Heading1>
      <UnderHeadOne>Welcome to my humble abode on the World Wide Web 🏡</UnderHeadOne>
      <Heading2>
        I'm a frontend web developer based in{ " " }
        <ColorfulLink
          href="https://youtu.be/6J6eppvIIgI?t=1"
          title="Les Danceuses Du Moulin Rouge - French Cancan on YouTube"
          lightColor="#fb4d42"
          darkColor="#ff5146"
        >
          Paris
        </ColorfulLink>{ "" }.
      </Heading2>
    </>
  );
};

export default Index;
