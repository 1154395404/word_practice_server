(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-my-my~pages-search-search~pages-wordMeans-wordMeans"],{"0a4f":function(t,e,a){"use strict";a.r(e);var n=a("310a"),r=a("b811");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("1f27");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"dd215814",null,!1,n["a"],void 0);e["default"]=o.exports},"196a":function(t,e,a){"use strict";var n=a("48cc"),r=a.n(n);r.a},"1f27":function(t,e,a){"use strict";var n=a("b27c"),r=a.n(n);r.a},"1f65":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("c7eb")),i=n(a("1da1"));a("d81d");var u=n(a("fbf3")),o={name:"u-tabbar",mixins:[uni.$u.mpMixin,uni.$u.mixin,u.default],data:function(){return{placeholderHeight:0}},computed:{tabbarStyle:function(){var t={zIndex:this.zIndex};return uni.$u.deepMerge(t,uni.$u.addStyle(this.customStyle))},updateChild:function(){return[this.value,this.activeColor,this.inactiveColor]},updatePlaceholder:function(){return[this.fixed,this.placeholder]}},watch:{updateChild:function(){this.updateChildren()},updatePlaceholder:function(){this.setPlaceholderHeight()}},created:function(){this.children=[]},mounted:function(){this.setPlaceholderHeight()},methods:{updateChildren:function(){this.children.length&&this.children.map((function(t){return t.updateFromParent()}))},setPlaceholderHeight:function(){var t=this;return(0,i.default)((0,r.default)().mark((function e(){return(0,r.default)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.fixed&&t.placeholder){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,uni.$u.sleep(20);case 4:t.$uGetRect(".u-tabbar__content").then((function(e){var a=e.height,n=void 0===a?50:a;t.placeholderHeight=n}));case 5:case"end":return e.stop()}}),e)})))()}}};e.default=o},"24b7":function(t,e,a){"use strict";var n=a("663f"),r=a.n(n);r.a},"2ae8":function(t,e,a){"use strict";a.r(e);var n=a("a91e"),r=a("7ceb");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("24b7");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"5bbbcbb7",null,!1,n["a"],void 0);e["default"]=o.exports},"303c":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.event=e.default=void 0,a("4fadc"),a("d3b7"),a("159b"),a("caad"),a("2532"),a("b64b"),a("99af"),a("d9e2"),a("d401");var r=n(a("3835")),i=n(a("d4ec")),u=n(a("bee2")),o=function(){function t(){(0,i.default)(this,t),this.callbackId=0,this.eventList={}}return(0,u.default)(t,[{key:"publish",value:function(t){for(var e=arguments.length,a=new Array(e>1?e-1:0),n=1;n<e;n++)a[n-1]=arguments[n];var i=this.eventList[t];if(i){var u=Object.entries(i);u.forEach((function(t){var e=(0,r.default)(t,2),n=e[0],u=e[1];u.apply(void 0,a),n.includes("once")&&delete i[n]})),0===Object.keys(i).length&&delete this.eventList[t]}}},{key:"publishByInterceptor",value:function(t,e){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];var u=this.eventList[e];if(u){var o=Object.entries(u);o.forEach((function(e){var a=(0,r.default)(e,2),i=a[0],o=a[1];t.apply(void 0,n.concat([o])),i.includes("once")&&delete u[i]})),0===Object.keys(u).length&&delete this.eventList[e]}}},{key:"subscribeValidate",value:function(t,e){if("string"!==typeof t)throw new Error("第一个参数类型必须为string");if("function"!==typeof e)throw new Error("第二个参数必须为一个函数")}},{key:"unSubscribe",value:function(t,e){var a=this;return function(){delete a.eventList[t][e],0===Object.keys(a.eventList[t]).length&&delete a.eventList[t]}}},{key:"subscribe",value:function(t,e){this.subscribeValidate(t,e),this.eventList[t]||(this.eventList[t]={});var a=this.callbackId++;return this.eventList[t][a]=e,this.unSubscribe(t,a)}},{key:"subscribeOnce",value:function(t,e){this.subscribeValidate(t,e),this.eventList[t]||(this.eventList[t]={});var a="once"+this.callbackId++;return this.eventList[t][a]=e,this.unSubscribe(t,a)}}]),t}(),s=new o;e.event=s;var c=o;e.default=c},"310a":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uIcon:a("80e3").default,uLoadingIcon:a("668f").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show?a("div",{staticClass:"container animate__animated ",class:t.isPlay?"":"animate__slideOutRight",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goPlay({type:1})}}},[a("v-uni-view",{staticClass:"layout wrap f-r h-100"},[a("v-uni-view",{staticClass:"f-r j-b w-100 h-100"},[a("img",{staticClass:"cover",attrs:{src:t.musicInfo.cover,alt:""}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-text",{staticClass:"u-line-1"},[t._v(t._s(t.musicInfo.name+"/"+t.musicInfo.singer))]),a("v-uni-text",{staticClass:"u-line-1"},[t._v(t._s(t.time.curTime+"/"+t.time.surTime))])],1),a("v-uni-view",{staticClass:"control-wrap"},[a("v-uni-view",{attrs:{"hover-class":"toggleHover"}},[a("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.prePlay.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"rewind-left-fill",color:"rgba(0,0,0,0.7)",size:"38rpx"}})],1)],1),a("v-uni-view",{staticClass:"m-lr-20"},[a("u-loading-icon",{directives:[{name:"show",rawName:"v-show",value:t.musicLoading,expression:"musicLoading"}],staticClass:"playOrPause",attrs:{size:"22px",color:"rgba(0,0,0,0.7)"}}),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:!t.musicLoading,expression:"!musicLoading"}]},[a("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.play(!0)}}},[a("u-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isPlay,expression:"!isPlay"}],staticClass:"icon pause",attrs:{name:"play-right-fill",color:"rgba(0,0,0,0.7)",size:"48rpx"}})],1),a("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.play(!1)}}},[a("u-icon",{directives:[{name:"show",rawName:"v-show",value:t.isPlay,expression:"isPlay"}],attrs:{name:"pause",color:"rgba(0,0,0,0.7)",size:"48rpx"}})],1)],1)],1),a("v-uni-view",{attrs:{"hover-class":"toggleHover"}},[a("v-uni-view",{on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.lastPlay.apply(void 0,arguments)}}},[a("u-icon",{attrs:{name:"rewind-right-fill",color:"rgba(0,0,0,0.7)",size:"38rpx"}})],1)],1)],1)],1)],1)],1):t._e()},i=[]},3450:function(t,e,a){"use strict";a.r(e);var n=a("8f4c"),r=a("ce73");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("6784");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"6482b06c",null,!1,n["a"],void 0);e["default"]=o.exports},"35c4":function(t,e,a){"use strict";a.r(e);var n=a("7503"),r=a("cf08");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("6b51");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"b1c30928",null,!1,n["a"],void 0);e["default"]=o.exports},"3a06":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{isDot:{type:Boolean,default:uni.$u.props.badge.isDot},value:{type:[Number,String],default:uni.$u.props.badge.value},show:{type:Boolean,default:uni.$u.props.badge.show},max:{type:[Number,String],default:uni.$u.props.badge.max},type:{type:String,default:uni.$u.props.badge.type},showZero:{type:Boolean,default:uni.$u.props.badge.showZero},bgColor:{type:[String,null],default:uni.$u.props.badge.bgColor},color:{type:[String,null],default:uni.$u.props.badge.color},shape:{type:String,default:uni.$u.props.badge.shape},numberType:{type:String,default:uni.$u.props.badge.numberType},offset:{type:Array,default:uni.$u.props.badge.offset},inverted:{type:Boolean,default:uni.$u.props.badge.inverted},absolute:{type:Boolean,default:uni.$u.props.badge.absolute}}};e.default=n},"453d":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-safe-bottom[data-v-b1c30928]{width:100%}',""]),t.exports=e},"48cc":function(t,e,a){var n=a("ba55");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("532eac2c",n,!0,{sourceMap:!1,shadowMode:!1})},"4c0b":function(t,e,a){"use strict";a.r(e);var n=a("92ec"),r=a("5b60");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("196a");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"6718ea06",null,!1,n["a"],void 0);e["default"]=o.exports},"4c75":function(t,e,a){"use strict";a.r(e);var n=a("8003"),r=a("c5a8");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("996a");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"5a2f4b7f",null,!1,n["a"],void 0);e["default"]=o.exports},"4fadc":function(t,e,a){var n=a("23e7"),r=a("6f53").entries;n({target:"Object",stat:!0},{entries:function(t){return r(t)}})},5416:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("91b2")),i={name:"u-safe-bottom",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{safeAreaBottomHeight:0,isNvue:!1}},computed:{style:function(){return uni.$u.deepMerge({},uni.$u.addStyle(this.customStyle))}},mounted:function(){}};e.default=i},"5a39":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("5530")),i=a("26cb"),u=n(a("623d")),o={name:"MusicTab",data:function(){return{musicLoading:!1,show:!1}},methods:{lastPlay:function(){this.musicLoading=!0,u.default.lastMusic()},prePlay:function(){this.musicLoading=!0,u.default.preMusic()},go:function(t){},play:function(t){this.$store.commit("music/SET_ISPLAY",t)}},mounted:function(){},watch:{isPlay:{handler:function(t){var e=this;t?u.default.play():u.default.pause(),setTimeout((function(){e.show=t}),1e3)},immediate:!0},onCanplay:function(){u.default.play(),this.$store.commit("music/SET_ISPLAY",!0),this.musicLoading=!1},onPlay:function(){this.musicLoading=!1},onWaiting:function(){this.musicLoading=!0}},computed:(0,r.default)({},(0,i.mapState)("music",["musicInfo","isPlay","onCanplay","onPlay","onWaiting","time"]))};e.default=o},"5b60":function(t,e,a){"use strict";a.r(e);var n=a("6a3c"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},"5e98":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.container[data-v-dd215814]{width:100%;height:%?100?%;background:hsla(0,0%,100%,.4);position:fixed;z-index:1;bottom:%?140?%;-webkit-backdrop-filter:blur(%?25?%);backdrop-filter:blur(%?25?%)}.wrap[data-v-dd215814]{justify-content:flex-start;align-items:center}.wrap .cover[data-v-dd215814]{width:%?80?%;height:%?80?%;border-radius:%?10?%}.control-wrap[data-v-dd215814]{height:100%;display:flex;align-items:center}.info[data-v-dd215814]{flex:1;padding-left:%?40?%}',""]),t.exports=e},"5fb6":function(t,e,a){var n=a("a17d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("77734a04",n,!0,{sourceMap:!1,shadowMode:!1})},"623d":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n(a("c7eb")),i=n(a("1da1")),u=n(a("303c")),o=n(a("dd9e")),s=new u.default,c=uni.createInnerAudioContext();c.onPlay((function(t){o.default.commit("music/SET_onPlay")})),c.onCanplay((function(t){o.default.commit("music/SET_canplay")})),c.onWaiting((function(t){o.default.commit("music/SET_onWaiting")})),c.onPause((function(t){console.log("背景音频暂停事件")})),c.onStop((function(t){console.log("背景音频停止事件")})),c.onEnded((function(t){console.log("背景音频自然播放结束事件"),c.lastMusic()}));c.onWaiting((function(t){})),c.onCanplay((function(t){})),c.onMyEventTimeUpdate=function(t){return s.subscribe("onMyEventTimeUpdate",t)},c.playMusic=function(){var t=(0,i.default)((0,r.default)().mark((function t(e){var a=arguments;return(0,r.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.length>1&&void 0!==a[1]&&a[1],t.abrupt("return",0);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),c.preMusic=function(){var t=o.default.state.music.currentListIndex,e=o.default.state.music.musicList;t--,t<=-1&&(t=e.length-1),o.default.commit("music/SET_currentListIndex",t),c.playMusic(e[t],!0)},c.lastMusic=function(){var t=o.default.state.music.currentListIndex,e=o.default.state.music.musicList;t++,t>=e.length&&(t=0),o.default.commit("music/SET_currentListIndex",t),c.playMusic(e[t],!0)},c.setMusicList=function(t){o.default.commit("music/SET_musicList",t)};var l=c;e.default=l},"65da":function(t,e,a){"use strict";a.r(e);var n=a("6d5d"),r=a("d70d");for(var i in r)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return r[t]}))}(i);a("bb6d");var u=a("f0c5"),o=Object(u["a"])(r["default"],n["b"],n["c"],!1,null,"db3d682e",null,!1,n["a"],void 0);e["default"]=o.exports},"663f":function(t,e,a){var n=a("8577");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("0a477210",n,!0,{sourceMap:!1,shadowMode:!1})},6784:function(t,e,a){"use strict";var n=a("ba2e"),r=a.n(n);r.a},"6a3c":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var r=n(a("3a06")),i={name:"u-badge",mixins:[uni.$u.mpMixin,r.default,uni.$u.mixin],computed:{boxStyle:function(){return{}},badgeStyle:function(){var t={};if(this.color&&(t.color=this.color),this.bgColor&&!this.inverted&&(t.backgroundColor=this.bgColor),this.absolute&&(t.position="absolute",this.offset.length)){var e=this.offset[0],a=this.offset[1]||e;t.top=uni.$u.addUnit(e),t.right=uni.$u.addUnit(a)}return t},showValue:function(){switch(this.numberType){case"overflow":return Number(this.value)>Number(this.max)?this.max+"+":this.value;case"ellipsis":return Number(this.value)>Number(this.max)?"...":this.value;case"limit":return Number(this.value)>999?Number(this.value)>=9999?Math.floor(this.value/1e4*100)/100+"w":Math.floor(this.value/1e3*100)/100+"k":this.value;default:return Number(this.value)}}}};e.default=i},"6ac0":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".full[data-v-5a2f4b7f]{width:100%}",""]),t.exports=e},"6afa":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6482b06c], uni-scroll-view[data-v-6482b06c], uni-swiper-item[data-v-6482b06c]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-tabbar[data-v-6482b06c]{display:flex;flex-direction:column;flex:1;justify-content:center}.u-tabbar__content[data-v-6482b06c]{display:flex;flex-direction:column;background-color:#fff}.u-tabbar__content__item-wrapper[data-v-6482b06c]{height:50px;display:flex;flex-direction:row}.u-tabbar--fixed[data-v-6482b06c]{position:fixed;bottom:0;left:0;right:0}',""]),t.exports=e},"6b51":function(t,e,a){"use strict";var n=a("8108"),r=a.n(n);r.a},"6d5d":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uTabbar:a("3450").default,uTabbarItem:a("2ae8").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{},[a("u-tabbar",{staticClass:"tab",attrs:{value:t.$store.state.setting.tabbarIndex,fixed:!0,placeholder:!0,safeAreaInsetBottom:!0,activeColor:"#FF9125",inactiveColor:"#736F70"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.switchTab.apply(void 0,arguments)}}},[a("u-tabbar-item",{attrs:{text:"首页",icon:"home-fill"}}),a("u-tabbar-item",{attrs:{text:"搜索",icon:"search"}}),a("u-tabbar-item",{attrs:{text:"我的",icon:"account-fill"}})],1)],1)},i=[]},7503:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"u-safe-bottom",class:[!this.isNvue&&"u-safe-area-inset-bottom"],style:[this.style]})},r=[]},"7ceb":function(t,e,a){"use strict";a.r(e);var n=a("b142"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},8003:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"container"},[e("v-uni-view",{staticClass:"main-bg-1",staticStyle:{background:"white"}}),e("v-uni-view",{staticClass:"layout content",class:{full:2===this.type}},[this._t("default")],2),e("miu-tabbar")],1)},r=[]},8108:function(t,e,a){var n=a("453d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("3e6e9bbe",n,!0,{sourceMap:!1,shadowMode:!1})},8577:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-5bbbcbb7], uni-scroll-view[data-v-5bbbcbb7], uni-swiper-item[data-v-5bbbcbb7]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-tabbar-item[data-v-5bbbcbb7]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1}.u-tabbar-item__icon[data-v-5bbbcbb7]{display:flex;flex-direction:row;position:relative;width:%?150?%;justify-content:center}.u-tabbar-item__text[data-v-5bbbcbb7]{margin-top:2px;font-size:12px;color:#606266}',""]),t.exports=e},"8f4c":function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uSafeBottom:a("35c4").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-tabbar"},[a("v-uni-view",{ref:"u-tabbar__content",staticClass:"u-tabbar__content",class:[t.border&&"u-border-top",t.fixed&&"u-tabbar--fixed"],style:[t.tabbarStyle],on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.noop.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-tabbar__content__item-wrapper"},[t._t("default")],2),t.safeAreaInsetBottom?a("u-safe-bottom"):t._e()],1),t.placeholder?a("v-uni-view",{staticClass:"u-tabbar__placeholder",style:{height:t.placeholderHeight+"px"}}):t._e()],1)},i=[]},"91b2":function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={props:{}}},"92ec":function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.show&&(0!==Number(t.value)||t.showZero||t.isDot)?a("v-uni-text",{staticClass:"u-badge",class:[t.isDot?"u-badge--dot":"u-badge--not-dot",t.inverted&&"u-badge--inverted","horn"===t.shape&&"u-badge--horn","u-badge--"+t.type+(t.inverted?"--inverted":"")],style:[t.$u.addStyle(t.customStyle),t.badgeStyle]},[t._v(t._s(t.isDot?"":t.showValue))]):t._e()},r=[]},"996a":function(t,e,a){"use strict";var n=a("bc95"),r=a.n(n);r.a},"9f82":function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var r=n(a("65da")),i=n(a("0a4f")),u={name:"Layout",components:{MusicTab:i.default,MiuTabbar:r.default},props:{type:{type:Number,default:1}},data:function(){return{rotate:0}},mounted:function(){console.log("time")},beforeDestroy:function(){}};e.default=u},a17d:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.tab[data-v-db3d682e] .u-icon span{font-size:%?66?%}.tab[data-v-db3d682e] .u-tabbar__content__item-wrapper{height:%?140?%}.tab[data-v-db3d682e] .u-tabbar__content{background:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);width:100vw;max-width:%?748?%}.tab[data-v-db3d682e] .u-tabbar-item__text{margin-top:%?16?%;-webkit-transform:translateY(%?6?%);transform:translateY(%?6?%)}',""]),t.exports=e},a91e:function(t,e,a){"use strict";a.d(e,"b",(function(){return r})),a.d(e,"c",(function(){return i})),a.d(e,"a",(function(){return n}));var n={uIcon:a("80e3").default,uBadge:a("4c0b").default},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"u-tabbar-item",style:[t.$u.addStyle(t.customStyle)],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickHandler.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"u-tabbar-item__icon"},[t.icon?a("u-icon",{attrs:{name:t.icon,color:t.isActive?t.parentData.activeColor:t.parentData.inactiveColor,size:20}}):[t.isActive?t._t("active-icon"):t._t("inactive-icon")],a("u-badge",{attrs:{absolute:!0,offset:[0,t.dot?"34rpx":t.badge>9?"14rpx":"20rpx"],customStyle:t.badgeStyle,isDot:t.dot,value:t.badge||(t.dot?1:null),show:t.dot||t.badge>0}})],2),t._t("text",[a("v-uni-text",{staticClass:"u-tabbar-item__text",style:{color:t.isActive?t.parentData.activeColor:t.parentData.inactiveColor}},[t._v(t._s(t.text))])])],2)},i=[]},b142:function(t,e,a){"use strict";a("7a82");var n=a("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("c975");var r=n(a("ce89")),i={name:"u-tabbar-item",mixins:[uni.$u.mpMixin,uni.$u.mixin,r.default],data:function(){return{isActive:!1,parentData:{value:null,activeColor:"",inactiveColor:""}}},created:function(){this.init()},methods:{init:function(){this.updateParentData(),this.parent||uni.$u.error("u-tabbar-item必须搭配u-tabbar组件使用");var t=this.parent.children.indexOf(this);this.isActive=(this.name||t)===this.parentData.value},updateParentData:function(){this.getParentData("u-tabbar")},updateFromParent:function(){this.init()},clickHandler:function(){var t=this;this.$nextTick((function(){var e=t.parent.children.indexOf(t),a=t.name||e;a!==t.parent.value&&t.parent.$emit("change",a),t.$emit("click",a)}))}}};e.default=i},b27c:function(t,e,a){var n=a("5e98");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("41eddc97",n,!0,{sourceMap:!1,shadowMode:!1})},b811:function(t,e,a){"use strict";a.r(e);var n=a("5a39"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},b8e0:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"MiuTabbar",components:{},data:function(){return{}},methods:{switchTab:function(t){switch(this.$store.commit("setting/SET_TABBARINDEX",t),t){case 0:return void uni.switchTab({url:"/pages/index/index"});case 1:return void uni.switchTab({url:"/pages/search/search"});case 2:return void uni.switchTab({url:"/pages/my/my"})}}}};e.default=n},ba2e:function(t,e,a){var n=a("6afa");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("6a34ef0c",n,!0,{sourceMap:!1,shadowMode:!1})},ba55:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-view[data-v-6718ea06], uni-scroll-view[data-v-6718ea06], uni-swiper-item[data-v-6718ea06]{display:flex;flex-direction:column;flex-shrink:0;flex-grow:0;flex-basis:auto;align-items:stretch;align-content:flex-start}.u-badge[data-v-6718ea06]{border-top-right-radius:100px;border-top-left-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;display:flex;flex-direction:row;line-height:11px;text-align:center;font-size:11px;color:#fff}.u-badge--dot[data-v-6718ea06]{height:8px;width:8px}.u-badge--inverted[data-v-6718ea06]{font-size:13px}.u-badge--not-dot[data-v-6718ea06]{padding:2px 5px}.u-badge--horn[data-v-6718ea06]{border-bottom-left-radius:0}.u-badge--primary[data-v-6718ea06]{background-color:#3c9cff}.u-badge--primary--inverted[data-v-6718ea06]{color:#3c9cff}.u-badge--error[data-v-6718ea06]{background-color:#f56c6c}.u-badge--error--inverted[data-v-6718ea06]{color:#f56c6c}.u-badge--success[data-v-6718ea06]{background-color:#5ac725}.u-badge--success--inverted[data-v-6718ea06]{color:#5ac725}.u-badge--info[data-v-6718ea06]{background-color:#909399}.u-badge--info--inverted[data-v-6718ea06]{color:#909399}.u-badge--warning[data-v-6718ea06]{background-color:#f9ae3d}.u-badge--warning--inverted[data-v-6718ea06]{color:#f9ae3d}',""]),t.exports=e},bb6d:function(t,e,a){"use strict";var n=a("5fb6"),r=a.n(n);r.a},bc95:function(t,e,a){var n=a("6ac0");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=a("4f06").default;r("08cbd39e",n,!0,{sourceMap:!1,shadowMode:!1})},c5a8:function(t,e,a){"use strict";a.r(e);var n=a("9f82"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},ce73:function(t,e,a){"use strict";a.r(e);var n=a("1f65"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},ce89:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{name:{type:[String,Number,null],default:uni.$u.props.tabbarItem.name},icon:{icon:String,default:uni.$u.props.tabbarItem.icon},badge:{type:[String,Number,null],default:uni.$u.props.tabbarItem.badge},dot:{type:Boolean,default:uni.$u.props.tabbarItem.dot},text:{type:String,default:uni.$u.props.tabbarItem.text},badgeStyle:{type:[Object,String],default:uni.$u.props.tabbarItem.badgeStyle}}};e.default=n},cf08:function(t,e,a){"use strict";a.r(e);var n=a("5416"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},d70d:function(t,e,a){"use strict";a.r(e);var n=a("b8e0"),r=a.n(n);for(var i in n)["default"].indexOf(i)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(i);e["default"]=r.a},fbf3:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("a9e3");var n={props:{value:{type:[String,Number,null],default:uni.$u.props.tabbar.value},safeAreaInsetBottom:{type:Boolean,default:uni.$u.props.tabbar.safeAreaInsetBottom},border:{type:Boolean,default:uni.$u.props.tabbar.border},zIndex:{type:[String,Number],default:uni.$u.props.tabbar.zIndex},activeColor:{type:String,default:uni.$u.props.tabbar.activeColor},inactiveColor:{type:String,default:uni.$u.props.tabbar.inactiveColor},fixed:{type:Boolean,default:uni.$u.props.tabbar.fixed},placeholder:{type:Boolean,default:uni.$u.props.tabbar.placeholder}}};e.default=n}}]);