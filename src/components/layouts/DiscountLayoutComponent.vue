<template>
  <div
    class="mx-auto max-w-2xl pt-10 px-4 sm:pt-15 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-black text-3xl font-medium mt-1 mb-9">Get up to 70% off</h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-4">
      <template v-for="discount of discountsCategorgy" :key="discount.id">
        <div>
          <DiscountServicesCardWidgetComponent
            :image-src="discount.imageSrc"
            :header-color="discount.headerColor"
            :price="discount.price"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscountServicesCardWidgetComponent from "../widgets/DiscountServicesCardWidgetComponent.vue";

const discountsCategorgy = [
  {
    id: 0,
    imageSrc:
      "https://images.pexels.com/photos/5121738/pexels-photo-5121738.jpeg?auto=compress&cs=tinysrgb&w=327&h=460&dpr=1",
    headerColor: "#e9136342",
    price: "10.00",
  },
  {
    id: 1,
    imageSrc:
      "https://images.pexels.com/photos/4452520/pexels-photo-4452520.jpeg?auto=compress&cs=tinysrgb&w=327&h=460&dpr=1",
    headerColor: "#79554842",
    price: "50.00",
  },
  {
    id: 2,
    imageSrc:
      "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=327&h=460&dpr=1",
    headerColor: "#ffc10742",
    price: "20.00",
  },
  {
    id: 3,
    imageSrc:
      "https://images.pexels.com/photos/8839887/pexels-photo-8839887.jpeg?auto=compress&cs=tinysrgb&w=327&h=460&dpr=1",
    headerColor: "#00000042",
    price: "50.00",
  },
];
</script>

<style scoped></style>
