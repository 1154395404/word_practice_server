(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-bookDetail-bookDetail"],{"011c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.immersive[data-v-164674f5]{width:100%;position:absolute;z-index:-1;margin-top:%?-140?%}.full[data-v-164674f5]{width:100%}.nav-my[data-v-164674f5]{padding:%?40?% 0;width:100%;border-bottom:%?1?% solid rgba(0,0,0,.5)}.nav-my .back[data-v-164674f5]{position:absolute;left:%?50?%}.nav-my .back[data-v-164674f5]  .u-icon__icon{font-weight:700!important}.nav-my uni-text[data-v-164674f5]{font-size:%?48?%;color:#303133;font-weight:700}',""]),t.exports=e},"0cb8":function(t,e,n){"use strict";n.r(e);var a=n("884a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},1662:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,".wrap[data-v-77037fae]{position:relative;\r\n  /*margin-top: 200rpx;*/width:%?150?%;height:%?150?%;background:#ff9125;\r\n  /*outline: 1px solid red;*/\r\n  /*border: 1rpx solid black;*/border-radius:50%}.circle[data-v-77037fae]{position:absolute;\r\n  /*width: 20rpx;*/\r\n  /*height: 20rpx;*/width:100%;height:100%;background:#ff9125;border-radius:50%;z-index:-1\r\n\r\n  /*animation: bigCircle 1s;*/}.animate[data-v-77037fae]{-webkit-animation:bigCircle-data-v-77037fae .6s ease-out;animation:bigCircle-data-v-77037fae .6s ease-out}@-webkit-keyframes bigCircle-data-v-77037fae{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:.2}}@keyframes bigCircle-data-v-77037fae{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(1.5);transform:scale(1.5);opacity:.2}}",""]),t.exports=e},"1ad3":function(t,e,n){"use strict";var a=n("9c1d"),i=n.n(a);i.a},"303c":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.event=e.default=void 0,n("4fadc"),n("d3b7"),n("159b"),n("caad"),n("2532"),n("b64b"),n("99af"),n("d9e2"),n("d401");var i=a(n("3835")),r=a(n("d4ec")),o=a(n("bee2")),u=function(){function t(){(0,r.default)(this,t),this.callbackId=0,this.eventList={}}return(0,o.default)(t,[{key:"publish",value:function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=this.eventList[t];if(r){var o=Object.entries(r);o.forEach((function(t){var e=(0,i.default)(t,2),a=e[0],o=e[1];o.apply(void 0,n),a.includes("once")&&delete r[a]})),0===Object.keys(r).length&&delete this.eventList[t]}}},{key:"publishByInterceptor",value:function(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=this.eventList[e];if(o){var u=Object.entries(o);u.forEach((function(e){var n=(0,i.default)(e,2),r=n[0],u=n[1];t.apply(void 0,a.concat([u])),r.includes("once")&&delete o[r]})),0===Object.keys(o).length&&delete this.eventList[e]}}},{key:"subscribeValidate",value:function(t,e){if("string"!==typeof t)throw new Error("第一个参数类型必须为string");if("function"!==typeof e)throw new Error("第二个参数必须为一个函数")}},{key:"unSubscribe",value:function(t,e){var n=this;return function(){delete n.eventList[t][e],0===Object.keys(n.eventList[t]).length&&delete n.eventList[t]}}},{key:"subscribe",value:function(t,e){this.subscribeValidate(t,e),this.eventList[t]||(this.eventList[t]={});var n=this.callbackId++;return this.eventList[t][n]=e,this.unSubscribe(t,n)}},{key:"subscribeOnce",value:function(t,e){this.subscribeValidate(t,e),this.eventList[t]||(this.eventList[t]={});var n="once"+this.callbackId++;return this.eventList[t][n]=e,this.unSubscribe(t,n)}}]),t}(),s=new u;e.event=s;var c=u;e.default=c},"3b37":function(t,e,n){"use strict";var a=n("dd62"),i=n.n(a);i.a},"4fadc":function(t,e,n){var a=n("23e7"),i=n("6f53").entries;a({target:"Object",stat:!0},{entries:function(t){return i(t)}})},"5aec":function(t,e,n){"use strict";n.r(e);var a=n("801b"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},"5b9e":function(t,e,n){"use strict";n.r(e);var a=n("ff94"),i=n("6cea");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("3b37");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"2f0aff42",null,!1,a["a"],void 0);e["default"]=u.exports},"623d":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("c7eb")),r=a(n("1da1")),o=a(n("303c")),u=a(n("dd9e")),s=new o.default,c=uni.createInnerAudioContext();c.onPlay((function(t){u.default.commit("music/SET_onPlay")})),c.onCanplay((function(t){u.default.commit("music/SET_canplay")})),c.onWaiting((function(t){u.default.commit("music/SET_onWaiting")})),c.onPause((function(t){console.log("背景音频暂停事件")})),c.onStop((function(t){console.log("背景音频停止事件")})),c.onEnded((function(t){console.log("背景音频自然播放结束事件"),c.lastMusic()}));c.onWaiting((function(t){})),c.onCanplay((function(t){})),c.onMyEventTimeUpdate=function(t){return s.subscribe("onMyEventTimeUpdate",t)},c.playMusic=function(){var t=(0,r.default)((0,i.default)().mark((function t(e){var n=arguments;return(0,i.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n.length>1&&void 0!==n[1]&&n[1],t.abrupt("return",0);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.preMusic=function(){var t=u.default.state.music.currentListIndex,e=u.default.state.music.musicList;t--,t<=-1&&(t=e.length-1),u.default.commit("music/SET_currentListIndex",t),c.playMusic(e[t],!0)},c.lastMusic=function(){var t=u.default.state.music.currentListIndex,e=u.default.state.music.musicList;t++,t>=e.length&&(t=0),u.default.commit("music/SET_currentListIndex",t),c.playMusic(e[t],!0)},c.setMusicList=function(t){u.default.commit("music/SET_musicList",t)};var f=c;e.default=f},6963:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uIcon:n("80e3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"container"},[n("v-uni-view",{staticClass:"main-bg-1"}),n("v-uni-view",{staticClass:"layout content",class:{full:!0}},[n("v-uni-view",{staticClass:"pos-r"},[n("v-uni-view",{staticClass:"nav-my f-r m-t-20"},[n("u-icon",{staticClass:"back",attrs:{name:"arrow-left",size:"48rpx",color:"#303133"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}}),n("v-uni-text",[t._v(t._s(t.title))])],1),n("v-uni-view",{class:{immersive:t.immersive}},[t._t("default")],2)],1)],1)],1)},r=[]},"6cea":function(t,e,n){"use strict";n.r(e);var a=n("7ed8"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},7144:function(t,e,n){"use strict";var a=n("d332"),i=n.n(a);i.a},"74f5c":function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.word-item[data-v-2f0aff42]{padding:%?20?% %?30?%;border-bottom:%?1?% solid #ccc}.word-text[data-v-2f0aff42]{font-size:%?46?%;font-weight:700;color:#303133}.word-list-wrap[data-v-2f0aff42]{height:calc(100vh - %?600?%)}.layout[data-v-2f0aff42]{position:relative}.btn-group[data-v-2f0aff42]{width:100%;position:absolute;bottom:%?-100?%}',""]),t.exports=e},"7ed8":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=a(n("c7eb")),o=a(n("1da1")),u=a(n("82f9")),s=n("26cb"),c=a(n("cf60")),f=a(n("f92d")),d=n("4136"),l={components:{WordAudioPlay:f.default,BookItem:c.default,LayoutNav:u.default},onLoad:function(t){},data:function(){return{}},methods:{edit:function(){uni.navigateTo({url:"/pages/uploadWordBook/uploadWordBook?isAddMode=false"})},del:function(){var t=this;uni.showModal({title:"提示",content:"确定要删除此单词本嘛",success:function(){var e=(0,o.default)((0,r.default)().mark((function e(n){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.confirm){e.next=7;break}return e.next=3,(0,d.deleteOperate)(t.currentBookInfo);case 3:uni.showToast({title:"删除成功",duration:2e3}),uni.navigateBack(),e.next=8;break;case 7:n.cancel&&console.log("用户点击取消");case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})},start:function(){var t=this;return(0,o.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("user/update",{currentBookId:t.currentBookInfo._id});case 2:t.goTab.index();case 3:case"end":return e.stop()}}),e)})))()},query:function(t){uni.navigateTo({url:"/pages/wordMeans/wordMeans?word="+t.word})}},computed:(0,i.default)((0,i.default)({},(0,s.mapState)("book",["currentBookInfo"])),{},{isAuthority:function(){return"-1"!==this.currentBookInfo.categoryId}})};e.default=l},"801b":function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"LayoutNav",props:{title:{type:String,default:"我的标题"},immersive:{type:Boolean,default:!1}},data:function(){return{rotate:0}},methods:{back:function(){uni.navigateBack()}},mounted:function(){},beforeDestroy:function(){}};e.default=a},"82f9":function(t,e,n){"use strict";n.r(e);var a=n("6963"),i=n("5aec");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("1ad3");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"164674f5",null,!1,a["a"],void 0);e["default"]=u.exports},"884a":function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("623d")),r={name:"WordAudioPlay",props:{src:{type:String,default:""},size:{type:Object,default:function(){return{width:"150rpx",height:"150rpx",size:"64rpx"}}}},data:function(){return{animate:!1}},methods:{play:function(){var t=this;i.default.src="http://dict.youdao.com/dictvoice?type=0&audio=".concat(this.src),i.default.play(),this.animate=!0,setTimeout((function(){t.animate=!1}),1e3)}},mounted:function(){},watch:{src:{handler:function(t){i.default.src="http://dict.youdao.com/dictvoice?type=0&audio=".concat(t),i.default.play()},immediate:!1}}};e.default=r},"95eb":function(t,e,n){"use strict";var a=n("f86a"),i=n.n(a);i.a},"9c1d":function(t,e,n){var a=n("011c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("35e0fbbf",a,!0,{sourceMap:!1,shadowMode:!1})},a408:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap f-r",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.go.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"l"},[n("miu-image",{attrs:{src:t.bookInfo.cover,width:"200rpx",height:"250rpx",radius:"10rpx"}})],1),n("v-uni-view",{staticClass:"r m-l-30 f-c j-a  a-s "},[n("v-uni-text",{staticClass:"title u-line-1"},[t._v(t._s(t.bookInfo.name))]),n("v-uni-text",{staticClass:"otherInfo u-line-1"},[t._v("单词量 : "+t._s(t.bookInfo.wordArr?t.bookInfo.wordArr.length:0))]),"-1"===t.bookInfo.categoryId?n("v-uni-view",[n("v-uni-text",{staticClass:"otherInfo u-line-1"},[t._v("创建日期 : "+t._s(t.day(t.bookInfo.timeSign).format("YYYY-MM-DD")))])],1):n("v-uni-view",[n("v-uni-text",{staticClass:"otherInfo u-line-1"},[t._v("单词书分类 : "+t._s(t.list.find((function(e){return e._id===t.bookInfo.categoryId}))?t.list.find((function(e){return e._id===t.bookInfo.categoryId})).name:"null"))])],1),"list"===t.mode||"index"===t.mode?n("v-uni-text",{staticClass:"otherInfo u-line-2"},[t._v("描述 : "+t._s(t.bookInfo.desc||"无描述"))]):n("v-uni-text",{staticClass:"otherInfo "},[t._v("描述 : "+t._s(t.bookInfo.desc||"无描述"))])],1)],1)},i=[]},a7fd:function(t,e,n){"use strict";n.r(e);var a=n("f19a"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return a[t]}))}(r);e["default"]=i.a},ab6f:function(t,e,n){var a=n("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrap[data-v-988eec9e]{margin-top:%?50?%}.l[data-v-988eec9e]{align-self:flex-start}.r[data-v-988eec9e]{flex:1}.title[data-v-988eec9e]{font-size:%?34?%;font-weight:700}.otherInfo[data-v-988eec9e]{color:#606266;margin-top:%?10?%}',""]),t.exports=e},c890:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uIcon:n("80e3").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"wrap f-c",style:t.size,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.play.apply(void 0,arguments)}}},[n("u-icon",{attrs:{name:"volume-fill",color:"white",size:t.size.size}}),n("v-uni-view",{staticClass:"circle",class:{animate:t.animate}})],1)},r=[]},cf60:function(t,e,n){"use strict";n.r(e);var a=n("a408"),i=n("a7fd");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("7144");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"988eec9e",null,!1,a["a"],void 0);e["default"]=u.exports},d332:function(t,e,n){var a=n("ab6f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("1b5e7034",a,!0,{sourceMap:!1,shadowMode:!1})},dd62:function(t,e,n){var a=n("74f5c");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("756c725f",a,!0,{sourceMap:!1,shadowMode:!1})},f19a:function(t,e,n){"use strict";n("7a82");var a=n("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("5530")),r=a(n("3f0e")),o=n("26cb"),u={name:"BookItem",components:{MiuImage:r.default},data:function(){return{loading:!1}},props:{bookInfo:{type:Object,default:function(){return{desc:"sssss",createDate:new Date,categoryId:"-1",id:"-1",wordArr:[],name:"歌曲名歌曲名歌曲名歌曲名歌曲名",singer:"歌手名",album:"专辑名",cover:"https://miumiu-1301368439.cos.ap-beijing.myqcloud.com/word_cover/02b5191ba482486a964ed7ec3e4519b.png"}}},mode:{type:String,default:"list"}},methods:{go:function(){"detail"!==this.mode&&"index"!==this.mode&&(this.$store.commit("book/SET_currentBookInfo",this.bookInfo),uni.navigateTo({url:"/pages/bookDetail/bookDetail"}))}},computed:(0,i.default)({},(0,o.mapState)("category",["list"]))};e.default=u},f86a:function(t,e,n){var a=n("1662");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=n("4f06").default;i("5d378470",a,!0,{sourceMap:!1,shadowMode:!1})},f92d:function(t,e,n){"use strict";n.r(e);var a=n("c890"),i=n("0cb8");for(var r in i)["default"].indexOf(r)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(r);n("95eb");var o=n("f0c5"),u=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"77037fae",null,!1,a["a"],void 0);e["default"]=u.exports},ff94:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return a}));var a={uButton:n("1456").default},i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("layout-nav",{attrs:{title:t.isAuthority?"单词书详情":"单词本详情"}},[n("v-uni-view",{staticClass:"layout"},[n("book-item",{attrs:{mode:"detail","book-info":t.currentBookInfo}}),n("v-uni-scroll-view",{staticClass:"word-list-wrap m-t-20",attrs:{"scroll-y":!0}},t._l(t.currentBookInfo.wordArr,(function(e){return n("v-uni-view",{staticClass:"word-item f-r j-b",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.query(e)}}},[n("v-uni-text",{staticClass:"word-text"},[t._v(t._s(e.word))]),n("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),function(){}.apply(void 0,arguments)}}},[n("word-audio-play",{attrs:{size:{width:"50rpx",height:"50rpx",size:"20rpx"},src:e.word}})],1)],1)})),1),n("v-uni-view",{staticClass:"btn-group"},[t.isAuthority?t._e():n("v-uni-view",{staticClass:"f-r"},[n("u-button",{attrs:{type:"warning "},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.edit.apply(void 0,arguments)}}},[t._v("编辑单词本")]),n("u-button",{staticClass:"m-l-20",attrs:{type:"error"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.del.apply(void 0,arguments)}}},[t._v("删除单词本")])],1),n("u-button",{staticClass:"m-t-20",attrs:{type:"warning"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.start.apply(void 0,arguments)}}},[t._v("开始学习")])],1)],1)],1)],1)},r=[]}}]);