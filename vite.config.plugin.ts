import { defineConfig } from 'vite';
import path from 'node:path';

export default defineConfig(({ mode }) => ({
  build: {
    sourcemap: mode !== 'production' ? 'inline' : false,
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
