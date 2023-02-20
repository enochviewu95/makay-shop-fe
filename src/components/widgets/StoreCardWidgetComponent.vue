<template>
  <a :href="href" class="group">
    <div
      class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="h-full w-full object-cover object-center group-hover:opacity-75"
        rel="preload"
      />
    </div>
    <div
      class="rounded-full overflow-hidden absolute w-20 h-20 bottom-16 left-4 border-4 border-gray-100"
    >
      <img :src="brandLogoSrc" :alt="brandsLogoAlt" />
    </div>
    <div class="pt-10">
      <h3 class="text-lg text-gray-900 font-medium">{{ title }}</h3>
      <p class="text-gray-900">
        {{ speciality![0] }} &#x2022; {{ speciality![1] }}
      </p>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  id: Number,
  href: String,
  imageSrc: String,
  imageAlt: String,
  title: String,
  brandLogoSrc: String,
  brandsLogoAlt: String,
  speciality: Array<String>,
});
</script>

<style scoped></style>
