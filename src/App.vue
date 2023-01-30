<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import NavigationBar from "./components/NavigationBar.vue";
import LandingComponent from "./components/LandingComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
</script>

<template>
  <header>
    <NavigationBar />
    <LandingComponent />
  </header>
  <main class="bg-slate-200">
    <RouterView />
  </main>
  <footer class="bg-slate-100">
    <FooterComponent />
  </footer>
</template>

<style scoped></style>
