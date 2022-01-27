<template>
    <DynamicView :dynamic_list="dynamic_list"></DynamicView>
</template>

<script>
    import axios from "axios"
    import DynamicView from "../dynamic_view.vue"

    export default {

        data(){
            return {
                dynamic_list: []
            }
        },

        components:{
            DynamicView
        },

        mounted() {
            axios.get("https://api.sakuratools.top/info/blhx?offset=0&count=10")
                .then(res => {
                    this.dynamic_list = res.data.data;
                })
        },
    }
</script>

<style scoped>

</style>