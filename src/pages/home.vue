<template>
  <h1>Overview page is here... {{ count }}</h1>
  {{ transactions }}
</template>

<script>
import { ref } from "@vue/reactivity";
import useTransaction from "../uses/fetchTransaction";
export default {
  props: {
    theme: {
      type: String,
      default: "light",
    },
  },
  setup({ theme }, { emit }) {
    const { transactions, getData } = useTransaction();
    getData();

    const count = ref(0);

    console.log(theme);
    console.log(emit);
    return { count, transactions };
  },
};
</script>

<style></style>
