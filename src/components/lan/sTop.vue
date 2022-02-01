<template>
    <div id="sTop">
        <a href="https://v3.cn.vuejs.org/">Vue3</a>
        <a href="https://live.bilibili.com/5545364">直播间</a>
        <a href="https://space.bilibili.com/34394509">FengLiuFeseliud</a>
        <a href="https://www.bilibili.com/video/BV1Fq4y1A73M">skln的使用</a>
    </div>
</template>

<script>

</script>

<style scoped>
    #sTop {
        float: left;
        width: 100%;
        height: 50px;
    }

    #sTop > a{
        float: right;
        line-height: 50px;
        font-size: 18px;
        padding: 0px 12px;
        color:var(--main-font-color);
    }

    #sTop > a:hover{
        color: var(--two-font-color);
        text-decoration: underline;
    }
</style>