import solidjs from "@astrojs/solid-js";
import { defineConfig } from "astro/config";

export default defineConfig({
  integrations: [solidjs({ devtools: true })],
});
