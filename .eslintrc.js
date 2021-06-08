module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect', // Automatically detect the react version
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'import', 'jsx-a11y', 'react', '@typescript-eslint'],
  rules: {},
};
