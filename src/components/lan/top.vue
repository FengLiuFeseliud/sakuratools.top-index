<template>
    <div id="top">
        <TopTitle></TopTitle>
        <Alist :tags="tags" :http_tags="http_tags"></Alist>
    </div>
</template>

<script>
    import TopTitle  from "../svue/top_title"
    import Alist from "../svue/alist"

    export default {
        data(){
            return {
                tags: [
                    {url:"/index", text:"Home"},
                    {url:"/tools/md", text:"小工具"},
                    {url:"/dynamic/blhx", text:"动态"},
                    {url:"/api/md", text:"本站api文档"},
                ],
                
                http_tags: [
                    {url:"https://skln.xyz", text:"skln"},
                    {url:"https://img.sakuratools.top", text:"img"},
                    {url:"https://github.com/FengLiuFeseliud", text:"github"},
                    {url:"https://space.bilibili.com/34394509", text:"bilibili"},
                ]
            }
        },

        components: {
            TopTitle,
            Alist
        }
    }
</script>

<style>
    /* 导航栏 */
    #top {
        height: 50px;
        width: 100%;
        position: fixed;
        top: 0px;
        left: 0px;
        z-index: 999;
        margin: 0 auto;
        background-color: var(--main-background-color);
        opacity: var(--opacity);
        box-shadow: 5px 5px 10px 5px var(--box-shadow);
    }

    #top > #nav {
        float: right;
    }

    /* 导航栏标签 */
    #top > #nav a  {
        line-height: 50px;
        font-weight: 700;
        padding: 0px 15px;
    }

</style>