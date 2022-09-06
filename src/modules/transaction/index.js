// initial state
const state = () => ({
  count: 0,
  transactionDetail: null,
  transactions: [],
  error: null,
});

// getters
const getters = {
  transactionFiltered(state) {
    return state.transactions.filter((s) => s % 2 === 0);
  },
};

// actions
const actions = {
  async fetchTransaction({ commit }, { id }) {
    const response = await fetch(`http://localhost:3000/transactions/${id}`);
    const data = await response.json();
    commit("setTransaction", data);
  },

  async fetchTransactions({ commit }) {
    try {
      const response = await fetch(`http://localhost:3000/transactions`);
      if (!response.ok) throw new Error("Something went wrong");

      const data = await response.json();
      commit("setTransactions", data);
    } catch (err) {
      console.log(err);
      commit("setError", err.message);
    }
  },
};

// mutations
const mutations = {
  increment(state) {
    state.count++;
  },
  setTransaction(state, transactionPayload) {
    state.transactionDetail = transactionPayload;
  },
  setTransactions(state, transactionsPayload) {
    state.transactions = transactionsPayload;
  },
  setError(state, errorPayload) {
    console.log("errorPayload: ", errorPayload);
    state.error = errorPayload;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
