<template>
  <div v-editable="blok" class="p-6 w-full">
    <div class="font-josan">
      <NuxtLink to="/events">Back to events</NuxtLink>
      <div class=" flex justify-center">
        <img :src="blok.thumbnail?.filename + '/m/400x0' || 'https://picsum.photos/300/175'" :alt="blok.image?.alt"
          class="" />
      </div>
      <div class="px-16 pb-4 pt-8 font-semibold flex">
        <div class="w-3/4">
          {{ blok.date || "Date" }}
        </div>
        <div class="w-1/4">
          <div v-if="!firebaseUser" class="">
            <NuxtLink to="/firebase">Sign in to buy tickets for this event!</NuxtLink>
          </div>
          <div v-else class="">
            Buy tickets for this event
          </div>
        </div>
      </div>
      <div class="w-full px-16 py-2">
        {{ blok.company || "Company" }}
      </div>
      <div class="w-full px-16 py-2 ">
        {{ blok.performance || "Performance" }}
      </div>
      <div class="w-full px-16">
        {{ blok.content || "Lorem Ipsum" }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const firebaseUser = useFirebaseUser();

defineProps({
  blok: Object,
})
</script>