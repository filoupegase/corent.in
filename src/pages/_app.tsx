import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps as NextAppProps } from "next/app";

// style
import { globalStyles } from '../lib/styles/stitches.config';

//https://nextjs.org/docs/basic-features/layouts#with-typescript
export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(<Component { ...pageProps } />)
}
