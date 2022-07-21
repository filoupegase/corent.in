import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { DefaultSeo, SocialProfileJsonLd } from 'next-seo';
import * as Fathom from "fathom-client";
import { ThemeProvider } from "../contexts/ThemeContext";
import Layout from "../_common/components/Layout";
import * as config from "../lib/config";
import { defaultSeo, socialProfileJsonLd } from "../lib/config/seo";
import type { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import type { AppProps as NextAppProps } from "next/app";
import { globalStyles, themeClassNames } from "../lib/styles/stitches.config";

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};


const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  globalStyles();

  const getLayout = Component.getLayout || ((page) => <Layout>{ page }</Layout>);

  return (
    <>
      <DefaultSeo
        { ...defaultSeo }
      />
      <SocialProfileJsonLd { ...socialProfileJsonLd } />

      <ThemeProvider
        classNames={ themeClassNames }>
        { getLayout(<Component { ...pageProps } />) }
      </ThemeProvider>
    </>
  );
};

export default App;
