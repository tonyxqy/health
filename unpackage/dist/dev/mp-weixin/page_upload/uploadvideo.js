require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_upload/uploadvideo"],{189:function(e,t,n){"use strict";(function(e){n(5),n(6);r(n(3));var t=r(n(190));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},190:function(e,t,n){"use strict";n.r(t);var r=n(191),i=n(193);for(var o in i)"default"!==o&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n(195);var u,a=n(15),c=Object(a["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,"48ac929e",null,!1,r["components"],u);c.options.__file="page_upload/uploadvideo.vue",t["default"]=c.exports},191:function(e,t,n){"use strict";n.r(t);var r=n(192);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},192:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return i})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return o})),n.d(t,"components",(function(){return r}));var i=function(){var e=this,t=e.$createElement;e._self._c},o=!1,u=[];i._withStripped=!0},193:function(e,t,n){"use strict";n.r(t);var r=n(194),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},194:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(176));function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){n.e("components/likeFx/likeFx").then(function(){return resolve(n(393))}.bind(null,n)).catch(n.oe)},s={components:{LikeFx:c},data:function(){return{data:[],file:{},fileList:[],animation_timer:null,width:375,height:1920,show:!1,user_id:","}},mounted:function(){this.check()},onLoad:function(){this._startLikeAnimation()},onShareAppMessage:function(){return{title:"快来和我们一起管理自己的身体健康吧",path:"/pages/about/about?from=share"}},methods:{check:function(){var e=this,t={url:"forum/false",method:"get"};r.default.httpRequest(t).then((function(t){200==t.statusCode&&(e.checkdata=t.data)}))},afterRead:function(e){var t=this,n=e.detail.file;console.log(n),this.file=n,console.log(this.file),t.fileList.push(u({},n)),this.show=!0},upload:function(){var t=e.getStorageSync("userId");e.showLoading({title:"加载中"}),e.uploadFile({url:"https://xuyq.xyz:3306/forum/add_forum",filePath:this.file.url,name:"file",formData:{user_id:t,words:this.words,sign1:this.sign1,sign2:this.sign2,nickname:"hhh"},success:function(t){console.log(t),e.hideLoading(),e.navigateBack({url:"/pages/index/index"})}})},_startLikeAnimation:function(){var e=this;this.animation_timer=setInterval((function(){e.$refs.likeFx.likeClick()}),300)}}};t.default=s}).call(this,n(1)["default"])},195:function(e,t,n){"use strict";n.r(t);var r=n(196),i=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,(function(){return r[e]}))}(o);t["default"]=i.a},196:function(e,t,n){}},[[189,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/page_upload/uploadvideo.js.map