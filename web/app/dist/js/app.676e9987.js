(function(t){function e(e){for(var o,i,a=e[0],s=e[1],u=e[2],l=0,p=[];l<a.length;l++)i=a[l],r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},c=[];function i(t){return a.p+"js/"+({about:"about"}[t]||t)+"."+{about:"069800d4"}[t]+".js"}function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(t){var e=[],n=r[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=r[t]=[e,o]});e.push(n[2]=o);var c,s=document.getElementsByTagName("head")[0],u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=i(t),c=function(e){u.onerror=u.onload=null,clearTimeout(l);var n=r[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+o+": "+c+")");i.type=o,i.request=c,n[1](i)}r[t]=void 0}};var l=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,s.appendChild(u)}return Promise.all(e)},a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/",a.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0798":function(t,e,n){t.exports=n.p+"img/not-text.03d70902.png"},"1aa8":function(t,e){t.exports="data:image/png;base64,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"},"1fd5":function(t,e,n){},2161:function(t,e,n){"use strict";var o=n("44d3"),r=n.n(o);r.a},2856:function(t,e,n){},"44d3":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},c=[],i={created:function(){fetch("https://raw.githubusercontent.com/mscraftsman/devcon2019/master/web/app/package.json").then(function(t){return t.json()}).then(function(t){return console.log(t)})}},a=i,s=(n("5c0b"),n("2877")),u=Object(s["a"])(a,r,c,!1,null,null,null);u.options.__file="App.vue";var l=u.exports,f=n("8c4f"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("HelloWorld",{attrs:{msg:"DevCon2019"}})],1)},b=[],m=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},d=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[o("div",{staticClass:"announcement"},[o("img",{attrs:{src:n("0798"),alt:"Developers Conference 2019 - Mauritius - 11. - 13. April 2019"}})]),o("div",{staticClass:"btnCont"},[o("a",{staticClass:"sponsor-button",attrs:{href:"https://github.com/mscraftsman/devcon2019/raw/master/assets/DevCon2019-SponsorshipProposal.pdf",download:""}},[o("img",{attrs:{src:n("fe19"),alt:""}})]),o("a",{staticClass:"cfp-button",attrs:{href:"https://sessionize.com/devcon-mauritius-2019/",download:""}},[o("img",{attrs:{src:n("1aa8"),alt:""}})])])])}],h={name:"HelloWorld",props:{msg:String}},A=h,v=(n("ebb1"),Object(s["a"])(A,m,d,!1,null,"00867b30",null));v.options.__file="HelloWorld.vue";var Y=v.exports,D={name:"home",components:{HelloWorld:Y}},M=D,w=(n("2161"),Object(s["a"])(M,p,b,!1,null,"3ffef42c",null));w.options.__file="Home.vue";var g=w.exports;o["a"].use(f["a"]);var O=new f["a"]({routes:[{path:"/",name:"home",component:g},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),j=n("2f62");o["a"].use(j["a"]);var x=new j["a"].Store({state:{},mutations:{},actions:{}}),I=n("9483");Object(I["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,new o["a"]({router:O,store:x,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var o=n("2856"),r=n.n(o);r.a},ebb1:function(t,e,n){"use strict";var o=n("1fd5"),r=n.n(o);r.a},fe19:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAAkCAYAAAD4p7R7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA31pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkOGRhYWQyOS0xYTEyLTQ4MzgtOGM3Zi1jYzcxNTI4Mjg5OTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjkwMUQ1NzdCRTJEMTFFODk0MTk4MEQyM0E3OTMyNjMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjkwMUQ1NzZCRTJEMTFFODk0MTk4MEQyM0E3OTMyNjMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NEY1QkFGQUI1NUM1RTgxMThEOTZERDY0NkYwNkVCM0UiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDplMzVhYjEwOC01MTU1LTVjNDUtYmViZS04NDBkZTVk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"}});
//# sourceMappingURL=app.676e9987.js.map