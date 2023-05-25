<template>
  <div class="w-full h-full">
    <div class="relative h-2/3 w-full bg-black">
      <img
        :src="pastEvent?.content.thumbnail?.filename + '/m/300x0'"
        :alt="pastEvent?.alt"
        class="w-full max-h-[200px] min-h-[200px] grayscale object-cover"
      />
    </div>
    <div class="h-1/3 w-full bg-black p-8 font-josan uppercase text-white">
      <div class="space-y-3">
        <div class="text-xl">{{ pastEvent.content.performance }}</div>
        <div class="flex space-x-2 text-xs">
          <div class="bg-teal p-2">{{ getDate(pastEvent.content.date) }}</div>
          <div class="bg-teal p-2">{{ getTime(pastEvent.content.date) }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  pastEvent: Object,
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
