import {
	defineConfig,
	defineSemanticTokens,
	defineGlobalStyles,
	defineTokens,
	defineTextStyles,
} from '@pandacss/dev';

const globalCss = defineGlobalStyles({
	html: {
		font: 'body',
		scrollBehavior: 'smooth',
		color: 'text',
	},
	body: {
		backgroundColor: 'bg',
	},
	main: {
		width: '60%',
		margin: '50px auto',
		padding: '50px',
		backgroundColor: 'secondary',
		borderRadius: '50px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
	},
	h1: {
		marginTop: '20px',
		marginBottom: '50px',
		textAlign: 'center',
		fontWeight: 600,
		fontSize: '2.5em',
		lineHeight: 1.2,
		color: 'text',
	},
});

export default defineConfig({
	jsxFramework: 'solid',
	preflight: true,
	include: ['./src/**/*.{ts,tsx,js,jsx,astro}'],
	outdir: 'styled-system',
	conditions: {
		light: '[data-color-mode=light] &',
		dark: '[data-color-mode=dark] &',
	},
	theme: {
		textStyles: defineTextStyles({
			body: {
				description: 'The body text style - used in paragraphs',
				value: {
					fontFamily: 'Inter',
					fontWeight: '500',
					fontSize: '16px',
					lineHeight: '24',
					letterSpacing: '0',
					textDecoration: 'None',
					textTransform: 'None',
				},
			},
		}),
		tokens: defineTokens({
			colors: {
				link: {value: '#00a8e6', description: 'Color of URI links'},
			},
		}),
		semanticTokens: defineSemanticTokens({
			colors: {
				bg: {
					value: {
						DEFAULT: {
							_light: '#efebe8',
							_dark: '#2b2d31',
						},
					},
					description: 'Global background color',
				},
				primary: {
					value: {
						DEFAULT: {
							_light: '#efebe8',
							_dark: '#2b2d31',
						},
					},
					description: 'Primary color theme',
				},
				secondary: {
					value: {
						_light: '#ffffff',
						_dark: '#313338',
					},
					description: 'Secondary color theme',
				},
				text: {
					value: {
						DEFAULT: {
							_light: '#302e2d',
							_dark: '#efebe8',
						},
					},
					description: 'Global text color',
				},
			},
		}),
	},
	globalCss,
});
