<template>
  <nav class="bg-teal">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-42 items-center justify-between">
        <!-- <div class=" absolute inset-y-0 left-0 flex items-center sm:hidden">
          Mobile menu button
          <button type="button"
            class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            
              Icon when menu is closed.

              Heroicon name: outline/bars-3

              Menu open: "hidden", Menu closed: "block"
           
            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
              Icon when menu is open.

              Heroicon name: outline/x-mark

              Menu open: "block", Menu closed: "hidden"
           
            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div> -->

        <div class="flex w-full">
          <div
            class="z-10 flex sm:block items-center justify-center sm:items-stretch sm:justify-start py-8 relative bg-cover">
            <!-- <div class="flex flex-shrink-0 items-center">
            <img class="block h-8 w-auto lg:hidden" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
            <img class="hidden h-8 w-auto lg:block" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company">
          </div> -->
            <NuxtLink to="/" class="flex items-center">
              <img src="~/assets/headerlogo.svg" alt="The Ladder Logo" class="object-cover h-42 w-56 px-4" />
            </NuxtLink>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4 text-2xl">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->

                <NuxtLink to="/news"
                  class="font-amatic font-semibold text-black hover:text-gray-300 px-1 py-2">News
                </NuxtLink>
                <div class="font-amatic font-semibold text-black py-2">|</div>
                <NuxtLink to="/about"
                  class="font-amatic font-semibold text-black hover:text-gray-300 px-1 py-2">About
                </NuxtLink>
                <div class="font-amatic font-semibold text-black py-2">|</div>
                <NuxtLink to="/residents"
                  class="font-amatic font-semibold text-black hover:text-gray-300 px-1 py-2">Residents
                </NuxtLink>
                <div class="font-amatic font-semibold text-black py-2">|</div>
                <NuxtLink to="/events"
                  class="font-amatic font-semibold text-black hover:text-gray-300 px-1 py-2">Events
                </NuxtLink>
                <div class="font-amatic font-semibold text-black py-2">|</div>
                <NuxtLink to="/contacts"
                  class="font-amatic font-semibold text-black hover:text-gray-300 px-1 py-2">Contact
                </NuxtLink>
              </div>
              <div class="flex space-x-2 pt-2">
                <a class="hover:fill-gray-300" href="https://www.instagram.com/theladder_rr/"><IconsInstagram/></a>
                <a class="hover:fill-gray-300" href=""><IconsFacebook/></a>
                <a class="hover:fill-gray-300" href="https://mobile.twitter.com/riftexcursions"><IconsTwitter/></a>
              </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
              <div class="px-2 pt-2 pb-3">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
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
            </div>


          </div>
          <div
            class="hidden lg:block pl-28 -ml-28 bg-[url('~/assets/headersnakespraycrop2.svg')] bg-auto bg-no-repeat bg-center w-full h-54 z-0">
          </div>
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
      </div>
    </div>

  </nav>
</template>
  
<script lang="ts" setup>
import { signOutUser } from "../composables/useFirebase";

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