<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import CarouselComponent from "./components/CarouselComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <header>
    <NavigationBar />
    <CarouselComponent />
  </header>
  <RouterView />
  <footer class="bg-slate-100">
    <FooterComponent />
  </footer>
</template>

<style scoped></style>
