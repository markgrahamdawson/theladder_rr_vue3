<template>
  <div class="h-full pb-1 text-xs truncate">
    <a :href="url">
      <div class="border-l-4 border-teal">
        <div class="hover:bg-gray-100 grayscale hover:grayscale-0">
          <img 
            :src="image"
            class="object-cover w-full h-16"/>
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
  fillCard?: boolean
}
const props = withDefaults(defineProps<Props>(), {
    eventObj: () => {},
    fillCard: false
});
const name = props.eventObj.name
const startTime = props.eventObj.content.date.split(' ')[1]
const endTime = props.eventObj.content.date.split(' ')[1]
const url = props.eventObj.content.eventbright
const image = props.eventObj.content.thumbnail.filename
</script>