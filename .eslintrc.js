module.exports = {
  root: true,
  ignorePatterns: ['**/*'],
  parser: '@typescript-eslint/parser',
  plugins: ['@nrwl/nx', 'react', '@typescript-eslint', 'react-hooks'],
  overrides: [
    {
      files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
      rules: {
        '@nrwl/nx/enforce-module-boundaries': [
          'error',
          {
            enforceBuildableLibDependency: true,
            allow: [],
            depConstraints: [
              {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*']
              }
            ]
          }
        ]
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['plugin:@nrwl/nx/typescript'],
      rules: {}
    },
    {
      files: ['*.js', '*.jsx'],
      extends: ['plugin:@nrwl/nx/javascript'],
      rules: {}
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parserOptions: {
    project: './tsconfig.base.json',
    tsconfigRootDir: __dirname,
  },
  rules: {
    // plugin simple-sort-import rules for autofix
    // 'simple-import-sort/imports': 'error',
    // 'simple-import-sort/exports': 'error',
    // main rules
    'jsx-quotes': ['warn', 'prefer-double'],
    'sort-imports': ['warn', {
      'allowSeparatedGroups': true,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': true,
    }],
    'no-irregular-whitespace': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/exhaustive-deps': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/prefer-function-type': 'warn',
    // '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/keyword-spacing': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {'selector': 'interface', 'prefix': ['I'], 'format': ['PascalCase']},
      {'selector': 'property', 'format': ['camelCase']},
      {'selector': 'objectLiteralProperty', 'format': ['camelCase', 'snake_case']}
    ]
  }
};
