import React from 'react';
import Link, { LinkProps } from '../_common/components/Link';
import { styled, keyframes } from '../lib/styles/stitches.config';


const ColorLink = ({
                     ...rest
                   }: LinkProps & {
  lightColor: string;
  darkColor: string;
}) => {
  return (
      <Link
          { ...rest }
      />
  )
}

const App = () => {
  return (
      <>
        <Heading1>
          Hi there! I'm Coco <Wave>👋</Wave>
        </Heading1>
        <Heading2>
          I'm a frontend web developer based in the Paris area.
        </Heading2>
{/*        <ColorLink
            text='salut'
        />*/}
      </>
  );
}

const Heading1 = styled("h1", {
  margin: '0 0 0.5em -1px',
  fontSize: '1.8em',
  fontWeight: 500,
  lineHeight: 1.1,
  color: '$text',
  "@medium": {
    fontSize: "1.25em"
  }
});

const Heading2 = styled('h2', {
  margin: "0.5em 0 0.5em -1px",
  fontSize: "1.35em",
  fontWeight: 400,
  lineHeight: 1.4,
  color: "$text",
  "@medium": {
    fontSize: "1.25em",
  },
});

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

export default App;
