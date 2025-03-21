module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@routes': './src/routes',
          '@screens': './src/screen',
          '@theme': './src/theme',
          '@domain': './src/domain',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/api',
          '@utils': './src/utils',
          '@infra': './src/infra',
          '@services': './src/services',
        },
      },
    ],
  ],
};
