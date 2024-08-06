import { createRouter, createWebHistory } from "vue-router";
import DataSend from "./components/DataSend.vue";
import Register from "./components/Register.vue";
import App from "./App.vue";
import App_pinia from "./App_pinia.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/pinia",
    name: "pinia",
    component: App_pinia,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/data_send",
    name: "data_send",
    component: DataSend,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
