<template>
  <div class="w-full font-josan">
    <div class="flex flex-col relative">
      <div class="h-[500px] md:h-96 overflow-hidden relative flex justify-start items-center">
        <div 
          v-for="(contentItem, index) in content"
          :key="index"
          class="transition-all duration-1000 ease-in-out absolute w-full md:w-3/4"
          :class="{
            'translate-x-full opacity-0': index > selectedSlide,
            '-translate-x-full opacity-0': index < selectedSlide,
            'translate-x-full opacity-100': index === selectedSlide+1,
          }"
        >
          <div class="md:flex h-[500px] md:h-96 w-full">
            <!-- Image -->
            <img :src="contentItem.image" alt="The Ladder Logo" class="h-1/3 md:h-full w-full md:w-1/3 object-cover grayscale"  />
            <!-- Content -->
            <div class="h-2/3 md:h-full w-full md:w-2/3 p-8 mb-2 md:border-b-4 md:border-r-4 flex flex-col justify-between">
              <div class="justify-between">
                <div class="text-3xl font-semibold">{{ contentItem.title }}</div>
                <div class="text-sm text-gray-500 text-blumine mt-2 mt-auto">{{ contentItem.date }}</div>
              </div>
              <div class="relative text-sm text-blumine mt-2 overflow-hidden h-3/4">
                {{ contentItem.text }}
                <div class="absolute bottom-0 bg-gradient-to-t from-white h-32 w-full"></div>
              </div>
              <NuxtLink :to="{name: 'newsarticles-slug', params: {slug: contentItem.slug}}" class="flex space-x-3">
                <div>read more</div>
                <IconsArrow />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="absolute right-0 md:bg-gradient-to-l from-white text-white h-full flex justify-center items-center w-32">
        <div class="bg-black rounded-full h-10 w-10 flex justify-center ml-8">
          <button 
          class="bg-black rounded-full h-10 w-10 flex justify-center items-center" 
          @click="incrementSlideIndex">
            <IconsChevronLeft class="rotate-180"/>
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, PropType } from 'vue'

export interface SlidingContentCardContent {
  text: string
  title: string
  image: string
  date: string
  slug: string
}

const props = defineProps({
  content: {
    required: true,
    type: Array as PropType<SlidingContentCardContent[]>
  }
})

const selectedSlide = ref<number>(0)

const incrementSlideIndex = () => {
  if (selectedSlide.value === props.content.length - 1) selectedSlide.value = 0
  else selectedSlide.value++
}

const selectSlide = (index: number) => {
  selectedSlide.value = index
}

const screenWidth = ref(0)
const onScreenResize = () => {
  window.addEventListener("resize", () => {updateScreenWidth();}); 
}
const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
}
onMounted(() => {
  updateScreenWidth();
  onScreenResize();
})

</script>
