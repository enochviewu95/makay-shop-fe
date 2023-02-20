<template>
  <div
    class="flex flex-col mx-auto max-w-2xl pt-15 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <div class="grid grid-cols-2 md:grid-cols-4 gap-1">
      <div class="mb-3">
        <h5 class="text-lg sm:text-xl font-semibold">Section</h5>
        <ul class="nav flex-col">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg"
              >Features</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg"
              >Pricing</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">About</a>
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <h5 class="text-lg sm:text-xl font-semibold">Section</h5>
        <ul class="nav flex-col">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg"
              >Features</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg"
              >Pricing</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">About</a>
          </li>
        </ul>
      </div>
      <div class="mb-3">
        <h5 class="text-lg sm:text-xl font-semibold">Section</h5>
        <ul class="nav flex-col">
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">Home</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg"
              >Features</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg"
              >Pricing</a
            >
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">FAQs</a>
          </li>
          <li class="nav-item mb-2">
            <a href="#" class="nav-link p-0 text-slate-400 sm:text-lg">About</a>
          </li>
        </ul>
      </div>

      <div class="offset-md-1 mb-3">
        <form>
          <h5 class="text-xl font-semibold mb-3">
            Subscribe to our newsletter
          </h5>
          <p class="text-lg text-slate-400">
            Monthly digest of what's new and exciting from us.
          </p>
          <div class="flex items-start flex-col">
            <input
              id="newsletter1"
              type="text"
              class="rounded-md shadow-md bg-white p-2 mb-2"
              placeholder="Email address"
            />
            <button
              class="rounded-md shadow-md bg-slate-500 text-white px-3 py-2 hover:bg-slate-800"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>

    <div class="flex flex-row border-t-2 border-slate-300 py-3">
      <p>&copy; 2022 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled flex">
        <li class="ms-3">
          <a class="bg-gray-900 w-24" href="#"
            ><svg class="fill-blue-500" width="24" height="24">
              <use xlink:href="#twitter" /></svg
          ></a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#instagram" /></svg
          ></a>
        </li>
        <li class="ms-3">
          <a class="link-dark" href="#"
            ><svg class="bi" width="24" height="24">
              <use xlink:href="#facebook" /></svg
          ></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
