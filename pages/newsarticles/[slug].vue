<template>
  <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
</template>

<script setup>
  import { ref } from 'vue';
  const route = useRoute()
  const story = await useStoryblok(`newsarticles/${route.params.slug}`, {
    version: useRoute().query._storyblok? "draft" : "published",
  })
</script>
