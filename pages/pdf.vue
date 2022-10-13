<template>
    <div>
        <div class="flex flex-col w-full ">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="">
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
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="border-2 cursor-pointer"
                        
                      >
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          Data
                        </td>
                        <td
                          class="uppercase text px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                         
                          >
                          Data
                        </td>
                       
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          Data
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          Data
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          Data
                        </td>
                      
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                          
                        >
                          Data
                        </td>
                        <!-- <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                      >
                        {{student.status}}
                      </td> -->
                       
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
// import VueExcelEditor from 'vue3-excel-editor';
const jsondata=ref()
</script>

<style lang="scss" scoped>

</style>