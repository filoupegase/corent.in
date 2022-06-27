import { createStitches } from '@stitches/react';
import { Inter, RobotoMono } from './fonts'

export const { styled, theme, createTheme, keyframes } = createStitches({
  theme: {
    fonts: {
      sans: `"${ Inter.name.regular }", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
      sansVar: `"${ Inter.name.variable }", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
      mono: `"${ RobotoMono.name.regular }", ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier`,
      monoVar: `"${ RobotoMono.name.variable }", ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier`,
    },
    colors: {
      backgroundInner: "#ffffff",
      backgroundOuter: "#fcfcfc",
      // backgroundHeader: hexToRgba("#fcfcfc", 0.7),
      text: "#202020",
      mediumDark: "#515151",
      medium: "#5e5e5e",
      mediumLight: "#757575",
      light: "#d2d2d2",
      kindaLight: "#e3e3e3",
      superLight: "#f4f4f4",
      superDuperLight: "#fbfbfb",
      link: "#0e6dc2",
      // linkUnderline: hexToRgba("#0e6dc2", 0.4),
      success: "#44a248",
      error: "#ff1b1b",
      warning: "#f78200",
      // Syntax Highlighting (light) - modified from Monokai Light: https://github.com/mlgill/pygments-style-monokailight
      codeText: "#313131",
      codeBackground: "#fdfdfd",
      codeComment: "#656e77",
      codeKeyword: "#029cb9",
      codeAttribute: "#70a800",
      codeNamespace: "#f92672",
      codeLiteral: "#ae81ff",
      codePunctuation: "#111111",
      codeVariable: "#d88200",
      codeAddition: "#44a248",
      codeDeletion: "#ff1b1b",
    },
    radii: {
      rounded: "0.65em"
    }
  },
});

export const darkTheme = createTheme({
  colors: {
    backgroundInner: "#1e1e1e",
    backgroundOuter: "#252525",
    //backgroundHeader: hexToRgba("#252525", 0.85),
    text: "#f1f1f1",
    mediumDark: "#d7d7d7",
    medium: "#b1b1b1",
    mediumLight: "#959595",
    light: "#646464",
    kindaLight: "#535353",
    superLight: "#272727",
    superDuperLight: "#1f1f1f",
    link: "#88c7ff",
    //linkUnderline: hexToRgba("#88c7ff", 0.4),
    success: "#78df55",
    error: "#ff5151",
    warning: "#f2b702",
    // Syntax Highlighting (dark) - modified from Dracula: https://github.com/dracula/pygments
    codeText: "#e4e4e4",
    codeBackground: "#212121",
    codeComment: "#929292",
    codeKeyword: "#3b9dd2",
    codeAttribute: "#78df55",
    codeNamespace: "#f95757",
    codeLiteral: "#d588fb",
    codePunctuation: "#cccccc",
    codeVariable: "#fd992a",
    codeAddition: "#78df55",
    codeDeletion: "#ff5151",
  },
});
