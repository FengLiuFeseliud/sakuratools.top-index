<template>
    <button @click="add()">bigInputField</button>
</template>

<script>
    export default {
        methods:{
            add(){
                this.$emit("add", "test $emit")
            }
        }
    }
</script>

<style scoped>

</style>