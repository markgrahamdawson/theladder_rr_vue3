<template>
  <div v-editable="blok" class="md:p-6 w-full">
    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Whats on
      {{hover}}
    </div>
    <div class="md:p-6">
      <EventsTiles :events="futureEvents" />
    </div>

    <div class="font-amatic font-semibold text-4xl title ladder-underline-small mb-8">
      Previous events
    </div>
    <div class="md:p-6">
      <EventsTiles :events="pastEvents" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import EventsTiles from '~/components/EventsTiles.vue'

const props = defineProps({
  blok: Object,
})

const shortenText = (text,length) => {
  if (text.length > length) {return text.slice(0,length)+'...'}
  else {return text}
}

const today = new Date();

const pastEvents = props.blok.events.filter(d => new Date(d.content.date) < today);
const futureEvents = props.blok.events.filter(d => new Date(d.content.date) > today);

const hover=ref(null)

</script>