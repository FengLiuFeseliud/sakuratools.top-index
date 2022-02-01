<template>
    <div>
        <ApiView>
            <span>
                <h2>该图床暂时不向外开放上传</h2>
                <h3>本站图片将全部使用该图床</h3>
                <h3>使用反向代理到接口控制图片, 因此你甚至可以使用以下接口控制图片</h3>
                <p>https://api.sakuratools.top/img.php?path=</p>
                <p>path为图片基本格式</p>
                <h3>如何控制本站图片返回尺寸, 压缩质量? 很简单</h3>
                <h3>下面将使用以下图片演示如何控制</h3>
                <p><a href="https://img.sakuratools.top/test.png">https://img.sakuratools.top/test.png</a></p>
                <h3>图片基本格式:</h3>
                <p>图片路径@宽度x高度x比例缩放xWebP压缩质量</p>
                <p>图片路径一般不用管, 处理过的图片统一以 WebP 返回</p>
                <p>图片默认值可以使用: 0x0x0x-1, 相当于</p>
                <p>图片原宽度x图片原高度x比例缩放1xWebP压缩质量80</p>
                <p>不使用@参数将返回原图!</p>
                <h3>效果:</h3>
                <p><a href="https://img.sakuratools.top/test.png">原图: https://img.sakuratools.top/test.png</a></p>
                <p><a href="https://img.sakuratools.top/test.png@0x0x0x-1">默认值: https://img.sakuratools.top/test.png@0x0x0x-1</a></p>
                <p><a href="https://img.sakuratools.top/test.png@0x0x0.5x-1">缩小一半: https://img.sakuratools.top/test.png@0x0x0.5x-1</a></p>
                <p><a href="https://img.sakuratools.top/test.png@0x0x0x0">最低质量: https://img.sakuratools.top/test.png@0x0x0x0</a></p>
                <p><a href="https://img.sakuratools.top/test.png@300x400x0x-1">直接设置宽高: https://img.sakuratools.top/test.png@300x400x0x-1</a></p>
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