<template>
  <!-- :href="href" -->
  <div class="group">
    <div
      class="aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 shadow-md"
    >
      <label
        :for="id?.toString()"
        class="rounded-full p-2 bg-slate-200 w-10 h-10 flex justify-center items-center absolute z-10 right-3 top-2"
      >
        <font-awesome-icon
          icon="fa-solid fa-heart"
          class="text-xl"
          :class="state.favorite ? 'text-red-400' : 'text-white'"
        />
        <input
          :id="id?.toString()"
          :name="id?.toString()"
          type="checkbox"
          class="absolute hidden"
          @click="setFavorite"
        />
      </label>
      <router-link to="/product">
        <img
          :src="imageSrc"
          :alt="imageAlt"
          class="h-full w-full object-cover object-center group-hover:opacity-75"
          rel="preload"
        />
      </router-link>
    </div>
    <router-link to="/product">
      <h3 class="mt-4 text-sm text-gray-700 hover:text-gray-400">{{ name }}</h3>
    </router-link>
    <p class="mt-1 text-lg font-medium text-gray-900">
      {{ price }}
    </p>
    <button
      class="rounded-md shadow-md bg-slate-500 text-white px-3 py-2 hover:bg-slate-800 mb-8"
    >
      Add To Cart
    </button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { RouterLink } from "vue-router";

const productProps = defineProps({
  id: Number,
  href: String,
  imageSrc: String,
  imageAlt: String,
  name: String,
  price: String,
  isFavorite: Boolean,
});

const state = reactive({
  favorite: productProps.isFavorite,
});

const setFavorite = (event: MouseEvent) => {
  const inputField = event.target as HTMLInputElement;
  state.favorite = inputField.checked;
};
</script>

<style scoped>
img {
  height: 15rem;
}
</style>
