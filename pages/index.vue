<template>
  
  <!-- Hero Image -->
  <img src="~/assets/Home_Hero.jpg" alt="Hero Image, The ladder: Redruth's future creative hub">

    <!-- Welcome -->
  <div class="grid grid-cols-2 items-center w-full" style="grid-template-columns: 7fr 10fr">
    <!-- Left Col -->
    <div class="bg-beige text-center">
      <div class="w-3/4 p-8 mx-auto sm:p-0">
        <div class="title font-josefin font-semibold text-4xl title">
          <h1>Welcome to the ladder</h1> 
        </div>
        <div class="text-left">
          <div class="font-josan text-l font-bold py-2 italic ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
          </div>
          <div class="font-josan text-l font-light py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>
    </div>
    <!-- Right Col -->
      <div class="items-end justify-center">
        <img src="~/assets/discussing.jpg" alt="Josh and Felix talking by the Redruth library window" class="h-1/5 object-cover" />
      </div>
  </div>
  
  <!-- End of Welcome  -->

  <!-- News -->
  <div>
    <div class="title font-josefin font-semibold text-4xl title">
        <h1>Recent News</h1> 
    </div>

    <div class="h-2/3 w-full flex items-center justify-center hidden md:block">
      <SlidingContentCard :content="slidingCardContent" />
    </div>
  </div>
  <!-- End of News -->

  <!-- Artist Residency and Rent a Practice Room -->
  <div class="grid grid-cols-2 items-center" style="gap: 1.25rem;">
  <!-- Left Col -->
  <div class="relative flex justify-center items-center text-center bg-cover bg-center" style="background-image: url('~/assets/Home_Residency-IMG.jpg');">
    <!-- <img src="~/assets/Home_Residency-IMG.jpg" alt="Tall windows in an octagonal room" class=""/> -->
    <h1>Artist Residency</h1>
    
    <p>
      ipsum dolor sit amet consectetur adipisicing elit. Quas laborum magnam nam amet velit sapiente facere vitae veniam natus iusto consequuntur quidem cupiditate earum excepturi adipisci, voluptatem, fuga nostrum omnis maiores consectetur pariatur! Necessitatibus harum dignissimos quam, doloribus deserunt placeat error ea consequuntur ex, dolor commodi possimus! Excepturi, molestiae quae?
    </p>

    
  </div>
  <!-- Right Col -->
  <div class="relative flex justify-center items-center text-center">
    <img src="~/assets/Home_Renting-IMG.jpg" alt="Empty Practice Room" class=""/>
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
