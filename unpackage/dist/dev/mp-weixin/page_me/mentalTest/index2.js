require('../common/vendor.js');(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["page_me/mentalTest/index2"],{283:function(s,e,t){"use strict";(function(s){t(5),t(6);i(t(3));var e=i(t(284));function i(s){return s&&s.__esModule?s:{default:s}}wx.__webpack_require_UNI_MP_PLUGIN__=t,s(e.default)}).call(this,t(1)["createPage"])},284:function(s,e,t){"use strict";t.r(e);var i=t(285),n=t(287);for(var r in n)"default"!==r&&function(s){t.d(e,s,(function(){return n[s]}))}(r);t(289);var o,l=t(15),u=Object(l["default"])(n["default"],i["render"],i["staticRenderFns"],!1,null,"2d343a62",null,!1,i["components"],o);u.options.__file="page_me/mentalTest/index2.vue",e["default"]=u.exports},285:function(s,e,t){"use strict";t.r(e);var i=t(286);t.d(e,"render",(function(){return i["render"]})),t.d(e,"staticRenderFns",(function(){return i["staticRenderFns"]})),t.d(e,"recyclableRender",(function(){return i["recyclableRender"]})),t.d(e,"components",(function(){return i["components"]}))},286:function(s,e,t){"use strict";var i;t.r(e),t.d(e,"render",(function(){return n})),t.d(e,"staticRenderFns",(function(){return o})),t.d(e,"recyclableRender",(function(){return r})),t.d(e,"components",(function(){return i}));try{i={uLine:function(){return t.e("uview-ui/components/u-line/u-line").then(t.bind(null,456))},uIcon:function(){return t.e("uview-ui/components/u-icon/u-icon").then(t.bind(null,386))},uMask:function(){return t.e("uview-ui/components/u-mask/u-mask").then(t.bind(null,463))}}}catch(l){if(-1===l.message.indexOf("Cannot find module")||-1===l.message.indexOf(".vue"))throw l;console.error(l.message),console.error("1. 排查组件名称拼写是否正确"),console.error("2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"),console.error("3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件")}var n=function(){var s=this,e=s.$createElement;s._self._c},r=!1,o=[];n._withStripped=!0},287:function(s,e,t){"use strict";t.r(e);var i=t(288),n=t.n(i);for(var r in i)"default"!==r&&function(s){t.d(e,s,(function(){return i[s]}))}(r);e["default"]=n.a},288:function(s,e,t){"use strict";(function(s){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{show:!1,getHeight:"",loading:!1,animation:"",mentalListActive:-1,noData:!1,hasData:!0,ATotal:0,Ascore:0,BTotal:0,Bscore:0,CTotal:0,Cscore:0,DTotal:0,Dscore:0,ETotal:0,Escore:0,FTotal:0,Fscore:0,GTotal:0,Gscore:0,HTotal:0,Hscore:0,ITotal:0,Iscore:0,resultlist1:[],resultlist2:[],result:"",num:0,itemList:[{number:"A",answer:"没有"},{number:"B",answer:"很少"},{number:"C",answer:"有时"},{number:"D",answer:"经常"},{number:"E",answer:"总是"}],DataList:[{id:5,answerno:"answerforyangxu5",fullname:"（1）您比别人容易患感冒吗?",answer:0,is_decrease:!1},{id:6,answerno:"answerforyangxu6",fullname:"（2）您吃(喝)凉的东西会感到不舒服或者怕吃(喝)凉的东西吗？",answer:0,is_decrease:!1},{id:7,answerno:"answerforyangxu7",fullname:"（3）您受凉或吃(喝)凉的东西后，容易腹泻(拉肚子)吗?",answer:0,is_decrease:!1},{id:1,answerno:"answerforyinxu1",fullname:"（4）您感到手脚心发热吗?",answer:0,is_decrease:!1},{id:2,answerno:"answerforyinxu2",fullname:"（5）您感觉身体、脸上发热吗？",answer:0,is_decrease:!1},{id:3,answerno:"answerforyinxu3",fullname:"（6）您皮肤或口唇干吗?",answer:0,is_decrease:!1},{id:4,answerno:"answerforyinxu4",fullname:"（7）您口唇的颜色比一般人红吗?",answer:0,is_decrease:!1},{id:5,answerno:"answerforyinxu5",fullname:"（8）您容易便秘或大便干燥吗?",answer:0,is_decrease:!1},{id:6,answerno:"answerforyinxu6",fullname:"（9）您面部两颧潮红或偏红吗?",answer:0,is_decrease:!1},{id:7,answerno:"answerforyinxu7",fullname:"（10）您感到眼睛干涩吗？",answer:0,is_decrease:!1},{id:8,answerno:"answerforyinxu8",fullname:"（11）您感到口干咽燥、总想喝水吗？",answer:0,is_decrease:!1},{id:1,answerno:"answerfortanxu1",fullname:"（12）您感到胸闷或腹部胀满吗？",answer:0,is_decrease:!1},{id:2,answerno:"answerfortanxu2",fullname:"（13）您感到身体沉重不轻松或不爽快吗?",answer:0,is_decrease:!1},{id:3,answerno:"answerfortanxu3",fullname:"（14）您腹部肥满松软吗?",answer:0,is_decrease:!1},{id:4,answerno:"answerfortanxu4",fullname:"（15）您有额部油脂分泌多的现象吗?",answer:0,is_decrease:!1},{id:5,answerno:"answerfortanxu5",fullname:"（16）您上眼睑比别人肿（上眼睑有轻微隆起的现象）吗?",answer:0,is_decrease:!1},{id:6,answerno:"answerfortanxu6",fullname:"（17）您嘴里有黏黏的感觉吗?",answer:0,is_decrease:!1},{id:7,answerno:"answerfortanxu7",fullname:"（18）您平时痰多，特别是咽喉部总感到有痰堵着吗?",answer:0,is_decrease:!1},{id:8,answerno:"answerfortanxu8",fullname:"（19）您舌苔厚腻或有舌苔厚厚的感觉吗?",answer:0,is_decrease:!1},{id:1,answerno:"answerforshire1",fullname:"（20）您面部或鼻部有油腻感或者油亮发光吗?",answer:0,is_decrease:!1}],progress:0,currentPoints:0,isShare:3,showMessage:""}},onShareAppMessage:function(s){return{title:"我已完成答题，快来参与吧"}},onLoad:function(){var e=this;s.getSystemInfo({success:function(s){e.getHeight=s.windowHeight}}),setTimeout((function(){e.loading=!0}),300),this.getData()},watch:{progress:function(s){var e=this;console.log(this.progress+"% - 进度"),100==this.progress&&(this.noData=!0,this.hasData=!1,setTimeout((function(){e.show=!0}),1300))}},methods:{compute:function(s){if(this.pingheresult(),this.qixuresult(),this.yangxuresult(),this.yinxuresult(),this.tanxuresult(),this.shireresult(),this.xueyuresult(),this.qiyuresult(),this.tebingresult(),this.Bscore>=13?this.resultlist1.push("气虚质"):this.Bscore<13&&this.Bscore>=10&&this.resultlist2.push("有气虚倾向"),this.Cscore>=13?this.resultlist1.push("阳虚质"):this.Cscore<13&&this.Cscore>=10&&this.resultlist2.push("有阳虚倾向"),this.Dscore>=13?this.resultlist1.push("阴虚质"):this.Dscore<13&&this.Dscore>=10&&this.resultlist2.push("有阴虚倾向"),this.Escore>=13?this.resultlist1.push("痰湿质"):this.Escore<13&&this.Escore>=10&&this.resultlist2.push("有痰湿倾向"),this.Fscore>=13?this.resultlist1.push("湿热质"):this.Fscore<13&&this.Fscore>=10&&this.resultlist2.push("有湿热倾向"),this.Gscore>=13?this.resultlist1.push("血瘀质"):this.Gscore<13&&this.Gscore>=10&&this.resultlist2.push("有血瘀倾向"),this.Hscore>=13?this.resultlist1.push("气郁质"):this.Hscore<13&&this.Hscore>=10&&this.resultlist2.push("有气郁倾向"),this.Iscore>=13?this.resultlist1.push("特禀质"):this.Iscore<13&&this.Iscore>=10&&this.resultlist2.push("有特禀倾向"),console.log(this.resultlist1),console.log(this.resultlist2),this.resultlist1.length>0){for(var e=0;e<this.resultlist1.length-1;e++)this.result=this.result+this.resultlist1[e]+"，";this.result=this.result+this.resultlist1[e]}else if(0==this.resultlist1.length&&this.Ascore>=60&&0==this.resultlist2.length)this.result="平和质";else if(0==this.resultlist1.length&&this.Ascore>=60&&this.resultlist2.length>0){this.result="基本是平和质，";for(e=0;e<this.resultlist2.length-1;e++)this.result=this.result+this.resultlist2[e]+"，";this.result=this.result+this.resultlist2[e]}else if(0==this.resultlist1.length&&this.Ascore<60&&0==this.resultlist2.length)this.result="非平和质";else if(0==this.resultlist1.length&&this.Ascore<60&&this.resultlist2.length>0){this.result="非平和质，";for(e=0;e<this.resultlist2.length-1;e++)this.result=this.result+this.resultlist2[e]+"，";this.result=this.result+this.resultlist2[e]}},pingheresult:function(){this.Ascore=100*[(this.ATotal-8)/32],this.Ascore=this.Ascore.toFixed(1),console.log("pinghe score = "+this.Ascore)},qixuresult:function(){this.Bscore=100*[(this.BTotal-8)/32],this.Bscore=this.Bscore.toFixed(1),console.log("qixu score = "+this.Bscore)},yangxuresult:function(){this.Cscore=100*[(this.CTotal-7)/28],this.Cscore=this.Cscore.toFixed(1),console.log("yangxu score = "+this.Cscore)},yinxuresult:function(){this.Dscore=100*[(this.DTotal-8)/32],this.Dscore=this.Dscore.toFixed(1),console.log("yinxu score = "+this.Dscore)},tanxuresult:function(){this.Escore=100*[(this.ETotal-8)/32],this.Escore=this.Escore.toFixed(1),console.log("tanxu score = "+this.Escore)},shireresult:function(){this.Fscore=100*[(this.FTotal-7)/28],this.Fscore=this.Fscore.toFixed(1),console.log("shire score = "+this.Fscore)},xueyuresult:function(){this.Gscore=100*[(this.GTotal-7)/28],this.Gscore=this.Gscore.toFixed(1),console.log("xuexu score = "+this.Gscore)},qiyuresult:function(){this.Hscore=100*[(this.HTotal-7)/28],this.Hscore=this.Hscore.toFixed(1),console.log("qiyu score = "+this.Hscore)},tebingresult:function(){this.Iscore=100*[(this.ITotal-7)/28],this.Iscore=this.Iscore.toFixed(1),console.log("tebing score = "+this.Iscore)},getData:function(){this.progress=0},Toggle:function(s,e){var t=this;console.log(s+1);var i=s+1;this.num<8?this.ATotal=this.ATotal+i:this.num<16?this.BTotal=this.BTotal+i:this.num<23?this.CTotal=this.CTotal+i:this.num<31?this.DTotal=this.DTotal+i:this.num<39?this.ETotal=this.ETotal+i:this.num<46?this.FTotal=this.FTotal+i:this.num<53?this.GTotal=this.GTotal+i:this.num<60?this.HTotal=this.HTotal+i:this.num<67&&(this.ITotal=this.ITotal+i),this.mentalListActive=s,console.log(this.num+1),console.log("length:",this.DataList.length),this.progress=100/this.DataList.length*(this.num+1).toFixed(2),console.log(this.ATotal,this.Ascore),this.progress<100?setTimeout((function(){t.animation="animation-slide-left",t.num++,setTimeout((function(){t.mentalListActive=-1,t.animation=""}),800)}),300):(console.log("没有下一题了"),this.compute(),console.log(this.result),this.show=!0)},closeMask:function(){this.show=!1},goExplain:function(){s.navigateTo({url:"./explain"})}}};e.default=t}).call(this,t(1)["default"])},289:function(s,e,t){"use strict";t.r(e);var i=t(290),n=t.n(i);for(var r in i)"default"!==r&&function(s){t.d(e,s,(function(){return i[s]}))}(r);e["default"]=n.a},290:function(s,e,t){}},[[283,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/page_me/mentalTest/index2.js.map