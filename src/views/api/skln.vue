<template>
    <div>
        <ApiView>
            <span>
                <h2>1.0 短链接</h2>
                <h3>本短链接利用了404错误重定向到重定向 api 后302重定向到长链接</h3>
                <h3>可以自定义 skln.xyz/ 后的链接</h3>
                <h3>生成的短链接格式 skln.xyz/ + 自定义值</h3>
                <h3>最多有效天数30天, 过期不会删除直到有人重新上传</h3>
                <h2>1.1 短链接上传</h2>
                <p>https://api.sakuratools.top/skln/updata</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>url: 长链接</p>
                <p>short_url: 短链接值 格式 / + 自定义值</p>
                <p>day: 有效天数 最多30天</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> short_url: 生成的短链接</p>
                <h3>python demo:</h3>
                <a href="./demo/skln_api_demo1.py"><h3>python demo code</h3></a>
                <img src="https://img.sakuratools.top/demo/skln_api_demo1.png@0x0x0x80">
                <h3>1.2 短链接查询</h3>
                <p>https://api.sakuratools.top/skln/inquire</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>short_url: 短链接值 不带 skln.xyz 需要/</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> url: 长链接</p>
                <p>data -> short_url: 短链接值</p>
                <p>data -> time: 创建时间戳</p>
                <p>data -> endtime: 过期时间戳</p>
                <p>data -> day: 有效天数</p>
                <h3>1.3 短链接重定向</h3>
                <p>https://api.sakuratools.top/skln/link</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>short_url: 短链接值 不带 skln.xyz 需要/</p>
                <h3>请求返回:</h3>
                <p>不返回值重定向至长链接, 效果和短链接一样</p>
            </span>
        </ApiView>
    </div>
</template>

<script>
    import ApiView from "../template/api_view.vue"

    export default {
        components: {
            ApiView
        }
    }
</script>

<style scoped>

</style>