<template>
  <div class="pt-10 px-4">
    <h3 class="text-center px-4 text-lg text-orange-600 font-normal">Student History</h3>
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
                    No.
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
                    By
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
                <tr
                  class="border-2 cursor-pointer"
                  v-for="(student, index) in students"
                  :key="index"
                >
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    {{ index + 1 }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    <ul>
                      <li
                        v-for="(file, index) in student.file"
                        :key="index"
                        class="text-sm font-normal text-gray-600"
                      >
                        Retrieved {{ file }}
                      </li>
                    </ul>
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                  >
                    {{ student.user }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                  >
                    {{ student.time.toDate().toDateString() }}
                    {{ student.time.toDate().toLocaleTimeString() }}
                  </td>
                  <td
                    class="px-6 py-4 whitespace-nowrap text-sm font-normal text-gray-600 border-r"
                  >
                    {{ student.location }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <br /><router-link  :to="{ path: '/tableview' }" class="bg-blue-600 text-white text-sm px-2 py-2 rounded">Go Back</router-link >
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  middleware: ["auth"]
});

const students = ref([]);
const route = useRoute();

onMounted(async () => {
  students.value = await getHistoryForAStudent(route.params.id);
});
</script>
