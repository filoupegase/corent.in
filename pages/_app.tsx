import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";
import { ThemeProvider } from "../contexts/ThemeContext";
import { themeClassNames } from '../lib/config/themes';
import Layout from "../_common/components/Layout";

// style
import { globalStyles } from "../lib/styles/stitches.config";

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};


const App = ({ Component, pageProps }: AppProps) => {
  // Use the layout defined at the page level, if available

  globalStyles();

  // allow layout overrides per-page, but default to plain `<Layout />`
  const getLayout = Component.getLayout || ((page) => <Layout>{ page }</Layout>);

  return (
    <>
      <ThemeProvider
        classNames={ themeClassNames }>
        { getLayout(<Component { ...pageProps } />) }
      </ThemeProvider>
    </>
  );
};

export default App;
