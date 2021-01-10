import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Index from "../views/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      title: "chrono24"
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
