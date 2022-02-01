<template>
    <div id="bottom">
        <div id="copyright">
            Copyright © 2022 
            <a href="https://space.bilibili.com/34394509">FengLiuFeseliud</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "bottom"
    }
</script>

<style scoped>
    /* 底边栏 */
    #bottom {
        position: relative;
        height: 50px;
        opacity: var(--opacity);
        background-color: var(--main-background-color);
        box-shadow: 5px 5px 10px 5px var(--box-shadow);
    }

    /* 底边栏 copyright 样式 */
    #bottom > #copyright {
        position: absolute;
        left: 50%;
        margin-left: -200px;
        line-height: 50px;
        color: var(--main-font-color);
        font-size: 20px;
        text-align: center;
        width: 400px;
        height: 50px;
    }

    /* 底边栏 copyright 链接 */
    #bottom > #copyright > a {
        text-decoration: none;
    }

    #bottom > #copyright > a:hover {
        text-decoration: underline;
    }
</style>