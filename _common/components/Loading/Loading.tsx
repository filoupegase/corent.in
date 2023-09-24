import { styled, theme, keyframes } from "../../../lib/styles/stitches.config";
import type { ComponentPropsWithoutRef } from "react";

const Wrapper = styled("div", {
  display: "inline-block",
  textAlign: "center",
});

const Box = styled("div", {
  display: "inline-block",
  height: "100%",
  animation: `${keyframes({
    "0%, 80%, 100%": {
      transform: "scale(0)",
    },
    "40%": {
      transform: "scale(0.6)",
    },
  })} 1.5s infinite ease-in-out both`,
  backgroundColor: theme.colors.mediumLight,
});

export type LoadingProps = ComponentPropsWithoutRef<typeof Wrapper> & {
  width: number;
  boxes?: number;
  timing?: number;
};

const Loading = ({ width, boxes = 3, timing = 0.1, css, ...rest }: LoadingProps) => {
  // each box is just an empty div
  const divs = [];

  // allow a custom number of pulsing boxes (defaults to 3)
  for (let i = 0; i < boxes; i++) {
    // width of each box correlates with number of boxes (with a little padding)
    // each individual box's animation has a staggered start in corresponding order
    divs.push(
      <Box
        key={i}
        css={{
          width: `${width / (boxes + 1)}px`,
        }}
        style={{
          animationDelay: `${i * timing}s`,
        }}
      />
    );
  }

  return (
    <Wrapper
      css={{
        width: `${width}px`,
        height: `${width / 2}px`,
        ...css,
      }}
      {...rest}
    >
      {divs}
    </Wrapper>
  );
};

export default Loading;
