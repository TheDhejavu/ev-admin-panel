<template>
  <Layout title="Elections">
      <div class="border-b border-gray-200 mb-10 relative">
          <h1 class="py-5 transition text-xl font-bold"> <i class="uil uil-user-check text-xl"></i>  Elections</h1>
          <button type="submit" class="absolute right-0 flex top-4 justify-center bg-gray-100 p-2 px-5 rounded-lg tracking-wide font-bold  focus:outline-none border border-gray-200 focus:shadow-outline hover:bg-gray-300 cursor-pointer transition ease-in duration-300">
                <i class="uil uil-plus"></i> 
                <span class="pl-2">Add</span>
          </button>
       </div>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
          <div class="m-3">
            <div class="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Secure & Safe
                
                </p>
                <p class="block text-green-700 pt-5 text-xs font-bold"> 60 days to go </p>
                <div class="text-gray-900 font-extrabold text-3xl py-2"> Nigeria Presidential Election</div>
                 <router-link to="/elections/hello" class="inline hover:underline pt-5 text-lg font-bold"> 10 candidates </router-link>
                <p class="text-gray-700 text-base"> The general Presidential election of the republic of nigeria</p>
                <div class="flex py-3 pt-16"> 
                  <div class="w-1/2">
                    <h2 class="text-sm  font-bold text-gray-700"> Election Start Date </h2>
                    <p class="text-gray-700 text-base">June 23 2021  </p>
                  </div>
                  <div class="w-1/2">
                    <h2 class="text-sm font-bold text-gray-700"> Election End Date </h2>
                    <p class="text-gray-700 text-base">June 23 2021  </p>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <button type="submit" class="relative w-full mb-5 flex justify-center bg-green-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-md cursor-pointer transition ease-in duration-300">
                      
                      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-green-400  group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      Start Accreditation
                  </button>
                  <button type="submit" class="w-full flex justify-center bg-red-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-md cursor-pointer transition ease-in duration-300">
                      Stop Accreditation
                  </button>
                </div >
                <div class="" hidden>
                  <button type="submit" class="w-full mb-5 flex justify-center bg-green-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-md cursor-pointer transition ease-in duration-300">
                      Start Election
                  </button>
                  <button type="submit" class="w-full flex justify-center bg-red-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-md cursor-pointer transition ease-in duration-300">
                      Stop Election
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
         <div class="w-full md:w-1/2 lg:w-1/3 xl:w-1/3">
          <div class="m-3">
            <div class="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Secure & Safe
                
                </p>
                <p class="block text-green-700 pt-5 text-xs font-bold"> 60 days to go </p>
                <div class="text-gray-900 font-extrabold text-3xl py-2"> Nigeria Presidential Election</div>
                 <router-link to="/elections/hello" class="inline hover:underline pt-5 text-lg font-bold"> 10 candidates </router-link>
                <p class="text-gray-700 text-base"> The general Presidential election of the republic of nigeria</p>
                <div class="flex py-3 pt-16"> 
                  <div class="w-1/2">
                    <h2 class="text-sm  font-bold text-gray-700"> Election Start Date </h2>
                    <p class="text-gray-700 text-base">June 23 2021  </p>
                  </div>
                  <div class="w-1/2">
                    <h2 class="text-sm font-bold text-gray-700"> Election End Date </h2>
                    <p class="text-gray-700 text-base">June 23 2021  </p>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="">
                  <button type="submit" class="relative w-full mb-5 flex justify-center bg-green-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-md cursor-pointer transition ease-in duration-300">
                      
                      <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                        <svg class="h-5 w-5 text-green-400  group-hover:text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      Start Accreditation
                  </button>
                  <button type="submit" class="w-full flex justify-center bg-red-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-md cursor-pointer transition ease-in duration-300">
                      Stop Accreditation
                  </button>
                </div >
                <div class="" hidden>
                  <button type="submit" class="w-full mb-5 flex justify-center bg-green-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-md cursor-pointer transition ease-in duration-300">
                      Start Election
                  </button>
                  <button type="submit" class="w-full flex justify-center bg-red-500 text-gray-100 p-4 px-10 rounded-lg tracking-wide
                                  font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-md cursor-pointer transition ease-in duration-300">
                      Stop Election
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default";
export default {
    name: "elections",
    components: {
      Layout
    }
}
</script>

<style>

</style>