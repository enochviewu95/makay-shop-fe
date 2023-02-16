<template>
  <div>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-black text-3xl font-medium mt-1 mb-9">
        Weekly Popular Products
      </h2>

      <!-- Desktop view -->
      <div class="hidden lg:block">
        <swiper
          :slides-per-view="5"
          :space-between="30"
          :modules="[Scrollbar]"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <ProductCardWidgetComponent
              :id="product.id"
              :href="product.href"
              :name="product.name"
              :price="product.price"
              :image-alt="product.imageAlt"
              :image-src="product.imageSrc"
              :is-favorite="product.isFavorite"
            />
          </swiper-slide>
        </swiper>
      </div>
      <!-- Mobile View -->
      <div class="lg:hidden">
        <swiper
          :slides-per-view="2"
          :space-between="30"
          :modules="[Scrollbar]"
          :scrollbar="{ draggable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <ProductCardWidgetComponent
              :id="product.id"
              :href="product.href"
              :name="product.name"
              :price="product.price"
              :image-alt="product.imageAlt"
              :image-src="product.imageSrc"
              :is-favorite="product.isFavorite"
            />
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

import { Scrollbar } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import ProductCardWidgetComponent from "../widgets/ProductCardWidgetComponent.vue";
import type { IProducts } from "@/interfaces/CardInterface";

const products: IProducts[] = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    isFavorite: false,
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    isFavorite: true,
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    isFavorite: false,
  },
  {
    id: 4,
    name: "Machined Mech. Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    isFavorite: true,
  },
  {
    id: 5,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    isFavorite: false,
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    isFavorite: true,
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    isFavorite: true,
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    isFavorite: false,
  },
];

const onSwiper = (swiper: any) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("Slide change");
};
</script>

<style scoped></style>
