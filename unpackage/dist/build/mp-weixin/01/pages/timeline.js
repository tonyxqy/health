require('../common/runtime.js');require('../common/vendor.js');require('../common/main.js');(global["webpackJsonp_01"]=global["webpackJsonp_01"]||[]).push([["pages/timeline"],{"420e":function(n,t,e){"use strict";e.r(t);var r=e("b40e"),i=e.n(r);for(var u in r)"default"!==u&&function(n){e.d(t,n,(function(){return r[n]}))}(u);t["default"]=i.a},"422f":function(n,t,e){"use strict";var r=e("6e32"),i=e.n(r);i.a},"565c":function(n,t,e){"use strict";var r=e("e919"),i=e.n(r);i.a},"6e32":function(n,t,e){},"70dc":function(n,t,e){"use strict";(function(n){e("a385"),e("921b");r(e("66fd"));var t=r(e("b81c"));function r(n){return n&&n.__esModule?n:{default:n}}wx.__webpack_require_UNI_MP_PLUGIN__=e,n(t.default)}).call(this,e("543d")["createPage"])},"9c08":function(n,t,e){"use strict";e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return u})),e.d(t,"a",(function(){return r}));var r={uTabsSwiper:function(){return Promise.all([e.e("common/vendor"),e.e("uview-ui/components/u-tabs-swiper/u-tabs-swiper")]).then(e.bind(null,"bcc1"))}},i=function(){var n=this,t=n.$createElement;n._self._c},u=[]},b40e:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{show:1,current:0,list:[{name:"UI设计"},{name:"小程序/App"},{name:"网站开发"},{name:"行业解决方案"}],swiperCurrent:0,dx:0}},onLoad:function(n){console.log(n.mid),1==n.mid?this.show=1:this.show=2},methods:{change:function(n){this.swiperCurrent=n},transition:function(n){var t=n.detail.dx;this.$refs.tabs.setDx(t)},animationfinish:function(n){var t=n.detail.current;this.$refs.tabs.setFinishCurrent(t),this.swiperCurrent=t,this.current=t}}};t.default=r},b81c:function(n,t,e){"use strict";e.r(t);var r=e("9c08"),i=e("420e");for(var u in i)"default"!==u&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("565c"),e("422f");var c,a=e("f0c5"),o=Object(a["a"])(i["default"],r["b"],r["c"],!1,null,"6cbffddf",null,!1,r["a"],c);t["default"]=o.exports},e919:function(n,t,e){}},[["70dc","common/runtime","common/vendor"]]]);