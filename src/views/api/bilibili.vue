<template>
    <div>
        <ApiView>
            <span>
                <h2>1.0 bilibili</h2>
                <h3>以下接口需要请求时携带b站用户 cookie 才能获取1080画质</h3>
                <h3>使用大会员可以获取更高画质</h3>
                <h3>不携带 cookie 将以不登录情况下获取视频</h3>
                <h3>1.1 获取视频 cid(如果有分p包括分p)</h3>
                <p>https://api.sakuratools.top/bilibili/cid</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>bvid: 视频 bv 号</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data -> 分p1 -> cid: 视频分p cid </p>
                <p>data -> 分p1 -> title: 视频分p标题 </p>
                <p>如有更多分p 全部以上格式返回</p>
                <h3>1.2 获取视频/分p清晰度</h3>
                <p>https://api.sakuratools.top/bilibili/quality</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>bvid: 视频 bv 号</p>
                <p>cid: 视频/分p cid号 (如果多分p, 填该分p cid)</p>
                <p>vip: 用户会员等级, 不填自动获取, 如果知道携带该参数可以加快 api 响应</p>
                <p>vip 支持的参数</p>
                <p>0: 未登录, 如果只用低画质可以不带 cookie 并且 vip 填0不然会返回未登录</p>
                <p>1: 普通用户, 可以获取1080P的画质, 不支持1080P+</p>
                <p>2: 大会员, 可以获取1080P以上的画质, 包括4K</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>根据当前会员状态与视频支持画质返回</p>
                <p>这里只展示一下数据结构</p>
                <p>data -> display_desc: 当前画质</p>
                <p>data -> format: "flv480" 不明</p>
                <p>data -> new_description: 画质说明</p>
                <p>data -> quality: 画质码</p>
                <p>data -> superscript: 同 new_description, 没啥用</p>
                <h3>1.3 获取视频直链</h3>
                <p>https://api.sakuratools.top/bilibili/video</p>
                <h3>请求方式: GET/POST</h3>
                <h3>请求参数:</h3>
                <p>bvid: 视频 bv 号</p>
                <p>cid: 视频/分p cid号 (如果多分p, 填该分p cid)</p>
                <p>qn: 画质码</p>
                <h3>请求返回:</h3>
                <p>code: api 状态码</p>
                <p>msg: api 信息 错误时可以返回错误信息</p>
                <p>data: 三条直链 后两条为备用</p>
                <h3>python demo:</h3>
                <a href="./demo/code/bilibili_api_demo1.py"><h3>python demo code</h3></a>
                <img src="https://img.sakuratools.top/demo/bilibili_api_demo1.png@0x0x0x80">
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