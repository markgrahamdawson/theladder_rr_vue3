<template>
  <div>
    <HomeHero/>
    <HomeAbout />
    <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
  </div>
</template>

<script lang="ts" setup>
const resolveRelations = ['HomeNewsComponent.news']

const story = await useAsyncStoryblok('home',
  {
    version: useRoute().query._storyblok ? "draft" : "published",
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
)
</script>

<style lang="css" scoped></style>
