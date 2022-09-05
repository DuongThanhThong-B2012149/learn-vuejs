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
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const transactions = ref([]);
    const error = ref(null);

    const getData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/transactions`);
        if (!response.ok) throw new Error("Something went wrong");

        const data = await response.json();
        transactions.value = data;
      } catch (err) {
        error.value = err;
        console.log(error.value);
      }
    };
    getData();

    return {
      transactions,
      error,
    };
  },
};
</script>

<style></style>
