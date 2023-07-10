<template>
  <div class="w-2/3 sm:hidden flex justify-end z-50">
    <button
      type="button"
      class="text-black-400"
      aria-controls="mobile-menu"
      aria-label="mobile-menu"
      aria-expanded="false"
    >
      <IconsHamburger
        class="w-20 h-20"
        @click="openMobileMenu = !openMobileMenu"
      />
      <div
        ref="target"
        v-if="openMobileMenu"
        class="absolute right-0 top-[100px] left-0 w-full bg-white flex flex-col space-y-4 text-xl py-8 font-josan"
      >
        <NuxtLink
          to="/about/"
          class="hover:text-gray-300"
          @click="openMobileMenu = !openMobileMenu"
          >About</NuxtLink
        >
        <NuxtLink
          to="/about/history"
          class="hover:text-gray-300 text-lg"
          @click="openMobileMenu = !openMobileMenu"
          >About - History</NuxtLink
        >
        <NuxtLink
          to="/about/directory"
          class="hover:text-gray-300 text-lg"
          @click="openMobileMenu = !openMobileMenu"
          >About - Directory</NuxtLink
        >
        <NuxtLink
          to="/news"
          class="hover:text-gray-300"
          @click="openMobileMenu = !openMobileMenu"
          >News
        </NuxtLink>
        <NuxtLink
          to="/events"
          class="hover:text-gray-300"
          @click="openMobileMenu = !openMobileMenu"
          >Events
        </NuxtLink>
        <NuxtLink
          to="/ourSpace"
          class="hover:text-gray-300"
          @click="openMobileMenu = !openMobileMenu"
          >Our Space
        </NuxtLink>
      </div>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

const openMobileMenu = ref(false);

function closeModal() {
  openMobileMenu.value = false;
}

onClickOutside(target, (event) => closeModal());
</script>
