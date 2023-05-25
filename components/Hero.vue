<template>
  <!-- <img src="~/assets/abouthero.png" alt="A solid orange color with rough scratches" 
    class="md:28 lg:h-[450px] w-full object-cover	"  /> -->

  <div
    class="md:w-full flex bg-[url('~/assets/heroTexture.png')] bg-cover bg-no-repeat bg-center justify-center items-center font-josefin text-white font-bold uppercase"
  >
    <div class="text-3xl sm:text-6xl p-10">{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps({
  text: { type: String, required: true },
});
</script>
