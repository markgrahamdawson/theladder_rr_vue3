<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="min-h-screen flex">
    
    <div class="p-6 w-full">
      <div>
        <div class="font-amatic font-semibold text-4xl title underline py-2">
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
      </div>
    </div>

    
    

  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


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
