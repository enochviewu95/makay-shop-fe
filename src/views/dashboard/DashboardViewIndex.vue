<script setup lang="ts">
import { RouterView } from "vue-router";
import NavigationBar from "../../components/layouts/NavigationBarLayoutComponent.vue";
</script>

<template>
  <header class="sticky top-0 z-50">
    <NavigationBar />
  </header>
  <main class="bg-slate-200">
    <RouterView />
  </main>
</template>

<style scoped></style>
