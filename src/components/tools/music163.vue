<template>
    <div id="music163"> 
        <span class="iconfont icon-zititubiao2you" @click="show_in = !show_in" src=""></span>
        <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=110 src="//music.163.com/outchain/player?type=0&id=7239327750&auto=1&height=90"></iframe>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                show_in: true
            }
        },

        methods:{
            show(){

            }
        }
    }
</script>

<style scoped>
    #music163 {
        position: fixed;
        z-index: 99;
        right: 25px;
        top: 80%;
    }

    #music163 > * {
        float: left;
    }

    #music163 > span {
        position: absolute;
        top: 50%;
        font-size: 50px;
        color: var(--main-font-color);
        margin-top: -22.5px;
        left: -40px;
        height: 55px;
        width: 55px;
    }
</style>