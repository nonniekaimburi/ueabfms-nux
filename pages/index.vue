<template>
  <div class="h-screen w-screen bg-login bg-no-repeat bg-cover">
    <div class="flex items-center justify-center ml-auto mr-auto flex-col">
      <h3 class="mt-52 text-3xl font-normal text-black">Welcome to UEAB</h3>
      <h3 class="text-black text-2xl">File System.</h3>
      <h3 class="text-red-600 text-2xl font-normal" v-if="isBanned">
        You have been restricted access, visit registrar for details
      </h3>
      <button
        v-if="!firebaseUser"
        @click="handleLogin"
        type="button"
        class="mt-8 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
      >
        Login to get Started
      </button>
      <div v-if="firebaseUser">
        <div v-if="isAdmin">
          <router-link
            to="/landingAd"
            type="button"
            class="mt-8 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Continue to Dashboard a
          </router-link>
        </div>
        <div v-if="notAdmin">
          <router-link
            to="/landing"
            type="button"
            class="mt-8 focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900"
          >
            Continue to Dashboard n
          </router-link>
        </div>
        <div v-if="isNotAllowed">
          <p class="text-red-600 text-lg font-normal">
            The email is not allowed to access the system
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { doc, getDoc, getFirestore } from "firebase/firestore";

const router = useRouter();
const firebaseUser = useFirebaseUser();
const isBanned = ref(false);
const isAdmin = ref(false);
const notAdmin=ref(false)
const isNotAllowed=ref(false)

const db = ref(null);
onMounted(async () => {
  db.value = getFirestore();
  console.log(db.value);
});
const handleLogin = async () => {
  const cred = await signIn();
  if(cred.user.email.endsWith('ueab.ac.ke')){
    const user = cred.user;
  const userRedirect = ref(null);
  const docRef = doc(db.value, "users", user.uid);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    userRedirect.value = docSnap.data();
    if (userRedirect.value.admin) {
      router.push("/landingAd");
      isAdmin.value = true;
    } else if (userRedirect.value.isBanned || userRedirect.value.isForbidden) {
      isBanned.value = true;
    } else if(!userRedirect.value.admin) {
      console.log("logged in");
      // isLoggedIn.value = true;
      notAdmin.value = false;
      router.push("/landing");
    }
  }
  }else{
    isNotAllowed.value=true
  }
  
};
</script>

<style lang="scss" scoped></style>
