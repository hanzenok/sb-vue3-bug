import "../stories/globals.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "centered",
};
export const decorators = [
  (story) => ({
    components: { story },
    template: '<div class="storybook-root"><story /></div>',
  }),
];
