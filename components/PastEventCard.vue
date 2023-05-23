<template>

    <div class="bg-black w-full h-full relative font-josefin text-white font-semibold ">
        <img class="object-cover h-full" :src="useAsset(image)">

        <div class="space-y-4 px-20 py-14">
            <div class="text-4xl">{{title}}</div>

            <div class="flex space-x-2 justify-center lg:justify-start">
                <div class="bg-teal w-fit px-16 py-2 text-2xl">{{ date }}</div>
                <div class="bg-teal w-fit px-14 py-2 text-2xl">{{ time }}</div>
            </div>
        </div>
    </div>

</template>

<script setup lang="ts">

function useAsset(path: string): string {
const assets = import.meta.glob('~/assets/**/*', {
eager: true,
import: 'default',
})
// @ts-expect-error: wrong type info
return assets['/assets/' + path]
}

    const props = defineProps({
    title: {
        type: String,
        required: true,
    },    
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    });
</script>