import NextImage from "next/image";
import Link from "../Link";
import { styled, theme } from "../../../lib/styles/stitches.config";
import type { ComponentProps } from "react";
import type { ImageProps as NextImageProps, StaticImageData } from "next/image";


const Block = styled("div", {
  display: "block",
  lineHeight: 0,
  // default to centering all images
  margin: "1em auto",
  textAlign: "center"
});

const StyledImage = styled(NextImage, {
  height: "auto",
  maxWidth: "100%",
  borderRadius: theme.radii.corner,
});

export type ImageProps = ComponentProps<typeof StyledImage> & {
  href?: string;
  inline?: boolean;
};

const Image = ({ src, width, height, quality = 60, placeholder, href, inline, ...rest }: ImageProps) => {
  const imageProps: NextImageProps = {
    src,
    ...rest
  };
  const StyledImageWithProps = <StyledImage { ...imageProps } />;

  return inline ? (
    StyledImageWithProps
  ) : (
    <Block>
      {
        href ? (
            <Link href={ href } underline={ false }>
              { StyledImageWithProps }
            </Link>
          )
          : (
            StyledImageWithProps
          ) }
    </Block>
  )
};

export default Image;
