<template>
    <div id="index-main" class="clearfix">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    /* 页面盒子 */
    #index-main {
        min-height: 800px;
        margin: 100px auto;
        margin-bottom: 50px;
        opacity: 0.8;
        color: var(--main-font-color);
        font-size: 18px;
        line-height: 32px;
    }

    #index-main > .last {
        float: left;
        margin-right: 0px;
    }
</style>