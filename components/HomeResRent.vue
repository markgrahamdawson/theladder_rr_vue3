<template>
  <div
    class="md:flex space-y-2 md:space-y-0 md:space-x-2 font-josan text-white md:h-[550px]"
  >
    <div
      class="relative md:w-1/2 bg-[url('~/assets/residency.png')] bg-cover bg-no-repeat bg-center p-20 pb-0 space-y-1"
    >
      <div class="text-white text-3xl">Artists residency</div>
      <div class="w-3/4">
        The Ladder is a hub for creativity and offered residency space for
        performing arts organizations to get social-engaged projects off the
        ground. We can offer a month of space, support, and a welcoming host
        community as well as £5,000 for you project.
      </div>
      <NuxtLink :to="{ name: 'ourSpace' }" class="flex space-x-4">
        <div>Check it out</div>
        <IconsArrow class="" />
      </NuxtLink>
      <div class="flex justify-center">
        <IconsSnake
          class="md:hidden stroke-white h-[300px] w-[300px] fill-white transform -scale-x-100"
        />
      </div>
      <IconsSnake
        class="absolute bottom-0 right-16 max-[905px]:hidden md: fill-white h-48 w-48 transform -scale-x-100"
      />
    </div>
    <div
      class="relative md:w-1/2 bg-[url('~/assets/rent.png')] bg-cover bg-no-repeat bg-center p-20 pb-0 space-y-1"
    >
      <div class="text-white text-3xl">Rent a practise room</div>
      <div class="w-3/4">
        We have six studio spaces available to rent on our ground level, with
        some overlooking our beautiful garden and within spitting distance (not
        quite latte slurping distance) of Beats and Roots Cafe.
      </div>
      <NuxtLink :to="{ name: 'ourSpace' }" class="flex space-x-4"
        ><div>Check it out</div>
        <IconsArrow class=""
      /></NuxtLink>
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
