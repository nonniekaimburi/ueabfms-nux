<template>
    <div>
      <p class="font-bold text-2xl">
        <span class="text-primary">Dash</span>board
      </p>
      <div class="flex justify-between items-center pt-4 px-4">
        <div class="w-80">
          <div
            class="flex items-center flex-col p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5
              class="mb-2 text-2xl tracking-tight text-blue-600 dark:text-white"
            >
              Retrieved Files
            </h5>
            <p class="font-normal text-orange-600 text-3xl">{{retrievedHistory.length}}</p>
          </div>
        </div>
        <div class="">
          <div
            class="flex flex-col items-center p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5
              class="mb-2 text-2xl tracking-tight text-blue-600 dark:text-white"
            >
              Returned Files
            </h5>
            <p class="font-normal text-orange-600 text-3xl">{{returnedHistory.length}}</p>
          </div>
        </div>
        <router-link :to="{name:'table'}" class="">
          <div
            class="flex flex-col items-center p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5
              class="mb-2 text-2xl tracking-tight text-blue-600 dark:text-white"
            >
              All student Files
            </h5>
            <p class="font-normal text-orange-600 text-3xl">{{students.length}}</p>
          </div>
        </router-link>
      </div>
      <div class="flex justify-between items-center pt-4 px-4">
        <router-link :to="{name: 'recentActivity'}" class="w-80">
          <div
            class="flex items-center flex-col p-6 w-full bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5
              class="mb-2 text-2xl tracking-tight text-blue-600 dark:text-white"
            >
              Recent Activities
            </h5>
            <p class="font-normal text-orange-600 text-3xl">8</p>
          </div>
        </router-link>
        <router-link :to="{name:'landing'}" class="flex items-center p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <font-awesome-icon icon="fa-solid fa-graduation-cap" class="text-3xl text-orange-400 px-4" />
          <div
            class="flex flex-col items-center "
          >
            <h5
              class="mb-2 text-2xl tracking-tight text-blue-600 dark:text-white"
            >
              All Schools
            </h5>
            <p class="font-normal text-orange-600 text-3xl">{{schools.length}}</p>
          </div>
        </router-link>
        <router-link :to="{name:'users'}" class="flex items-center p-6 w-80 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <font-awesome-icon icon="fa-solid fa-users" class="text-3xl text-orange-400 px-4" />
          <div
            class="flex flex-col items-center "
          >
            <h5
              class="mb-2 text-2xl tracking-tight text-blue-600 dark:text-white"
            >
              All Users
            </h5>
            <p class="font-normal text-orange-600 text-3xl">{{user.length}}</p>
          </div>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  
  
  const students=ref([])
  const history=ref([])
  const user=ref([])
  const schools =ref([])
  
  onMounted(async () => {
    students.value= await getAllStudentFiles()
    history.value= await getAllHistory()
    user.value= await getAllUsers()
     schools.value=await getAllSchools()
  });
  const returnedHistory=computed(()=>{
    return history.value.filter((hist)=>hist.action=='return')
  })
  const retrievedHistory=computed(()=>{
    return history.value.filter((hist)=>hist.action=='retrieve')
  })
  </script>
  