<template>
  <div v-editable="blok" class="pt-6 md:p-6 w-full">
      <div class="text-[30px] font-josan">
        <div class="flex flex-grow">
          <div class="w-full">
          </div>
            <button v-on:click="calendarViewClick()" 
              class="text-[15px] text-center"
              :disabled="calendarView"
              :class="[calendarView ? 'text-gray-500 stroke-gray-500' : ' text-black stroke-black']"
              >
              <IconsCalendar class="h-10 w-10 mx-8"/>
              Calendar
            </button>
            <button v-on:click="tileViewClick()" 
              class="text-[15px] text-center"
              :disabled="!calendarView"
              :class="[!calendarView ? 'text-gray-500 stroke-gray-500' : ' text-black stroke-black']"
              >
              <IconsTiles class="h-10 w-10 mx-8"/>
              Tiles
            </button>
        </div>
      </div>
    <!-- <div
      v-for="(event, index) in futureEvents"
      :key="event._uid"
      class="md:p-8 font-josan mb-8"
    >
      event
    </div> -->

    <EventsCalendar v-if="calendarView && screenWidth>610" 
      :modelValue="props.blok.events" 
      :startDate="startDate"/>
    <EventsCalendarWeekly v-else-if="calendarView && screenWidth<610" 
      :modelValue="props.blok.events" 
      :startDate="startDate"/>
    <EventsCards v-else-if="!calendarView" 
      :events="props.blok.events"/>
  </div>
</template>

<script lang="ts" setup>

const props = defineProps({
  blok: Object,
});

const calendarView = ref(true)
const startDate = new Date().toISOString().slice(0, -5)

const route = useRoute()
const router = useRouter()
const day = computed(() => route.query.day)

onMounted(() => {
  // calendarView.value = true
  updateScreenWidth();
  onScreenResize();
});

const screenWidth = ref(0);
const onScreenResize = () => {
  window.addEventListener("resize", () => {
    updateScreenWidth();
  });
};

const updateScreenWidth = () => {
  screenWidth.value = window.innerWidth;
};

watch(day, (newValue, oldValue) => {
  console.log(newValue.value)
  if(newValue){
    calendarView.value=false
  }
}, { deep: true })

function calendarViewClick() {
  calendarView.value = true
  router.replace({ query: [] })
}

function tileViewClick() {
  calendarView.value = false
  router.replace({ query: [] })
}

</script>
