require('../../common/runtime.js');require('../../common/vendor.js');require('../../common/main.js');(global["webpackJsonp_01"]=global["webpackJsonp_01"]||[]).push([["pages/project/project"],{"1f17":function(t,e,n){"use strict";var o=n("d363"),a=n.n(o);a.a},"416e":function(t,e,n){"use strict";n.r(e);var o=n("55a6"),a=n("5f6a");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("1f17");var c,r=n("f0c5"),i=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"150bccb0",null,!1,o["a"],c);e["default"]=i.exports},"55a6":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},"5f6a":function(t,e,n){"use strict";n.r(e);var o=n("e9b6"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);e["default"]=a.a},"72b6":function(t,e,n){"use strict";(function(t){n("a385"),n("921b");o(n("66fd"));var e=o(n("416e"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},d363:function(t,e,n){},e9b6:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("b683"));function a(t){return t&&t.__esModule?t:{default:t}}var u={data:function(){return{isIndex:0,projectList:[]}},watch:{},onLoad:function(t){console.log(t.proId),this.isIndex=t.proId,console.log(this.projectList)},mounted:function(){this.getData()},methods:{getData:function(){var e=this;console.log("数据加载");var n={url:"json/project.json",method:"get"};t.showLoading({title:"加载中"}),o.default.httpRequest(n).then((function(n){console.log(n),t.hideLoading(),200==n.statusCode&&(e.projectList=n.data.data,console.log(e.projectList))}))}}};e.default=u}).call(this,n("543d")["default"])}},[["72b6","common/runtime","common/vendor"]]]);