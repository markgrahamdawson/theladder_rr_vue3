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
const startTime = props.eventObj.content.date.split(' ')[1]
const endTime = props.eventObj.content.date.split(' ')[1]
const url = props.eventObj.content.eventbright
const image = props.eventObj.content.thumbnail.filename
  </script>