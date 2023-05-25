<template>
  <div
    class="flex flex-col md:flex-row shadow-xl justify-center items-center rounded-xl"
  >
    <!-- image -->
    <div class="w-full md:w-1/3 hidden md:block">
      <img
        :src="props.thumbnail?.filename + '/m/300x0'"
        :alt="props.thumbnail?.alt"
        class="p-2 grayscale"
      />
    </div>
    <!-- info -->
    <div class="w-full md:w-2/3 font-josefin font-semibold p-12 space-y-3">
      <div class="text-4xl">{{ props.title }}</div>
      <div class="text-sm md:text-md">{{ props.content }}</div>
      <div class="uppercase">Contact</div>
      <div class="md:flex md:space-x-3 text-xs">
        <div class="space-y-4 md:w-1/2 pb-4 md:pb-0">
          <div v-if="props.phone">Phone: {{ props.phone }}</div>
          <div v-if="props.email">Email: {{ props.email }}</div>
          <div v-if="props.website.url">Web: {{ props.website.url }}</div>
        </div>
        <div class="space-y-4 md:w-1/2">
          <div v-if="props.facebook.url" class="flex">
            <IconsFacebook class="mr-2" /> {{ props.facebook.url }}
          </div>
          <div v-if="props.instagram.url" class="flex">
            <IconsInstagram class="mr-2" /> {{ props.instagram.url }}
          </div>
          <div v-if="props.twitter.url" class="flex">
            <IconsTwitter class="mr-2" /> {{ props.twitter.url }}
          </div>
        </div>
      </div>
    </div>
    <!-- mobile image -->
    <div class="w-full md:hidden">
      <img
        :src="props.thumbnail?.filename + '/m/300x0'"
        :alt="props.thumbnail?.alt"
        class="p-2 grayscale w-full object-cover object-top h-[400px]"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  thumbnail: { type: Object, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: Object, required: true },
  facebook: { type: Object, required: true },
  instagram: { type: Object, required: true },
  twitter: { type: Object, required: true },
});
</script>
