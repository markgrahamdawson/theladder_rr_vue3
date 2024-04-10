<template>
  <div>
    <Hero :text="`Events`" />
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <div class="text-[30px] font-josan m-6">
          <div class="flex flex-grow">
            <div class="w-full">
              <div v-if="storyDay">Events on {{ dayFormatted }}</div>
              <div v-else>Upcoming Events</div>
            </div>
            <a href="/eventscal/month">
              <div class="text-[15px] text-center">
                <IconsCalendar class="h-10 w-10 mx-8"/>
                Calendar
              </div>
            </a>
          </div>
          <!-- {{storyDay}} -->
          <!-- ------------------------------- -->
          <!-- {{story}} -->
        </div>
        <!-- A date has been supplied but nothing is on that date -->
        <div
          v-if="!storyDay && day"
          class="m-6"
        >          
        No events on this date
        </div>
        <!-- A date has been supplied and events are on -->
        <StoryblokComponent
          v-else-if="storyDay"
          :blok="storyDay.content"
        ></StoryblokComponent>
        <!-- No date has been supplied -->
        <StoryblokComponent
          v-else-if="story"
          :blok="story.content"
        ></StoryblokComponent>
      </div>
    </div>
    <!-- <ComingSoon /> -->
  </div>
</template>

<script lang="ts" setup>
import { NuxtLink } from "#build/components";
import { ref } from "vue";

const day = useRoute().query.day

const dayFormatted = computed(() => {
  const dayDate = new Date(day)
  const dayStringVal = dayDate.toLocaleString('en-us', {  weekday: 'long' });
  const dayNumberVal = dayDate.getDate()
  const monthVal = dayDate.toLocaleString('default', { month: 'long' })
  const yearVal = dayDate.getFullYear()
  return dayStringVal+" "+dayNumberVal+" "+monthVal+" "+yearVal

})
const resolveRelations = ["FeaturedEvents.events"];

const story = await useAsyncStoryblok(
  "events",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
);

const storyDay = computed(() => {
  if (day) {
    const filteredEvents = story.value.content.body[0].events.filter(event => {
      return event.content.date.split(" ")[0] === day
    });
    console.log("filteredEvents")
    console.log(filteredEvents)
    if (filteredEvents.length) {
      console.log("DONIG THIS!")
      let storyCopy = {...story.value}
      storyCopy.content.body[0].events = filteredEvents
      return storyCopy
    } else {
      return null
    }
  } else {
    return null
  }  
})

interface postsInterface {
  date: string;
  text: string;
}

const posts: postsInterface[] = [
  {
    date: "17 Jan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...",
  },
  {
    date: "17 Jan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...",
  },
  {
    date: "17 Jan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...",
  },
  {
    date: "17 Jan",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid...",
  },
];

</script>

<style lang="css" scoped></style>
