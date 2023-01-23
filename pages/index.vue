<template>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="min-h-screen sm:p-16 flex ">
    
    <!-- <div class="hidden sm:block p-6 w-1/3">
        <div class="title font-amatic font-semibold text-4xl title ladder-underline-small py-2">
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
      <Radio class = "opacity-60 w-40 h-40"/>
    </div> -->

    
    
    <div class="px-10 pb-10">
      <!-- <div class="absolute"> -->
      <!-- <div>
        <img src="@/assets/passmoreedwardslibrary.jpeg" alt="The Ladder Logo" class="object-cover w-full py-8" />
      </div> -->
      <div class="h-2/3 w-full flex items-center justify-center hidden md:block">
        <SlidingContentCard :content="slidingCardContent" />
      </div>
      <div class=" w-full pt-8 md:hidden">
        <div class="w-full flex items-center justify-center">
          <img src="~/assets/passmoreedwardslibrary.jpeg" alt="The Ladder Logo" class="h-1/3 object-cover"  />
        </div>
      </div>
      
      <div class="title font-amatic font-semibold text-4xl title ladder-underline py-2">
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


import SlidingContentCard, { SlidingContentCardContent } from '~/components/SlidingContentCard.vue'

const slidingCardContent: SlidingContentCardContent[] = [
  {
    title: 'News',
    text: 'This year there is lots going on at the ladder as we work on building restoration, welcome our first residents and organise fantastic events. Keep up to date with everything thats going on by checking out our recent news.',
    image: 'newsImage.png'
  },
  {
    title: 'About',
    text: 'In 1894 Passmore Edwards built the library for the people of Redruth. In 2022 Rift theatre company took on that legacy to build an arts and culture hub. Find out more...',
    image: 'passmoreedwardslibrary.jpeg'
  },
  {
    title: 'Events',
    text: 'RIFT Excursions Limited tell stories without boundaries. Experts in immersive, experiential and site-specific theatre-making, events and performances. Check out the schedule for all events here... ',
    image: 'bunkerCab.png'
  },
  {
    title: 'Residents',
    text: 'We are home to a wide range of great enterprises including nurseries, immersive storytelling, catering and community gardening. For a list of all our residents and contact details see our residents listings.',
    image: 'writtersBlockOpeningDay2.png'
  }
]

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
