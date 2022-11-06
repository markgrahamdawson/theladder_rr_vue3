<template>
  <div v-editable="blok" class="p-6 w-full">
    <div class="font-josan">
      <NuxtLink to="/residents" >Residents</NuxtLink>
      <div class=" flex justify-center">
        <img :src="blok.thumbnail?.filename+'/m/400x0' || 'https://picsum.photos/300/175'" :alt="blok.image?.alt" 
        class=""/>
      </div>
      <div class="px-16 pb-4 pt-8 font-semibold">
        {{blok.title || "New Title"}}
      </div>
      <div class="w-full px-16">
        {{blok.content || "Lorem Ipsum"}}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  defineProps({
    blok: Object,
  })
</script>