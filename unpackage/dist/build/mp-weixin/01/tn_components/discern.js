require('../common/runtime.js');require('../common/vendor.js');require('../common/main.js');(global["webpackJsonp_01"]=global["webpackJsonp_01"]||[]).push([["tn_components/discern"],{"0c60":function(n,t,e){"use strict";e.r(t);var u=e("68a3"),o=e.n(u);for(var c in u)"default"!==c&&function(n){e.d(t,n,(function(){return u[n]}))}(c);t["default"]=o.a},"1a76":function(n,t,e){"use strict";e.r(t);var u=e("d246"),o=e("0c60");for(var c in o)"default"!==c&&function(n){e.d(t,n,(function(){return o[n]}))}(c);e("472b");var i,a=e("f0c5"),r=Object(a["a"])(o["default"],u["b"],u["c"],!1,null,"2b470cac",null,!1,u["a"],i);t["default"]=r.exports},"472b":function(n,t,e){"use strict";var u=e("96f7"),o=e.n(u);o.a},"68a3":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{list:["隐私说明：请按要求上传真实的证件照片，您所上传的行驶证仅用于平台账户绑定，请放心上传"],imgUrl1:"",imgUrl2:""}},watch:{},onReady:function(){n.getSystemInfo({success:function(n){console.log(n.windowHeight)}})},mounted:function(){},methods:{uploadImg1:function(){n.chooseImage({count:1,success:function(t){t.tempFilePaths;return console.log(t),n.showToast({icon:"none",title:"上传成功，暂无接口预览",duration:2e3}),!1}})}}};t.default=e}).call(this,e("543d")["default"])},"96f7":function(n,t,e){},d246:function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return c})),e.d(t,"a",(function(){return u}));var u={uNoticeBar:function(){return e.e("uview-ui/components/u-notice-bar/u-notice-bar").then(e.bind(null,"c81f"))}},o=function(){var n=this,t=n.$createElement;n._self._c},c=[]},fd71:function(n,t,e){"use strict";(function(n){e("a385"),e("921b");u(e("66fd"));var t=u(e("1a76"));function u(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])}},[["fd71","common/runtime","common/vendor"]]]);