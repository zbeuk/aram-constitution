// @ts-check
const {defineConfig} = require('eslint-define-config');

module.exports = defineConfig({
	root: true,
	env: {
		node: true,
		browser: true,
		es2021: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:sonarjs/recommended',
		'plugin:unicorn/recommended',
		'plugin:solid/typescript',
		'plugin:prettier/recommended',
	],
	overrides: [
		{
			files: ['*.js', '*.mjs', '*.cjs'],
			rules: {
				'@typescript-eslint/explicit-module-boundary-types': 'off',
			},
		},
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'prettier', 'sonarjs', 'unicorn', 'solid'],
	rules: {
		'@typescript-eslint/no-var-requires': 'off',
	},
	ignorePatterns: ['node_modules', 'dist', 'coverage', 'build'],
});
