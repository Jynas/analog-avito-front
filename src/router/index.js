import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/views/MainPage";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainPage,
  },
  {
    path: "/create/ad",
    name: "CreateAd",
    component: () => import("../views/CreateAd.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
