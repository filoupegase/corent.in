import { ComponentProps } from 'react';
import { styled, theme } from "../../../lib/styles/stitches.config";
import Link from '../Link';
import { authorName } from "../../../lib/config";
import Image from "../Image";

import selfieJpeg from "../../../public/static/images/me.jpeg"


const CircleImage = styled(Image, {
  width: 50,
  height: 50,
  border: `1px solid ${ theme.colors.light }`,
  borderRadius: "50%",

  "@medium": {
    width: 70,
    height: 70,
    borderWidth: 2
  }
});

const SelfieLink = styled(Link, {
  display: "inline-flex",
  alignItems: "center",
  color: theme.colors.mediumDark,

  "&:hover": {
    color: theme.colors.link,

    "@medium": {
      [`${ CircleImage }`]: {
        borerColor: theme.colors.linkUnderline
      }
    }
  },
});

const Name = styled("span", {
    margin: "0 0.6em",
    fontSize: "1.2em",
    fontWeight: 500,
    lineHeight: 1,

    "@medium": {
      display: 'none'
    }
  }
);

export type SelfieProps = Omit<ComponentProps<typeof Link>, "href">;

const Selfie = ({ ...rest }: SelfieProps) => {
  return (
    <SelfieLink href="/" rel="author" title={ authorName } underline={ false } { ...rest } >
      <CircleImage
        src={ selfieJpeg }
        alt={ `Photo of ${ authorName }` }
        width={ 70 }
        height={ 70 }
        quality={ 60 }
        placeholder="empty"
        inline
        priority
      />
      <Name>{ authorName }</Name>
    </SelfieLink>
  )
};

export default Selfie;
