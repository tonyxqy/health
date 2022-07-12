require('./common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["tn_components/poster"],{157:function(t,e,n){"use strict";(function(t){n(5),n(6);r(n(3));var e=r(n(158));function r(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n(1)["createPage"])},158:function(t,e,n){"use strict";n.r(e);var r=n(159),i=n(161);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n(167);var o,u=n(15),c=Object(u["default"])(i["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],o);c.options.__file="tn_components/poster.vue",e["default"]=c.exports},159:function(t,e,n){"use strict";n.r(e);var r=n(160);n.d(e,"render",(function(){return r["render"]})),n.d(e,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(e,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(e,"components",(function(){return r["components"]}))},160:function(t,e,n){"use strict";var r;n.r(e),n.d(e,"render",(function(){return i})),n.d(e,"staticRenderFns",(function(){return o})),n.d(e,"recyclableRender",(function(){return a})),n.d(e,"components",(function(){return r}));var i=function(){var t=this,e=t.$createElement;t._self._c},a=!1,o=[];i._withStripped=!0},161:function(t,e,n){"use strict";n.r(e);var r=n(162),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},162:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=o(n(27)),i=o(n(163)),a=n(164);function o(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,i,a,o){try{var u=t[a](o),c=u.value}catch(l){return void n(l)}u.done?e(c):Promise.resolve(c).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var a=t.apply(e,n);function o(t){u(a,r,i,o,c,"next",t)}function c(t){u(a,r,i,o,c,"throw",t)}o(void 0)}))}}var l={data:function(){return{poster:{},qrShow:!1,canvasId:"default_PosterCanvasId"}},methods:{shareFc:function(){var t=this;return c(r.default.mark((function e(){var n;return r.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,i.default.log("准备生成:"+new Date),e.next=4,(0,a.getSharePoster)({_this:t,type:"testShareType",formData:{},backgroundImage:"https://cdn.zhoukaiwen.com/zjx_hb.png",posterCanvasId:t.canvasId,delayTimeScale:20,drawArray:function(t){var e=t.bgObj,n=(t.type,t.bgScale,.3*e.width),r=.045*e.width,a=.04*e.height;return new Promise((function(t,o){t([{type:"custom",setDraw:function(t){t.setFillStyle("black"),t.setGlobalAlpha(.3),t.fillRect(0,e.height-.2*e.height,e.width,.2*e.height),t.setGlobalAlpha(1)}},{type:"image",url:"/static/logo.png",alpha:.3,dx:n,dy:e.height-.25*e.width,infoCallBack:function(t){var n=.2*e.width/t.height;return{circleSet:{x:t.width*n/2,y:.2*e.width/2,r:.2*e.width/2},dWidth:t.width*n,dHeight:.2*e.width}}},{type:"text",fontStyle:"italic",text:"凯文同学",size:r,color:"white",alpha:.5,textAlign:"left",textBaseline:"middle",infoCallBack:function(t){return i.default.log("index页面的text的infocallback ，textlength:"+t),{dx:e.width-t-r,dy:e.height-3*a}},serialNum:0,id:"tag1"},{type:"text",text:"凯文同学",fontWeight:"bold",size:r,color:"white",alpha:.75,textAlign:"left",textBaseline:"middle",serialNum:1,allInfoCallback:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.drawArray,n=e.find((function(t){return"tag1"===t.id}));return new Promise((function(t,e){setTimeout((function(){t({dx:n.dx,dy:n.dy+a})}),1)}))}},{type:"text",text:"凯文同学",size:r,color:"white",alpha:1,textAlign:"left",textBaseline:"middle",infoCallBack:function(t){return{dx:e.width-t-r,dy:e.height-a}}},{type:"qrcode",text:"你好，我是凯文同学",size:.2*e.width,dx:.05*e.width,dy:e.height-.25*e.width}])}))},setCanvasWH:function(e){var n=e.bgObj;e.type,e.bgScale;t.poster=n}});case 4:n=e.sent,i.default.log("海报生成成功, 时间:"+new Date+"， 临时路径: "+n.poster.tempFilePath),t.poster.finalPath=n.poster.tempFilePath,t.qrShow=!0,e.next=15;break;case 10:e.prev=10,e.t0=e["catch"](0),i.default.hideLoading(),i.default.showToast(JSON.stringify(e.t0)),console.log(JSON.stringify(e.t0));case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},saveImage:function(){t.saveImageToPhotosAlbum({filePath:this.poster.finalPath,success:function(t){i.default.showToast("保存成功")}})},hideQr:function(){this.qrShow=!1}}};e.default=l}).call(this,n(1)["default"])},167:function(t,e,n){"use strict";n.r(e);var r=n(168),i=n.n(r);for(var a in r)"default"!==a&&function(t){n.d(e,t,(function(){return r[t]}))}(a);e["default"]=i.a},168:function(t,e,n){}},[[157,"common/runtime","common/vendor","tn_components/common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/tn_components/poster.js.map