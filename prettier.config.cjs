module.exports = {
	semi: true,
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	printWidth: 80,
	trailingComma: 'all',
	bracketSameLine: true,
	bracketSpacing: false,
	arrowParens: 'avoid',
	overrides: [
		{
			files: ['*.json5'],
			options: {
				singleQuote: false,
				quoteProps: 'preserve',
			},
		},
		{
			files: ['*.yml'],
			options: {
				singleQuote: false,
			},
		},
	],
};
