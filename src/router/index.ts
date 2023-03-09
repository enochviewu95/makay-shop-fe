import { createRouter, createWebHistory } from "vue-router";
import StoreViewIndex from "../views/store/StoreViewIndex.vue";
import RegistrationViewIndex from "../views/registration/RegistrationViewIndex.vue";
import DashboardViewIndex from "../views/dashboard/DashboardViewIndex.vue";
import HomeView from "../views/store/HomeView.vue";
import DetailsView from "../views/store/DetailsView.vue";
import CartView from "../views/store/CartView.vue";
import CategoryView from "../views/store/CategoryView.vue";
import LoginView from "../views/registration/LoginView.vue";
import DashboardView from "../views/dashboard/DashboardView.vue";
import TestingView from "../views/TestingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: StoreViewIndex,
      children: [
        {
          path: "",
          name: "Home",
          component: HomeView,
        },
        {
          path: "product",
          name: "product",
          component: DetailsView,
        },
        {
          path: "cart",
          name: "cart",
          component: CartView,
        },
        {
          path: "category",
          name: "category",
          component: CategoryView,
        },
        {
          path: "test",
          name: "test",
          component: TestingView,
        },
      ],
    },
    {
      path: "/registration",
      component: RegistrationViewIndex,
      children: [
        {
          path: "",
          name: "login",
          component: LoginView,
        },
      ],
    },
    {
      path: "/dashboard",
      component: DashboardViewIndex,
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardView,
        },
      ],
    },
  ],
});

export default router;
