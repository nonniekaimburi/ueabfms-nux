<template>
  <div class="h-screen w-screen bg-login bg-no-repeat bg-cover">
    <div class="flex items-center justify-center ml-auto mr-auto flex-col">
      <h3 class="mt-52 text-3xl font-normal text-black">Welcome to UEAB</h3>
      <h3 class="text-black text-2xl"> File System.</h3>
      <button
      v-if="!firebaseUser"
      @click="handleLogin"
        type="button"
        class=" mt-8 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
      >
        Login to get Started
      </button>
    </div>
  </div>
</template>

<script setup>

import { doc, getDoc, getFirestore } from "firebase/firestore";

const router=useRouter()
const firebaseUser=useFirebaseUser()

  const db=ref(null)
  onMounted(async()=>{
    db.value= getFirestore()
    console.log(db.value);
  })
  const handleLogin=async()=>{
   const cred= await signIn()
   const user=cred.user
   const userRedirect = ref(null);
   const docRef = doc(db.value, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userRedirect.value = docSnap.data();
      if (userRedirect.value.admin) {
        router.push("/landingAd");
      } else {
        console.log("logged in");
        // isLoggedIn.value = true;
        router.push("/landing");
      }
    }

  }
</script>

<style lang="scss" scoped></style>
