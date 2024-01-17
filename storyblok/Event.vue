<template>
  <div class="mx-auto sm:block max-w-7xl px-2 sm:px-6 lg:px-8">
    <div v-editable="blok" class="p-6 w-full">
      <div class="font-josan px-10">
        <div class="flex ml-4">
          <IconsChevronLeft/>
          <NuxtLink to="/events" class="font-permark ml-2">Back to events</NuxtLink>
        </div>
        <div class="relative flex justify-center">
          <img :src="blok.thumbnail?.filename + '/m/400x0' || 'https://picsum.photos/300/175'" :alt="blok.image?.alt"
            class="" />
        </div>
        <div class="px-16 pb-4 pt-8 font-semibold flex">
          <div class="w-3/4 text-teal">
            {{ blok.date || "Date" }}
          </div>
          <!-- <div class="w-1/4">
            <div v-if="!firebaseUser" class="">
              <NuxtLink to="/firebase">Sign in to buy tickets for this event!</NuxtLink>
            </div>
            <div v-else>
              <button class="border border-black" @click="createSub"
                :disabled="!products[0]?.prices[0]?.unit_amount || isLoading">
                <div>{{ isLoading ? "Loading..." : "Buy tickets for this event" }}</div>
                <div v-if="products[0]?.prices[0]?.unit_amount">£ {{ products[0]?.prices[0]?.unit_amount / 100 }}</div>
              </button>
            </div>
          </div> -->
        </div>
        <div class="w-full px-16 py-2 font-permark ">
          {{ blok.performance || "Performance" }}
        </div>
        <div class="w-full px-16 py-2">
          {{ blok.company || "Company" }}
        </div>
        <div class="w-full px-16">
          {{ blok.content || "Lorem Ipsum" }}
        </div>
        <div>
          {{ eventContent }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { async } from "@firebase/util";
import { getFirestore, getDocs, where, collection, query, addDoc, onSnapshot } from "firebase/firestore";
const props = defineProps({
  blok: { type: Object, required: true }
})

const eventContent = computed(() => renderRichText(props.blok.content));

// Auth stuff
const firebaseUser = useFirebaseUser();

// Data stuff
const getProducts = async (stripeID) => {
  console.log('print in stripeID')
  console.log(typeof stripeID)
  const db = getFirestore();
  const productsRef = collection(db, "products");
  const productsQuery = query(productsRef, where("active", "==", true), where("__name__", "==", stripeID));
  const productsQuerySnap = await getDocs(productsQuery);

  productsQuerySnap.docs.forEach(async (doc) => {
    const pricesRef = collection(db, "products", doc.id, "prices");
    const pricesQuerySnap = await getDocs(pricesRef);
    // console.log(pricesQuerySnap.docs)
    products.value.push({
      id: doc.id,
      ...doc.data(),
      prices: pricesQuerySnap.docs.map((price) => {
        return {
          id: price.id,
          ...price.data(),
        }
      })
    })
  })
}

const products = ref([])
onMounted(async () => {
  getProducts(props.blok.stripeID)
  console.log(products)
});

const isLoading = ref()
// const createSub = async () => {
//   isLoading.value = true
//   const db = getFirestore()
//   const collectionRef = collection(db, "customers", firebaseUser.value.uid, "checkout_sessions")
//   const docRef = await addDoc(collectionRef, {
//     price: products[0]?.prices[0]?.unit_amount,
//     success_url: window.location.origin,
//     cancl_url: window.location.origin
//   });
//   onSnapshot(docRef, (snap) => {
//     const { error, url } = snap.data();
//     if (error) {
//       console.log(`An error occured: ${error.message}`)
//       isLoading.value = false
//     };
//     if (url) {
//       window.location.assign(url);
//     };
//   })
// }

async function createSub() {
  isLoading.value = true;
  const db = getFirestore();
  const collectionRef = collection(
    db,
    "customers",
    firebaseUser.value.uid,
    "checkout_sessions"
  );
  const docRef = await addDoc(collectionRef, {
    mode: "payment",
    price: products.value[0]?.prices[0]?.id,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  });

  onSnapshot(docRef, (snap) => {
    const { error, url } = snap.data();
    if (error) {
      console.error(`An error occured: ${error.message}`);
      isLoading.value = false
    }
    if (url) {
      window.location.assign(url);
    }
  });
}

</script>
