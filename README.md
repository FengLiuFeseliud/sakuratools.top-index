# SakuraTools Vue3

### 这是我个人网站 SakuraTools.top 的项目 基于 Vue 3

> [网站: SakuraTools.top](https://sakuratools.top/)

### 组件目录记录在项目 instruction 文件

目前支持以下主题修改

```css
/*
*
*  主题文件在项目 src/assets/main.css
*
*/

/* 主题 */
:root{
    /* 主题背景图片 */
    --background-image: url('https://img.sakuratools.top/bg.png@0x0x0x80');
    /* 页面加载时的缓冲颜色 */
    --background-color: black;
    /* 界面颜色 */
    --main-background-color: #313131;
    /* 副界面颜色 */
    --two-background-color: white;
    /* 界面阴影颜色 */
    --box-shadow: rgb(39, 38, 38);
    /* 主字体颜色 */
    --main-font-color: white;
    /* 副字体颜色 */
    --two-font-color: pink;
    /* 链接字体颜色 */
    --hover-font-color: orange;
    /* 主题透明 */
    --opacity: 0.8;
}

/* 统一链接样式 */
a {
    color: var(--two-font-color);
    text-decoration: none;
    transition: color 0.3s, background-color 0.3s;
}

a:hover{
    color: var(--hover-font-color);
}

```

## 在本地运行项目

```bash
git clone https://github.com/FengLiuFeseliud/sakuratools.top-index.git
cd ./sakuratools.top-index && npm run serve 
# 访问本地 8080 端口
```





