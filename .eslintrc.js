module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'airbnb',
    'airbnb/hooks',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.d.ts', '.ts', '.tsx'],
      },
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  ignorePatterns: ['serviceWorker.ts'],
  rules: {
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript for type checking
    '@typescript-eslint/explicit-function-return-type': 'off',
    'no-console': 'off', // Allow console.log
    'import/extensions': 'off', // Don't need to specify file's extension
    'react/jsx-filename-extension': 'off', // Don't need to specify file's extension
    'object-curly-newline': 'off', // Disable to avoid conflict between prettier and object destructuring in argument
    'react/jsx-one-expression-per-line': 'off', // Disable to avoid conflicts between prettier and eslint when using props in the same line as other element
    'operator-linebreak': 'off', // Disable to avoid conflicts between prettier and eslint
    'implicit-arrow-linebreak': 'off', // Disable to avoid conflicts between prettier and eslint
    'import/prefer-default-export': 'off', // Disable to avoid bugs and issues with Gatsby API
    'react/jsx-props-no-spreading': 'off', // Allow spreading props;
    'import/no-extraneous-dependencies': 'off', // Allow import modules like @reach/router
    'no-underscore-dangle': 'off', // allow for private methods with _,
    'react/state-in-constructor': 'off', // allow for just `state =` if no constructor with props
    'no-param-reassign': 'off', // needed for tools like immer
    'function-paren-newline': 'off',
    'react/no-array-index-key': 'off', // Sometimes, objects don't have an id or you want to try something
    'no-use-before-define': 'off', // issue with React Scripts 4.0
  },
  overrides: [
    // Override some TypeScript rules just for .js files
    {
      files: ['*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off', // Disable to avoid eslint wanting to type return and props in .js and .jsx files
      },
    },
  ],
};
