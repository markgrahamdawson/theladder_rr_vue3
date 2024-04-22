<template>
  <div class="font-josan">
    <div class="pb-6">
      <span class="text-3xl">{{ viewDate.format('MMMM YYYY') }}</span>
    </div>
    <div class="flex space-x-3 pb-8">

        <button class="btn-primary"
                @click="reset()">Today</button>
        <button class="btn"
                @click="shift(-1, props.display)">Previous</button>
        <button class="btn"
                @click="shift(1, props.display)">Next</button>
    </div>
    <div class="flex">
      <div class="grid grid-rows-7 gap-1">
          <div v-for="d in weekDays"
              class="text-center py-8 pr-2">
              <div>{{ d }}</div>
          </div>
      </div>
      <div class="grid grid-rows-7 w-full">
          <div v-for="p in daystoPrepend"></div>
          <div class="flex flex-col w-full h-32"
              v-for="d in units">
              <EventsCalendarWeeklyEvent 
              class="h-full"
                :date="d"
                :dayData="getDayData(d)"/>
          </div>
      </div>
    </div>
  </div>
</template>
  
<script setup lang='ts'>
  // https://dev.to/mmusket/calendar-view-with-vue3-and-tailwind-3mei
  import { ISODate } from '$/common/types/Notebook';
  import { computed, ref } from 'vue';
  import dayjs from 'dayjs';
  import isToday from 'dayjs/plugin/isToday'
  dayjs.extend(isToday);
  type Props = {
    modelValue?: any
    startDate?: ISODate
    display?: 'month' | 'year' | 'week' | 'day'
  }
  const props = withDefaults(defineProps<Props>(), {
    modelValue: () => null,
    display: () => 'week',
    startDate: () => '2022-12-05'
  });
  const emits = defineEmits(['update:modelValue']);
  const viewDate = ref(dayjs(props.startDate));
  const daystoPrepend = computed(() => {
    if (props.display=='month') {
      const startOfMonth = viewDate.value.startOf("month");
      const startOfFirstWeek = startOfMonth.startOf("week");
      const daysToFirstDay = startOfMonth.diff(startOfFirstWeek, "day");
      return Array.from(new Array(daysToFirstDay).keys());
    } else {
      return 0
    }
  })
  const units = computed(() => {
    let ranges = [];
    let startOfRange = viewDate.value.startOf(props.display);
    let endOfRange = viewDate.value.endOf(props.display);
    let currentDate = startOfRange;
    while (currentDate.isBefore(endOfRange) || currentDate.isSame(endOfRange)) {
        currentDate = currentDate.add(1, 'day');
        ranges.push(currentDate);
    }
    return ranges;
  })
  const shift = function (amount: number, display: 'month' | 'year' | 'week' | 'day') {
    viewDate.value = viewDate.value.add(amount, display);
  }
  const reset = function () {
    viewDate.value = dayjs();
  }
  const weekDays = [
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
    'Sun',
  ]
  const eventsDateArray = computed(() => {
    if (props.modelValue) {
      const result = props.modelValue.map(a => a.content.date ? dayjs(a.content.date) : null);
      return result;
    }
  })
  function getIndex(date: ISODate) {
    return eventsDateArray.value.indexOf(date)
  }
  function getDayData(day: ISODate) {
    let dataStore = <any>[]
    props.modelValue.forEach(function (eventObj: any) {
      if (eventObj.content.date) {
        if (day.isSame(eventObj.content.date, 'day')) {
          dataStore.push(eventObj)
        }
      }
    });
    console.log(dataStore)
    return dataStore
  }
</script>