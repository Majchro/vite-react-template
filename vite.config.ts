/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'happy-dom',
    coverage: {
      provider: 'v8',
      exclude: ['postcss.config.js', 'tailwind.config.js', '.eslintrc.cjs', 'src/main.tsx', 'src/vite-env.d.ts'],
      thresholds: {
        statements: 90,
        functions: 90,
        branches: 90,
        lines: 90,
      },
    },
  },
});
