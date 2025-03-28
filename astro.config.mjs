import { defineConfig } from 'astro/config'

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://menopause-work.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
})