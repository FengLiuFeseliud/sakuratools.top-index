<template>
    <div>
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Bottom from "./components/lan/bottom"

    export default {
        data() {
            return {
                tags: [{text:"router", url:"/test"}]
            }
        },
        components: {
            Bottom
        }
    }
</script>

<style scoped>

</style>