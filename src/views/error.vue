<template>
    <Main>
        <div id="error">
            <h1>404 / 403!</h1>
            <p>1. 没有这个地址, 请检查拼写</p>
            <p>2. 无权访问这个地址</p>
            <router-link to="/">返回主页</router-link>
        </div>
    </Main>
</template>

<script>
    import Main from "../components/svue/main.vue"

    export default {
        components:{
            Main
        }
    }
</script>

<style scoped>
    #error {
        padding: 20px;
        margin: 210px auto;
        width: 450px;
        height: 300px;
        opacity: var(--opacity);
        background-color: var(--main-background-color);
        color: var(--main-font-color);
    }

    #error a {
        display: block;
        margin: 0px auto;
        margin-top: 120px;
        width: 200px;
        height: 50px;
        background-color: var(--two-background-color);
        color: var(--hover-font-color);
        text-align: center;
        line-height: 50px;
    }

    #error a:hover{
        background-color: var(--main-background-color);
        color: var(--two-font-color);
    }
</style>