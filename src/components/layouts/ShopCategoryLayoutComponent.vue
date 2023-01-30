<template>
  <div>
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-15 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-black text-3xl font-medium mt-1 mb-9">
        Shop by Category
      </h2>

      <div>
        <swiper
          :slides-per-view="5"
          :space-between="30"
          :autoplay="true"
          :modules="[Autoplay]"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
        >
          <swiper-slide v-for="product in products" :key="product.id">
            <a :href="product.href" class="group">
              <div
                class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg my-5 bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 shadow-lg"
              >
                <div class="w-full absolute top-0 left-0 p-5">
                  <h2
                    class="font-semibold text-2xl z-20 group-hover:opacity-20 text-center"
                  >
                    {{ product.name }}
                  </h2>
                </div>
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-full w-full object-cover object-center group-hover:opacity-20"
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

const onSwiper = (swiper: any) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("Slide change");
};
</script>

<style scoped>
img {
  height: 20rem;
}
</style>
