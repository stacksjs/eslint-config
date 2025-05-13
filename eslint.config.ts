import { stacks } from './src/'

export default stacks(
  {
    vue: {
      a11y: true,
    },
    typescript: true,
    formatters: true,
    type: 'lib',
    stylistic: {
      indent: 2,
      quotes: 'single',
    },
  },

  {
    ignores: [
      'fixtures',
      '_fixtures',
      '**/constants-generated.ts',
    ],
  },

  {
    files: ['src/**/*.ts'],
    rules: {
      'perfectionist/sort-objects': 'error',
    },
  },
)
