(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var n;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function r(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.i=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.i};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ia(a){if(!(a instanceof Array)){a=u(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ja(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ka="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ja(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||ka});
var la="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ma;
if("function"==typeof Object.setPrototypeOf)ma=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}ma=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var sa=ma;
function v(a,b){a.prototype=la(b.prototype);a.prototype.constructor=a;if(sa)sa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.O=b.prototype}
function ta(){this.u=!1;this.o=null;this.j=void 0;this.i=1;this.m=this.v=0;this.J=this.l=null}
function ua(a){if(a.u)throw new TypeError("Generator is already running");a.u=!0}
ta.prototype.B=function(a){this.j=a};
function wa(a,b){a.l={Sa:b,Xa:!0};a.i=a.v||a.m}
ta.prototype.return=function(a){this.l={return:a};this.i=this.m};
function w(a,b,c){a.i=c;return{value:b}}
ta.prototype.s=function(a){this.i=a};
function xa(a,b,c){a.v=b;void 0!=c&&(a.m=c)}
function ya(a,b){a.i=b;a.v=0}
function za(a){a.v=0;var b=a.l.Sa;a.l=null;return b}
function Aa(a){a.J=[a.l];a.v=0;a.m=0}
function Ba(a){var b=a.J.splice(0)[0];(b=a.l=a.l||b)?b.Xa?a.i=a.v||a.m:void 0!=b.s&&a.m<b.s?(a.i=b.s,a.l=null):a.i=a.m:a.i=0}
function Ca(a){this.i=new ta;this.j=a}
function Da(a,b){ua(a.i);var c=a.i.o;if(c)return Ea(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.i.return);
a.i.return(b);return Fa(a)}
function Ea(a,b,c,d){try{var e=b.call(a.i.o,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.i.u=!1,e;var f=e.value}catch(g){return a.i.o=null,wa(a.i,g),Fa(a)}a.i.o=null;d.call(a.i,f);return Fa(a)}
function Fa(a){for(;a.i.i;)try{var b=a.j(a.i);if(b)return a.i.u=!1,{value:b.value,done:!1}}catch(c){a.i.j=void 0,wa(a.i,c)}a.i.u=!1;if(a.i.l){b=a.i.l;a.i.l=null;if(b.Xa)throw b.Sa;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ga(a){this.next=function(b){ua(a.i);a.i.o?b=Ea(a,a.i.o.next,b,a.i.B):(a.i.B(b),b=Fa(a));return b};
this.throw=function(b){ua(a.i);a.i.o?b=Ea(a,a.i.o["throw"],b,a.i.B):(wa(a.i,b),b=Fa(a));return b};
this.return=function(b){return Da(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ha(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Ha(new Ga(new Ca(a)))}
function Ia(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect.setPrototypeOf",function(a){return a?a:sa?function(b,c){try{return sa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.i=0;this.l=void 0;this.j=[];this.u=!1;var h=this.o();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.i=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.j=function(g){if(null==this.i){this.i=[];var h=this;this.l(function(){h.m()})}this.i.push(g)};
var e=fa.setTimeout;c.prototype.l=function(g){e(g,0)};
c.prototype.m=function(){for(;this.i&&this.i.length;){var g=this.i;this.i=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.i=null};
c.prototype.o=function(g){this.l(function(){throw g;})};
b.prototype.o=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.Aa),reject:g(this.m)}};
b.prototype.Aa=function(g){if(g===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.jb(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.pa(g):this.v(g)}};
b.prototype.pa=function(g){var h=void 0;try{h=g.then}catch(k){this.m(k);return}"function"==typeof h?this.kb(h,g):this.v(g)};
b.prototype.m=function(g){this.B(2,g)};
b.prototype.v=function(g){this.B(1,g)};
b.prototype.B=function(g,h){if(0!=this.i)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.i);this.i=g;this.l=h;2===this.i&&this.ib();this.J()};
b.prototype.ib=function(){var g=this;e(function(){if(g.P()){var h=fa.console;"undefined"!==typeof h&&h.error(g.l)}},1)};
b.prototype.P=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.l;return k(g)};
b.prototype.J=function(){if(null!=this.j){for(var g=0;g<this.j.length;++g)f.j(this.j[g]);this.j=null}};
var f=new c;b.prototype.jb=function(g){var h=this.o();g.sa(h.resolve,h.reject)};
b.prototype.kb=function(g,h){var k=this.o();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(t,p){return"function"==typeof t?function(y){try{l(t(y))}catch(z){m(z)}}:p}
var l,m,q=new b(function(t,p){l=t;m=p});
this.sa(k(g,l),k(h,m));return q};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.sa=function(g,h){function k(){switch(l.i){case 1:g(l.l);break;case 2:h(l.l);break;default:throw Error("Unexpected state: "+l.i);}}
var l=this;null==this.j?f.j(k):this.j.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=u(g),m=l.next();!m.done;m=l.next())d(m.value).sa(h,k)})};
b.all=function(g){var h=u(g),k=h.next();return k.done?d([]):new b(function(l,m){function q(y){return function(z){t[y]=z;p--;0==p&&l(t)}}
var t=[],p=0;do t.push(void 0),p++,d(k.value).sa(q(t.length-1),m),k=h.next();while(!k.done)})};
return b});
r("WeakMap",function(a){function b(k){this.i=(h+=Math.random()+1).toString();if(k){k=u(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ja(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(q){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ja(k,g))throw Error("WeakMap key fail: "+k);k[g][this.i]=l;return this};
b.prototype.get=function(k){return d(k)&&ja(k,g)?k[g][this.i]:void 0};
b.prototype.has=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)};
b.prototype.delete=function(k){return d(k)&&ja(k,g)&&ja(k[g],this.i)?delete k[g][this.i]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.i;return ha(function(){if(l){for(;l.head!=h.i;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h.data_[l];if(m&&ja(h.data_,l))for(h=0;h<m.length;h++){var q=m[h];if(k!==k&&q.key!==q.key||k===q.key)return{id:l,list:m,index:h,entry:q}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this.data_={};this.i=b();this.size=0;if(h){h=u(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(u([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.i,previous:this.i.previous,head:this.i,key:h,value:k},l.list.push(l.entry),this.i.previous.next=l.entry,this.i.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.i=this.i.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
r("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
r("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Object.setPrototypeOf",function(a){return a||sa});
r("Set",function(a){function b(c){this.i=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.i.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.i.set(c,c);this.size=this.i.size;return this};
b.prototype.delete=function(c){c=this.i.delete(c);this.size=this.i.size;return c};
b.prototype.clear=function(){this.i.clear();this.size=0};
b.prototype.has=function(c){return this.i.has(c)};
b.prototype.entries=function(){return this.i.entries()};
b.prototype.values=function(){return this.i.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.i.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ja(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
var A=this||self;function B(a,b){a=a.split(".");b=b||A;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Na(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Oa(a){var b=Na(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Pa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Qa(a){return Object.prototype.hasOwnProperty.call(a,Ra)&&a[Ra]||(a[Ra]=++Sa)}
var Ra="closure_uid_"+(1E9*Math.random()>>>0),Sa=0;function Ta(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Ta:Va=Ua;return Va.apply(null,arguments)}
function C(a,b){a=a.split(".");var c=A;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Wa(a,b){function c(){}
c.prototype=b.prototype;a.O=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Sb=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Xa(a){return a}
;function Ya(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Ya);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Wa(Ya,Error);Ya.prototype.name="CustomError";function Za(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.l=!b&&/[?&]ae=1(&|$)/.test(a);this.o=!b&&/[?&]ae=2(&|$)/.test(a);if((this.i=/[?&]adurl=([^&]*)/.exec(a))&&this.i[1]){try{var c=decodeURIComponent(this.i[1])}catch(d){c=null}this.j=c}}
;function ab(){}
function bb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var cb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},db=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function eb(a,b){b=cb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Oa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=nb(a[c]);return b}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var vb;function wb(){}
function xb(a){return new wb(yb,a)}
var yb={};xb("");var zb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Ab=/&/g,Bb=/</g,Cb=/>/g,Db=/"/g,Eb=/'/g,Fb=/\x00/g,Gb=/[\x00&<>"']/;function Hb(a,b){this.i=b===Ib?a:""}
Hb.prototype.toString=function(){return this.i.toString()};
var Ib={},Jb=new Hb("about:invalid#zClosurez",Ib);function Kb(){var a=A.navigator;return a&&(a=a.userAgent)?a:""}
function E(a){return-1!=Kb().indexOf(a)}
;function Lb(){return(E("Chrome")||E("CriOS"))&&!E("Edge")||E("Silk")}
;var Mb={};function Nb(a){this.i=Mb===Mb?a:""}
Nb.prototype.toString=function(){return this.i.toString()};var Ob=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Pb(a){return a?decodeURI(a):a}
function Qb(a){return Pb(a.match(Ob)[3]||null)}
function Rb(a){var b=a.match(Ob);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Sb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Sb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Tb(a){var b=[],c;for(c in a)Sb(c,a[c],b);return b.join("&")}
var Ub=/#|$/;function Zb(a,b){var c=a.search(Ub);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;var $b={};function ac(a){if(a!==$b)throw Error("requires a valid immutable API token");}
;function bc(){return E("iPhone")&&!E("iPod")&&!E("iPad")}
;function cc(a){cc[" "](a);return a}
cc[" "]=function(){};var dc=E("Opera"),ec=E("Trident")||E("MSIE"),fc=E("Edge"),gc=E("Gecko")&&!(-1!=Kb().toLowerCase().indexOf("webkit")&&!E("Edge"))&&!(E("Trident")||E("MSIE"))&&!E("Edge"),hc=-1!=Kb().toLowerCase().indexOf("webkit")&&!E("Edge");function ic(){var a=A.document;return a?a.documentMode:void 0}
var jc;a:{var kc="",lc=function(){var a=Kb();if(gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(fc)return/Edge\/([\d\.]+)/.exec(a);if(ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(hc)return/WebKit\/(\S+)/.exec(a);if(dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
lc&&(kc=lc?lc[1]:"");if(ec){var mc=ic();if(null!=mc&&mc>parseFloat(kc)){jc=String(mc);break a}}jc=kc}var nc=jc,oc;if(A.document&&ec){var pc=ic();oc=pc?pc:parseInt(nc,10)||void 0}else oc=void 0;var qc=oc;var rc=bc()||E("iPod"),sc=E("iPad");!E("Android")||Lb();Lb();var tc=E("Safari")&&!(Lb()||E("Coast")||E("Opera")||E("Edge")||E("Edg/")||E("OPR")||E("Firefox")||E("FxiOS")||E("Silk")||E("Android"))&&!(bc()||E("iPad")||E("iPod"));var uc={},wc=null;
function xc(a,b){Oa(a);void 0===b&&(b=0);if(!wc){wc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));uc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===wc[h]&&(wc[h]=g)}}}b=uc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var yc="undefined"!==typeof Uint8Array,zc={};var Ac;function Bc(a){if(zc!==zc)throw Error("illegal external caller");this.Ma=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Bc.prototype.isEmpty=function(){return null==this.Ma};var Cc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Dc(a,b){Object.isFrozen(a)||(Cc?a[Cc]|=b:void 0!==a.ba?a.ba|=b:Object.defineProperties(a,{ba:{value:b,configurable:!0,writable:!0,enumerable:!1}}))}
function Ec(a){var b;Cc?b=a[Cc]:b=a.ba;return null==b?0:b}
function Fc(a){return Array.isArray(a)?!!(Ec(a)&1):!1}
function Gc(a){Dc(a,1);return a}
function Kc(a){return Array.isArray(a)?!!(Ec(a)&2):!1}
function Lc(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Dc(a,2)}
function Mc(a,b){if(!Array.isArray(a))throw Error("cannot mark non-array as mutable");b?Dc(a,8):Object.isFrozen(a)||(Cc?a[Cc]&=-9:void 0!==a.ba&&(a.ba&=-9))}
;function Nc(a){return Kc(a.D)}
function Oc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Pc,Qc=Object.freeze(Gc([]));function Rc(a){if(Nc(a))throw Error("Cannot mutate an immutable Message");}
var Sc="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function Tc(a){return{value:a,configurable:!1,writable:!1,enumerable:!1}}
;function Uc(a){A.setTimeout(function(){throw a;},0)}
;function Vc(a){return a.displayName||a.name||"unknown type name"}
function Wc(a,b){a instanceof b||Uc(Error("Expected instanceof "+Vc(b)+" but got "+(a&&Vc(a.constructor))));return a}
function Xc(a,b,c){c=void 0===c?!1:c;if(Array.isArray(a))return new b(a);if(c)return new b}
;function Yc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(yc&&null!=a&&a instanceof Uint8Array)return xc(a);if(a instanceof Bc){var b=a.Ma;null!=b&&"string"!==typeof b&&(yc&&b instanceof Uint8Array?b=xc(b):(Na(b),b=null));return null==b?"":a.Ma=b}}}return a}
;function Zc(a,b){b=void 0===b?$c:b;return ad(a,b)}
function bd(a,b){if(null!=a){if(Array.isArray(a))a=ad(a,b);else if(Oc(a)){var c={},d;for(d in a)c[d]=bd(a[d],b);a=c}else a=b(a);return a}}
function ad(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=bd(c[d],b);Fc(a)&&Gc(c);return c}
function cd(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Yc(a);return Array.isArray(a)?Zc(a,cd):a}
function $c(a){return yc&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;function dd(a){return a.j||(a.j=a.D[a.l+a.Z]={})}
function ed(a,b,c){return-1===b?null:b>=a.l?a.j?a.j[b]:void 0:(void 0===c?0:c)&&a.j&&(c=a.j[b],null!=c)?c:a.D[b+a.Z]}
function F(a,b,c,d,e){d=void 0===d?!1:d;(void 0===e?0:e)||Rc(a);b<a.l&&!d?a.D[b+a.Z]=c:dd(a)[b]=c;return a}
function fd(a,b,c,d){c=void 0===c?!0:c;var e=ed(a,b,d);Array.isArray(e)||(e=Qc);if(Nc(a))c&&(Lc(e),Object.freeze(e));else if(e===Qc||Kc(e))e=Gc(e.slice()),F(a,b,e,d);return e}
function gd(a,b,c,d){Rc(a);(c=hd(a,c))&&c!==b&&null!=d&&(a.i&&c in a.i&&(a.i[c]=void 0),F(a,c));return F(a,b,d)}
function hd(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=ed(a,e)&&(0!==c&&F(a,c,void 0,!1,!0),c=e)}return c}
function id(a,b,c,d,e){e=void 0===e?!1:e;var f=e;if(-1===c)d=null;else{a.i||(a.i={});var g=a.i[c];if(g)d=g;else{var h=ed(a,c,f);b=Xc(h,b,d);void 0==b?d=g:(d&&b.D!==h&&F(a,c,b.D,f,!0),a.i[c]=b,Nc(a)&&Lc(b.D),d=b)}}if(null==d)return d;Nc(d)&&!Nc(a)&&(d=d.La($b),F(a,c,d.D,e),a.i[c]=d);return d}
function jd(a,b,c,d,e){e=void 0===e?!0:e;a.i||(a.i={});var f=Nc(a),g=a.i[c];d=fd(a,c,!0,d);var h=f||Kc(d);if(!g){g=[];f=f||h;for(var k=0;k<d.length;k++){var l=d[k];f=f||Kc(l);l=Xc(l,b);void 0!==l&&(g.push(l),h&&Lc(l.D))}a.i[c]=g;Mc(d,!f)}b=h||e;e=Kc(g);b&&!e&&(Object.isFrozen(g)&&(a.i[c]=g=g.slice()),Lc(g),Object.freeze(g));!b&&e&&(a.i[c]=g=g.slice());return g}
function H(a,b,c,d){Rc(a);a.i||(a.i={});b=null!=d?Wc(d,b).D:d;a.i[c]=d;return F(a,c,b)}
function kd(a,b,c,d,e){Rc(a);a.i||(a.i={});b=null!=e?Wc(e,b).D:e;a.i[c]=e;gd(a,c,d,b)}
function ld(a,b,c,d){Rc(a);if(null!=d){var e=Gc([]);for(var f=!1,g=0;g<d.length;g++)e[g]=Wc(d[g],b).D,f=f||Kc(e[g]);a.i||(a.i={});a.i[c]=d;Mc(e,!f)}else a.i&&(a.i[c]=void 0),e=Qc;return F(a,c,e)}
function md(a,b,c,d){Rc(a);var e=jd(a,c,b,void 0,!1);c=null!=d?Wc(d,c):new c;a=fd(a,b);e.push(c);a.push(c.D);ac($b);Nc(c)&&Mc(a,!1)}
function nd(a,b){a=ed(a,b);return null==a?"":a}
;function od(a,b,c){a||(a=pd);pd=null;var d=this.constructor.j;a||(a=d?[d]:[]);this.Z=(d?0:-1)-(this.constructor.i||0);this.i=void 0;this.D=a;a:{d=this.D.length;a=d-1;if(d&&(d=this.D[a],Oc(d))){this.l=a-this.Z;this.j=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.Z),this.j=void 0):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.l)a+=this.Z,(d=this.D[a])?Array.isArray(d)&&Gc(d):this.D[a]=Qc;else{d=dd(this);var e=d[a];e?Array.isArray(e)&&Gc(e):d[a]=Qc}}
od.prototype.toJSON=function(){var a=this.D;return Pc?a:Zc(a,cd)};
function qd(a){Pc=!0;try{return JSON.stringify(a.toJSON(),rd)}finally{Pc=!1}}
od.prototype.clone=function(){var a=Zc(this.D);pd=a;a=new this.constructor(a);pd=null;sd(a,this);return a};
od.prototype.isMutable=function(a){ac(a);return!Nc(this)};
od.prototype.toString=function(){return this.D.toString()};
function rd(a,b){return Yc(b)}
function sd(a,b){b.ja&&(a.ja=b.ja.slice());var c=b.i;if(c){b=b.j;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length){var h=a,k=e[0].constructor,l=f;l=void 0===l?!1:l;f=Nc(h);k=jd(h,k,g,l,f);g=fd(h,g,l);if(!(h=f)&&(h=g)){h=g;if(!Array.isArray(h))throw Error("cannot check mutability state of non-array");h=!(Ec(h)&8)}if(h){for(h=0;h<k.length;h++)(l=k[h])&&Nc(l)&&!f&&(k[h]=k[h].La($b),g[h]=k[h].D);Mc(g,!0)}f=k;for(k=0;k<Math.min(f.length,e.length);k++)sd(f[k],e[k])}}else(f=
id(a,e.constructor,g,void 0,f))&&sd(f,e)}}}}
var pd;function td(){od.apply(this,arguments)}
v(td,od);td.prototype.La=function(){return this};
if(Sc){var ud={};Object.defineProperties(td,(ud[Symbol.hasInstance]=Tc(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),ud))};function vd(a,b,c,d,e,f){(a=a.i&&a.i[c])?Array.isArray(a)?(e=f.Ca?Gc(a.slice()):a,ld(b,0<e.length?e[0].constructor:void 0,c,e)):H(b,a.constructor,c,a):(yc&&d instanceof Uint8Array?e=d.length?new Bc(new Uint8Array(d)):Ac||(Ac=new Bc(null)):(Array.isArray(d)&&(e?Lc(d):Fc(d)&&f.Ca&&(d=d.slice())),e=d),F(b,c,e))}
;function I(){td.apply(this,arguments)}
v(I,td);I.prototype.La=function(a){ac(a);if(Nc(this)){a={Ca:!0};var b=Nc(this);if(b&&!a.Ca)throw Error("copyRepeatedFields must be true for frozen messages");var c=new this.constructor;this.ja&&(c.ja=this.ja.slice());for(var d=this.D,e=0;e<d.length;e++){var f=d[e];if(e===d.length-1&&Oc(f))for(h in f){var g=+h;Number.isNaN(g)?dd(c)[h]=f[h]:vd(this,c,g,f[h],b,a)}else vd(this,c,e-this.Z,f,b,a)}var h=c}else h=this;return h};
if(Sc){var wd={};Object.defineProperties(I,(wd[Symbol.hasInstance]=Tc(Object[Symbol.hasInstance]),wd))};var xd=window;xb("csi.gstatic.com");xb("googleads.g.doubleclick.net");xb("partner.googleadservices.com");xb("pubads.g.doubleclick.net");xb("securepubads.g.doubleclick.net");xb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
function yd(a){this.isValid=a}
function zd(a){return new yd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Ad=[zd("data"),zd("http"),zd("https"),zd("mailto"),zd("ftp"),new yd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function Bd(a,b){b=void 0===b?Ad:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof yd&&d.isValid(a))return new Hb(a,Ib)}}
function Cd(a){var b=void 0===b?Ad:b;return Bd(a,b)||Jb}
;function Dd(a,b){a.removeAttribute("srcdoc");b instanceof Hb&&b.constructor===Hb?b=b.i:(Na(b),b="type_error:SafeUrl");a.src=b;for(b="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");0<a.sandbox.length;)a.sandbox.remove(a.sandbox.item(0));for(var c=0;c<b.length;c++)a.sandbox.supports&&!a.sandbox.supports(b[c])||a.sandbox.add(b[c])}
;function Ed(a,b){this.width=a;this.height=b}
n=Ed.prototype;n.clone=function(){return new Ed(this.width,this.height)};
n.aspectRatio=function(){return this.width/this.height};
n.isEmpty=function(){return!(this.width*this.height)};
n.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
n.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
n.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Fd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Gd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Hd(a){var b=Id;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Jd(){var a=[];Hd(function(b){a.push(b)});
return a}
var Id={Ab:"allow-forms",Bb:"allow-modals",Cb:"allow-orientation-lock",Db:"allow-pointer-lock",Eb:"allow-popups",Fb:"allow-popups-to-escape-sandbox",Gb:"allow-presentation",Hb:"allow-same-origin",Ib:"allow-scripts",Jb:"allow-top-navigation",Kb:"allow-top-navigation-by-user-activation"},Kd=bb(function(){return Jd()});
function Ld(){var a=Od(),b={};D(Kd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Od(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var Pd=(new Date).getTime();function Qd(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;var Rd="client_dev_mss_url client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");ia(Rd);function Sd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(q){for(var t=g,p=0;64>p;p+=4)t[p/4]=q[p]<<24|q[p+1]<<16|q[p+2]<<8|q[p+3];for(p=16;80>p;p++)q=t[p-3]^t[p-8]^t[p-14]^t[p-16],t[p]=(q<<1|q>>>31)&4294967295;q=e[0];var y=e[1],z=e[2],G=e[3],K=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var M=G^y&(z^G);var P=1518500249}else M=y^z^G,P=1859775393;else 60>p?(M=y&z|G&(y|z),P=2400959708):(M=y^z^G,P=3395469782);M=((q<<5|q>>>27)&4294967295)+M+K+P+t[p]&4294967295;K=G;G=z;z=(y<<30|y>>>2)&4294967295;y=q;q=M}e[0]=e[0]+q&4294967295;e[1]=e[1]+y&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+G&4294967295;e[4]=e[4]+K&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var p=[],y=0,z=q.length;y<z;++y)p.push(q.charCodeAt(y));q=p}t||(t=q.length);p=0;if(0==l)for(;p+64<t;)b(q.slice(p,p+64)),p+=64,m+=64;for(;p<t;)if(f[l++]=q[p++],m++,64==l)for(l=0,b(f);p+64<t;)b(q.slice(p,p+64)),p+=64,m+=64}
function d(){var q=[],t=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=t&255,t>>>=8;b(f);for(p=t=0;5>p;p++)for(var y=24;0<=y;y-=8)q[t++]=e[p]>>y&255;return q}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,nb:function(){for(var q=d(),t="",p=0;p<q.length;p++)t+="0123456789ABCDEF".charAt(Math.floor(q[p]/16))+"0123456789ABCDEF".charAt(q[p]%16);return t}}}
;function Td(a,b,c){var d=String(A.location.href);return d&&a&&b?[b,Ud(Qd(d),a,c||null)].join(" "):null}
function Ud(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],D(d,function(h){e.push(h)}),Vd(e.join(" "));
var f=[],g=[];D(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];D(d,function(h){e.push(h)});
a=Vd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Vd(a){var b=Sd();b.update(a);return b.nb().toLowerCase()}
;var Wd={};function Xd(a){this.i=a||{cookie:""}}
n=Xd.prototype;n.isEnabled=function(){if(!A.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Fa:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
n.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Wb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Fa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.i.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
n.get=function(a,b){for(var c=a+"=",d=(this.i.cookie||"").split(";"),e=0,f;e<d.length;e++){f=zb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
n.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Fa:0,path:b,domain:c});return d};
n.isEmpty=function(){return!this.i.cookie};
n.clear=function(){for(var a=(this.i.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=zb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Yd=new Xd("undefined"==typeof document?null:document);function Zd(a){return!!Wd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function $d(a,b,c,d){(a=A[a])||(a=(new Xd(document)).get(b));return a?Td(a,c,d):null}
function ae(a){var b=void 0===b?!1:b;var c=Qd(String(A.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=A.__SAPISID||A.__APISID||A.__3PSAPISID||A.__OVERRIDE_SID;Zd(e)&&(f=f||A.__1PSAPISID);if(f)e=!0;else{var g=new Xd(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID");Zd(e)&&(f=f||g.get("__Secure-1PAPISID"));e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?A.__SAPISID:A.__APISID,e||(e=new Xd(document),
e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?Td(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&Zd(b)&&((b=$d("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=$d("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;function be(){this.o=this.o;this.v=this.v}
be.prototype.o=!1;be.prototype.dispose=function(){this.o||(this.o=!0,this.ia())};
be.prototype.ia=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function ce(a,b){this.type=a;this.i=this.target=b;this.defaultPrevented=this.l=!1}
ce.prototype.stopPropagation=function(){this.l=!0};
ce.prototype.preventDefault=function(){this.defaultPrevented=!0};function de(a){var b=B("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||A.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ee(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,fe[c])c=fe[c];else{c=String(c);if(!fe[c]){var f=/function\s+([^\(]+)/m.exec(c);fe[c]=f?f[1]:"[Anonymous]"}c=fe[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ee(a,b){b||(b={});b[ge(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[ge(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ee(a,b));return c}
function ge(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var fe={};var he=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{A.addEventListener("test",function(){},b),A.removeEventListener("test",function(){},b)}catch(c){}return a}();function ie(a,b){ce.call(this,a?a.type:"");this.relatedTarget=this.i=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.j=null;a&&this.init(a,b)}
Wa(ie,ce);var je={2:"touch",3:"pen",4:"mouse"};
ie.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.i=b;if(b=a.relatedTarget){if(gc){a:{try{cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:je[a.pointerType]||"";this.state=a.state;
this.j=a;a.defaultPrevented&&ie.O.preventDefault.call(this)};
ie.prototype.stopPropagation=function(){ie.O.stopPropagation.call(this);this.j.stopPropagation?this.j.stopPropagation():this.j.cancelBubble=!0};
ie.prototype.preventDefault=function(){ie.O.preventDefault.call(this);var a=this.j;a.preventDefault?a.preventDefault():a.returnValue=!1};var ke="closure_listenable_"+(1E6*Math.random()|0);var le=0;function me(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.wa=e;this.key=++le;this.la=this.ra=!1}
function ne(a){a.la=!0;a.listener=null;a.proxy=null;a.src=null;a.wa=null}
;function oe(a){this.src=a;this.listeners={};this.i=0}
oe.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.i++);var g=pe(a,b,d,e);-1<g?(b=a[g],c||(b.ra=!1)):(b=new me(b,this.src,f,!!d,e),b.ra=c,a.push(b));return b};
oe.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=pe(e,b,c,d);return-1<b?(ne(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.i--),!0):!1};
function qe(a,b){var c=b.type;c in a.listeners&&eb(a.listeners[c],b)&&(ne(b),0==a.listeners[c].length&&(delete a.listeners[c],a.i--))}
function pe(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.la&&f.listener==b&&f.capture==!!c&&f.wa==d)return e}return-1}
;var re="closure_lm_"+(1E6*Math.random()|0),se={},te=0;function ue(a,b,c,d,e){if(d&&d.once)ve(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)ue(a,b[f],c,d,e);else c=we(c),a&&a[ke]?a.S(b,c,Pa(d)?!!d.capture:!!d,e):xe(a,b,c,!1,d,e)}
function xe(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Pa(e)?!!e.capture:!!e,h=ye(a);h||(a[re]=h=new oe(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=ze();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)he||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ae(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");te++}}
function ze(){function a(c){return b.call(a.src,a.listener,c)}
var b=Be;return a}
function ve(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ve(a,b[f],c,d,e);else c=we(c),a&&a[ke]?a.l.add(String(b),c,!0,Pa(d)?!!d.capture:!!d,e):xe(a,b,c,!0,d,e)}
function Ce(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ce(a,b[f],c,d,e);else(d=Pa(d)?!!d.capture:!!d,c=we(c),a&&a[ke])?a.l.remove(String(b),c,d,e):a&&(a=ye(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=pe(b,c,d,e)),(c=-1<a?b[a]:null)&&De(c))}
function De(a){if("number"!==typeof a&&a&&!a.la){var b=a.src;if(b&&b[ke])qe(b.l,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ae(c),d):b.addListener&&b.removeListener&&b.removeListener(d);te--;(c=ye(b))?(qe(c,a),0==c.i&&(c.src=null,b[re]=null)):ne(a)}}}
function Ae(a){return a in se?se[a]:se[a]="on"+a}
function Be(a,b){if(a.la)a=!0;else{b=new ie(b,this);var c=a.listener,d=a.wa||a.src;a.ra&&De(a);a=c.call(d,b)}return a}
function ye(a){a=a[re];return a instanceof oe?a:null}
var Ee="__closure_events_fn_"+(1E9*Math.random()>>>0);function we(a){if("function"===typeof a)return a;a[Ee]||(a[Ee]=function(b){return a.handleEvent(b)});
return a[Ee]}
;function J(){be.call(this);this.l=new oe(this);this.Aa=this;this.J=null}
Wa(J,be);J.prototype[ke]=!0;J.prototype.addEventListener=function(a,b,c,d){ue(this,a,b,c,d)};
J.prototype.removeEventListener=function(a,b,c,d){Ce(this,a,b,c,d)};
function Fe(a,b){var c=a.J;if(c){var d=[];for(var e=1;c;c=c.J)d.push(c),++e}a=a.Aa;c=b.type||b;"string"===typeof b?b=new ce(b,a):b instanceof ce?b.target=b.target||a:(e=b,b=new ce(c,a),pb(b,e));e=!0;if(d)for(var f=d.length-1;!b.l&&0<=f;f--){var g=b.i=d[f];e=Ge(g,c,!0,b)&&e}b.l||(g=b.i=a,e=Ge(g,c,!0,b)&&e,b.l||(e=Ge(g,c,!1,b)&&e));if(d)for(f=0;!b.l&&f<d.length;f++)g=b.i=d[f],e=Ge(g,c,!1,b)&&e}
J.prototype.ia=function(){J.O.ia.call(this);if(this.l){var a=this.l,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,ne(d[e]);delete a.listeners[c];a.i--}}this.J=null};
J.prototype.S=function(a,b,c,d){return this.l.add(String(a),b,!1,c,d)};
function Ge(a,b,c,d){b=a.l.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.la&&g.capture==c){var h=g.listener,k=g.wa||g.src;g.ra&&qe(a.l,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function He(a){J.call(this);var b=this;this.B=this.j=0;this.K=null!=a?a:{M:function(e,f){return setTimeout(e,f)},
aa:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.m=function(){return x(function(e){return w(e,Ie(b),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.B||Je(this)}
v(He,J);function Ke(){var a=Le;He.i||(He.i=new He(a));return He.i}
He.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.K.aa(this.B);delete He.i};
He.prototype.G=function(){return this.i};
function Je(a){a.B=a.K.M(function(){var b;return x(function(c){if(1==c.i)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.s(3):w(c,Ie(a),3):w(c,Ie(a),3);Je(a);c.i=0})},3E4)}
function Ie(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return x(function(h){switch(h.i){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,xa(h,2,3),d&&(a.j=a.K.M(function(){d.abort()},b||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:Aa(h);a.u=void 0;a.j&&(a.K.aa(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?Fe(a,"networkstatus-online"):Fe(a,"networkstatus-offline"));c(g);Ba(h);break;case 2:za(h),g=!1,h.s(3)}})})}
;function Me(){this.data_=[];this.i=-1}
Me.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data_[a]!==b&&(this.data_[a]=b,this.i=-1)};
Me.prototype.get=function(a){return!!this.data_[a]};
function Ne(a){-1===a.i&&(a.i=db(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.i}
;function Oe(a){I.call(this,a,-1,Pe)}
v(Oe,I);function Qe(a,b){return F(a,2,b)}
function Re(a,b){return F(a,3,b)}
function Se(a,b){return F(a,4,b)}
function Te(a,b){return F(a,5,b)}
function Ue(a,b){return F(a,9,b)}
function Ve(a,b){return ld(a,We,10,b)}
function Xe(a,b){return F(a,11,b)}
function Ye(a,b){return F(a,1,b)}
function We(a){I.call(this,a)}
v(We,I);var Pe=[10,6];var Ze="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function $e(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function af(){var a=window,b,c;if("function"!==typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues))return null;var d=$e(a);if(d.uach_promise)return d.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(Ze).then(function(e){null!=d.uach||(d.uach=e);return e});
return d.uach_promise=a}
function bf(a){var b;return Xe(Ve(Ue(Te(Se(Re(Qe(Ye(new Oe,a.platform||""),a.platformVersion||""),a.architecture||""),a.model||""),a.uaFullVersion||""),a.bitness||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new We;d=F(d,1,c.brand);return F(d,2,c.version)}))||[]),a.wow64||!1)}
function cf(){var a,b;return null!=(b=null==(a=af())?void 0:a.then(function(c){return bf(c)}))?b:null}
;function df(a,b){this.l=a;this.o=b;this.j=0;this.i=null}
df.prototype.get=function(){if(0<this.j){this.j--;var a=this.i;this.i=a.next;a.next=null}else a=this.l();return a};
function ef(a,b){a.o(b);100>a.j&&(a.j++,b.next=a.i,a.i=b)}
;var ff;function gf(){var a=A.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!E("Presto")&&(a=function(){var e=Fd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!E("Trident")&&!E("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Pa;c.Pa=null;e()}};
return function(e){d.next={Pa:e};d=d.next;b.port2.postMessage(0)}}return function(e){A.setTimeout(e,0)}}
;function hf(){this.j=this.i=null}
hf.prototype.add=function(a,b){var c=jf.get();c.set(a,b);this.j?this.j.next=c:this.i=c;this.j=c};
hf.prototype.remove=function(){var a=null;this.i&&(a=this.i,this.i=this.i.next,this.i||(this.j=null),a.next=null);return a};
var jf=new df(function(){return new kf},function(a){return a.reset()});
function kf(){this.next=this.scope=this.i=null}
kf.prototype.set=function(a,b){this.i=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.i=null};var lf,mf=!1,nf=new hf;function of(a,b){lf||pf();mf||(lf(),mf=!0);nf.add(a,b)}
function pf(){if(A.Promise&&A.Promise.resolve){var a=A.Promise.resolve(void 0);lf=function(){a.then(qf)}}else lf=function(){var b=qf;
"function"!==typeof A.setImmediate||A.Window&&A.Window.prototype&&!E("Edge")&&A.Window.prototype.setImmediate==A.setImmediate?(ff||(ff=gf()),ff(b)):A.setImmediate(b)}}
function qf(){for(var a;a=nf.remove();){try{a.i.call(a.scope)}catch(b){Uc(b)}ef(jf,a)}mf=!1}
;function rf(a,b){this.i=a[A.Symbol.iterator]();this.j=b}
rf.prototype[Symbol.iterator]=function(){return this};
rf.prototype.next=function(){var a=this.i.next();return{value:a.done?void 0:this.j.call(void 0,a.value),done:a.done}};
function sf(a,b){return new rf(a,b)}
;function tf(){this.blockSize=-1}
;function uf(){this.blockSize=-1;this.blockSize=64;this.i=[];this.m=[];this.v=[];this.l=[];this.l[0]=128;for(var a=1;a<this.blockSize;++a)this.l[a]=0;this.o=this.j=0;this.reset()}
Wa(uf,tf);uf.prototype.reset=function(){this.i[0]=1732584193;this.i[1]=4023233417;this.i[2]=2562383102;this.i[3]=271733878;this.i[4]=3285377520;this.o=this.j=0};
function vf(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.i[0];c=a.i[1];var g=a.i[2],h=a.i[3],k=a.i[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.i[0]=a.i[0]+b&4294967295;a.i[1]=a.i[1]+c&4294967295;a.i[2]=a.i[2]+g&4294967295;a.i[3]=a.i[3]+h&4294967295;a.i[4]=a.i[4]+k&4294967295}
uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.m,f=this.j;d<b;){if(0==f)for(;d<=c;)vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){vf(this,e);f=0;break}}this.j=f;this.o+=b}};
uf.prototype.digest=function(){var a=[],b=8*this.o;56>this.j?this.update(this.l,56-this.j):this.update(this.l,this.blockSize-(this.j-56));for(var c=this.blockSize-1;56<=c;c--)this.m[c]=b&255,b/=256;vf(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.i[c]>>d&255,++b;return a};function wf(){}
wf.prototype.next=function(){return xf};
var xf={done:!0,value:void 0};function yf(a){return{value:a,done:!1}}
wf.prototype.L=function(){return this};function zf(a){if(a instanceof Af||a instanceof Bf||a instanceof Cf)return a;if("function"==typeof a.next)return new Af(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Af(function(){return a[Symbol.iterator]()});
if("function"==typeof a.L)return new Af(function(){return a.L()});
throw Error("Not an iterator or iterable.");}
function Af(a){this.j=a}
Af.prototype.L=function(){return new Bf(this.j())};
Af.prototype[Symbol.iterator]=function(){return new Cf(this.j())};
Af.prototype.i=function(){return new Cf(this.j())};
function Bf(a){this.j=a}
v(Bf,wf);Bf.prototype.next=function(){return this.j.next()};
Bf.prototype[Symbol.iterator]=function(){return new Cf(this.j)};
Bf.prototype.i=function(){return new Cf(this.j)};
function Cf(a){Af.call(this,function(){return a});
this.l=a}
v(Cf,Af);Cf.prototype.next=function(){return this.l.next()};function Df(a,b){this.j={};this.i=[];this.l=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Df)for(c=Ef(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Ef(a){Ff(a);return a.i.concat()}
n=Df.prototype;n.has=function(a){return Gf(this.j,a)};
n.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||Hf;Ff(this);for(var c,d=0;c=this.i[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function Hf(a,b){return a===b}
n.isEmpty=function(){return 0==this.size};
n.clear=function(){this.j={};this.l=this.size=this.i.length=0};
n.remove=function(a){return this.delete(a)};
n.delete=function(a){return Gf(this.j,a)?(delete this.j[a],--this.size,this.l++,this.i.length>2*this.size&&Ff(this),!0):!1};
function Ff(a){if(a.size!=a.i.length){for(var b=0,c=0;b<a.i.length;){var d=a.i[b];Gf(a.j,d)&&(a.i[c++]=d);b++}a.i.length=c}if(a.size!=a.i.length){var e={};for(c=b=0;b<a.i.length;)d=a.i[b],Gf(e,d)||(a.i[c++]=d,e[d]=1),b++;a.i.length=c}}
n.get=function(a,b){return Gf(this.j,a)?this.j[a]:b};
n.set=function(a,b){Gf(this.j,a)||(this.size+=1,this.i.push(a),this.l++);this.j[a]=b};
n.forEach=function(a,b){for(var c=Ef(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
n.clone=function(){return new Df(this)};
n.keys=function(){return zf(this.L(!0)).i()};
n.values=function(){return zf(this.L(!1)).i()};
n.entries=function(){var a=this;return sf(this.keys(),function(b){return[b,a.get(b)]})};
n.L=function(a){Ff(this);var b=0,c=this.l,d=this,e=new wf;e.next=function(){if(c!=d.l)throw Error("The map has changed since the iterator was created");if(b>=d.i.length)return xf;var f=d.i[b++];return yf(a?f:d.j[f])};
return e};
function Gf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var If=A.JSON.stringify;function Jf(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Kf(a){this.i=0;this.u=void 0;this.o=this.j=this.l=null;this.m=this.v=!1;if(a!=ab)try{var b=this;a.call(void 0,function(c){Lf(b,2,c)},function(c){Lf(b,3,c)})}catch(c){Lf(this,3,c)}}
function Mf(){this.next=this.context=this.onRejected=this.j=this.i=null;this.l=!1}
Mf.prototype.reset=function(){this.context=this.onRejected=this.j=this.i=null;this.l=!1};
var Nf=new df(function(){return new Mf},function(a){a.reset()});
function Of(a,b,c){var d=Nf.get();d.j=a;d.onRejected=b;d.context=c;return d}
Kf.prototype.then=function(a,b,c){return Pf(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Kf.prototype.$goog_Thenable=!0;Kf.prototype.cancel=function(a){if(0==this.i){var b=new mg(a);of(function(){ng(this,b)},this)}};
function ng(a,b){if(0==a.i)if(a.l){var c=a.l;if(c.j){for(var d=0,e=null,f=null,g=c.j;g&&(g.l||(d++,g.i==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.i&&1==d?ng(c,b):(f?(d=f,d.next==c.o&&(c.o=d),d.next=d.next.next):og(c),pg(c,e,3,b)))}a.l=null}else Lf(a,3,b)}
function qg(a,b){a.j||2!=a.i&&3!=a.i||rg(a);a.o?a.o.next=b:a.j=b;a.o=b}
function Pf(a,b,c,d){var e=Of(null,null,null);e.i=new Kf(function(f,g){e.j=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof mg?g(h):f(k)}catch(l){g(l)}}:g});
e.i.l=a;qg(a,e);return e.i}
Kf.prototype.J=function(a){this.i=0;Lf(this,2,a)};
Kf.prototype.P=function(a){this.i=0;Lf(this,3,a)};
function Lf(a,b,c){if(0==a.i){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.i=1;a:{var d=c,e=a.J,f=a.P;if(d instanceof Kf){qg(d,Of(e||ab,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Pa(d))try{var k=d.then;if("function"===typeof k){sg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.u=c,a.i=b,a.l=null,rg(a),3!=b||c instanceof mg||tg(a,c))}}
function sg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function rg(a){a.v||(a.v=!0,of(a.B,a))}
function og(a){var b=null;a.j&&(b=a.j,a.j=b.next,b.next=null);a.j||(a.o=null);return b}
Kf.prototype.B=function(){for(var a;a=og(this);)pg(this,a,this.i,this.u);this.v=!1};
function pg(a,b,c,d){if(3==c&&b.onRejected&&!b.l)for(;a&&a.m;a=a.l)a.m=!1;if(b.i)b.i.l=null,ug(b,c,d);else try{b.l?b.j.call(b.context):ug(b,c,d)}catch(e){vg.call(null,e)}ef(Nf,b)}
function ug(a,b,c){2==b?a.j.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function tg(a,b){a.m=!0;of(function(){a.m&&vg.call(null,b)})}
var vg=Uc;function mg(a){Ya.call(this,a)}
Wa(mg,Ya);mg.prototype.name="cancel";function L(a){be.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.B=!!a}
Wa(L,be);n=L.prototype;n.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function wg(a,b,c){var d=xg;if(a=d.j[a]){var e=d.i;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.oa(a)}}
n.oa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=function(){}):(c&&eb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
n.fa=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var g=c[e];yg(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.o;e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.oa(c)}}return 0!=e}return!1};
function yg(a,b,c){of(function(){a.apply(b,c)})}
n.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.oa,this),delete this.j[a])}else this.i.length=0,this.j={}};
n.ia=function(){L.O.ia.call(this);this.clear();this.l.length=0};function zg(a){this.i=a}
zg.prototype.set=function(a,b){void 0===b?this.i.remove(a):this.i.set(a,If(b))};
zg.prototype.get=function(a){try{var b=this.i.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
zg.prototype.remove=function(a){this.i.remove(a)};function Ag(a){this.i=a}
Wa(Ag,zg);function Bg(a){this.data=a}
function Cg(a){return void 0===a||a instanceof Bg?a:new Bg(a)}
Ag.prototype.set=function(a,b){Ag.O.set.call(this,a,Cg(b))};
Ag.prototype.j=function(a){a=Ag.O.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ag.prototype.get=function(a){if(a=this.j(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Dg(a){this.i=a}
Wa(Dg,Ag);Dg.prototype.set=function(a,b,c){if(b=Cg(b)){if(c){if(c<Date.now()){Dg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}Dg.O.set.call(this,a,b)};
Dg.prototype.j=function(a){var b=Dg.O.j.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())Dg.prototype.remove.call(this,a);else return b}};function Eg(){}
;function Fg(){}
Wa(Fg,Eg);Fg.prototype[Symbol.iterator]=function(){return zf(this.L(!0)).i()};
Fg.prototype.clear=function(){var a=Array.from(this);a=u(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Gg(a){this.i=a}
Wa(Gg,Fg);n=Gg.prototype;n.isAvailable=function(){if(!this.i)return!1;try{return this.i.setItem("__sak","1"),this.i.removeItem("__sak"),!0}catch(a){return!1}};
n.set=function(a,b){try{this.i.setItem(a,b)}catch(c){if(0==this.i.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
n.get=function(a){a=this.i.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeItem(a)};
n.L=function(a){var b=0,c=this.i,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c.key(b++);if(a)return yf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
n.clear=function(){this.i.clear()};
n.key=function(a){return this.i.key(a)};function Hg(){var a=null;try{a=window.localStorage||null}catch(b){}this.i=a}
Wa(Hg,Gg);function Ig(a,b){this.j=a;this.i=null;var c;if(c=ec)c=!(9<=Number(qc));if(c){Jg||(Jg=new Df);this.i=Jg.get(a);this.i||(b?this.i=document.getElementById(b):(this.i=document.createElement("userdata"),this.i.addBehavior("#default#userData"),document.body.appendChild(this.i)),Jg.set(a,this.i));try{this.i.load(this.j)}catch(d){this.i=null}}}
Wa(Ig,Fg);var Kg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Jg=null;function Lg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Kg[b]})}
n=Ig.prototype;n.isAvailable=function(){return!!this.i};
n.set=function(a,b){this.i.setAttribute(Lg(a),b);Mg(this)};
n.get=function(a){a=this.i.getAttribute(Lg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
n.remove=function(a){this.i.removeAttribute(Lg(a));Mg(this)};
n.L=function(a){var b=0,c=this.i.XMLDocument.documentElement.attributes,d=new wf;d.next=function(){if(b>=c.length)return xf;var e=c[b++];if(a)return yf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return yf(e)};
return d};
n.clear=function(){for(var a=this.i.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Mg(this)};
function Mg(a){try{a.i.save(a.j)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Ng(a,b){this.j=a;this.i=b+"::"}
Wa(Ng,Fg);Ng.prototype.set=function(a,b){this.j.set(this.i+a,b)};
Ng.prototype.get=function(a){return this.j.get(this.i+a)};
Ng.prototype.remove=function(a){this.j.remove(this.i+a)};
Ng.prototype.L=function(a){var b=this.j[Symbol.iterator](),c=this,d=new wf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.i.length)!=c.i;){e=b.next();if(e.done)return e;e=e.value}return yf(a?e.slice(c.i.length):c.j.get(e))};
return d};function Og(a){I.call(this,a)}
v(Og,I);Og.prototype.getKey=function(){return ed(this,1)};
Og.prototype.X=function(){return ed(this,2===hd(this,Pg)?2:-1)};
Og.prototype.setValue=function(a){return gd(this,2,Pg,a)};
var Pg=[2,3,4,5,6];function Qg(a){I.call(this,a)}
v(Qg,I);function Rg(a){I.call(this,a)}
v(Rg,I);function Sg(a){I.call(this,a,-1,Tg)}
v(Sg,I);var Tg=[2];function Ug(a){I.call(this,a,-1,Vg)}
v(Ug,I);Ug.prototype.getPlayerType=function(){return ed(this,36)};
Ug.prototype.setHomeGroupInfo=function(a){return H(this,Sg,81,a)};
var Vg=[9,66,24,32,86,100,101];function Wg(a){I.call(this,a,-1,Xg)}
v(Wg,I);var Xg=[15,26,28];function Yg(a){I.call(this,a)}
v(Yg,I);Yg.prototype.setToken=function(a){return F(this,2,a)};function Zg(a){I.call(this,a,-1,$g)}
v(Zg,I);Zg.prototype.setSafetyMode=function(a){return F(this,5,a)};
var $g=[12];function ah(a){I.call(this,a,-1,bh)}
v(ah,I);var bh=[12];function ch(a){I.call(this,a,-1,dh)}
v(ch,I);function eh(a){I.call(this,a)}
v(eh,I);eh.prototype.getKey=function(){return nd(this,1)};
eh.prototype.X=function(){return nd(this,2)};
eh.prototype.setValue=function(a){return F(this,2,a)};
var dh=[4,5];function fh(a){I.call(this,a)}
v(fh,I);function gh(a){I.call(this,a)}
v(gh,I);var hh=[2,3,4];function ih(a){I.call(this,a)}
v(ih,I);function jh(a){I.call(this,a)}
v(jh,I);function kh(a){I.call(this,a)}
v(kh,I);function lh(a){I.call(this,a,-1,mh)}
v(lh,I);var mh=[10,17];function nh(a){I.call(this,a)}
v(nh,I);function oh(a){I.call(this,a)}
v(oh,I);function ph(a){I.call(this,a)}
v(ph,I);function qh(a){I.call(this,a,432)}
v(qh,I);
var rh=[23,24,11,6,7,5,2,3,13,20,21,22,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,148,151,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,197,198,199,200,201,402,320,203,204,205,206,258,259,260,261,327,209,219,226,227,232,233,234,240,244,247,248,249,251,256,257,266,254,255,270,272,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,334,337,338,340,344,348,350,351,352,
353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,388,389,403,410,412,429,413,414,415,416,417,418,430,423,424,425,426,427,431,117];function sh(a){I.call(this,a)}
v(sh,I);function th(a){I.call(this,a)}
v(th,I);th.prototype.setVideoId=function(a){return gd(this,1,uh,a)};
th.prototype.getPlaylistId=function(){return ed(this,2===hd(this,uh)?2:-1)};
var uh=[1,2];function vh(a){I.call(this,a,-1,wh)}
v(vh,I);var wh=[3];var xh=A.window,yh,zh,Ah=(null==xh?void 0:null==(yh=xh.yt)?void 0:yh.config_)||(null==xh?void 0:null==(zh=xh.ytcfg)?void 0:zh.data_)||{};C("yt.config_",Ah);function Bh(){var a=arguments;1<a.length?Ah[a[0]]=a[1]:1===a.length&&Object.assign(Ah,a[0])}
function N(a,b){return a in Ah?Ah[a]:b}
function Ch(){return N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function Dh(){var a=Ah.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var Eh=[];function Fh(a){Eh.forEach(function(b){return b(a)})}
function Gh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){Hh(b)}}:a}
function Hh(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=N("ERRORS",[]),e.push([a,"ERROR",b,c,d]),Bh("ERRORS",e));Fh(a)}
function Ih(a,b,c,d){var e=B("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=N("ERRORS",[]),e.push([a,"WARNING",b,c,d]),Bh("ERRORS",e))}
;var Jh=0;C("ytDomDomGetNextId",B("ytDomDomGetNextId")||function(){return++Jh});var Kh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Lh(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Kh||(this[b]=a[b]);this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?
d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
Lh.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Lh.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Lh.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=A.ytEventsEventsListeners||{};C("ytEventsEventsListeners",lb);var Mh=A.ytEventsEventsCounter||{count:0};C("ytEventsEventsCounter",Mh);
function Nh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Pa(e[4])&&Pa(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Oh(a){a&&("string"==typeof a&&(a=[a]),D(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Ph()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
var Ph=bb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function Qh(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=Nh(a,b,c,d);if(!e){e=++Mh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Lh(h);if(!Gd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Lh(h);
h.currentTarget=a;return c.call(a,h)};
g=Gh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Ph()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d]}}}
;function Rh(a,b){"function"===typeof a&&(a=Gh(a));return window.setTimeout(a,b)}
function Sh(a){"function"===typeof a&&(a=Gh(a));return window.setInterval(a,250)}
;var Th=/^[\w.]*$/,Uh={q:!0,search_query:!0};function Vh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Wh(f[0]||""),h=Wh(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(q){var k=q,l=f[0],m=String(Vh);k.args=[{key:l,value:f[1],query:a,method:Xh==m?"unchanged":m}];Uh.hasOwnProperty(l)||Ih(k)}}return c}
var Xh=String(Vh);function Yh(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];D(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Zh(a){"?"==a.charAt(0)&&(a=a.substr(1));return Vh(a,"&")}
function $h(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Zh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Tb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function ai(a){if(!b)var b=window.location.href;var c=a.match(Ob)[1]||null,d=Qb(a);c&&d?(a=a.match(Ob),b=b.match(Ob),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Qb(b)==d&&(Number(b.match(Ob)[4]||null)||null)==(Number(a.match(Ob)[4]||null)||null):!0;return a}
function Wh(a){return a&&a.match(Th)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function O(a){a=bi(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ci(a,b){a=bi(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function bi(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
function di(){var a=[],b=N("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=N("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;function ei(a){var b=fi;a=void 0===a?B("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Pd;e.flash="0";a:{try{var f=b.i.top.location.href}catch(X){f=2;break a}f=f?f===b.j.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?xd:g;try{var h=g.history.length}catch(X){h=0}e.u_his=h;var k;e.u_h=null==(k=xd.screen)?void 0:k.height;var l;e.u_w=null==(l=xd.screen)?void 0:l.width;var m;e.u_ah=null==(m=xd.screen)?void 0:m.availHeight;var q;e.u_aw=null==
(q=xd.screen)?void 0:q.availWidth;var t;e.u_cd=null==(t=xd.screen)?void 0:t.colorDepth}catch(X){}h=b.i;try{var p=h.screenX;var y=h.screenY}catch(X){}try{var z=h.outerWidth;var G=h.outerHeight}catch(X){}try{var K=h.innerWidth;var M=h.innerHeight}catch(X){}try{var P=h.screenLeft;var kb=h.screenTop}catch(X){}try{K=h.innerWidth,M=h.innerHeight}catch(X){}try{var vc=h.screen.availWidth;var va=h.screen.availTop}catch(X){}p=[P,kb,p,y,vc,va,z,G,K,M];y=b.i.top;try{var na=(y||window).document,Y="CSS1Compat"==
na.compatMode?na.documentElement:na.body;var ca=(new Ed(Y.clientWidth,Y.clientHeight)).round()}catch(X){ca=new Ed(-12245933,-12245933)}na=ca;ca={};var da=void 0===da?A:da;Y=new Me;da.SVGElement&&da.document.createElementNS&&Y.set(0);y=Ld();y["allow-top-navigation-by-user-activation"]&&Y.set(1);y["allow-popups-to-escape-sandbox"]&&Y.set(2);da.crypto&&da.crypto.subtle&&Y.set(3);da.TextDecoder&&da.TextEncoder&&Y.set(4);da=Ne(Y);ca.bc=da;ca.bih=na.height;ca.biw=na.width;ca.brdim=p.join();b=b.j;b=(ca.vis=
b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ca.wgl=!!xd.WebGLRenderingContext,ca);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var fi=new function(){var a=window.document;this.i=window;this.j=a};
C("yt.ads_.signals_.getAdSignalsString",function(a){return Yh(ei(a))});Date.now();var gi="XMLHttpRequest"in A?function(){return new XMLHttpRequest}:null;
function hi(){if(!gi)return null;var a=gi();return"open"in a?a:null}
;var ii={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ji="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ia(Rd)),ki=!1;
function li(a,b){b=void 0===b?{}:b;var c=ai(a),d=O("web_ajax_ignore_global_headers_if_set"),e;for(e in ii){var f=N(ii[e]);O("enable_visitor_header_for_vss")&&"X-Goog-Visitor-Id"===e&&!f&&(f=N("VISITOR_DATA"));!f||!c&&Qb(a)||d&&void 0!==b[e]||!O("enable_web_eom_visitor_data")&&"X-Goog-EOM-Visitor-Id"===e||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!Qb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Qb(a)){try{var g=
(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!Qb(a))b["X-YouTube-Ad-Signals"]=Yh(ei());return b}
function mi(a){var b=window.location.search,c=Qb(a);O("debug_handle_relative_url_for_query_forward_killswitch")||c||!ai(a)||(c=document.location.hostname);var d=Pb(a.match(Ob)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Zh(b),f={};D(ji,function(g){e[g]&&(f[g]=e[g])});
return $h(a,f||{},!1)}
function ni(a,b){var c=b.format||"JSON";a=oi(a,b);var d=pi(a,b),e=!1,f=qi(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,q=400<=k.status&&500>k.status,t=500<=k.status&&600>k.status;if(l||q||t)m=ri(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};q=b.context||A;l?b.onSuccess&&b.onSuccess.call(q,k,m):b.onError&&b.onError.call(q,k,m);b.onFinish&&b.onFinish.call(q,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=Rh(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||A,f))},d)}}
function oi(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=$h(a,b||{},!0);return a}
function pi(a,b){var c=N("XSRF_FIELD_NAME"),d=N("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=N("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Qb(a)&&!b.withCredentials&&Qb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Zh(e),pb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):Tb(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;
break a}f=!0}a=!f}!ki&&a&&"POST"!=b.method&&(ki=!0,Hh(Error("AJAX request with postData should use POST")));return e}
function ri(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,Ih(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?si(a):null)e={},D(a.getElementsByTagName("*"),function(g){e[g.tagName]=ti(g)})}d&&ui(e);
return e}
function ui(a){if(Pa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;xb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=a[b];if(void 0===vb){var e=null;var f=A.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Xa,createScript:Xa,createScriptURL:Xa})}catch(g){A.console&&A.console.error(g.message)}vb=e}else vb=e}d=(e=vb)?e.createHTML(d):d;a[c]=new Nb(d)}else ui(a[b])}}
function si(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function ti(a){var b="";D(a.childNodes,function(c){b+=c.nodeValue});
return b}
function qi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&Gh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=hi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;O("debug_forward_web_query_parameters")&&(a=mi(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=li(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var vi={Pb:"WEB_DISPLAY_MODE_UNKNOWN",Lb:"WEB_DISPLAY_MODE_BROWSER",Nb:"WEB_DISPLAY_MODE_MINIMAL_UI",Ob:"WEB_DISPLAY_MODE_STANDALONE",Mb:"WEB_DISPLAY_MODE_FULLSCREEN"};function wi(){if(!A.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return A.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":A.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":A.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":A.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;C("ytglobal.prefsUserPrefsPrefs_",B("ytglobal.prefsUserPrefsPrefs_")||{});var xi={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},yi={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},zi={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Ai={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Bi(){var a=A.navigator;return a?a.connection:void 0}
;function Ci(){return"INNERTUBE_API_KEY"in Ah&&"INNERTUBE_API_VERSION"in Ah}
function Di(){return{innertubeApiKey:N("INNERTUBE_API_KEY"),innertubeApiVersion:N("INNERTUBE_API_VERSION"),Ea:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ua:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),qb:N("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION"),Wa:N("INNERTUBE_CONTEXT_HL"),Va:N("INNERTUBE_CONTEXT_GL"),rb:N("INNERTUBE_HOST_OVERRIDE")||"",tb:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),sb:!!N("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:N("SERIALIZED_CLIENT_CONFIG_DATA")}}
function Ei(a){var b={client:{hl:a.Wa,gl:a.Va,clientName:a.Ua,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ea}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=A.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=N("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=di();0<c.length&&(b.request={internalExperimentFlags:c});Fi(a,void 0,b);Gi(void 0,b);Hi(a,void 0,b);Ii(void 0,b);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&
(b.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=u(Object.entries(Zh(N("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=u(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Ji(a){var b=new ah,c=new Ug;F(c,1,a.Wa);F(c,2,a.Va);F(c,16,a.qb);F(c,17,a.innertubeContextClientVersion);if(a.Ea){var d=a.Ea,e=new Qg;d.coldConfigData&&F(e,1,d.coldConfigData);d.appInstallData&&F(e,6,d.appInstallData);d.coldHashData&&F(e,3,d.coldHashData);d.hotHashData&&F(e,5,d.hotHashData);H(c,Qg,62,e)}(d=A.devicePixelRatio)&&1!=d&&F(c,65,d);d=N("EXPERIMENTS_TOKEN","");""!==d&&F(c,54,d);d=di();if(0<d.length){e=new Wg;for(var f=0;f<d.length;f++){var g=new Og;F(g,1,d[f].key);g.setValue(d[f].value);
md(e,15,Og,g)}H(b,Wg,5,e)}Fi(a,c);Gi(c);Hi(a,c);Ii(c);N("DELEGATED_SESSION_ID")&&!O("pageid_as_header_web")&&(a=new Zg,F(a,3,N("DELEGATED_SESSION_ID")));a=u(Object.entries(Zh(N("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=u(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?F(c,12,e):"cmodel"===d?F(c,13,e):"cbr"===d?F(c,87,e):"cbrver"===d?F(c,88,e):"cos"===d?F(c,18,e):"cosver"===d?F(c,19,e):"cplatform"===d&&F(c,42,e);H(b,Ug,1,c);return b}
function Fi(a,b,c){a=a.Ua;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=id(b,Rg,96)||new Rg;var d=wi();d=Object.keys(vi).indexOf(d);d=-1===d?null:d;null!==d&&F(c,3,d);H(b,Rg,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=wi())}
function Gi(a,b){var c;if(O("web_log_memory_total_kbytes")&&(null==(c=A.navigator)?0:c.deviceMemory)){var d;c=null==(d=A.navigator)?void 0:d.deviceMemory;a?F(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Hi(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=id(b,Qg,62))?d:new Qg;F(c,6,a.appInstallData);H(b,Qg,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Ii(a,b){a:{var c=Bi();if(c){var d=xi[c.type||"unknown"]||"CONN_UNKNOWN";c=xi[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?F(a,61,yi[d]):b&&(b.client.connectionType=d));O("web_log_effective_connection_type")&&(d=Bi(),d=null!=d&&d.effectiveType?Ai.hasOwnProperty(d.effectiveType)?Ai[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?F(a,94,zi[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Ki(a,b,c){c=void 0===c?{}:c;var d={};O("enable_web_eom_visitor_data")&&N("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":N("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Rb||N("AUTHORIZATION"))||(a?b="Bearer "+B("gapi.auth.getToken")().Qb:b=ae([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),O("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
;function Li(a){a=Object.assign({},a);delete a.Authorization;var b=ae();if(b){var c=new uf;c.update(N("INNERTUBE_API_KEY"));c.update(b);a.hash=xc(c.digest(),3)}return a}
;function Mi(a){var b=new Hg;(b=b.isAvailable()?a?new Ng(b,a):b:null)||(a=new Ig(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.i=(a=b)?new Dg(a):null;this.j=document.domain||window.location.hostname}
Mi.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.i)try{this.i.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(If(b))}catch(f){return}else e=escape(b);b=this.j;Yd.set(""+a,e,{Fa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Mi.prototype.get=function(a,b){var c=void 0,d=!this.i;if(!d)try{c=this.i.get(a)}catch(e){d=!0}if(d&&(c=Yd.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Mi.prototype.remove=function(a){this.i&&this.i.remove(a);var b=this.j;Yd.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ni=window,Q=Ni.ytcsi&&Ni.ytcsi.now?Ni.ytcsi.now:Ni.performance&&Ni.performance.timing&&Ni.performance.now&&Ni.performance.timing.navigationStart?function(){return Ni.performance.timing.navigationStart+Ni.performance.now()}:function(){return(new Date).getTime()};var Oi;function Pi(){Oi||(Oi=new Mi("yt.innertube"));return Oi}
function Qi(a,b,c,d){if(d)return null;d=Pi().get("nextId",!0)||1;var e=Pi().get("requests",!0)||{};e[d]={method:a,request:b,authState:Li(c),requestTime:Math.round(Q())};Pi().set("nextId",d+1,86400,!0);Pi().set("requests",e,86400,!0);return d}
function Ri(a){var b=Pi().get("requests",!0)||{};delete b[a];Pi().set("requests",b,86400,!0)}
function Si(a){var b=Pi().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Q())-d.requestTime)){var e=d.authState,f=Li(Ki(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Q())),Ti(a,d.method,e,{}));delete b[c]}}Pi().set("requests",b,86400,!0)}}
;function Ui(){}
function Vi(a,b){return Wi(a,0,b)}
Ui.prototype.M=function(a,b){return Wi(a,1,b)};
function Xi(a,b){Wi(a,2,b)}
;function Yi(){Ui.apply(this,arguments)}
v(Yi,Ui);function Zi(){Yi.i||(Yi.i=new Yi);return Yi.i}
function Wi(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=B("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Rh(a,c||0)}
Yi.prototype.aa=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=B("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
Yi.prototype.start=function(){var a=B("yt.scheduler.instance.start");a&&a()};var Le=Zi();var $i=rc||sc;var aj=function(){var a;return function(){a||(a=new Mi("ytidb"));return a}}();
function bj(){var a;return null==(a=aj())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var cj=[],dj=!1;function ej(a){dj||(cj.push({type:"ERROR",payload:a}),10<cj.length&&cj.shift())}
function fj(a,b){dj||(cj.push({type:"EVENT",eventType:a,payload:b}),10<cj.length&&cj.shift())}
;function gj(a){var b=Ia.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ia(b))}
v(gj,Error);function hj(){try{return ij(),!0}catch(a){return!1}}
function ij(){if(void 0!==N("DATASYNC_ID"))return N("DATASYNC_ID");throw new gj("Datasync ID not set","unknown");}
;function jj(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function kj(a){return a.substr(0,a.indexOf(":"))||a}
;var lj={},mj=(lj.AUTH_INVALID="No user identifier specified.",lj.EXPLICIT_ABORT="Transaction was explicitly aborted.",lj.IDB_NOT_SUPPORTED="IndexedDB is not supported.",lj.MISSING_INDEX="Index not created.",lj.MISSING_OBJECT_STORES="Object stores not created.",lj.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",lj.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",lj.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
lj.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",lj.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",lj.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",lj.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",lj),nj={},oj=(nj.AUTH_INVALID="ERROR",nj.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",nj.EXPLICIT_ABORT="IGNORED",nj.IDB_NOT_SUPPORTED="ERROR",nj.MISSING_INDEX=
"WARNING",nj.MISSING_OBJECT_STORES="ERROR",nj.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",nj.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",nj.QUOTA_EXCEEDED="WARNING",nj.QUOTA_MAYBE_EXCEEDED="WARNING",nj.UNKNOWN_ABORT="WARNING",nj.INCOMPATIBLE_DB_VERSION="WARNING",nj),pj={},qj=(pj.AUTH_INVALID=!1,pj.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,pj.EXPLICIT_ABORT=!1,pj.IDB_NOT_SUPPORTED=!1,pj.MISSING_INDEX=!1,pj.MISSING_OBJECT_STORES=!1,pj.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,pj.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,pj.QUOTA_EXCEEDED=!1,pj.QUOTA_MAYBE_EXCEEDED=!0,pj.UNKNOWN_ABORT=!0,pj.INCOMPATIBLE_DB_VERSION=!1,pj);function T(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?mj[a]:c;d=void 0===d?oj[a]:d;e=void 0===e?qj[a]:e;gj.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.i=e;Object.setPrototypeOf(this,T.prototype)}
v(T,gj);function rj(a,b){T.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},mj.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,rj.prototype)}
v(rj,T);function sj(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,sj.prototype)}
v(sj,Error);var tj=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function uj(a,b,c,d){b=kj(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof T)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new T("QUOTA_EXCEEDED",a);if(tc&&"UnknownError"===e.name)return new T("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof sj)return new T("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&tj.some(function(f){return e.message.includes(f)}))return new T("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new T("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Vb:e.name})];e.level="WARNING";return e}
function vj(a,b,c){var d=bj();return new T("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function wj(a){if(!a)throw Error();throw a;}
function xj(a){return a}
function yj(a){this.i=a}
function U(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=u(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=u(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.i=[];this.onRejected=[];a=a.i;try{a(c,b)}catch(e){b(e)}}
U.all=function(a){return new U(new yj(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ca:0};f.ca<a.length;f={ca:f.ca},++f.ca)zj(U.resolve(a[f.ca]).then(function(g){return function(h){d[g.ca]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
U.resolve=function(a){return new U(new yj(function(b,c){a instanceof U?a.then(b,c):b(a)}))};
U.reject=function(a){return new U(new yj(function(b,c){c(a)}))};
U.prototype.then=function(a,b){var c=this,d=null!=a?a:xj,e=null!=b?b:wj;return new U(new yj(function(f,g){"PENDING"===c.state.status?(c.i.push(function(){Aj(c,c,d,f,g)}),c.onRejected.push(function(){Bj(c,c,e,f,g)})):"FULFILLED"===c.state.status?Aj(c,c,d,f,g):"REJECTED"===c.state.status&&Bj(c,c,e,f,g)}))};
function zj(a,b){a.then(void 0,b)}
function Aj(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof U?Cj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Bj(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof U?Cj(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Cj(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof U?Cj(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Dj(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Ej(a){return new Promise(function(b,c){Dj(a,b,c)})}
function V(a){return new U(new yj(function(b,c){Dj(a,b,c)}))}
;function Fj(a,b){return new U(new yj(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Gj(a,b){this.i=a;this.options=b;this.transactionCount=0;this.l=Math.round(Q());this.j=!1}
n=Gj.prototype;n.add=function(a,b,c){return Hj(this,[a],{mode:"readwrite",I:!0},function(d){return d.objectStore(a).add(b,c)})};
n.clear=function(a){return Hj(this,[a],{mode:"readwrite",I:!0},function(b){return b.objectStore(a).clear()})};
n.close=function(){this.i.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
n.count=function(a,b){return Hj(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).count(b)})};
function Ij(a,b,c){a=a.i.createObjectStore(b,c);return new Jj(a)}
n.delete=function(a,b){return Hj(this,[a],{mode:"readwrite",I:!0},function(c){return c.objectStore(a).delete(b)})};
n.get=function(a,b){return Hj(this,[a],{mode:"readonly",I:!0},function(c){return c.objectStore(a).get(b)})};
function Kj(a,b){return Hj(a,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(c){c=c.objectStore("LogsRequestsStore");return V(c.i.put(b,void 0))})}
n.objectStoreNames=function(){return Array.from(this.i.objectStoreNames)};
function Hj(a,b,c,d){var e,f,g,h,k,l,m,q,t,p,y,z;return x(function(G){switch(G.i){case 1:var K={mode:"readonly",I:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?K.mode=c:Object.assign(K,c);e=K;a.transactionCount++;f=e.I?3:1;g=0;case 2:if(h){G.s(3);break}g++;k=Math.round(Q());xa(G,4);l=a.i.transaction(b,e.mode);K=new Lj(l);K=Mj(K,d);return w(G,K,6);case 6:return m=G.j,q=Math.round(Q()),Nj(a,k,q,g,void 0,b.join(),e),G.return(m);case 4:t=za(G);p=Math.round(Q());y=uj(t,a.i.name,b.join(),a.i.version);
if((z=y instanceof T&&!y.i)||g>=f)Nj(a,k,p,g,y,b.join(),e),h=y;G.s(2);break;case 3:return G.return(Promise.reject(h))}})}
function Nj(a,b,c,d,e,f,g){b=c-b;e?(e instanceof T&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&fj("QUOTA_EXCEEDED",{dbName:kj(a.i.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof T&&"UNKNOWN_ABORT"===e.type&&(c-=a.l,0>c&&c>=Math.pow(2,31)&&(c=0),fj("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.j=!0),Ck(a,!1,d,f,b,g.tag),ej(e)):Ck(a,!0,d,f,b,g.tag)}
function Ck(a,b,c,d,e,f){fj("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.j,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
n.getName=function(){return this.i.name};
function Jj(a){this.i=a}
n=Jj.prototype;n.add=function(a,b){return V(this.i.add(a,b))};
n.autoIncrement=function(){return this.i.autoIncrement};
n.clear=function(){return V(this.i.clear()).then(function(){})};
n.count=function(a){return V(this.i.count(a))};
function Dk(a,b){return Ek(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
n.delete=function(a){return a instanceof IDBKeyRange?Dk(this,a):V(this.i.delete(a))};
n.get=function(a){return V(this.i.get(a))};
n.index=function(a){try{return new Fk(this.i.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new sj(a,this.i.name);throw b;}};
n.getName=function(){return this.i.name};
n.keyPath=function(){return this.i.keyPath};
function Ek(a,b,c){a=a.i.openCursor(b.query,b.direction);return Gk(a).then(function(d){return Fj(d,c)})}
function Lj(a){var b=this;this.i=a;this.l=new Map;this.j=!1;this.done=new Promise(function(c,d){b.i.addEventListener("complete",function(){c()});
b.i.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.i.error)});
b.i.addEventListener("abort",function(){var e=b.i.error;if(e)d(e);else if(!b.j){e=T;for(var f=b.i.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.i.db.name,mode:b.i.mode});d(e)}})})}
function Mj(a,b){var c=new Promise(function(d,e){try{zj(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return u(d).next().value})}
Lj.prototype.abort=function(){this.i.abort();this.j=!0;throw new T("EXPLICIT_ABORT");};
Lj.prototype.objectStore=function(a){a=this.i.objectStore(a);var b=this.l.get(a);b||(b=new Jj(a),this.l.set(a,b));return b};
function Fk(a){this.i=a}
n=Fk.prototype;n.count=function(a){return V(this.i.count(a))};
n.delete=function(a){return Hk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
n.get=function(a){return V(this.i.get(a))};
n.getKey=function(a){return V(this.i.getKey(a))};
n.keyPath=function(){return this.i.keyPath};
n.unique=function(){return this.i.unique};
function Hk(a,b,c){a=a.i.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Gk(a).then(function(d){return Fj(d,c)})}
function Ik(a,b){this.request=a;this.cursor=b}
function Gk(a){return V(a).then(function(b){return b?new Ik(a,b):null})}
n=Ik.prototype;n.advance=function(a){this.cursor.advance(a);return Gk(this.request)};
n.continue=function(a){this.cursor.continue(a);return Gk(this.request)};
n.delete=function(){return V(this.cursor.delete()).then(function(){})};
n.getKey=function(){return this.cursor.key};
n.X=function(){return this.cursor.value};
n.update=function(a){return V(this.cursor.update(a))};function Jk(a,b,c){return new Promise(function(d,e){function f(){t||(t=new Gj(g.result,{closed:q}));return t}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.yb,m=c.upgrade,q=c.closed,t;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&fj("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:kj(a)});var y=f(),z=new Lj(g.transaction);
m&&m(y,function(G){return p.oldVersion<G&&p.newVersion>=G},z);
z.done.catch(function(G){e(G)})}catch(G){e(G)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){fj("IDB_UNEXPECTEDLY_CLOSED",{dbName:kj(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Kk(a,b,c){c=void 0===c?{}:c;return Jk(a,b,c)}
function Lk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.i)return xa(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Ej(c),4);
if(2!=g.i)return ya(g,0);f=za(g);throw uj(f,a,"",-1);})}
;function Mk(a){return new Promise(function(b){Xi(function(){b()},a)})}
function Nk(a,b){this.name=a;this.options=b;this.o=!0;this.v=this.m=0;this.j=500}
Nk.prototype.l=function(a,b,c){c=void 0===c?{}:c;return Kk(a,b,c)};
Nk.prototype.delete=function(a){a=void 0===a?{}:a;return Lk(this.name,a)};
function Ok(a,b){return new T("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Pk(a,b){if(!b)throw vj("openWithToken",kj(a.name));return Qk(a)}
function Qk(a){function b(){var f,g,h,k,l,m,q,t,p,y;return x(function(z){switch(z.i){case 1:return g=null!=(f=Error().stack)?f:"",xa(z,2),w(z,a.l(a.name,a.options.version,d),4);case 4:h=z.j;for(var G=a.options,K=[],M=u(Object.keys(G.ka)),P=M.next();!P.done;P=M.next()){P=P.value;var kb=G.ka[P],vc=void 0===kb.wb?Number.MAX_VALUE:kb.wb;!(h.i.version>=kb.Ba)||h.i.version>=vc||h.i.objectStoreNames.contains(P)||K.push(P)}k=K;if(0===k.length){z.s(5);break}l=Object.keys(a.options.ka);m=h.objectStoreNames();
if(a.v<ci("ytidb_reopen_db_retries",0))return a.v++,h.close(),ej(new T("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());if(!(a.m<ci("ytidb_remake_db_retries",1))){z.s(6);break}a.m++;if(!O("ytidb_remake_db_enable_backoff_delay")){z.s(7);break}return w(z,Mk(a.j),8);case 8:a.j*=2;case 7:return w(z,a.delete(),9);case 9:return ej(new T("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),z.return(b());
case 6:throw new rj(m,l);case 5:return z.return(h);case 2:q=za(z);if(q instanceof DOMException?"VersionError"!==q.name:"DOMError"in self&&q instanceof DOMError?"VersionError"!==q.name:!(q instanceof Object&&"message"in q)||"An attempt was made to open a database using a lower version than the existing version."!==q.message){z.s(10);break}return w(z,a.l(a.name,void 0,Object.assign({},d,{upgrade:void 0})),11);case 11:t=z.j;p=t.i.version;if(void 0!==a.options.version&&p>a.options.version+1)throw t.close(),
a.o=!1,Ok(a,p);return z.return(t);case 10:throw c(),q instanceof Error&&!O("ytidb_async_stack_killswitch")&&(q.stack=q.stack+"\n"+g.substring(g.indexOf("\n")+1)),uj(q,a.name,"",null!=(y=a.options.version)?y:-1);}})}
function c(){a.i===e&&(a.i=void 0)}
if(!a.o)throw Ok(a);if(a.i)return a.i;var d={blocking:function(f){f.close()},
closed:c,yb:c,upgrade:a.options.upgrade};var e=b();a.i=e;return a.i}
;var Rk=new Nk("YtIdbMeta",{ka:{databases:{Ba:1}},upgrade:function(a,b){b(1)&&Ij(a,"databases",{keyPath:"actualName"})}});
function Sk(a,b){var c;return x(function(d){if(1==d.i)return w(d,Pk(Rk,b),2);c=d.j;return d.return(Hj(c,["databases"],{I:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return V(f.i.put(a,void 0)).then(function(){})})}))})}
function Tk(a,b){var c;return x(function(d){if(1==d.i)return a?w(d,Pk(Rk,b),2):d.return();c=d.j;return d.return(c.delete("databases",a))})}
function Uk(a,b){var c,d;return x(function(e){return 1==e.i?(c=[],w(e,Pk(Rk,b),2)):3!=e.i?(d=e.j,w(e,Hj(d,["databases"],{I:!0,mode:"readonly"},function(f){c.length=0;return Ek(f.objectStore("databases"),{},function(g){a(g.X())&&c.push(g.X());return g.continue()})}),3)):e.return(c)})}
function Vk(a){return Uk(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Wk,Xk=new function(){}(new function(){});
function Yk(){var a,b,c,d;return x(function(e){switch(e.i){case 1:a=bj();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=$i)f=/WebKit\/([0-9]+)/.exec(Kb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Kb()),f=!(f&&602<=parseInt(f[1],10)));if(f||fc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
xa(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(e,Sk(d,Xk),4);case 4:return w(e,Tk("yt-idb-test-do-not-use",Xk),5);case 5:return e.return(!0);case 2:return za(e),e.return(!1)}})}
function Zk(){if(void 0!==Wk)return Wk;dj=!0;return Wk=Yk().then(function(a){dj=!1;var b;if(null!=(b=aj())&&b.i){var c;b={hasSucceededOnce:(null==(c=bj())?void 0:c.hasSucceededOnce)||a};var d;null==(d=aj())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function $k(){return B("ytglobal.idbToken_")||void 0}
function al(){var a=$k();return a?Promise.resolve(a):Zk().then(function(b){(b=b?Xk:void 0)&&C("ytglobal.idbToken_",b);return b})}
;new Jf;function bl(a){if(!hj())throw a=new T("AUTH_INVALID",{dbName:a}),ej(a),a;var b=ij();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function cl(a,b,c,d){var e,f,g,h,k,l;return x(function(m){switch(m.i){case 1:return f=null!=(e=Error().stack)?e:"",w(m,al(),2);case 2:g=m.j;if(!g)throw h=vj("openDbImpl",a,b),O("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),ej(h),h;jj(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:bl(a);xa(m,3);return w(m,Sk(k,g),5);case 5:return w(m,Kk(k.actualName,b,d),6);case 6:return m.return(m.j);case 3:return l=za(m),xa(m,7),w(m,Tk(k.actualName,g),9);case 9:ya(m,
8);break;case 7:za(m);case 8:throw l;}})}
function dl(a,b,c){c=void 0===c?{}:c;return cl(a,b,!1,c)}
function el(a,b,c){c=void 0===c?{}:c;return cl(a,b,!0,c)}
function fl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.i)return w(e,al(),2);if(3!=e.i){c=e.j;if(!c)return e.return();jj(a);d=bl(a);return w(e,Lk(d.actualName,b),3)}return w(e,Tk(d.actualName,c),0)})}
function gl(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.i?w(e,Lk(d.actualName,b),2):w(e,Tk(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function hl(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.i)return w(d,al(),2);if(3!=d.i){b=d.j;if(!b)return d.return();jj("LogsDatabaseV2");return w(d,Vk(b),3)}c=d.j;return w(d,gl(c,a,b),0)})}
function il(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.i)return w(d,al(),2);if(3!=d.i){c=d.j;if(!c)return d.return();jj(a);return w(d,Lk(a,b),3)}return w(d,Tk(a,c),0)})}
;function jl(a){this.qa=this.i=!1;this.potentialEsfErrorCounter=this.j=0;this.handleError=function(){};
this.ea=function(){};
this.now=Date.now;this.ha=!1;var b;this.gb=null!=(b=a.gb)?b:100;var c;this.fb=null!=(c=a.fb)?c:1;var d;this.cb=null!=(d=a.cb)?d:2592E6;var e;this.bb=null!=(e=a.bb)?e:12E4;var f;this.eb=null!=(f=a.eb)?f:5E3;var g;this.A=null!=(g=a.A)?g:void 0;this.va=!!a.va;var h;this.ta=null!=(h=a.ta)?h:.1;var k;this.ya=null!=(k=a.ya)?k:10;a.handleError&&(this.handleError=a.handleError);a.ea&&(this.ea=a.ea);a.ha&&(this.ha=a.ha);a.qa&&(this.qa=a.qa);this.C=a.C;this.K=a.K;this.F=a.F;this.H=a.H;this.U=a.U;this.Ia=a.Ia;
this.Ha=a.Ha;kl(this)&&(!this.C||this.C("networkless_logging"))&&ll(this)}
function ll(a){kl(a)&&!a.ha&&(a.i=!0,a.va&&Math.random()<=a.ta&&a.F.mb(a.A),ml(a),a.H.G()&&a.na(),a.H.S(a.Ia,a.na.bind(a)),a.H.S(a.Ha,a.Oa.bind(a)))}
n=jl.prototype;n.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.F.set(d,this.A).then(function(e){d.id=e;c.H.G()&&nl(c,d)}).catch(function(e){nl(c,d);
ol(c,e)})}else this.U(a,b)};
n.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.C&&this.C("nwl_skip_retry")&&(e.skipRetry=c);if(this.H.G()||this.C&&this.C("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.i)return w(k,d.F.set(e,d.A).catch(function(l){ol(d,l)}),2);
f(g,h);k.i=0})}}this.U(a,b,e.skipRetry)}else this.F.set(e,this.A).catch(function(g){d.U(a,b,e.skipRetry);
ol(d,g)})}else this.U(a,b,this.C&&this.C("nwl_skip_retry")&&c)};
n.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(kl(this)&&this.i){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.F.da(d.id,c.A):e=!0;c.H.T&&c.C&&c.C("vss_network_hint")&&c.H.T(!0);f(g,h)};
this.U(d.url,d.options);this.F.set(d,this.A).then(function(g){d.id=g;e&&c.F.da(d.id,c.A)}).catch(function(g){ol(c,g)})}else this.U(a,b)};
n.na=function(){var a=this;if(!kl(this))throw vj("throttleSend");this.j||(this.j=this.K.M(function(){var b;return x(function(c){if(1==c.i)return w(c,a.F.Ta("NEW",a.A),2);if(3!=c.i)return b=c.j,b?w(c,nl(a,b),3):(a.Oa(),c.return());a.j&&(a.j=0,a.na());c.i=0})},this.gb))};
n.Oa=function(){this.K.aa(this.j);this.j=0};
function nl(a,b){var c,d;return x(function(e){switch(e.i){case 1:if(!kl(a))throw c=vj("immediateSend"),c;if(void 0===b.id){e.s(2);break}return w(e,a.F.ub(b.id,a.A),3);case 3:(d=e.j)?b=d:a.ea(Error("The request cannot be found in the database."));case 2:if(pl(a,b,a.cb)){e.s(4);break}a.ea(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.s(5);break}return w(e,a.F.da(b.id,a.A),5);case 5:return e.return();case 4:b.skipRetry||(b=ql(a,b));if(!b){e.s(0);break}if(!b.skipRetry||
void 0===b.id){e.s(8);break}return w(e,a.F.da(b.id,a.A),8);case 8:a.U(b.url,b.options,!!b.skipRetry),e.i=0}})}
function ql(a,b){if(!kl(a))throw vj("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:g=rl(f);if(!(a.C&&a.C("nwl_consider_error_code")&&g||a.C&&!a.C("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.ya)){l.s(2);break}if(!a.H.V){l.s(3);break}return w(l,a.H.V(),3);case 3:if(a.H.G()){l.s(2);break}c(e,f);if(!a.C||!a.C("nwl_consider_error_code")||void 0===(null==(h=b)?void 0:h.id)){l.s(6);break}return w(l,a.F.Ja(b.id,a.A,!1),6);case 6:return l.return();case 2:if(a.C&&a.C("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.ya)return l.return();a.potentialEsfErrorCounter++;if(void 0===(null==(k=b)?void 0:k.id)){l.s(8);break}return b.sendCount<a.fb?w(l,a.F.Ja(b.id,a.A),12):w(l,a.F.da(b.id,a.A),8);case 12:a.K.M(function(){a.H.G()&&a.na()},a.eb);
case 8:c(e,f),l.i=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return void 0===(null==(g=b)?void 0:g.id)?h.s(2):w(h,a.F.da(b.id,a.A),2);a.H.T&&a.C&&a.C("vss_network_hint")&&a.H.T(!0);d(e,f);h.i=0})};
return b}
function pl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function ml(a){if(!kl(a))throw vj("retryQueuedRequests");a.F.Ta("QUEUED",a.A).then(function(b){b&&!pl(a,b,a.bb)?a.K.M(function(){return x(function(c){if(1==c.i)return void 0===b.id?c.s(2):w(c,a.F.Ja(b.id,a.A),2);ml(a);c.i=0})}):a.H.G()&&a.na()})}
function ol(a,b){a.hb&&!a.H.G()?a.hb(b):a.handleError(b)}
function kl(a){return!!a.A||a.qa}
function rl(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;var sl=B("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.oa;L.prototype.publish=L.prototype.fa;L.prototype.clear=L.prototype.clear;C("ytPubsub2Pubsub2Instance",sl);C("ytPubsub2Pubsub2SubscribedKeys",B("ytPubsub2Pubsub2SubscribedKeys")||{});C("ytPubsub2Pubsub2TopicToKeys",B("ytPubsub2Pubsub2TopicToKeys")||{});C("ytPubsub2Pubsub2IsAsync",B("ytPubsub2Pubsub2IsAsync")||{});C("ytPubsub2Pubsub2SkipSubKey",null);function tl(a,b){Nk.call(this,a,b);this.options=b;jj(a)}
v(tl,Nk);function ul(a,b){var c;return function(){c||(c=new tl(a,b));return c}}
tl.prototype.l=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ka?el:dl)(a,b,Object.assign({},c))};
tl.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ka?il:fl)(this.name,a)};
function vl(a,b){return ul(a,b)}
;var wl;
function xl(){if(wl)return wl();var a={};wl=vl("LogsDatabaseV2",{ka:(a.LogsRequestsStore={Ba:2},a),Ka:!1,upgrade:function(b,c,d){c(2)&&Ij(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.i.indexNames.contains("newRequest")&&d.i.deleteIndex("newRequest"),d.i.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.i.objectStoreNames.contains("sapisid")&&b.i.deleteObjectStore("sapisid");c(9)&&b.i.objectStoreNames.contains("SWHealthLog")&&b.i.deleteObjectStore("SWHealthLog")},
version:9});return wl()}
;function yl(a){return Pk(xl(),a)}
function zl(a,b){var c,d,e,f;return x(function(g){if(1==g.i)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,yl(b),2);if(3!=g.i)return d=g.j,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:N("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Kj(d,e),3);f=g.j;c.zb=Q();Al(c);return g.return(f)})}
function Bl(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.i)return c={startTime:Q(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,yl(b),2);if(3!=l.i)return d=l.j,e=N("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Q()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Hj(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(m){return Hk(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(q){q.X()&&(k=q.X(),"NEW"===a&&(k.status="QUEUED",q.update(k)))})}),
3);
c.zb=Q();Al(c);return l.return(k)})}
function Cl(a,b){var c;return x(function(d){if(1==d.i)return w(d,yl(b),2);c=d.j;return d.return(Hj(c,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",V(f.i.put(g,void 0)).then(function(){return g})})}))})}
function Dl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.i)return w(e,yl(b),2);d=e.j;return e.return(Hj(d,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),V(g.i.put(h,void 0)).then(function(){return h})):U.resolve(void 0)})}))})}
function El(a,b){var c;return x(function(d){if(1==d.i)return w(d,yl(b),2);c=d.j;return d.return(c.delete("LogsRequestsStore",a))})}
function Fl(a){var b,c;return x(function(d){if(1==d.i)return w(d,yl(a),2);b=d.j;c=Q()-2592E6;return w(d,Hj(b,["LogsRequestsStore"],{mode:"readwrite",I:!0},function(e){return Ek(e.objectStore("LogsRequestsStore"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Gl(){x(function(a){return w(a,hl(),0)})}
function Al(a){if(!O("nwl_csi_killswitch")&&.01>=Math.random()){var b=B("ytPubsub2Pubsub2Instance");b&&b.publish.call(b,"nwl_transaction_latency_payload".toString(),"nwl_transaction_latency_payload",a)}}
;var Hl={},Il=vl("ServiceWorkerLogsDatabase",{ka:(Hl.SWHealthLog={Ba:1},Hl),Ka:!0,upgrade:function(a,b){b(1)&&Ij(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).i.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function Jl(a){return Pk(Il(),a)}
function Kl(a){var b,c;x(function(d){if(1==d.i)return w(d,Jl(a),2);b=d.j;c=Q()-2592E6;return w(d,Hj(b,["SWHealthLog"],{mode:"readwrite",I:!0},function(e){return Ek(e.objectStore("SWHealthLog"),{},function(f){if(f.X().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Ll(a){var b;return x(function(c){if(1==c.i)return w(c,Jl(a),2);b=c.j;return w(c,b.clear("SWHealthLog"),0)})}
;var Ml={},Nl=0;
function Ol(a){var b=void 0===b?"":b;var c=void 0===c?!1:c;if(a)if(b)qi(a,void 0,"POST",b);else if(N("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))qi(a,void 0,"GET","",void 0,void 0,c);else{b:{try{var d=new Za({url:a});if(d.l&&d.j||d.o){var e=Pb(a.match(Ob)[5]||null);var f=!(!e||!e.endsWith("/aclk")||"1"!==Zb(a,"ri"));break b}}catch(h){}f=!1}if(f){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var g=!0;break b}}catch(h){}g=!1}b=g?!0:!1}else b=!1;b||Pl(a)}}
function Pl(a){var b=new Image,c=""+Nl++;Ml[c]=b;b.onload=b.onerror=function(){delete Ml[c]};
b.src=a}
;function W(){this.i=new Map;this.j=!1}
function Ql(){if(!W.i){var a=B("yt.networkRequestMonitor.instance")||new W;C("yt.networkRequestMonitor.instance",a);W.i=a}return W.i}
W.prototype.requestComplete=function(a,b){b&&(this.j=!0);a=this.removeParams(a);this.i.get(a)||this.i.set(a,b)};
W.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.i.get(a))?!1:!1===a&&this.j?!0:null};
W.prototype.removeParams=function(a){return a.split("?")[0]};
W.prototype.removeParams=W.prototype.removeParams;W.prototype.isEndpointCFR=W.prototype.isEndpointCFR;W.prototype.requestComplete=W.prototype.requestComplete;W.getInstance=Ql;var Rl;function Sl(){Rl||(Rl=new Mi("yt.offline"));return Rl}
function Tl(a){if(O("offline_error_handling")){var b=Sl().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Sl().set("errors",b,2592E3,!0)}}
function Ul(){if(O("offline_error_handling")){var a=Sl().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new gj(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;Hh(c)}Sl().set("errors",{},2592E3,!0)}}}
;var Vl=ci("network_polling_interval",3E4);function Z(){J.call(this);var a=this;this.pa=0;this.B=this.m=!1;this.j=this.Da();O("use_shared_nsm")?(this.i=Ke(),O("use_shared_nsm_and_keep_yt_online_updated")&&(this.i.S("networkstatus-online",function(){a.j=!0;a.B&&Ul()}),this.i.S("networkstatus-offline",function(){a.j=!1}))):(Wl(this),Xl(this))}
v(Z,J);function Yl(){if(!Z.i){var a=B("yt.networkStatusManager.instance")||new Z;C("yt.networkStatusManager.instance",a);Z.i=a}return Z.i}
n=Z.prototype;n.G=function(){if(O("use_shared_nsm")&&this.i){var a;return null==(a=this.i)?void 0:a.G()}return this.j};
n.T=function(a){if(O("use_shared_nsm")&&this.i){var b;null!=(b=this.i)&&(b.i=a)}else a!==this.j&&(this.j=a)};
n.vb=function(a){!O("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.pa||Zl(this))};
n.Da=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
n.ob=function(){this.B=!0};
n.S=function(a,b){return O("use_shared_nsm")&&this.i?this.i.S(a,b):J.prototype.S.call(this,a,b)};
function Xl(a){window.addEventListener("online",function(){return x(function(b){if(1==b.i)return w(b,a.V(),2);a.B&&Ul();b.i=0})})}
function Wl(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.V(),0)})})}
function Zl(a){a.pa=Vi(function(){return x(function(b){if(1==b.i)return a.j?a.Da()||!a.m?b.s(3):w(b,a.V(),3):w(b,a.V(),3);Zl(a);b.i=0})},Vl)}
n.V=function(a){var b=this;if(O("use_shared_nsm")&&this.i){var c=Ie(this.i,a);c.then(function(d){O("use_cfr_monitor")&&Ql().requestComplete("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g,h;return x(function(k){switch(k.i){case 1:return e=window.AbortController?new window.AbortController:void 0,g=null==(f=e)?void 0:f.signal,h=!1,xa(k,2,3),e&&(b.P=Le.M(function(){e.abort()},a||2E4)),w(k,fetch("/generate_204",{method:"HEAD",
signal:g}),5);case 5:h=!0;case 3:Aa(k);O("use_cfr_monitor")&&Ql().requestComplete("generate_204",h);b.u=void 0;b.P&&Le.aa(b.P);h!==b.j&&(b.j=h,b.j&&b.m?Fe(b,"ytnetworkstatus-online"):b.m&&Fe(b,"ytnetworkstatus-offline"));d(h);Ba(k);break;case 2:za(k),h=!1,k.s(3)}})})};
Z.prototype.sendNetworkCheckRequest=Z.prototype.V;Z.prototype.listen=Z.prototype.S;Z.prototype.enableErrorFlushing=Z.prototype.ob;Z.prototype.getWindowStatus=Z.prototype.Da;Z.prototype.monitorNetworkStatusChange=Z.prototype.vb;Z.prototype.networkStatusHint=Z.prototype.T;Z.prototype.isNetworkAvailable=Z.prototype.G;Z.getInstance=Yl;function $l(a){a=void 0===a?{}:a;J.call(this);var b=this;this.j=this.P=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";O("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.i=Yl();var c=B("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.i);c&&c(a.Ra);a.Ya&&(c=B("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.i))&&c();if(c=B("yt.networkStatusManager.instance.listen").bind(this.i))a.za?(this.za=a.za,c(this.u,
function(){am(b,"publicytnetworkstatus-online")}),c(this.m,function(){am(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Fe(b,"publicytnetworkstatus-online")}),c(this.m,function(){Fe(b,"publicytnetworkstatus-offline")}))}
v($l,J);$l.prototype.G=function(){var a=B("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
$l.prototype.T=function(a){var b=B("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
$l.prototype.V=function(a){var b=this,c;return x(function(d){c=B("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return O("skip_network_check_if_cfr")&&Ql().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.T((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.G())})):c?d.return(c(a)):d.return(!0)})};
function am(a,b){a.za?a.j?(Le.aa(a.P),a.P=Le.M(function(){a.B!==b&&(Fe(a,b),a.B=b,a.j=Q())},a.za-(Q()-a.j))):(Fe(a,b),a.B=b,a.j=Q()):Fe(a,b)}
;var bm;function cm(){jl.call(this,{F:{mb:Fl,da:El,Ta:Bl,ub:Cl,Ja:Dl,set:zl},H:dm(),handleError:Hh,ea:Ih,U:em,now:Q,hb:Tl,K:Zi(),Ia:"publicytnetworkstatus-online",Ha:"publicytnetworkstatus-offline",va:!0,ta:.1,ya:ci("potential_esf_error_limit",10),C:O,ha:!(hj()&&"www.youtube-nocookie.com"!==Qb(document.location.toString()))});this.l=new Jf;O("networkless_immediately_drop_all_requests")&&Gl();il("LogsDatabaseV2")}
v(cm,jl);function fm(){var a=B("yt.networklessRequestController.instance");a||(a=new cm,C("yt.networklessRequestController.instance",a),O("networkless_logging")&&al().then(function(b){a.A=b;ll(a);a.l.resolve();a.va&&Math.random()<=a.ta&&a.A&&Kl(a.A);O("networkless_immediately_drop_sw_health_store")&&gm(a)}));
return a}
cm.prototype.writeThenSend=function(a,b){b||(b={});hj()||(this.i=!1);jl.prototype.writeThenSend.call(this,a,b)};
cm.prototype.sendThenWrite=function(a,b,c){b||(b={});hj()||(this.i=!1);jl.prototype.sendThenWrite.call(this,a,b,c)};
cm.prototype.sendAndWrite=function(a,b){b||(b={});hj()||(this.i=!1);jl.prototype.sendAndWrite.call(this,a,b)};
cm.prototype.awaitInitialization=function(){return this.l.promise};
function gm(a){var b;x(function(c){if(!a.A)throw b=vj("clearSWHealthLogsDb"),b;return c.return(Ll(a.A).catch(function(d){a.handleError(d)}))})}
function em(a,b,c){O("use_cfr_monitor")&&hm(a,b);var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Q());c&&0===Object.keys(b).length?Ol(a):ni(a,b)}
function dm(){bm||(bm=new $l({Ya:!0,Ra:!0}));return bm}
function hm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Ql().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Ql().requestComplete(a,!0);d(e,f)}}
;var im=0,jm=0,km,lm=A.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1,potentialEsfErrorCounter:jm};C("ytNetworklessLoggingInitializationOptions",lm);function mm(a,b){function c(d){var e=nm().G();if(!om()||!d||e&&O("vss_networkless_bypass_write"))pm(a,b);else{var f={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0};zl(f,d).then(function(g){f.id=g;nm().G()&&qm(f)}).catch(function(g){qm(f);
nm().G()?Hh(g):Tl(g)})}}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?al().then(function(d){c(d)}):c($k())}
function rm(a,b){function c(d){if(om()&&d){var e={url:a,options:b,timestamp:Q(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){O("use_cfr_monitor")&&Ql().requestComplete(e.url,!0);void 0!==e.id?El(e.id,d):f=!0;O("vss_network_hint")&&nm().T(!0);g(k,l)};
if(O("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){Ql().requestComplete(e.url,!1);h(k,l)}}pm(e.url,e.options);
zl(e,d).then(function(k){e.id=k;f&&El(e.id,d)}).catch(function(k){nm().G()?Hh(k):Tl(k)})}else pm(a,b)}
b=void 0===b?{}:b;O("skip_is_supported_killswitch")?al().then(function(d){c(d)}):c($k())}
function sm(){var a=$k();if(!a)throw vj("throttleSend");im||(im=Le.M(function(){var b;return x(function(c){if(1==c.i)return w(c,Bl("NEW",a),2);if(3!=c.i)return b=c.j,b?w(c,qm(b),3):(Le.aa(im),im=0,c.return());im&&(im=0,sm());c.i=0})},100))}
function qm(a){var b,c,d;return x(function(e){switch(e.i){case 1:b=$k();if(!b)throw c=vj("immediateSend"),c;if(void 0===a.id){e.s(2);break}return w(e,Cl(a.id,b),3);case 3:(d=e.j)?a=d:Ih(Error("The request cannot be found in the database."));case 2:var f=a.timestamp;if(!(2592E6<=Q()-f)){e.s(4);break}Ih(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.s(5);break}return w(e,El(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=tm(a));f=a;var g,h;if(null==
f?0:null==(g=f.options)?0:null==(h=g.postParams)?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(Q());a=f;if(!a){e.s(0);break}if(!a.skipRetry||void 0===a.id){e.s(8);break}return w(e,El(a.id,b),8);case 8:pm(a.url,a.options,!!a.skipRetry),e.i=0}})}
function tm(a){var b=$k();if(!b)throw vj("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g,h,k;return x(function(l){switch(l.i){case 1:O("use_cfr_monitor")&&Ql().requestComplete(a.url,!1);g=rl(f);if(!(O("nwl_consider_error_code")&&g||!O("nwl_consider_error_code")&&um()<=ci("potential_esf_error_limit",10))){l.s(2);break}if(O("skip_checking_network_on_cfr_failure")&&(!O("skip_checking_network_on_cfr_failure")||Ql().isEndpointCFR(a.url))){l.s(3);break}return w(l,nm().V(),3);case 3:if(nm().G()){l.s(2);break}c(e,f);if(!O("nwl_consider_error_code")||void 0===
(null==(h=a)?void 0:h.id)){l.s(6);break}return w(l,Dl(a.id,b,!1),6);case 6:return l.return();case 2:if(O("nwl_consider_error_code")&&!g&&um()>ci("potential_esf_error_limit",10))return l.return();B("ytNetworklessLoggingInitializationOptions")&&lm.potentialEsfErrorCounter++;jm++;if(void 0===(null==(k=a)?void 0:k.id)){l.s(8);break}return 1>a.sendCount?w(l,Dl(a.id,b),12):w(l,El(a.id,b),8);case 12:Le.M(function(){nm().G()&&sm()},5E3);
case 8:c(e,f),l.i=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){var g;return x(function(h){if(1==h.i)return O("use_cfr_monitor")&&Ql().requestComplete(a.url,!0),void 0===(null==(g=a)?void 0:g.id)?h.s(2):w(h,El(a.id,b),2);O("vss_network_hint")&&nm().T(!0);d(e,f);h.i=0})};
return a}
function nm(){if(O("use_new_nwl"))return dm();km||(km=new $l({Ya:!0,Ra:!0}));return km}
function pm(a,b,c){c&&0===Object.keys(b).length?Ol(a):ni(a,b)}
function om(){return B("ytNetworklessLoggingInitializationOptions")?lm.isNwlInitialized:!1}
function um(){return B("ytNetworklessLoggingInitializationOptions")?lm.potentialEsfErrorCounter:jm}
;function vm(a){var b=this;this.config_=null;a?this.config_=a:Ci()&&(this.config_=Di());Vi(function(){Si(b)},5E3)}
vm.prototype.isReady=function(){!this.config_&&Ci()&&(this.config_=Di());return!!this.config_};
function Ti(a,b,c,d){function e(y){y=void 0===y?!1:y;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(y||O("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Qi(b,c,l,k)),z)){var G=g.onSuccess,K=g.onFetchSuccess;g.onSuccess=function(M,P){Ri(z);G(M,P)};
c.onFetchSuccess=function(M,P){Ri(z);K(M,P)}}try{y&&d.retry&&!d.Za.bypassNetworkless?(g.method="POST",d.Za.writeThenSend?O("use_new_nwl_wts")?fm().writeThenSend(p,g):mm(p,g):O("use_new_nwl_saw")?fm().sendAndWrite(p,g):rm(p,g)):(g.method="POST",g.postParams||(g.postParams={}),ni(p,g))}catch(M){if("InvalidAccessError"==M.name)z&&(Ri(z),z=0),Ih(Error("An extension is blocking network request."));
else throw M;}z&&Vi(function(){Si(a)},5E3)}
!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ih(new gj("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new gj("innertube xhrclient not ready",b,c,d);Hh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(y,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(y){if(d.onSuccess)d.onSuccess(y)},
onError:function(y,z){if(d.onError)d.onError(z)},
onFetchError:function(y){if(d.onError)d.onError(y)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.rb)&&(h=f);var k=a.config_.tb||!1,l=Ki(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,q={alt:"json"},t=a.config_.sb&&f;t=t&&f.startsWith("Bearer");t||(q.key=a.config_.innertubeApiKey);var p=$h(""+h+m,q||{},!0);O("use_new_nwl")&&fm().i||!O("use_new_nwl")&&
om()?Zk().then(function(y){e(y)}):e(!1)}
;var wm={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},xm={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};function ym(){var a=B("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var zm=A.ytPubsubPubsubInstance||new L,Am=A.ytPubsubPubsubSubscribedKeys||{},Bm=A.ytPubsubPubsubTopicToKeys||{},Cm=A.ytPubsubPubsubIsSynchronous||{};L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.oa;L.prototype.publish=L.prototype.fa;L.prototype.clear=L.prototype.clear;C("ytPubsubPubsubInstance",zm);C("ytPubsubPubsubTopicToKeys",Bm);C("ytPubsubPubsubIsSynchronous",Cm);C("ytPubsubPubsubSubscribedKeys",Am);var Dm=A.window;Dm.ytExports||(Dm.ytExports={logging:{transport:{leaderQueueLength:0,leaderChosen:!1}}});var Em=ci("initial_gel_batch_timeout",2E3),Fm=Math.pow(2,16)-1,Gm=!1,Hm=void 0;function Im(){this.l=this.i=this.j=0}
var Jm=new Im,Km=new Im,Lm=!0,Mm=A.ytLoggingTransportGELQueue_||new Map;C("ytLoggingTransportGELQueue_",Mm);var Nm=new Map,Om=A.ytLoggingTransportGELProtoQueue_||new Map;C("ytLoggingTransportGELProtoQueue_",Om);var Pm=A.ytLoggingTransportTokensToCttTargetIds_||{};C("ytLoggingTransportTokensToCttTargetIds_",Pm);var Qm=A.ytLoggingTransportTokensToJspbCttTargetIds_||{};C("ytLoggingTransportTokensToJspbCttTargetIds_",Qm);
function Rm(){O("jspb_with_transport_leader")&&!Dm.ytExports.logging.transport.leaderChosen&&(Gm=Dm.ytExports.logging.transport.leaderChosen=!0,document.addEventListener("FLUSH_REQUEST",function(){Sm(void 0,void 0,!0)}))}
function Tm(a,b){Rm();if("log_event"===a.endpoint){Um(a);var c=Vm(a),d=Mm.get(c)||[];Mm.set(c,d);d.push(a.payload);Wm(b,d,c)}}
function Xm(a,b){Rm();if("log_event"===a.endpoint){Um(void 0,a);var c=Vm(a,!0);if(O("jspb_with_transport_leader")&&Gm){var d=Nm.get(c)||[];Nm.set(c,d);Dm.ytExports.logging.transport.leaderQueueLength++;d.push(a.payload);Wm(b,d,c,!0)}else d=Om.get(c)||[],Om.set(c,d),a=a.payload.toJSON(),d.push(a),Wm(b,d,c,!0)}}
function Wm(a,b,c,d){d=void 0===d?!1:d;a&&(Hm=new a);a=ci("tvhtml5_logging_max_batch")||ci("web_logging_max_batch")||100;var e=Q(),f=d?Km.l:Jm.l,g=Om.get(c)||[];O("jspb_with_transport_leader")&&(Gm&&b.length+g.length>=a||!Gm&&Dm.ytExports.logging.transport.leaderQueueLength+b.length>=a)||b.length>=a?Sm({writeThenSend:!0},O("flush_only_full_queue")?c:void 0,d):10<=e-f&&(Ym(d),d?Km.l=e:Jm.l=e)}
function Zm(a,b){Rm();if("log_event"===a.endpoint){Um(a);var c=Vm(a),d=new Map;d.set(c,[a.payload]);b&&(Hm=new b);return new Kf(function(e,f){Hm&&Hm.isReady()?$m(d,e,f,{bypassNetworkless:!0},!0):e()})}}
function an(a,b){Rm();if("log_event"===a.endpoint){Um(void 0,a);var c=Vm(a,!0),d=new Map,e=new Map;O("jspb_with_transport_leader")&&Gm?e.set(c,[a.payload]):d.set(c,[a.payload.toJSON()]);b&&(Hm=new b);return new Kf(function(f){Hm&&Hm.isReady()?bn(d,e,f,{bypassNetworkless:!0},!0):f()})}}
function Vm(a,b){var c="";if(a.ga)c="visitorOnlyApprovedKey";else if(a.R){if(void 0===b?0:b){b=a.R.token;c=a.R;var d=new th;c.videoId?d.setVideoId(c.videoId):c.playlistId&&gd(d,2,uh,c.playlistId);Qm[b]=d}else b=a.R,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Pm[a.R.token]=c;c=a.R.token}return c}
function Sm(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new Kf(function(d,e){c?(window.clearTimeout(Km.j),window.clearTimeout(Km.i),Km.i=0):(window.clearTimeout(Jm.j),window.clearTimeout(Jm.i),Jm.i=0);if(O("jspb_with_transport_leader")&&!Gm)document.dispatchEvent(new CustomEvent("FLUSH_REQUEST")),d();else if(Hm&&Hm.isReady())if(void 0!==b)if(c){e=new Map;var f=new Map,g=Om.get(b)||[];e.set(b,g);O("jspb_with_transport_leader")&&(g=Nm.get(b)||[],f.set(b,g));bn(e,f,d,a);O("jspb_with_transport_leader")&&
Nm.delete(b);Om.delete(b)}else f=new Map,g=Mm.get(b)||[],f.set(b,g),$m(f,d,e,a),Mm.delete(b);else c?(bn(Om,Nm,d,a),Om.clear(),O("jspb_with_transport_leader")&&Nm.clear()):($m(Mm,d,e,a),Mm.clear());else Ym(c),d()})}
function Ym(a){a=void 0===a?!1:a;if(O("web_gel_timeout_cap")&&(!a&&!Jm.i||a&&!Km.i)){var b=Rh(function(){Sm({writeThenSend:!0},void 0,a)},6E4);
a?Km.i=b:Jm.i=b}window.clearTimeout(a?Km.j:Jm.j);b=N("LOGGING_BATCH_TIMEOUT",ci("web_gel_debounce_ms",1E4));O("shorten_initial_gel_batch_timeout")&&Lm&&(b=Em);b=Rh(function(){Sm({writeThenSend:!0},void 0,a)},b);
a?Km.j=b:Jm.j=b}
function $m(a,b,c,d,e){var f=Hm;d=void 0===d?{}:d;var g=Math.round(Q()),h=a.size;a=u(a);for(var k=a.next();!k.done;k=a.next()){var l=u(k.value);k=l.next().value;var m=l.next().value;l=k;k=nb({context:Ei(f.config_||Di())});k.events=m;(m=Pm[l])&&cn(k,l,m);delete Pm[l];l="visitorOnlyApprovedKey"===l;dn(k,g,l);en(d);m=function(){h--;h||b()};
var q=function(){h--;h||b()};
try{Ti(f,"log_event",k,fn(d,l,m,q,e)),Lm=!1}catch(t){Hh(t),c()}}}
function bn(a,b,c,d,e){var f=Hm;d=void 0===d?{}:d;var g=Math.round(Q()),h=a.size+b.size,k=new Map([].concat(ia(a),ia(b)));k=u(k);for(var l=k.next();!l.done;l=k.next()){var m=u(l.value).next().value,q=a.get(m),t=b.get(m)||[];l=new vh;var p=Ji(f.config_||Di());H(l,ah,1,p);q=q?gn(q):[];q=u(q);for(p=q.next();!p.done;p=q.next())md(l,3,qh,p.value);t=u(t);for(q=t.next();!q.done;q=t.next())md(l,3,qh,q.value);(t=Qm[m])&&hn(l,m,t);delete Qm[m];m="visitorOnlyApprovedKey"===m;jn(l,g,m);en(d);l=qd(l);m=fn(d,m,
function(){Dm.ytExports.logging.transport.leaderQueueLength=0;h--;h||c()},function(){Dm.ytExports.logging.transport.leaderQueueLength=0;
h--;h||c()},e);
m.headers={"Content-Type":"application/json+protobuf"};m.postBodyFormat="JSPB";m.postBody=l;Ti(f,"log_event","",m);Lm=!1}}
function en(a){O("always_send_and_write")&&(a.writeThenSend=!1)}
function fn(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,Za:a,ga:b,Tb:!!e,headers:{},postBodyFormat:"",postBody:""}}
function dn(a,b,c){a.requestTimeMs=String(b);O("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=N("EVENT_ID"))&&(c=kn(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function jn(a,b,c){F(a,2,b);if(!c&&(b=N("EVENT_ID"))){c=kn();var d=new sh;F(d,1,b);F(d,2,c);H(a,sh,5,d)}}
function kn(){var a=N("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Fm/2));a++;a>Fm&&(a=1);Bh("BATCH_CLIENT_COUNTER",a);return a}
function cn(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function hn(a,b,c){if(ed(c,1===hd(c,uh)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;H(a,th,4,c);a=id(a,ah,1)||new ah;c=id(a,Zg,3)||new Zg;var e=new Yg;e.setToken(b);F(e,1,d);md(c,12,Yg,e);H(a,Zg,3,c)}
function gn(a){for(var b=[],c=0;c<a.length;c++)try{b.push(new qh(a[c]))}catch(d){Hh(new gj("Transport failed to deserialize "+String(a[c])))}return b}
function Um(a,b){if(B("yt.logging.transport.enableScrapingForTest")){var c=B("yt.logging.transport.scrapedPayloadsForTesting"),d=B("yt.logging.transport.payloadToScrape","");b&&(b=B("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);a&&a.payload[d]&&c.push((null==a?void 0:a.payload)[d]);C("yt.logging.transport.scrapedPayloadsForTesting",c)}}
;var ln=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",ln);function mn(a){Sm(void 0,void 0,void 0===a?!1:a)}
function nn(a){ln[a]=a in ln?ln[a]+1:0;return ln[a]}
;function on(a,b){var c=void 0===c?{}:c;var d=vm;N("ytLoggingEventsDefaultDisabled",!1)&&vm==vm&&(d=null);a:{c=void 0===c?{}:c;if(O("lr_drop_other_and_business_payloads")){if(xm[a]||wm[a])break a}else if(O("lr_drop_other_payloads")&&xm[a])break a;var e={},f=Math.round(c.timestamp||Q());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=ym();e.context={lastActivityMs:String(c.timestamp||!isFinite(a)?-1:a)};O("log_sequence_info_on_gel_web")&&c.ma&&(a=e.context,b=c.ma,b={index:nn(b),groupKey:b},a.sequence=
b,c.pb&&delete ln[c.ma]);(c.xb?Zm:Tm)({endpoint:"log_event",payload:e,R:c.R,ga:c.ga},d)}}
;var pn=[{Ga:function(a){return"Cannot read property '"+a.key+"'"},
xa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ga:function(a){return"Cannot call '"+a.key+"'"},
xa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ga:function(a){return a.key+" is not defined"},
xa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var rn={Y:[],W:[{lb:qn,weight:500}]};function qn(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function sn(){this.W=[];this.Y=[]}
var tn;function un(){if(!tn){var a=tn=new sn;a.Y.length=0;a.W.length=0;rn.Y&&a.Y.push.apply(a.Y,rn.Y);rn.W&&a.W.push.apply(a.W,rn.W)}return tn}
;var vn=new L;function wn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=xn(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=xn(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=xn(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function xn(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function yn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=zn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=wn(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?zn(e+".ve",f,g,h):0;d+=g;d+=zn(e,a[e],b,c);if(500<d)break}}else c[b]=An(a),d+=c[b].length;else c[b]=An(a),d+=c[b].length;return d}
function zn(a,b,c,d){c+="."+a;a=An(b);d[c]=a;return c.length+a.length}
function An(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var Bn=A.ytLoggingGelSequenceIdObj_||{};C("ytLoggingGelSequenceIdObj_",Bn);function Cn(a){var b=void 0;b=void 0===b?{}:b;var c=!1;N("ytLoggingEventsDefaultDisabled",!1)&&vm===vm&&(c=!0);c=c?null:vm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||Q());F(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=ym();d=new ph;F(d,1,b.timestamp||!isFinite(e)?-1:e);if(O("log_sequence_info_on_gel_web")&&b.ma){e=b.ma;var f=nn(e),g=new oh;F(g,2,f);F(g,1,e);H(d,oh,3,g);b.pb&&delete Bn[b.ma]}H(a,ph,33,d);(b.xb?an:Xm)({endpoint:"log_event",payload:a,R:b.R,ga:b.ga},c)}
;var Dn=new Set,En=0,Fn=0,Gn=0,Hn=[],In=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Jn(){for(var a=u(In),b=a.next();!b.done;b=a.next()){var c=Kb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
;function Kn(){var a;return x(function(b){return(a=cf())?b.return(a.then(function(c){c=qd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return xc(d,3)})):b.return(Promise.resolve(null))})}
;var Ln={};function Mn(a){return Ln[a]||(Ln[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Nn={},On=[],xg=new L,Pn={};function Qn(){for(var a=u(On),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Rn(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Mn(b)]:a.getAttribute("data-"+b):null;return c}
function Sn(a){xg.fa.apply(xg,arguments)}
;function Tn(a){this.i=a||{};a=[this.i,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Un(a,b){a=[a.i,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Vn(a,b,c){Wn||(Wn={},Qh(window,"message",function(d){a:{if(d.origin===Un(a,"host")){try{var e=JSON.parse(d.data)}catch(f){e=void 0;break a}if(d=Wn[e.id])d.u=!0,d.u&&(D(d.v,d.sendMessage,d),d.v.length=0),d.Na(e)}e=void 0}return e}));
Wn[c]=b}
var Wn=null;var Xn=window;function Yn(a,b,c){this.m=this.i=this.j=null;this.l=0;this.u=!1;this.v=[];this.o=null;this.J={};if(!a)throw Error("YouTube player element ID required.");this.id=Qa(this);this.B=c;this.setup(a,b)}
n=Yn.prototype;n.setSize=function(a,b){this.i.width=a.toString();this.i.height=b.toString();return this};
n.getIframe=function(){return this.i};
n.Na=function(a){Zn(this,a.event,a)};
n.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.o.subscribe(a,c);$n(this,a);return this};
function ao(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.B===b[0]&&$n(a,c)}}
n.destroy=function(){this.i&&this.i.id&&(Nn[this.i.id]=null);var a=this.o;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.i;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.i)&&a.parentNode&&a.parentNode.removeChild(a);Wn&&(Wn[this.id]=null);this.j=null;a=this.i;for(var c in lb)lb[c][0]==a&&Oh(c);this.m=this.i=null};
n.Qa=function(){return{}};
function bo(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.u?a.sendMessage(b):a.v.push(b)}
function Zn(a,b,c){a.o.o||(c={target:a,data:c},a.o.fa(b,c),Sn(a.B+"."+b,c))}
function co(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Un(a.j,"title"));(b=Un(a.j,"width"))&&c.setAttribute("width",b.toString());(b=Un(a.j,"height"))&&c.setAttribute("height",
b.toString());var g=a.Qa();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&D(["debugjs","debugcss"],function(k){var l=Zb(window.location.href,k);null!==l&&(g[k]=l)});
Xn.yt_embedsTokenValue&&(g.embedsTokenValue=encodeURIComponent(Xn.yt_embedsTokenValue),delete Xn.yt_embedsTokenValue);var h=""+Un(a.j,"host")+("/embed/"+Un(a.j,"videoId"))+"?"+Tb(g);Xn.yt_embedsEnableUaChProbe?Kn().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=Bd(l.href).toString();Dd(c,Cd(k));return k}):
Xn.yt_embedsEnableIframeSrcWithIntent?Dd(c,Cd(h)):c.src=h;
return c}
n.ab=function(){this.i&&this.i.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.l)};
function eo(a){Vn(a.j,a,a.id);a.l=Sh(a.ab.bind(a));Qh(a.i,"load",function(){window.clearInterval(a.l);a.l=Sh(a.ab.bind(a))})}
n.setup=function(a,b){var c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Rb(a.src):"https://www.youtube.com"),this.j=new Tn(b),c||(b=co(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.i=a,this.i.id||(this.i.id="widget"+Qa(this.i)),Nn[this.i.id]=this,window.postMessage){this.o=new L;eo(this);b=Un(this.j,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Pn)Pn.hasOwnProperty(e)&&
ao(this,e)}};
function $n(a,b){a.J[b]||(a.J[b]=!0,bo(a,"addEventListener",[b]))}
n.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=If(a),c=[Rb(this.i.src||"").replace("http:","https:")];if(this.i.contentWindow)for(var d=0;d<c.length;d++)try{this.i.contentWindow.postMessage(b,c[d])}catch(Vb){if(Vb.name&&"SyntaxError"===Vb.name){if(!(Vb.message&&0<Vb.message.indexOf("target origin ''"))){var e=void 0,f=Vb;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION");var g=e||{},h="WARNING";h=void 0===h?"ERROR":h;if(f){f.hasOwnProperty("level")&&
f.level&&(h=f.level);if(O("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=En)){var m=void 0,q=void 0,t=f,p=g,y=de(t),z=y.message||"Unknown Error",G=y.name||"UnknownError",K=y.stack||t.j||"Not available";
if(K.startsWith(G+": "+z)){var M=K.split("\n");M.shift();K=M.join("\n")}var P=y.lineNumber||"Not available",kb=y.fileName||"Not available",vc=K,va=0;if(t.hasOwnProperty("args")&&t.args&&t.args.length)for(var na=0;na<t.args.length&&!(va=yn(t.args[na],"params."+na,p,va),500<=va);na++);else if(t.hasOwnProperty("params")&&t.params){var Y=t.params;if("object"===typeof t.params)for(q in Y){if(Y[q]){var ca="params."+q,da=An(Y[q]);p[ca]=da;va+=ca.length+da.length;if(500<va)break}}else p.params=An(Y)}if(Hn.length)for(var X=
0;X<Hn.length&&!(va=yn(Hn[X],"params.context."+X,p,va),500<=va);X++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var S={message:z,name:G,lineNumber:P,fileName:kb,stack:vc,params:p,sampleWeight:1},Oj=Number(t.columnNumber);isNaN(Oj)||(S.lineNumber=S.lineNumber+":"+Oj);if("IGNORED"===t.level)m=0;else a:{for(var Pj=un(),Qj=u(Pj.Y),Qf=Qj.next();!Qf.done;Qf=Qj.next()){var Rj=Qf.value;if(S.message&&S.message.match(Rj.Ub)){m=Rj.weight;break a}}for(var Sj=u(Pj.W),
Rf=Sj.next();!Rf.done;Rf=Sj.next()){var Tj=Rf.value;if(Tj.lb(S)){m=Tj.weight;break a}}m=1}S.sampleWeight=m;for(var Uj=u(pn),Sf=Uj.next();!Sf.done;Sf=Uj.next()){var Tf=Sf.value;if(Tf.xa[S.name])for(var Vj=u(Tf.xa[S.name]),Uf=Vj.next();!Uf.done;Uf=Vj.next()){var Wj=Uf.value,Md=S.message.match(Wj.regexp);if(Md){S.params["params.error.original"]=Md[0];for(var Vf=Wj.groups,Xj={},Wb=0;Wb<Vf.length;Wb++)Xj[Vf[Wb]]=Md[Wb+1],S.params["params.error."+Vf[Wb]]=Md[Wb+1];S.message=Tf.Ga(Xj);break}}}S.params||(S.params=
{});var Yj=un();S.params["params.errorServiceSignature"]="msg="+Yj.Y.length+"&cb="+Yj.W.length;S.params["params.serviceWorker"]="false";A.document&&A.document.querySelectorAll&&(S.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));xb("sample").constructor!==wb&&(S.params["params.fconst"]="true");var ra=S;window.yterr&&"function"===typeof window.yterr&&window.yterr(ra);if(0!==ra.sampleWeight&&!Dn.has(ra.message)){if("ERROR"===h){vn.fa("handleError",ra);if(O("record_app_crashed_web")&&
0===Gn&&1===ra.sampleWeight)if(Gn++,O("errors_via_jspb")){var Wf=new nh;F(Wf,1,1);if(!O("report_client_error_with_app_crash_ks")){var Zj=new ih;F(Zj,1,ra.message);var ak=new jh;H(ak,ih,3,Zj);var bk=new kh;H(bk,jh,5,ak);var ck=new lh;H(ck,kh,9,bk);H(Wf,lh,4,ck)}var ko=Wf,dk=new qh;kd(dk,nh,20,rh,ko);Cn(dk)}else{var ek={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};O("report_client_error_with_app_crash_ks")||(ek.systemHealth={crashData:{clientError:{logMessage:{message:ra.message}}}});on("appCrashed",ek)}Fn++}else"WARNING"===
h&&vn.fa("handleWarning",ra);if(O("kevlar_gel_error_routing"))a:{var Xf=void 0,Yf=void 0,Hc=h,R=ra;if(O("errors_via_jspb")){if(Jn())Yf=void 0;else{var Xb=new fh;F(Xb,1,R.stack);R.fileName&&F(Xb,4,R.fileName);var Ja=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ja.length&&(1!==Ja.length||isNaN(Number(Ja[0]))?2!==Ja.length||isNaN(Number(Ja[0]))||isNaN(Number(Ja[1]))||(F(Xb,2,Number(Ja[0])),F(Xb,3,Number(Ja[1]))):F(Xb,2,Number(Ja[0])));var qb=new ih;F(qb,1,R.message);F(qb,3,R.name);
F(qb,6,R.sampleWeight);"ERROR"===Hc?F(qb,2,2):"WARNING"===Hc?F(qb,2,1):F(qb,2,0);var Zf=new gh;F(Zf,1,!0);kd(Zf,fh,3,hh,Xb);var rb=new ch;F(rb,3,window.location.href);for(var fk=N("FEXP_EXPERIMENTS",[]),$f=0;$f<fk.length;$f++){var gk=rb,lo=fk[$f];Rc(gk);fd(gk,5).push(lo)}var ag=Ch();if(!Dh()&&ag)for(var hk=u(Object.keys(ag)),sb=hk.next();!sb.done;sb=hk.next()){var ik=sb.value,bg=new eh;F(bg,1,ik);bg.setValue(String(ag[ik]));md(rb,4,eh,bg)}var cg=R.params;if(cg){var jk=u(Object.keys(cg));for(sb=jk.next();!sb.done;sb=
jk.next()){var kk=sb.value,dg=new eh;F(dg,1,"client."+kk);dg.setValue(String(cg[kk]));md(rb,4,eh,dg)}}var lk=N("SERVER_NAME"),mk=N("SERVER_VERSION");if(lk&&mk){var eg=new eh;F(eg,1,"server.name");eg.setValue(lk);md(rb,4,eh,eg);var fg=new eh;F(fg,1,"server.version");fg.setValue(mk);md(rb,4,eh,fg)}var Nd=new jh;H(Nd,ch,1,rb);H(Nd,gh,2,Zf);H(Nd,ih,3,qb);Yf=Nd}var nk=Yf;if(!nk)break a;var ok=new qh;kd(ok,jh,163,rh,nk);Cn(ok)}else{if(Jn())Xf=void 0;else{var Ic={stackTrace:R.stack};R.fileName&&(Ic.filename=
R.fileName);var Ka=R.lineNumber&&R.lineNumber.split?R.lineNumber.split(":"):[];0!==Ka.length&&(1!==Ka.length||isNaN(Number(Ka[0]))?2!==Ka.length||isNaN(Number(Ka[0]))||isNaN(Number(Ka[1]))||(Ic.lineNumber=Number(Ka[0]),Ic.columnNumber=Number(Ka[1])):Ic.lineNumber=Number(Ka[0]));var gg={level:"ERROR_LEVEL_UNKNOWN",message:R.message,errorClassName:R.name,sampleWeight:R.sampleWeight};"ERROR"===Hc?gg.level="ERROR_LEVEL_ERROR":"WARNING"===Hc&&(gg.level="ERROR_LEVEL_WARNNING");var mo={isObfuscated:!0,browserStackInfo:Ic},
Yb={pageUrl:window.location.href,kvPairs:[]};N("FEXP_EXPERIMENTS")&&(Yb.experimentIds=N("FEXP_EXPERIMENTS"));var hg=Ch();if(!Dh()&&hg)for(var pk=u(Object.keys(hg)),tb=pk.next();!tb.done;tb=pk.next()){var qk=tb.value;Yb.kvPairs.push({key:qk,value:String(hg[qk])})}var ig=R.params;if(ig){var rk=u(Object.keys(ig));for(tb=rk.next();!tb.done;tb=rk.next()){var sk=tb.value;Yb.kvPairs.push({key:"client."+sk,value:String(ig[sk])})}}var tk=N("SERVER_NAME"),uk=N("SERVER_VERSION");tk&&uk&&(Yb.kvPairs.push({key:"server.name",
value:tk}),Yb.kvPairs.push({key:"server.version",value:uk}));Xf={errorMetadata:Yb,stackTrace:mo,logMessage:gg}}var vk=Xf;if(!vk)break a;on("clientError",vk)}if("ERROR"===Hc||O("errors_flush_gel_always_killswitch"))O("web_fp_via_jspb")&&mn(!0),mn()}if(!O("suppress_error_204_logging")){var ub=ra,Jc=ub.params||{},$a={urlParams:{a:"logerror",t:"jserror",type:ub.name,msg:ub.message.substr(0,250),line:ub.lineNumber,level:h,"client.name":Jc.name},postParams:{url:N("PAGE_NAME",window.location.href),file:ub.fileName},
method:"POST"};Jc.version&&($a["client.version"]=Jc.version);if($a.postParams){ub.stack&&($a.postParams.stack=ub.stack);for(var wk=u(Object.keys(Jc)),jg=wk.next();!jg.done;jg=wk.next()){var xk=jg.value;$a.postParams["client."+xk]=Jc[xk]}var kg=Ch();if(kg)for(var yk=u(Object.keys(kg)),lg=yk.next();!lg.done;lg=yk.next()){var zk=lg.value;$a.postParams[zk]=kg[zk]}var Ak=N("SERVER_NAME"),Bk=N("SERVER_VERSION");Ak&&Bk&&($a.postParams["server.name"]=Ak,$a.postParams["server.version"]=Bk)}ni(N("ECATCHER_REPORT_HOST",
"")+"/error_204",$a)}try{Dn.add(ra.message)}catch(ro){}En++}}}}}else throw Vb;}else console&&console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function fo(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function go(a){return 0===a.search("get")||0===a.search("is")}
;function ho(a,b){Yn.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.N={};this.playerInfo={};this.videoTitle=""}
v(ho,Yn);n=ho.prototype;n.Qa=function(){var a=Un(this.j,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Un(this.j,"embedConfig")){if(Pa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
n.Na=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Pa(a))for(var c in a)a.hasOwnProperty(c)&&(this.N[c]=a[c]);break;case "infoDelivery":io(this,a);break;case "initialDelivery":Pa(a)&&(window.clearInterval(this.l),this.playerInfo={},this.N={},jo(this,a.apiInterface),io(this,a));break;default:Zn(this,b,a)}};
function io(a,b){if(Pa(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.i.setAttribute("title",b))):(a.videoTitle="",a.i.setAttribute("title","YouTube "+Un(a.j,"title"))))}}
function jo(a,b){D(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:fo(c)?this[c]=function(){this.playerInfo={};
this.N={};bo(this,c,arguments);return this}:go(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){bo(this,c,arguments);
return this})},a)}
n.getVideoEmbedCode=function(){var a=Un(this.j,"host")+("/embed/"+Un(this.j,"videoId")),b=Number(Un(this.j,"width")),c=Number(Un(this.j,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;Gb.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(Ab,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(Bb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(Cb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(Db,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(Eb,
"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(Fb,"&#0;")));return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+((null!=d?d:"YouTube video player")+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')};
n.getOptions=function(a){return this.N.namespaces?a?this.N[a]?this.N[a].options||[]:[]:this.N.namespaces||[]:[]};
n.getOption=function(a,b){if(this.N.namespaces&&a&&b&&this.N[a])return this.N[a][b]};
function no(a){if("iframe"!==a.tagName.toLowerCase()){var b=Rn(a,"videoid");b&&(b={videoId:b,width:Rn(a,"width"),height:Rn(a,"height")},new ho(a,b))}}
;C("YT.PlayerState.UNSTARTED",-1);C("YT.PlayerState.ENDED",0);C("YT.PlayerState.PLAYING",1);C("YT.PlayerState.PAUSED",2);C("YT.PlayerState.BUFFERING",3);C("YT.PlayerState.CUED",5);C("YT.get",function(a){return Nn[a]});
C("YT.scan",Qn);C("YT.subscribe",function(a,b,c){xg.subscribe(a,b,c);Pn[a]=!0;for(var d in Nn)Nn.hasOwnProperty(d)&&ao(Nn[d],a)});
C("YT.unsubscribe",function(a,b,c){wg(a,b,c)});
C("YT.Player",ho);Yn.prototype.destroy=Yn.prototype.destroy;Yn.prototype.setSize=Yn.prototype.setSize;Yn.prototype.getIframe=Yn.prototype.getIframe;Yn.prototype.addEventListener=Yn.prototype.addEventListener;ho.prototype.getVideoEmbedCode=ho.prototype.getVideoEmbedCode;ho.prototype.getOptions=ho.prototype.getOptions;ho.prototype.getOption=ho.prototype.getOption;
On.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=cb(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);D(fb(a,b),no)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Qn();var oo=A.onYTReady;oo&&oo();var po=A.onYouTubeIframeAPIReady;po&&po();var qo=A.onYouTubePlayerAPIReady;qo&&qo();}).call(this);
