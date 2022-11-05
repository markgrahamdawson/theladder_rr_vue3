<template>
  <div class="news">
    <div class="container">
      <div>
        {{blok.title || "New Title"}}
      </div>
      <div>
        <img :src="blok.thumbnail?.filename || 'https://picsum.photos/300/175'" :alt="blok.image?.alt" />
      </div>
      <div>
        {{blok.content || "Lorem Ipsum"}}
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  blok: Object,
})
</script>
