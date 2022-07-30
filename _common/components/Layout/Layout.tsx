import type { ComponentProps } from 'react';
import Head from 'next/head';
import { styled, theme, darkTheme } from "../../../lib/styles/stitches.config"
import useTheme from "../../hooks/useTheme";
import Header from '../Header';
import Footer from '../Footer';
import { SkipToContentLink, SkipToContentTarget } from "../SkipToContent";


const Flex = styled("div", {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
});

const Default = styled("main", {
  width: "100%",
  padding: "1.5em"
});

const ContainerDiv = styled("div", {
  maxWidth: theme.sizes.maxLayoutWidth,
  margin: "0 auto",
  display: "block"
});

const StickyHeader = styled(Header, {
  position: "sticky",
  top: 0
});

const FlexedFooter = styled(Footer, {
  flex: 1
});

export type LayoutProps = ComponentProps<typeof Flex> & {
  container?: boolean // pass false to disable default `<main>` container styles with padding... etc.
}

const Layout = ({ container = true, children, ...rest }: LayoutProps) => {
  const { activeTheme } = useTheme();

  return (
    <>
      <Head>
        <meta
          name="theme-color"
          content={ (activeTheme === "dark" ? darkTheme : theme)?.colors?.backgroundOuter?.value }
        />
      </Head>

      <SkipToContentLink />

      <Flex { ...rest }>
        <StickyHeader />
        { container ? (
          <Default>
            <SkipToContentTarget />
            <ContainerDiv>{ children }</ContainerDiv>
          </Default>
        ) : (
          <>
            <SkipToContentTarget />
            { children }
          </>
        ) }

        <FlexedFooter />
      </Flex>
    </>
  )
}

export default Layout;
