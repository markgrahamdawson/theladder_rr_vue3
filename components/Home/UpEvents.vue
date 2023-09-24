<template>
  <div
    class="relative w-full flex flex-col-reverse md:flex md:flex-row font-josan"
  >
    <!-- Left Col -->
    <div class="relative md:w-1/3 bg-black flex flex-col justify-center">
      <div class="text-white font-josefin mx-auto space-y-5 p-14 text-center">
        <div class="uppercase text-4xl font-semibold">Shallal Zine Launch</div>
        <div class="font-semibold">14th October</div>
        <div>
          Free screen printing workshop, community poster exhibition and zine launch. Plus cake! All welcome :)
        </div>
        <div>
          <a href="https://www.eventbrite.co.uk/e/shallal-zine-launch-tickets-722706744327?aff=oddtdtcreator">
            <button
              class="bg-orange text-white font-semibold rounded-md px-5 py-2 uppercase"
            >
              Event details
            </button>
          </a>
        </div>
      </div>
    </div>
    <!-- Right Col -->
    <nuxt-img 
        quality="80"
        format="webp" 
        src="https://a.storyblok.com/f/181301/3508x4961/e1673f5403/shallal-zine-launch-poster-jpeg.jpeg"
        alt="Still from movie"
        class="h-[150px] md:h-auto md:w-2/3 object-cover object-top max-h-[400px] md:m-auto"/>
  </div>
</template>
