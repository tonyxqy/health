(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/inedx"],{327:function(e,t,n){"use strict";n.r(t);var o=n(328),r=n(330);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);n(332);var i,s=n(15),u=Object(s["default"])(r["default"],o["render"],o["staticRenderFns"],!1,null,"079d618e",null,!1,o["components"],i);u.options.__file="pages/index/inedx.vue",t["default"]=u.exports},328:function(e,t,n){"use strict";n.r(t);var o=n(329);n.d(t,"render",(function(){return o["render"]})),n.d(t,"staticRenderFns",(function(){return o["staticRenderFns"]})),n.d(t,"recyclableRender",(function(){return o["recyclableRender"]})),n.d(t,"components",(function(){return o["components"]}))},329:function(e,t,n){"use strict";var o;n.r(t),n.d(t,"render",(function(){return r})),n.d(t,"staticRenderFns",(function(){return i})),n.d(t,"recyclableRender",(function(){return a})),n.d(t,"components",(function(){return o}));try{o={qiunDataCharts:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(n.bind(null,425))},uPopup:function(){return n.e("uview-ui/components/u-popup/u-popup").then(n.bind(null,404))}}}catch(s){if(-1===s.message.indexOf("Cannot find module")||-1===s.message.indexOf(".vue"))throw s;console.error(s.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var r=function(){var e=this,t=e.$createElement,n=(e._self._c,Math.floor(e.current.currentSugar/e.target.targetSugar*100)),o=Math.floor(e.current.currentSugar),r=Math.floor(e.current.currentFat);e._isMounted||(e.e0=function(t){e.showT=!1},e.e1=function(t){e.showT=!1}),e.$mp.data=Object.assign({},{$root:{g0:n,g1:o,g2:r}})},a=!1,i=[];r._withStripped=!0},330:function(e,t,n){"use strict";n.r(t);var o=n(331),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},331:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(n(116));var o=r(n(176));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var i=function(){n.e("components/wxcomponents/struggler-uniapp-add-tip/struggler-uniapp-add-tip").then(function(){return resolve(n(434))}.bind(null,n)).catch(n.oe)},s=function(){Promise.all([n.e("common/vendor"),n.e("pages/index/bodyhelper")]).then(function(){return resolve(n(441))}.bind(null,n)).catch(n.oe)},u={components:{addTip:i,bodyhelper:s},data:function(){var t=e.getStorageSync("userId");console.log(t,"userId");var n=new Date,o=n.getFullYear(),r=n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1,i=n.getDate()<10?"0"+n.getDate():n.getDate(),s=o+"-"+r+"-"+i;return console.log(s,"dateStrdateStrdateStr"),a({hide:!0,showT:!1,logion:!1,hasUserInfo:!1,userInfo:null,mystylelist:["primary","primary","primary","primary"],loadshow:!0,volume:1,radio:1,gaugeWidth:10,chartData:{categories:[{value:.2,color:"#1890ff"},{value:.8,color:"#2fc25b"},{value:1,color:"#f04864"}],series:[]},current:{userId:8,currentWeight:155,currentHeight:46,currentSugar:16.2,currentEnergy:311.6,currentFat:16.2},target:{userId:6,targetWeight:0,targetHeight:0,targetSugar:50,targetEnergy:2e3,targetFat:55},gradientColor:[{"0%":"#ffd01e","100%":"#ee0a24"},{"0%":"#0081ff","100%":"#1cbbb4"},{"0%":"#e03997","100%":"#6739b6"}],container:null,tip:"点击「添加小程序」，下次访问更便捷",duration:1,dishshow:!0,scrollTop:0,old:{scrollTop:0},bannerList:[{imageUrl:"https://tse1-mm.cn.bing.net/th/id/R-C.5e11fda5b177f51290733a0a5e56599b?rik=gijEoQ%2faNE%2fdzA&riu=http%3a%2f%2fimg.99.com.cn%2fuploads%2f202012%2f449_111438_1.jpg&ehk=7vZcg2qvqq7OS2NbEXdlP5HA%2f6%2bLaHh5840UAARMLLI%3d&risl=&pid=ImgRaw&r=0"},{imageUrl:"https://tse2-mm.cn.bing.net/th/id/OIP-C.jpmOoKasCkpfRddDBjGaGQHaDP?w=310&h=153&c=7&r=0&o=5&pid=1.7"},{imageUrl:"https://tse4-mm.cn.bing.net/th/id/OIP-C.SHuggeGyxVoCr06u5ZpwAwHaDf?w=298&h=165&c=7&r=0&o=5&pid=1.7"},{imageUrl:"https://tse4-mm.cn.bing.net/th/id/OIP-C.RKZRJBeeJtnyUYG7V4e1FAHaDe?w=299&h=164&c=7&r=0&o=5&pid=1.7"}],categories:[{cuIcon:"appreciatefill",color:"red",badge:"推荐",mid:"1",name:"舌诊检测"},{cuIcon:"selection",color:"orange",badge:1,mid:"2",name:"体质测试"},{cuIcon:"videofill",color:"yellow",badge:12,mid:"3",name:"分享视频"},{cuIcon:"group",color:"cyan",badge:22,mid:"4",name:"分享动态"}],curriculum:[],projectList:[],lunchList:[],breakfastList:[],dinnerList:[],popArray:[],timer:s,user_id:t},"showT",!1)},activated:function(){console.log("((((((((((()))))))))))")},mounted:function(){e.$on("hidebox",this.hidebox),e.getStorageSync("userId")&&this.getData(),this.$nextTick((function(){var t=this;console.log(e.createSelectorQuery().in(this));var n=e.createSelectorQuery().in(this);n.select("#container").boundingClientRect((function(e){console.log(e),t.container=e})).exec()})),this.cWidth=e.upx2px(750),this.cHeight=e.upx2px(420),""==e.getStorageSync("itemlogin")?this.logion=!0:this.logion=!1},methods:{hidebox:function(){this.hide=!this.hide},getUserInfo:function(){var t=this;this.logion=!1,wx.getUserProfile({desc:"用于完善会员资料",success:function(n){console.log(n,"resinfo"),wx.login({success:function(o){console.log(n,"code"),console.log(n.userInfo.avatarUrl,n.userInfo.nickName),e.setStorageSync("avatarUrl",n.userInfo.avatarUrl),e.setStorageSync("nickName",n.userInfo.nickName);var r=e.getStorageSync("nickName"),a=e.getStorageSync("avatarUrl");console.log(r,a,"name"),o.code?(console.log(o.code,"getProfile"),t.setCode(o.code,n)):console.log(o.errMsg)},fail:function(e){console.log(e)}})},fail:function(e){}})},setCode:function(t,n){var o=this;wx.request({url:"https://xuyq.xyz:3306/user/wx/login",method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:{code:t,rawData:n.rawData,signature:n.signature,encrypteData:n.encryptedData,iv:n.iv},success:function(t){console.log(t,"loginRes"),200==t.data.status?(e.setStorageSync("itemlogin",t.data.data),o.getUserid(t.data.data),console.log(t.data.data)):e.showToast({title:"登录失败",icon:"none"})},fail:function(e){}})},getUserid:function(t){var n=this;e.request({url:"https://xuyq.xyz:3306/user/findUserId",method:"GET",header:{"content-type":"application/x-www-form-urlencoded"},data:{skey:t},success:function(t){console.log(t,"getUserid"),e.setStorage({key:"userId",data:t.data,success:function(){n.getData(),e.$emit("bodyhelper")}})}})},getData:function(){var t=this,n=e.getStorageSync("userId");this.user_id=n,console.log(n,"userId");var r={user_id:n},a={url:"user/getUserTarget",method:"get"};e.showLoading({title:"加载中"}),o.default.httpRequest(a,r).then((function(n){console.log(n),e.hideLoading(),200==n.statusCode&&(t.target=n.data,console.log(t.target))}));var i={url:"user/getUserCurrent",method:"get"};o.default.httpRequest(i,r).then((function(n){if(console.log(n),e.hideLoading(),200==n.statusCode){t.current=n.data,console.log(t.current);var o={name:"完成率",data:t.current.currentFat/t.target.targetFat};console.log("aaaaaaaaaaa",o.data),t.chartData.series.push(o)}}));var s={url:"recommend/recommendByUserbreakfast",method:"get"},u={url:"recommend/recommendByUserlunch",method:"get"},c={url:"recommend/recommendByUserdinner",method:"get"};o.default.httpRequest(s,r).then((function(n){e.hideLoading(),t.loadshow=!1,200==n.statusCode&&(t.curriculum=t.curriculum.concat(n.data),t.loadshow=!1)})),o.default.httpRequest(u,r).then((function(n){e.hideLoading(),t.loadshow=!1,200==n.statusCode&&(t.curriculum=t.curriculum.concat(n.data),t.loadshow=!1)})),o.default.httpRequest(c,r).then((function(n){e.hideLoading(),t.loadshow=!1,200==n.statusCode&&(t.curriculum=t.curriculum.concat(n.data),t.loadshow=!1)})),this.getMenuData()},getMenuData:function(){var t=this,n={url:"user/dayMeunBreakfast",method:"get"},r={url:"user/dayMeunLunch",method:"get"},a={url:"user/dayMeunDinner",method:"get"},i={user_id:this.user_id,createTime:this.timer};o.default.httpRequest(n,i).then((function(n){e.hideLoading(),t.show=!0,200==n.statusCode&&(t.breakfastList=n.data,t.help(t.breakfastList),t.dishshow=!1)})),o.default.httpRequest(r,i).then((function(n){e.hideLoading(),t.show=!0,200==n.statusCode&&(t.lunchList=n.data,t.help(t.lunchList),t.dishshow=!1)})),o.default.httpRequest(a,i).then((function(n){e.hideLoading(),t.show=!0,200==n.statusCode&&(t.dinnerList=n.data,t.help(t.dinnerList),t.dishshow=!1)}))},help:function(e){var t=this;e.forEach((function(e,n){t.helpIt(e)}))},bind:function(e){this.popArray=e,this.help(this.popArray),console.log(this.popArray,"popArray")},onChange:function(e){this.radio=parseInt(e.detail),console.log(this.radio,"onchange早中晚餐的绑定")},submitMenu:function(){var t=this;if(this.showT=!1,console.log(this.radio,this.popArray.menu,this.user_id,this.timer,this.volume),e.showLoading({title:"上传中"}),1==this.radio)var n={url:"user/addTodayMenubreakfast",method:"POST"};if(2==this.radio)n={url:"user/addTodayMenulunch",method:"POST"};if(3==this.radio)n={url:"user/addTodayMenudinner",method:"POST"};var r={user_id:this.user_id,menu:this.popArray.menu,foodnumber:this.volume,createTime:this.timer};o.default.httpRequest(n,r).then((function(n){e.hideLoading(),200==n.statusCode&&(console.log(200,"addsuccess"),wx.showToast({title:"提交成功",icon:"success",duration:2e3}),t.getMenuData())}))},popupClose:function(){e.$emit("hidebox")},bindIt:function(t){e.$emit("hidebox"),this.showT=!0,this.popArray=t,this.helpIt(this.popArray),console.log(this.popArray,"popArray")},helpIt:function(e){if(null!=e.ingredients){var t=/\,/,n=e.ingredients.slice(1,-1).split(t),o=[];n.forEach((function(e,t){var n=e.trim().replace(/\'/g,"");o.push(n)})),e.ingredients=o}if(null!=e.classifiction){var r=e.classifiction.slice(1,-1).split(","),a=[];r.forEach((function(e,t){var n=e.trim().replace(/\'/g,"");a.push(n)})),e.classifiction=a}if(null!=e.practice){var i=e.practice.slice(1,-1).split(","),s=[];i.forEach((function(e,t){var n=e.trim().replace(/\'/g,"");s.push(n)})),e.practice=s}},deleteMenuBreakfast:function(t){var n=this;console.log(t.menu,this.user_id,this.timer),e.request({url:"https://xuyq.xyz:3306/user/deleteTodayMeunbreakfast",method:"POST",header:{"content-type":"application/json"},data:{user_id:this.user_id,menu:t.menu,createTime:this.timer},success:function(e){console.log(200,"delete menu"),n.getMenuData(),wx.showToast({title:"删除成功",icon:"success",duration:2e3})}})},deleteMenuLunch:function(t){var n=this;console.log(t.menu,this.user_id,this.timer),e.request({url:"https://xuyq.xyz:3306/user/deleteTodayMeunlunch",method:"POST",header:{"content-type":"application/json"},data:{user_id:this.user_id,menu:t.menu,createTime:this.timer},success:function(e){console.log(200,"delete lunch"),n.getMenuData(),wx.showToast({title:"删除成功",icon:"success",duration:2e3})}})},deleteMenuDinner:function(t){var n=this;console.log(t.menu,this.user_id,this.timer),e.request({url:"https://xuyq.xyz:3306/user/deleteTodayMeundinner",method:"POST",header:{"content-type":"application/json"},data:{user_id:this.user_id,menu:t.menu,createTime:this.timer},success:function(e){console.log(200,"delete dinner"),n.getMenuData(),wx.showToast({title:"删除成功",icon:"success",duration:2e3})}})},scroll:function(e){console.log(e),this.old.scrollTop=e.detail.scrollTop},goCategorieslist:function(t){4==t.currentTarget.dataset.mid&&e.navigateTo({url:"../../page_upload/upload"}),3==t.currentTarget.dataset.mid&&e.navigateTo({url:"../../page_upload/uploadvideo"}),2==t.currentTarget.dataset.mid&&e.navigateTo({url:"../../page_me/mentalTest/index?mid=1"}),1==t.currentTarget.dataset.mid&&e.navigateTo({url:"../../page_me/diagnose"})},goBreakfast:function(){e.navigateTo({url:"../../page_menu/breakfast"})},goLunch:function(){e.navigateTo({url:"../../page_menu/lunch"})},goDinner:function(){e.navigateTo({url:"../../page_menu/dinner"})},goVideo:function(){e.navigateTo({})}}};t.default=u}).call(this,n(1)["default"])},332:function(e,t,n){"use strict";n.r(t);var o=n(333),r=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=r.a},333:function(e,t,n){}}]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/inedx.js.map
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/inedx-create-component',
    {
        'pages/index/inedx-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('1')['createComponent'](__webpack_require__(327))
        })
    },
    [['pages/index/inedx-create-component']]
]);
