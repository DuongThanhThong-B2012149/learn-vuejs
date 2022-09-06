<template>
  <h1>Overview page is here...</h1>
</template>

<script>
export default {
  data() {
    return {
      count: 1000,
    };
  },
  created() {
    // console.log(this.$store.state.count);
    // console.log(this.$store.state.transactions);
    // console.log(this.$store.getters.transactionFiltered);
    this.count = this.$store.state.count;
  },
};
</script>

<style></style>
