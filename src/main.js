import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// Make sure to _use_ the router instance to make the
// whole app router-aware.
import "./assets/main.css";

createApp(App).use(router).mount("#app");
