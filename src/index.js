import { fileURLToPath } from 'node:url'

export default {
  // Options
  arrowParens: `avoid`,
  bracketSameLine: false,
  bracketSpacing: true,
  embeddedLanguageFormatting: `auto`,
  endOfLine: `lf`,
  htmlWhitespaceSensitivity: `ignore`,
  jsxSingleQuote: true,
  printWidth: 80,
  proseWrap: `always`,
  quoteProps: `as-needed`,
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: `all`,
  useTabs: false,

  // Plugins
  plugins: [fileURLToPath(import.meta.resolve(`prettier-plugin-tailwindcss`))],
  tailwindFunctions: [`clsx`],
}
