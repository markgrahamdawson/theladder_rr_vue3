<template>
  <div class="flex flex-col h-full">
    <!-- if the day being looped over is today -->
    <div 
      :class="[date.isToday() ? 'bg-orange' : '']" 
      class="text-center">{{ date.format('D') }}
    </div>
    <!-- if the day being looped over earlier than today -->
    <div v-if="date.isBefore(dayjs().subtract(1, 'day'))" class="bg-gray-200 h-full"></div>
    <div v-if="dayData.length" class="grow">
      <!-- {{ dayData }} -->
      <EventsCalendarEventPrimary :eventObj=dayData[0] />
    </div>
    <div v-if="dayData.length>1" class="grow">
      <EventsCalendarEventSecondary :eventObj=dayData[1] />
    </div>
    <div v-if="dayData.length>2">
      <EventsCalendarEventExtra class="h-4 text-center bg-teal text-xs border" />
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ISODate } from '$/common/types/Notebook';
import dayjs from 'dayjs';
import isToday from 'dayjs/plugin/isToday'
dayjs.extend(isToday);

type Props = {
    date?: ISODate
    dayData?: any
  }
  const props = withDefaults(defineProps<Props>(), {
    date: () => null,
    dayData: () => null,
  });
  </script>