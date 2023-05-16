<template>
  <div class="flex flex-col-reverse md:flex-row">
    <!-- left box -->
    <div class="relative md:w-1/2 m-auto flex-col">
      <img
        src="~/assets/ourStory.png"
        alt="Leonora and Live standing in front of The Ladder Logo"
      />

      <IconsSquigles
        class="absolute fill-teal rotate-90 h-40 w-40 xl:h-60 xl:w-60 -bottom-[20px] -left-[10px] sm:-bottom-[20px] sm:left-[10px]"
      />
      <IconsSquigles2
        class="absolute fill-teal h-40 w-40 xl:h-60 xl:w-60 rotate-[270deg] translate-x-[-250px] z-50 -top-[60px] -right-[250px] sm:-top-[60px] sm:-right-[250px] xl:-top-[90px] xl:-right-[250px]"
      />
    </div>
    <!-- right box -->
    <div
      class="md:w-1/2 md:text-left m-auto bg-offwhite font-josefin md:my-4 px-12 py-20 space-y-4 relative sm:w-full text-center"
    >
      <h1 class="font-semibold text-3xl">Our Story</h1>
      <div class="font-semibold">
        In 2021, Josh and Felix were taking part in a residency at Bill's Attack
        at Krowji in Redruth. Having worked together for 12 years in London
        building venues and theatre productions, something felt right about
        being in Redruth and the creative electricity around the town. Looking
        around the library which had recently been vacated, there seemed to be a
        lot of potential in what was possible for the space and town. Two years
        later and with funding from Historic England, The Department for
        Leveling Up and Cornwall Council's support they have saved the space for
        the people of Redruth for the next 127 years in the spirit of its
        founder Passmore Edwards.
      </div>
    </div>
  </div>
</template>
