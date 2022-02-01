<template>
    <div>
        <router-view></router-view>
        <GoTop></GoTop>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Bottom from "./components/lan/bottom"
    import GoTop from "./components/tools/goTop.vue"

    export default {
        data() {
            return {
                tags: [{text:"router", url:"/test"}],
            }
        },
        components: {
            Bottom,
            GoTop
        }
    }
</script>

<style scoped>

</style>