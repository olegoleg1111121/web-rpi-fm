(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-aa5cda30"],{5118:function(e,t,n){(function(e){var a="undefined"!==typeof e&&e||"undefined"!==typeof self&&self||window,i=Function.prototype.apply;function s(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new s(i.call(setTimeout,a,arguments),clearTimeout)},t.setInterval=function(){return new s(i.call(setInterval,a,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},s.prototype.unref=s.prototype.ref=function(){},s.prototype.close=function(){this._clearFn.call(a,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout(function(){e._onTimeout&&e._onTimeout()},t))},n("6017"),t.setImmediate="undefined"!==typeof self&&self.setImmediate||"undefined"!==typeof e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!==typeof self&&self.clearImmediate||"undefined"!==typeof e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n("c8ba"))},6017:function(e,t,n){(function(e,t){(function(e,n){"use strict";if(!e.setImmediate){var a,i=1,s={},r=!1,c=e.document,o=Object.getPrototypeOf&&Object.getPrototypeOf(e);o=o&&o.setTimeout?o:e,"[object process]"==={}.toString.call(e.process)?m():d()?h():e.MessageChannel?v():c&&"onreadystatechange"in c.createElement("script")?g():y(),o.setImmediate=u,o.clearImmediate=l}function u(e){"function"!==typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var r={callback:e,args:t};return s[i]=r,a(i),i++}function l(e){delete s[e]}function p(e){var t=e.callback,a=e.args;switch(a.length){case 0:t();break;case 1:t(a[0]);break;case 2:t(a[0],a[1]);break;case 3:t(a[0],a[1],a[2]);break;default:t.apply(n,a);break}}function f(e){if(r)setTimeout(f,0,e);else{var t=s[e];if(t){r=!0;try{p(t)}finally{l(e),r=!1}}}}function m(){a=function(e){t.nextTick(function(){f(e)})}}function d(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}function h(){var t="setImmediate$"+Math.random()+"$",n=function(n){n.source===e&&"string"===typeof n.data&&0===n.data.indexOf(t)&&f(+n.data.slice(t.length))};e.addEventListener?e.addEventListener("message",n,!1):e.attachEvent("onmessage",n),a=function(n){e.postMessage(t+n,"*")}}function v(){var e=new MessageChannel;e.port1.onmessage=function(e){var t=e.data;f(t)},a=function(t){e.port2.postMessage(t)}}function g(){var e=c.documentElement;a=function(t){var n=c.createElement("script");n.onreadystatechange=function(){f(t),n.onreadystatechange=null,e.removeChild(n),n=null},e.appendChild(n)}}function y(){a=function(e){setTimeout(f,0,e)}}})("undefined"===typeof self?"undefined"===typeof e?this:e:self)}).call(this,n("c8ba"),n("f28c"))},"606f":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"mymusic container p-0 h-100"},[a("h1",[e._v("My music")]),a("div",{staticClass:"col-md-12 d-flex justify-content-center justify-content-sm-end"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"form-control mb-2",attrs:{type:"text",id:"search",placeholder:"Search"},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),a("div",{staticClass:"song-container"},[0==Object.keys(this.api.songs).length?a("div",{staticClass:"d-flex justify-content-center mt-4"},[a("h1",{staticStyle:{opacity:"0.4"}},[e._v("Your playlist is empty")])]):e._e(),e._l(e.filteredSongs,function(t,i){return a("div",{key:t.filename,staticClass:"song-line d-flex align-items-center",class:{now_playing:e.api.status.filename==t.filename}},[a("img",{staticClass:"hover-scale mr-3",attrs:{src:n("d739"),height:"20px"},on:{click:function(n){return e.deleteFile(t.filename)}}}),a("div",[t.img?a("img",{attrs:{src:e.api.baseurl+"static/img/"+t.img,width:"40"}}):a("img",{attrs:{src:n("f0cd"),width:"40"}})]),a("div",{staticClass:"mx-auto text-center"},[t.name?a("span",[e._v(e._s(t.name)),a("br"),t.author?a("small",[e._v(e._s(t.author))]):a("small",[e._v("Unknown\n            author")])]):a("span",[e._v("Unknown name")])]),a("div",[e.api.status.filename!=t.filename?a("img",{staticClass:"hover-scale ml-2 mr-2",attrs:{src:n("0c7a"),height:"35px"},on:{click:function(n){return e.startPlaying(i,t.filename,t.filename,t.length)}}}):a("img",{staticClass:"hover-scale ml-2 mr-2",attrs:{src:n("ec7e"),height:"35px"},on:{click:function(t){return e.stopPlaying()}}})])])})],2)])},i=[],s=n("a34a"),r=n.n(s);n("5118");function c(e,t,n,a,i,s,r){try{var c=e[s](r),o=c.value}catch(u){return void n(u)}c.done?t(o):Promise.resolve(o).then(a,i)}function o(e){return function(){var t=this,n=arguments;return new Promise(function(a,i){var s=e.apply(t,n);function r(e){c(s,a,i,r,o,"next",e)}function o(e){c(s,a,i,r,o,"throw",e)}r(void 0)})}}var u={name:"mymusic",data:function(){return{search:""}},created:function(){var e=o(r.a.mark(function e(){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.api.getLs();case 2:this.api.songs=e.sent;case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),computed:{filteredSongs:function(){var e=this;return Object.values(this.api.songs).filter(function(t){return t.name.toLowerCase().includes(e.search.toLowerCase())})}},methods:{startPlaying:function(){var e=o(r.a.mark(function e(t,n,a,i){var s=this;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return this.stopPlaying(),e.prev=1,e.next=4,this.api.startPlaying(n,a);case 4:return e.next=6,this.api.getStatus();case 6:this.api.status=e.sent,this.api.now_playing_index=t,$(".media-progress-bar").stop(!0).css("width","0%"),$(".media-progress-bar").animate({width:"100%"},1e3*i),this.timer=window.setTimeout(o(r.a.mark(function e(){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(s.api.getTimeElapsed(),s.api.status.time_elapsed>=i){e.next=10;break}return window.clearInterval(s.timer),e.next=5,s.api.stopPlaying();case 5:return $(".media-progress-bar").stop(!0).css("width","0%"),e.next=8,s.api.getStatus();case 8:s.api.status=e.sent,s.nextSong(s.api.now_playing_index);case 10:case"end":return e.stop()}},e)})),1e3*i),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](1),this.api.processException(e.t0);case 16:case"end":return e.stop()}},e,this,[[1,13]])}));function t(t,n,a,i){return e.apply(this,arguments)}return t}(),nextSong:function(){var e=o(r.a.mark(function e(t){var n;return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,t=parseInt(t),n=this.api.songs,!((t+1)%Object.keys(this.api.songs).length>=1)){e.next=6;break}return e.next=6,this.startPlaying(t+1,n[t+1].filename,n[t+1].filename,n[t+1].length);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.api.processException(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),stopPlaying:function(){var e=o(r.a.mark(function e(){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.stopPlaying();case 3:return window.clearInterval(this.timer),$(".media-progress-bar").stop(!0).css("width","0%"),e.next=7,this.api.getStatus();case 7:this.api.status=e.sent,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),this.api.processException(e.t0);case 13:case"end":return e.stop()}},e,this,[[0,10]])}));function t(){return e.apply(this,arguments)}return t}(),deleteFile:function(){var e=o(r.a.mark(function e(t){return r.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,this.api.deleteFile(t);case 3:return e.next=5,this.api.getLs();case 5:this.api.songs=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.api.processException(e.t0);case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()}},l=u,p=(n("c2b3"),n("2877")),f=Object(p["a"])(l,a,i,!1,null,"25d69f89",null);t["default"]=f.exports},a3d8:function(e,t,n){},c2b3:function(e,t,n){"use strict";var a=n("a3d8"),i=n.n(a);i.a},d739:function(e,t,n){e.exports=n.p+"img/delete.3e6a7f86.svg"}}]);
//# sourceMappingURL=chunk-aa5cda30.33e7f373.js.map