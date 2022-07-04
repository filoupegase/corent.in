import { ComponentProps } from 'react';
import { styled } from "../../../lib/styles/stitches.config"


const Flex = styled('div', {
  display: "flex",
  flexDirection: 'column',
  minHeight: '100vh'
})


export type LayoutProps = ComponentProps<typeof Flex> & {
  container?: boolean// pass false to disable default `<main>` container styles with padding... etc.
}

const Layout = ({ container = true, children, ...rest }: LayoutProps) => {
  return (
    <p>salut Layout</p>
  )
}

export default Layout;
