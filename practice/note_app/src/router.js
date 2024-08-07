import { createRouter, createWebHistory } from "vue-router";
import NoteGrid from "./components/NoteGrid.vue";

const routes = [{ path: "/", name: "grid", component: NoteGrid }];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
