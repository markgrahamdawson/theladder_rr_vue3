<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="min-h-screen flex">

    <div class="p-6">
      <div class="grid grid-cols-4 gap-4">
        <div v-for="(event, index) in events"
          :key="index"
          class="py-2">
          <div class="w-40 h-40 border border-black">
            <div class="font-josan text-teal">
              {{event.date}}
            </div>
            <div class="font-josan font-semibold">
              {{event.performer}}
            </div>
            <div class="font-josan font-semibold">
              {{event.title}}
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- <div class="p-6">
      <div class="grid grid-cols-4 gap-4">
        <div class="w-40 h-40 border border-black">01</div>
        <div class="w-40 h-40 border border-black">02</div>
        <div class="w-40 h-40 border border-black">03</div>
        <div class="w-40 h-40 border border-black">04</div>
        <div class="w-40 h-40 border border-black">05</div>
        <div class="w-40 h-40 border border-black">01</div>
        <div class="w-40 h-40 border border-black">02</div>
        <div class="w-40 h-40 border border-black">03</div>
        <div class="w-40 h-40 border border-black">04</div>
        <div class="w-40 h-40 border border-black">05</div>
      </div>
    </div> -->


  </div>
</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';


interface eventsInterface {
  date: string
  performer: string
  title: string
  text: string
}

const events: eventsInterface[] = [
  {
    date: '17 Jan',
    performer: 'Hooligan Art Company',
    title: 'Bunker Cabaret',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
  {
    date: '17 Jan',
    performer: 'Hooligan Art Company',
    title: 'Bunker Cabaret',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
  {
    date: '17 Jan',
    performer: 'Hooligan Art Company',
    title: 'Bunker Cabaret',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
  {
    date: '17 Jan',
    performer: 'Hooligan Art Company',
    title: 'Bunker Cabaret',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...'
  },
]

</script>

<style lang="css" scoped></style>
