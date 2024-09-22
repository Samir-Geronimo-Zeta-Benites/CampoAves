import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import db from "@astrojs/db";

import netlify from "@astrojs/netlify";

// https://astro.build/config
export default defineConfig({
  redirects:{
    'index.astro': 'principal.astro'
  },
  integrations: [tailwind(), db()],
  output: "server",
  adapter: netlify()
});