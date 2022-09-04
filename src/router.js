import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/home.vue";
import Transactions from "./pages/transactions.vue";
import TransactionDetail from "./pages/transaction-detail.vue";
import NotFound from "./pages/404.vue";
const routes = [
  {
    path: "/",
    name: "home-route",
    component: Home,
  },
  {
    path: "/transactions",
    name: "transaction-route",
    component: Transactions,
  },
  {
    path: "/transaction/:id",
    name: "transaction-detail-route",
    component: TransactionDetail,
  },
  {
    path: "/ts",
    redirect: "/transactions",
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
  },
];

console.log(import.meta.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
