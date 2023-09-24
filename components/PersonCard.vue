<template>
  <div
    :class="`flex flex-col justify-end items-end h-[500px] relative border border-8 border-solid w-full border bg-cover bg-black bg-no-repeat 2xl:bg-contain bg-center border-${props.borderColor}`"
    :style="{ backgroundImage: `url(${props.image})` }"
    >
    <!-- fade -->
    <div
      class="relative w-full text-white font-josefin p-2 bg-gradient-to-t from-[black_80%] to-transparent z-20 opacity-[.85]"
    >
      <!-- text -->
      <div class="font-semibold text-xl uppercase">{{ name }}</div>
      <div class="text-gray-400 text-l italic font-semibold">
        {{ jobTitle }}
      </div>
      <div class="h-full">
        <div class="text-sm">
          {{ description }}
        </div>
      </div>

      <!-- svg -->
      <component
        :is="svgIcon"
        class="absolute fill-white h-2/3 w-2/3 transform 2xl:left-[250px] xl:bottom-[100px] opacity-[.75]"
        :class="[
          name === 'Josh' || name === 'Liv' || name == 'Grace'
            ? 'left-[130px] p-5'
            : 'left-[130px]',
          name === 'Felix' || name == 'Andy'
          ? 'bottom-[150px]' : 'bottom-[125px]',
          name === 'Grace'
          ? 'left-[130px] py-0' : ''
        ]"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Vue, { PropType } from "vue";
import Eye from "~/components/icons/EyeInky.vue";

const props = defineProps({
  borderColor: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: String,
  jobTitle: String,
  description: String,
  svgIcon: Object,
});
</script>
