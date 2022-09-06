<template>
  <h1>Transactions details page is here...</h1>

  <div class="" v-if="transaction">
    <h1>ID: {{ $route.params.id }}</h1>
    <h3>NAME: {{ transaction.name }}</h3>
    <p>PRICE: {{ transaction.price }}</p>
  </div>
  <div class="" v-else>Loading transaction {{ $route.params.id }} ....</div>
</template>

<script>
import { computed } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const store = useStore();
    const route = useRoute();
    store.dispatch("transaction/fetchTransaction", { id: route.params.id });
    const transactionDetail = computed(
      () => store.state.transaction.transactionDetail
    );
    return {
      transaction: transactionDetail,
    };
  },
};
</script>

<style></style>
