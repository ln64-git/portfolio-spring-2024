import { nextui } from "@nextui-org/theme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				montserrat: ["Montserrat", "sans-serif"],
			},
			colors: {
				"button-primary": {
					"50": "#fff7ed",
					"100": "#ffedd5",
					"200": "#fed7aa",
					"300": "#fdba74",
					"400": "#fb923c",
					"500": "#ff8957",
					"600": "#ea580c",
					"700": "#c2410c",
					"800": "#9a3412",
					"900": "#7c2d12",
					DEFAULT: "#ff8957",
				},
				"button-primary-dark": {
					"50": "#eff6ff",
					"100": "#dbeafe",
					"200": "#bfdbfe",
					"300": "#93c5fd",
					"400": "#60a5fa",
					"500": "#3a7bc8",
					"600": "#2563eb",
					"700": "#1d4ed8",
					"800": "#1e40af",
					"900": "#1e3a8a",
					DEFAULT: "#3a7bc8",
				},
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
	plugins: [
		nextui({
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
			},
		}),
		addVariablesForColors,
	],
};

function addVariablesForColors({ addBase, theme }: any) {
	const allColors = flattenColorPalette(theme("colors"));
	const newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
	);

	addBase({
		":root": newVars,
	});
}
