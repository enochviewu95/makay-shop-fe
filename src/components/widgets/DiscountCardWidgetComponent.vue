<template>
  <a :href="href" class="group">
    <div
      class="p-5 rounded-t-xl h-40"
      :style="{ backgroundColor: headerColor }"
    >
      <h1 v-if="title" class="font-medium text-2xl mb-3">{{ title }}</h1>
      <div v-else>
        <h2 class="textxl font-bold">Save</h2>
        <h1 class="font-medium text-2xl"><sup>GHS</sup>{{ price }}</h1>
      </div>
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
  title: String,
  price: String,
  imageSrc: String,
  imageAlt: String,
  headerColor: String,
});
</script>

<style scoped></style>
