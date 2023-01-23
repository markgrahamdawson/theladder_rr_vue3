<template>
  <div class="h-full w-full pb-10">
    <div class="h-full w-full overflow-hidden relative flex justify-center items-center">
      <div
        v-for="(contentItem, index) in content"
        :key="index"
        class="transition-all duration-1000 ease-in-out absolute w-full"
        :class="{
          'translate-x-full opacity-0': index > selectedSlide,
          '-translate-x-full opacity-0': index < selectedSlide
        }"
      >
        <div class="flex h-96 w-full">
          <div class="h-full w-1/4 p-2">
            <div class="font-bold text-3xl font-permark font-semibold">{{ contentItem.title }}</div>
            <div class="text-sm text-blumine mt-2 font-permark">
              {{ contentItem.text }}
            </div>
          </div>
          <img :src="useAsset(contentItem.image)" alt="The Ladder Logo" class="h-full w-2/3 object-cover"  />
        </div>
        <!-- <div class="flex-col h-4/5 w-full border border-black">
          <img :src="useAsset(contentItem.image)" alt="The Ladder Logo" class="h-full w-full object-cover"  />
          <div class="h-1/5 w-full p-2">
            <div class="font-bold text-3xl font-permark font-semibold">{{ contentItem.title }}</div>
            <div class="text-sm text-blumine mt-2 font-permark">
              {{ contentItem.text }}
            </div>
          </div>
        </div> -->

      </div>
    </div>
    <div>
      <div class="flex space-x-4 items-center justify-center mt-5">
        <div v-for="(contentItem, index) in content" :key="index" class="flex items-center">
          <button
            class="rounded-full"
            :class="{
              'bg-primary w-3 h-3 bg-teal border': selectedSlide === index,
              'bg-white w-2.5 h-2.5 border bg-gray-400 border-gray-400': selectedSlide !== index
            }"
            @click="selectSlide(index)"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'
// import { TCard } from '@hiyield/tailbreeze'

export interface SlidingContentCardContent {
  text: string
  title: string
  image: string
}

const props = defineProps({
  content: {
    required: true,
    type: Array as PropType<SlidingContentCardContent[]>
  }
})


// function to get images working
// https://github.com/nuxt/nuxt/issues/14766
function useAsset(path: string): string {
  const assets = import.meta.glob('~/assets/**/*', {
    eager: true,
    import: 'default',
  })
  // @ts-expect-error: wrong type info
  return assets['/assets/' + path]
}

const selectedSlide = ref<number>(0)
const timeout = 4000

let timer: ReturnType<typeof setInterval>

const incrementSlideIndex = () => {
  if (selectedSlide.value === props.content.length - 1) selectedSlide.value = 0
  else selectedSlide.value++
}

const selectSlide = (index: number) => {
  selectedSlide.value = index
  // clear interval
  clearInterval(timer)
  // create new interval
  timer = setInterval(incrementSlideIndex, timeout)
}

onMounted(() => {
  timer = setInterval(incrementSlideIndex, timeout)
})

onUnmounted(() => {
  // clear interval on unmount
  clearInterval(timer)
})
</script>
