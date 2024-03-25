<template>
  <div class="h-full pb-1 text-xs truncate">
    <a :href="eventObj.url">
      <div class="border-l-4 border-teal">
        <div class="hover:bg-gray-100 grayscale hover:grayscale-0">
          <img 
            :src="image"
            class="bg-cover"/>
          <div>
            <div>{{ startTime }} - {{ endTime }}</div>
            <div>{{ name }}</div>    
          </div>
        </div>
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
const image = props.eventObj.images.header
</script>