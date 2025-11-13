// prettier.config.js

/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],

  singleQuote: true,
  semi: true,
  tabWidth: 2,
  printWidth: 80,
  trailingComma: 'es5',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',

  // Tailwind plugin options (optional)
  tailwindFunctions: ['clsx', 'cva', 'tw'],
};
