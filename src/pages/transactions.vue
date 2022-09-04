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
  <div class="" v-else>Loading...</div>
</template>

<script>
export default {
  data() {
    return {
      transactions: [],
    };
  },
  created() {
    fetch("http://localhost:3000/transactions")
      .then((response) => {
        return response.json();
      })
      .then((data) => (this.transactions = data));
  },
};
</script>

<style></style>
