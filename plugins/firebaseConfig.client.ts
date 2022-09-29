
import { initializeApp } from "firebase/app";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    const config = useRuntimeConfig()

const firebaseConfig = {

  apiKey: config.API_KEY,

  authDomain: config.AUTH_DOMAIN,

  projectId: config.PROJECT_ID,

  storageBucket: config.STORAGE_BUCKET,

  messagingSenderId: config.MESSAGING_SENDER_ID,

  appId: config.APP_ID,
  measurementId: config.MEASUREMENT_ID

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app)


  })