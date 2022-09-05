<template>
  <h1>Overview page is here...</h1>
  <input type="text" placeholder="Enter the customer..." v-model="searchText" />
  <ul>
    <li v-for="cs in customersFilleed" :key="cs">{{ cs }}</li>
  </ul>
</template>

<script>
import { ref } from "@vue/reactivity";
import { computed, watch, watchEffect } from "@vue/runtime-core";
export default {
  setup() {
    const searchText = ref("");
    const customers = ["hehe", "haha"];
    const customersFilleed = computed(() =>
      customers
        .map((cs) => {
          cs.toLowerCase();
          return cs;
        })
        .filter((cs) => cs.includes(searchText.value.toLowerCase()))
    );

    watch(searchText, (newValue, oldValue) => {
      console.log(newValue, oldValue);
    });

    watchEffect(() => {
      if (searchText.value) console.log("running...");
    });

    return {
      searchText,
      customersFilleed,
    };
  },
};
</script>

<style></style>
