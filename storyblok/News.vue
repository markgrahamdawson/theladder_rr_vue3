<template>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
    <div v-editable="blok" class="p-6 w-full">
      <div class="font-josan">
        <NuxtLink to="/news" >Back to news</NuxtLink>
        <div class="relative flex justify-center">
          <div class="z-0 opacity-50 absolute -mb-8 -mx-2 h-40 w-40 bottom-0 left-0 h-8 w-8 bg-[url('~/assets/curves-black-INKY.svg')] bg-auto bg-no-repeat bg-center"></div>
          <img :src="blok.thumbnail?.filename+'/m/400x0' || 'https://picsum.photos/300/175'" :alt="blok.image?.alt" 
          class=""/>
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