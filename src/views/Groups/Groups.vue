<template>
  <Layout>
    <div class="border-b border-gray-200 mb-10 relative">
          <h1 class="py-5 transition text-xl font-bold"><i class="uil uil-user-circle text-xl"></i>  Consensus Group</h1>
          <button type="submit" class="absolute right-0 flex top-4 justify-center bg-gray-100 p-2 px-5 rounded-lg tracking-wide
                                    font-bold  focus:outline-none border border-gray-200 focus:shadow-outline hover:bg-gray-300 cursor-pointer transition ease-in duration-300">
                <i class="uil uil-plus"></i> 
                <span class="pl-2">Add</span>
          </button>
       </div>
    <div class="bg-white relative overflow-hidden mb-8">
      <div class="rounded-t-xl overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-100 p-10">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="w-1/6 px-6 py-4 text-emerald-600">S/N</th>
              <th class="w-1/4 px-6 py-4 text-emerald-600">Name</th>
              <th class="w-1/2 px-6 py-4 text-emerald-600">Public Address</th>
              <th class="w-1/4 px-6 py-4 text-emerald-600">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">1</td>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">Republic of Biafra</td>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">MIIBfDCCASGgAwIBAgIQY0CXerxuM+EhTbpVxxLRKjAKBggqhkjO</td>
              <td class="cursor-pointer hover:bg-gray-100 transition flex border border-emerald-500 px-6 py-4 text-emerald-600 font-medium"> <i class="uil uil-trash-alt"></i> Remove</td>
            </tr>
            <tr class="bg-emerald-200">
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">2</td>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">Northern People of ed</td>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">MIIBfDCCASGgAwIBAgIQY0CXerxuM+EhTbpVxxLRKjAKBggqhkjO</td>
              <td class="cursor-pointer hover:bg-gray-100 transition flex border border-emerald-500 px-6 py-4 text-emerald-600 font-medium"><i class="uil uil-trash-alt"></i> Remove</td>
            </tr>
            <tr>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">3</td>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">Odude Republic</td>
              <td class="border border-emerald-500 px-6 py-4 text-emerald-600 font-medium">MIIBfDCCASGgAwIBAgIQY0CXerxuM+EhTbpVxxLRKjAKBggqhkjO</td>
              <td class="cursor-pointer hover:bg-gray-100 transition flex border border-emerald-500 px-6 py-4 text-emerald-600 font-medium"> <i class="uil uil-trash-alt inline"></i> Remove</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "@/layouts/Default";
export default {
    name: "groups",
    components: {
      Layout
    }
}
</script>

<style>

</style>