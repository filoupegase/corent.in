import type { ComponentProps } from "react";
import { styled } from '../../../lib/styles/stitches.config';


const Wrapper = styled("ul", {
  display: "initial-flex",
  padding: 0,
  margin: 0,

  "@meduim": {
    width: "100%",
    justifyContent: "space-between",
    marginLeft: "1em"
  },

  "@small": {
    marginLeft: "1.4em"
  },
})

export type MenuProps = ComponentProps<typeof Wrapper>;

const Menu = ({ ...rest }: MenuProps) => {
  return (
    <Wrapper>

    </Wrapper>
  )
}

export default Menu;
