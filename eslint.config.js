import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default defineConfig(
  {
    ignores: ['dist/**', 'node_modules/**'],
  },

  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],

    extends: [js.configs.recommended],

    languageOptions: {
      globals: globals.node,
    },
  },

  {
    files: ['**/*.{ts,mts,cts}'],

    extends: [tseslint.configs.recommendedTypeChecked],

    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },

  prettier,
);
