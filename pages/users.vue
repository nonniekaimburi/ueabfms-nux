<template>
    <div class="flex justify-between">
        <div>
          <p class="font-bold text-2xl"><span class="text-primary">Users</span> view</p>
        </div>
        <button @click="handleUsers" class=" px-4 right-0 bg-blue-600 py-2 rounded text-white">
          <font-awesome-icon icon="fa-solid fa-plus" />
          <span class="text-sm">Add User</span>
      </button>
    </div>
    

    <div>
      <p class="text-blue-700 text-lg font-normal" v-if="isRestricted">The user has been restricted successfully</p>
      <p class="text-blue-700 text-lg font-normal" v-if="isUnrestricted">The user has been Unrestricted successfully</p>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border">
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r-2">No.</th>
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r-2">user email</th>
                  <!-- <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r-2">is Admin</th> -->
                  <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left border-r-2">Action</th>
                </thead>
                <tbody>
                  <tr class="border" v-for="(user,index) in users" :key="index">
                    <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r-2">{{index +1}}</td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r-2">{{user.email}}</td>
                    <!-- <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap first-letter border-r-2">{{user.admin}}</td> -->
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap border-r-2 w-36">
                      <button v-if="!user.isBanned" class="px-4 bg-orange-500 rounded py-2 mx-2" @click="handleUpdateAdmin(user.id)">
                       <span>Restrict</span>
                      </button>
                      <button v-if="user.isBanned" class="px-4 bg-orange-500 rounded py-2 mx-2" @click="handleUnRestrictUser(user.id)">
                        <span>UnRestrict</span>
                       </button>
                       <button v-if="!user.isForbidden" class="px-4 bg-orange-800 rounded py-2 mx-2" @click="handleForbidUser(user.id)">
                        <span class="text-white">Forbid</span>
                       </button>
                       <button v-if="user.isForbidden" class="px-4 bg-orange-800 rounded py-2 mx-2">
                        <span class="text-white">Forbidden</span>
                       </button>
                      <nuxt-link :to="{name:'user-id',params:{id:user.id}}" class="px-4 bg-green-500 rounded py-2 mx-2">
                        <span class="text-white font-normal">History</span>
                      </nuxt-link>
                    </td>
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
                                  Warning
                                </DialogTitle>
                                <div class="mt-2">
                                  <p class="text-sm text-gray-500">
                                    Do you want to restrict {{user.email}} from accessing the system as an admin?
                                  </p>
                                </div>
                                <div class="mt-4 flex justify-between">
                                  <button
                                  v-if="user.admin==true"
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="handleUpdateAdmin(user.id)"
                                  >
                                    Permanently
                                  </button>
                                  <button
                                  v-if="user.admin==false"
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700"
                                    @click="handleUpdateAdmin(user.id)"
                                  >
                                    Unrestrict
                                  </button>
                                  <button
                                    type="button"
                                    class="inline-flex justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
                                    @click="closeModal"
                                  >
                                    Temporarily
                                  </button>
                                </div>
                              </DialogPanel>
                            </TransitionChild>
                          </div>
                        </div>
                      </Dialog>
                    </TransitionRoot>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  </div>
  
</template>

<script setup>
import {
Dialog,
DialogPanel,
DialogTitle,
TransitionChild,
TransitionRoot
} from "@headlessui/vue";
definePageMeta({
    layout: "admin",
    // middleware: ["auth"]
  });
  const isRestricted=ref(false)
  const isUnrestricted=ref(false)
const isOpen = ref(false);
const closeModal = () => {
  isOpen.value = false;
};
const openModal = () => {
  isOpen.value = true;
};

const isUpdated=ref(false)
const handleUpdateAdmin=async(id)=>{
 

  await updaUseDoc(id)
  isRestricted.value=true
  // isOpen.value = false;
}
const handleUnRestrictUser=async(id)=>{
  await unRestrictUser(id)
  isUnrestricted.value=true
}
const handleForbidUser=async(id)=>{
  await forbidUser(id)
}
const handleUsers=async()=>{
  await newUser()
}
const users=ref([])
onMounted(async()=>{
  users.value=await getAllUsers()
  console.log(users.value);
  console.log(getAllUsers());
})
</script>