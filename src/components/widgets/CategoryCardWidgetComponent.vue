<template>
  <RouterLink to="/category" class="group">
    <div
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden mb-9 rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 shadow-lg"
    >
      <div class="w-full absolute top-0 left-0 p-5">
        <h2
          class="font-semibold text-2xl z-20 group-hover:opacity-40 text-center text-gray-900"
        >
          {{ name }}
        </h2>
      </div>
      <div class="opacity-70">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="h-full w-full object-cover object-center group-hover:opacity-40"
          rel="preload"
        />
      </div>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from "vue-router";
defineProps({
  href: String,
  name: String,
  imageSrc: String,
  imageAlt: String,
});
</script>

<style scoped></style>
