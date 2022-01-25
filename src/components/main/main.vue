<template>
    <div id="index-main">
        <Slist>
            <p>{{"今天是 "+timeStr}}</p>
            <p>{{wthrcdn}}</p>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=300 height=450 src="//music.163.com/outchain/player?type=0&id=7239327750&auto=1&height=430"></iframe>
        </Slist>
        <TextBox></TextBox>
        <Slist class="last">
            <h4>碧蓝动态</h4>
            <a target="_blank" v-for="item in blhx" :key="item" :href="item.url">{{set_text(item.text)}}<br></a>
        </Slist>
    </div>
</template>

<script>
    import axios from "axios"
    import Slist from "../lan/slist.vue"
    import TextBox  from "../lan/text_box.vue"
    export default {
        components: {
            Slist,
            TextBox
        },

        data(){
            return {
                timeStr: "",
                wthrcdn: "",
                blhx: [],
            }
        },

        mounted() {
            axios.get("https://api.sakuratools.top/info/day")
                .then(res => {
                    this.timeStr = res.data.data.timeStr;
                    this.wthrcdn = res.data.data.wthrcdn;
                })
            
            axios.get("https://api.sakuratools.top/info/blhx?offset=0&page=10&short=1")
                .then(res => {
                    this.blhx = res.data.data;
                })
        },

        methods: {
            set_text(text){
                if(text[0] == "#"){
                    text = text.split("\n", 3).slice(1, 3).join(" ");
                }
                return text.slice(0, 18) + "...";
            }
        }
    }
</script>

<style scoped>
    /* 页面盒子 */
    #index-main {
        min-height: 800px;
        margin: 100px auto;
        margin-bottom: 50px;
        opacity: 0.8;
        color: var(--main-font-color);
        font-size: 18px;
        line-height: 32px;
    }

    #index-main > .last {
        float: left;
        margin-right: 0px;
    }

    p /deep/ {
        padding: 0px 20px;
        font-size: 18px;
        line-height: 25px;
    }

    .last > h4 {
        text-align: center;
        color: var(--two-font-color);
        text-decoration: underline;
    }

    .last > a {
        font-size: 15px;
        color: var(--main-font-color);
        line-height: 25px;
        text-align: center;
        margin: 0 10px;
    }

    .last > a:hover {
        color: var(--two-font-color);
        text-decoration: underline;
    }
</style>