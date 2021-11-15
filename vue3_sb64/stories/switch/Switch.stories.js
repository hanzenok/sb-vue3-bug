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
  setup() {
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
