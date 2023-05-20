<template>
  <div>
    <!-- {{ futureEvents }} -->
    <div class="font-josan pb-4 text-xl">Upcoming Events</div>
    <div
      class="h-[500px] w-full border border-red-500 grid grid-cols-2 grid-rows-12 gap-2 md:gap-4 grid-flow-row-dense"
    >
      <Transition>
        <div
          v-if="show"
          class="border border-black bg-gray-500"
          :class="formatCellOne"
          @click="selected(1)"
        >
          {{ futureEvents[0].name }}
          {{ futureEvents[0].content.company }}
        </div>
      </Transition>
      <Transition>
        <div
          v-if="show"
          class="border border-black bg-red-500"
          :class="formatCellTwo"
          @click="selected(2)"
        >
          {{ futureEvents[1].name }}
          {{ futureEvents[1].content.company }}
        </div>
      </Transition>
      <Transition>
        <div
          v-if="show"
          class="border border-black bg-blue-500"
          :class="formatCellThree"
          @click="selected(3)"
        >
          {{ futureEvents[2].name }}
          {{ futureEvents[2].content.company }}
        </div>
      </Transition>
      <Transition>
        <div
          v-if="show"
          class="border border-black bg-yellow-500"
          :class="formatCellFour"
          @click="selected(4)"
        >
          <!-- {{ futureEvents[3] }} -->
        </div>
      </Transition>
      <Transition>
        <div
          v-if="show"
          class="border border-black bg-green-500"
          :class="formatCellFive"
          @click="selected(5)"
        >
          05
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  futureEvents: Array<Object>,
});

const show = ref(true);

const currentSelected = ref(0);
const index = ref(100);

const formatCellOne = ref("col-span-1 row-span-5");
const formatCellTwo = ref("col-span-1 row-span-3");
const formatCellThree = ref("col-span-1 row-span-3");
const formatCellFour = ref("col-span-1 row-span-5");
const formatCellFive = ref("col-span-1 row-span-3");

const selected = async (id: number) => {
  show.value = false;

  if (id == currentSelected.value) {
    console.log("same");
    formatCellOne.value = "col-span-1 row-span-5";
    formatCellTwo.value = "col-span-1 row-span-3";
    formatCellThree.value = "col-span-1 row-span-3";
    formatCellFour.value = "col-span-1 row-span-5";
    formatCellFive.value = "col-span-1 row-span-3";
  }
  console.log(id, currentSelected.value);
  currentSelected.value = id;
  index.value = id;
  if (id === 1) {
    formatCellOne.value = "col-span-2 row-span-6";
    formatCellTwo.value = "col-span-1 row-span-6";
    formatCellThree.value = "col-span-1 row-span-3";
    formatCellFour.value = "col-span-1 row-span-3";
    formatCellFive.value = "col-span-1 row-span-3";
  } else if (id === 2) {
    formatCellOne.value = "col-span-1 row-span-3";
    formatCellTwo.value = "col-span-2 row-span-6";
    formatCellThree.value = "col-span-1 row-span-3";
    formatCellFour.value = "col-span-1 row-span-3";
    formatCellFive.value = "col-span-1 row-span-3";
  } else if (id === 3) {
    formatCellOne.value = "col-span-1 row-span-3";
    formatCellTwo.value = "col-span-1 row-span-6";
    formatCellThree.value = "col-span-2 row-span-6";
    formatCellFour.value = "col-span-1 row-span-3";
    formatCellFive.value = "col-span-1 row-span-3";
  } else if (id === 4) {
    formatCellOne.value = "col-span-1 row-span-3";
    formatCellTwo.value = "col-span-1 row-span-3";
    formatCellThree.value = "col-span-1 row-span-3";
    formatCellFour.value = "col-span-2 row-span-6";
    formatCellFive.value = "col-span-1 row-span-3";
  } else if (id === 5) {
    formatCellOne.value = "col-span-1 row-span-3";
    formatCellTwo.value = "col-span-1 row-span-3";
    formatCellThree.value = "col-span-1 row-span-3";
    formatCellFour.value = "col-span-1 row-span-3";
    formatCellFive.value = "col-span-2 row-span-6";
  }
  console.log(id);
  // wait for one second before setting show to true,
  // so that the transition will be triggered.
  await new Promise((resolve) => setTimeout(resolve, 500));
  show.value = true;
};
</script>

<style scoped>
.v-enter-active {
  transition: opacity 0.5s ease;
}
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from {
  opacity: 0;
}
.v-leave-to {
  opacity: 0;
}
</style>
