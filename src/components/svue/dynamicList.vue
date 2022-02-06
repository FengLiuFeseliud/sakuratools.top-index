<template>
    <div id="dynamic-list">
        <div class="dynamic" v-for="item in dynamic_list" :key="item" :href="item.url">
            <a :href="item.url">
                <div class="user">
                    <img :src="item.user_head">
                    <span>{{ item.user }}</span>
                </div>
                <div class="text" v-html="set_text(item.text)"></div>
            </a>
            <div class="img-list clearfix">
                <img v-for="img in set_img_list(item.img)" :key="img" :src="img">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios"

    export default {

        data(){
            return{
                dynamic_list: [],
                offset: 0,
                max_count: 0,
                link_in:false,
                oldClientHeight: 0
            }
        },

        props:{
            api:{
                type: String
            }
        },

        mounted(){
            this.getList()
            window.addEventListener("scroll", this.scroll)
        },

        unmounted(){
            window.removeEventListener("scroll", this.scroll)
        },

        updated(){
            this.link_in = false
        },

        methods: {

            getList(){
                if(!this.link_in){
                    if(this.max_count == 0 || this.offset <= this.max_count){
                        this.link_in = true
                        axios.get(this.api + "?offset="+this.offset+"&count=10")
                            .then(res => {
                                this.max_count = res.data.data.count
                                this.dynamic_list = [...this.dynamic_list, ...res.data.data.list]
                            })
                        this.offset += 10
                    }
                }
            },

            scroll(){
                let scroll = document.documentElement.scrollTop || document.body.scrollTop
                if(scroll > document.body.clientHeight - window.innerWidth){
                    this.getList()
                }
            },
            
            set_text(text){
                let text_list = text.split("\n")
                let text_html = ""
                for(let len = 0; len < text_list.length; len++){
                    text_html += "<span>" + text_list[len] + "<br></span>"
                }

                return text_html
            },

            set_img_list(img){
                let img_list = []
                let img_split_data = img.split(",")
                for(let len = 0; len < img.length; len++){
                    if(img_split_data[len] == undefined){
                        continue
                    }
                    img_list.push(img_split_data[len].split("@")[0] + "@0x0x0.8x80")
                }
                return img_list
            }
        },

    }
</script>

<style scoped>

    /* 页面盒子文本区 */
    #dynamic-list{
        float: left;
        min-height: 760px;
        width: 760px;
        margin-right: 59px;
    }

    .dynamic{
        position: relative;
        display: block;
        width: 100%;
        margin-bottom: 35px;
        padding: 20px;
        background-color: var(--main-background-color);
        box-shadow: 5px 5px 10px 5px var(--box-shadow);
        border-radius: 20px;
        transition: all 0.3s;
    }

    .dynamic:hover{
        transform: scale(1.02);
        box-shadow: 7px 7px 10px 7px var(--box-shadow);
    }

    .user > span {
        position: absolute;
        left: 80px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        color: var(--main-font-color);
    }

    .user > img {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        box-shadow: 1px 1px 5px 2px var(--box-shadow);
    }

    .text{
        font-size: 16px;
        line-height: 25px;
        color: var(--main-font-color);
        transition: all 0.3s;
    }

    .text:hover{
        color: var(--two-font-color);
    }

    .img-list > img{
        float: left;
        width: 360px;
        margin-left: 20px;
    }
</style>