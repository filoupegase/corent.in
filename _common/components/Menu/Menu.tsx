import type { ComponentProps } from "react";
import { useRouter } from "next/router";
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
});

const Item = styled("li", {
  display: "inline-block",
  marginLeft: "1em",
  listStyle: "none",

  "@meduim": {
    marginLeft: 0
  },

  "@small": {
    // the home icon is kinda redundant when space is SUPER tight
    "&:first-of-type": {
      display: "none",
    },
  }
})

export type MenuProps = ComponentProps<typeof Wrapper>;

const Menu = ({ ...rest }: MenuProps) => {
  const router = useRouter();

  return (
    <Wrapper { ...rest }>
      <Item>
      </Item>
    </Wrapper>
  )
}

export default Menu;
