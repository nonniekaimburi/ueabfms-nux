<template>
  <div v-if="school">
    <h3 class="text-2xl font-normal px-6 py-6 text-orange-500">
      {{ school.name }} students
    </h3>
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
                    Status
                  </th>
                  <th
                    scope="col"
                    class="text-sm font-medium text-blue-600 px-6 py-4 text-left border-r"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-2"
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
                  >
                    {{ student.status }}
                  </td>
                  <td
                    class="px-2 whitespace-nowrap text-sm font-medium text-gray-900 border-r"
                  >
                    <router-link :to="{name:'retrieve-id',params:{id:student.id}}">
                      <font-awesome-icon
                        icon="fa-solid fa-print"
                        class="text-green-500 px-4 cursor-pointer py-2"
                      />
                    </router-link>
                    <router-link :to="{name:'return-id',params:{id:student.id}}">
                      <font-awesome-icon
                        icon="fa-solid fa-undo"
                        class="text-blue-500 px-4 cursor-pointer py-2"
                      />
                    </router-link>
                    <router-link :to="{name:'history-id',params:{id:student.id}}">
                      <font-awesome-icon
                        icon="fa-solid fa-archive"
                        class="text-orange-500 px-4 cursor-pointer py-2"
                      />
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
definePageMeta({
  layout: "admin",
});
const route = useRoute();
const school = ref(null);
const students = ref([]);
onMounted(async () => {
  school.value = await getSingleSchool(route.params.id);
  console.log("am schools page");
  students.value = await getStudentsToSpecificSchool(route.params.id);
});
</script>

<style lang="scss" scoped></style>
