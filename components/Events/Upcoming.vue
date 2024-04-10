<template>
  <div>
    <!-- {{ futureEvents }} -->
    <!-- <div class="font-josan pb-4 text-xl">Upcoming Events</div> -->
    <div
      class="h-full w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-12 gap-2 md:gap-4 grid-flow-row-dense"
    >
      <Transition>
        <div v-if="show" :class="formatCellOne" @click="selected(1)">
          <div v-if="currentSelected == 1">
            <EventsUpcominCardOpen
              v-if="futureEvents[0]"
              :futureEvent="futureEvents[0]"
              :color="'teal'"
            />
          </div>
          <div v-else>
            <EventsUpcominCardClosed
              v-if="futureEvents[0]"
              :futureEvent="futureEvents[0]"
              :color="'teal'"
            />
          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="show" :class="formatCellTwo" @click="selected(2)">
          <div v-if="currentSelected == 2">
            <EventsUpcominCardOpen
              v-if="futureEvents[1]"
              :futureEvent="futureEvents[1]"
              :color="'orange'"
            />
          </div>
          <div v-else>
            <EventsUpcominCardClosed
              v-if="futureEvents[1]"
              :futureEvent="futureEvents[1]"
              :color="'orange'"
            />
          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="show" :class="formatCellThree" @click="selected(3)">
          <div v-if="currentSelected == 3">
            <EventsUpcominCardOpen
              v-if="futureEvents[2]"
              :futureEvent="futureEvents[2]"
              :color="'teal'"
            />
          </div>
          <div v-else>
            <EventsUpcominCardClosed
              v-if="futureEvents[2]"
              :futureEvent="futureEvents[2]"
              :color="'teal'"
            />
          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="show" :class="formatCellFour" @click="selected(4)">
          <div v-if="currentSelected == 4">
            <EventsUpcominCardOpen
              v-if="futureEvents[3]"
              :futureEvent="futureEvents[3]"
              :color="'orange'"
            />
          </div>
          <div v-else>
            <EventsUpcominCardClosed
              v-if="futureEvents[3]"
              :futureEvent="futureEvents[3]"
              :color="'orange'"
            />
          </div>
        </div>
      </Transition>
      <Transition>
        <div v-if="show" :class="formatCellFive" @click="selected(5)">
          <div v-if="currentSelected == 5">
            <EventsUpcominCardOpen
              v-if="futureEvents[4]"
              :futureEvent="futureEvents[4]"
              :color="'teal'"
            />
          </div>
          <div v-else>
            <EventsUpcominCardClosed
              v-if="futureEvents[4]"
              :futureEvent="futureEvents[4]"
              :color="'teal'"
            />
          </div>
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
    formatCellOne.value = "sm:col-span-1 sm:row-span-5";
    formatCellTwo.value = "sm:col-span-1 sm:row-span-3";
    formatCellThree.value = "sm:col-span-1 sm:row-span-3";
    formatCellFour.value = "sm:col-span-1 sm:row-span-5";
    formatCellFive.value = "sm:col-span-1 sm:row-span-3";
  }
  console.log(id, currentSelected.value);
  currentSelected.value = id;
  index.value = id;
  if (id === 1) {
    formatCellOne.value = "sm:col-span-2 sm:row-span-6";
    formatCellTwo.value = "sm:col-span-1 sm:row-span-6";
    formatCellThree.value = "sm:col-span-1 sm:row-span-3";
    formatCellFour.value = "sm:col-span-1 sm:row-span-3";
    formatCellFive.value = "sm:col-span-1 sm:row-span-3";
  } else if (id === 2) {
    formatCellOne.value = "sm:col-span-1 sm:row-span-3";
    formatCellTwo.value = "sm:col-span-2 sm:row-span-6";
    formatCellThree.value = "sm:col-span-1 sm:row-span-3";
    formatCellFour.value = "sm:col-span-1 sm:row-span-3";
    formatCellFive.value = "sm:col-span-1 sm:row-span-3";
  } else if (id === 3) {
    formatCellOne.value = "sm:col-span-1 sm:row-span-3";
    formatCellTwo.value = "sm:col-span-1 sm:row-span-6";
    formatCellThree.value = "sm:col-span-2 sm:row-span-6";
    formatCellFour.value = "sm:col-span-1 sm:row-span-3";
    formatCellFive.value = "sm:col-span-1 sm:row-span-3";
  } else if (id === 4) {
    formatCellOne.value = "sm:col-span-1 sm:row-span-3";
    formatCellTwo.value = "sm:col-span-1 sm:row-span-3";
    formatCellThree.value = "sm:col-span-1 sm:row-span-3";
    formatCellFour.value = "sm:col-span-2 sm:row-span-6";
    formatCellFive.value = "col-span-1 row-span-3";
  } else if (id === 5) {
    formatCellOne.value = "sm:col-span-1 sm:row-span-3";
    formatCellTwo.value = "sm:col-span-1 sm:row-span-3";
    formatCellThree.value = "sm:col-span-1 sm:row-span-3";
    formatCellFour.value = "sm:col-span-1 sm:row-span-3";
    formatCellFive.value = "sm:col-span-2 sm:row-span-6";
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
