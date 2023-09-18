<template>
  <div class="relative w-full md:flex font-josan">
    <!-- left -->
    <nuxt-img 
        quality="80"
        format="webp" 
        src="/assets/images/nursery_lowres.png"
        alt="Children rubbing their hands in paint."
        class="max-h-[400px] w-full md:w-1/2 lg:-mr-[2.5px] object-cover object-center"/>
    <!-- right -->
    <div class="relative md:w-1/2 bg-teal md:my-4 flex flex-col justify-center">
      <div class="text-white text-center p-14 pt-20 space-y-10">
        <div class="text-3xl">Want to Check Out the Nursery?</div>
        <div>
          <a
            href="https://www.raisedin.org.uk/raised-in-cornwall-at-the-ladder"
          >
            <button
              class="bg-orange text-white font-semibold rounded-md px-14 py-2"
            >
              Let's Go!
            </button>
          </a>
        </div>

        <div>
          Raised in are all about supporting community hubs whilst at the same
          time, delivering the highest quality childcare.
        </div>
      </div>
      <!-- top right svg -->
      <IconsRadio
        class="absolute fill-white h-32 w-32 xl:w-52 xl:h-52 -top-5 right-1 rotate-180"
      />
      <!-- bottom two svg -->
      <IconsRadio
        class="absolute fill-white h-32 w-32 xl:w-52 xl:h-52 -bottom-5 -left-2 xl:-bottom-10"
      />
      <IconsRadio
        class="absolute fill-white h-32 w-32 xl:w-52 xl:h-52 -bottom-5 -left-[115px] xl:-bottom-10 xl:-left-[200px] transform -scale-x-100"
      />
      <!-- small screen only bottom of picture -->
      <IconsRadio
        class="md:hidden absolute fill-white h-32 w-32 -top-28 -right-0 -right-0 transform -scale-x-100"
      />
    </div>
  </div>
</template>
