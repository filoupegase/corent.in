import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps as NextAppProps } from "next/app";
import Layout from '../_common/components/Layout'

// style
import { globalStyles } from '../lib/styles/stitches.config';

// https://nextjs.org/docs/basic-features/layouts#with-typescript
export type AppProps = NextAppProps & {
  Component: NextPage & {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};
globalStyles()

const App = ({ Component, pageProps }: AppProps) => {
  // Use the layout defined at the page level, if available

  // allow layout overrides per-page, but default to plain `<Layout />`
  const getLayout = Component.getLayout || ((page) => <Layout>{ page }</Layout>)

  return (
    <>
      getLayout(<Component { ...pageProps } />)
    </>
  )
}

export default App;
