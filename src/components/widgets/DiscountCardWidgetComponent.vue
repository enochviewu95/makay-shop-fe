<template>
  <a :href="href" class="group">
    <div class="bg-orange-400 p-5 rounded-t-xl">
      <h2 class="textxl font-bold">Save</h2>
      <h1 class="font-extrabold text-2xl"><sup>GHS</sup>100</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
        blanditiis.
      </p>
    </div>
    <div
      class="aspect-square w-full rounded-b-xl overflow-hidden mb-9 bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 shadow-lg"
    >
      <img
        :src="imageSrc"
        :alt="imageAlt"
        class="w-full object-cover object-center group-hover:opacity-20"
      />
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  href: String,
  name: String,
  imageSrc: String,
  imageAlt: String,
});
</script>

<style scoped></style>
