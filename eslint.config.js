import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.browser,
      env: { es2024: true },
      extends: ['plugin:js/recommended', 'eslint:recommended'],
      parserOptions: { ecmaVersion: 2024, sourceType: 'module' },
      rules: {
        'prettier/prettier': 'error',
      },
    },
  },
  pluginJs.configs.recommended,
];
