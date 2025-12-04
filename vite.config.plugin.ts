import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig(() => ({
  build: {
    emptyOutDir: false,
    outDir: path.resolve('dist'),
    rollupOptions: {
      input: path.resolve('src/plugin/plugin.ts'),
      output: {
        entryFileNames: 'code.js',
      },
    },
  },
}));
