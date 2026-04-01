import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://derochian.github.io',
  base: '/kolbenchemicals',
  integrations: [sitemap()],
  build: {
    assets: '_assets',
  },
});
