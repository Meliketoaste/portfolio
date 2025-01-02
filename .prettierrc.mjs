/** @type {import('prettier').Config} */
export default {
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  plugins: ['prettier-plugin-astro'],
}
