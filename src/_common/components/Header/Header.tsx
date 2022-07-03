import type { ComponentProps } from "react";


export type HeaderProps = ComponentProps<any>;

const Header = ({ ...rest }: HeaderProps) => {
  return (
    <p>salut</p>
  )
}

export default Header;
