<template>
  <div
    class="md:flex shadow-[rgba(0,0,0,.3)_5px_5px_10px] bg-white rounded-lg overflow-hidden"
  >
    <!-- left side  -->
    <div class="w-full md:w-1/3 grayscale">
      <!-- <img class="object-cover md:h-full" :src="useAsset(image)" /> -->
      <img
        :src="image + '/m/800x0'"
        :alt="imagealt"
        className="clip-your-needful-style"
        class="h-full object-cover"
      />
    </div>

    <!-- Right Side (Content) -->
    <div
      class="w-full md:w-2/3 h-full py-14 px-16 space-y-6 text-left font-josefin text-black"
    >
      <div class="text-2xl text-gray-500 italic">{{ date }}</div>
      <div class="text-4xl font-bold">{{ title }}</div>

      <div class="flex space-x-2">
        <div
          v-for="topic in topics"
          :class="`bg-${topic.color} text-white text-center px-3 py-2 uppercase w-fit rounded-tl-xl`"
        >
          {{ topic.text }}
        </div>
      </div>

      <div>{{ content }}</div>

      <NuxtLink
        :to="{ name: 'newsarticles-slug', params: { slug: slug } }"
        class="flex space-x-3"
      >
        <div>Read More</div>
        <IconsArrow />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";

export interface Topic {
  text: string;
  color: string;
}

function useAsset(path: string): string {
  const assets = import.meta.glob("~/assets/**/*", {
    eager: true,
    import: "default",
  });
  // @ts-expect-error: wrong type info
  return assets["/assets/" + path];
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  content: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  imagealt: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
  },

  topics: {
    required: true,
    type: Array as PropType<Topic[]>,
  },
});
</script>
