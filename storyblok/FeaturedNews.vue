<template> 
  <div v-editable="blok" class="p-6 w-full">
    <div class="font-amatic font-semibold text-4xl title underline pb-8">
      Recent posts
    </div>
    <div v-for="post in blok.news" :key="post._uid"
      >
      <NuxtLink :to="{name: 'newsarticles-slug', params: {slug: post.slug}}">
        <div class="flex font-josan">
          <div class="w-60">
              <div class="p-2 font-semibold"> {{post.content.title}} </div>
            <img :src="post.content.thumbnail?.filename+'/m/300x0'" 
              :alt ="post.content.thumbnail?.alt" class="p-2"/>
          </div>
          <div class="w-full p-8 center m-auto">
            {{post.content.content}}
          </div>
        </div>
      </NuxtLink>

      
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  blok: Object,
})
</script>