(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_info/info"],{261:function(e,t,n){"use strict";(function(e){n(5),n(6);r(n(3));var t=r(n(262));function r(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},262:function(e,t,n){"use strict";n.r(t);var r=n(263),a=n(265);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);n(267);var i,o=n(15),s=Object(o["default"])(a["default"],r["render"],r["staticRenderFns"],!1,null,null,null,!1,r["components"],i);s.options.__file="page_info/info.vue",t["default"]=s.exports},263:function(e,t,n){"use strict";n.r(t);var r=n(264);n.d(t,"render",(function(){return r["render"]})),n.d(t,"staticRenderFns",(function(){return r["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return r["recyclableRender"]})),n.d(t,"components",(function(){return r["components"]}))},264:function(e,t,n){"use strict";var r;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return u})),n.d(t,"components",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},u=!1,i=[];a._withStripped=!0},265:function(e,t,n){"use strict";n.r(t);var r=n(266),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},266:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(176));function a(e){return e&&e.__esModule?e:{default:e}}var u={data:function(){return{num:0,TabList:[],ansList:[],numList:[{name:"目标"},{name:"身高"},{name:"体重"},{name:"年龄"},{name:"完成"}],target:["增肥","养生","减肥"],targetValue:[1],height:[150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200],heightValue:[20],weight:[40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],weightValue:[20],age:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],ageValue:[20]}},onShareAppMessage:function(e){},mounted:function(){this.getServerData()},methods:{getServerData:function(){var t=this;e.showLoading({title:"加载中"});var n=e.getStorageSync("userId"),a={user_id:n},u={url:"body/all",method:"get"};r.default.httpRequest(u,a).then((function(n){if(console.log(n),e.hideLoading(),200==n.statusCode){t.TabList=n.data,console.log(t.TabList);for(var r=0;r<t.TabList.length;r++)console.log(t.TabList[r].timeList[t.TabList[r].timeList.length-1].value),t.ansList.push(t.TabList[r].timeList[t.TabList[r].timeList.length-1].value);console.log(t.ansList)}}))}}};t.default=u}).call(this,n(1)["default"])},267:function(e,t,n){"use strict";n.r(t);var r=n(268),a=n.n(r);for(var u in r)"default"!==u&&function(e){n.d(t,e,(function(){return r[e]}))}(u);t["default"]=a.a},268:function(e,t,n){}},[[261,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/page_info/info.js.map