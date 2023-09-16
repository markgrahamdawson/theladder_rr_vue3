<template>
  <div class="py-10 px-10 md:py-28 md:flex items-center">
    <div class="font-josan font-bold md:w-1/2 md:pr-5">
      <div class="text-2xl pb-10">Who Built It?</div>
      <div>
        Philanthropy no longer possesses the inspirational qualities which John Passmore Edwards embodied 130 years ago. Born on the 24th of March 1823, in Blackwater, near Redruth, Passmore’s work was charged with genuine aspirations for those less fortunate than himself. He had an ambition to be useful. 
      </div>
      <div class="pt-8">
        <NuxtLink
        :to="{ name: 'newsarticles-slug', params: { slug: 'passmoreedwards' } }"
        class="flex space-x-3"
        >
        Read more
        </NuxtLink>
      </div>

    </div>
    <div class="md:w-1/2">
      <img
        src="~/assets/jpe.png"
        alt="A picture of the library building in the snow"
        class="object-fill grayscale pt-10 md:pt-0"
      />
    </div>
  </div>
</template>
