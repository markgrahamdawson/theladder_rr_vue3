<template>
  <div class="w-full h-full md:flex">
    <div class="relative md:w-1/3 bg-black">
      <div
        class="absolute w-full h-full z-50 opacity-50"
        :class="`bg-${color}`"
      ></div>
      <img
        :src="futureEvent?.content.thumbnail?.filename + '/m/300x0'"
        :alt="futureEvent?.alt"
        class="w-full max-h-[300px] grayscale object-cover"
      />
    </div>
    <div class="md:w-2/3 bg-black p-8 font-josan uppercase text-white">
      <div class="space-y-3">
        <div class="text-xl">{{ futureEvent.content.performance }}</div>
        <div class="flex space-x-2 text-xs">
          <div class="bg-teal p-2">{{ futureEvent.content.date }}</div>
          <div class="bg-teal p-2">{{ futureEvent.content.date }}</div>
        </div>
        <div class="text-sm normal-case">{{ futureEvent.content.content }}</div>
        <button class="bg-orange rounded-full p-2 uppercase text-xs">
          book now
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  futureEvent: Object,
  color: String,
});
</script>
