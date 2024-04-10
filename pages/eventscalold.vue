<template>
<div class="p-12">
  <EventsCalendarMonth
    :modelValue="data.data"
    :display="'day'"/>
</div>
</template>

<script setup lang="ts">

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL
const { data, pending, error, refresh } = await useFetch(apiBaseUrl, {
  onRequest({ request, options }) {
  },
  onRequestError({ request, options, error }) {
    // Handle the request errors
    console.log(error)
  },
  onResponse({ request, response, options }) {
    // Process the response data
    console.log(response)
  },
  onResponseError({ request, response, options }) {
    // Handle the response errors
    console.log(response)
  }
})
</script>