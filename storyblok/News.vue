<template>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
    <div v-editable="blok" class="md:p-6 w-full">
      <div class="font-josan pt-8">
        <div class="flex ml-4">
          <IconsChevronLeft/>
          <NuxtLink to="/news" class="font-permark ml-2">Back to news</NuxtLink>
        </div>
        <div class="relative flex justify-center p-6">
          
          <div class="relative">
            <img :src="blok.thumbnail?.filename+'/m/400x0' || 'https://picsum.photos/300/175'" :alt="blok.image?.alt" class=""/>
            <div class="z-0 opacity-50 absolute -mb-10 -ml-4 h-40 w-40 bottom-0 left-0 bg-[url('~/assets/curves-black-INKY.svg')] bg-auto bg-no-repeat bg-center"></div>
          </div>
        </div>
        <div class="px-16 pb-4 pt-8 text-3xl font-permark">
          {{blok.title || "New Title"}}
        </div>
        <div class="w-full px-16">
          {{blok.content || "Lorem Ipsum"}}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    blok: Object,
  })
</script>