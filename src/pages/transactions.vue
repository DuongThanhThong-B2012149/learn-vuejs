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
    <p style="color: 'red'">{{ error.message }}</p>
  </div>
  <div class="" v-else>Loading...</div>
</template>

<script>
import useTransaction from "../uses/fetchTransaction";
export default {
  setup() {
    const { error, transactions, getData } = useTransaction();

    getData();

    return {
      transactions,
      error,
    };
  },
};
</script>

<style></style>
