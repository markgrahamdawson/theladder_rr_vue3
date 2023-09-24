<template>
  <div class="px-10 sm:p-20">
    <div class="font-josefin font-semibold text-4xl pb-8">Our People</div>
    <div
      class="grid-cols-1 grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5"
    >
      <PersonCard
        class="sm:mb-3"
        name="Josh"
        jobTitle="Director"
        description="Josh is one of the founders of the Ladder having previously run theatre company RIFT and established London arts venue STYX which closed in 2020. Josh is originally from Penzance and loves surfing and neolithic villages. "
        image="/assets/images/josh.png"
        borderColor="orange"
        :svgIcon="Eye"
      />
      <PersonCard
        class="sm:mt-10"
        name="Felix"
        jobTitle="Director"
        description="Felix is one of the founders of the Ladder. Felix and Josh have worked together for 12 years running their theatre company RIFT and establishing their venue STYX which closed in 2020. Felix also works part-time for the Mayor of London's Culture Team and bakes a mean sourdough and brews slightly undrinkable beer."
        image="/assets/images/felix.png"
        borderColor="teal"
        :svgIcon="Snake"
      />
      <PersonCard
        class="md:mb-3"
        name="Andy"
        jobTitle="Job Title"
        description="Andy has been working with Felix and Josh since 2011. He has performed in several pieces from RIFT including as a sinister caretaker in The Trial. His skills have come in useful on many occasions building sets and installations."
        image="/assets/images/andy.png"
        borderColor="black"
        :svgIcon="Squigles"
      />
      <PersonCard
        class="sm:mb-3"
        name="Grace"
        jobTitle="Job Title"
        description="Grace is our Community and Engagement coordinator supporting the many uses of the rooms within The Ladder’s granite walls. When Grace isn’t working for us you can find her in our resident creative writing hub, The Writers’ Block."
        image="/assets/images/grace.png"
        borderColor="white"
        :svgIcon="Radio"
      />
      <!-- <PersonCard
        class="sm:-mt-10 md:mt-10"
        name="Leonora"
        jobTitle="Job Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/leonora.png"
        borderColor="orange"
        :svgIcon="Building"
      /> -->
      <!-- <PersonCard
        class="mb-10 md:mb-3"
        name="Liv"
        jobTitle="Job Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/liv.png"
        borderColor="teal"
        :svgIcon="Eye"
      /> -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import Eye from "~/components/icons/Eye.vue";
import Snake from "~/components/icons/Snake.vue";
import Radio from "~/components/icons/Radio.vue";
import Squigles from "~/components/icons/Squigles.vue";
import Building from "~/components/icons/Building.vue";
</script>
