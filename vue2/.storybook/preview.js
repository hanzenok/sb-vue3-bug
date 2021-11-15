import '../stories/globals.scss';
import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import Element from 'element-ui';
import Backbone from 'backbone';
import Vue2TouchEvents from 'vue2-touch-events';

Vue.use(Vuex);
Vue.use(Element);
Vue.use(Vue2TouchEvents);

Backbone.appRouter = {
  pushPopup: () => {},
  deletePopup: () => {}
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*', disabled: true },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'centered',
};

export const decorators = [
  story => ({
    components: { story },
    template: '<div class="storybook-root"><story /></div>'
  })
];
