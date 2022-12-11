import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export default defineNuxtPlugin(nuxtApp => {
    const config = useRuntimeConfig()
    // Doing something with nuxtApp
    const firebaseConfig = {
        apiKey: config.FIREBASE_API_KEY,
        authDomain: "the-ladder-auth.firebaseapp.com",
        projectId: "the-ladder-auth",
        storageBucket: "the-ladder-auth.appspot.com",
        messagingSenderId: "938480593698",
        appId: "1:938480593698:web:e2610b7a30700438e8d37b",
        measurementId: "G-TLTZT9YXSY"
    };
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    console.log(app)
})