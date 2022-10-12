<template>
  <div>
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm ml-auto mr-auto">
        <h3 class="font-normal px-4 py-3 text-blue-500">Add a user</h3>
      <form>
        <div class="form-group mb-6">
          <label
            for="exampleInputEmail1"
            class="form-label inline-block mb-2 text-gray-700"
            >Full Name:</label
          >
          <input
          v-model="name"
            type="text"
            class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="e.g Grace Kaimburi"
          />
        </div>
        <div class="form-group mb-6">
            <label
              for="exampleInputEmail1"
              class="form-label inline-block mb-2 text-gray-700"
              >Email:</label
            >
            <input
            v-model="email"
              type="email"
              class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
              placeholder="e.g abc@ueab.ac.ke"
            />
          </div>
        <button
        @click="handleSubmit"
          type="button"
          class="px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Save
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
  // middleware: ["auth"]
});
const name=ref('')
const email=ref('')
const handleSubmit=async()=>{
    if(name.value && email.value){
        console.log(name.value)
    }else{
        console.log('should not be empty')
    }
}
</script>

<style lang="scss" scoped></style>
