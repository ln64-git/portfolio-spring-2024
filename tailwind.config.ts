// @ts-ignore
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },

  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          background: "#97a2c6ff", // Example: Light yellow color
          content1: "#9ba3c7ff",
          default: "#2d2d2d",
          primary: {
            //... 50 to 900
            "50": "#9ba3c7ff",
            "100": "#aeb7deff",
            foreground: "#7d3030",
            DEFAULT: "#2d2d2d",
          },
        },
      },
      dark: {
        colors: {
          primary: {
            //... 50 to 900
            "50": "#18181B",
            "100": "#27272c",
            foreground: "#7d3030",
            DEFAULT: "#9c9c9c",
          },
        },
      },
    }
  }), addVariablesForColors],
}

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}