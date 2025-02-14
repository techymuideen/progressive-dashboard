import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        // Replace specific fill values with "currentColor".
        // Adjust the keys (like "#000000" or "#000") based on the fill values present in your SVG.
        replaceAttrValues: {
          '#000': 'currentColor',
          '#000000': 'currentColor',
          white: 'currentColor',
        },
      },
    }),
    tailwindcss(),
  ],
});
