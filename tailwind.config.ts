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
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
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
          background: "#F4F0E8",
          content1: "#e8e1d4",
          default: "#4f4f4f",
          secondary: "#d85626",
          primary: {
            //... 50 to 900
            "50": "#e8e1d4",
            "100": "#e8e1d4",
            foreground: "#2d2d2d",
            DEFAULT: "#2d2d2d",
          },
        },
      },
      dark: {
        colors: {
          background: "#141312",
          secondary: "#c35933",
          content1: "#1e1b1b",
          default: "#a9a9a9",
          primary: {
            //... 50 to 900
            "50": "#1e1b1b",
            "100": "#1e1b1b",
            DEFAULT: "#d0d0d0",
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