<template>
  <h1>Overview page is here... {{ count }}</h1>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  setup({ theme }, { emit }) {
    const count = ref(0);

    console.log(theme);
    console.log(emit);
    return { count };
  },
};
</script>

<style></style>
