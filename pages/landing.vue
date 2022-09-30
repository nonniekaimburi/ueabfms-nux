<template>
  <div>
    <div class="">
        <div class="flex justify-end px-4">
          
          
          <div class="w-full text-right">
          <router-link :to="{ path: '/addfile' }"
            ><button class=" px-4 right-0 bg-blue-600 py-2 rounded text-white">+ Add File</button></router-link>
        </div>
        </div>
        <div
          class="w-full flex justify-center items-center ml-auto mr-auto"
          v-for="(school, index) in schools"
          :key="index"
        >
          <router-link :to="{ }">
            <h4 class="font-normal px-4 py-2 hover:bg-blue-200 cursor-pointer">
              {{ school.name }}
            </h4>
          </router-link>
        </div>
       
      </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "admin",
});
const schools = ref([]);
onMounted(async()=>{
    schools.value= await getAllSchools()
})
</script>

<style lang="scss" scoped></style>
