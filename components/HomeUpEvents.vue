<template>
  <div class="relative w-full flex flex-col-reverse md:flex md:flex-row font-josan">
    <!-- Left Col -->
    <div class="relative md:w-1/3 bg-black flex flex-col justify-center">
      <div class="text-white font-josefin mx-auto space-y-5 p-14 text-center">
        <div class="uppercase text-4xl font-semibold">
          Event Title
        </div>
        <div class="font-semibold">
          12th January 8pm-10pm
        </div>
        <div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, voluptas!
        </div>
        <div>
          <button class="bg-orange text-white font-semibold rounded-md px-5 py-2 uppercase">
            Book Now
          </button>
        </div>
        
      </div>
    </div>
    <!-- Right Col -->
    <img src="~/assets/events.png" class="h-[150px] md:h-auto md:w-2/3 object-cover object-center" alt="Library Lobby with a man sitting at the front desk"/>
  </div>
</template>