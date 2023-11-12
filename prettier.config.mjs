/** @type {import("prettier").Config} */
export default {
	plugins: ['prettier-plugin-astro'],
	semi: true,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	printWidth: 80,
	trailingComma: 'none',
	bracketSameLine: true,
	bracketSpacing: false,
	arrowParens: 'avoid',
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
				astroAllowShorthand: true
			}
		},
		{
			files: ['*.json5'],
			options: {
				singleQuote: false,
				quoteProps: 'preserve'
			}
		},
		{
			files: ['*.yml'],
			options: {
				useTabs: false,
				singleQuote: false
			}
		}
	]
};
