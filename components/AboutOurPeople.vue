<template>
  <div class="p-20">
    <div
      class="grid-cols-1 grid sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-3 md:grid-rows-2 gap-5"
    >
      <PersonCard
        class="h-[480px] sm:mb-3"
        name="Josh"
        jobTitle="Director"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/josh.png"
        borderColor="orange"
        :svgIcon="Eye"
      />
      <PersonCard
        class="h-[480px] sm:mt-10"
        name="Felix"
        jobTitle="Director"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/felix.png"
        borderColor="teal"
        :svgIcon="Snake"
      />
      <PersonCard
        class="h-[480px] md:mb-3"
        name="Andy"
        jobTitle="Job Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/andy.png"
        borderColor="black"
        :svgIcon="Eye"
      />
      <PersonCard
        class="h-[480px] sm:mb-3"
        name="Grace"
        jobTitle="Job Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/grace.png"
        borderColor="white"
        :svgIcon="Snake"
      />
      <PersonCard
        class="h-[480px] sm:-mt-10 md:mt-10"
        name="Leonora"
        jobTitle="Job Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/leonora.png"
        borderColor="orange"
        :svgIcon="Snake"
      />
      <PersonCard
        class="h-[480px] mb-10 md:mb-3"
        name="Liv"
        jobTitle="Job Title"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt lacinia."
        image="/assets/images/liv.png"
        borderColor="teal"
        :svgIcon="Eye"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Eye from "~/components/icons/EyeInky.vue";
import Snake from "~/components/icons/Snake.vue";
</script>
