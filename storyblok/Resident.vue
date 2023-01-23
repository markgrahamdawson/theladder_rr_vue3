<template>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
    <div v-editable="blok" class="p-6 w-full">
      <div class="font-josan">
        <div class="flex ml-4">
          <IconsChevronLeft/>
          <NuxtLink to="/residents" class="font-permark ml-2">Back to residents</NuxtLink>
        </div>
        <div class=" flex justify-center">
          <img :src="blok.thumbnail?.filename+'/m/400x0' || 'https://picsum.photos/300/175'" :alt="blok.image?.alt" 
          class=""/>
        </div>
        <div class="px-16 pb-4 pt-8 font-permark">
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