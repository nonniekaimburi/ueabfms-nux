<template>
  <div class="w-full flex justify-between p-4 mb-3">
    <router-link
      to="/landing"
      class="text-2xl font-bold btn btn-ghost text-black"
      @click="opened = visible = true"
      >UEAB<span class="text-primary">FILES</span></router-link
    >

    <div class="right-0">
      <Popover v-slot="{ open }" class="relative mr-3">
        <PopoverButton
          :class="open ? '' : 'text-opacity-90'"
          class="group inline-flex items-center text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
        >
          <span>
            <img
              class="w-12 h-12 rounded-full"
              alt="avatar"
              src="https://cdn.pixabay.com/photo/2013/06/14/18/13/girl-139353__340.jpg"
            />
          </span>
        </PopoverButton>

        <transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="translate-y-1 opacity-0"
          enter-to-class="translate-y-0 opacity-100"
          leave-active-class="transition duration-150 ease-in"
          leave-from-class="translate-y-0 opacity-100"
          leave-to-class="translate-y-1 opacity-0"
        >
          <PopoverPanel
            class="absolute left-1/2 z-10 mt-3 w-44 -translate-x-1/2 transform px-2 sm:px-0"
          >
            <div
              class="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5"
            >
              <div class="relative grid gap-8 bg-white p-7 lg:grid-cols-1">
                <a
                  class="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  href="/analytics"
                  >Accounts</a
                >
                <div
                  v-if="firebaseUser"
                  @click="handleSignout"
                  class="text-red-600 font-normal cursor-pointer"
                >
                  Logout
                </div>
              </div>
            </div>
          </PopoverPanel>
        </transition>
      </Popover>
    </div>
  </div>
</template>

<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
const showMenu = ref(false);
const firebaseUser = useFirebaseUser();
const router=useRouter()
const handleSignout = async () => {
  await signOut();
  router.push('/')
};
</script>

<style scoped></style>
