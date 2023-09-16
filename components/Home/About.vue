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
            At the beginning of the pandemic Redruth Library, an imposing granite building in the centre of the town, closed its doors for the last time. Hoardings went up. Kids threw stones at where they were once read bedtime stories. The roof caved into the space where Cornwall’s historic archives were stored, plaster and mould splattered over a bust of Cornwall’s most famous philanthropist Passmore Edwards. 
          </div>
          <div class="font-josan text-l font-light py-2">
            We’re now renovating this historic building into The Ladder: Redruth’s Future Creative Hub. This will include space for creatives to work including studios and co-working but also for community events and activities including dance classes, children and young people activities, fitness and music.
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
      <img
        src="~/assets/discussing_lowres.png"
        alt="Josh and Felix talking by the Redruth library window"
        class="h-1/5 object-cover w-full max-h-[400px]"
      />
    </div>
  </div>
</template>
