<template>
    <ToolsView>
        <div id="big-input">
            <BigInputField label_text="目标长链接" button_text="" @updata="getUrl"></BigInputField>
            <BigInputField label_text="https://skln.xyz" button_text="" @updata="getSurl"></BigInputField>
            <BigInputField label_text="有效日期" button_text="" @updata="send"></BigInputField>
            <p>{{info}}</p>
        </div>
        <Sbox>
            <p>可以使用自定义短语 如: https://skln.xyz/xxxx ( xxxx 前面加 / )</p>
            <p>最多有效天数30天, 过期不会删除直到有人重新上传</p>
            <p>注意使用时每行数据都要点旁边的图标保存</p>
            <p>直接使用接口接入 app? 看这里!</p>
            <router-link to="/api/skln">https://sakuratools.top/api/skln</router-link>
        </Sbox>
    </ToolsView>
</template>

<script>
    import ToolsView from "../template/tools_view.vue"
    import BigInputField from "../../components/tools/bigInputField.vue"
    import Sbox from "../../components/svue/text_sbox.vue"
    import axios from "axios"

    export default {
        data(){
            return {
                url: undefined,
                surl: undefined,
                day: undefined,
                info: ""
            }
        },

        components: {
            ToolsView,
            BigInputField,
            Sbox
        },

        methods: {
            getUrl(data){
                this.url = data
            },

            getSurl(data){
                this.surl = data
            },

            send(data){
                this.day = data
                if(this.surl != undefined & this.url != undefined & this.url != undefined){
                    this.info = "正在请求接口生成..."
                    axios.get("https://api.sakuratools.top/skln/updata?url="+this.url+"&short_url="+this.surl+"&day="+this.day)
                        .then(res => {
                            if(res.data.code != 200){
                                if(res.data.code == 4004){
                                    this.info = "curl 无法连接该链接, 请检查链接: "+this.url;
                                }else{
                                    this.info = res.data.msg+" code: "+res.data.code;
                                }
                                return
                            }

                            this.info = "短链接生成成功! 短链接: "+res.data.data.short_url;
                        })
                }else{
                    if(this.surl == undefined){
                        this.info = "未保存短链接, 检查数据后点短链接栏图标保存";
                    }

                    if(this.url == undefined){
                        this.info = "未保存长链接, 检查数据后点长链接栏图标保存";
                    }

                    if(this.day == undefined){
                        this.info = "未保存有效日期, 检查数据后点有效日期栏图标保存";
                    }
                }
            }
        },
    }
</script>

<style>
    #big-input {
        width: 100%;
        height: 40px;
        /* text-align: center; */
    }

    #big-input > *{
        float: left;
        margin-bottom: 5px;
    }

    #big-input > p{
        width: 500px;
        text-align: left;
        color: var(--main-font-color);
        font-size: 20px;
        font-weight: 700;
    }
</style>