<template>
    <div class="border border-black p-20">
      <div class="flex space-x-2">
        <PersonCard
          class="w-1/3 h-[480px] mb-3"
          name="Josh"
          jobTitle="Director"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl."
          image="assets/images/josh.png"
          borderColor="orange"
          svgicon="drops"
        />
        <PersonCard
          class="w-1/3 h-[480px] mt-10"
          name="Felix"
          jobTitle="Director"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl."
          image="assets/images/felix.png"
          borderColor="green"
          svgicon="snake"
        />
        <PersonCard
          class="w-1/3 h-[480px] mb-3"
          name="Andy"
          jobTitle="Job Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl."
          image="assets/images/andy.png"
          borderColor="black"
          svgicon="squiggles"
        />
        <!-- <PersonCard class="w-1/3 h-32 mb-3" /> -->
      </div>
      <div class="mt-10 flex space-x-2">
        <PersonCard
          class="w-1/3 h-[480px] mb-3"
          name="Grace"
          jobTitle="Job Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl."
          image="assets/images/grace.png"
          borderColor="white"
          svgicon="radio"
        />
        <PersonCard
          class="w-1/3 h-[480px] mt-10"
          name="Leonora"
          jobTitle="Job Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl."
          image="assets/images/andy.png"
          borderColor="orange"
          svgicon="eyelibrary"
        />
        <PersonCard
          class="w-1/3 h-[480px] mb-3"
          name="Liv"
          jobTitle="Job Title"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia, nisl nisl aliquet nisl, eu aliquet nisl nisl eu nisl."
          image="assets/images/liv.png"
          borderColor="teal"
          svgicon="eye"
        />
      </div>
    </div>
  </template>