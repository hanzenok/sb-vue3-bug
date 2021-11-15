const path = require('path');

const filterRules = filters => rule => {
  return filters.some(filter => String(rule.test) === String(filter));
};

module.exports = {
  webpackFinal: config => {
    const rules = config.module.rules;

    const mdxRules = rules.filter(
      filterRules([/\.mdx$/, /\.(stories|story).mdx$/])
    );
    mdxRules.forEach(mdxRule => {
      const [babelLoader] = mdxRule.use.filter(({ loader }) =>
        loader.includes('babel-loader')
      );
      babelLoader.options.presets = babelLoader.options.presets.filter(
        preset => !preset.includes('babel-preset-vue')
      );
    });

    const [jsxRule] = rules.filter(filterRules([/\.(mjs|jsx?)$/]));
    const [babelLoader] = jsxRule.use.filter(({ loader }) =>
      loader.includes('babel-loader')
    );
    babelLoader.options = {
      cacheDirectory: path.resolve(
        __dirname,
        '..',
        'node_modules',
        '.cache',
        'storybook'
      ),
      presets: ['@vue/app'],
      babelrc: false
    };

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          stories: path.resolve(__dirname, '../stories'),
          resources: path.resolve(__dirname, '../../resources'),
          shared: path.resolve(__dirname, '../../shared')
        }
      }
    };
  },
  stories: ['../stories/**/*.stories.@(js|mdx)'],
  addons: [
    '@storybook/preset-scss',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false
      }
    },
    '@storybook/addon-links',
    'storybook-addon-themes'
  ]
};
