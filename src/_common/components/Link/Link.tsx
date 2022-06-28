import NextLink from "next"
import { Component, ComponentProps } from 'react';
import { styled } from '../../../lib/styles/stitches.config';


const StyledLink = styled(NextLink, {
  color: "$link",
  textDecoration: "none",

  variants: {
    underline: {
      // nice animated link underline effect
      true: {
        setUnderlineVars: {}
      }
    }
  }
})

export type LinkProps = ComponentProps<typeof StyledLink> & {
  openInNewTab?: boolean
}

class Link extends Component<LinkProps> {
  static defaultProps = { prefetch: false, underline: true }

  render() {
    let { href, rel, target, prefetch, underline, openInNewTab, ...rest }: Readonly<any> = this.props;
    return (
        <StyledLink
            href={ href }
            target={ target || "_blank" }
            underline={ underline }
            { ...rest }
        />
    )
  }
}

export default Link;
