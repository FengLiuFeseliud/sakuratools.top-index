<template>
    <Main>
        <Slist>
            <p class="Slist-p" style="padding-top: 20px;">{{timeStr}}</p>
            <p class="Slist-p">{{wthrcdn}}</p>
            <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=300 height=450 src="//music.163.com/outchain/player?type=0&id=7239327750&auto=1&height=430"></iframe>
        </Slist>
        <TextBox>
            <span>
                <h2>限时大红主题()</h2>
                <router-link to="/tools/skln">skln 短链接图形界面开放了!</router-link>
                <h3>本站不定时更新各种 api 各站 api 处理 小工具</h3>
                <a href="https://frp.104300.xyz/">本站使用 FRP 进行反向代理</a>
                <h3>服务器每周一 三点进行重启 服务会短暂不可用</h3>
                <h3>前端第一个版本 v0.1.0更新了!</h3>
                <h3>本站完全开源 如下</h3>
                <a href="https://github.com/FengLiuFeseliud/api.sakurtools.top-api">站点后端 - github</a><br>
                <a href="https://github.com/FengLiuFeseliud/sakuratools.top-index">站点前端 - github</a>
            </span>
        </TextBox>
        <Slist style="margin-right: 0px;" class="last">
            <h4 style="padding-top: 20px;">碧蓝动态</h4>
            <a target="_blank" v-for="item in blhx" :key="item" :href="item.url">{{set_text(item.text)}}<br></a>
            <router-link to="/dynamic/blhx" id="link-blhx">查看详细...</router-link>
        </Slist>
    </Main>
</template>

<script>
    import axios from "axios"
    import Main from "../components/svue/main.vue"
    import Slist from "../components/lan/slist.vue"
    import TextBox  from "../components/svue/text_box.vue"

    export default {
        components: {
            Slist,
            TextBox,
            Main
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
                    this.timeStr = "今天是 " + res.data.data.timeStr;
                    this.wthrcdn = res.data.data.wthrcdn;
                })
            
            axios.get("https://api.sakuratools.top/info/blhx?offset=0&count=10&short=1")
                .then(res => {
                    this.blhx = res.data.data.list;
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

<style>

    .Slist-p {
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

    .last > #link-blhx {
        display: block;
        width: 100px;
        height: 30px;
        background-color: var(--two-background-color);
        color: var(--two-font-color);
        margin: 10px auto;
        border-radius: 5px;
        transition: all 0.3s;
        box-shadow: 3px 3px 10px 3px var(--box-shadow);
    }

    .last > #link-blhx:hover {
        color: var(--hover-font-color);
        transform: scale(1.1);
        box-shadow: 5px 5px 10px 5px var(--box-shadow);
    }
</style>
