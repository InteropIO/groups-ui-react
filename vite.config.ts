import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import { cpSync } from 'fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  const dtsPlugin = !isDev && dts({
    outDir: 'dist/esm',
    entryRoot: 'src',
    exclude: ['**/*.test.*', '**/tests/**'],
    afterBuild: () => {
      cpSync('dist/esm', 'dist/cjs', {
        recursive: true,
        filter: (src) => src.endsWith('.d.ts') || !src.includes('.'),
      });
    },
  });

  const bundleCssPlugin = {
    name: 'bundle-css',
    closeBundle: () => execSync('npm run bundle:css', { stdio: 'inherit' }),
  };

  return {
    plugins: [react(), dtsPlugin, bundleCssPlugin].filter(Boolean),
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.tsx'),
        name: 'groups-ui-react',
        formats: ['es', 'umd'],
        fileName: (format) => (format === 'es' ? 'esm/index.js' : 'cjs/index.js'),
      },
      rollupOptions: {
        external: ['react', 'react-dom', '@interopio/react-hooks', 'react/jsx-runtime'],
        output: {
          globals: {
            'react': 'React',
            'react-dom': 'ReactDOM',
            'react/jsx-runtime': 'jsxRuntime',
            '@interopio/react-hooks': 'interopio-hooks',
          },
        },
      },
      sourcemap: true,
      minify: false,
    },
  };
});
