import { ComponentProps } from 'react';
import Head from 'next/head';
import { styled } from "../../../lib/styles/stitches.config"
import { useTheme } from "../../hooks/use-theme";
import { themeColors } from '../../../lib/config/themes';
import Header from '../Header';
import Footer from '../Footer';


const Flex = styled('div', {
  display: "flex",
  flexDirection: 'column',
  minHeight: '100vh'
});

const Default = styled("main", {
  width: "100",
  padding: "1.5em"
});

const ContainerDiv = styled("div", {
  maxWidth: "865px",
  margin: "0 auto",
  display: "block"
});

const StickyHeader = styled(Header, {
  position: "sticky",
  top: 0
});

const FlexedFooter = styled(Footer, {
  flex: 1
})

const SkipNavLink = styled("a", {
  // accessible invisibility stuff pulled from @reach/skip-nav:
  // https://github.com/reach/reach-ui/blob/main/packages/skip-nav/styles.css
  border: 0,
  clip: "rect(0 0 0 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: 0,
  overflow: "hidden",
  position: "absolute",

  "&:focus": {
    padding: "1rem",
    position: "fixed",
    top: "10px",
    left: "10px",
    zIndex: 99999,
    width: "auto",
    height: "auto",
    clip: "auto",
    background: "$superDuperLight",
    color: "$link",
    border: "2px solid $kindaLight",
    borderRadius: "$rounded",
    textDecoration: "underline",
  },
});


export type LayoutProps = ComponentProps<typeof Flex> & {
  container?: boolean // pass false to disable default `<main>` container styles with padding... etc.
}

const Layout = ({ container = true, children, ...rest }: LayoutProps) => {
  const { activeTheme } = useTheme();
  const skipNavId = "skip-nav";

  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="theme-color" content={ themeColors[activeTheme === "dark" ? activeTheme : "light"] } />
      </Head>

      <SkipNavLink href={ `#${ skipNavId }` } role='link' tabIndex={ 0 }>
        Skip to content
      </SkipNavLink>

      <Flex { ...rest }>
        <StickyHeader />
        <Default>
          <ContainerDiv>{ children }</ContainerDiv>
        </Default>

        <FlexedFooter />
      </Flex>
    </>
  )
}

export default Layout;
