<template>
  <Hero :text="`News`" />
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
    <div v-editable="blok" class="md:p-6 w-full">
      <div class="pt-8 font-josan">
        <!-- <div class="flex ml-4">
          <IconsChevronLeft />
          <NuxtLink to="/news" class="font-permark ml-2">Back to news</NuxtLink>
        </div> -->
        <div
          class="relative flex justify-center w-full sm:px-16 px-10 lg:px-32"
        >
          <div class="relative w-full">
            <div class="flex">
              <IconsChevronLeft /><NuxtLink
                to="/news"
                class="font-josan ml-2 pb-8 font-semibold text-lg"
                >Back to news</NuxtLink
              >
            </div>
            <div class="text-lg text-gray-500 text-blumine mt-2 mt-auto">
              {{
                new Date(blok.date).toLocaleDateString("en-GB", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              }}
            </div>
            <!-- title -->
            <div class="text-3xl font-semibold pb-2 pt-4">
              {{ blok.title || "New Title" }}
            </div>
            <!-- author -->
            <div class="font-semibold text-lg pb-2">
              by {{ blok.author || "New Author" }}
            </div>
            <!-- tags -->
            <div class="flex space-x-2 py-2 pb-8">
              <div v-if="blok.tag" class="bg-teal rounded-tl-lg px-2 py-0.5">
                {{ blok.tag[0] }}
              </div>
              <div v-if="blok.tag" class="bg-orange rounded-tl-lg px-2 py-0.5">
                {{ blok.tag[1] }}
              </div>
            </div>
            <img
              :src="
                blok.thumbnail?.filename + '/m/1000x0' ||
                'https://picsum.photos/300/175'
              "
              :alt="blok.image?.alt"
              class="w-full grayscale pb-8"
            />
            <!-- <div
              class="z-0 opacity-50 absolute -mb-10 -ml-4 h-40 w-40 bottom-0 left-0 bg-[url('~/assets/curves-black-INKY.svg')] bg-auto bg-no-repeat bg-center"
            ></div> -->
          </div>
        </div>
        <!-- <div class="w-full sm:px-16 px-10">
          {{ blok.content || "Lorem Ipsum" }}
        </div> -->
        <div
          v-html="articleContent"
          class="prose w-full px-10 md:px-0 m-auto"
        ></div>
        <!-- <div>{{ articleContent }}</div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: Object,
});
const articleContent = computed(() => renderRichText(props.blok.content));
</script>
