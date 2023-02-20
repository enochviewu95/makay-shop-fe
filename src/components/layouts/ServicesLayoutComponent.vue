<template>
  <div
    class="mx-auto max-w-2xl pt-10 px-4 sm:pt-15 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2 class="text-black text-3xl font-medium mt-1 mb-9">
      Services For Our Customers
    </h2>
    <div class="grid grid-cols-1 gap-4 lg:grid-cols-3">
      <template v-for="service of services" :key="service.id">
        <div>
          <DiscountCardWidgetComponent
            :title="service.title"
            :image-src="service.imageSrc"
            :header-color="service.headerColor"
          />
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import DiscountCardWidgetComponent from "../widgets/DiscountCardWidgetComponent.vue";

const services = [
  {
    id: 0,
    title: "Frequently Asked Questions",
    imageSrc:
      "https://images.pexels.com/photos/5121738/pexels-photo-5121738.jpeg",
    headerColor: "#e9136342",
  },
  {
    id: 1,
    title: "Online Payment Process",
    imageSrc:
      "https://images.pexels.com/photos/4452520/pexels-photo-4452520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headerColor: "#79554842",
  },
  {
    id: 2,
    title: "Home Delivery Options",
    imageSrc:
      "https://images.pexels.com/photos/3908800/pexels-photo-3908800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    headerColor: "#ffc10742",
  },
];
</script>

<style scoped></style>
