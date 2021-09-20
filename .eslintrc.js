module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
  },
  plugins: [],
  rules: {
    radix: 'off',
    'no-shadow': 'off',
    'comma-dangle': 'off',
    camelcase: 'off',
    'consistent-return': off,
  },
};
