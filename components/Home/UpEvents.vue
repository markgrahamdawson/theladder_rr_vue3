<template>
  <div
    class="relative w-full flex flex-col-reverse md:flex md:flex-row font-josan"
  >
    <!-- Left Col -->
    <div class="relative md:w-1/3 bg-black flex flex-col justify-center">
      <div class="text-white font-josefin mx-auto space-y-5 p-14 text-center">
        <div class="uppercase text-4xl font-semibold">Eyes Peeled</div>
        <div class="font-semibold">22nd September</div>
        <div>
          EYES PEELED are coming to The Ladder! The Darkroom in The Ladder presents
          A Girl Walks Home Alone at Night.
        </div>
        <div>
          <a href="https://www.eventbrite.co.uk/e/eyes-peeled-film-night-a-girl-walks-home-alone-at-night-tickets-717038169467#:~:text=Eyes%20Peeled%20is%20a%20monthly,Vivian%20Almas%20with%20a%20Q%26A.">
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
        src="/assets/images/aGirl.jpg"
        alt="Still from movie"
        class="h-[150px] md:h-auto md:w-2/3 object-cover object-center max-h-[400px] md:m-auto"/>
  </div>
</template>
