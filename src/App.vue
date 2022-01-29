<template>
    <div>
        <router-view></router-view>
        <Music></Music>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Bottom from "./components/lan/bottom"
    import Music from "./components/tools/music163.vue"

    export default {
        data() {
            return {
                tags: [{text:"router", url:"/test"}],
            }
        },
        components: {
            Bottom,
            Music
        }
    }
</script>

<style scoped>

</style>