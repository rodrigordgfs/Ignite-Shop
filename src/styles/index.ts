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
      "green-500": "#00875F",
      "green-300": "#00B37E",

      "gray-900": "#121214",
      "gray-800": "#202024",
      "gray-300": "#C4C4CC",
      "gray-100": "#E1E1E6",

      white: "#FFFFFF",
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    }
  },
});
