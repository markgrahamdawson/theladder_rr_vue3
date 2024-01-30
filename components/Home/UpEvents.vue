<template>
  <div
    class="relative w-full flex flex-col-reverse md:flex md:flex-row font-josan"
  >
    <!-- Left Col -->
    <div class="relative md:w-1/3 bg-black flex flex-col justify-center">
      <div class="text-white font-josefin mx-auto space-y-5 p-14 text-center">
        <div class="uppercase text-4xl font-semibold">{{ blok.events.content.performance }}</div>
        <div class="font-semibold">{{ getDate(blok.events.content.date) }}</div>
        <div>
          {{ blok.events.content.shortDescription }}
        </div>
        <div>
          <a :href=blok.events.content.eventbright>
            <button
              class="bg-orange text-white font-semibold rounded-md px-5 py-2 uppercase"
            >
              Event details
            </button>
          </a>
        </div>
      </div>
    </div>
    <!-- Right Col -->
    <nuxt-img 
        quality="80"
        format="webp" 
        :src=blok.events.content.thumbnail.filename
        alt="Still from movie"
        class="h-[150px] md:h-auto md:w-2/3 object-cover object-top max-h-[400px] md:m-auto"/>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  blok: Object,
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

</script>