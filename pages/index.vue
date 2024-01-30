<template>
  <div>
    <HomeHero />
    <HomeAbout class="pt-10 pb-10" />
    <HomeMailingList class="py-5" />
    <HomeNews :blok="story.content.body[0]" class="py-5 md:px-10" />
    <HomeResRent class="py-5" />
    <HomeCafe class="py-5" />
    <!-- <HomeResidentsComponent :blok="story.content.body[1]"/> -->
    <HomeUpEvents :blok="story.content.body[2]" class="py-5" />
    <HomeNursery class="py-5" />
  </div>
</template>

<script lang="ts" setup>
const resolveRelations = ["HomeNews.news", "HomeResidents.residents","HomeEvents.events"];

const story = await useAsyncStoryblok(
  "home",
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
