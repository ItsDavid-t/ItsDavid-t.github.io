// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://itsdavid-t.github.io',
  base: '/',
  output: 'static',
  compressHTML: true,
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  build: {
    inlineStylesheets: 'auto',
  },
});
