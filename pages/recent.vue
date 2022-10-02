<template>
    <div>
      <p class="font-bold text-2xl">
        <span class="text-primary">Recent </span>Activity
      </p>
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="border-2">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                    >
                      Student Id
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                    >
                      Action
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                    >
                      Accessed by
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                    >
                      Date and time
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                    >
                      Location
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-2" v-for="(histo,index) in histos" :key="index">
                    <td
                      class="px-6 py-2 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                    >
                      {{histo.sclid}}
                    </td>
                    <td
                      class="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    >
                     <ul v-if="histo.action=='retrieve'">
                      <li class="text-gray-600 font-normal text-sm" v-for="(hist,index) in histo.file" :key="index">Retrieved {{hist}}</li>
                     </ul>
                     <ul v-else>
                      <li class="text-gray-600 font-normal text-sm" v-for="(hist,index) in histo.file" :key="index">Returned {{hist}}</li>
                     </ul>
                    </td>
                    <td
                      class="px-6 py-2 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                    >
                      {{histo.user}}
                    </td>
                    <td
                      class="px-6 py-2 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                    >
                    {{ histo.time.toDate().toDateString() }} {{ histo.time.toDate().toLocaleTimeString() }}
                    </td>
                    <td
                      class="px-6 py-2 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                    >
                      {{histo.location}}
                    </td>
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
  definePageMeta({
    layout: "admin",
  });
  const histos = ref([]);
  const time=new Date()
  
  onMounted(async () => {
    histos.value = await getRecentHistory();
  
    console.log(histos.value);
    console.log(time)
  });
  </script>
  