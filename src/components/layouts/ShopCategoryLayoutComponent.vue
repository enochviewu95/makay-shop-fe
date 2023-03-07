<template>
  <div>
    <div
      class="mx-auto max-w-2xl pt-10 px-4 sm:pt-15 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-black text-3xl font-medium mt-1 mb-9">
        Shop by Category
      </h2>

      <div class="hidden lg:block">
        <swiper
          :slides-per-view="5"
          :space-between="30"
          :autoplay="true"
          :modules="[Autoplay]"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <category-card-widget-component
              :href="product.href"
              :name="product.name"
              :image-src="product.imageSrc"
              :image-alt="product.imageAlt"
            />
          </swiper-slide>
        </swiper>
      </div>
      <div class="lg:hidden">
        <swiper
          :slides-per-view="2"
          :space-between="30"
          :autoplay="true"
          :modules="[Autoplay]"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <category-card-widget-component
              :href="product.href"
              :name="product.name"
              :image-src="product.imageSrc"
              :image-alt="product.imageAlt"
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

import { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";

import CategoryCardWidgetComponent from "../widgets/CategoryCardWidgetComponent.vue";
import type { ICategory } from "@/interfaces/CardInterface";

const products: ICategory[] = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Lorem",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Ipsum",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Lorem",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Lorem",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Machined",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];
</script>

<style scoped></style>
