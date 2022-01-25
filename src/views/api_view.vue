<template>
    <Main>
        <Slist>
            <Alist :tags="tags"></Alist>
        </Slist>
        <TextBox>
            <slot>
                
            </slot>
        </TextBox>
    </Main>
</template>

<script>
    import Slist from "../components/lan/slist.vue"
    import Main from "../components/svue/main.vue"
    import TextBox  from "../components/svue/text_box.vue"
    import Alist from "../components/svue/alist.vue"

    export default {
        data(){
            return {
                tags: [
                    {text:"API错误码", url:"/api"},
                    {text:"图床", url:"/api/img"},
                    {text:"短链接", url:"/api/skln"},
                    {text:"直链获取 - pixiv", url:"/api/pixiv"},
                    {text:"直链获取 - bilibili", url:"/api/bilibili"},
                ]
            }
        },

        components:{
            Slist,
            TextBox,
            Alist,
            Main
        }
    }
</script>

<style>

    #index-main > .slist > #nav > a {
        display: block;
        height: 50px;
        line-height: 50px;
        padding-left: 30px;
    }

    #index-main > .slist > #nav > a.router-link-exact-active {
        background-color: var(--two-background-color);
        color: var(--hover-font-color);
    }
</style>