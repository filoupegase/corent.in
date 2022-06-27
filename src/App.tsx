import React from 'react';
import { styled, keyframes } from './lib/styles/stitches.config';


const App = () => {
  return (
      <>
        <Heading1>
          Hi there! I'm Coco <Wave>👋</Wave>
        </Heading1>
        <h2>
          I'm a frontend web developer based in Paris, France
        </h2>
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
