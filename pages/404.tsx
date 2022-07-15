import { styled, theme } from "../lib/styles/stitches.config"


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
      <Center>
        <H1>404: Page Not Found 😢</H1>
      </Center>
    </>
  );
};

export default FourOhFour;
