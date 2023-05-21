<template>
  <div class="pb-6 pt-16">
    <div class="font-josan pb-4 text-xl">Past Events</div>
    <div class="sm:flex sm:space-x-2">
      <div class="border sm:w-1/3 h-[110px]">event 1</div>
      <div class="border sm:w-1/3">event 2</div>
      <div class="border sm:w-1/3">event 3</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  pastEvents: Array<Object>,
});
</script>
