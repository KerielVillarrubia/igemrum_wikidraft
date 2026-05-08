import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite'; // Import the Vite version

export default defineConfig({
  integrations: [react()], // Remove tailwind() from here
  vite: {
    plugins: [tailwindcss()], // Add it to the Vite plugins list instead
  },
});