<template>
  <div
    class="bg-white md:grid md:grid-cols-2 items-center w-full flex flex-col-reverse md:flex-col"
  >
    <!-- Left Col -->
    <div
      class="bg-offwhite text-left px-20 lg:px-32 py-20 md:py-5 min-h-[80%] flex flex-col items-center"
    >
      <div class="w-full m-auto">
        <div class="title font-josefin font-semibold text-4xl title pb-4">
          <h1>Rent a Practice Room</h1>
        </div>

        <div class="font-josan text-l font-semibold py-2">
          We have six studio spaces available to rent on our ground level, with
          some overlooking our beautiful garden and within spitting distance
          (not quite latte slurping distance) of Beats and Roots Cafe.
          <!-- If you're interested in renting a studio, please fill in the enquiry below. -->
        </div>
        <!-- <button
          class="bg-orange text-white font-semibold rounded-md px-10 py-3 uppercase uppercase font-josan"
        >
          Fill out the form
        </button> -->
      </div>
    </div>
    <!-- Right Col -->
    <div
      class="relative w-screen md:w-full bg-[url('~/assets/rent.png')] bg-cover bg-no-repeat bg-center py-14 md:py-56"
    >
      <div class="flex justify-center">
        <IconsEyeInky
          class="md:hidden text-white h-[300px] w-[300px] fill-white"
        />
      </div>
      <IconsEyeInky
        class="absolute bottom-0 right-16 max-[905px]:hidden md: fill-white h-48 w-48 transform -scale-x-100"
      />
    </div>
  </div>
</template>
