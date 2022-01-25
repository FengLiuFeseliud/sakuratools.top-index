<template>
    <div>
        <ApiView>
            <h2>1.0 pixiv</h2>
                <h3>抓取于 https://www.vilipix.com</h3>
                <h3>数据0点更新均晚一天稳定榜单, 不包括r18</h3>
                <h3>一次返回日周月三榜混合数据, 不重复抓取, 过了就没了</h3>
                <h3>重点: 注意下载请求头携带 referer: https://www.vilipix.com/</h3>
                <h3>重点: 务必处理下载时404, 把404图片改成 .png 图片就能正常下载</h3>
                <h3>referer 和处理404都不能少, 没 referer 全部无法下载, 不处理404, 无法下载 png 图片</h3>
                <a href="./demo/exe/dow_pixiv .exe"><h3>下载即用, 简单脚本一键下载数据, 保存在脚本目录, 速度很快!!!</h3></a>
                <h3>脚本源码在下面, 完全开源放心使用</h3>
                <h3>1.1 每日 日周月三榜混合数据</h3>
                <p>https://api.sakuratools.top/pixiv/list</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>shield: 屏蔽标签, 多个用","分割</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> day: 数据更新日期</p>
                <p>data -> list: 图片榜单</p>
                <p>data -> list -> id: 图片id</p>
                <p>data -> list -> url: 图片原图 url</p>
                <h3>python demo:</h3>
                <h3>此处演示代码同脚本, 完全异步, 速度很快</h3>
                <a href="demo/code/pixiv_api_demo1.py"><h3>python demo code</h3></a>
                <img src="https://img.sakuratools.top/demo/pixiv_api_demo1.png@0x0x0x80">
                <h3>1.2 获取今年可用日期列表</h3>
                <p>https://api.sakuratools.top/pixiv/date</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data: 一年榜单日期</p>
                <h3>1.3 从本站日周月三榜中随机图片</h3>
                <p>https://api.sakuratools.top/pixiv/random</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>date: 指定从哪几天随机最多5天, 多个用","分割</p>
                <p>默认从今天起的前5天, 可以先用获取今年可用日期列表的接口后从中选</p>
                <p>count: 随机多少张返回, 最多100张, 默认10张</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> date: 从哪几天随机</p>
                <p>data -> list: 随机图片列表</p>
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