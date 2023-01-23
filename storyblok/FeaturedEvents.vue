<template>
  <div v-editable="blok" class="md:p-6 w-full">
    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Whats on
    </div>
    <div class="md:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-8">
        <div v-for="post in futureEvents" :key="post._uid" class="py-2">
          <NuxtLink :to="{ name: 'eventsdetail-slug', params: { slug: post.slug } }">
            <div class="mb-8 sm:block">


              <div class="relative font-josan text-teal flex justify-center items-center">
                <div class="h-28 w-28 -ml-6 -my-12 opacity-80 absolute bottom-0 left-0 bg-[url('~/assets/eye-warmred-INKY.svg')] bg-auto bg-no-repeat bg-center"></div>
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
    </div>

    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Previous events
    </div>
    <div class="md:p-6">
      <div class="md:grid md:grid-cols-3 md:gap-8">
        <div v-for="post in pastEvents" :key="post._uid" class="py-2">
          <NuxtLink :to="{ name: 'eventsdetail-slug', params: { slug: post.slug } }">
            <div class="mb-8 sm:block">
              <div class="relative font-josan text-teal">
                <div class="h-28 w-28 -ml-6 -my-12 opacity-80 absolute bottom-0 left-0 bg-[url('~/assets/eye-warmred-INKY.svg')] bg-auto bg-no-repeat bg-center"></div>
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
    </div>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  blok: Object,
})

const shortenText = (text,length) => {
  if (text.length > length) {return text.slice(0,length)+'...'}
  else {return text}
}

const today = new Date();

const pastEvents = props.blok.events.filter(d => new Date(d.content.date) < today);
const futureEvents = props.blok.events.filter(d => new Date(d.content.date) > today);

</script>