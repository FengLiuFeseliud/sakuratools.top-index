(function(t){function e(e){for(var c,i,o=e[0],a=e[1],r=e[2],f=0,s=[];f<o.length;f++)i=o[f],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&s.push(l[i][0]),l[i]=0;for(c in a)Object.prototype.hasOwnProperty.call(a,c)&&(t[c]=a[c]);b&&b(e);while(s.length)s.shift()();return u.push.apply(u,r||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],c=!0,o=1;o<n.length;o++){var a=n[o];0!==l[a]&&(c=!1)}c&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},l={app:0},u=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],a=o.push.bind(o);o.push=e,o=o.slice();for(var r=0;r<o.length;r++)e(o[r]);var b=a;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0471":function(t,e,n){},"04a6":function(t,e,n){},1426:function(t,e,n){"use strict";n("0471")},"15aa":function(t,e,n){},"1ba4":function(t,e,n){},"1c20":function(t,e,n){"use strict";n("f4a4")},"23fb":function(t,e,n){"use strict";n("730b")},"24e2":function(t,e,n){"use strict";n("6ccc")},"2fc3":function(t,e,n){},"3ba5":function(t,e,n){},"4aed":function(t,e,n){},"4cad":function(t,e,n){"use strict";n("54e8")},5092:function(t,e,n){"use strict";n("4aed")},"52de":function(t,e,n){"use strict";n("3ba5")},"54e8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("a15b");var c=n("7a23");function l(t,e,n,l,u,i){var o=Object(c["y"])("router-view"),a=Object(c["y"])("GoTop"),r=Object(c["y"])("Bottom");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o),Object(c["h"])(a),Object(c["h"])(r)])}var u=function(t){return Object(c["t"])("data-v-260ac72c"),t=t(),Object(c["r"])(),t},i={id:"bottom"},o=u((function(){return Object(c["f"])("div",{id:"copyright"},[Object(c["g"])(" Copyright © 2022 "),Object(c["f"])("a",{href:"https://space.bilibili.com/34394509"},"FengLiuFeseliud")],-1)})),a=[o];function r(t,e,n,l,u,o){return Object(c["q"])(),Object(c["e"])("div",i,a)}var b={name:"bottom"},f=(n("4cad"),n("6b0d")),s=n.n(f);const p=s()(b,[["render",r],["__scopeId","data-v-260ac72c"]]);var O=p,j=n("de31"),d=n.n(j),h=function(t){return Object(c["t"])("data-v-29adbf13"),t=t(),Object(c["r"])(),t},_=Object(c["g"])(" "),m=h((function(){return Object(c["f"])("br",null,null,-1)})),v=h((function(){return Object(c["f"])("img",{src:d.a},null,-1)})),g=[_,m,v];function x(t,e,n,l,u,i){return Object(c["G"])((Object(c["q"])(),Object(c["e"])("a",{id:"go-top",onClick:e[0]||(e[0]=function(){return i.goTop&&i.goTop.apply(i,arguments)})},g,512)),[[c["D"],u.show_in]])}var y={data:function(){return{show_in:!1}},props:{to_name:{type:String,default:function(){return"#to-top"}}},mounted:function(){window.addEventListener("scroll",this.scroll)},unmounted:function(){window.removeEventListener("scroll",this.scroll)},methods:{scroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>window.screen.height/2?this.show_in=!0:this.show_in=!1},goTop:function(){document.querySelector(this.to_name).scrollIntoView({block:"end",behavior:"smooth"})}}};n("aebd");const k=s()(y,[["render",x],["__scopeId","data-v-29adbf13"]]);var w=k,T={data:function(){return{tags:[{text:"router",url:"/test"}]}},components:{Bottom:O,GoTop:w}};const F=s()(T,[["render",l]]);var S=F,q=n("6c02"),A={class:"Slist-p",style:{"padding-top":"20px"}},P={class:"Slist-p"},V=Object(c["f"])("iframe",{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"300",height:"450",src:"//music.163.com/outchain/player?type=0&id=7239327750&auto=1&height=430"},null,-1),E=Object(c["f"])("h2",null,"限时大红主题()",-1),L=Object(c["g"])("skln 短链接图形界面开放了!"),I=Object(c["f"])("h3",null,"本站不定时更新各种 api 各站 api 处理 小工具",-1),M=Object(c["f"])("a",{href:"https://frp.104300.xyz/"},"本站使用 FRP 进行反向代理",-1),G=Object(c["f"])("h3",null,"服务器每周一 三点进行重启 服务会短暂不可用",-1),B=Object(c["f"])("h3",null,"前端第一个版本 v0.1.0更新了!",-1),U=Object(c["f"])("h3",null,"本站完全开源 如下",-1),D=Object(c["f"])("a",{href:"https://github.com/FengLiuFeseliud/api.sakurtools.top-api"},"站点后端 - github",-1),$=Object(c["f"])("br",null,null,-1),z=Object(c["f"])("a",{href:"https://github.com/FengLiuFeseliud/sakuratools.top-index"},"站点前端 - github",-1),H=Object(c["f"])("h4",{style:{"padding-top":"20px"}},"碧蓝动态",-1),C=["href"],R=Object(c["f"])("br",null,null,-1),W=Object(c["g"])("查看详细...");function J(t,e,n,l,u,i){var o=Object(c["y"])("Slist"),a=Object(c["y"])("router-link"),r=Object(c["y"])("TextBox"),b=Object(c["y"])("Main");return Object(c["q"])(),Object(c["d"])(b,null,{default:Object(c["F"])((function(){return[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[Object(c["f"])("p",A,Object(c["A"])(u.timeStr),1),Object(c["f"])("p",P,Object(c["A"])(u.wthrcdn),1),V]})),_:1}),Object(c["h"])(r,null,{default:Object(c["F"])((function(){return[Object(c["f"])("span",null,[E,Object(c["h"])(a,{to:"/tools/skln"},{default:Object(c["F"])((function(){return[L]})),_:1}),I,M,G,B,U,D,$,z])]})),_:1}),Object(c["h"])(o,{style:{"margin-right":"0px"},class:"last"},{default:Object(c["F"])((function(){return[H,(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(u.blhx,(function(t){return Object(c["q"])(),Object(c["e"])("a",{target:"_blank",key:t,href:t.url},[Object(c["g"])(Object(c["A"])(i.set_text(t.text)),1),R],8,C)})),128)),Object(c["h"])(a,{to:"/dynamic/blhx",id:"link-blhx"},{default:Object(c["F"])((function(){return[W]})),_:1})]})),_:1})]})),_:1})}n("fb6a"),n("ac1f"),n("1276");var N=n("bc3a"),K=n.n(N),Q={id:"index-main",class:"clearfix"};function X(t,e,n,l,u,i){var o=Object(c["y"])("Top");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["h"])(o),Object(c["f"])("div",Q,[Object(c["x"])(t.$slots,"default",{},void 0,!0)])],64)}var Y={id:"top"};function Z(t,e,n,l,u,i){var o=Object(c["y"])("TopTitle"),a=Object(c["y"])("Alist");return Object(c["q"])(),Object(c["e"])("div",Y,[Object(c["h"])(o),Object(c["h"])(a,{tags:u.tags,http_tags:u.http_tags},null,8,["tags","http_tags"])])}var tt=function(t){return Object(c["t"])("data-v-e39fd284"),t=t(),Object(c["r"])(),t},et=tt((function(){return Object(c["f"])("span",{class:"title-2"},"Sakura",-1)})),nt=Object(c["g"])("Tools.top ");function ct(t,e,n,l,u,i){var o=Object(c["y"])("router-link");return Object(c["q"])(),Object(c["d"])(o,{class:"top-title",to:"/"},{default:Object(c["F"])((function(){return[et,nt]})),_:1})}var lt={name:"top_title"};n("58a9");const ut=s()(lt,[["render",ct],["__scopeId","data-v-e39fd284"]]);var it=ut,ot={id:"nav"},at=["href"];function rt(t,e,n,l,u,i){var o=Object(c["y"])("router-link");return Object(c["q"])(),Object(c["e"])("div",ot,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(n.tags,(function(t){return Object(c["q"])(),Object(c["d"])(o,{key:t,to:t.url},{default:Object(c["F"])((function(){return[Object(c["g"])(Object(c["A"])(t.text),1)]})),_:2},1032,["to"])})),128)),(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(n.http_tags,(function(t){return Object(c["q"])(),Object(c["e"])("a",{key:t,href:t.url},Object(c["A"])(t.text),9,at)})),128))])}var bt={props:{tags:{type:Array,default:function(){return[]}},http_tags:{type:Array,default:function(){return[]}}}};n("a5cb");const ft=s()(bt,[["render",rt],["__scopeId","data-v-260f5dc7"]]);var st=ft,pt={data:function(){return{tags:[{url:"/index",text:"Home"},{url:"/tools/md",text:"小工具"},{url:"/dynamic/blhx",text:"动态"},{url:"/api/md",text:"本站api文档"}],http_tags:[{url:"https://skln.xyz",text:"skln"},{url:"https://img.sakuratools.top",text:"img"},{url:"https://github.com/FengLiuFeseliud",text:"github"},{url:"https://space.bilibili.com/34394509",text:"bilibili"}]}},components:{TopTitle:it,Alist:st}};n("a66c");const Ot=s()(pt,[["render",Z]]);var jt=Ot,dt={components:{Top:jt}};n("b5dc");const ht=s()(dt,[["render",X],["__scopeId","data-v-3b6a70d2"]]);var _t=ht,mt={class:"slist"};function vt(t,e,n,l,u,i){return Object(c["q"])(),Object(c["e"])("div",mt,[Object(c["x"])(t.$slots,"default",{},void 0,!0)])}var gt={name:"slist"};n("1426");const xt=s()(gt,[["render",vt],["__scopeId","data-v-03278d54"]]);var yt=xt,kt={id:"text-box"};function wt(t,e,n,l,u,i){return Object(c["q"])(),Object(c["e"])("div",kt,[Object(c["x"])(t.$slots,"default")])}var Tt={};n("dcb5");const Ft=s()(Tt,[["render",wt]]);var St=Ft,qt={components:{Slist:yt,TextBox:St,Main:_t},data:function(){return{timeStr:"",wthrcdn:"",blhx:[]}},mounted:function(){var t=this;K.a.get("https://api.sakuratools.top/info/day").then((function(e){t.timeStr="今天是 "+e.data.data.timeStr,t.wthrcdn=e.data.data.wthrcdn})),K.a.get("https://api.sakuratools.top/info/blhx?offset=0&count=10&short=1").then((function(e){t.blhx=e.data.data.list}))},methods:{set_text:function(t){return"#"==t[0]&&(t=t.split("\n",3).slice(1,3).join(" ")),t.slice(0,18)+"..."}}};n("24e2");const At=s()(qt,[["render",J]]);var Pt=At,Vt=function(t){return Object(c["t"])("data-v-53b5d1cc"),t=t(),Object(c["r"])(),t},Et=Vt((function(){return Object(c["f"])("div",{id:"big-index"},[Object(c["f"])("h1",null,"还没想好放什么, 空空如也的..."),Object(c["f"])("h1",null,"看看别人家的点歌台?"),Object(c["f"])("a",{href:"https://live.bilibili.com/1360383"},"->茶叶_")],-1)}));function Lt(t,e,n,l,u,i){var o=Object(c["y"])("BigTitle");return Object(c["q"])(),Object(c["d"])(o,null,{default:Object(c["F"])((function(){return[Et]})),_:1})}var It={id:"big-title"},Mt=Object(c["f"])("div",{id:"title"},[Object(c["f"])("h1",null,[Object(c["g"])("Sakura"),Object(c["f"])("span",null,"Tools.top")])],-1);function Gt(t,e,n,l,u,i){var o=Object(c["y"])("STop"),a=Object(c["y"])("Alist");return Object(c["q"])(),Object(c["e"])(c["a"],null,[Object(c["f"])("div",It,[Object(c["h"])(o),Mt,Object(c["h"])(a,{tags:u.tags,http_tags:u.http_tags},null,8,["tags","http_tags"])]),Object(c["x"])(t.$slots,"default")],64)}var Bt=function(t){return Object(c["t"])("data-v-77b21acc"),t=t(),Object(c["r"])(),t},Ut={id:"sTop"},Dt=Bt((function(){return Object(c["f"])("a",{href:"https://v3.cn.vuejs.org/"},"Vue3",-1)})),$t=Bt((function(){return Object(c["f"])("a",{href:"https://live.bilibili.com/5545364"},"直播间",-1)})),zt=Bt((function(){return Object(c["f"])("a",{href:"https://space.bilibili.com/34394509"},"FengLiuFeseliud",-1)})),Ht=Bt((function(){return Object(c["f"])("a",{href:"https://www.bilibili.com/video/BV1Fq4y1A73M"},"skln的使用",-1)})),Ct=[Dt,$t,zt,Ht];function Rt(t,e){return Object(c["q"])(),Object(c["e"])("div",Ut,Ct)}n("ff16");const Wt={},Jt=s()(Wt,[["render",Rt],["__scopeId","data-v-77b21acc"]]);var Nt=Jt,Kt={data:function(){return{tags:[{text:" Home",url:"/index"},{url:"/api/md",text:" 本站api文档"}],http_tags:[{url:"https://github.com/FengLiuFeseliud",text:" github"}]}},components:{Alist:st,STop:Nt}};n("1c20");const Qt=s()(Kt,[["render",Gt]]);var Xt=Qt,Yt={components:{BigTitle:Xt}};n("23fb");const Zt=s()(Yt,[["render",Lt],["__scopeId","data-v-53b5d1cc"]]);var te=Zt,ee=function(t){return Object(c["t"])("data-v-6c67ea6e"),t=t(),Object(c["r"])(),t},ne={id:"error"},ce=ee((function(){return Object(c["f"])("h1",null,"404 / 403!",-1)})),le=ee((function(){return Object(c["f"])("p",null,"1. 没有这个地址, 请检查拼写",-1)})),ue=ee((function(){return Object(c["f"])("p",null,"2. 无权访问这个地址",-1)})),ie=Object(c["g"])("返回主页");function oe(t,e,n,l,u,i){var o=Object(c["y"])("router-link"),a=Object(c["y"])("Main");return Object(c["q"])(),Object(c["d"])(a,null,{default:Object(c["F"])((function(){return[Object(c["f"])("div",ne,[ce,le,ue,Object(c["h"])(o,{to:"/"},{default:Object(c["F"])((function(){return[ie]})),_:1})])]})),_:1})}var ae={components:{Main:_t}};n("52de");const re=s()(ae,[["render",oe],["__scopeId","data-v-6c67ea6e"]]);var be=re,fe=Object(c["f"])("span",null,[Object(c["f"])("h2",null,"本站承诺完全使用本项目开源代码，不会存储用户任何信息。"),Object(c["f"])("h3",null,"允许所有跨域 ajax 请求, 可以随意调用"),Object(c["f"])("a",{href:"https://github.com/FengLiuFeseliud/api.sakurtools.top-api"},[Object(c["f"])("h3",null,"项目Github")]),Object(c["f"])("h2",null,"API错误码"),Object(c["f"])("h3",null,"本站 api 返回统一返回以下数据用显示 api 状态"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("h3",null,"code 错误码"),Object(c["f"])("p",null,"200: api 请求成功(正常)"),Object(c["f"])("p",null,"40*: status code 400 - 405"),Object(c["f"])("p",null,"50*: status code 500 - 502"),Object(c["f"])("p",null,"404: 不存在的 api"),Object(c["f"])("p",null,"4000: 参数格式错误"),Object(c["f"])("p",null,"4001: cookie 失效"),Object(c["f"])("p",null,"4002: 第三方 api 错误"),Object(c["f"])("p",null,"4003: api 错误"),Object(c["f"])("p",null,"4004: 参数错误")],-1);function se(t,e,n,l,u,i){var o=Object(c["y"])("ApiView");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[fe]})),_:1})])}function pe(t,e,n,l,u,i){var o=Object(c["y"])("Alist"),a=Object(c["y"])("Slist"),r=Object(c["y"])("TextBox"),b=Object(c["y"])("Main");return Object(c["q"])(),Object(c["d"])(b,null,{default:Object(c["F"])((function(){return[Object(c["h"])(a,null,{default:Object(c["F"])((function(){return[Object(c["h"])(o,{tags:u.tags},null,8,["tags"])]})),_:1}),Object(c["h"])(r,null,{default:Object(c["F"])((function(){return[Object(c["x"])(t.$slots,"default")]})),_:3})]})),_:3})}var Oe={data:function(){return{tags:[{text:"API错误码",url:"/api/md"},{text:"动态信息",url:"/api/info"},{text:"图床",url:"/api/img"},{text:"短链接",url:"/api/skln"},{text:"直链获取 - pixiv",url:"/api/pixiv"},{text:"直链获取 - bilibili",url:"/api/bilibili"}]}},components:{Slist:yt,TextBox:St,Alist:st,Main:_t}};n("5092");const je=s()(Oe,[["render",pe]]);var de=je,he={components:{ApiView:de}};const _e=s()(he,[["render",se]]);var me=_e,ve=Object(c["f"])("span",null,[Object(c["f"])("h2",null,"该图床暂时不向外开放上传"),Object(c["f"])("h3",null,"本站图片将全部使用该图床"),Object(c["f"])("h3",null,"使用反向代理到接口控制图片, 因此你甚至可以使用以下接口控制图片"),Object(c["f"])("p",null,"https://api.sakuratools.top/img.php?path="),Object(c["f"])("p",null,"path为图片基本格式"),Object(c["f"])("h3",null,"如何控制本站图片返回尺寸, 压缩质量? 很简单"),Object(c["f"])("h3",null,"下面将使用以下图片演示如何控制"),Object(c["f"])("p",null,[Object(c["f"])("a",{href:"https://img.sakuratools.top/test.png"},"https://img.sakuratools.top/test.png")]),Object(c["f"])("h3",null,"图片基本格式:"),Object(c["f"])("p",null,"图片路径@宽度x高度x比例缩放xWebP压缩质量"),Object(c["f"])("p",null,"图片路径一般不用管, 处理过的图片统一以 WebP 返回"),Object(c["f"])("p",null,"图片默认值可以使用: 0x0x0x-1, 相当于"),Object(c["f"])("p",null,"图片原宽度x图片原高度x比例缩放1xWebP压缩质量80"),Object(c["f"])("p",null,"不使用@参数将返回原图!"),Object(c["f"])("h3",null,"效果:"),Object(c["f"])("p",null,[Object(c["f"])("a",{href:"https://img.sakuratools.top/test.png"},"原图: https://img.sakuratools.top/test.png")]),Object(c["f"])("p",null,[Object(c["f"])("a",{href:"https://img.sakuratools.top/test.png@0x0x0x-1"},"默认值: https://img.sakuratools.top/test.png@0x0x0x-1")]),Object(c["f"])("p",null,[Object(c["f"])("a",{href:"https://img.sakuratools.top/test.png@0x0x0.5x-1"},"缩小一半: https://img.sakuratools.top/test.png@0x0x0.5x-1")]),Object(c["f"])("p",null,[Object(c["f"])("a",{href:"https://img.sakuratools.top/test.png@0x0x0x0"},"最低质量: https://img.sakuratools.top/test.png@0x0x0x0")]),Object(c["f"])("p",null,[Object(c["f"])("a",{href:"https://img.sakuratools.top/test.png@300x400x0x-1"},"直接设置宽高: https://img.sakuratools.top/test.png@300x400x0x-1")])],-1);function ge(t,e,n,l,u,i){var o=Object(c["y"])("ApiView");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[ve]})),_:1})])}var xe={components:{ApiView:de}};const ye=s()(xe,[["render",ge]]);var ke=ye,we=Object(c["f"])("span",null,[Object(c["f"])("h2",null,"1.0 pixiv"),Object(c["f"])("h3",null,"抓取于 https://www.vilipix.com"),Object(c["f"])("h3",null,"数据0点更新均晚一天稳定榜单, 不包括r18"),Object(c["f"])("h3",null,"一次返回日周月三榜混合数据, 不重复抓取, 过了就没了"),Object(c["f"])("h3",null,"重点: 注意下载请求头携带 referer: https://www.vilipix.com/"),Object(c["f"])("h3",null,"重点: 务必处理下载时404, 把404图片改成 .png 图片就能正常下载"),Object(c["f"])("h3",null,"referer 和处理404都不能少, 没 referer 全部无法下载, 不处理404, 无法下载 png 图片"),Object(c["f"])("a",{href:"./demo/exe/dow_pixiv .exe"},[Object(c["f"])("h3",null,"下载即用, 简单脚本一键下载数据, 保存在脚本目录, 速度很快!!!")]),Object(c["f"])("h3",null,"脚本源码在下面, 完全开源放心使用"),Object(c["f"])("h3",null,"1.1 每日 日周月三榜混合数据"),Object(c["f"])("p",null,"https://api.sakuratools.top/pixiv/list"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,'shield: 屏蔽标签, 多个用","分割'),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data -> day: 数据更新日期"),Object(c["f"])("p",null,"data -> list: 图片榜单"),Object(c["f"])("p",null,"data -> list -> id: 图片id"),Object(c["f"])("p",null,"data -> list -> url: 图片原图 url"),Object(c["f"])("h3",null,"python demo:"),Object(c["f"])("h3",null,"此处演示代码同脚本, 完全异步, 速度很快"),Object(c["f"])("a",{href:"demo/code/pixiv_api_demo1.py"},[Object(c["f"])("h3",null,"python demo code")]),Object(c["f"])("img",{src:"https://img.sakuratools.top/demo/pixiv_api_demo1.png@0x0x0x80"}),Object(c["f"])("h3",null,"1.2 获取今年可用日期列表"),Object(c["f"])("p",null,"https://api.sakuratools.top/pixiv/date"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data: 一年榜单日期"),Object(c["f"])("h3",null,"1.3 从本站日周月三榜中随机图片"),Object(c["f"])("p",null,"https://api.sakuratools.top/pixiv/random"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,'date: 指定从哪几天随机最多5天, 多个用","分割'),Object(c["f"])("p",null,"默认从今天起的前5天, 可以先用获取今年可用日期列表的接口后从中选"),Object(c["f"])("p",null,"count: 随机多少张返回, 最多100张, 默认10张"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data -> date: 从哪几天随机"),Object(c["f"])("p",null,"data -> list: 随机图片列表")],-1);function Te(t,e,n,l,u,i){var o=Object(c["y"])("ApiView");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[we]})),_:1})])}var Fe={components:{ApiView:de}};const Se=s()(Fe,[["render",Te]]);var qe=Se,Ae=Object(c["f"])("span",null,[Object(c["f"])("h2",null,"1.0 短链接"),Object(c["f"])("h3",null,"本短链接利用了404错误重定向到重定向 api 后302重定向到长链接"),Object(c["f"])("h3",null,"可以自定义 skln.xyz/ 后的链接"),Object(c["f"])("h3",null,"生成的短链接格式 skln.xyz/ + 自定义值"),Object(c["f"])("h3",null,"最多有效天数30天, 过期不会删除直到有人重新上传"),Object(c["f"])("h2",null,"1.1 短链接上传"),Object(c["f"])("p",null,"https://api.sakuratools.top/skln/updata"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,"url: 长链接"),Object(c["f"])("p",null,"short_url: 短链接值 格式 / + 自定义值"),Object(c["f"])("p",null,"day: 有效天数 最多30天"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data -> short_url: 生成的短链接"),Object(c["f"])("h3",null,"python demo:"),Object(c["f"])("a",{href:"./demo/skln_api_demo1.py"},[Object(c["f"])("h3",null,"python demo code")]),Object(c["f"])("img",{src:"https://img.sakuratools.top/demo/skln_api_demo1.png@0x0x0x80"}),Object(c["f"])("h3",null,"1.2 短链接查询"),Object(c["f"])("p",null,"https://api.sakuratools.top/skln/inquire"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,"short_url: 短链接值 不带 skln.xyz 需要/"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data -> url: 长链接"),Object(c["f"])("p",null,"data -> short_url: 短链接值"),Object(c["f"])("p",null,"data -> time: 创建时间戳"),Object(c["f"])("p",null,"data -> endtime: 过期时间戳"),Object(c["f"])("p",null,"data -> day: 有效天数"),Object(c["f"])("h3",null,"1.3 短链接重定向"),Object(c["f"])("p",null,"https://api.sakuratools.top/skln/link"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,"short_url: 短链接值 不带 skln.xyz 需要/"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"不返回值重定向至长链接, 效果和短链接一样")],-1);function Pe(t,e,n,l,u,i){var o=Object(c["y"])("ApiView");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[Ae]})),_:1})])}var Ve={components:{ApiView:de}};const Ee=s()(Ve,[["render",Pe]]);var Le=Ee,Ie=Object(c["f"])("span",null,[Object(c["f"])("h2",null,"1.0 bilibili"),Object(c["f"])("h3",null,"以下接口需要请求时携带b站用户 cookie 才能获取1080画质"),Object(c["f"])("h3",null,"使用大会员可以获取更高画质"),Object(c["f"])("h3",null,"不携带 cookie 将以不登录情况下获取视频"),Object(c["f"])("h3",null,"1.1 获取视频 cid(如果有分p包括分p)"),Object(c["f"])("p",null,"https://api.sakuratools.top/bilibili/cid"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,"bvid: 视频 bv 号"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data -> 分p1 -> cid: 视频分p cid "),Object(c["f"])("p",null,"data -> 分p1 -> title: 视频分p标题 "),Object(c["f"])("p",null,"如有更多分p 全部以上格式返回"),Object(c["f"])("h3",null,"1.2 获取视频/分p清晰度"),Object(c["f"])("p",null,"https://api.sakuratools.top/bilibili/quality"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,"bvid: 视频 bv 号"),Object(c["f"])("p",null,"cid: 视频/分p cid号 (如果多分p, 填该分p cid)"),Object(c["f"])("p",null,"vip: 用户会员等级, 不填自动获取, 如果知道携带该参数可以加快 api 响应"),Object(c["f"])("p",null,"vip 支持的参数"),Object(c["f"])("p",null,"0: 未登录, 如果只用低画质可以不带 cookie 并且 vip 填0不然会返回未登录"),Object(c["f"])("p",null,"1: 普通用户, 可以获取1080P的画质, 不支持1080P+"),Object(c["f"])("p",null,"2: 大会员, 可以获取1080P以上的画质, 包括4K"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"根据当前会员状态与视频支持画质返回"),Object(c["f"])("p",null,"这里只展示一下数据结构"),Object(c["f"])("p",null,"data -> display_desc: 当前画质"),Object(c["f"])("p",null,'data -> format: "flv480" 不明'),Object(c["f"])("p",null,"data -> new_description: 画质说明"),Object(c["f"])("p",null,"data -> quality: 画质码"),Object(c["f"])("p",null,"data -> superscript: 同 new_description, 没啥用"),Object(c["f"])("h3",null,"1.3 获取视频直链"),Object(c["f"])("p",null,"https://api.sakuratools.top/bilibili/video"),Object(c["f"])("h3",null,"请求方式: GET/POST"),Object(c["f"])("h3",null,"请求参数:"),Object(c["f"])("p",null,"bvid: 视频 bv 号"),Object(c["f"])("p",null,"cid: 视频/分p cid号 (如果多分p, 填该分p cid)"),Object(c["f"])("p",null,"qn: 画质码"),Object(c["f"])("h3",null,"请求返回:"),Object(c["f"])("p",null,"code: api 状态码"),Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息"),Object(c["f"])("p",null,"data: 三条直链 后两条为备用"),Object(c["f"])("h3",null,"python demo:"),Object(c["f"])("a",{href:"./demo/code/bilibili_api_demo1.py"},[Object(c["f"])("h3",null,"python demo code")]),Object(c["f"])("img",{src:"https://img.sakuratools.top/demo/bilibili_api_demo1.png@0x0x0x80"})],-1);function Me(t,e,n,l,u,i){var o=Object(c["y"])("ApiView");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[Ie]})),_:1})])}var Ge={components:{ApiView:de}};const Be=s()(Ge,[["render",Me]]);var Ue=Be,De=Object(c["f"])("h2",null,"1.0 本站天气信息",-1),$e=Object(c["f"])("p",null,"https://api.sakuratools.top/info/day",-1),ze=Object(c["f"])("h3",null,"请求方式: GET/POST",-1),He=Object(c["f"])("h3",null,"请求返回:",-1),Ce=Object(c["f"])("p",null,"code: api 状态码",-1),Re=Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息",-1),We=Object(c["f"])("p",null,"data -> timeStr: 字符串格式日期",-1),Je=Object(c["f"])("p",null,"data -> time: 时间戳",-1),Ne=Object(c["f"])("p",null,"data -> wthrcdn: 天气",-1),Ke=Object(c["f"])("h2",null,"1.1 碧蓝航线动态",-1),Qe=Object(c["f"])("h3",null,"抓取碧蓝航线官号与碧蓝海事局的动态",-1),Xe=Object(c["f"])("h3",null,"数据每10分钟更新一次, 注意请求间隔",-1),Ye=Object(c["f"])("p",null,"https://api.sakuratools.top/info/blhx",-1),Ze=Object(c["f"])("h3",null,"请求参数:",-1),tn=Object(c["f"])("p",null,"offset: 偏移量 (偏移量就是你要从哪开始返回)",-1),en=Object(c["f"])("p",null,"count: 返回数据长度",-1),nn=Object(c["f"])("p",null,"short: 简短数据 (只返回内容, 动态 url) 1为开启 默认可以为空",-1),cn=Object(c["f"])("h3",null,"请求方式: GET/POST",-1),ln=Object(c["f"])("h3",null,"请求返回:",-1),un=Object(c["f"])("p",null,"code: api 状态码",-1),on=Object(c["f"])("p",null,"msg: api 信息 错误时可以返回错误信息",-1),an=Object(c["f"])("p",null,"data -> user: 用户",-1),rn=Object(c["f"])("p",null,"data -> text: 内容",-1),bn=Object(c["f"])("p",null,"data -> user_head: 用户头像",-1),fn=Object(c["f"])("p",null,"data -> url: 动态 url",-1),sn=Object(c["f"])("p",null,"data -> time: 发布时间戳",-1),pn=Object(c["f"])("p",null,'data -> img: 图片 url 多个用","分割 没有图片为""',-1),On=Object(c["g"])("此 API 图片由本站返回， 详细控制图片压缩返回戳我！");function jn(t,e,n,l,u,i){var o=Object(c["y"])("router-link"),a=Object(c["y"])("ApiView");return Object(c["q"])(),Object(c["e"])("div",null,[Object(c["h"])(a,null,{default:Object(c["F"])((function(){return[Object(c["f"])("span",null,[De,$e,ze,He,Ce,Re,We,Je,Ne,Ke,Qe,Xe,Ye,Ze,tn,en,nn,cn,ln,un,on,an,rn,bn,fn,sn,pn,Object(c["h"])(o,{to:"/api/img"},{default:Object(c["F"])((function(){return[On]})),_:1})])]})),_:1})])}var dn={components:{ApiView:de}};const hn=s()(dn,[["render",jn]]);var _n=hn,mn=Object(c["f"])("h2",null,"更新",-1),vn=Object(c["f"])("br",null,null,-1),gn=Object(c["f"])("p",null,"2022/2/1 添加短链接生成工具",-1);function xn(t,e,n,l,u,i){var o=Object(c["y"])("Sbox"),a=Object(c["y"])("ToolsView");return Object(c["q"])(),Object(c["d"])(a,null,{default:Object(c["F"])((function(){return[Object(c["h"])(o,null,{default:Object(c["F"])((function(){return[mn,vn,gn]})),_:1})]})),_:1})}function yn(t,e,n,l,u,i){var o=Object(c["y"])("Alist"),a=Object(c["y"])("Slist"),r=Object(c["y"])("Box"),b=Object(c["y"])("Main");return Object(c["q"])(),Object(c["d"])(b,null,{default:Object(c["F"])((function(){return[Object(c["h"])(a,null,{default:Object(c["F"])((function(){return[Object(c["h"])(o,{tags:u.tags},null,8,["tags"])]})),_:1}),Object(c["h"])(r,null,{default:Object(c["F"])((function(){return[Object(c["x"])(t.$slots,"default")]})),_:3})]})),_:3})}var kn={id:"box"};function wn(t,e,n,l,u,i){return Object(c["q"])(),Object(c["e"])("div",kn,[Object(c["x"])(t.$slots,"default")])}var Tn={};n("a44e");const Fn=s()(Tn,[["render",wn]]);var Sn=Fn,qn={data:function(){return{tags:[{text:"更新记录",url:"/tools/md"},{text:"skln - 短链接生成工具",url:"/tools/skln"}]}},components:{Main:_t,Slist:yt,Alist:st,Box:Sn}};const An=s()(qn,[["render",yn]]);var Pn=An,Vn={id:"text-sbox"};function En(t,e){return Object(c["q"])(),Object(c["e"])("div",Vn,[Object(c["x"])(t.$slots,"default",{},void 0,!0)])}n("5c62");const Ln={},In=s()(Ln,[["render",En],["__scopeId","data-v-3f83e26b"]]);var Mn=In,Gn={components:{ToolsView:Pn,Sbox:Mn}};const Bn=s()(Gn,[["render",xn]]);var Un=Bn,Dn={id:"big-input"},$n=Object(c["f"])("p",null,"可以使用自定义短语 如: https://skln.xyz/xxxx ( xxxx 前面加 / )",-1),zn=Object(c["f"])("p",null,"最多有效天数30天, 过期不会删除直到有人重新上传",-1),Hn=Object(c["f"])("p",null,"注意使用时每行数据都要点旁边的图标保存",-1),Cn=Object(c["f"])("p",null,"直接使用接口接入 app? 看这里!",-1),Rn=Object(c["g"])("https://sakuratools.top/api/skln");function Wn(t,e,n,l,u,i){var o=Object(c["y"])("BigInputField"),a=Object(c["y"])("router-link"),r=Object(c["y"])("Sbox"),b=Object(c["y"])("ToolsView");return Object(c["q"])(),Object(c["d"])(b,null,{default:Object(c["F"])((function(){return[Object(c["f"])("div",Dn,[Object(c["h"])(o,{label_text:"目标长链接",button_text:"",onUpdata:i.getUrl},null,8,["onUpdata"]),Object(c["h"])(o,{label_text:"https://skln.xyz",button_text:"",onUpdata:i.getSurl},null,8,["onUpdata"]),Object(c["h"])(o,{label_text:"有效日期",button_text:"",onUpdata:i.send},null,8,["onUpdata"]),Object(c["f"])("p",null,Object(c["A"])(u.info),1)]),Object(c["h"])(r,null,{default:Object(c["F"])((function(){return[$n,zn,Hn,Cn,Object(c["h"])(a,{to:"/api/skln"},{default:Object(c["F"])((function(){return[Rn]})),_:1})]})),_:1})]})),_:1})}var Jn={id:"big-input-field"},Nn={for:"input-text"};function Kn(t,e,n,l,u,i){return Object(c["q"])(),Object(c["e"])("div",Jn,[Object(c["f"])("label",Nn,Object(c["A"])(n.label_text),1),Object(c["G"])(Object(c["f"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=function(t){return u.inputData=t}),id:"input-text"},null,512),[[c["C"],u.inputData]]),Object(c["f"])("button",{onClick:e[1]||(e[1]=function(){return i.updata&&i.updata.apply(i,arguments)})},Object(c["A"])(n.button_text),1)])}var Qn={data:function(){return{inputData:""}},props:{label_text:{type:String,default:function(){return"input"}},button_text:{type:String,default:function(){return"updata"}}},methods:{updata:function(){this.$emit("updata",this.inputData)}}};n("9ade");const Xn=s()(Qn,[["render",Kn],["__scopeId","data-v-6ca3ed71"]]);var Yn=Xn,Zn={data:function(){return{url:void 0,surl:void 0,day:void 0,info:""}},components:{ToolsView:Pn,BigInputField:Yn,Sbox:Mn},methods:{getUrl:function(t){this.url=t},getSurl:function(t){this.surl=t},send:function(t){var e=this;this.day=t,void 0!=this.surl&void 0!=this.url&void 0!=this.url?(this.info="正在请求接口生成...",K.a.get("https://api.sakuratools.top/skln/updata?url="+this.url+"&short_url="+this.surl+"&day="+this.day).then((function(t){200==t.data.code?e.info="短链接生成成功! 短链接: "+t.data.data.short_url:4004==t.data.code?e.info="curl 无法连接该链接, 请检查链接: "+e.url:e.info=t.data.msg+" code: "+t.data.code}))):(void 0==this.surl&&(this.info="未保存短链接, 检查数据后点短链接栏图标保存"),void 0==this.url&&(this.info="未保存长链接, 检查数据后点长链接栏图标保存"),void 0==this.day&&(this.info="未保存有效日期, 检查数据后点有效日期栏图标保存"))}}};n("a3b2");const tc=s()(Zn,[["render",Wn]]);var ec=tc;function nc(t,e,n,l,u,i){var o=Object(c["y"])("DynamicView");return Object(c["q"])(),Object(c["d"])(o,{api:"https://api.sakuratools.top/info/blhx"})}function cc(t,e,n,l,u,i){var o=Object(c["y"])("Alist"),a=Object(c["y"])("Slist"),r=Object(c["y"])("DynamicList"),b=Object(c["y"])("Main");return Object(c["q"])(),Object(c["d"])(b,null,{default:Object(c["F"])((function(){return[Object(c["h"])(a,null,{default:Object(c["F"])((function(){return[Object(c["h"])(o,{tags:u.tags},null,8,["tags"])]})),_:1}),Object(c["h"])(r,{api:n.api},null,8,["api"])]})),_:1})}var lc={id:"dynamic-list"},uc=["href"],ic={class:"user"},oc=["src"],ac=["innerHTML"],rc={class:"img-list clearfix"},bc=["src"];function fc(t,e,n,l,u,i){return Object(c["q"])(),Object(c["e"])("div",lc,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(u.dynamic_list,(function(t){return Object(c["q"])(),Object(c["e"])("a",{class:"dynamic",key:t,href:t.url},[Object(c["f"])("div",ic,[Object(c["f"])("img",{src:t.user_head},null,8,oc),Object(c["f"])("span",null,Object(c["A"])(t.user),1)]),Object(c["f"])("div",{class:"text",innerHTML:i.set_text(t.text)},null,8,ac),Object(c["f"])("div",rc,[(Object(c["q"])(!0),Object(c["e"])(c["a"],null,Object(c["w"])(i.set_img_list(t.img),(function(t){return Object(c["q"])(),Object(c["e"])("img",{key:t,src:t},null,8,bc)})),128))])],8,uc)})),128))])}var sc=n("2909"),pc=(n("99af"),{data:function(){return{dynamic_list:[],offset:0,max_count:0,link_in:!1}},props:{api:{type:String}},mounted:function(){this.getList(),window.addEventListener("scroll",this.scroll)},unmounted:function(){window.removeEventListener("scroll",this.scroll)},updated:function(){this.link_in=!1},methods:{getList:function(){var t=this;this.link_in||(0==this.max_count||this.offset<=this.max_count)&&(this.link_in=!0,K.a.get(this.api+"?offset="+this.offset+"&count=10").then((function(e){t.max_count=e.data.data.count,t.dynamic_list=[].concat(Object(sc["a"])(t.dynamic_list),Object(sc["a"])(e.data.data.list))})),this.offset+=10)},scroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>document.body.clientHeight-2*window.screen.height&&this.getList()},set_text:function(t){for(var e=t.split("\n"),n="",c=0;c<e.length;c++)n+="<span>"+e[c]+"<br></span>";return n},set_img_list:function(t){for(var e=[],n=t.split(","),c=0;c<t.length;c++)void 0!=n[c]&&e.push(n[c].split("@")[0]+"@0x0x0.8x80");return e}}});n("6e7e");const Oc=s()(pc,[["render",fc],["__scopeId","data-v-446fc43e"]]);var jc=Oc,dc={data:function(){return{tags:[{text:"碧蓝动态",url:"/dynamic/blhx"}]}},props:{api:{type:String}},components:{Main:_t,Slist:yt,Alist:st,DynamicList:jc}};n("d99d");const hc=s()(dc,[["render",cc]]);var _c=hc,mc={components:{DynamicView:_c}};const vc=s()(mc,[["render",nc]]);var gc=vc,xc=[{path:"/",component:te},{path:"/index",component:Pt},{path:"/dynamic/blhx",component:gc},{path:"/api/md",component:me},{path:"/api/img",component:ke},{path:"/api/pixiv",component:qe},{path:"/api/skln",component:Le},{path:"/api/bilibili",component:Ue},{path:"/api/info",component:_n},{path:"/tools/md",component:Un},{path:"/tools/skln",component:ec},{path:"/error",component:be}],yc=Object(q["a"])({history:Object(q["b"])(Object({NODE_ENV:"production",BASE_URL:"/"}).BASH_URL),routes:xc});yc.beforeEach((function(t,e,n){document.documentElement.scrollTop=0,0===t.matched.length&&n("/error"),n()}));var kc=yc,wc=(n("845f"),n("f43f"),Object(c["c"])(S));wc.use(kc),wc.mount("#App"),console.log(["  _____       _                 _______          _      _"," / ____|     | |               |__   __|        | |    | |","| (___   __ _| | ___   _ _ __ __ _| | ___   ___ | |___ | |_ ___  _ __"," \\___ \\ / _` | |/ / | | | '__/ _` | |/ _ \\ / _ \\| / __|| __/ _ \\| '_ \\"," ____) | (_| |   <| |_| | | | (_| | | (_) | (_) | \\__ \\| || (_) | |_) |","|_____/ \\__,_|_|\\_\\\\__,_|_|  \\__,_|_|\\___/ \\___/|_|___(_)__\\___/| .__/","                                                                | |","                                                                |_|","                                  SakuraTools.top 2022 by FengLiuFeseliud"].join("\n"))},"57bb":function(t,e,n){},"58a9":function(t,e,n){"use strict";n("7250")},"5c62":function(t,e,n){"use strict";n("7499")},"685b":function(t,e,n){},"6ccc":function(t,e,n){},"6e7e":function(t,e,n){"use strict";n("937a")},7250:function(t,e,n){},"730b":function(t,e,n){},7499:function(t,e,n){},"845f":function(t,e,n){},"937a":function(t,e,n){},9409:function(t,e,n){},"9ade":function(t,e,n){"use strict";n("04a6")},a3b2:function(t,e,n){"use strict";n("ba09")},a44e:function(t,e,n){"use strict";n("15aa")},a5cb:function(t,e,n){"use strict";n("685b")},a66c:function(t,e,n){"use strict";n("57bb")},aebd:function(t,e,n){"use strict";n("f907")},b5dc:function(t,e,n){"use strict";n("1ba4")},ba09:function(t,e,n){},d99d:function(t,e,n){"use strict";n("db97")},db97:function(t,e,n){},dcb5:function(t,e,n){"use strict";n("9409")},de31:function(t,e,n){t.exports=n.p+"img/gotopbg.38e32c02.png"},f43f:function(t,e,n){},f4a4:function(t,e,n){},f907:function(t,e,n){},ff16:function(t,e,n){"use strict";n("2fc3")}});
//# sourceMappingURL=app.858a04d5.js.map