import {
	defineConfig,
	defineGlobalStyles,
	defineSemanticTokens,
	defineTokens,
} from "@pandacss/dev";

const globalCss = defineGlobalStyles({
	html: {
		scrollBehavior: "smooth",
		color: "text",
	},
	body: {
		backgroundColor: "bg",
		fontFamily: "Inter",
	},
	main: {
		maxWidth: "fit-content",
		position: "relative",
		margin: { base: "2em 15% 0 15%", mdDown: "0" },
		padding: { base: "50px", mdDown: "20px" },
		backgroundColor: "secondary",
		borderRadius: { base: "50px", mdDown: "0px" },
		boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
	},
	h1: {
		marginTop: "20px",
		marginBottom: "50px",
		textAlign: "center",
		fontWeight: 600,
		fontSize: { base: "2.5em", mdDown: "1.5em" },
		lineHeight: 1.2,
		color: "text",
	},
});

export default defineConfig({
	jsxFramework: "solid",
	presets: [],
	preflight: true,
	include: ["./src/**/*.{ts,tsx,js,jsx,astro}"],
	outdir: "styled-system",
	conditions: {
		light: "[data-color-mode=light] &",
		dark: "[data-color-mode=dark] &",
	},
	theme: {
		extend: {
			breakpoints: {
				sm: "412px",
				md: "993px",
			},
		},
		tokens: defineTokens({
			colors: {
				link: { value: "#00a8e6", description: "Color of URI links" },
			},
		}),
		semanticTokens: defineSemanticTokens({
			colors: {
				bg: {
					value: {
						DEFAULT: {
							_light: "#efebe8",
							_dark: "#2b2d31",
						},
					},
					description: "Global background color",
				},
				primary: {
					value: {
						DEFAULT: {
							_light: "#efebe8",
							_dark: "#2b2d31",
						},
					},
					description: "Primary color theme",
				},
				secondary: {
					value: {
						_light: "#ffffff",
						_dark: "#313338",
					},
					description: "Secondary color theme",
				},
				text: {
					value: {
						DEFAULT: {
							_light: "#302e2d",
							_dark: "#efebe8",
						},
					},
					description: "Global text color",
				},
			},
		}),
	},
	globalCss,
});
