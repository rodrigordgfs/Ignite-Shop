import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      green: "#00875F",
      "green-light": "#00B37E",

      "gray-100": "#121214",
      "gray-200": "#202024",
      "gray-300": "#C4C4CC",
      "gray-400": "#E1E1E6",

      white: "#FFFFFF",
    },
  },
});
