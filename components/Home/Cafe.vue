<template>
  <div class="flex flex-col-reverse md:flex-row">
    <!-- left box -->
    <div class="md:w-1/2 my-auto">
      <img class="w-full object-cover max-h-[400px]" src="~/assets/Cafe_lowres.png" alt="Beets and Roots Cafe" />
    </div>
    <!-- right box -->
    <div
      class="md:w-1/2 m-auto bg-offwhite font-josefin md:my-4 px-12 py-20 space-y-4 relative"
    >
      <div class="font-semibold text-4xl">
        <h1>Beats and Roots Cafe</h1>
      </div>
      <div>
        <div class="font-semibold text-xl pb-2 uppercase">Now open</div>
        <div>
          Situated in our courtyard garden Beats and Roots imaginative and delicious menu offers both vegetarian and vegan options.
        </div>
      </div>
      <div>
        <div class="font-semibold text-xl pb-2 uppercase">Opening times</div>
        <div>Monday: Closed</div>
        <div>Tuesday-Thursday: 9-3</div>
        <div>Friday-Saturday: 11-7</div>
      </div>
      <IconsSquigles
        class="absolute h-44 w-44 lg:h-64 lg:w-64 right-0 -bottom-10"
      />
    </div>
  </div>
</template>
