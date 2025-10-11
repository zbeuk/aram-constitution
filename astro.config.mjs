import solidJs from "@astrojs/solid-js";
import pandacss from "@pandacss/astro";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs(), pandacss()],
});
