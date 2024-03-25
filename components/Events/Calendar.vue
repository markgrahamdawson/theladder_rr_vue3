<template>
  <div class="font-josan">
    <div class="pb-6">
      <span class="text-3xl">{{ viewDate.format('MMMM YYYY') }}</span>
    </div>
    <div class="flex space-x-3">

        <button class="btn-primary"
                @click="reset()">Today</button>
        <button class="btn"
                @click="shift(-1, props.display)">Previous</button>
        <button class="btn"
                @click="shift(1, props.display)">Next</button>
    </div>
    <div class="grid grid-cols-7 gap-1">
        <div v-for="d in weekDays"
            class="text-center -rotate-12 py-8">
            <div>{{ d }}</div>
        </div>
    </div>
    <div class="grid grid-cols-7">
        <div v-for="p in daystoPrepend"></div>
        <div class="border border-slate-200 flex flex-col h-36"
            v-for="d in units">
            <EventsCalendarEvent 
              :date="d"
              :dayData="getDayData(d)"/>
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
  display: () => 'month',
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
  let startOfRange = viewDate.value.startOf(props.display).add(-1,'day');
  let endOfRange = viewDate.value.endOf(props.display).add(-1,'day');

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
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const eventsDateArray = computed(() => {
  if (props.modelValue) {
    const result = props.modelValue.map(a => a.next_occurrence_date ? dayjs(a.next_occurrence_date.iso) : null);
    return result;
  }
})

function getIndex(date: ISODate) {
  return eventsDateArray.value.indexOf(date)
}

function getDayData(day: ISODate) {
  let dataStore = <any>[]
  props.modelValue.forEach(function (eventObj: any) {
    if (eventObj.next_occurrence_date) {
      if (day.isSame(eventObj.next_occurrence_date.iso, 'day')) {
        dataStore.push(eventObj)
      }
    }
  });
  return dataStore
}
</script>