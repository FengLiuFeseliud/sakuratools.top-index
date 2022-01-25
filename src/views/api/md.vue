<template>
    <div>
        <ApiView>
            <span>
                <h2>本站承诺完全使用本项目开源代码，不会存储用户任何信息。</h2>
                <h3>允许所有跨域 ajax 请求, 可以随意调用</h3>
                <a href="https://github.com/FengLiuFeseliud/api.sakurtools.top-api"><h3>项目Github</h3></a>
                <h2>API错误码</h2>
                <h3>本站 api 返回统一返回以下数据用显示 api 状态</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <h3>code 错误码</h3>
                <p>200: api 请求成功(正常)</p>
                <p>40*: status code 400 - 405</p>
                <p>50*: status code 500 - 502</p>
                <p>404: 不存在的 api</p>
                <p>4000: 参数格式错误</p>
                <p>4001: cookie 失效</p>
                <p>4002: 第三方 api 错误</p>
                <p>4003: api 错误</p>
                <p>4004: 参数错误</p>
            </span>
        </ApiView>
    </div>
</template>

<script>
    import ApiView from "../api_view.vue"

    export default {
        components: {
            ApiView
        }
    }
</script>

<style scoped>

</style>