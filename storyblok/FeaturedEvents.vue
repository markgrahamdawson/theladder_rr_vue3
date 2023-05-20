<template>
  <div v-editable="blok" class="md:p-6 w-full">
    <!-- <div
      v-for="(event, index) in futureEvents"
      :key="event._uid"
      class="md:p-8 font-josan mb-8"
    >
      event
    </div> -->
    <EventsUpcoming :futureEvents="futureEvents" />
    <EventsPast :pastEvents="pastEvents" />
  </div>
</template>

<script lang="ts" setup>
import EventsTiles from "~/components/EventsTiles.vue";

const props = defineProps({
  blok: Object,
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
