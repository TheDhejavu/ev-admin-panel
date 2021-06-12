<template>
  <Layout title="Dashboard">
      <div class="flex flex-wrap">
        <div class="w-1/2">
          <div class="m-5">
            <div class="bg-green-500 shadow-md rounded-lg p-4 pb-0 flex flex-col justify-between leading-normal">
              <div class="mb-2 p-5">
                <p class="text-sm text-white-600 flex items-center">
                  <svg class="fill-current text-white-100 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Secure & Safe
                </p>
                <div class="text-white-900 font-extrabold text-2xl py-2 mb-2">Elections</div>
                <h1 class="text-white-600 uppercase leading-50 text-6xl pb-2 font-extrabold"> 100+ </h1>
                 <router-link to="/elections" type="submit" class="mt-10 w-full flex justify-center bg-white p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-300 shadow-lg cursor-pointer transition ease-in duration-300">
                    Open
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div class="w-1/2">
          <div class="m-5">
            <div class="bg-green-500 shadow-md rounded-lg p-4 pb-0 flex flex-col justify-between leading-normal">
              <div class="mb-2 p-5">
                <p class="text-sm text-white-600 flex items-center">
                  <svg class="fill-current text-white-100 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Secure & Safe
                </p>
                <div class="text-white-900 font-extrabold text-2xl py-2 mb-2">Consesus Groups</div>
                <h1 class="text-white-600 uppercase leading-50 text-6xl pb-2 font-extrabold"> 100+ </h1>
                <router-link to="/consesus-group" type="submit" class="mt-10 w-full flex justify-center bg-white p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-300 shadow-lg cursor-pointer transition ease-in duration-300">
                    Open
                </router-link>
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
    name: "dashboard",
    components: {
      Layout
    }
}
</script>

<style>

</style>