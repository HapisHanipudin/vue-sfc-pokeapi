import { createRouter, createWebHistory } from "vue-router";
import detail from "../views/detail.vue";
import home from "../views/home.vue";

const routes = [
  { path: "", component: home },
  { path: "/detail/:name", component: detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
