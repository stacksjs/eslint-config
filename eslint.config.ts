import { stacks } from './src/'

export default stacks(
  {
    vue: true,
    vue: {
      a11y: true,
    },
    react: true,
    solid: true,
    svelte: true,
    astro: true,
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
