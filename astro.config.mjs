import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rindig.github.io',
  base: '/american-moto-co',
  trailingSlash: 'always',
  integrations: [tailwind()],
  output: 'static',
});
