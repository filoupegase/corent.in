import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText, themeClassNames, themeStorageKey } from '../lib/styles/stitches.config';


const Document = () => {
  return (
    <Html lang="en" className={ themeClassNames["light"] }>
      <Head>
        {/* inject a small script to set/restore the user's theme ASAP */ }


        <style id="stitches" dangerouslySetInnerHTML={ { __html: getCssText() } } />
      </Head>

      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
};

export default Document;
