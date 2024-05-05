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
          // overlay: "#00ee30", // Example: Light yellow color
          // content2: "#ee00ae",
          // content3: " #7fee00",
          // default: " #ee0000",
          // content4: " #ee00ae",


          primary: {
            //... 50 to 900
            foreground: "#7d3030",
            DEFAULT: "#2d2d2d",
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