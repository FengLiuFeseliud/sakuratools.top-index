<template>
    <Top></Top>
    <div id="index-main" class="clearfix">
        <slot></slot>
    </div>
</template>

<script>
    import Top from "../lan/top.vue"

    export default {
        components: {
            Top
        }
    }
</script>

<style scoped>
    /* 页面盒子 */
    #index-main {
        min-height: 800px;
        margin: 100px auto;
        margin-bottom: 50px;
        opacity: var(--opacity);
        color: var(--main-font-color);
        font-size: 18px;
        line-height: 32px;
    }

    #index-main > .last {
        float: left;
        margin-right: 0px;
    }
</style>