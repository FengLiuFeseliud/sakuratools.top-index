<template>
    <Main>
        <Slist>
            <Alist :tags="tags"></Alist>
        </Slist>
        <Box>
            <slot></slot>
        </Box>
    </Main>
</template>

<script>
    import Main from "../../components/svue/main.vue"
    import Slist from "../../components/lan/slist.vue"
    import Alist from "../../components/svue/alist.vue"
    import Box from "../../components/svue/box.vue"

    export default {
        data(){
            return {
                tags: [
                    {text: "更新记录", url: "/tools/md"},
                    {text: "skln - 短链接生成工具", url: "/tools/skln"},
                ]
            }
        },

        components: {
            Main,
            Slist,
            Alist,
            Box
        }
    }
</script>

<style scoped>

</style>