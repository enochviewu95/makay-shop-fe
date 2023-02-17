<template>
  <div class="rounded-lg shadow bg-slate-300 h-96 overflow-hidden">
    <img class="object-cover h-3/5 w-full" :src="imageSrc" :alt="title" />
    <div class="px-3 py-8 h-2/5 flex flex-col justify-evenly">
      <h2 class="text-2xl font-semibold">{{ title }}</h2>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <a
        :href="href"
        class="rounded-lg py-2 px-3 bg-slate-500 text-white hover:bg-slate-900 shadow w-28 text-center mt-3"
        >Shop Now</a
      >
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  href: String,
  title: String,
  imageSrc: String,
});
</script>

<style scoped></style>
