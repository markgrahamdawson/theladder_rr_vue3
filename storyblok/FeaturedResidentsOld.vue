<template> 
  <div v-editable="blok" class="md:p-6 w-full">
    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Residents
    </div>
    <div v-for="(post, index) in blok.residents" :key="post._uid"
    class="md:p-8 font-josan mb-8"
      >
      <NuxtLink :to="{name: 'residentsdetail-slug', params: {slug: post.slug}}">
        
          <div v-if="index%2">
            <div class="sm:flex">
              <div class="sm:w-60">
                  <div class="p-2 font-permark"> {{post.content.title}} </div>
                <img :src="post.content.thumbnail?.filename+'/m/300x0'" 
                  :alt ="post.content.thumbnail?.alt" class="p-2"/>
              </div>
              <div class="hidden sm:block w-full p-8 center text-left m-auto">
                {{post.content.content}}
                <div class="h-20 -mt-8 w-full m-auto bg-[url('~/assets/line1-black.svg')] bg-auto bg-no-repeat"></div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="sm:flex">
              <div class="hidden sm:block w-full p-8 center text-right m-auto">
                {{post.content.content}}
              <div class="h-20 -mt-8 w-full m-auto bg-[url('~/assets/line1-black.svg')] bg-auto bg-no-repeat"></div>
              </div>
              <div class="sm:w-60">
                  <div class="p-2 font-permark"> {{post.content.title}} </div>
                <img :src="post.content.thumbnail?.filename+'/m/300x0'" 
                  :alt ="post.content.thumbnail?.alt" class="p-2 sm:block"/>
              </div>
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