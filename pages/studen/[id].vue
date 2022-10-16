

<template>
    <div v-if="student">
      <div>
        <p class="text-xl text-center font-bold">Students <span class="text-primary">Details</span></p>
      </div>
      <div class="flex justify-between px-4">
        <div class="border rounded p-8 flex flex-col gap-2">
          <p class="text-center font-bold">Student Details</p>
          <div>
            <p class="capitalize font-medium text-slate-600">
              Student ID:
              <span class="font-normal text-slate-900 px-4 "
                >{{ student.sclid }}</span
              >
            </p>
            <div>
              <p class="capitalize font-medium text-slate-600">
                Last Name:
                <span class="font-normal text-slate-900 px-4"
                  >{{ student.Lastname }}</span
                >
              </p>
            </div>
            <div>
              <p class="capitalize font-medium text-slate-600">
                First Name:
                <span class="font-normal text-slate-900 px-4"
                  >{{ student.Firstname }}</span
                >
              </p>
            </div>
            <div>
              <p class="capitalize font-medium text-slate-600">
                Middle Name:
                <span class=" text-slate-900 px-4 font-normal "
                  >{{ student.Middlename }}</span
                >
              </p>
            </div>
            <div>
              <p class="capitalize font-medium text-slate-600">
                School:
                <span class="px-4 text-slate-900 font-normal"
                  >{{ student.school }}</span
                >
              </p>
            </div>
            <div>
              <p class="capitalize font-medium text-slate-600">
                Status:
                <span class="px-4 text-slate-900 font-normal"
                  >{{ student.status}}</span
                >
              </p>
            </div>
            <div>
              <p class="capitalize font-medium text-slate-600">
                Location:
                <span class="px-4 text-slate-900 font-normal"
                  >{{ student.Location}}</span
                >
              </p>
            </div>
          </div>
        </div>
        <div class="border rounded p-8">
          <p class="text-center font-bold">Forms</p>
          <div>
            <p class="capitalize font-medium text-slate-600">
              KCPE Certificate:
              <span class="uppercase text-md font-semibold underline text-green-500"
                >{{ student.kcpe}}</span
              >
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
              KCSE Certificate:
              <span class="uppercase text-md font-semibold underline text-red-500">{{ student.kcse}}</span>
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
             Birth Certificate:
              <span class="uppercase text-md font-semibold underline text-green-500"
                >{{ student.birthcert}}</span
              >
            </p>
          </div>
          <div>
            <p class="capitalize font-medium text-slate-600">
              Application Form:
              <span class="uppercase text-md font-semibold underline text-red-500">{{ student.appform}}</span>
            </p>
          </div>
        </div>
      </div>
      <div>
        <br><router-link :to="{ path: '/student' }"><button class="bg-blue-700 text-white font-normal py-2 px-2 ml-10 mt-4">Go Back</button></router-link>
      </div>
    </div>
  </template>
  <script setup>
  definePageMeta({
    layout: "normal",
    // middleware: ["auth"]
  });
  const student=ref(null)
  
  const route=useRoute()
  onMounted(async()=>{
    student.value=await getSingleStudent(route.params.id)
    console.log(student.value)
  })
  </script>
  
  
  