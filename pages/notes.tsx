import { styled } from "../lib/styles/stitches.config";

const Heading2 = styled("h2", {
  margin: "0.5em 0 0.5em -1px",
  fontSize: "1.65em",
  fontWeight: 400,
  lineHeight: 1.4,
  color: "$text",
  "@medium": {
    fontSize: "1.25em",
  },
});

const Notes = () => {
  return <Heading2>Notes coming soon 🦠</Heading2>;
};

export default Notes;
