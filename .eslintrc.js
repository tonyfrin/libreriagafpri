module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended', 
        'plugin:react/recommended', 
        'airbnb', 
        'airbnb/hooks', 
        'prettier', 
        'plugin:@typescript-eslint/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist/'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    parser: "@typescript-eslint/parser",
    plugins: ['react', 'prettier', '@typescript-eslint'],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'error',
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'arrow-body-style': 'off',
        'react/jsx-fragments': ['error', 'element'],
        'import/no-extraneous-dependencies': 'off',
        'react/function-component-definition': [
            'error',
            {
                namedComponents: 'arrow-function',
            },
        ],
        'import/extensions': [
            'error',
            'never',
            {
              ignorePackages: true,
            },
        ],
    },
    overrides: [
        {
            files: ['./src/components/**/index.js'],
            rules: {
                'no-restricted-exports': 'off',
            },
        },
    ],
  };
