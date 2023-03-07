<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-black text-3xl font-medium mt-1 mb-9">
        Todays Best Deals For You!
      </h2>

      <div class="grid grid-cols-3 lg:grid-cols-8 gap-2 justify-between my-10">
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Gadgets
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Fashion
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Toys
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Education
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Beauty
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Fitness
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Furniture
        </button>
        <button
          class="rounded-full px-4 py-2 border-2 border-slate-500 hover:bg-slate-500 hover:text-white focus:bg-slate-500 focus:text-white"
        >
          Sneakers
        </button>
      </div>

      <div
        class="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8"
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href"
          class="group"
        >
          <ProductCardWidgetComponent
            :id="product.id"
            :href="product.href"
            :name="product.name"
            :price="product.price"
            :image-alt="product.imageAlt"
            :image-src="product.imageSrc"
            :is-favorite="product.isFavorite"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductCardWidgetComponent from "@/components/widgets/ProductCardWidgetComponent.vue";
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
    isFavorite: true,
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
    isFavorite: false,
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
    isFavorite: true,
  },
  {
    id: 4,
    name: "Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    isFavorite: false,
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
    isFavorite: true,
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
    isFavorite: false,
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
    name: "Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    isFavorite: false,
  },
];
</script>
