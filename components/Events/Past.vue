<template>
  <div class="pb-6 pt-16">
    <div class="font-josan pb-4 text-xl">Past Events</div>

    <div class="sm:flex sm:space-x-2 sm:space-y-0 space-y-2 h-full">
      <EventsPastEventCard
        v-if="pastEvents[0]"
        :pastEvent="pastEvents[0]"
        class="sm:w-1/3 h-full"
      />
      <EventsPastEventCard
        v-if="pastEvents[1]"
        :pastEvent="pastEvents[1]"
        class="sm:w-1/3 h-full"
      />
      <EventsPastEventCard
        v-if="pastEvents[2]"
        :pastEvent="pastEvents[2]"
        class="sm:w-1/3 h-full"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  pastEvents: Array<Object>,
});
</script>
