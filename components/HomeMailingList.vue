<template>
  <div class="mt-10 w-full md:bg-[url('~/assets/mailing.png')] md:bg-no-repeat md:bg-cover md:bg-center bg-orange flex items-center justify-center space-y-6 font-josan">
    <div class="py-20">
      <div class="text-white text-center font-semibold space-y-5">
        <div class="text-3xl uppercase">
          Join our mailing list
        </div>
        <div>
          Newsletter, Events, Updates, hear about everything on our mailing list!
        </div>
      </div>

      <div class="w-full grid grid-cols-[10fr_5fr] gap-2 mt-5">
        <div class="mx-2">
          <input v-model="email" class="px-2 py-2 w-full rounded-md" id="email" type="text" placeholder="youremail@email.com">
        </div>
        <div>
          <button @click="pingMailChimp" class="bg-teal text-white font-semibold rounded-md px-2 py-2 w-full uppercase">
          Join now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const email = ref('')
const pingMailChimp = () => {
  console.log(email.value)
}
</script>