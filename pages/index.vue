<template>
  <div>
    <HomeHero/>
    <HomeAbout />
    <HomeNews :blok="story.content.body[0]"/>
    <HomeResRent />
    <HomeCafe />
    <!-- <HomeResidentsComponent :blok="story.content.body[1]"/> -->
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
