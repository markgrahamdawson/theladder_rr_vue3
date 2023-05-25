<template>
  <div>
    <Hero :text="`News`" />
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="min-h-screen p-16">
        <StoryblokComponent
          v-if="story"
          :blok="story.content"
        ></StoryblokComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const resolveRelations = ["FeaturedNews.news"];

const story = await useAsyncStoryblok(
  "news",
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
);
</script>

<style lang="css" scoped></style>
