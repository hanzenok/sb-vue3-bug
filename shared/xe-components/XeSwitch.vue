<template>
  <el-switch
    v-bind="$attrs"
    v-on="getListeners"
    :width="50"
    class="xe-switch"
  />
</template>
<script>
export default {
  name: "XeSwitch",
  computed: {
    getListeners() {
      const { ...others } = this.$listeners;
      return { ...others };
    },
  },
};
</script>
