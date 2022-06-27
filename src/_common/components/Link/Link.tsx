import NextLink from "next"
import { ComponentProps } from 'react';
import { styled } from '../../../lib/styles/stitches.config';


const StyledLink = styled(
    NextLink,
    {})

export type LinkProps = ComponentProps<typeof StyledLink> & {
  openInNewTab?: boolean
}

const Link = ({ href, rel, target, prefetch = false, underline = true, openInNewTab, ...rest }: LinkProps) => {
  return (
      <p>salut</p>
  )
}

export default Link;
