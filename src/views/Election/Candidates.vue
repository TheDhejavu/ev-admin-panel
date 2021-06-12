<template>
  <Layout title="Candidates">
     <div class="mt-5 p-5 mb-6">
       <div class="border-b border-gray-200 mb-10 relative">
          <h1 class="py-5 transition text-xl font-bold">Parties & Candidates</h1>
          <button type="submit" class="absolute right-0 flex top-4 justify-center bg-gray-100 p-2 px-5 rounded-lg tracking-wide
                                    font-bold  focus:outline-none border border-gray-200 focus:shadow-outline hover:bg-gray-300 cursor-pointer transition ease-in duration-300">
                 <i class="uil uil-plus"></i> <span class="pl-2">Add</span>
          </button>
       </div>
          
      <div class="flex flex-wrap">
        <div class="w-1/2">
          <div class="m-5">
            <div class="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-0">
                <p class="text-sm py-1 text-xl uppercase font-bold pl-2 mb-5 text-center leading-40">PDP</p>
                <!-- <p class="font-bold">  Candidate </p> -->
                <div class="">
                  
                  <span class="text-gray-900 text-xs">Fullname: </span>
                  <h2 class="text-sm py-1 text-4xl font-extrabold"> Tolu Mankinde</h2>
                  <div class="flex space-x-10 mt-5">
                    <div class="">
                      <span class="text-gray-900 text-xs">Position: </span>
                      <h2 > President </h2>
                    </div>
                    <div class="">
                      <span class="text-gray-900 text-xs">State: </span>
                      <p>Ekiti State</p>
                    </div>
                  </div>
                </div>
                <div class="flex space-x-4 mt-10">
                  <button type="submit" class="w-full flex justify-center bg-green-500 text-gray-100 p-2 px-5 rounded-lg tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-md cursor-pointer transition ease-in duration-300">
                    Edit
                  </button>
                  <button type="submit" class="w-full flex justify-center bg-red-500 text-gray-100 p-2 px-5 rounded-lg tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-md cursor-pointer transition ease-in duration-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="w-1/2">
          <div class="m-5">
            <div class="bg-white shadow-md rounded-lg p-4 flex flex-col justify-between leading-normal">
              <div class="mb-0">
                <p class="text-sm py-1 text-xl uppercase font-bold pl-2 mb-5 text-center  leading-40">PDP</p>
                <!-- <p class="font-bold">  Candidate </p> -->
                <div class="">
                  
                  <span class="text-gray-900 text-xs">Fullname: </span>
                  <h2 class="text-sm py-1 text-4xl font-extrabold"> Tolu Mankinde</h2>
                  <div class="flex space-x-10 mt-5">
                    <div class="">
                      <span class="text-gray-900 text-xs">Position: </span>
                      <h2 > President </h2>
                    </div>
                    <div class="">
                      <span class="text-gray-900 text-xs">State: </span>
                      <p>Ekiti State</p>
                    </div>
                  </div>
                </div>
                <div class="flex space-x-4 mt-10">
                  <button type="submit" class="w-full flex justify-center bg-green-500 text-gray-100 p-2 px-5 rounded-lg tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-md cursor-pointer transition ease-in duration-300">
                    Edit
                  </button>
                  <button type="submit" class="w-full flex justify-center bg-red-500 text-gray-100 p-2 px-5 rounded-lg tracking-wide
                                    font-semibold  focus:outline-none focus:shadow-outline hover:bg-red-600 shadow-md cursor-pointer transition ease-in duration-300">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
     </div>
  </Layout>
</template>

<script>
import Layout from "./components/layout";
export default {
    name: "candidate",
    components: {
      Layout
    }
}
</script>

<style>

</style>