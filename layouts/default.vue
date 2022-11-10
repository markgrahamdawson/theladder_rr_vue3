<template>
  <div class="min-h-screen bg-offwhite">
    <Header />
    <!-- <div class="bg-[url('~/assets/scatter-background.svg')] bg-auto bg-no-repeat w-full"> -->
      <div class="bg-[url('~/assets/scatter-background-left.svg')] bg-auto bg-no-repeat w-full">
        <div class="bg-[url('~/assets/scatter-background-right.svg')] bg-auto bg-no-repeat w-full">
          <slot></slot>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script lang="ts" setup>
</script>
