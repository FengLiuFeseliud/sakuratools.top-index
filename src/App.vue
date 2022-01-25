<template>
    <div>
        <Top></Top>
        <router-view></router-view>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Top from "./components/lan/top"
    import Bottom from "./components/lan/bottom"

    export default {
        data() {
            return {
                tags: [{text:"router", url:"/test"}]
            }
        },
        components: {
            Top,
            Bottom,
        }
    }
</script>

<style scoped>

</style>