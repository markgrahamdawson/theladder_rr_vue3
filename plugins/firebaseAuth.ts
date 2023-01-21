import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    // Doing something with nuxtApp
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: config.FIREBASE_AUTH_DOMAIN,
        projectId: config.FIREBASE_PROJECT_ID,
        storageBucket: config.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: config.FIREBASE_MESSAGING_SENDER_ID,
        appId: config.FIREBASE_APP_ID,
        measurementId: config.FIREBASE_MEASUREMENT_ID
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    // console.log(app)
    initUser();

    const auth = getAuth()
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)

})