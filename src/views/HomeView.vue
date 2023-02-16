<template>
  <LandingComponent />
  <ShopCategoryLayoutComponent />
  <BestDealsLayoutComponent />
  <DiscountLayoutComponent />
  <WeeklyPopularProductsLayoutComponent />
</template>

<script setup lang="ts">
import LandingComponent from "../components/layouts/LandingLayoutComponent.vue";
import ShopCategoryLayoutComponent from "../components/layouts/ShopCategoryLayoutComponent.vue";
import BestDealsLayoutComponent from "../components/layouts/BestDealsLayoutComponent.vue";
import DiscountLayoutComponent from "../components/layouts/DiscountLayoutComponent.vue";
import WeeklyPopularProductsLayoutComponent from "@/components/layouts/WeeklyPopularProductsLayoutComponent.vue";
</script>

<style scoped></style>
