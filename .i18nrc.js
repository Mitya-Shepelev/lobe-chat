const { defineConfig } = require('@lobehub/i18n-cli');

module.exports = defineConfig({
  entry: 'locales/zh-CN',
  entryLocale: 'zh-CN',
  output: 'locales',
  outputLocales: [
    'ar',
    'zh-TW',
    'en-US',
    'ru-RU',
    'ja-JP',
    'ko-KR',
    'fr-FR',
    'tr-TR',
    'es-ES',
    'pt-BR',
    'de-DE',
    'it-IT',
    'nl-NL',
    'pl-PL',
    'vi-VN',
  ],
  temperature: 0,
  modelName: 'gpt-3.5-turbo-1106',
  splitToken: 1024,
  experimental: {
    jsonMode: true,
  },
  reference:
    'You need to maintain the component format of MDX, and the output text does not need to be wrapped in any code block syntax at the outermost level.',
  markdown: {
    entry: ['./README.zh-CN.md', './docs/**/*.zh-CN.md', './docs/**/*.zh-CN.mdx'],
    entryLocale: 'zh-CN',
    outputLocales: ['en-US'],
    outputExtensions: (locale, { getDefaultExtension, filePath }) => {
      if (filePath.includes('.mdx')) {
        if (locale === 'en-US') return '.mdx';
        return `.${locale}.mdx`;
      } else {
        if (locale === 'en-US') return '.md';
        return getDefaultExtension(locale);
      }
    },
  },
});
