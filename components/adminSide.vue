<template>
    <div class="">
      <client-only>
      <div class="bg-white p-1 h-screen w-60">
        <div
          class="flex flex-col justify-center items-center p-2 mb-8 text-center"
        >
          <div class="">
            <img
              class="h-16 bg-gray-100 rounded-full"
              src="~/assets/images/ueablogo.png"
              alt="John Doe"
            />
          </div>
        
        </div>
        <ul class="space-y-4 text-sm">
          <li>
            <nuxt-link
              to="/landingAd"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 bg-gray-200 focus:shadow-outline"
            >
             <font-awesome-icon icon="fa-solid fa-home" />
              <span>Home</span>
              
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/dashboard"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline"
            >
             <font-awesome-icon icon="fa-solid fa-dashboard" />
              <span>Dashboard</span>
              
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/tableView"
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200  focus:shadow-outline"
            >
             <font-awesome-icon icon="fa-solid fa-graduation-cap" />
              <span>Students</span>
              
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/addfile"
              
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <font-awesome-icon icon="fa-solid fa-plus" />
              <span>Add File</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/recent"
              
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <font-awesome-icon icon="fa-solid fa-calendar" />
              <span>Recent Activity</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/users"
              
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <font-awesome-icon icon="fa-solid fa-users" />
              <span>Users</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/reports"
              
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <font-awesome-icon icon="fa-solid fa-users" />
              <span>Get Reports</span>
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/viewAdmin"
              
              class="flex items-center space-x-3 text-gray-700 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <font-awesome-icon icon="fa-solid fa-users" />
              <span>Admins</span>
            </nuxt-link>
          </li>
         
          <li>
            <button
            v-if="firebaseUser"
              type="button"
              @click="handleSignout"
              class="flex items-center space-x-3 text-red-600 p-2 rounded-md font-medium hover:bg-gray-200 focus:bg-gray-200 focus:shadow-outline"
            >
              <span class="text-red-600">
                <svg
                  class="h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </div>
      </client-only>
  
     
    </div>
  </template>
  
  <script setup>

  
  const firebaseUser = useFirebaseUser();
  const router=useRouter()
  const handleSignout = async () => {
    await signOut();
    router.push('/')
  };
  </script>
  
  <style scoped></style>