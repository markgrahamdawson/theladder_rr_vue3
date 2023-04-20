<template>
  <div class=" bg-white md:grid md:grid-cols-2 items-center w-full">
    <!-- Left Col -->
    <div class="bg-offwhite text-center px-12 py-20">
      <div class="w-full m-auto">
        <div class="title font-josefin font-semibold text-4xl title pb-4">
          <h1>Welcome to the ladder</h1> 
        </div>

        <div class="text-left">
        <div class="font-josan text-l font-bold py-2 italic">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </div>
        <div class="font-josan text-l font-light py-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. 
        </div>
        <div class="font-josan text-l font-light pt-8 relative">
          <NuxtLink :to="{ name: 'news' }">
            Read more
          </NuxtLink>
          <IconsBuilding class="hidden md:block absolute h-40 w-40 right-0 -bottom-[130px]"/>
        </div>
      </div>
    </div>
  </div>
  <!-- Right Col -->
    <div class="items-end justify-center">
      <img src="~/assets/discussing.png" alt="Josh and Felix talking by the Redruth library window" class="h-1/5 object-cover" />
    </div>
  </div>

</template>
