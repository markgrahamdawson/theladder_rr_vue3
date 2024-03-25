<template>
  <div class="h-full text-xs truncate ">
    <a :href="url">
      <div class="h-full border-l-4 border-transparent hover:bg-gray-100">
        <div>{{ startTime }} - {{ endTime }}</div>
        <div>{{ name }}</div>    
      </div>
    </a>
  </div>
</template>

<script setup lang="ts">
type Props = {
  eventObj?: any
}

const props = withDefaults(defineProps<Props>(), {
    eventObj: () => {},
});

const name = props.eventObj.name
const startTime = props.eventObj.next_occurrence_date.time
const endTime = props.eventObj.next_occurrence_date.time
const url = props.eventObj.url
</script>