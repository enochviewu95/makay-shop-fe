<template>
  <!-- <div class="max-w-2xl mx-auto flex flex-row justify-between">
    <div>
      <template v-for="filter in Filters" :key="filter.id">
        <FilterListComponent :name="filter.name" :dropdown-data="filter.list" />
      </template>
    </div>
    <div>
      <FilterListComponent />
    </div>
  </div> -->
  <div>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-black text-3xl font-medium mt-1 mb-9">
        Shop by Category
      </h2>

      <div>
        <swiper
          :slides-per-view="6"
          :space-between="50"
          :autoplay="true"
          :modules="[Autoplay]"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <a :href="product.href" class="group">
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 shadow-lg"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
            </a>
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

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
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
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
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
  },
];

const onSwiper = (swiper: any) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("Slide change");
};
</script>
