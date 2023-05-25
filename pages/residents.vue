<template>
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="min-h-screen md:p-16">
      <StoryblokComponent
        v-if="story"
        :blok="story.content"
      ></StoryblokComponent>
      <!-- <pre>{{story}}</pre> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const resolveRelations = ["FeaturedResidents.residents"];

const story = await useAsyncStoryblok(
  "residents",
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
