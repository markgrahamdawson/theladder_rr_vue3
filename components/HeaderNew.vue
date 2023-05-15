<template>
  <nav class="bg-white px-8 py-3 md:px-20">
    <div class="flex w-full">
      <div class="w-1/3">
        <NuxtLink to="/" class="flex items-center">
          <img
            src="~/assets/headerlogo.svg"
            alt="The Ladder Logo"
            class="object-cover h-42 w-56 px-4"
          />
        </NuxtLink>
      </div>
      <!-- Desktop Menu -->
      <div class="w-2/3 block hidden sm:block">
        <div class="flex flex-col justify-end h-full pl-20">
          <div
            class="flex text-1xl lg:text-2xl font-josan font-bold justify-between font-semibold text-black uppercase"
          >
            <!-- <NuxtLink to="/about" class="hover:text-gray-300 relative"
              >About
            </NuxtLink> -->
            <!-- <div class="absolute w-10 h-10 bg-white"></div> -->
            <div class="relative">
              <button
                class="hover:text-gray-300 relative uppercase"
                @click="showAbout = !showAbout"
              >
                About
              </button>
              <div
                class="absolute p-2 lg:p-3 w-[125px] lg:w-[175px] h-23 lg:h-32 bg-white flex flex-col space-y-2"
                :class="showAbout ? 'hidden' : ''"
              >
                <NuxtLink
                  to="/about"
                  class="hover:text-gray-300"
                  @click="showAbout = !showAbout"
                  >About</NuxtLink
                >
                <NuxtLink
                  to="/about/history"
                  class="hover:text-gray-300"
                  @click="showAbout = !showAbout"
                  >History</NuxtLink
                >
                <NuxtLink
                  to="/about/directory"
                  class="hover:text-gray-300"
                  @click="showAbout = !showAbout"
                  >Directory</NuxtLink
                >
              </div>
            </div>

            <NuxtLink to="/news" class="hover:text-gray-300">News </NuxtLink>
            <NuxtLink to="/events" class="hover:text-gray-300"
              >Events
            </NuxtLink>
            <NuxtLink to="/ourSpace" class="hover:text-gray-300"
              >Our Space
            </NuxtLink>
          </div>
        </div>
      </div>
      <!-- Mobile Hanburger -->
      <div class="w-2/3 sm:hidden flex justify-end">
        <button
          type="button"
          class="text-black-400"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <IconsHamburger class="w-20 h-20" />
        </button>
      </div>
      <!-- Mobile menu, show/hide based on menu state. -->
      <!-- <div class="sm:hidden" id="mobile-menu">
          <div class="px-2 pt-2 pb-3">
            <div>
              <NuxtLink to="/news"
                class="font-amatic text-xl font-semibold text-black hover:text-gray-300 px-1 py-2"
                aria-current="page">News</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/about"
                class="font-amatic text-xl font-semibold text-black hover:text-gray-300 px-1 py-2">About
              </NuxtLink>
            </div>
            <div>
              <NuxtLink to="/residents"
                class="font-amatic text-xl font-semibold text-black hover:text-gray-300 px-1 py-2">
                Residents</NuxtLink>
            </div>
            <div>
              <NuxtLink to="/events"
                class="font-amatic text-xl font-semibold text-black hover:text-gray-300 px-1 py-2">Events
              </NuxtLink>
            </div>
            <div>
              <NuxtLink to="/contacts"
                class="font-amatic text-xl font-semibold text-black hover:text-gray-300 px-1 py-2">Contact
              </NuxtLink>
            </div>
          </div>
        </div> -->

      <!-- <div
        class="hidden lg:block pl-28 -ml-28 bg-[url('~/assets/headersnakespraycrop2.svg')] bg-auto bg-no-repeat bg-center w-full h-54 z-0">
      </div> -->
      <!-- <div class="fixed top-0 right-0 w-30 h-30 pt-8 pr-32 text-lg">
        <div v-if="!firebaseUser" class="flex">
          <div>
            <IconsUser class="stroke-slate-500" />
          </div>
          <div>
            <NuxtLink to="/firebase" class="pl-2">Sign In</NuxtLink>
          </div>
        </div>
        <div v-else>
          <div class="flex">
            <div class="rounded-full bg-offwhite">
              <IconsUser />
            </div>
            <div>
              <NuxtLink to="/account" class="pl-2">My account</NuxtLink>
            </div>
          </div>
          <div class="pt-2 text-center">
            <button @click="signOutUser">Sign Out</button>
          </div>
        </div>
      </div> -->
      <!-- <div class="mt-8">
        <button class="button" @click="signIn" v-if="!firebaseUser"> Sign in</button>
        <button class="button" @click="signOut" v-if="firebaseUser"> Sign out</button>
      </div>
      <div v-if="firebaseUser">
        <client-only>
          <pre>{{ firebaseUser }}</pre>
        </client-only>
      </div>
      <div v-else>
        User Signed Out
      </div>
      <p>
        <NuxtLink to="/secret">Go to secret page</NuxtLink>
      </p> -->
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { signOutUser } from "../composables/useFirebase";

const showAbout = ref(true);

// definePageMeta({
//   middleware: ["auth"]
//   // or middleware: 'auth'
// })

const firebaseUser = useFirebaseUser();
const credentials = ref();

// const signIn = async () => {
//   const email = "markgrahamdawson+1@gmail.com"
//   const password = '123456'
//   credentials.value = await signInUser(email, password)
//   console.log("Credentials:", credentials)
// }
</script>
