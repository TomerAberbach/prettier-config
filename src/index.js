module.exports = {
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: false,
  singleQuote: true,
  quoteProps: `as-needed`,
  jsxSingleQuote: true,
  trailingComma: `all`,
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: `avoid`,
  proseWrap: `always`,
  htmlWhitespaceSensitivity: `ignore`,
  endOfLine: `lf`,
  embeddedLanguageFormatting: `auto`,
  importOrder: [`^[./]`],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  plugins: [`@trivago/prettier-plugin-sort-imports`],
  overrides: [
    {
      files: `*.d.ts`,
      options: {
        importOrderParserPlugins: [`["typescript", { "dts": true }]`],
      },
    },
  ],
}
