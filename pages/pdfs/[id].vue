<template>
    <div>
        <div class="flex flex-col items-center justify-center mb-4" >
            <div class="mt-10">
                <img
              class="h-16 bg-gray-100 rounded-full"
              src="~/assets/images/ueablogo.png"
              alt="John Doe"
            />
            </div>
            <div class="">
                <h3 class="font-normal text-2xl text-black uppercase">University of Eastern Africa, Baraton</h3>
            </div>
            <div>
                <h3 class="font-normal text-2xl text-black uppercase">Files  {{title}}</h3>
            </div>
        </div>
        <div class="flex flex-col w-full ">
            <div class="overflow-x-auto">
              <div class=" inline-block w-full sm:px-6 lg:px-4">
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
                       
                       
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        class="border-2 cursor-pointer"
                        v-for="(report,index) in reports"
                        :key="index"
                      >
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                         {{index + 1}}
                        </td>
                        <td
                          class="uppercase text px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                         
                          >
                          {{report.sclid}}
                        </td>
                       
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                        {{report.Lastname}}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                        {{report.Firstname}}
                        </td>
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                        >
                        {{report.Middlename}}
                        </td>
                      
                        <td
                          class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                          
                        >
                        {{report.school}}
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
// import VueExcelEditor from 'vue3-excel-editor';
const jsondata=ref()
const route=useRoute()
const reports=ref([])
const histos=ref([])

const val=route.params.id
const title=ref('')


onMounted(async()=>{
    if(val==1){
      title.value="Present"
      reports.value=await getAllStudentFiles()
    }else if(val==2){
      title.value="Absent"
        console.log('not yet');
    }else if(val==3){
      title.value="Without Birth certificates"
        reports.value=await getFilesWithoutBirth()
    }else if(val==4){
      title.value="Without KCSE certificates"
        reports.value=await getFilesWithoutKcse()
    }else if(val==5){
        reports.value=await getFilesWithoutKcpe()
      title.value="Without KCPE certificates"
    }else if(val==6){
        reports.value=await getFilesWithouApplication()
      title.value="Without Application form"
    }
    
})
</script>

<style lang="scss" scoped>

</style>