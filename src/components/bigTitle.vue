<template>
    <div id="big-title">
        <STop></STop>
        <div id="title">
            <h1>Sakura<span>Tools.top</span></h1>
        </div>
        <Alist :tags="tags" :http_tags="http_tags"></Alist>
    </div>
    <slot></slot>
</template>

<script>    
    import Alist from "./svue/alist.vue"
    import STop from "./lan/sTop.vue"

    export default {

        // beforeCreate: function() {
        //     let body = document.getElementsByTagName("body")[0]
        //     body.setAttribute("style","background-attachment: scroll;");
        // },

        data(){
            return {
                tags: [
                    {text: " Home", url:"/index"},
                    {url:"/api/md", text:" 本站api文档"},
                ],

                http_tags: [
                    {url:"https://github.com/FengLiuFeseliud", text:" github"},
                ]
            }
        },

        components:{
            Alist,
            STop
        }
        
    }
</script>

<style>
    #big-title{
        width: 100%;
        height: 800px;
        opacity: var(--opacity);
        background-color: var(--main-background-color);
        color: var(--main-font-color);
    }

    #big-title > #title{
        width: 100%;
        height: 100px;
        padding-top: 200px;
        text-align: center;
        color: var(--two-font-color);
        font-size: 40px;
        text-shadow: 8px 8px 5px var(--box-shadow);
    } 

    #big-title > #title span{
        color: var(--main-font-color);
    }

    #big-title > #nav {
        width: 100%;
        height: 50px;
        text-align: center;
        margin-top: 30px;
        font-size: 20px;
        font-weight: 900;
        line-height: 50px;
    }

    #big-title > #nav a {
        display: inline-block;
        margin: 15px;
        width: 180px;
        height: 100%;
        border-radius: 10px;
        background-color: var(--two-background-color);
        box-shadow: 8px 8px 5px var(--box-shadow);
        transition: all 0.3s;
    }

    #big-title > #nav a:hover {
        transform: scale(1.2);
        text-decoration: underline;
    }
</style>