<template>
  <div class="bg-white w-full">
    <div
      class="pb-5 px-4 font-bold text-3xl font-josan flex space-x-4 justif-center items-center"
    >
      <div>Recent News</div>
      <IconsArrow />
    </div>
    <div>
      <SlidingContentCard :content="slidingCardContent" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import SlidingContentCard, {
  SlidingContentCardContent,
} from "~/components/SlidingContentCardNews.vue";

const props = defineProps({
  blok: Object,
});

const slidingCardContent: SlidingContentCardContent[] = props.blok.news.map(
  (item: any) => {
    return {
      title: item.content.title,
      text: item.content.content,
      image: item.content.thumbnail?.filename + "/m/800x0",
      date: new Date(item.content.date).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      tag: item.content.tag,
      slug: item.slug,
    };
  }
);
</script>
