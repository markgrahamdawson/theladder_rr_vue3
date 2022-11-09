<template> 
  <div v-editable="blok" class="p-6 w-full">
    <div class="font-amatic font-semibold text-4xl title underline pb-8">
      Whats on
    </div>
    <!-- <div v-for="post in blok.events" :key="post._uid"
      >
      <NuxtLink :to="{name: 'eventsdetail-slug', params: {slug: post.slug}}">
        <div class="flex">
          <div class="w-60">
              <div class="p-2 font-semibold"> {{post.content.title}} </div>
            <img :src="post.content.thumbnail?.filename+'/m/300x0'" 
              :alt ="post.content.thumbnail?.alt" class="p-2"/>
          </div>
          <div class="w-full p-8 center">
            {{post.content.content}}
          </div>
        </div>
      </NuxtLink>
    </div> -->

      <div class="p-6">
        <div class="sm:grid sm:grid-cols-3 sm:gap-8">
          <div v-for="post in blok.events" :key="post._uid"
            class="py-2">
            <NuxtLink :to="{name: 'eventsdetail-slug', params: {slug: post.slug}}">
              <div class="">
                <div class="font-josan text-teal">
                  <img :src="post.content.thumbnail?.filename+'/m/300x0'" 
                :alt ="post.content.thumbnail?.alt" class="p-2"/>
                </div>
                <div class="font-josan text-teal p-2">
                  {{post.content.date}}
                </div>
                <div class="font-josan font-semibold p-2">
                  {{post.content.company}}
                </div>
                <div class="font-josan font-semibold p-2">
                  {{post.content.performance}}
                </div>
              </div>
            </NuxtLink>
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