import { ref } from "vue";

export default function () {
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

  return {
    transactions,
    error,
    getData,
  };
}
