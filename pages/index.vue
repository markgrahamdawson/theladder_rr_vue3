<template>
  <div>
    <HomeHero/>
    <HomeAbout class="pt-10 pb-10" />
    <HomeNews :blok="story.content.body[0]" class="py-5 md:px-10"/>
    <HomeResRent class="py-5" />
    <HomeCafe class="py-5" />
    <!-- <HomeResidentsComponent :blok="story.content.body[1]"/> -->
    <HomeMailingList class="py-5" />
    <HomeUpEvents class="py-5" />
    <HomeNursery class="py-5" />
  </div>
</template>

<script lang="ts" setup>

const resolveRelations = ['HomeNews.news', 'HomeResidents.residents']

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
