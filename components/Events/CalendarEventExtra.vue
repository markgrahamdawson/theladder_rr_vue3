<template>
  <div class="">
    <NuxtLink :to="`/events?day=${date}`">
      <div class="text-center bg-teal text-xs hover:bg-orange">See All</div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
type Props = {
  eventObj?: any
}
const props = withDefaults(defineProps<Props>(), {
    eventObj: () => {},
});
const date = props.eventObj.content.date.split(' ')[0]
</script>