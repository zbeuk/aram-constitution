import {
	createGlobalTheme,
	createGlobalThemeContract,
	createTheme,
	createThemeContract,
	globalStyle,
} from '@vanilla-extract/css';

export const themeSchema = createThemeContract({
	color: {
		primary: '',
		secondary: '',
	},
	text: {
		color: '',
	},
});

export const lightTheme = createTheme(themeSchema, {
	color: {
		primary: '#efebe8',
		secondary: '#ffffff',
	},
	text: {
		color: '#302e2d',
	},
});

export const darkTheme = createTheme(themeSchema, {
	color: {
		primary: '#2b2d31',
		secondary: '#313338',
	},
	text: {
		color: '#efebe8',
	},
});

export const globalThemeVariable = createGlobalThemeContract({
	font: 'font',
});

createGlobalTheme(':root', globalThemeVariable, {
	font: 'Inter, sans-serif',
});

globalStyle('html', {
	fontFamily: globalThemeVariable.font,
	scrollBehavior: 'smooth',
	color: themeSchema.text.color,
});

globalStyle('body', {
	backgroundColor: themeSchema.color.primary,
});

globalStyle('h1', {
	marginTop: '20px',
	marginBottom: '50px',
	textAlign: 'center',
	fontWeight: 600,
	fontSize: '2.5em',
	lineHeight: 1.2,
	color: themeSchema.text.color,
});

globalStyle('main', {
	width: '60%',
	margin: '50px auto',
	padding: '50px',
	backgroundColor: themeSchema.color.secondary,
	borderRadius: '50px',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
});
