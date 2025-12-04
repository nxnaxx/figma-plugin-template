import { fileURLToPath } from 'url';
import path from 'path';
import js from '@eslint/js';
import tsESlint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';
import eslintConfigPrettier from 'eslint-config-prettier';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const plugins = {
  import: importPlugin,
  'simple-import-sort': simpleImportSort,
  'unused-imports': unusedImports,
};

const languageOptions = {
  parser: tsESlint.parser,
  sourceType: 'module',
  parserOptions: {
    projectService: true,
    tsconfigRootDir: __dirname,
  },
};

const baseESLintRules = {
  'import/order': 'off',
  'simple-import-sort/imports': [
    'error',
    {
      groups: [
        ['^react', '^node:', '^[^.]'],
        ['^@'],
        ['^\\./', '^\\.\\./'],
        ['^\\u0000'],
        ['\\.css$', '\\.scss$', '\\.sass$', '\\.less$'],
      ],
    },
  ],
  'simple-import-sort/exports': 'error',
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
    },
  ],
};

const typescriptRules = {
  '@typescript-eslint/consistent-type-imports': 'error',
  '@typescript-eslint/no-import-type-side-effects': 'error',
  '@typescript-eslint/no-explicit-any': 'warn',
  '@typescript-eslint/no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
    },
  ],
  '@typescript-eslint/require-await': 'error',
  '@typescript-eslint/naming-convention': [
    'warn',
    {
      selector: 'default',
      format: ['camelCase'],
    },
    {
      selector: 'import',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
      selector: 'variable',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
      selector: 'variable',
      types: ['function'],
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'method',
      format: ['camelCase'],
    },
    {
      selector: 'function',
      format: ['camelCase', 'PascalCase'],
    },
    {
      selector: 'parameter',
      format: ['camelCase', 'PascalCase'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'typeLike',
      format: ['PascalCase'],
    },
    {
      selector: 'classProperty',
      format: ['camelCase'],
    },
    {
      selector: 'classProperty',
      modifiers: ['private'],
      format: ['camelCase', 'UPPER_CASE'],
      leadingUnderscore: 'allow',
    },
    {
      selector: 'objectLiteralProperty',
      format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
    },
    {
      selector: 'typeProperty',
      format: ['camelCase'],
    },
    {
      selector: [
        'classProperty',
        'objectLiteralProperty',
        'typeProperty',
        'classMethod',
        'objectLiteralMethod',
        'typeMethod',
        'accessor',
        'enumMember',
      ],
      modifiers: ['requiresQuotes'],
      format: null,
    },
  ],
};

export default [
  js.configs.recommended,
  ...tsESlint.configs['recommendedTypeChecked'],
  eslintConfigPrettier,

  {
    ignores: ['**/node_modules/**', '**/dist/**', 'vite.config.*.ts', 'manifest.ts'],
  },

  {
    files: ['**/*.{ts,tsx}'],
    plugins,
    languageOptions,
    rules: {
      ...baseESLintRules,
      ...typescriptRules,
    },
  },
];
