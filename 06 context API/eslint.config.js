import js from '../03 fragment/node_modules/@eslint/js/types'
import globals from '../03 fragment/node_modules/globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from '../03 fragment/node_modules/eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from '../03 fragment/node_modules/eslint/lib/types/config-api'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])
