<template>
  <div v-if="day">
    <div class="font-josan pb-8 text-2xl">Events on {{dayFormatted}}</div>
    <EventsUpcoming :futureEvents="queryDaysEvents" />
  </div>
  <div v-else>
    <div class="font-josan pb-4 text-2xl">Upcoming Events</div>
    <EventsUpcoming :futureEvents="futureEvents" />
    <EventsPast :pastEvents="pastEvents" />
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  events: Array,
});

const today = new Date();

const route = useRoute()
const day = route.query.day

const pastEvents = props.events.filter(
  (d) => new Date(d.content.date) < today
);
const futureEvents = props.events.filter(
  (d) => new Date(d.content.date) > today
);

const queryDaysEvents = props.events.filter(
  (d) => d.content.date.split(' ')[0] === day
)

const dayFormatted = computed(() => {
  const dayDate = new Date(day)
  const dayStringVal = dayDate.toLocaleString('en-us', {  weekday: 'long' });
  const dayNumberVal = dayDate.getDate()
  const monthVal = dayDate.toLocaleString('default', { month: 'long' })
  const yearVal = dayDate.getFullYear()
  return dayStringVal+" "+dayNumberVal+" "+monthVal+" "+yearVal
})
</script>