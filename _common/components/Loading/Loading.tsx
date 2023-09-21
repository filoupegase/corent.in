import { styled } from "../../../lib/styles/stitches.config";
import type { ComponentPropsWithoutRef } from "react";

const Wrapper = styled("div", {
  display: "inline-block",
  textAlign: "center",
});

export type LoadingProps = ComponentPropsWithoutRef<typeof Wrapper> & {
  width: number;
  boxes?: number;
  timing?: number;
};

const Loading = ({ ...rest }: LoadingProps) => {
  return <Wrapper {...rest}></Wrapper>;
};

export default Loading;
