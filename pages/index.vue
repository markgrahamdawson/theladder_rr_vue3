<template>
  <StoryblokComponent v-if="story" :blok="story.content"></StoryblokComponent>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
  <div class="min-h-screen sm:p-16 flex ">
    <div class="px-10 pb-10">
      <div class="h-2/3 w-full flex items-center justify-center hidden md:block">
      </div>
      <div class=" w-full pt-8 md:hidden">
        <div class="w-full flex items-center justify-center">
          <img src="~/assets/passmoreedwardslibrary.jpeg" alt="The Ladder Logo" class="h-1/3 object-cover"  />
        </div>
      </div>
    </div>
  </div>
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
