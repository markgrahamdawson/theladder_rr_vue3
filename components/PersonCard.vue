<template>

    <!-- <div :class="classText + ' bg-' + borderColor + ' p-2'"> -->
        <div :class="'border-8 border-solid border-' + borderColor + ' h-full w-full flex items-end justify-center bg-[url(~/' + image + ')] bg-cover bg-no-repeat bg-center relative'">
            <div class=" h-1/2 bg-gradient-to-t from-[black_80%] to-transparent absolute bottom-0 z-20 opacity-[.85] pt-[20%] pb-4">
                
                <div class="top-[20%] text-white font-josefin items-b px-5 flex flex-col justify-evenly h-full">
                    <div class="font-semibold text-3xl uppercase">{{ name }}</div>
                    <div class="text-gray-400 text-2xl italic font-semibold">{{ jobTitle }}</div>
                    <div>{{ description }}</div>
                </div>

                <!-- Not sure how to pull a vue component by name from a script -->
                <IconsEyeInky class="absolute top-[20%] right-3 fill-white h-1/4 w-1/4 transform"/>
            </div>
        </div>
    <!-- </div> -->

</template>

<script setup lang="ts">

const props = defineProps<{
    name: string,
    jobTitle: string,
    description: string,
    image: string,
    borderColor: string,
    svgicon: string
}>()
</script>