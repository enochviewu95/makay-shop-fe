<template>
  <div class="grid lg:grid-cols-3 lg:gap-3 bg-white sm:grid-cols-1">
    <div class="py-6 px-4 sm:px-6 lg:col-span-2">
      <div class="flex items-start justify-between">
        <h1 class="text-4xl font-semibold">Shopping Cart</h1>
      </div>

      <div class="mt-8">
        <div class="flow-root">
          <ul role="list" class="-my-6 divide-y divide-gray-200">
            <li v-for="product in products" :key="product.id" class="flex py-6">
              <div
                class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
              >
                <img
                  :src="product.imageSrc"
                  :alt="product.imageAlt"
                  class="h-full w-full object-cover object-center"
                />
              </div>

              <div class="ml-4 flex flex-1 flex-col">
                <div>
                  <div
                    class="flex justify-between text-base font-medium text-gray-900"
                  >
                    <h3>
                      <a :href="product.href">{{ product.name }}</a>
                    </h3>
                    <p class="ml-4">{{ product.price }}</p>
                  </div>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ product.color }}
                  </p>
                </div>
                <div class="flex flex-1 items-end justify-between text-sm">
                  <p class="text-gray-500">Qty {{ product.quantity }}</p>

                  <div class="flex">
                    <button
                      type="button"
                      class="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="py-6 px-4 sm:px-6 lg:col-span-1">
      <div class="bg-gray-50 shadow-sm px-3 py-5 rounded-md">
        <div class="flex flex-col text-base text-gray-900">
          <h2 class="font-medium text-lg">Order Summary</h2>
          <ul class="divide-y divide-gray-300">
            <li class="py-3 px-2">
              <div class="flex justify-between text-sm text-gray-400">
                <p>Subtotal</p>
                <p class="text-gray-900 font-semibold">$99.00</p>
              </div>
            </li>
            <li class="py-3 px-2">
              <div class="flex justify-between text-sm text-gray-400">
                <p>Shipping estimate</p>
                <p class="text-gray-900 font-semibold">$99.00</p>
              </div>
            </li>
            <li class="py-3 px-2">
              <div class="flex justify-between text-sm text-gray-400">
                <p>Tax estimate</p>
                <p class="text-gray-900 font-semibold">$99.00</p>
              </div>
            </li>
            <li class="py-3 px-2">
              <div class="flex justify-between">
                <p class="font-medium">Order Total</p>
                <p class="text-gray-900 font-semibold">$99.00</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <a
            href="#"
            class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
            >Checkout</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];
</script>

<style scoped></style>
