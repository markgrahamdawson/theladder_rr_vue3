<template>
  <div>
    <Hero :text="`Events`" />
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="flex flex-col">
        <StoryblokComponent
          v-if="story"
          :blok="story.content"
        ></StoryblokComponent>
      </div>
    </div>
    <!-- <ComingSoon /> -->
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
