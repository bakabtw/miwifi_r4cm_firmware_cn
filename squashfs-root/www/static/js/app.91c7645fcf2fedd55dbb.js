webpackJsonp([16],{0:function(n,e,t){t("briU"),n.exports=t("NHnr")},JzCU:function(n,e,t){"use strict";var o=t("RrGN"),i=t.n(o),r=t("C7Lr")(i.a,null,!1,null,null,null);e.default=r.exports},NHnr:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=t("IvJb"),i={render:function(){var n=this.$createElement,e=this._self._c||n;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var r=t("C7Lr")({name:"App"},i,!1,function(n){t("qdrX")},null,null).exports,a=t("zO6J");o.a.use(a.a);var c=new a.a({routes:[{path:"/",redirect:"/home"},{path:"/dhcp",name:"timeTable",component:function(n){return Promise.all([t.e(0),t.e(8)]).then(function(){var e=[t("ossN")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/cannot_find_mode",name:"cannot_find_mode",component:function(n){return Promise.all([t.e(0),t.e(3)]).then(function(){var e=[t("pdvs")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/wired",name:"wired",component:function(n){return Promise.all([t.e(0),t.e(13)]).then(function(){var e=[t("jcZj")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/wireless",name:"wireless",component:function(n){return Promise.all([t.e(0),t.e(1)]).then(function(){var e=[t("8UC1")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/wifi_complete",name:"wifi_complete",component:function(n){return t.e(0).then(function(){var e=[t("HbzE")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/static",name:"staic",component:function(n){return Promise.all([t.e(0),t.e(14)]).then(function(){var e=[t("wR8U")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/error1",name:"error1",component:function(n){return Promise.all([t.e(0),t.e(5)]).then(function(){var e=[t("KVR/")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/home",name:"home",component:function(n){return Promise.all([t.e(0),t.e(7)]).then(function(){var e=[t("vkyI")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/error2",name:"error2",component:function(n){return Promise.all([t.e(0),t.e(10)]).then(function(){var e=[t("Uolk")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/guide",name:"guide",component:function(n){return Promise.all([t.e(0),t.e(4)]).then(function(){var e=[t("jVDi")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/operators",name:"operators",component:function(n){return Promise.all([t.e(0),t.e(11)]).then(function(){var e=[t("cafx")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/get_from_old_router",name:"get_from_old_router",component:function(n){return Promise.all([t.e(0),t.e(6)]).then(function(){var e=[t("z0Ua")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/download",name:"download",component:function(n){return t.e(2).then(function(){var e=[t("5dr8")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/agreement",name:"agreement",component:function(n){return Promise.all([t.e(0),t.e(9)]).then(function(){var e=[t("Me73")];n.apply(null,e)}.bind(this)).catch(t.oe)}},{path:"/privacy",name:"privacy",component:function(n){return Promise.all([t.e(0),t.e(12)]).then(function(){var e=[t("MkAd")];n.apply(null,e)}.bind(this)).catch(t.oe)}}]}),u=t("8zml"),s=t.n(u),p=t("rVsN"),l=t.n(p),f=t("aozt"),m=t.n(f),h=t("6iV/"),d=t.n(h);console.log("production");var g="http://"+window.location.host+"/cgi-bin/luci";function v(n){var e,t=new RegExp("(^| )"+n+"=([^;]*)(;|$)");return(e=document.cookie.match(t))?unescape(e[2]):null}function w(n,e){return new l.a(function(t,o){v("token")&&(m.a.defaults.baseURL="http://"+window.location.host+"/cgi-bin/luci/;stok="+v("token")),m.a.get(n,{params:e}).then(function(n){t(n)}).catch(function(n){o(n)})})}function b(n,e){return v("token")&&(m.a.defaults.baseURL="http://"+window.location.host+"/cgi-bin/luci/;stok="+v("token")),new l.a(function(t,o){m.a.post(n,d.a.stringify(e)).then(function(n){t(n)}).catch(function(n){o(n)})})}m.a.defaults.baseURL=g,m.a.defaults.timeout=5e4,m.a.interceptors.request.use(function(n){return console.log("request"),n},function(n){return setTimeout(function(){console.log("requst error")},3e3),l.a.reject(n)}),m.a.interceptors.response.use(function(n){return setTimeout(function(){console.log("response")},3e3),n},function(n){return setTimeout(function(){console.log("response error")},1e3),l.a.reject(n)});var y=function(n){return w("/api/misystem/set_log",n)},_={get:w,post:b,getRouterInfo:function(n){return w("/api/misystem/router_info",n)},getLoginInfo:function(n){return w("/api/xqsystem/login",n)},setPrivacy:function(n){return w("/api/xqsystem/set_privacy_new",n)},getWanType:function(n){return w("/api/xqnetwork/check_wan_type",n)},getPppoeStatus:function(n){return w("/api/misystem/pppoe_status",n)},setRouterNormal:function(n){return b("/api/misystem/set_router_normal",n)},getPppoeCatch:function(n){return w("/api/xqnetwork/pppoe_catch",n)},postRouterLanap:function(n){return b("/api/misystem/set_router_lanap_init",n)},getWifiList:function(n){return w("/api/xqnetwork/wifi_list",n)},setLog:y,postWireless:function(n){return b("/api/misystem/set_router_wifiap_init",n)},getWanLink:function(n){return w("/api/xqnetwork/wan_link",n)},setDHCP:function(n){return b("/api/misystem/set_router_normal",n)},setWanNew:function(n){return w("/api/xqnetwork/set_wan_new",n)},getConfigResult:function(n){return w("/api/misystem/get_config_result",n)},getIPconflict:function(n){return b("/api/misystem/check_ip_conflict",n)},upgrade:function(n){return w("/api/misystem/vas_switch",n)}},k=function n(e){n.installed||(n.installed=!0,s()(e.prototype,{axios:{get:function(){return _}}}))},x=t("lC5x"),P=t.n(x),C=t("J0Oq"),L=t.n(C),O=t("mgIi"),S=t.n(O),A={goBack:function(n){n.$router.back(-1)},detectDevice:function(){var n=function(){var n=navigator.userAgent;navigator.appVersion;return{trident:n.indexOf("Trident")>-1,presto:n.indexOf("Presto")>-1,webKit:n.indexOf("AppleWebKit")>-1,gecko:n.indexOf("Gecko")>-1&&-1==n.indexOf("KHTML"),mobile:!!n.match(/AppleWebKit.*Mobile.*/),ios:!!n.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),android:n.indexOf("Android")>-1||n.indexOf("Linux")>-1,iPhone:n.indexOf("iPhone")>-1,iPad:n.indexOf("iPad")>-1,webApp:-1==n.indexOf("Safari")}}();(navigator.browserLanguage||navigator.language).toLowerCase();return n.mobile||n.ios||n.android||n.iPhone||n.iPad?n.ios?"ios":"android":"notmobile"},setInitLog:function(n){var e=this;return L()(P.a.mark(function t(){return P.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(n);case 2:e.sent.data.code;case 4:case"end":return e.stop()}},t,e)}))()},setCookie:function(n,e,t){var o=new Date;o.setTime(o.getTime()+24*t*60*60*1e3),document.cookie=n+"="+escape(e)+";expires="+o.toGMTString()},getCookie:function(n){var e,t=new RegExp("(^| )"+n+"=([^;]*)(;|$)");return(e=document.cookie.match(t))?unescape(e[2]):null},Encrypt:{key:"a2ffa5c9be07488bbb04a3a47d3c5f6a",iv:"64175472480004614961023454661220",nonce:null,init:function(){var n=this.nonceCreat();return this.nonce=n,this.nonce},getCookie:function(n){var e,t=new RegExp("(^| )"+n+"=([^;]*)(;|$)");return(e=document.cookie.match(t))?unescape(e[2]):null},nonceCreat:function(){return[0,this.getCookie("mac")||"",Math.floor((new Date).getTime()/1e3),Math.floor(1e4*Math.random())].join("_")},oldPwd:function(n){return S.a.SHA1(this.nonce+S.a.SHA1(n+this.key).toString()).toString()},newPwd:function(n,e){var t=S.a.SHA1(n+this.key).toString();t=(t=S.a.enc.Hex.parse(t).toString()).substr(0,32),t=S.a.enc.Hex.parse(t);var o=S.a.SHA1(e+this.key).toString(),i=S.a.enc.Hex.parse(this.iv);return S.a.AES.encrypt(o,t,{iv:i,mode:S.a.mode.CBC,padding:S.a.pad.Pkcs7}).toString()}},formatSsidName:function(n){var e=n.split("_");3==e.length&&("Xiaomi"==e[0]&&parseInt("FFFF",16)-parseInt(e[1],16)==parseInt(e[2],16)&&(n=e[0]+"_"+e[1]));return n}},R=t("JzCU"),q=(t("briU"),t("bZb2")),U=t.n(q),H={validators:{ipaddr:function(n,e,t){return/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/.test(n)},wifipassword:function(n,e,t){return escape(n).indexOf("%u")<0},checklength:function(n,e,t){for(var o=0,i=0;i<n.length;i++)if(/[\u4e00-\u9fa5]/.test(n[i])?o+=3:o++,o>28)return n=n.substr(0,i),!1;return!0}}};o.a.use(U.a,H),o.a.use(k),o.a.prototype.GLOBAL=R.default,o.a.config.productionTip=!1,o.a.prototype.common=A,console.log(o.a.prototype.axios),o.a.directive("focus",{inserted:function(n){n.focus()}}),new o.a({el:"#app",router:c,components:{App:r},template:"<App/>"})},RrGN:function(n,e){},qdrX:function(n,e){}},[0]);