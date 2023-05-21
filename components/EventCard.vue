<template>

    <div class="bg-black w-full h-full flex flex-row relative font-josefin text-white font-semibold">
        <!-- top part -->
        <div class="absolute bg-orange h-6 w-full"></div>

        <div class="absolute top-6 uppercase flex space-x-3">
            <div v-if="onsite" class="bg-orange h-6 px-10 rounded-b-xl">ON SITE</div>
            <div v-if="free" class="bg-orange h-6 px-10 rounded-b-xl">FREE</div>

        </div>


        <!-- Left Side (image) -->
        <!-- <div class="w-2/5 h-full bg-cover bg-center" :style="`background-image: url(${useAsset(image)});`" title="test"></div> -->
        <div class="w-2/5">
            <img class="object-cover h-full" :src="useAsset(image)">
        </div>

        <!-- Right Side (Content) -->
        <div class="w-3/5 h-full py-20 px-16 space-y-16">
            <div class="space-y-4">
                <div class="text-4xl">{{title}}</div>

                <div class="flex space-x-2">
                    <div class="bg-teal w-fit px-16 py-2 text-2xl">{{ date }}</div>
                    <div class="bg-teal w-fit px-14 py-2 text-2xl">{{ time }}</div>
                </div>
            </div>


            <div class=" font-normal">{{ description }}</div>

            <button class="bg-orange text-white font-semibold rounded-md px-8 py-3 uppercase">
            BOOK NOW
            </button>

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
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    onsite: {
        type: Boolean,
        required: true,
    },

    free: {
        type: Boolean,
        required: true,
    }
    });
</script>
