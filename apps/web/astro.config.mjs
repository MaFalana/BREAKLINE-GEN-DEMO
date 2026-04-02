// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  base: '/demo/breakline-gen',
  integrations: [react()],
  vite: {
    server: {
      fs: {
        allow: ['..', '../..']
      }
    }
  }
});
