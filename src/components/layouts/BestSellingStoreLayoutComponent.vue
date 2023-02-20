<template>
  <div class="bg-gray-100">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-black text-3xl font-medium mt-1 mb-9">
        Best Selling Store
      </h2>

      <div
        class="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="store in stores"
          :key="store.id"
          :href="store.href"
          class="group"
        >
          <StoreCardWidgetComponent
            :id="store.id"
            :href="store.href"
            :title="store.title"
            :image-alt="store.imageAlt"
            :image-src="store.imageSrc"
            :brand-logo-src="store.brandLogoSrc"
            :brand-logo-alt="store.brandsLogoAlt"
            :speciality="store.speciality"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IBrands } from "@/interfaces/CardInterface";
import StoreCardWidgetComponent from "../widgets/StoreCardWidgetComponent.vue";
const stores: IBrands[] = [
  {
    id: 1,
    title: "Earthen Bottle",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    brandLogoSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-05.jpg",
    brandsLogoAlt: "company name",
    speciality: ["bag", "perfume"],
  },
  {
    id: 2,
    title: "Nomad Tumbler",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    brandLogoSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    brandsLogoAlt: "company name",
    speciality: ["bag", "perfume"],
  },
  {
    id: 3,
    title: "Focus Paper Refill",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    brandLogoSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-07.jpg",
    brandsLogoAlt: "company name",
    speciality: ["bag", "perfume"],
  },
  {
    id: 4,
    title: "Mechanical Pencil",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-08.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    brandLogoSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
    brandsLogoAlt: "company name",
    speciality: ["bag", "perfume"],
  },
];
</script>
