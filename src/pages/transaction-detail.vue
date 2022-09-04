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
export default {
  data() {
    return {
      transaction: null,
    };
  },
  created() {
    fetch(`http://localhost:3000/transactions/${this.$route.params.id}`)
      .then((response) => response.json())
      .then((data) => (this.transaction = data));
  },
};
</script>

<style></style>
