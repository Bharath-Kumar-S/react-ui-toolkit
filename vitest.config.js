import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    css: true,
    coverage: {
      include: ['src/components/**/*.test.tsx'],
      exclude: ['**/*.stories.tsx', 'src/components/index.ts'],
    },
  },
})
