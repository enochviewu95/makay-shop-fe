<template>
  <div
    class="mx-auto max-w-2xl pt-10 px-4 sm:pt-15 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-black text-3xl font-medium mt-1 mb-9">Get up to 70% off</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <div>
        <DiscountCardWidgetComponent :image-src="discountsCategorgy.imageSrc" />
      </div>
      <div>
        <DiscountCardWidgetComponent :image-src="discountsCategorgy.imageSrc" />
      </div>
      <div>
        <DiscountCardWidgetComponent :image-src="discountsCategorgy.imageSrc" />
      </div>
      <div>
        <DiscountCardWidgetComponent :image-src="discountsCategorgy.imageSrc" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscountCardWidgetComponent from "../widgets/DiscountCardWidgetComponent.vue";

const discountsCategorgy = {
  imageSrc:
    "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
};
</script>

<style scoped></style>
