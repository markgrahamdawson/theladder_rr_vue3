<template>
  <div
    :class="`h-[400px] relative border border-8 border-solid h-full w-full border flex items-end justify-center bg-cover bg-black bg-no-repeat 2xl:bg-contain bg-center border-${props.borderColor}`"
    :style="{ backgroundImage: `url(${props.image})` }"
  >
    <!-- fade -->
    <div
      class="relative h-1/3 w-full text-white font-josefin p-2 bg-gradient-to-t from-[black_80%] to-transparent z-20 opacity-[.85]"
    >
      <!-- text -->
      <div class="font-semibold text-xl uppercase">{{ name }}</div>
      <div class="text-gray-400 text-l italic font-semibold">
        {{ jobTitle }}
      </div>
      <div class="h-1/2 overflow-y-scroll">
        <div class="text-sm">
          {{ description }}
        </div>
      </div>

      <!-- svg -->
      <component
        :is="svgIcon"
        class="absolute bottom-[80px] fill-white h-2/3 w-2/3 transform xl:left-[200px]"
        :class="[
          name === 'Josh' || name === 'Liv'
            ? 'left-[130px] p-6'
            : 'left-[130px]',
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
