/// <reference types="vitest/config" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      hooks: path.resolve(__dirname, './src/state/hooks'),
      pages: path.resolve(__dirname, './src/pages'),
      state: path.resolve(__dirname, './src/state'),
      styles: path.resolve(__dirname, './src/styles'),
      types: path.resolve(__dirname, './src/types'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    css: false,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "styles/_breakpoints.scss" as *;
          @use "styles/_variables.scss" as *;
        `,
      },
    },
  },
});
