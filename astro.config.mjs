// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const isNetlify = process.env.NETLIFY;

// https://astro.build/config
export default defineConfig({
  site: isNetlify ? 'https://jpiedra181.github.io' : 'https://jpiedra181.github.io/javier_portfolio',
  base: isNetlify ? '/' : '/javier_portfolio/',
  vite: {
    plugins: [tailwindcss()]
  }
});