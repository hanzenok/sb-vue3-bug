import XeSwitch from '../../xe-components/XeSwitch';
import {
  argTypesBase,
  argsBase,
  Base
} from '../../../shared/stories/switch/baseStory';
export default { ...argTypesBase };
const args = { ...argsBase };
export const Switch = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  data() {
    console.log('[LOG] I am NOT called on each controls change');
    return {
      args: this.$props,
      value: false
    };
  },
  components: {
    XeSwitch
  },
  ...Base
});
Switch.bind({});
Switch.args = args;
