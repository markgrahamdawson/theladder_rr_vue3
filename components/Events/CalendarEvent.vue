<template>
  <div class="flex flex-col h-full overflow-hidden">
    <!-- if the day being looped over is today -->
    <div 
      :class="[date.isToday() ? 'bg-orange' : '']" 
      class="text-center">{{ date.format('D') }}
    </div>
    <!-- if the day being looped over earlier than today -->
    <div v-if="date.isBefore(dayjs().subtract(1, 'day'))" class="bg-gray-200 h-full"></div>
    <!-- if the day being looped over has events -->
    <div v-if="dayData.length" class="grow">
      <EventsCalendarEventPrimary :eventObj=dayData[0] />
    </div>
     <!-- if the day being looped over has more than one events -->
    <div v-if="dayData.length>1" class="grow">
      <EventsCalendarEventSecondary :eventObj=dayData[1] />
    </div>
     <!-- if the day being looped over has more than two events -->
    <div v-if="dayData.length>2">
      <EventsCalendarEventExtra :eventObj=dayData[0] />
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