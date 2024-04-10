<template>
  <div v-editable="blok" class="md:p-6 w-full">
    <EventsUpcoming v-if="futureEvents.length" :futureEvents="futureEvents" />
    <EventsPast v-if="pastEvents.length" :pastEvents="pastEvents" />
  </div>
</template>

<script lang="ts" setup>
import EventsTiles from "~/components/EventsTiles.vue";

const props = defineProps({
  blok: { type: Object, required: true }
});

const today = new Date();

const pastEvents = props.blok.events.filter(
  (d) => new Date(d.content.date) < today
);
const futureEvents = props.blok.events.filter(
  (d) => new Date(d.content.date) > today
);

const hover = ref(null);
</script>
