<template>
  <div class="bg-white md:grid md:grid-cols-2 items-center w-full">
    <!-- Left Col -->
    <div class="bg-offwhite text-center px-12 py-20">
      <div class="w-full m-auto">
        <div class="title font-josefin font-semibold text-4xl title pb-4">
          <h1>Welcome</h1>
        </div>

        <div class="text-left">
          <!-- <div class="font-josan text-l font-bold py-2 italic">
            We are building a creative space for Redruth and Cornwall.
          </div> -->
          <div class="font-josan text-l font-light py-2">
            The Ladder, is a new arts and culture hub in Redruth. The Ladder is housed in the former Passmore Edwards Library Building in Redruth which is undergoing extensive renovation to fully resource the space to provide rehearsal, performance, co-working and residency space for artists.
          </div>
          <div class="font-josan text-l font-light py-2">
          </div>
          <div class="font-josan text-l font-light pt-8 relative">
            <NuxtLink :to="{ name: 'about' }"> Read more about our mission</NuxtLink>
            <IconsBuilding
              class="hidden md:block absolute h-40 w-40 right-0 -bottom-[130px]"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- Right Col -->
    <div class="items-end justify-center">
      <nuxt-img 
        quality="50"
        format="webp" 
        src="https://a.storyblok.com/f/181301/1310x1378/c386cb7b4b/snow.png"
        alt="Josh and Felix talking by the Redruth library window"
        class="h-1/5 object-cover w-full max-h-[400px]"/>
    </div>
  </div>
</template>
