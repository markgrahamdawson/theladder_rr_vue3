<template>
  <div v-editable="blok" class="p-6 w-full">
    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Whats on
    </div>

    <div class="p-6">
      <div class="md:grid md:grid-cols-3 md:gap-8">
        <div v-for="post in blok.events" :key="post._uid" class="py-2">
          <NuxtLink :to="{ name: 'eventsdetail-slug', params: { slug: post.slug } }">
            <div class="mb-8 sm:block">
              <div class="font-josan text-teal">
                <img :src="post.content.thumbnail?.filename + '/m/300x0'" :alt="post.content.thumbnail?.alt"
                  class="p-2" />
              </div>
              <div class="font-josan text-teal p-2">
                {{ post.content.date }}
              </div>
              <div class="font-josan font-semibold p-2">
                {{ post.content.company }}
              </div>
              <div class="font-josan font-semibold p-2">
                {{ post.content.performance }}
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>

defineProps({
  blok: Object,
})

</script>