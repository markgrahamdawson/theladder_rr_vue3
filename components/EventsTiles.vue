<template>
  <div class="md:grid md:grid-cols-3 md:gap-8">
    <div v-for="(post, index) in events" :key="post._uid" class="py-2">
      <NuxtLink :to="{ name: 'eventsdetail-slug', params: { slug: post.slug } }">
        <div class="mb-8 sm:block"
        @mouseover="hover = index"
        @mouseleave="hover = null">


          <div class="relative font-josan text-teal flex justify-center items-center">
            <div :class="index === hover ? `absolute bg-black h-full w-full opacity-50 flex justify-center items-center text-xl`:`hidden`"> find out more</div>
            <div class="h-28 w-28 -ml-6 -my-12 opacity-80 absolute bottom-0 left-0 bg-[url('~/assets/eye-warmred-INKY.svg')] bg-auto bg-no-repeat bg-center"
            :class="index === hover ? `bg-[url('~/assets/eye-warmred-INKY.svg')]` : `bg-[url('~/assets/eye-black-INKY.svg')]`"></div>
            <img :src="post.content.thumbnail?.filename + '/m/300x0'" :alt="post.content.thumbnail?.alt"
              class="p-2 h-60 object-cover" />
          </div>


          <div class="font-josan text-teal p-2">
            {{ post.content.date }}
          </div>
          <div class="font-permark font-semibold p-2">
            {{ shortenText(post.content.performance,80) }}
          </div>
          <div class="font-josan font-semibold p-2">
            {{ shortenText(post.content.company,80)}}
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, PropType } from 'vue'

const props = defineProps({
  events: {
    required: true,
    type: Array as PropType<Object[]>
  }
});


const hover=ref(null)
const shortenText = (text,length) => {
  if (text.length > length) {return text.slice(0,length)+'...'}
  else {return text}
}
</script>