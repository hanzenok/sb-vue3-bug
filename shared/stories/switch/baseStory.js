import { createType, disabled } from "../globals";
export const argTypesBase = {
  title: "Components/xeSwitch/Switch",
  argTypes: {
    ...createType(disabled),
  },
};
export const argsBase = {
  disabled: false,
};
export const Base = {
  template: `<XeSwitch v-model="value" :disabled="args.disabled"/>`,
};
