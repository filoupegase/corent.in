import { useState, forwardRef } from "react";
import { styled, theme } from "../../../lib/styles/stitches.config";
import type { ReactNode, Ref, ComponentPropsWithoutRef, ElementRef } from "react";
import { CheckOcticon, ClipboardOcticon } from "../Icons";

const Button = styled("button", {
  lineHeight: 1,
  cursor: "pointer",

  variants: {
    copied: {
      true: {
        color: theme.colors.success,
      },
      false: {
        color: theme.colors.mediumDark,

        "&:hover, &:focus-visible": {
          color: theme.colors.link,
        },
      },
    },
  },
});

const Icon = styled("svg", {
  width: "1.25em",
  height: "1.25em",
  verticalAlign: "-0.3em",
  fill: "currentColor",
});

export type CopyButtonProps = ComponentPropsWithoutRef<typeof Button> & {
  source: string | ReactNode;
  timeout?: number;
};

const CopyButton = ({ source, timeout = 2000, ...rest }: CopyButtonProps, ref: Ref<ElementRef<typeof Button>>) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {};

  return (
    <Button
      ref={ref}
      title="Copy to clipboad"
      aria-label="Copy to clipboard"
      onClick={handleCopy}
      disabled={copied}
      copied={copied}
      {...rest}
    >
      <Icon as={copied ? CheckOcticon : ClipboardOcticon} />
    </Button>
  );
};

export default forwardRef(CopyButton);
