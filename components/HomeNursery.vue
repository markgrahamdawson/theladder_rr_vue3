<template>
  <div class="relative w-full md:flex font-josan">
    <!-- left -->
    <img src="~/assets/nursery.png" class="md:w-1/2 lg:-mr-[2.5px] object-cover object-center" alt="Children rubbing their hands in paint."  />
    <!-- right -->
    <div class="relative md:w-1/2 bg-teal md:my-4 flex flex-col justify-center">
      <div class="text-white text-center p-14 pt-20 space-y-10">
        <div class="text-3xl">
          Want to Check Out the Nursery?
        </div>
        <div>
          <button class="bg-orange text-white font-semibold rounded-md px-14 py-2">
            Let's Go!
          </button>
        </div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maiores sit. Quibusdam quam ab optio neque dolorum ullam omnis et, asperiores quia recusandae dignissimos officiis vero impedit minima eius quod, quisquam odit obcaecati harum atque cum vitae explicabo.
        </div>
      </div>
      <!-- top right svg -->
      <IconsRadio class="absolute fill-white h-32 w-32 xl:w-52 xl:h-52 -top-5 right-1 rotate-180"/>
      <!-- bottom two svg -->
      <IconsRadio class="absolute fill-white h-32 w-32 xl:w-52 xl:h-52 -bottom-5 -left-2 xl:-bottom-10"/>
      <IconsRadio class="absolute fill-white h-32 w-32 xl:w-52 xl:h-52 -bottom-5 -left-[115px] xl:-bottom-10 xl:-left-[200px] transform -scale-x-100"/>
      <!-- small screen only bottom of picture -->
      <IconsRadio class="md:hidden absolute fill-white h-32 w-32 -top-28 -right-0 -right-0 transform -scale-x-100"/>
    </div>
  </div>
</template>