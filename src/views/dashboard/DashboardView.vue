<template>
  <div class="grid grid-cols-12 h-screen">
    <!-- Side Navigation -->
    <div
      class="bg-sky-300 flex flex-col col-span-2 items-start px-5 sticky top-0 left-0 h-full"
    >
      <div class="">
        <nav>
          <h1 class="text-lg font-bold tracking-tight text-gray-900 pt-8 pb-8">
            Dashboard
          </h1>
          <ul class="">
            <li>
              <a href="">
                <div class="flex py-4 items-center">
                  <font-awesome-icon
                    icon="fa-solid fa-car-side"
                    class="text-sky-900 text-xl"
                  />
                  <p class="ml-3">Orders</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="flex py-4 items-center">
                  <font-awesome-icon
                    icon="fa-solid fa-clock-rotate-left"
                    class="text-sky-900 text-xl"
                  />
                  <p class="ml-3">History</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="flex py-4 items-center">
                  <font-awesome-icon
                    icon="fa-solid fa-gear"
                    class="text-sky-900 text-xl"
                  />
                  <p class="ml-3">Settings</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="flex py-4 items-center">
                  <font-awesome-icon
                    icon="fa-solid fa-circle-user"
                    class="text-sky-900 text-xl"
                  />
                  <p class="ml-3">Account</p>
                </div>
              </a>
            </li>
            <li>
              <a href="">
                <div class="flex py-4 items-center">
                  <font-awesome-icon
                    icon="fa-solid fa-circle-user"
                    class="text-sky-900 text-xl"
                  />
                  <p class="ml-3">Account</p>
                </div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="w-full mt-10">
        <div class="bg-red-300 shadow-md rounded-lg aspect-w-10 aspect-h-7">
          <div>
            <h1>Enoch Viewu</h1>
            <p>Hello World</p>
          </div>
        </div>
      </div>
    </div>
    <!-- dashboard router -->
    <div class="col-span-10 bg-slate-800">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<style scoped></style>
