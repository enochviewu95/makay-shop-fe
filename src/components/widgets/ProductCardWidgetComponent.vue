<template>
  <a :href="href" class="group">
    <div
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
      />
    </div>
    <h3 class="mt-4 text-sm text-gray-700">{{ name }}</h3>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ price }}
    </p>
    <button
      class="rounded-md shadow-xl bg-slate-500 text-white px-3 py-2 hover:bg-slate-800"
    >
      Add To Cart
    </button>
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: String,
  imageSrc: String,
  imageAlt: String,
  name: String,
  price: String,
});
</script>

<style scoped>
img {
  height: 20rem;
}
</style>
