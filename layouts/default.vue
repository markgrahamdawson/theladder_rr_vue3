<template>
  <div class="min-h-screen bg-offwhite bg-[url('~/assets/scatter-background.svg')] bg-no-repeat">
    <Header />
    <div class="bg-[url('~/assets/scatter-background.svg')] bg-auto bg-no-repeat">
    <!-- <div class="flex">
      <div class="bg-[url('~/assets/scatter-background.svg')] bg-auto bg-no-repeat"></div>
      <div class="bg-[url('~/assets/scatter-background.svg')] bg-auto bg-no-repeat"></div>
    </div> -->
    <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
</script>
