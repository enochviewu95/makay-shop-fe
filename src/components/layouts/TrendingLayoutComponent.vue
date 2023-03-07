<template>
  <div
    class="mx-auto max-w-2xl py-16 pt-10 px-4 sm:pt-15 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-black text-3xl font-medium mt-1 mb-9">
      Trending Products For You!
    </h2>
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <template v-for="trend in trends" :key="trend.id">
        <TrendingCardWidgetComponent
          :href="trend.href"
          :image-src="trend.imageSrc"
          :title="trend.title"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ITrendingProducts } from "@/interfaces/CardInterface";
import TrendingCardWidgetComponent from "../widgets/TrendingCardWidgetComponent.vue";

const trends: ITrendingProducts[] = [
  {
    id: 0,
    title: "Furniture",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  },
  {
    id: 1,
    title: "Furniture",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
  },
];
</script>

<style scoped></style>
