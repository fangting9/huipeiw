<template>
    <div>dateReport</div>
</template>

<script>
    //import router from "@/router";
    export default {
        name: "DateReport",
        created(){
            if (!window.sessionStorage.getItem('token') || window.sessionStorage.getItem('token') !== window.sessionStorage.getItem("murmur")){
                //router.push("/login")
            }
        },
    }
</script>

<style scoped>

</style>