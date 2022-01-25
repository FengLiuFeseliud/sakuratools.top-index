<template>
    <div id="text-box">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style>
    /* 页面盒子文本区 */
    #text-box{
        float: left;
        padding: 20px;
        min-height: 760px;
        width: 760px;
        margin-right: 59px;
        background-color: var(--main-background-color);
    }

    /* 页面盒子H2 */
    #text-box h2 {
        text-indent: 0em;
        margin-bottom: 10px;
    }

    /* 页面盒子H3 */
    #text-box h3 {
        text-indent: 0em;
        margin-bottom: 5px;
    }

    /* 页面盒子img */
    #text-box img {
        width: 760px;
        min-height: 0px;
    }

    #text-box > span {
        text-align: left;
        line-height: 30px;
        text-indent: 2em;
    }
</style>