<template>
  <div
    class="bg-white md:grid md:grid-cols-2 items-center w-full flex flex-col-reverse md:flex-col"
  >
    <!-- Left Col -->
    <div
      class="bg-offwhite text-left px-10 md:px-20 py-20 md:py-5 min-h-[80%] flex flex-col items-center"
    >
      <div class="w-full m-auto">
        <div class="title font-josefin font-semibold text-4xl title">
          <h1>Rent a Studio</h1>
        </div>

        <div class="font-josan text-l font-semibold mt-12">
          The Ladder will have spaces for studios, co-working, rehearsals, workshops and events, as well as a courtyard garden for markets and music. 
          <!-- If you're interested in renting a studio, please fill in the enquiry below. -->
        </div>
        <div class="font-josan text-l font-semibold mt-12">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScU8zPkiOxKZrBBYeH9CE10CPupk7LHmOLAcvK7FrL4PIpo5w/viewform?usp=send_form">
            Get in touch
          </a>
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
