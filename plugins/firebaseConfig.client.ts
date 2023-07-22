
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { initUser } from "~~/composables/auth";

export default defineNuxtPlugin(nuxtApp => {
    // Doing something with nuxtApp
    const config = useRuntimeConfig()

// const firebaseConfig = {

//   apiKey: config.API_KEY,

//   authDomain: config.AUTH_DOMAIN,

//   projectId: config.PROJECT_ID,

//   storageBucket: config.STORAGE_BUCKET,

//   messagingSenderId: config.MESSAGING_SENDER_ID,

//   appId: config.APP_ID,
//   measurementId: config.MEASUREMENT_ID

// };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjJNBybOF7g_zeslOezDYSg5czTlnbAS0",
  authDomain: "ueabfms.firebaseapp.com",
  databaseURL: "https://ueabfms-default-rtdb.firebaseio.com",
  projectId: "ueabfms",
  storageBucket: "ueabfms.appspot.com",
  messagingSenderId: "361434967495",
  appId: "1:361434967495:web:f6423a04482ca828be3de2",
  measurementId: "G-ZJMEHG1NKE"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
console.log(app)

initUser()
const auth=getAuth()
nuxtApp.vueApp.provide('auth',auth)
nuxtApp.provide('auth',auth)
  })
