<template>
  <div>
    <!-- if the day being looped over earlier than today give it a gray bg-->
    <div class="flex h-full overflow-hidden"
      :class="[date.isBefore(dayjs().subtract(1, 'day')) ? 'bg-gray-200' : '']" >
      <!-- if the day being looped over is today -->
      <div 
        :class="[date.isToday() ? 'bg-orange' : 'bg-white ']" 
        class="text-center py-8 w-8">{{ date.format('D') }}
      </div>
      <!-- <div v-if="date.isBefore(dayjs().subtract(1, 'day'))" class="bg-gray-200 h-full w-full border"></div> -->
      <!-- if the day being looped over has events -->
      <div v-if="dayData.length" class="grow">
        <EventsCalendarWeeklyEventPrimary v-if="dayData.length==1" :eventObj=dayData[0] :fillCard="true"/>
        <EventsCalendarWeeklyEventPrimary v-else :eventObj=dayData[0] :fillCard="false"/>
      </div>
      <!-- if the day being looped over has more than one events -->
      <div v-if="dayData.length>1" class="grow">
        <EventsCalendarWeeklyEventPrimary :eventObj=dayData[1] />
      </div>
      <!-- if the day being looped over has more than two events -->
      <div v-if="dayData.length>2" class="grow">
        <EventsCalendarWeeklyEventPrimary :eventObj=dayData[2] />
      </div>
    </div>
    <!-- if the day being looped over has more than two events -->
    <div v-if="dayData.length>3">
      <EventsCalendarEventExtra :eventObj=dayData[2] />
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