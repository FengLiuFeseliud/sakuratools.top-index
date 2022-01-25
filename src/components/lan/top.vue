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
                    {url:"/api", text:"本站api文档"},
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
        opacity: 0.8;
    }

    /* 导航栏标签 */
    #top a  {
        float: left;
        line-height: 50px;
        font-weight: 700;
        padding: 0px 10px;
    }

</style>