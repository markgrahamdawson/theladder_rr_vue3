<template>
<div class="w-full">
  <div class="w-full md:bg-[url('~/assets/mailing.png')] md:bg-no-repeat md:bg-cover md:bg-center bg-orange flex items-center justify-center space-y-6 font-josan">
    <div class="py-20 px-4 sm:px-0">
      <div class="text-white text-center font-semibold space-y-5">
        <div class="text-3xl uppercase">
          Join our mailing list
        </div>
        <div>
          Newsletter, Events, Updates, hear about everything on our mailing list!
        </div>
      </div>

      <div class="w-full mt-5 flex flex-col sm:flex-row justify-center items-center space-x-4">
        <div class="w-2/3 m-auto">
          <input v-model="email" class="px-2 py-2 w-full rounded-md" id="email" type="text" placeholder="youremail@email.com">
        </div>
        <div class="w-1/3 mx-auto pt-4 sm:pt-0">
          <button @click="pingMailChimp" class="bg-teal text-white font-semibold rounded-md px-2 py-2 w-full uppercase">
          Join now
          </button>
        </div>
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