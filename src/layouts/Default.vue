<template>
    <div class="layout bg-gray-100">
        <Header v-if="page != 'auth'"/>
        <main class="content max-w-screen-xl m-auto p-10">
            <!-- <h1 class="py-10 px-5 text-xl text-bold">{{title}}</h1> -->
            <slot/>
        </main>
        <Footer v-if="page != 'auth'"/>
    </div>
</template>

<script>
import Header from "./Header";
import Footer  from "./Footer";

export default {
    name: "layout",
    components: {
        Header,
        Footer,
    },
    props: {
        page: String,
        title: String
    }
}
</script>

<style lang="scss">
.layout {
    .content {
        min-height: 600px;
    }
}
</style>