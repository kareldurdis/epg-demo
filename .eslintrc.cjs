module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  settings: {
    'import/resolver': {
      alias: {
        map: [['src', './src/']],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.ts'],
      },
    },
    react: {
      version: '18',
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        ts: 'never',
        jsx: 'never',
        tsx: 'never',
        css: 'always',
      },
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/.storybook/*.*s*', '**/*.test.ts*', '**/*.stories.ts*'],
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: ['function-declaration', 'function-expression', 'arrow-function'],
        unnamedComponents: [],
      },
    ],
    'react/require-default-props': [0],
  },
};
