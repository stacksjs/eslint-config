import { stacks } from './src/'

export default stacks(
  {
    vue: true,
    typescript: true,
    formatters: true,
    type: 'lib',
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
