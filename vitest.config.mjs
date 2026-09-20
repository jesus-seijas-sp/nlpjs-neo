import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    include: ['packages/*/test/**/*.test.js'],
    // Several tests assert on formatted dates, so pin the timezone.
    env: {
      TZ: 'Europe/London',
    },
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['text', 'lcov'],
      include: ['packages/*/src/**/*.js'],
      exclude: [
        'packages/lang-*/**',
        'packages/python-compiler/src/python-executer.js',
        'packages/express-api-server/src/public/**',
      ],
    },
  },
});
