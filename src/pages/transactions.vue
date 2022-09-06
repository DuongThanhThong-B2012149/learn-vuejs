<template>
  <h1>Transaction is here...</h1>
  <div class="" v-if="transactions.length">
    <div class="item" v-for="transaction in transactions" :key="transaction.id">
      <router-link
        :to="{
          name: 'transaction-detail-route',
          params: {
            id: transaction.id,
          },
        }"
        >{{ transaction.name }}</router-link
      >

      <div class="">Price: {{ transaction.price }}</div>
    </div>
  </div>
  <div class="" v-else-if="error">
    <p style="color: 'red'">{{ error }}</p>
  </div>
  <div class="" v-else>Loading...</div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "@vue/runtime-core";
export default {
  setup() {
    const store = useStore();
    console.log(store.state.transaction.transactions);
    store.dispatch("transaction/fetchTransactions");
    const transactions = computed(() => {
      return store.state.transaction.transactions;
    });

    const error = computed(() => {
      return store.state.transaction.error;
    });

    return {
      transactions,
      error,
    };
  },
};
</script>

<style></style>
