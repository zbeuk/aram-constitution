import {defineConfig} from 'astro/config';
import solidJs from '@astrojs/solid-js';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [vanillaExtractPlugin()],
	},
	integrations: [solidJs()],
});
