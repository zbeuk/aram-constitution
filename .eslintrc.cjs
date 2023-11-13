const {defineConfig} = require('eslint-define-config');

module.exports = defineConfig({
	root: true,
	env: {
		node: true,
		browser: true,
		es2022: true
	},
	plugins: ['@typescript-eslint', 'prettier', 'sonarjs', 'unicorn', 'solid'],
	extends: [
		'eslint:recommended',
		'plugin:sonarjs/recommended',
		'plugin:prettier/recommended'
	],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	overrides: [
		{
			files: ['*.js', '*.mjs', '*.cjs'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off'
			}
		},
		{
			files: ['*.ts', '*.tsx'],
			parser: '@typescript-eslint/parser',
			extends: [
				'plugin:solid/typescript',
				'plugin:@typescript-eslint/recommended'
			],
			rules: {}
		},
		{
			files: ['*.astro'],
			extends: [
				'plugin:astro/recommended',
				'plugin:@typescript-eslint/recommended'
			],
			parser: 'astro-eslint-parser',
			parserOptions: {
				parser: '@typescript-eslint/parser',
				extraFileExtensions: ['.astro']
			},
			rules: {
				'astro/no-set-html-directive': 'error'
			}
		}
	],
	ignorePatterns: ['node_modules', 'dist', 'coverage', 'build']
});
