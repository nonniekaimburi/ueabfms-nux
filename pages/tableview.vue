<template>
 

  <div class="pt-4">

    <router-link :to="{ path: '/addfile' }" class="bg-blue-600 ml-10 px-2 py-2 rounded mt-10">
      <font-awesome-icon icon="fa-solid fa-plus" class="text-white"/>
      <span class="text-white">Add File</span>
    </router-link>
    <!-- <table1 :columns="columns" :entries="students" /> -->
  <div class="flex justify-between">
    <div class="mt-4 mx-4 flex items-center">
      <p class="text-sm text-black font-normal px-2">Show</p>
      <select v-model="currentPage" @change="handleNext" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-20 p-2.5 ">
        <option v-for="entry in showEnties" :key="entry" :value="entry" >{{entry}}</option>
        
      </select>
      <p class="text-sm text-black font-normal px-2">Entries</p>
    </div>
    <div class="flex justify-between items-center p-3 w-96">
      
      <div>
        <input
          v-model="search"
          type="text"
          placeholder="search in projects"
          class="border border-gray-300 rounded-lg block w-full p-2.5 text-gray-900"
        />
      </div>
    </div>
  </div>
    <div class="flex flex-col w-full overflow-hidden">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
        <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="w-full">
              <thead class="border-2">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    No.
                  </th>
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
                    Last name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    First name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    Middle name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    School
                  </th>
                  <!-- <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    Status
                  </th> -->
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-2 cursor-pointer"
                  v-for="(student, index) in searchedfiles"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="uppercase text px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.sclid }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.Lastname }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.Firstname }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.Middlename }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    v-if="student.school.length > 21"
                  >
                    {{ student.school.slice(0, 20) }}...
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    v-else
                  >
                    {{ student.school.slice(0, 20) }}
                  </td>
                  <!-- <td
                  class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                >
                  {{student.status}}
                </td> -->
                  <td
                    class="px-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    <router-link
                      @click.stop
                      :to="{ name: 'retrieve-id', params: { id: student.id } }"
                    >
                      <button
                        type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      >
                        Retrieve
                      </button>
                    </router-link>
                    <router-link
                      @click.stop
                      :to="{ name: 'return-id', params: { id: student.id } }"
                    >
                      <button
                        type="button"
                        class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
                      >
                        Return
                      </button>
                    </router-link>
                    <router-link
                      @click.stop
                      :to="{ name: 'history-id', params: { id: student.id } }"
                    >
                      <button
                        type="button"
                        class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-2 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                      >
                        Hist
                      </button>
                    </router-link>
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
//     


const router = useRouter();
const students = ref([]);
const search = ref("");
const showEnties=ref([5,10,15,20])
const currentPage=ref(5)

const handleStudentDetails = (id) => {
  students.value.forEach((student) => {
    if (student.id == id) {
      router.push({ name: "students", params: { id: id } });
    }
  });
};

const searchedfiles = computed(() => {
  return students.value.filter((student) => student.sclid.match(search.value));
});
const users=ref([])
onMounted(async () => {
  students.value = await getPaginatedStudentFiles(currentPage.value);
  users.value=  listAllUsers()
  console.log(users.value)
});
const handleNext=async()=>{
  console.log('going to next');
  students.value = await getPaginatedStudentFiles(currentPage.value);
 

}

</script>

<style scoped></style>
