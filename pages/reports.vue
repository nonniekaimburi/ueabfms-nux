<template>
  <div>
    <div class="flex flex-col w-full">
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
                    File
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    Format
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-2 cursor-pointer"
                  v-for="(report, index) in reports"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ index + 1 }}
                  </td>

                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r hover:bg-gray"
                  >
                    {{ report.title }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r flex justify-center items-center"
                  >
                    <button
                    @click="getAllStudentReports(report.id)"
                      type="button"
                      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2"
                    >
                      PDF
                    </button>
                    <button
                      type="button"
                      class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-2"
                    >
                      Excel
                    </button>
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
  // middleware: ["auth"]
});
const reports=ref([
    {
        id:1,
        title:"Files present"
    },
    {
        id:2,
        title:"Files Absent"
    },
    {
        id:3,
        title:"Files Without birth certificate"
    },
    {
        id:4,
        title:"Files without KCSE certificate"
    },
    {
        id:5,
        title:"Files without KCPE certificate"
    },
    {
        id:6,
        title:"Files without application form"
    }
])
const studentReport=ref([])
const getAllStudentReports=async(index)=>{
  if(index==3){
    studentReport.value= await getFilesWithoutBirth()
    console.log('birth')
  }else if(index==4){
    studentReport.value=await getFilesWithoutKcse()
    console.log('kcse')
  }else if(index==5){
    studentReport.value=await getFilesWithoutKcpe()
    console.log('kcpe')
  }else{
    console.log('not yet implemented')
  }
}

</script>

<style lang="scss" scoped></style>
