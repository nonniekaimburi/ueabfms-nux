<template>
    <div>
        <div class="flex flex-col w-full overflow-hidden">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
              <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div class="overflow-hidden">
                  <table class="w-full">
                    <thead class="border-2">
                      <tr>
                        <th v-for="th in tableHeader" :key="th"
                          scope="col"
                          class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                        >
                          {{th}}
                        </th>
                      
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="border-2 cursor-pointer"
                        v-for="td in tableData" :key="td"
                      >
                        
                        <td
                          class="uppercase text px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          {{ td.sclid }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          {{ td.Lastname }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          {{ td.Firstname }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                          {{ td.Middlename }}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                          
                        >
                          {{ td.school.slice(0, 20) }}
                        </td>
                        
                        <!-- <td
                        class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                      >
                        {{student.status}}
                      </td> -->
                        <td
                          class="px-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                            action
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
name:'table',
defineProps({
    columns:Array,
    entries:Array
})
const tableHeader=computed(()=>{
    return props.columns || []
    
})
const tableData=computed(()=>{
    return props.entries || []
})
</script>

<style lang="scss" scoped>

</style>