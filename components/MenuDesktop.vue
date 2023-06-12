<template>
  <div class="w-2/3 block hidden sm:block">
    <div class="flex flex-col justify-end h-full pl-20">
      <div
        class="flex text-1xl lg:text-2xl font-josan font-bold justify-between font-semibold text-black uppercase"
      >
        <!-- <NuxtLink to="/about" class="hover:text-gray-300 relative"
              >About
            </NuxtLink> -->
        <!-- <div class="absolute w-10 h-10 bg-white"></div> -->
        <div class="relative">
          <button
            class="hover:text-gray-300 relative uppercase"
            @click="showAbout = !showAbout"
          >
            About
          </button>
          <div
            class="absolute p-2 lg:p-3 w-[125px] lg:w-[175px] h-23 lg:h-32 bg-white flex flex-col space-y-2"
            v-if="showAbout"
            ref="target"
          >
            <NuxtLink
              to="/about/"
              class="hover:text-gray-300"
              @click="showAbout = !showAbout"
              >About</NuxtLink
            >
            <NuxtLink
              to="/about/history/"
              class="hover:text-gray-300"
              @click="showAbout = !showAbout"
              >History</NuxtLink
            >
            <NuxtLink
              to="/about/directory"
              class="hover:text-gray-300"
              @click="showAbout = !showAbout"
              >Directory</NuxtLink
            >
          </div>
        </div>

        <NuxtLink to="/news" class="hover:text-gray-300">News </NuxtLink>
        <NuxtLink to="/events" class="hover:text-gray-300">Events </NuxtLink>
        <NuxtLink to="/ourSpace" class="hover:text-gray-300"
          >Our Space
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onClickOutside } from "@vueuse/core";

const target = ref(null);

const showAbout = ref(false);

function closeModal() {
  showAbout.value = false;
}

onClickOutside(target, (event) => closeModal());
</script>
