<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="min-h-screen md:p-16 space-y-4">
      <!-- <EventsUpcoming /> -->
      <StoryblokComponent
        v-if="story"
        :blok="story.content"
      ></StoryblokComponent>
      <!-- <EventsPast /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

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
</script>
