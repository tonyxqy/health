(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_info/info"],{325:function(e,t,n){"use strict";(function(e){n(5),n(6);o(n(3));var t=o(n(326));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=n,e(t.default)}).call(this,n(1)["createPage"])},326:function(e,t,n){"use strict";n.r(t);var o=n(327),a=n(329);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);n(331);var u,i=n(15),s=Object(i["default"])(a["default"],o["render"],o["staticRenderFns"],!1,null,null,null,!1,o["components"],u);s.options.__file="page_info/info.vue",t["default"]=s.exports},327:function(e,t,n){"use strict";n.r(t);var o=n(328);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},328:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return a})),n.d(t,"staticRenderFns",(function(){return u})),n.d(t,"recyclableRender",(function(){return r})),n.d(t,"components",(function(){return o}));var a=function(){var e=this,t=e.$createElement,n=(e._self._c,Math.floor(e.ansList[5]));e.$mp.data=Object.assign({},{$root:{g0:n}})},r=!1,u=[];a._withStripped=!0},329:function(e,t,n){"use strict";n.r(t);var o=n(330),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},330:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(214));function a(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{show:!1,gender:0,num:0,TabList:[],ansList:[],numList:[{name:"目标"},{name:"身高"},{name:"体重"},{name:"年龄"},{name:"完成"}],target:["增肥","养生","减肥"],targetValue:[1],height:[150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200],heightValue:[20],weight:[40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],weightValue:[20],age:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100],ageValue:[20]}},onShow:function(){this.getServerData()},onShareAppMessage:function(e){},mounted:function(){this.getServerData(),e.$on("infoData",this.getServerData)},methods:{chooseman:function(){var t=this,n=new Date,a=e.getStorageSync("userId"),r={user_id:a,gender:"1",time:n.getFullYear()+"-"+(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-"+(n.getDate()<10?"0"+n.getDate():n.getDate())+" "},u={url:"user/updateGenderById?user_id=".concat(r.user_id,"&gender=").concat(r.gender,"&time=").concat(r.time),method:"post"};o.default.httpRequest(u,r).then((function(n){e.hideLoading(),200==n.statusCode&&(t.gender=1,t.onClose())}))},choosewoman:function(){var t=this,n=new Date,a=e.getStorageSync("userId"),r={user_id:a,gender:"0",time:n.getFullYear()+"-"+(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"-"+(n.getDate()<10?"0"+n.getDate():n.getDate())+" "},u={url:"user/updateGenderById?user_id=".concat(r.user_id,"&gender=").concat(r.gender,"&time=").concat(r.time),method:"post"};o.default.httpRequest(u,r).then((function(n){e.hideLoading(),200==n.statusCode&&(t.gender=0,t.onClose())}))},showPopup:function(){this.show=!0},onClose:function(){this.show=!1},getServerData:function(){var t=this;e.showLoading({title:"加载中"});var n=e.getStorageSync("userId"),a={user_id:n},r={url:"body/all",method:"get"};o.default.httpRequest(r,a).then((function(n){if(e.hideLoading(),200==n.statusCode){t.TabList=n.data,t.ansList=[],console.log("TabList",t.TabList);for(var o=0;o<t.TabList.length;o++){var a=t.TabList[o].timeList[t.TabList[o].timeList.length-1].value;console.log(a),t.ansList.push(a),console.log(t.ansList)}console.log("ansList",t.ansList)}})),e.showLoading({title:"加载中"});var u={url:"tree/userInfo",method:"get"};o.default.httpRequest(u,a).then((function(n){e.hideLoading(),200==n.statusCode&&(t.gender=n.data.gender)}))}}};t.default=r}).call(this,n(1)["default"])},331:function(e,t,n){"use strict";n.r(t);var o=n(332),a=n.n(o);for(var r in o)"default"!==r&&function(e){n.d(t,e,(function(){return o[e]}))}(r);t["default"]=a.a},332:function(e,t,n){}},[[325,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/page_info/info.js.map