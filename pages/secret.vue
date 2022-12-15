<template>
    <div>Secret</div>
    <pre>{{ firebaseUser }}</pre>
</template>

<script lang="ts" setup>
definePageMeta({
    middleware: ["auth"]
})

const firebaseUser = useFirebaseUser()
</script>