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
    <div class="flex flex-col w-full ">
      <div class=" ">
        <div class=" inline-block w-full sm:px-6 lg:px-4">
          <div class="">
            <table class="w-full">
              <thead class="border-2">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
                  >
                    No.
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
                  >
                    Student Id
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
                  >
                    Last name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
                  >
                    First name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
                  >
                    Middle name
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
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
                    class="text-sm font-medium text-blue-600 px-3 py-4 text-left border-r"
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
                    class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="uppercase text px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    v-if="student.sclid.length > 11"
                    >
                    <nuxt-link :to="{name:'stude-id',params:{id:student.id}}">
                      {{ student.sclid.slice(0,11) }}...
                    </nuxt-link>
                  </td>
                  <td
                    class="uppercase text px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    v-else
                    >
                    <nuxt-link :to="{name:'stude-id',params:{id:student.id}}">
                      {{ student.sclid.slice(0,11) }}
                    </nuxt-link>
                  </td>
                  <td
                    class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.Lastname }}
                  </td>
                  <td
                    class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.Firstname }}
                  </td>
                  <td
                    class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ student.Middlename }}
                  </td>
                  <td
                    class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                    v-if="student.school.length > 21"
                  >
                    {{ student.school.slice(0, 20) }}...
                  </td>
                  <td
                    class="px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
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
                  <div class="px-2 text-sm font-normal py-2 w-20">
    
                    <div class="w-full text-right">
                   <Menu as="div" class="relative inline-block text-left">
                     <div>
                       <MenuButton
                         class="inline-flex w-full justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-black   "
                       >
                        <font-awesome-icon :icon="['fas','ellipsis-h']" class="cursor-pointer"/>
                         
                       </MenuButton>
                     </div>
               
                     <transition
                       enter-active-class="transition duration-100 ease-out"
                       enter-from-class="transform scale-95 opacity-0"
                       enter-to-class="transform scale-100 opacity-100"
                       leave-active-class="transition duration-75 ease-in"
                       leave-from-class="transform scale-100 opacity-100"
                       leave-to-class="transform scale-95 opacity-0"
                     >
                       <MenuItems
                         class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                       >
                         <div class="px-1 py-1">
                           <MenuItem v-slot="{ active }">
                             <router-link :to="{ name: 'retrieve-id', params: { id: student.id } }"
                               :class="[
                                 active ? 'bg-violet-500 text-black' : 'text-gray-900',
                                 'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                               ]"
                             >
                               
                               Retrieve
                             </router-link>
                           </MenuItem>
                           <MenuItem v-slot="{ active }">
                             <router-link :to="{ name: 'return-id', params: { id: student.id } }"
                               :class="[
                                 active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                 'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                               ]"
                             >
                                
                               Return
                             </router-link>
                           </MenuItem>
                         </div>
                         <div class="px-1 py-1">
                           <MenuItem v-slot="{ active }">
                             <router-link :to="{ name: 'history-id', params: { id: student.id } }"
                               :class="[
                                 active ? 'bg-violet-500 text-white' : 'text-gray-900',
                                 'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                               ]"
                             >
                                
                               History
                             </router-link>
                           </MenuItem>
                          
                         </div>
               
               
                       </MenuItems>
                     </transition>
                   </Menu>
                 </div>
                   </div>
                    
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
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';

definePageMeta({
    layout: "admin",
    middleware: ["auth"]
  });
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
