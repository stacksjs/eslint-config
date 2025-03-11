import { stacks } from './src/'

export default stacks(
  {
    vue: true,
    typescript: true,
    formatters: true,
    pnpm: true,
    type: 'lib',
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },

  {
    ignores: ['fixtures', '_fixtures'],
  },

  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
