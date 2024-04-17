import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://matrix.works/",
  compressHTML: false,
  integrations: [tailwind(), sitemap()],
  vite: {
    resolve: {
      alias: [
        {
          find: "@",
          replacement: "src",
        },
      ],
    },
  },
});
