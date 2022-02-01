<template>
    <Main>
        <Slist>
            <Alist :tags="tags"></Alist>
        </Slist>
        <DynamicList :api="api"></DynamicList>
    </Main>
</template>

<script>
    import Main from "../../components/svue/main.vue"
    import Slist from "../../components/lan/slist.vue"
    import Alist from "../../components/svue/alist.vue"
    import DynamicList from "../../components/svue/dynamicList.vue"

    export default {
        data(){
            return {
                tags: [
                    {"text": "碧蓝动态", "url": "/dynamic/blhx"}
                ]
            }
        },

        props:{
            api:{
                type: String,
            }
        },

        components:{
            Main,
            Slist,
            Alist,
            DynamicList
        },
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