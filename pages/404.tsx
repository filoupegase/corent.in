import { NextSeo } from "next-seo";
import { styled, theme } from "../lib/styles/stitches.config";
import Link from "../_common/components/Link";
import Image from "../_common/components/Image";
import pandaAngry from "../public/static/angry-panda.gif";


const Center = styled('div', {
  textAlign: "center"
});

const H1 = styled("h1", {
  fontSize: "1.8em",
  fontWeight: 500,
  color: theme.colors.text,

  "@medium": {
    fontSize: "1.6em",
  },
});

const FourOhFour = () => {
  return (
    <>
      <NextSeo title='404 Not Found' />

      <Center>
        <Image src={ pandaAngry } alt="404s make a panda angry..." quality={ 30 } />
        <H1>404: Page Not Found 😢</H1>

        <Link href="/">Go home?</Link>
      </Center>
    </>
  );
};

export default FourOhFour;
