import {createStitches} from '@stitches/react';

export const {theme} = createStitches({
    theme: {
        colors: {
            backgroundInner: "#ffffff",
            backgroundOuter: "#fcfcfc",
            backgroundHeader: hexToRgba("#fcfcfc", 0.7),
            text: "#202020",
            mediumDark: "#515151",
            medium: "#5e5e5e",
            mediumLight: "#757575",
            light: "#d2d2d2",
            kindaLight: "#e3e3e3",
            superLight: "#f4f4f4",
            superDuperLight: "#fbfbfb",
            link: "#0e6dc2",
            linkUnderline: hexToRgba("#0e6dc2", 0.4),
            success: "#44a248",
            error: "#ff1b1b",
            warning: "#f78200",
        }
    },
});
