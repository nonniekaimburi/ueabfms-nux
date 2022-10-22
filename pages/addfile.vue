<template>
  <!-- correct styling -->
  <form>
    <p class="text-xl text-center font-bold">
      Add <span class="text-primary">File</span>
    </p>
      <p class="text-red-600 text-lg font-normal" v-if="errorMsg">Some required fields have not been field up</p>
    <div class="flex">
      <div class="m-2 bg-white border rounded-md" id="custome">
        <div class="px-4">
          <div class="flex justify-between">
            <div class="mb-4 w-full mt-2">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                
                Student ID:

              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="s_sclid"
                placeholder="Student Id"
              />
            </div>
          </div>
          <div class="flex justify-between">
            <div class="flex justify-between">
              <div class="mb-4 w-full">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  First Name:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="s_firstname"
                  placeholder="Student Id"
                />
              </div>

              <div class="mb-4 w-full ml-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Middle name:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="s_middlename"
                  placeholder="Student Lastname"
                />
              </div>
              <div class="mb-4 w-full ml-4">
                <label class="block text-gray-700 text-sm mb-2" for="username">
                  Last name:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="s_lastname"
                  placeholder="Student Lastname"
                />
              </div>
            </div>
          </div>
          <!-- !category and brand -->
          <div class="flex justify-between">
            <div class="mb-4 w-full pl-1 pr-2">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Location:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="s_location"
                placeholder="Location"
              />
            </div>
            <div class="w-full">
              <div class="mb-4 w-full">
                <label class="block text-gray-700 text-sm mb-2" for="status">
                  School:
                </label>
                <select
                v-model="s_school"
                  class="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  aria-label="Default select example"
                >
                  <option class="disabled" value="">
                    Select the school here.
                  </option>
                  <option
                    v-for="(school, index) in schools"
                    :key="index"
                    :value="school.name"
                  >
                    {{ school.name }}
                  </option>
                </select>
              </div>
            </div>

            <!-- !end of category and brand -->
          </div>
        </div>
      </div>
      <div class="bg-white m-2 h-min border rounded-lg" id="rightCustome">
        <h3 class="px-4 text-purple-900 text-sm py-2">
          Available forms
        </h3>
        <div class="px-4">
          <div class="mb-2 mx-2 flex flex-row items-center">
            <label class="text-gray-700 text-sm" for="username">
              KCPE Certificate
            </label>
            <input
              type="checkbox"
              v-model="s_kcpe"
              class="mx-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="mb-2 mx-2 flex flex-row items-center">
            <label class="text-gray-700 text-sm" for="username">
              KCSE Certificate
            </label>
            <input
              type="checkbox"
              v-model="s_kcse"
              class="mx-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="mb-2 mx-2 flex flex-row items-center">
            <label class="text-gray-700 text-sm" for="username">
              Birth Certificate
            </label>
            <input
              type="checkbox"
              v-model="s_birthcert"
              class="mx-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
          </div>
          <div class="mb-2 mx-2 flex flex-row items-center">
            <label class="text-gray-700 text-sm" for="username">
              Application Form
            </label>
            <input
              type="checkbox"
              v-model="s_appform"
              class="mx-2 w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              placeholder=""
            />
          </div>
          <p class="text-center font-bold">Additional Forms</p>
          <div class="flex justify-between">
            <div class="mb-4 w-full pl-1 pr-2">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Additionnal:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="s_addition"
                placeholder="addition"
              />
            </div>
            <div class="w-full">
              <div class="mb-4 w-full">
                <label class="block text-gray-700 text-sm mb-2" for="status">
                  Addition 1:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="s_addition1"
                  placeholder="addition 1"
                />
              </div>
            </div>

            <!-- !end of category and brand -->
          </div>
          <div class="flex justify-between">
            <div class="mb-4 w-full pl-1 pr-2">
              <label class="block text-gray-700 text-sm mb-2" for="username">
                Additionnal 3:
              </label>
              <input
                class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-model="s_addition2"
                placeholder="addition 3"
              />
            </div>
            <div class="w-full">
              <div class="mb-4 w-full">
                <label class="block text-gray-700 text-sm mb-2" for="status">
                  Addition 4:
                </label>
                <input
                  class="appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  v-model="s_addition3"
                  placeholder="addition 4"
                />
              </div>
            </div>

            <!-- !end of category and brand -->
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-start mt-2 mb-2">
      <button
        @click="handleAddStudent"
        type="button"
        class="inline-block px-6 py-2.5 bg-green-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-700 active:shadow-lg transition duration-150 ease-in-out"
      >
        Save
      </button>
    </div>
  </form>
  <!-- !correct styling -->
</template>
<script setup>

definePageMeta({
  layout: "admin",
  middleware: ["auth"]
});

const router = useRouter();

const schools = ref([]);
const s_sclid = ref(null);
const s_addition = ref("");
const s_addition1 = ref("");
const s_addition2 = ref("");
const s_addition3 = ref("");
const s_appform = ref("");
const s_kcpe = ref("");
const s_kcse = ref("");
const s_birthcert = ref("");
const s_firstname = ref(null);
const s_lastname = ref(null);
const s_middlename = ref(null);
const s_location = ref(null);
const s_school = ref(null);

const errorMsg=ref(false)

const handleAddStudent = async () => {
  console.log("clicked");
  if(s_sclid.value && s_lastname.value && s_firstname.value && s_middlename.value && s_school.value && s_location.value){
    await addNewStudentFile(
      s_sclid.value,
      s_lastname.value,
      s_firstname.value,
      s_middlename.value,
      s_school.value,
      s_location.value,
      s_addition.value,
      s_addition1.value,
      s_addition2.value,
      s_addition3.value,
      s_kcpe.value,
      s_kcse.value,
      s_birthcert.value,
      s_appform.value
    );
    router.push("/tableview");
    console.log("clicked after if");
    errorMsg.value=false
  }else{
    
    console.log('empty fields')
   errorMsg.value=true
    console.log(s_school.value);
  }
  
};
onMounted(async () => {
  schools.value = await getAllSchools();
});
</script>
<style scoped>
#custome {
  width: 32rem;
}
#rightCustome {
  width: 32rem;
}
</style>
