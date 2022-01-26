<template>
    <BigTitle>
        <div id="big-index">
            <h1>还没想好放什么, 空空如也的...</h1>
            <h1>看看别人家的点歌台?</h1>
            <a href="https://live.bilibili.com/1360383">->茶叶_</a>
        </div>
    </BigTitle>
</template>

<script>
    import BigTitle from "../components/bigTitle.vue"

    export default {
        components: {
            BigTitle
        }
    }
</script>

<style scoped>
    #big-index {
        width: 100%;
        height: 500px;
    }

    #big-index * {
        text-align: center;
        color: #fff;
    }

    #big-index > h1 {
        margin-top: 200px;
        font-size: 40px;
    }

    #big-index > a {
        margin-top: 20px;
        font-size: 30px;
        display: block;
        color: pink;
    }

    #big-index > a:hover {
        color: #fff;
    }
    
</style>