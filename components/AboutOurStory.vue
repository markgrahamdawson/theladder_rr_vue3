<template>
  <div class="flex flex-col-reverse md:flex-row">
    <!-- left box -->
    <div class="md:w-1/2 m-auto flex-col">
      <img
        src="~/assets/ourStory.png"
        alt="Leonora and Live standing in front of The Ladder Logo"
      />

      <IconsSquigles
        class="absolute fill-teal w-1/6 rotate-90 left-[-30px] bottom-0 md:block sm:hidden"
      />
      <IconsSquigles
        class="absolute fill-teal h-44 w-44 lg:h-64 lg:w-64 rotate-[270deg] left-1/2 translate-x-[-250px] top-[60px] md:block sm:hidden"
      />
    </div>
    <!-- right box -->
    <div
      class="md:w-1/2 md:text-left m-auto bg-offwhite font-josefin md:my-4 px-12 py-20 space-y-4 relative sm:w-full sm:text-center"
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
