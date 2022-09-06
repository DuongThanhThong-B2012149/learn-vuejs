import { createStore } from "vuex";
import transaction from "../modules/transaction";
// Create a new store instance.
const store = createStore({
  modules: {
    transaction,
  },
});

export default store;
