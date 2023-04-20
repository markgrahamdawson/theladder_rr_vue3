<template>
  <div class="md:flex space-y-2 md:space-y-0 md:space-x-2 font-josan text-white md:h-[500px]">
    <div class="relative md:w-1/2 bg-[url('~/assets/residency.png')] bg-auto bg-no-repeat bg-center p-20 pb-0 space-y-1">
      <div class="text-white text-3xl">
        Artists residency
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem veritatis dolorem adipisci, numquam facere! Itaque dolorem neque earum ut, sint assumenda, nihil corporis, temporibus sed laborum repellendus dolorum rerum.
      </div>
      <div class="flex space-x-4"><div>Check it out</div><IconsArrow class=""/></div>
      <div class="flex justify-center">
        <IconsSnake class="md:hidden stroke-white h-[300px] w-[300px] fill-white transform -scale-x-100"/>
      </div>
      <IconsSnake class="absolute bottom-0 right-16  max-[905px]:hidden md: fill-white h-48 w-48 transform -scale-x-100"/>
    </div>
    <div class="relative md:w-1/2 bg-[url('~/assets/rent.png')] bg-auto bg-no-repeat bg-center p-20 pb-0 space-y-1">
      <div class="text-white text-3xl">
        Rent a practise room
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias rem veritatis dolorem adipisci, numquam facere! Itaque dolorem neque earum ut, sint assumenda, nihil corporis, temporibus sed laborum repellendus dolorum rerum.
      </div>
      <div class="flex space-x-4"><div>Check it out</div><IconsArrow class=""/></div>
      <div class="flex justify-center">
        <IconsEyeInky class=" md:hidden text-white h-[300px] w-[300px] fill-white"/>
      </div>
      <IconsEyeInky class="absolute bottom-0 right-16 max-[905px]:hidden md: fill-white h-48 w-48 transform -scale-x-100"/>
    </div>
  </div>
</template>