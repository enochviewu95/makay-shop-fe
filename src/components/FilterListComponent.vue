<template>
  <div class="px-4 my-2 inline-block">
    <Popover v-slot="{ open }" class="relative">
      <PopoverButton
        :class="open ? '' : 'text-opacity-90'"
        class="group inline-flex items-center rounded-md bg-slate-700 px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      >
        <span>{{ name }}</span>
        <ChevronDownIcon
          :class="open ? '' : 'text-opacity-70'"
          class="ml-2 h-5 w-5 text-white-300 transition duration-150 ease-in-out group-hover:text-opacity-80"
          aria-hidden="true"
        />
      </PopoverButton>

      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="translate-y-1 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-1 opacity-0"
      >
        <PopoverPanel
          class="absolute left-6 z-10 mt-3 w-max max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl"
        >
          <div
            class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
          >
            <div class="relative bg-white p-7">
              <a
                v-for="item in dropdownData"
                :key="dropdownData.indexOf(item)"
                :href="item.toString()"
                class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <div class="mx-auto p-4">
                  <p class="text-sm font-medium text-gray-900">
                    {{ item }}
                  </p>
                </div>
              </a>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";

const data = defineProps({
  name: { type: String, required: true },
  dropdownData: { type: Array<String>, required: true },
});

console.log("Data", data.dropdownData);
</script>
