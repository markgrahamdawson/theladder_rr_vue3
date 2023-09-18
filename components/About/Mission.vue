<template>
  <div class="bg-white md:flex w-full lg:h-[600px]">
    <!-- Left Col -->
    <div
      class="md:text-left bg-offwhite text-center px-12 py-20 md:w-1/3 md:my-10 md:text-base"
    >
      <h1 class="title font-josefin font-semibold text-4xl title pb-4">
        Mission
      </h1>
      <div class="font-semibold font-josefin">
        We are building a creative space for Redruth and Cornwall. This will
        include space for creatives to work including studios and co-working but
        also for community events and activities including dance classes,
        children and young people activities, fitness and music. Every two years
        all our residents will come together as part of a festival.
      </div>
    </div>
    <!-- Right Col -->
    <!-- <img
      src="~/assets/libraryOutside.png"
      alt="Josh and Felix talking by the Redruth library window"
      class="object-cover md:w-2/3"
    /> -->
    <nuxt-img 
        quality="80"
        format="webp"
        src="/assets/images/libraryOutside.png"
        alt="A picture of the library taken from outside"
        class="object-cover md:w-2/3"/>
    <IconsDrops
      class="fill-white absolute h-40 w-40 sm:h-60 sm:w-60 right-[40px] -bottom-[150px] sm:-bottom-[300px] md:-bottom-[130px] lg:bottom-[10px]"
    />
    <img />
  </div>
</template>
