module.exports = {
  root: true,
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],
  parserOptions: {
    sourceType: 'module',
  },
};
