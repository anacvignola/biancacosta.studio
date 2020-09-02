module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb', 'prettier', 'prettier/react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jsx-a11y', 'prettier', 'react-hooks'],
  rules: {
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    camelcase: 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    'prettier/prettier': 'error',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'jsx-a11y/accessible-emoji': 'off',
  },
};
