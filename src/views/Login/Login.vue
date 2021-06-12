<template>
<Layout page="auth">
  <!-- component -->

<div class="relative bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-no-repeat bg-cover relative items-center"
	>
	
	<div class="max-w-md py-20 w-full space-y-8 p-10 bg-white rounded-xl z-10">
		<div class="text-center">
			<h2 class="mt-6 text-3xl font-extrabold text-gray-900">
				Welcome Back!
			</h2>
			<p class="mt-2 text-sm text-gray-600">Please sign in to your account</p>
		</div>
		
		<div class="flex items-center justify-center space-x-2">
			<span class="h-px w-16 bg-gray-300"></span>
			<span class="text-gray-500 font-normal">Admin Panel</span>
			<span class="h-px w-16 bg-gray-300"></span>
		</div>
		<form class="mt-8 space-y-6" action="#" method="POST">
			<input type="hidden" name="remember" value="true">
			<div class="relative">
				<div class=" hidden absolute right-0 mt-4"><svg xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
					</svg>
        </div>
				<label class="text-sm font-bold text-gray-700 tracking-wide">Email</label>
				<input class=" w-full text-base py-2 border-b border-gray-300 focus:outline-none focus:border-green-500" type="" placeholder="mail@gmail.com" value="mail@gmail.com">
      </div>
			<div class="mt-8 content-center">
				<label class="text-sm font-bold text-gray-700 tracking-wide">
					Password
				</label>
				<input class="w-full content-center text-base py-2 border-b border-gray-300 focus:outline-none focus:border-green-500" type="" placeholder="Enter your password" value="*****|">
      </div>
			<div class="flex items-center justify-between">
					<div class="flex items-center">
						<input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 bg-green-500 focus:ring-green-400 border-gray-300 rounded">
						<label for="remember_me" class="ml-2 block text-sm text-gray-900">
                            Remember me
                        </label>
					</div>
				<div class="text-sm">
					<a href="#" class="font-medium text-green-500 hover:text-green-500">
								Forgot your password?
					</a>
				</div>
			</div>
			<div>
				<button type="submit" class="w-full flex justify-center bg-green-500 text-gray-100 p-4  rounded-full tracking-wide
                                font-semibold  focus:outline-none focus:shadow-outline hover:bg-green-600 shadow-lg cursor-pointer transition ease-in duration-300">
                    Sign in
                </button>
			</div>
			
		</form>
	</div>
</div>
</Layout>
</template>

<script>
import Layout from "../../layouts/Default";

export default {
  name: "Login",
  components: {
    Layout
  }
}
</script>

<style>

</style>