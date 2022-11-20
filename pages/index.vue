<template>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="min-h-screen flex ">
    
    <div class="hidden sm:block p-6 w-1/3">
      <!-- <div class="bg-[url('~/assets/scatter-background.svg')] bg-auto bg-no-repeat bg-center"> -->
      <!-- <div class="bg-[url('~/assets/scatter-background-left.svg')] bg-auto bg-no-repeat w-full"> -->
        <div class="title font-amatic font-semibold text-4xl title underline py-2">
          Recent posts
        </div>
        <div v-for="(post, index) in posts"
          :key="index"
          class="py-2">
          <div class="font-josan text-teal">
            {{post.date}}
          </div>
          <div class="font-josan font-semibold">
            {{post.text}}
          </div>
        </div> 
      <!-- </div> -->
      <Radio class = "opacity-60 w-40 h-40"/>
    </div>

    
    
    <div class="px-10 pb-10 sm:w-2/3">
      <!-- <div class="absolute"> -->
      <div>
        <img src="~/assets/passmoreedwardslibrary.jpeg" alt="The Ladder Logo" class="object-cover w-full mb-8" />
      </div>
      <div class="title font-amatic font-semibold text-4xl title underline py-2">
        Welcome to the ladder
      </div>
      <!-- <StoryblokComponent v-if="story" :blok="story.content" /> -->
      <div class="font-josan text-l font-bold py-2 italic">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
      </div>
      <div class="font-josan text-l font-light py-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
// import Ladder from '~/components/icons/Ladder.vue'
import Radio from '~/components/icons/Radio.vue'
// import { useStoryApi } from '@storyblok/nuxt/composables'
// const story = await useAsyncStoryblok('news', { version: 'draft' })
// const storyapi = useStoryApi();
// const { data } = await storyapi.get("cdn/stories", { version: "draft" });

interface postsInterface {
  date: string
  text: string
}

const posts: postsInterface[] = [
  {
    date: '17 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
  {
    date: '17 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
  {
    date: '17 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
  {
    date: '17 Jan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  }
]

</script>

<style lang="css" scoped></style>
