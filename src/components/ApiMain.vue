<template>
    <div>
        <Top></Top>
        <Main></Main>
        <Bottom></Bottom>
    </div>
</template>

<script>
    import Top from "./lan/top"
    import Bottom from "./lan/bottom"
    import Main from "./main/api_main"

    export default {
        data() {
            return {
                
            }
        },
        components: {
            Top,
            Bottom,
            Main
        }
    }
</script>

<style scoped>

</style>