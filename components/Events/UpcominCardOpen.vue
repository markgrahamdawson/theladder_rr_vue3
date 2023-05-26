<template>
  <div class="w-full h-full md:flex">
    <div class="relative md:w-1/3 bg-black">
      <div
        class="absolute w-full h-full z-40 opacity-50"
        :class="`bg-${color}`"
      ></div>
      <img
        :src="futureEvent?.content.thumbnail?.filename + '/m/300x0'"
        :alt="futureEvent?.alt"
        class="w-full max-h-[300px] grayscale object-cover"
      />
    </div>
    <div class="md:w-2/3 bg-black p-8 font-josan uppercase text-white">
      <div class="space-y-3">
        <div class="text-xl">{{ futureEvent.content.performance }}</div>
        <div class="flex space-x-2 text-xs">
          <div class="bg-teal p-2">{{ getDate(futureEvent.content.date) }}</div>
          <div class="bg-teal p-2">{{ getTime(futureEvent.content.date) }}</div>
        </div>
        <div class="text-sm normal-case">{{ futureEvent.content.content }}</div>
        <button class="bg-orange rounded-full p-2 uppercase text-xs">
          book now
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  futureEvent: Object,
  color: String,
});

function getDate(datetimeStr) {
  // Create a new Date object from the datetime string
  var dateObj = new Date(datetimeStr);

  // Get the day, month, and year components from the date object
  var day = String(dateObj.getDate()).padStart(2, "0");
  var month = String(dateObj.getMonth() + 1).padStart(2, "0");
  var year = String(dateObj.getFullYear());

  // Reformat the date as 'DD/MM/YYYY'
  var formattedDate = `${day}/${month}/${year}`;

  return formattedDate;
}

function getTime(datetimeStr) {
  // Extract the time part from the datetime string
  var timePart = datetimeStr.split(" ")[1];

  // Split the time into hours and minutes
  var [hours, minutes] = timePart.split(":");

  // Ensure hours and minutes have two digits
  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");

  // Reformat the time as 'HH:MM'
  var formattedTime = `${hours}:${minutes}`;

  return formattedTime;
}
</script>
