<template>
    <div
    class="md:w-full flex bg-[url('~/assets/heroTexture.png')] bg-cover bg-no-repeat bg-center justify-center items-center font-josefin text-white font-bold uppercase"
    >
        <div class="text-3xl sm:text-6xl p-10">{{text}}</div>
    </div>
</template>


<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
});
</script>