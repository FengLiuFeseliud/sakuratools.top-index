<template>
    <div>
        <ApiView>
            <span>
                <h2>1.0 本站天气信息</h2>
                <p>https://api.sakuratools.top/info/day</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> timeStr: 字符串格式日期</p>
                <p>data -> time: 时间戳</p>
                <p>data -> wthrcdn: 天气</p>
                <h2>1.1 碧蓝航线动态</h2>
                <h3>抓取碧蓝航线官号与碧蓝海事局的动态</h3>
                <h3>数据每10分钟更新一次, 注意请求间隔</h3>
                <p>https://api.sakuratools.top/info/blhx</p>
                <h3>请求参数:</h3>
                <p>offset: 偏移量 (偏移量就是你要从哪开始返回)</p>
                <p>count: 返回数据长度</p>
                <p>short: 简短数据 (只返回内容, 动态 url) 1为开启 默认可以为空</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> user: 用户</p>
                <p>data -> text: 内容</p>
                <p>data -> user_head: 用户头像</p>
                <p>data -> url: 动态 url</p>
                <p>data -> time: 发布时间戳</p>
                <p>data -> img: 图片 url 多个用","分割 没有图片为""</p>
                <router-link to="/api/img">此 API 图片由本站返回， 详细控制图片压缩返回戳我！</router-link>
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