<template>
  <div v-editable="blok" class="w-full border space-y-10">
    <!-- {{ blok.news }} -->
    <div v-for="(news, index) in blok.news" :key="news._uid" class="font-josan">
      <ArticlePreview
        class=""
        :title="news.content.title"
        :date="formatDate(news.content.date)"
        :content="news.content.summary"
        :image="news.content.thumbnail.filename"
        :imagealt="news.content.thumbnail.alt"
        :topics="[
          { text: 'History', color: 'teal' },
          { text: 'Celebration', color: 'orange' },
        ]"
        :slug="news.slug"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import dayjs from "dayjs";

const props = defineProps({
  blok: Object,
});

function formatDate(datetimeStr) {
  var dateObj = dayjs(datetimeStr);
  var formattedDate = dateObj.format("D, MMMM YYYY");
  return formattedDate;
}
</script>
