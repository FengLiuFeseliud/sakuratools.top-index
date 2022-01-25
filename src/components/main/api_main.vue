<template>
    <div id="main">
        <Slist></Slist>
        <TextBox></TextBox>
    </div>
</template>

<script>
    import Slist from "../lan/slist.vue"
    import TextBox  from "../lan/text_box.vue"
    export default {
        name:"main",
        components: {
            Slist,
            TextBox
        }
    }
</script>

<style scoped>
    /* 页面盒子 */
    #main {
        min-height: 800px;
        margin: 100px auto;
        margin-bottom: 50px;
        opacity: 0.8;
        color: var(--main-font-color);
        font-size: 18px;
        line-height: 32px;
    }

    #main > * {
        float: left;
        margin-right: 59px;
        background-color: var(--main-background-color);
    }
</style>