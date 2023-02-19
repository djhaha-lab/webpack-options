<template>
  <button
    class="inline-block px-16px py-12px text-12px rounded-[2px] border-1px"
    :class="{ [classType]: true }"
  >
    <slot></slot>
  </button>
</template>

<script setup>
import { ref, toRefs } from "vue";

const props = defineProps({ type: { default: "default" } });
let { type: classType } = toRefs(props);

const buttonType = {
  default: "default",
  primary: "primary",
  warning: "warning",
};
// const type = ref("");
</script>

<style scoped>
button {
  --default: #fff;
  --primary: #3b82f6;
}
.default {
  @apply bg-$default text-black  border-gray-400;
}
.primary {
  @apply bg-$primary text-white  border-$primary;
}
</style>
