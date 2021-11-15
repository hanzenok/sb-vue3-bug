import {
  argTypesBase,
  argsBase,
  Base,
} from "../../../shared/stories/switch/baseStory";
import XeSwitch from "../../xe-components/XeSwitch";
export default { ...argTypesBase };
const args = { ...argsBase };
import { ref } from "vue";
export const Switch = (args, { argTypes }) => ({
  data() {
    console.log('[LOG] I am called on each controls change');
  },
  setup() {
    console.log('[LOG] I am called on each controls change');
    const value = ref(false);
    return { args, value };
  },
  components: {
    XeSwitch,
  },
  ...Base,
});
Switch.bind({});
Switch.args = args;
