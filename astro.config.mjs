import {defineConfig} from 'astro/config';
import solidJs from '@astrojs/solid-js';
import pandacss from '@pandacss/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs(), pandacss()],
});
