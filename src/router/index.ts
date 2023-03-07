import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DetailsView from "../views/DetailsView.vue";
import CartView from "../views/CartView.vue";
import CategoryView from "../views/CategoryView.vue";
import LoginView from "../views/LoginView.vue";
import TestingView from "../views/TestingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product",
      name: "product",
      component: DetailsView,
    },
    {
      path: "/cart",
      name: "cart",
      component: CartView,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/test",
      name: "test",
      component: TestingView,
    },
  ],
});

export default router;
