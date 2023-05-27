<template>
  <div class="bg-white md:flex w-full lg:h-[600px]">
    <!-- Left Col -->
    <div
      class="relative md:w-1/2 bg-[url('~/assets/residency.png')] bg-cover bg-no-repeat bg-center p-20 pb-0 space-y-1"
    >
      <div class="flex justify-center">
        <IconsSnake
          class="md:hidden stroke-white h-[500px] w-[500px] fill-white transform -scale-x-100"
        />
      </div>
      <IconsSnake
        class="absolute bottom-0 right-3 max-[905px]:hidden md: fill-white h-[300px] w-[300px] transform -scale-x-100"
      />
    </div>
    <!-- Right Col -->
    <div class="bg-offwhite md:w-1/2 text-left px-40 md:px-20 py-20 font-josan">
      <h1 class="text-4xl font-semibold">Artist Residency</h1>
      <div class="font-semibold mt-12">
        The Ladder is a hub for creativity and offered residency space for
        performing arts organizations to get social-engaged projects off the
        ground. We can offer a month of space, support, and a welcoming host
        community as well as £5,000 for you project.
        <!-- Please fill out the enquiry from below if you or your company are interested and we will arrange on online meeting. -->
      </div>
      <!-- 
      <button
        class="bg-orange text-white font-semibold rounded-md px-10 py-3 uppercase uppercase font-josan"
      >
        Fill out the form
      </button> -->
    </div>
  </div>
</template>
