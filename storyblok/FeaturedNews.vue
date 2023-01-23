<template> 
  <div v-editable="blok" class="w-full md:p-6">
    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Recent posts
    </div>
    <!-- {{activeNews}} -->
    <div class="flex">
      
      <div v-if="screenWidth>768" class="w-1/3 pt-8">
        <div v-for="(post, index) in blok.news" :key="post._uid" class="ladder-underline pb-2">
          <!-- <NuxtLink :to="{name: 'newsarticles-slug', params: {slug: post.slug}}"> -->
            <button v-on:click="setActiveNewsIndex(index)" 
            @mouseover="hover = index"
            @mouseleave="hover = null"
            class="relative font-josan mb-6">
              <div class=" absolute bottom-0 left-0 -mb-8 h-16 w-16 bg-auto bg-no-repeat bg-center z-0"
              :class="index === hover ? `bg-[url('~/assets/eye-warmred-INKY.svg')]` : `bg-[url('~/assets/eye-black-INKY.svg')]`"></div>
              <div class="relative text-xl font-permark font-semibold z-40"> {{post.content.title}} </div>
              <div class="relative z-40">
                {{post.content.summary}}. . .
              </div>
            </button>

              <div class="my-2 ml-16 h-2 ladder-underline"></div>
            
          <!-- </NuxtLink> -->
        </div>
      </div>
      <div v-else class="w-full pt-8">
        <div v-for="(post, index) in blok.news" :key="post._uid" class="">
          <NuxtLink :to="{name: 'newsarticles-slug', params: {slug: post.slug}}">
            <button v-on:click="setActiveNewsIndex(index)" 
            @mouseover="hover = index"
            @mouseleave="hover = null"
            class="relative font-josan mb-12">
              <div class="absolute bottom-0 left-0 -mb-8 h-16 w-16 bg-[url('~/assets/eye-black-INKY.svg')] bg-auto bg-no-repeat bg-center z-0"
              :class="index === hover ? `bg-[url('~/assets/eye-warmred-INKY.svg')]` : `bg-[url('~/assets/eye-black-INKY.svg')]`"></div>
              <div class="relative text-xl font-permark font-semibold z-40"> {{post.content.title}} </div>
              <div class="relative z-40">
                {{post.content.summary}}. . .
              </div>
            </button>
            <div class="my-2 h-2 ladder-underline"></div>
          </NuxtLink>
        </div>
      </div>
      <div class="w-2/3 font-josan hidden md:block">
          <div class="flex-col items-center justify-center relative">
              
              <div class="relative z-40 p-8 font-bold text-3xl font-permark"> {{blok.news[activeNewsIndex].content.title}} </div>
              <div class="relative">
                <img :src="blok.news[activeNewsIndex].content.thumbnail?.filename+'/m/400x0'" 
                :alt ="blok.news[activeNewsIndex].content.thumbnail?.alt" className="clip-your-needful-style" class="px-8 m-auto"/>
                <div class="z-0 opacity-50 absolute -mb-20 lg:px-40 px-20 h-40 w-40 bottom-0 left-0 bg-[url('~/assets/curves-black-INKY.svg')] bg-auto bg-no-repeat bg-center"></div>
              </div>
          </div>
          <div class="w-full p-8 center m-auto relative z-40">
            {{blok.news[activeNewsIndex].content.content}}
          </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  blok: Object,
})

const activeNewsIndex=ref(0)

const setActiveNewsIndex = (index) => {
  console.log(index)
  activeNewsIndex.value = index
}

const hover=ref(null)


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