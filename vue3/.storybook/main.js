const path = require("path");

const filterRules = (filters) => (rule) => {
  return filters.some((filter) => String(rule.test) === String(filter));
};

module.exports = {
  webpackFinal: (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          stories: path.resolve(__dirname, "../stories"),
          resources: path.resolve(__dirname, "../../resources"),
          shared: path.resolve(__dirname, "../../shared"),
        },
      },
    };
  },
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/preset-scss",
    {
      name: "@storybook/addon-essentials",
      options: {
        backgrounds: false,
      },
    },
    "@storybook/addon-links",
    "storybook-addon-themes",
  ],
};
