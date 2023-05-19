import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: "#fff",
      baseBackground: "#071422",

      blue: "#3294F8",

      baseTitle: "#E7EDF4",
      baseSubtitle: "#C4D4E3",
      baseText: "#AFC2D4",
      baseSpan: "#7B96B2",
      baseLabel: "#3A536B",
      baseBorder: "#1C2F41",
      basePost: "#112131",
      baseProfile: "#0B1B2B",
      baseInput: "#040F1A",
    },

    fontSizes: {
      _12: "0.75rem",
      _14: "0.875rem",
      _16: "1rem",
      _18: "1.125rem",
      _20: "1.25rem",
      _24: "1.5rem",
    },

    fonts: {
      body: "Nunito, sans-serif",
    },
  },
});
