<template>
    <div v-if="student">
      <div>
        <p class="text-xl text-center font-bold">
          Return <span class="text-primary">File for {{ student.sclid }}</span>
        </p>
        <p class="text-red-600 text-lg font-normal" v-if="overalErro">
          No document has been picked from this file yet
         </p>
         <p class="text-red-600 text-lg font-normal" v-if="erroMesage">
          Please select a document to Return
        </p>
      </div>
      <div class="flex justify-between">
        <div class="border rounded p-8 flex flex-col gap-2">
          <b><p class="text-center">Student Details</p></b>
          <div class="font-medium flex flex-col gap-1">
            <div class="flex items-center gap-4">
              <p class="capitalize">Student ID:</p>
              <p class="uppercase">{{ student.sclid }}</p>
            </div>
            <br />
            <div class="flex items-center gap-4">
              <p class="capitalize">Lastname:</p>
              <p>{{ student.Lastname }}</p>
            </div>
            <br />
            <div class="flex items-center gap-4">
              <p class="capitalize">Firstname:</p>
              <p>{{ student.Firstname }}</p>
            </div>
            <br />
            <div class="flex items-center gap-4">
              <p class="capitalize">MiddleName:</p>
              <p>{{ student.Middlename }}</p>
              <span class="e-float-line"></span>
            </div>
            <br />
            <div class="flex items-center gap-4">
              <p class="capitalize">School:</p>
              <p>{{ student.school }}</p>
            </div>
            <br />
            <div class="flex items-center gap-4">
              <p class="capitalize">Status:</p>
              <p>{{ student.status }}</p>
            </div>
            <br />
            <div class="flex items-center gap-4">
              <p class="capitalize">Location:</p>
              <p>{{ student.Location }}</p>
            </div>
          </div>
        </div>
        <div class="border rounded p-8">
          <p class="text-center font-bold">Which files do you want to Return?</p>
          <div class="form-control flex flex-row items-center gap-2">
            <label class="cursor-pointer label">
              <span class="label-text">KCPE Certificate</span>
            </label>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              value="KCPE"
              v-model="files"
            />
          </div>
          <div class="form-control flex flex-row items-center gap-2">
            <label class="cursor-pointer label">
              <span class="label-text">KCSE Certificate</span>
            </label>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              value="KCSE"
              v-model="files"
            />
          </div>
          <div class="form-control flex flex-row items-center gap-2">
            <label class="cursor-pointer label">
              <span class="label-text">Birth Certificate</span>
            </label>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              value="Birth certificate"
              v-model="files"
            />
          </div>
          <div class="form-control flex flex-row items-center gap-2">
            <label class="cursor-pointer label">
              <span class="label-text">Application Form</span>
            </label>
            <input
              type="checkbox"
              class="checkbox checkbox-primary"
              v-model="files"
            />
          </div>
          <div class="form-control flex flex-row items-center gap-2">
            <label class="cursor-pointer label">
              <span class="label-text">All the Files</span>
            </label>
            <input type="checkbox" class="checkbox checkbox-primary" />
          </div>
        </div>
      </div>
    </div>
    <br /><button @click="openModal" class="bg-blue-600 text-white rounded px-2 py-2 text-sm font-normal">
      Return this File
    </button>
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="closeModal" class="relative z-10">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>
        <div class="fixed inset-0 overflow-y-auto">
          <div
            class="flex min-h-full items-center justify-center p-4 text-center"
          >
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
              >
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  Where do you want to Keep the file
                </DialogTitle>
                <div class="mt-2">
                  <div class="block p-6 bg-white max-w-sm ml-auto mr-auto">
                    <div class="form-group mb-6">
                      <label
                        for="exampleInputEmail1"
                        class="form-label inline-block mb-2 text-gray-700"
                        >Location Name:</label
                      >
                      <input
                        v-model="name"
                        type="text"
                        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="e.g Finance office"
                      />
                    </div>
                    <div class="mt-4 flex justify-between">
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                        @click="handleReturn"
                      >
                        OK
                      </button>
                      <button
                        type="button"
                        class="inline-flex justify-center rounded-md border border-transparent bg-orange-600 px-4 py-2 text-sm font-medium text-white hover:bg-orange-700"
                        @click="closeModal"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </template>
  <script setup>
 
  
  import { getAuth } from "@firebase/auth";
import {
Dialog,
DialogPanel,
DialogTitle,
TransitionChild,
TransitionRoot
} from "@headlessui/vue";
import {
deleteDoc, doc,
getDoc, getFirestore
} from "firebase/firestore";

definePageMeta({
  layout: "admin",
});

  const route = useRoute();
  const router = useRouter();

 
  const student = ref(null);
  const isOpen = ref(false);
  const closeModal = () => {
    isOpen.value = false;
  };
  const openModal = () => {
    isOpen.value = true;
  };
  const name = ref("");
  const files = ref([]);
  
  const histo = ref(null);
  const erroMesage=ref(false)
  const overalErro=ref(false)
  onMounted(async () => {
    student.value = await getSingleStudent(route.params.id);
    
    histo.value = await getSingleHistory(route.params.id);
  });
  const handleReturn = async () => {
    console.log('before if')
    if (files.value.length == 0) {
    erroMesage.value = true;
    isOpen.value = false;
    console.log('afte if')
  } else {
    erroMesage.value = false;
    console.log('inside else')
    const db = getFirestore();
    const route = useRoute();
    const docRef = doc(db, "history", route.params.id);
    const docSnap = await getDoc(docRef);
    if(docSnap.exists()){
      console.log('insid nested if if')
     
      await newReturn(
      route.params.id,
      files.value,
      name.value,
      student.value.sclid,
      getAuth().currentUser.email,
      "return"
    );
    await deleteDoc(doc(db, "history", route.params.id));
    isOpen.value = false;
    router.push("/tableview");
    }else{
      overalErro.value=true
      isOpen.value = false;
    }
   
  }
  };
  </script>
  