var fxcm = fxcm || {};
/*!
 * jQuery JavaScript Library v1.4.2
 * http://jquery.com/
 *
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2010, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Sat Feb 13 22:33:48 2010 -0500
 */ 
(function(A,w){function ma(){if(!c.isReady){try{s.documentElement.doScroll("left")}catch(a){setTimeout(ma,1);return}c.ready()}}function Qa(a,b){b.src?c.ajax({url:b.src,async:false,dataType:"script"}):c.globalEval(b.text||b.textContent||b.innerHTML||"");b.parentNode&&b.parentNode.removeChild(b)}function X(a,b,d,f,e,j){var i=a.length;if(typeof b==="object"){for(var o in b)X(a,o,b[o],f,e,d);return a}if(d!==w){f=!j&&f&&c.isFunction(d);for(o=0;o<i;o++)e(a[o],b,f?d.call(a[o],o,e(a[o],b)):d,j);return a}return i?
e(a[0],b):w}function J(){return(new Date).getTime()}function Y(){return false}function Z(){return true}function na(a,b,d){d[0].type=a;return c.event.handle.apply(b,d)}function oa(a){var b,d=[],f=[],e=arguments,j,i,o,k,n,r;i=c.data(this,"events");if(!(a.liveFired===this||!i||!i.live||a.button&&a.type==="click")){a.liveFired=this;var u=i.live.slice(0);for(k=0;k<u.length;k++){i=u[k];i.origType.replace(O,"")===a.type?f.push(i.selector):u.splice(k--,1)}j=c(a.target).closest(f,a.currentTarget);n=0;for(r=
j.length;n<r;n++)for(k=0;k<u.length;k++){i=u[k];if(j[n].selector===i.selector){o=j[n].elem;f=null;if(i.preType==="mouseenter"||i.preType==="mouseleave")f=c(a.relatedTarget).closest(i.selector)[0];if(!f||f!==o)d.push({elem:o,handleObj:i})}}n=0;for(r=d.length;n<r;n++){j=d[n];a.currentTarget=j.elem;a.data=j.handleObj.data;a.handleObj=j.handleObj;if(j.handleObj.origHandler.apply(j.elem,e)===false){b=false;break}}return b}}function pa(a,b){return"live."+(a&&a!=="*"?a+".":"")+b.replace(/\./g,"`").replace(/ /g,
"&")}function qa(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function ra(a,b){var d=0;b.each(function(){if(this.nodeName===(a[d]&&a[d].nodeName)){var f=c.data(a[d++]),e=c.data(this,f);if(f=f&&f.events){delete e.handle;e.events={};for(var j in f)for(var i in f[j])c.event.add(this,j,f[j][i],f[j][i].data)}}})}function sa(a,b,d){var f,e,j;b=b&&b[0]?b[0].ownerDocument||b[0]:s;if(a.length===1&&typeof a[0]==="string"&&a[0].length<512&&b===s&&!ta.test(a[0])&&(c.support.checkClone||!ua.test(a[0]))){e=
true;if(j=c.fragments[a[0]])if(j!==1)f=j}if(!f){f=b.createDocumentFragment();c.clean(a,b,f,d)}if(e)c.fragments[a[0]]=j?f:1;return{fragment:f,cacheable:e}}function K(a,b){var d={};c.each(va.concat.apply([],va.slice(0,b)),function(){d[this]=a});return d}function wa(a){return"scrollTo"in a&&a.document?a:a.nodeType===9?a.defaultView||a.parentWindow:false}var c=function(a,b){return new c.fn.init(a,b)},Ra=A.jQuery,Sa=A.$,s=A.document,T,Ta=/^[^<]*(<[\w\W]+>)[^>]*$|^#([\w-]+)$/,Ua=/^.[^:#\[\.,]*$/,Va=/\S/,
Wa=/^(\s|\u00A0)+|(\s|\u00A0)+$/g,Xa=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,P=navigator.userAgent,xa=false,Q=[],L,$=Object.prototype.toString,aa=Object.prototype.hasOwnProperty,ba=Array.prototype.push,R=Array.prototype.slice,ya=Array.prototype.indexOf;c.fn=c.prototype={init:function(a,b){var d,f;if(!a)return this;if(a.nodeType){this.context=this[0]=a;this.length=1;return this}if(a==="body"&&!b){this.context=s;this[0]=s.body;this.selector="body";this.length=1;return this}if(typeof a==="string")if((d=Ta.exec(a))&&
(d[1]||!b))if(d[1]){f=b?b.ownerDocument||b:s;if(a=Xa.exec(a))if(c.isPlainObject(b)){a=[s.createElement(a[1])];c.fn.attr.call(a,b,true)}else a=[f.createElement(a[1])];else{a=sa([d[1]],[f]);a=(a.cacheable?a.fragment.cloneNode(true):a.fragment).childNodes}return c.merge(this,a)}else{if(b=s.getElementById(d[2])){if(b.id!==d[2])return T.find(a);this.length=1;this[0]=b}this.context=s;this.selector=a;return this}else if(!b&&/^\w+$/.test(a)){this.selector=a;this.context=s;a=s.getElementsByTagName(a);return c.merge(this,
a)}else return!b||b.jquery?(b||T).find(a):c(b).find(a);else if(c.isFunction(a))return T.ready(a);if(a.selector!==w){this.selector=a.selector;this.context=a.context}return c.makeArray(a,this)},selector:"",jquery:"1.4.2",length:0,size:function(){return this.length},toArray:function(){return R.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this.slice(a)[0]:this[a]},pushStack:function(a,b,d){var f=c();c.isArray(a)?ba.apply(f,a):c.merge(f,a);f.prevObject=this;f.context=this.context;if(b===
"find")f.selector=this.selector+(this.selector?" ":"")+d;else if(b)f.selector=this.selector+"."+b+"("+d+")";return f},each:function(a,b){return c.each(this,a,b)},ready:function(a){c.bindReady();if(c.isReady)a.call(s,c);else Q&&Q.push(a);return this},eq:function(a){return a===-1?this.slice(a):this.slice(a,+a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(R.apply(this,arguments),"slice",R.call(arguments).join(","))},map:function(a){return this.pushStack(c.map(this,
function(b,d){return a.call(b,d,b)}))},end:function(){return this.prevObject||c(null)},push:ba,sort:[].sort,splice:[].splice};c.fn.init.prototype=c.fn;c.extend=c.fn.extend=function(){var a=arguments[0]||{},b=1,d=arguments.length,f=false,e,j,i,o;if(typeof a==="boolean"){f=a;a=arguments[1]||{};b=2}if(typeof a!=="object"&&!c.isFunction(a))a={};if(d===b){a=this;--b}for(;b<d;b++)if((e=arguments[b])!=null)for(j in e){i=a[j];o=e[j];if(a!==o)if(f&&o&&(c.isPlainObject(o)||c.isArray(o))){i=i&&(c.isPlainObject(i)||
c.isArray(i))?i:c.isArray(o)?[]:{};a[j]=c.extend(f,i,o)}else if(o!==w)a[j]=o}return a};c.extend({noConflict:function(a){A.$=Sa;if(a)A.jQuery=Ra;return c},isReady:false,ready:function(){if(!c.isReady){if(!s.body)return setTimeout(c.ready,13);c.isReady=true;if(Q){for(var a,b=0;a=Q[b++];)a.call(s,c);Q=null}c.fn.triggerHandler&&c(s).triggerHandler("ready")}},bindReady:function(){if(!xa){xa=true;if(s.readyState==="complete")return c.ready();if(s.addEventListener){s.addEventListener("DOMContentLoaded",
L,false);A.addEventListener("load",c.ready,false)}else if(s.attachEvent){s.attachEvent("onreadystatechange",L);A.attachEvent("onload",c.ready);var a=false;try{a=A.frameElement==null}catch(b){}s.documentElement.doScroll&&a&&ma()}}},isFunction:function(a){return $.call(a)==="[object Function]"},isArray:function(a){return $.call(a)==="[object Array]"},isPlainObject:function(a){if(!a||$.call(a)!=="[object Object]"||a.nodeType||a.setInterval)return false;if(a.constructor&&!aa.call(a,"constructor")&&!aa.call(a.constructor.prototype,
"isPrototypeOf"))return false;var b;for(b in a);return b===w||aa.call(a,b)},isEmptyObject:function(a){for(var b in a)return false;return true},error:function(a){throw a;},parseJSON:function(a){if(typeof a!=="string"||!a)return null;a=c.trim(a);if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return A.JSON&&A.JSON.parse?A.JSON.parse(a):(new Function("return "+
a))();else c.error("Invalid JSON: "+a)},noop:function(){},globalEval:function(a){if(a&&Va.test(a)){var b=s.getElementsByTagName("head")[0]||s.documentElement,d=s.createElement("script");d.type="text/javascript";if(c.support.scriptEval)d.appendChild(s.createTextNode(a));else d.text=a;b.insertBefore(d,b.firstChild);b.removeChild(d)}},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,b,d){var f,e=0,j=a.length,i=j===w||c.isFunction(a);if(d)if(i)for(f in a){if(b.apply(a[f],
d)===false)break}else for(;e<j;){if(b.apply(a[e++],d)===false)break}else if(i)for(f in a){if(b.call(a[f],f,a[f])===false)break}else for(d=a[0];e<j&&b.call(d,e,d)!==false;d=a[++e]);return a},trim:function(a){return(a||"").replace(Wa,"")},makeArray:function(a,b){b=b||[];if(a!=null)a.length==null||typeof a==="string"||c.isFunction(a)||typeof a!=="function"&&a.setInterval?ba.call(b,a):c.merge(b,a);return b},inArray:function(a,b){if(b.indexOf)return b.indexOf(a);for(var d=0,f=b.length;d<f;d++)if(b[d]===
a)return d;return-1},merge:function(a,b){var d=a.length,f=0;if(typeof b.length==="number")for(var e=b.length;f<e;f++)a[d++]=b[f];else for(;b[f]!==w;)a[d++]=b[f++];a.length=d;return a},grep:function(a,b,d){for(var f=[],e=0,j=a.length;e<j;e++)!d!==!b(a[e],e)&&f.push(a[e]);return f},map:function(a,b,d){for(var f=[],e,j=0,i=a.length;j<i;j++){e=b(a[j],j,d);if(e!=null)f[f.length]=e}return f.concat.apply([],f)},guid:1,proxy:function(a,b,d){if(arguments.length===2)if(typeof b==="string"){d=a;a=d[b];b=w}else if(b&&
!c.isFunction(b)){d=b;b=w}if(!b&&a)b=function(){return a.apply(d||this,arguments)};if(a)b.guid=a.guid=a.guid||b.guid||c.guid++;return b},uaMatch:function(a){a=a.toLowerCase();a=/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version)?[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||!/compatible/.test(a)&&/(mozilla)(?:.*? rv:([\w.]+))?/.exec(a)||[];return{browser:a[1]||"",version:a[2]||"0"}},browser:{}});P=c.uaMatch(P);if(P.browser){c.browser[P.browser]=true;c.browser.version=P.version}if(c.browser.webkit)c.browser.safari=
true;if(ya)c.inArray=function(a,b){return ya.call(b,a)};T=c(s);if(s.addEventListener)L=function(){s.removeEventListener("DOMContentLoaded",L,false);c.ready()};else if(s.attachEvent)L=function(){if(s.readyState==="complete"){s.detachEvent("onreadystatechange",L);c.ready()}};(function(){c.support={};var a=s.documentElement,b=s.createElement("script"),d=s.createElement("div"),f="script"+J();d.style.display="none";d.innerHTML="   <link/><table></table><a href='/a' style='color:red;float:left;opacity:.55;'>a</a><input type='checkbox'/>";
var e=d.getElementsByTagName("*"),j=d.getElementsByTagName("a")[0];if(!(!e||!e.length||!j)){c.support={leadingWhitespace:d.firstChild.nodeType===3,tbody:!d.getElementsByTagName("tbody").length,htmlSerialize:!!d.getElementsByTagName("link").length,style:/red/.test(j.getAttribute("style")),hrefNormalized:j.getAttribute("href")==="/a",opacity:/^0.55$/.test(j.style.opacity),cssFloat:!!j.style.cssFloat,checkOn:d.getElementsByTagName("input")[0].value==="on",optSelected:s.createElement("select").appendChild(s.createElement("option")).selected,
parentNode:d.removeChild(d.appendChild(s.createElement("div"))).parentNode===null,deleteExpando:true,checkClone:false,scriptEval:false,noCloneEvent:true,boxModel:null};b.type="text/javascript";try{b.appendChild(s.createTextNode("window."+f+"=1;"))}catch(i){}a.insertBefore(b,a.firstChild);if(A[f]){c.support.scriptEval=true;delete A[f]}try{delete b.test}catch(o){c.support.deleteExpando=false}a.removeChild(b);if(d.attachEvent&&d.fireEvent){d.attachEvent("onclick",function k(){c.support.noCloneEvent=
false;d.detachEvent("onclick",k)});d.cloneNode(true).fireEvent("onclick")}d=s.createElement("div");d.innerHTML="<input type='radio' name='radiotest' checked='checked'/>";a=s.createDocumentFragment();a.appendChild(d.firstChild);c.support.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;c(function(){var k=s.createElement("div");k.style.width=k.style.paddingLeft="1px";s.body.appendChild(k);c.boxModel=c.support.boxModel=k.offsetWidth===2;s.body.removeChild(k).style.display="none"});a=function(k){var n=
s.createElement("div");k="on"+k;var r=k in n;if(!r){n.setAttribute(k,"return;");r=typeof n[k]==="function"}return r};c.support.submitBubbles=a("submit");c.support.changeBubbles=a("change");a=b=d=e=j=null}})();c.props={"for":"htmlFor","class":"className",readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",colspan:"colSpan",tabindex:"tabIndex",usemap:"useMap",frameborder:"frameBorder"};var G="jQuery"+J(),Ya=0,za={};c.extend({cache:{},expando:G,noData:{embed:true,object:true,
applet:true},data:function(a,b,d){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var f=a[G],e=c.cache;if(!f&&typeof b==="string"&&d===w)return null;f||(f=++Ya);if(typeof b==="object"){a[G]=f;e[f]=c.extend(true,{},b)}else if(!e[f]){a[G]=f;e[f]={}}a=e[f];if(d!==w)a[b]=d;return typeof b==="string"?a[b]:a}},removeData:function(a,b){if(!(a.nodeName&&c.noData[a.nodeName.toLowerCase()])){a=a==A?za:a;var d=a[G],f=c.cache,e=f[d];if(b){if(e){delete e[b];c.isEmptyObject(e)&&c.removeData(a)}}else{if(c.support.deleteExpando)delete a[c.expando];
else a.removeAttribute&&a.removeAttribute(c.expando);delete f[d]}}}});c.fn.extend({data:function(a,b){if(typeof a==="undefined"&&this.length)return c.data(this[0]);else if(typeof a==="object")return this.each(function(){c.data(this,a)});var d=a.split(".");d[1]=d[1]?"."+d[1]:"";if(b===w){var f=this.triggerHandler("getData"+d[1]+"!",[d[0]]);if(f===w&&this.length)f=c.data(this[0],a);return f===w&&d[1]?this.data(d[0]):f}else return this.trigger("setData"+d[1]+"!",[d[0],b]).each(function(){c.data(this,
a,b)})},removeData:function(a){return this.each(function(){c.removeData(this,a)})}});c.extend({queue:function(a,b,d){if(a){b=(b||"fx")+"queue";var f=c.data(a,b);if(!d)return f||[];if(!f||c.isArray(d))f=c.data(a,b,c.makeArray(d));else f.push(d);return f}},dequeue:function(a,b){b=b||"fx";var d=c.queue(a,b),f=d.shift();if(f==="inprogress")f=d.shift();if(f){b==="fx"&&d.unshift("inprogress");f.call(a,function(){c.dequeue(a,b)})}}});c.fn.extend({queue:function(a,b){if(typeof a!=="string"){b=a;a="fx"}if(b===
w)return c.queue(this[0],a);return this.each(function(){var d=c.queue(this,a,b);a==="fx"&&d[0]!=="inprogress"&&c.dequeue(this,a)})},dequeue:function(a){return this.each(function(){c.dequeue(this,a)})},delay:function(a,b){a=c.fx?c.fx.speeds[a]||a:a;b=b||"fx";return this.queue(b,function(){var d=this;setTimeout(function(){c.dequeue(d,b)},a)})},clearQueue:function(a){return this.queue(a||"fx",[])}});var Aa=/[\n\t]/g,ca=/\s+/,Za=/\r/g,$a=/href|src|style/,ab=/(button|input)/i,bb=/(button|input|object|select|textarea)/i,
cb=/^(a|area)$/i,Ba=/radio|checkbox/;c.fn.extend({attr:function(a,b){return X(this,a,b,true,c.attr)},removeAttr:function(a){return this.each(function(){c.attr(this,a,"");this.nodeType===1&&this.removeAttribute(a)})},addClass:function(a){if(c.isFunction(a))return this.each(function(n){var r=c(this);r.addClass(a.call(this,n,r.attr("class")))});if(a&&typeof a==="string")for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1)if(e.className){for(var j=" "+e.className+" ",
i=e.className,o=0,k=b.length;o<k;o++)if(j.indexOf(" "+b[o]+" ")<0)i+=" "+b[o];e.className=c.trim(i)}else e.className=a}return this},removeClass:function(a){if(c.isFunction(a))return this.each(function(k){var n=c(this);n.removeClass(a.call(this,k,n.attr("class")))});if(a&&typeof a==="string"||a===w)for(var b=(a||"").split(ca),d=0,f=this.length;d<f;d++){var e=this[d];if(e.nodeType===1&&e.className)if(a){for(var j=(" "+e.className+" ").replace(Aa," "),i=0,o=b.length;i<o;i++)j=j.replace(" "+b[i]+" ",
" ");e.className=c.trim(j)}else e.className=""}return this},toggleClass:function(a,b){var d=typeof a,f=typeof b==="boolean";if(c.isFunction(a))return this.each(function(e){var j=c(this);j.toggleClass(a.call(this,e,j.attr("class"),b),b)});return this.each(function(){if(d==="string")for(var e,j=0,i=c(this),o=b,k=a.split(ca);e=k[j++];){o=f?o:!i.hasClass(e);i[o?"addClass":"removeClass"](e)}else if(d==="undefined"||d==="boolean"){this.className&&c.data(this,"__className__",this.className);this.className=
this.className||a===false?"":c.data(this,"__className__")||""}})},hasClass:function(a){a=" "+a+" ";for(var b=0,d=this.length;b<d;b++)if((" "+this[b].className+" ").replace(Aa," ").indexOf(a)>-1)return true;return false},val:function(a){if(a===w){var b=this[0];if(b){if(c.nodeName(b,"option"))return(b.attributes.value||{}).specified?b.value:b.text;if(c.nodeName(b,"select")){var d=b.selectedIndex,f=[],e=b.options;b=b.type==="select-one";if(d<0)return null;var j=b?d:0;for(d=b?d+1:e.length;j<d;j++){var i=
e[j];if(i.selected){a=c(i).val();if(b)return a;f.push(a)}}return f}if(Ba.test(b.type)&&!c.support.checkOn)return b.getAttribute("value")===null?"on":b.value;return(b.value||"").replace(Za,"")}return w}var o=c.isFunction(a);return this.each(function(k){var n=c(this),r=a;if(this.nodeType===1){if(o)r=a.call(this,k,n.val());if(typeof r==="number")r+="";if(c.isArray(r)&&Ba.test(this.type))this.checked=c.inArray(n.val(),r)>=0;else if(c.nodeName(this,"select")){var u=c.makeArray(r);c("option",this).each(function(){this.selected=
c.inArray(c(this).val(),u)>=0});if(!u.length)this.selectedIndex=-1}else this.value=r}})}});c.extend({attrFn:{val:true,css:true,html:true,text:true,data:true,width:true,height:true,offset:true},attr:function(a,b,d,f){if(!a||a.nodeType===3||a.nodeType===8)return w;if(f&&b in c.attrFn)return c(a)[b](d);f=a.nodeType!==1||!c.isXMLDoc(a);var e=d!==w;b=f&&c.props[b]||b;if(a.nodeType===1){var j=$a.test(b);if(b in a&&f&&!j){if(e){b==="type"&&ab.test(a.nodeName)&&a.parentNode&&c.error("type property can't be changed");
a[b]=d}if(c.nodeName(a,"form")&&a.getAttributeNode(b))return a.getAttributeNode(b).nodeValue;if(b==="tabIndex")return(b=a.getAttributeNode("tabIndex"))&&b.specified?b.value:bb.test(a.nodeName)||cb.test(a.nodeName)&&a.href?0:w;return a[b]}if(!c.support.style&&f&&b==="style"){if(e)a.style.cssText=""+d;return a.style.cssText}e&&a.setAttribute(b,""+d);a=!c.support.hrefNormalized&&f&&j?a.getAttribute(b,2):a.getAttribute(b);return a===null?w:a}return c.style(a,b,d)}});var O=/\.(.*)$/,db=function(a){return a.replace(/[^\w\s\.\|`]/g,
function(b){return"\\"+b})};c.event={add:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){if(a.setInterval&&a!==A&&!a.frameElement)a=A;var e,j;if(d.handler){e=d;d=e.handler}if(!d.guid)d.guid=c.guid++;if(j=c.data(a)){var i=j.events=j.events||{},o=j.handle;if(!o)j.handle=o=function(){return typeof c!=="undefined"&&!c.event.triggered?c.event.handle.apply(o.elem,arguments):w};o.elem=a;b=b.split(" ");for(var k,n=0,r;k=b[n++];){j=e?c.extend({},e):{handler:d,data:f};if(k.indexOf(".")>-1){r=k.split(".");
k=r.shift();j.namespace=r.slice(0).sort().join(".")}else{r=[];j.namespace=""}j.type=k;j.guid=d.guid;var u=i[k],z=c.event.special[k]||{};if(!u){u=i[k]=[];if(!z.setup||z.setup.call(a,f,r,o)===false)if(a.addEventListener)a.addEventListener(k,o,false);else a.attachEvent&&a.attachEvent("on"+k,o)}if(z.add){z.add.call(a,j);if(!j.handler.guid)j.handler.guid=d.guid}u.push(j);c.event.global[k]=true}a=null}}},global:{},remove:function(a,b,d,f){if(!(a.nodeType===3||a.nodeType===8)){var e,j=0,i,o,k,n,r,u,z=c.data(a),
C=z&&z.events;if(z&&C){if(b&&b.type){d=b.handler;b=b.type}if(!b||typeof b==="string"&&b.charAt(0)==="."){b=b||"";for(e in C)c.event.remove(a,e+b)}else{for(b=b.split(" ");e=b[j++];){n=e;i=e.indexOf(".")<0;o=[];if(!i){o=e.split(".");e=o.shift();k=new RegExp("(^|\\.)"+c.map(o.slice(0).sort(),db).join("\\.(?:.*\\.)?")+"(\\.|$)")}if(r=C[e])if(d){n=c.event.special[e]||{};for(B=f||0;B<r.length;B++){u=r[B];if(d.guid===u.guid){if(i||k.test(u.namespace)){f==null&&r.splice(B--,1);n.remove&&n.remove.call(a,u)}if(f!=
null)break}}if(r.length===0||f!=null&&r.length===1){if(!n.teardown||n.teardown.call(a,o)===false)Ca(a,e,z.handle);delete C[e]}}else for(var B=0;B<r.length;B++){u=r[B];if(i||k.test(u.namespace)){c.event.remove(a,n,u.handler,B);r.splice(B--,1)}}}if(c.isEmptyObject(C)){if(b=z.handle)b.elem=null;delete z.events;delete z.handle;c.isEmptyObject(z)&&c.removeData(a)}}}}},trigger:function(a,b,d,f){var e=a.type||a;if(!f){a=typeof a==="object"?a[G]?a:c.extend(c.Event(e),a):c.Event(e);if(e.indexOf("!")>=0){a.type=
e=e.slice(0,-1);a.exclusive=true}if(!d){a.stopPropagation();c.event.global[e]&&c.each(c.cache,function(){this.events&&this.events[e]&&c.event.trigger(a,b,this.handle.elem)})}if(!d||d.nodeType===3||d.nodeType===8)return w;a.result=w;a.target=d;b=c.makeArray(b);b.unshift(a)}a.currentTarget=d;(f=c.data(d,"handle"))&&f.apply(d,b);f=d.parentNode||d.ownerDocument;try{if(!(d&&d.nodeName&&c.noData[d.nodeName.toLowerCase()]))if(d["on"+e]&&d["on"+e].apply(d,b)===false)a.result=false}catch(j){}if(!a.isPropagationStopped()&&
f)c.event.trigger(a,b,f,true);else if(!a.isDefaultPrevented()){f=a.target;var i,o=c.nodeName(f,"a")&&e==="click",k=c.event.special[e]||{};if((!k._default||k._default.call(d,a)===false)&&!o&&!(f&&f.nodeName&&c.noData[f.nodeName.toLowerCase()])){try{if(f[e]){if(i=f["on"+e])f["on"+e]=null;c.event.triggered=true;f[e]()}}catch(n){}if(i)f["on"+e]=i;c.event.triggered=false}}},handle:function(a){var b,d,f,e;a=arguments[0]=c.event.fix(a||A.event);a.currentTarget=this;b=a.type.indexOf(".")<0&&!a.exclusive;
if(!b){d=a.type.split(".");a.type=d.shift();f=new RegExp("(^|\\.)"+d.slice(0).sort().join("\\.(?:.*\\.)?")+"(\\.|$)")}e=c.data(this,"events");d=e[a.type];if(e&&d){d=d.slice(0);e=0;for(var j=d.length;e<j;e++){var i=d[e];if(b||f.test(i.namespace)){a.handler=i.handler;a.data=i.data;a.handleObj=i;i=i.handler.apply(this,arguments);if(i!==w){a.result=i;if(i===false){a.preventDefault();a.stopPropagation()}}if(a.isImmediatePropagationStopped())break}}}return a.result},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
fix:function(a){if(a[G])return a;var b=a;a=c.Event(b);for(var d=this.props.length,f;d;){f=this.props[--d];a[f]=b[f]}if(!a.target)a.target=a.srcElement||s;if(a.target.nodeType===3)a.target=a.target.parentNode;if(!a.relatedTarget&&a.fromElement)a.relatedTarget=a.fromElement===a.target?a.toElement:a.fromElement;if(a.pageX==null&&a.clientX!=null){b=s.documentElement;d=s.body;a.pageX=a.clientX+(b&&b.scrollLeft||d&&d.scrollLeft||0)-(b&&b.clientLeft||d&&d.clientLeft||0);a.pageY=a.clientY+(b&&b.scrollTop||
d&&d.scrollTop||0)-(b&&b.clientTop||d&&d.clientTop||0)}if(!a.which&&(a.charCode||a.charCode===0?a.charCode:a.keyCode))a.which=a.charCode||a.keyCode;if(!a.metaKey&&a.ctrlKey)a.metaKey=a.ctrlKey;if(!a.which&&a.button!==w)a.which=a.button&1?1:a.button&2?3:a.button&4?2:0;return a},guid:1E8,proxy:c.proxy,special:{ready:{setup:c.bindReady,teardown:c.noop},live:{add:function(a){c.event.add(this,a.origType,c.extend({},a,{handler:oa}))},remove:function(a){var b=true,d=a.origType.replace(O,"");c.each(c.data(this,
"events").live||[],function(){if(d===this.origType.replace(O,""))return b=false});b&&c.event.remove(this,a.origType,oa)}},beforeunload:{setup:function(a,b,d){if(this.setInterval)this.onbeforeunload=d;return false},teardown:function(a,b){if(this.onbeforeunload===b)this.onbeforeunload=null}}}};var Ca=s.removeEventListener?function(a,b,d){a.removeEventListener(b,d,false)}:function(a,b,d){a.detachEvent("on"+b,d)};c.Event=function(a){if(!this.preventDefault)return new c.Event(a);if(a&&a.type){this.originalEvent=
a;this.type=a.type}else this.type=a;this.timeStamp=J();this[G]=true};c.Event.prototype={preventDefault:function(){this.isDefaultPrevented=Z;var a=this.originalEvent;if(a){a.preventDefault&&a.preventDefault();a.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=Z;var a=this.originalEvent;if(a){a.stopPropagation&&a.stopPropagation();a.cancelBubble=true}},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=Z;this.stopPropagation()},isDefaultPrevented:Y,isPropagationStopped:Y,
isImmediatePropagationStopped:Y};var Da=function(a){var b=a.relatedTarget;try{for(;b&&b!==this;)b=b.parentNode;if(b!==this){a.type=a.data;c.event.handle.apply(this,arguments)}}catch(d){}},Ea=function(a){a.type=a.data;c.event.handle.apply(this,arguments)};c.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){c.event.special[a]={setup:function(d){c.event.add(this,b,d&&d.selector?Ea:Da,a)},teardown:function(d){c.event.remove(this,b,d&&d.selector?Ea:Da)}}});if(!c.support.submitBubbles)c.event.special.submit=
{setup:function(){if(this.nodeName.toLowerCase()!=="form"){c.event.add(this,"click.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="submit"||d==="image")&&c(b).closest("form").length)return na("submit",this,arguments)});c.event.add(this,"keypress.specialSubmit",function(a){var b=a.target,d=b.type;if((d==="text"||d==="password")&&c(b).closest("form").length&&a.keyCode===13)return na("submit",this,arguments)})}else return false},teardown:function(){c.event.remove(this,".specialSubmit")}};
if(!c.support.changeBubbles){var da=/textarea|input|select/i,ea,Fa=function(a){var b=a.type,d=a.value;if(b==="radio"||b==="checkbox")d=a.checked;else if(b==="select-multiple")d=a.selectedIndex>-1?c.map(a.options,function(f){return f.selected}).join("-"):"";else if(a.nodeName.toLowerCase()==="select")d=a.selectedIndex;return d},fa=function(a,b){var d=a.target,f,e;if(!(!da.test(d.nodeName)||d.readOnly)){f=c.data(d,"_change_data");e=Fa(d);if(a.type!=="focusout"||d.type!=="radio")c.data(d,"_change_data",
e);if(!(f===w||e===f))if(f!=null||e){a.type="change";return c.event.trigger(a,b,d)}}};c.event.special.change={filters:{focusout:fa,click:function(a){var b=a.target,d=b.type;if(d==="radio"||d==="checkbox"||b.nodeName.toLowerCase()==="select")return fa.call(this,a)},keydown:function(a){var b=a.target,d=b.type;if(a.keyCode===13&&b.nodeName.toLowerCase()!=="textarea"||a.keyCode===32&&(d==="checkbox"||d==="radio")||d==="select-multiple")return fa.call(this,a)},beforeactivate:function(a){a=a.target;c.data(a,
"_change_data",Fa(a))}},setup:function(){if(this.type==="file")return false;for(var a in ea)c.event.add(this,a+".specialChange",ea[a]);return da.test(this.nodeName)},teardown:function(){c.event.remove(this,".specialChange");return da.test(this.nodeName)}};ea=c.event.special.change.filters}s.addEventListener&&c.each({focus:"focusin",blur:"focusout"},function(a,b){function d(f){f=c.event.fix(f);f.type=b;return c.event.handle.call(this,f)}c.event.special[b]={setup:function(){this.addEventListener(a,
d,true)},teardown:function(){this.removeEventListener(a,d,true)}}});c.each(["bind","one"],function(a,b){c.fn[b]=function(d,f,e){if(typeof d==="object"){for(var j in d)this[b](j,f,d[j],e);return this}if(c.isFunction(f)){e=f;f=w}var i=b==="one"?c.proxy(e,function(k){c(this).unbind(k,i);return e.apply(this,arguments)}):e;if(d==="unload"&&b!=="one")this.one(d,f,e);else{j=0;for(var o=this.length;j<o;j++)c.event.add(this[j],d,i,f)}return this}});c.fn.extend({unbind:function(a,b){if(typeof a==="object"&&
!a.preventDefault)for(var d in a)this.unbind(d,a[d]);else{d=0;for(var f=this.length;d<f;d++)c.event.remove(this[d],a,b)}return this},delegate:function(a,b,d,f){return this.live(b,d,f,a)},undelegate:function(a,b,d){return arguments.length===0?this.unbind("live"):this.die(b,null,d,a)},trigger:function(a,b){return this.each(function(){c.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0]){a=c.Event(a);a.preventDefault();a.stopPropagation();c.event.trigger(a,b,this[0]);return a.result}},
toggle:function(a){for(var b=arguments,d=1;d<b.length;)c.proxy(a,b[d++]);return this.click(c.proxy(a,function(f){var e=(c.data(this,"lastToggle"+a.guid)||0)%d;c.data(this,"lastToggle"+a.guid,e+1);f.preventDefault();return b[e].apply(this,arguments)||false}))},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Ga={focus:"focusin",blur:"focusout",mouseenter:"mouseover",mouseleave:"mouseout"};c.each(["live","die"],function(a,b){c.fn[b]=function(d,f,e,j){var i,o=0,k,n,r=j||this.selector,
u=j?this:c(this.context);if(c.isFunction(f)){e=f;f=w}for(d=(d||"").split(" ");(i=d[o++])!=null;){j=O.exec(i);k="";if(j){k=j[0];i=i.replace(O,"")}if(i==="hover")d.push("mouseenter"+k,"mouseleave"+k);else{n=i;if(i==="focus"||i==="blur"){d.push(Ga[i]+k);i+=k}else i=(Ga[i]||i)+k;b==="live"?u.each(function(){c.event.add(this,pa(i,r),{data:f,selector:r,handler:e,origType:i,origHandler:e,preType:n})}):u.unbind(pa(i,r),e)}}return this}});c.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "),
function(a,b){c.fn[b]=function(d){return d?this.bind(b,d):this.trigger(b)};if(c.attrFn)c.attrFn[b]=true});A.attachEvent&&!A.addEventListener&&A.attachEvent("onunload",function(){for(var a in c.cache)if(c.cache[a].handle)try{c.event.remove(c.cache[a].handle.elem)}catch(b){}});(function(){function a(g){for(var h="",l,m=0;g[m];m++){l=g[m];if(l.nodeType===3||l.nodeType===4)h+=l.nodeValue;else if(l.nodeType!==8)h+=a(l.childNodes)}return h}function b(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];
if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1&&!p){t.sizcache=l;t.sizset=q}if(t.nodeName.toLowerCase()===h){y=t;break}t=t[g]}m[q]=y}}}function d(g,h,l,m,q,p){q=0;for(var v=m.length;q<v;q++){var t=m[q];if(t){t=t[g];for(var y=false;t;){if(t.sizcache===l){y=m[t.sizset];break}if(t.nodeType===1){if(!p){t.sizcache=l;t.sizset=q}if(typeof h!=="string"){if(t===h){y=true;break}}else if(k.filter(h,[t]).length>0){y=t;break}}t=t[g]}m[q]=y}}}var f=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
e=0,j=Object.prototype.toString,i=false,o=true;[0,0].sort(function(){o=false;return 0});var k=function(g,h,l,m){l=l||[];var q=h=h||s;if(h.nodeType!==1&&h.nodeType!==9)return[];if(!g||typeof g!=="string")return l;for(var p=[],v,t,y,S,H=true,M=x(h),I=g;(f.exec(""),v=f.exec(I))!==null;){I=v[3];p.push(v[1]);if(v[2]){S=v[3];break}}if(p.length>1&&r.exec(g))if(p.length===2&&n.relative[p[0]])t=ga(p[0]+p[1],h);else for(t=n.relative[p[0]]?[h]:k(p.shift(),h);p.length;){g=p.shift();if(n.relative[g])g+=p.shift();
t=ga(g,t)}else{if(!m&&p.length>1&&h.nodeType===9&&!M&&n.match.ID.test(p[0])&&!n.match.ID.test(p[p.length-1])){v=k.find(p.shift(),h,M);h=v.expr?k.filter(v.expr,v.set)[0]:v.set[0]}if(h){v=m?{expr:p.pop(),set:z(m)}:k.find(p.pop(),p.length===1&&(p[0]==="~"||p[0]==="+")&&h.parentNode?h.parentNode:h,M);t=v.expr?k.filter(v.expr,v.set):v.set;if(p.length>0)y=z(t);else H=false;for(;p.length;){var D=p.pop();v=D;if(n.relative[D])v=p.pop();else D="";if(v==null)v=h;n.relative[D](y,v,M)}}else y=[]}y||(y=t);y||k.error(D||
g);if(j.call(y)==="[object Array]")if(H)if(h&&h.nodeType===1)for(g=0;y[g]!=null;g++){if(y[g]&&(y[g]===true||y[g].nodeType===1&&E(h,y[g])))l.push(t[g])}else for(g=0;y[g]!=null;g++)y[g]&&y[g].nodeType===1&&l.push(t[g]);else l.push.apply(l,y);else z(y,l);if(S){k(S,q,l,m);k.uniqueSort(l)}return l};k.uniqueSort=function(g){if(B){i=o;g.sort(B);if(i)for(var h=1;h<g.length;h++)g[h]===g[h-1]&&g.splice(h--,1)}return g};k.matches=function(g,h){return k(g,null,null,h)};k.find=function(g,h,l){var m,q;if(!g)return[];
for(var p=0,v=n.order.length;p<v;p++){var t=n.order[p];if(q=n.leftMatch[t].exec(g)){var y=q[1];q.splice(1,1);if(y.substr(y.length-1)!=="\\"){q[1]=(q[1]||"").replace(/\\/g,"");m=n.find[t](q,h,l);if(m!=null){g=g.replace(n.match[t],"");break}}}}m||(m=h.getElementsByTagName("*"));return{set:m,expr:g}};k.filter=function(g,h,l,m){for(var q=g,p=[],v=h,t,y,S=h&&h[0]&&x(h[0]);g&&h.length;){for(var H in n.filter)if((t=n.leftMatch[H].exec(g))!=null&&t[2]){var M=n.filter[H],I,D;D=t[1];y=false;t.splice(1,1);if(D.substr(D.length-
1)!=="\\"){if(v===p)p=[];if(n.preFilter[H])if(t=n.preFilter[H](t,v,l,p,m,S)){if(t===true)continue}else y=I=true;if(t)for(var U=0;(D=v[U])!=null;U++)if(D){I=M(D,t,U,v);var Ha=m^!!I;if(l&&I!=null)if(Ha)y=true;else v[U]=false;else if(Ha){p.push(D);y=true}}if(I!==w){l||(v=p);g=g.replace(n.match[H],"");if(!y)return[];break}}}if(g===q)if(y==null)k.error(g);else break;q=g}return v};k.error=function(g){throw"Syntax error, unrecognized expression: "+g;};var n=k.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF-]|\\.)+)/,
CLASS:/\.((?:[\w\u00c0-\uFFFF-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(g){return g.getAttribute("href")}},
relative:{"+":function(g,h){var l=typeof h==="string",m=l&&!/\W/.test(h);l=l&&!m;if(m)h=h.toLowerCase();m=0;for(var q=g.length,p;m<q;m++)if(p=g[m]){for(;(p=p.previousSibling)&&p.nodeType!==1;);g[m]=l||p&&p.nodeName.toLowerCase()===h?p||false:p===h}l&&k.filter(h,g,true)},">":function(g,h){var l=typeof h==="string";if(l&&!/\W/.test(h)){h=h.toLowerCase();for(var m=0,q=g.length;m<q;m++){var p=g[m];if(p){l=p.parentNode;g[m]=l.nodeName.toLowerCase()===h?l:false}}}else{m=0;for(q=g.length;m<q;m++)if(p=g[m])g[m]=
l?p.parentNode:p.parentNode===h;l&&k.filter(h,g,true)}},"":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("parentNode",h,m,g,p,l)},"~":function(g,h,l){var m=e++,q=d;if(typeof h==="string"&&!/\W/.test(h)){var p=h=h.toLowerCase();q=b}q("previousSibling",h,m,g,p,l)}},find:{ID:function(g,h,l){if(typeof h.getElementById!=="undefined"&&!l)return(g=h.getElementById(g[1]))?[g]:[]},NAME:function(g,h){if(typeof h.getElementsByName!=="undefined"){var l=[];
h=h.getElementsByName(g[1]);for(var m=0,q=h.length;m<q;m++)h[m].getAttribute("name")===g[1]&&l.push(h[m]);return l.length===0?null:l}},TAG:function(g,h){return h.getElementsByTagName(g[1])}},preFilter:{CLASS:function(g,h,l,m,q,p){g=" "+g[1].replace(/\\/g,"")+" ";if(p)return g;p=0;for(var v;(v=h[p])!=null;p++)if(v)if(q^(v.className&&(" "+v.className+" ").replace(/[\t\n]/g," ").indexOf(g)>=0))l||m.push(v);else if(l)h[p]=false;return false},ID:function(g){return g[1].replace(/\\/g,"")},TAG:function(g){return g[1].toLowerCase()},
CHILD:function(g){if(g[1]==="nth"){var h=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(g[2]==="even"&&"2n"||g[2]==="odd"&&"2n+1"||!/\D/.test(g[2])&&"0n+"+g[2]||g[2]);g[2]=h[1]+(h[2]||1)-0;g[3]=h[3]-0}g[0]=e++;return g},ATTR:function(g,h,l,m,q,p){h=g[1].replace(/\\/g,"");if(!p&&n.attrMap[h])g[1]=n.attrMap[h];if(g[2]==="~=")g[4]=" "+g[4]+" ";return g},PSEUDO:function(g,h,l,m,q){if(g[1]==="not")if((f.exec(g[3])||"").length>1||/^\w/.test(g[3]))g[3]=k(g[3],null,null,h);else{g=k.filter(g[3],h,l,true^q);l||m.push.apply(m,
g);return false}else if(n.match.POS.test(g[0])||n.match.CHILD.test(g[0]))return true;return g},POS:function(g){g.unshift(true);return g}},filters:{enabled:function(g){return g.disabled===false&&g.type!=="hidden"},disabled:function(g){return g.disabled===true},checked:function(g){return g.checked===true},selected:function(g){return g.selected===true},parent:function(g){return!!g.firstChild},empty:function(g){return!g.firstChild},has:function(g,h,l){return!!k(l[3],g).length},header:function(g){return/h\d/i.test(g.nodeName)},
text:function(g){return"text"===g.type},radio:function(g){return"radio"===g.type},checkbox:function(g){return"checkbox"===g.type},file:function(g){return"file"===g.type},password:function(g){return"password"===g.type},submit:function(g){return"submit"===g.type},image:function(g){return"image"===g.type},reset:function(g){return"reset"===g.type},button:function(g){return"button"===g.type||g.nodeName.toLowerCase()==="button"},input:function(g){return/input|select|textarea|button/i.test(g.nodeName)}},
setFilters:{first:function(g,h){return h===0},last:function(g,h,l,m){return h===m.length-1},even:function(g,h){return h%2===0},odd:function(g,h){return h%2===1},lt:function(g,h,l){return h<l[3]-0},gt:function(g,h,l){return h>l[3]-0},nth:function(g,h,l){return l[3]-0===h},eq:function(g,h,l){return l[3]-0===h}},filter:{PSEUDO:function(g,h,l,m){var q=h[1],p=n.filters[q];if(p)return p(g,l,h,m);else if(q==="contains")return(g.textContent||g.innerText||a([g])||"").indexOf(h[3])>=0;else if(q==="not"){h=
h[3];l=0;for(m=h.length;l<m;l++)if(h[l]===g)return false;return true}else k.error("Syntax error, unrecognized expression: "+q)},CHILD:function(g,h){var l=h[1],m=g;switch(l){case "only":case "first":for(;m=m.previousSibling;)if(m.nodeType===1)return false;if(l==="first")return true;m=g;case "last":for(;m=m.nextSibling;)if(m.nodeType===1)return false;return true;case "nth":l=h[2];var q=h[3];if(l===1&&q===0)return true;h=h[0];var p=g.parentNode;if(p&&(p.sizcache!==h||!g.nodeIndex)){var v=0;for(m=p.firstChild;m;m=
m.nextSibling)if(m.nodeType===1)m.nodeIndex=++v;p.sizcache=h}g=g.nodeIndex-q;return l===0?g===0:g%l===0&&g/l>=0}},ID:function(g,h){return g.nodeType===1&&g.getAttribute("id")===h},TAG:function(g,h){return h==="*"&&g.nodeType===1||g.nodeName.toLowerCase()===h},CLASS:function(g,h){return(" "+(g.className||g.getAttribute("class"))+" ").indexOf(h)>-1},ATTR:function(g,h){var l=h[1];g=n.attrHandle[l]?n.attrHandle[l](g):g[l]!=null?g[l]:g.getAttribute(l);l=g+"";var m=h[2];h=h[4];return g==null?m==="!=":m===
"="?l===h:m==="*="?l.indexOf(h)>=0:m==="~="?(" "+l+" ").indexOf(h)>=0:!h?l&&g!==false:m==="!="?l!==h:m==="^="?l.indexOf(h)===0:m==="$="?l.substr(l.length-h.length)===h:m==="|="?l===h||l.substr(0,h.length+1)===h+"-":false},POS:function(g,h,l,m){var q=n.setFilters[h[2]];if(q)return q(g,l,h,m)}}},r=n.match.POS;for(var u in n.match){n.match[u]=new RegExp(n.match[u].source+/(?![^\[]*\])(?![^\(]*\))/.source);n.leftMatch[u]=new RegExp(/(^(?:.|\r|\n)*?)/.source+n.match[u].source.replace(/\\(\d+)/g,function(g,
h){return"\\"+(h-0+1)}))}var z=function(g,h){g=Array.prototype.slice.call(g,0);if(h){h.push.apply(h,g);return h}return g};try{Array.prototype.slice.call(s.documentElement.childNodes,0)}catch(C){z=function(g,h){h=h||[];if(j.call(g)==="[object Array]")Array.prototype.push.apply(h,g);else if(typeof g.length==="number")for(var l=0,m=g.length;l<m;l++)h.push(g[l]);else for(l=0;g[l];l++)h.push(g[l]);return h}}var B;if(s.documentElement.compareDocumentPosition)B=function(g,h){if(!g.compareDocumentPosition||
!h.compareDocumentPosition){if(g==h)i=true;return g.compareDocumentPosition?-1:1}g=g.compareDocumentPosition(h)&4?-1:g===h?0:1;if(g===0)i=true;return g};else if("sourceIndex"in s.documentElement)B=function(g,h){if(!g.sourceIndex||!h.sourceIndex){if(g==h)i=true;return g.sourceIndex?-1:1}g=g.sourceIndex-h.sourceIndex;if(g===0)i=true;return g};else if(s.createRange)B=function(g,h){if(!g.ownerDocument||!h.ownerDocument){if(g==h)i=true;return g.ownerDocument?-1:1}var l=g.ownerDocument.createRange(),m=
h.ownerDocument.createRange();l.setStart(g,0);l.setEnd(g,0);m.setStart(h,0);m.setEnd(h,0);g=l.compareBoundaryPoints(Range.START_TO_END,m);if(g===0)i=true;return g};(function(){var g=s.createElement("div"),h="script"+(new Date).getTime();g.innerHTML="<a name='"+h+"'/>";var l=s.documentElement;l.insertBefore(g,l.firstChild);if(s.getElementById(h)){n.find.ID=function(m,q,p){if(typeof q.getElementById!=="undefined"&&!p)return(q=q.getElementById(m[1]))?q.id===m[1]||typeof q.getAttributeNode!=="undefined"&&
q.getAttributeNode("id").nodeValue===m[1]?[q]:w:[]};n.filter.ID=function(m,q){var p=typeof m.getAttributeNode!=="undefined"&&m.getAttributeNode("id");return m.nodeType===1&&p&&p.nodeValue===q}}l.removeChild(g);l=g=null})();(function(){var g=s.createElement("div");g.appendChild(s.createComment(""));if(g.getElementsByTagName("*").length>0)n.find.TAG=function(h,l){l=l.getElementsByTagName(h[1]);if(h[1]==="*"){h=[];for(var m=0;l[m];m++)l[m].nodeType===1&&h.push(l[m]);l=h}return l};g.innerHTML="<a href='#'></a>";
if(g.firstChild&&typeof g.firstChild.getAttribute!=="undefined"&&g.firstChild.getAttribute("href")!=="#")n.attrHandle.href=function(h){return h.getAttribute("href",2)};g=null})();s.querySelectorAll&&function(){var g=k,h=s.createElement("div");h.innerHTML="<p class='TEST'></p>";if(!(h.querySelectorAll&&h.querySelectorAll(".TEST").length===0)){k=function(m,q,p,v){q=q||s;if(!v&&q.nodeType===9&&!x(q))try{return z(q.querySelectorAll(m),p)}catch(t){}return g(m,q,p,v)};for(var l in g)k[l]=g[l];h=null}}();
(function(){var g=s.createElement("div");g.innerHTML="<div class='test e'></div><div class='test'></div>";if(!(!g.getElementsByClassName||g.getElementsByClassName("e").length===0)){g.lastChild.className="e";if(g.getElementsByClassName("e").length!==1){n.order.splice(1,0,"CLASS");n.find.CLASS=function(h,l,m){if(typeof l.getElementsByClassName!=="undefined"&&!m)return l.getElementsByClassName(h[1])};g=null}}})();var E=s.compareDocumentPosition?function(g,h){return!!(g.compareDocumentPosition(h)&16)}:
function(g,h){return g!==h&&(g.contains?g.contains(h):true)},x=function(g){return(g=(g?g.ownerDocument||g:0).documentElement)?g.nodeName!=="HTML":false},ga=function(g,h){var l=[],m="",q;for(h=h.nodeType?[h]:h;q=n.match.PSEUDO.exec(g);){m+=q[0];g=g.replace(n.match.PSEUDO,"")}g=n.relative[g]?g+"*":g;q=0;for(var p=h.length;q<p;q++)k(g,h[q],l);return k.filter(m,l)};c.find=k;c.expr=k.selectors;c.expr[":"]=c.expr.filters;c.unique=k.uniqueSort;c.text=a;c.isXMLDoc=x;c.contains=E})();var eb=/Until$/,fb=/^(?:parents|prevUntil|prevAll)/,
gb=/,/;R=Array.prototype.slice;var Ia=function(a,b,d){if(c.isFunction(b))return c.grep(a,function(e,j){return!!b.call(e,j,e)===d});else if(b.nodeType)return c.grep(a,function(e){return e===b===d});else if(typeof b==="string"){var f=c.grep(a,function(e){return e.nodeType===1});if(Ua.test(b))return c.filter(b,f,!d);else b=c.filter(b,f)}return c.grep(a,function(e){return c.inArray(e,b)>=0===d})};c.fn.extend({find:function(a){for(var b=this.pushStack("","find",a),d=0,f=0,e=this.length;f<e;f++){d=b.length;
c.find(a,this[f],b);if(f>0)for(var j=d;j<b.length;j++)for(var i=0;i<d;i++)if(b[i]===b[j]){b.splice(j--,1);break}}return b},has:function(a){var b=c(a);return this.filter(function(){for(var d=0,f=b.length;d<f;d++)if(c.contains(this,b[d]))return true})},not:function(a){return this.pushStack(Ia(this,a,false),"not",a)},filter:function(a){return this.pushStack(Ia(this,a,true),"filter",a)},is:function(a){return!!a&&c.filter(a,this).length>0},closest:function(a,b){if(c.isArray(a)){var d=[],f=this[0],e,j=
{},i;if(f&&a.length){e=0;for(var o=a.length;e<o;e++){i=a[e];j[i]||(j[i]=c.expr.match.POS.test(i)?c(i,b||this.context):i)}for(;f&&f.ownerDocument&&f!==b;){for(i in j){e=j[i];if(e.jquery?e.index(f)>-1:c(f).is(e)){d.push({selector:i,elem:f});delete j[i]}}f=f.parentNode}}return d}var k=c.expr.match.POS.test(a)?c(a,b||this.context):null;return this.map(function(n,r){for(;r&&r.ownerDocument&&r!==b;){if(k?k.index(r)>-1:c(r).is(a))return r;r=r.parentNode}return null})},index:function(a){if(!a||typeof a===
"string")return c.inArray(this[0],a?c(a):this.parent().children());return c.inArray(a.jquery?a[0]:a,this)},add:function(a,b){a=typeof a==="string"?c(a,b||this.context):c.makeArray(a);b=c.merge(this.get(),a);return this.pushStack(qa(a[0])||qa(b[0])?b:c.unique(b))},andSelf:function(){return this.add(this.prevObject)}});c.each({parent:function(a){return(a=a.parentNode)&&a.nodeType!==11?a:null},parents:function(a){return c.dir(a,"parentNode")},parentsUntil:function(a,b,d){return c.dir(a,"parentNode",
d)},next:function(a){return c.nth(a,2,"nextSibling")},prev:function(a){return c.nth(a,2,"previousSibling")},nextAll:function(a){return c.dir(a,"nextSibling")},prevAll:function(a){return c.dir(a,"previousSibling")},nextUntil:function(a,b,d){return c.dir(a,"nextSibling",d)},prevUntil:function(a,b,d){return c.dir(a,"previousSibling",d)},siblings:function(a){return c.sibling(a.parentNode.firstChild,a)},children:function(a){return c.sibling(a.firstChild)},contents:function(a){return c.nodeName(a,"iframe")?
a.contentDocument||a.contentWindow.document:c.makeArray(a.childNodes)}},function(a,b){c.fn[a]=function(d,f){var e=c.map(this,b,d);eb.test(a)||(f=d);if(f&&typeof f==="string")e=c.filter(f,e);e=this.length>1?c.unique(e):e;if((this.length>1||gb.test(f))&&fb.test(a))e=e.reverse();return this.pushStack(e,a,R.call(arguments).join(","))}});c.extend({filter:function(a,b,d){if(d)a=":not("+a+")";return c.find.matches(a,b)},dir:function(a,b,d){var f=[];for(a=a[b];a&&a.nodeType!==9&&(d===w||a.nodeType!==1||!c(a).is(d));){a.nodeType===
1&&f.push(a);a=a[b]}return f},nth:function(a,b,d){b=b||1;for(var f=0;a;a=a[d])if(a.nodeType===1&&++f===b)break;return a},sibling:function(a,b){for(var d=[];a;a=a.nextSibling)a.nodeType===1&&a!==b&&d.push(a);return d}});var Ja=/ jQuery\d+="(?:\d+|null)"/g,V=/^\s+/,Ka=/(<([\w:]+)[^>]*?)\/>/g,hb=/^(?:area|br|col|embed|hr|img|input|link|meta|param)$/i,La=/<([\w:]+)/,ib=/<tbody/i,jb=/<|&#?\w+;/,ta=/<script|<object|<embed|<option|<style/i,ua=/checked\s*(?:[^=]|=\s*.checked.)/i,Ma=function(a,b,d){return hb.test(d)?
a:b+"></"+d+">"},F={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};F.optgroup=F.option;F.tbody=F.tfoot=F.colgroup=F.caption=F.thead;F.th=F.td;if(!c.support.htmlSerialize)F._default=[1,"div<div>","</div>"];c.fn.extend({text:function(a){if(c.isFunction(a))return this.each(function(b){var d=
c(this);d.text(a.call(this,b,d.text()))});if(typeof a!=="object"&&a!==w)return this.empty().append((this[0]&&this[0].ownerDocument||s).createTextNode(a));return c.text(this)},wrapAll:function(a){if(c.isFunction(a))return this.each(function(d){c(this).wrapAll(a.call(this,d))});if(this[0]){var b=c(a,this[0].ownerDocument).eq(0).clone(true);this[0].parentNode&&b.insertBefore(this[0]);b.map(function(){for(var d=this;d.firstChild&&d.firstChild.nodeType===1;)d=d.firstChild;return d}).append(this)}return this},
wrapInner:function(a){if(c.isFunction(a))return this.each(function(b){c(this).wrapInner(a.call(this,b))});return this.each(function(){var b=c(this),d=b.contents();d.length?d.wrapAll(a):b.append(a)})},wrap:function(a){return this.each(function(){c(this).wrapAll(a)})},unwrap:function(){return this.parent().each(function(){c.nodeName(this,"body")||c(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.appendChild(a)})},
prepend:function(){return this.domManip(arguments,true,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,this)});else if(arguments.length){var a=c(arguments[0]);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,false,function(b){this.parentNode.insertBefore(b,
this.nextSibling)});else if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,c(arguments[0]).toArray());return a}},remove:function(a,b){for(var d=0,f;(f=this[d])!=null;d++)if(!a||c.filter(a,[f]).length){if(!b&&f.nodeType===1){c.cleanData(f.getElementsByTagName("*"));c.cleanData([f])}f.parentNode&&f.parentNode.removeChild(f)}return this},empty:function(){for(var a=0,b;(b=this[a])!=null;a++)for(b.nodeType===1&&c.cleanData(b.getElementsByTagName("*"));b.firstChild;)b.removeChild(b.firstChild);
return this},clone:function(a){var b=this.map(function(){if(!c.support.noCloneEvent&&!c.isXMLDoc(this)){var d=this.outerHTML,f=this.ownerDocument;if(!d){d=f.createElement("div");d.appendChild(this.cloneNode(true));d=d.innerHTML}return c.clean([d.replace(Ja,"").replace(/=([^="'>\s]+\/)>/g,'="$1">').replace(V,"")],f)[0]}else return this.cloneNode(true)});if(a===true){ra(this,b);ra(this.find("*"),b.find("*"))}return b},html:function(a){if(a===w)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(Ja,
""):null;else if(typeof a==="string"&&!ta.test(a)&&(c.support.leadingWhitespace||!V.test(a))&&!F[(La.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ka,Ma);try{for(var b=0,d=this.length;b<d;b++)if(this[b].nodeType===1){c.cleanData(this[b].getElementsByTagName("*"));this[b].innerHTML=a}}catch(f){this.empty().append(a)}}else c.isFunction(a)?this.each(function(e){var j=c(this),i=j.html();j.empty().append(function(){return a.call(this,e,i)})}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&
this[0].parentNode){if(c.isFunction(a))return this.each(function(b){var d=c(this),f=d.html();d.replaceWith(a.call(this,b,f))});if(typeof a!=="string")a=c(a).detach();return this.each(function(){var b=this.nextSibling,d=this.parentNode;c(this).remove();b?c(b).before(a):c(d).append(a)})}else return this.pushStack(c(c.isFunction(a)?a():a),"replaceWith",a)},detach:function(a){return this.remove(a,true)},domManip:function(a,b,d){function f(u){return c.nodeName(u,"table")?u.getElementsByTagName("tbody")[0]||
u.appendChild(u.ownerDocument.createElement("tbody")):u}var e,j,i=a[0],o=[],k;if(!c.support.checkClone&&arguments.length===3&&typeof i==="string"&&ua.test(i))return this.each(function(){c(this).domManip(a,b,d,true)});if(c.isFunction(i))return this.each(function(u){var z=c(this);a[0]=i.call(this,u,b?z.html():w);z.domManip(a,b,d)});if(this[0]){e=i&&i.parentNode;e=c.support.parentNode&&e&&e.nodeType===11&&e.childNodes.length===this.length?{fragment:e}:sa(a,this,o);k=e.fragment;if(j=k.childNodes.length===
1?(k=k.firstChild):k.firstChild){b=b&&c.nodeName(j,"tr");for(var n=0,r=this.length;n<r;n++)d.call(b?f(this[n],j):this[n],n>0||e.cacheable||this.length>1?k.cloneNode(true):k)}o.length&&c.each(o,Qa)}return this}});c.fragments={};c.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){c.fn[a]=function(d){var f=[];d=c(d);var e=this.length===1&&this[0].parentNode;if(e&&e.nodeType===11&&e.childNodes.length===1&&d.length===1){d[b](this[0]);
return this}else{e=0;for(var j=d.length;e<j;e++){var i=(e>0?this.clone(true):this).get();c.fn[b].apply(c(d[e]),i);f=f.concat(i)}return this.pushStack(f,a,d.selector)}}});c.extend({clean:function(a,b,d,f){b=b||s;if(typeof b.createElement==="undefined")b=b.ownerDocument||b[0]&&b[0].ownerDocument||s;for(var e=[],j=0,i;(i=a[j])!=null;j++){if(typeof i==="number")i+="";if(i){if(typeof i==="string"&&!jb.test(i))i=b.createTextNode(i);else if(typeof i==="string"){i=i.replace(Ka,Ma);var o=(La.exec(i)||["",
""])[1].toLowerCase(),k=F[o]||F._default,n=k[0],r=b.createElement("div");for(r.innerHTML=k[1]+i+k[2];n--;)r=r.lastChild;if(!c.support.tbody){n=ib.test(i);o=o==="table"&&!n?r.firstChild&&r.firstChild.childNodes:k[1]==="<table>"&&!n?r.childNodes:[];for(k=o.length-1;k>=0;--k)c.nodeName(o[k],"tbody")&&!o[k].childNodes.length&&o[k].parentNode.removeChild(o[k])}!c.support.leadingWhitespace&&V.test(i)&&r.insertBefore(b.createTextNode(V.exec(i)[0]),r.firstChild);i=r.childNodes}if(i.nodeType)e.push(i);else e=
c.merge(e,i)}}if(d)for(j=0;e[j];j++)if(f&&c.nodeName(e[j],"script")&&(!e[j].type||e[j].type.toLowerCase()==="text/javascript"))f.push(e[j].parentNode?e[j].parentNode.removeChild(e[j]):e[j]);else{e[j].nodeType===1&&e.splice.apply(e,[j+1,0].concat(c.makeArray(e[j].getElementsByTagName("script"))));d.appendChild(e[j])}return e},cleanData:function(a){for(var b,d,f=c.cache,e=c.event.special,j=c.support.deleteExpando,i=0,o;(o=a[i])!=null;i++)if(d=o[c.expando]){b=f[d];if(b.events)for(var k in b.events)e[k]?
c.event.remove(o,k):Ca(o,k,b.handle);if(j)delete o[c.expando];else o.removeAttribute&&o.removeAttribute(c.expando);delete f[d]}}});var kb=/z-?index|font-?weight|opacity|zoom|line-?height/i,Na=/alpha\([^)]*\)/,Oa=/opacity=([^)]*)/,ha=/float/i,ia=/-([a-z])/ig,lb=/([A-Z])/g,mb=/^-?\d+(?:px)?$/i,nb=/^-?\d/,ob={position:"absolute",visibility:"hidden",display:"block"},pb=["Left","Right"],qb=["Top","Bottom"],rb=s.defaultView&&s.defaultView.getComputedStyle,Pa=c.support.cssFloat?"cssFloat":"styleFloat",ja=
function(a,b){return b.toUpperCase()};c.fn.css=function(a,b){return X(this,a,b,true,function(d,f,e){if(e===w)return c.curCSS(d,f);if(typeof e==="number"&&!kb.test(f))e+="px";c.style(d,f,e)})};c.extend({style:function(a,b,d){if(!a||a.nodeType===3||a.nodeType===8)return w;if((b==="width"||b==="height")&&parseFloat(d)<0)d=w;var f=a.style||a,e=d!==w;if(!c.support.opacity&&b==="opacity"){if(e){f.zoom=1;b=parseInt(d,10)+""==="NaN"?"":"alpha(opacity="+d*100+")";a=f.filter||c.curCSS(a,"filter")||"";f.filter=
Na.test(a)?a.replace(Na,b):b}return f.filter&&f.filter.indexOf("opacity=")>=0?parseFloat(Oa.exec(f.filter)[1])/100+"":""}if(ha.test(b))b=Pa;b=b.replace(ia,ja);if(e)f[b]=d;return f[b]},css:function(a,b,d,f){if(b==="width"||b==="height"){var e,j=b==="width"?pb:qb;function i(){e=b==="width"?a.offsetWidth:a.offsetHeight;f!=="border"&&c.each(j,function(){f||(e-=parseFloat(c.curCSS(a,"padding"+this,true))||0);if(f==="margin")e+=parseFloat(c.curCSS(a,"margin"+this,true))||0;else e-=parseFloat(c.curCSS(a,
"border"+this+"Width",true))||0})}a.offsetWidth!==0?i():c.swap(a,ob,i);return Math.max(0,Math.round(e))}return c.curCSS(a,b,d)},curCSS:function(a,b,d){var f,e=a.style;if(!c.support.opacity&&b==="opacity"&&a.currentStyle){f=Oa.test(a.currentStyle.filter||"")?parseFloat(RegExp.$1)/100+"":"";return f===""?"1":f}if(ha.test(b))b=Pa;if(!d&&e&&e[b])f=e[b];else if(rb){if(ha.test(b))b="float";b=b.replace(lb,"-$1").toLowerCase();e=a.ownerDocument.defaultView;if(!e)return null;if(a=e.getComputedStyle(a,null))f=
a.getPropertyValue(b);if(b==="opacity"&&f==="")f="1"}else if(a.currentStyle){d=b.replace(ia,ja);f=a.currentStyle[b]||a.currentStyle[d];if(!mb.test(f)&&nb.test(f)){b=e.left;var j=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;e.left=d==="fontSize"?"1em":f||0;f=e.pixelLeft+"px";e.left=b;a.runtimeStyle.left=j}}return f},swap:function(a,b,d){var f={};for(var e in b){f[e]=a.style[e];a.style[e]=b[e]}d.call(a);for(e in b)a.style[e]=f[e]}});if(c.expr&&c.expr.filters){c.expr.filters.hidden=function(a){var b=
a.offsetWidth,d=a.offsetHeight,f=a.nodeName.toLowerCase()==="tr";return b===0&&d===0&&!f?true:b>0&&d>0&&!f?false:c.curCSS(a,"display")==="none"};c.expr.filters.visible=function(a){return!c.expr.filters.hidden(a)}}var sb=J(),tb=/<script(.|\s)*?\/script>/gi,ub=/select|textarea/i,vb=/color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week/i,N=/=\?(&|$)/,ka=/\?/,wb=/(\?|&)_=.*?(&|$)/,xb=/^(\w+:)?\/\/([^\/?#]+)/,yb=/%20/g,zb=c.fn.load;c.fn.extend({load:function(a,b,d){if(typeof a!==
"string")return zb.call(this,a);else if(!this.length)return this;var f=a.indexOf(" ");if(f>=0){var e=a.slice(f,a.length);a=a.slice(0,f)}f="GET";if(b)if(c.isFunction(b)){d=b;b=null}else if(typeof b==="object"){b=c.param(b,c.ajaxSettings.traditional);f="POST"}var j=this;c.ajax({url:a,type:f,dataType:"html",data:b,complete:function(i,o){if(o==="success"||o==="notmodified")j.html(e?c("<div />").append(i.responseText.replace(tb,"")).find(e):i.responseText);d&&j.each(d,[i.responseText,o,i])}});return this},
serialize:function(){return c.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?c.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||ub.test(this.nodeName)||vb.test(this.type))}).map(function(a,b){a=c(this).val();return a==null?null:c.isArray(a)?c.map(a,function(d){return{name:b.name,value:d}}):{name:b.name,value:a}}).get()}});c.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),
function(a,b){c.fn[b]=function(d){return this.bind(b,d)}});c.extend({get:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b=null}return c.ajax({type:"GET",url:a,data:b,success:d,dataType:f})},getScript:function(a,b){return c.get(a,null,b,"script")},getJSON:function(a,b,d){return c.get(a,b,d,"json")},post:function(a,b,d,f){if(c.isFunction(b)){f=f||d;d=b;b={}}return c.ajax({type:"POST",url:a,data:b,success:d,dataType:f})},ajaxSetup:function(a){c.extend(c.ajaxSettings,a)},ajaxSettings:{url:location.href,
global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:A.XMLHttpRequest&&(A.location.protocol!=="file:"||!A.ActiveXObject)?function(){return new A.XMLHttpRequest}:function(){try{return new A.ActiveXObject("Microsoft.XMLHTTP")}catch(a){}},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},etag:{},ajax:function(a){function b(){e.success&&
e.success.call(k,o,i,x);e.global&&f("ajaxSuccess",[x,e])}function d(){e.complete&&e.complete.call(k,x,i);e.global&&f("ajaxComplete",[x,e]);e.global&&!--c.active&&c.event.trigger("ajaxStop")}function f(q,p){(e.context?c(e.context):c.event).trigger(q,p)}var e=c.extend(true,{},c.ajaxSettings,a),j,i,o,k=a&&a.context||e,n=e.type.toUpperCase();if(e.data&&e.processData&&typeof e.data!=="string")e.data=c.param(e.data,e.traditional);if(e.dataType==="jsonp"){if(n==="GET")N.test(e.url)||(e.url+=(ka.test(e.url)?
"&":"?")+(e.jsonp||"callback")+"=?");else if(!e.data||!N.test(e.data))e.data=(e.data?e.data+"&":"")+(e.jsonp||"callback")+"=?";e.dataType="json"}if(e.dataType==="json"&&(e.data&&N.test(e.data)||N.test(e.url))){j=e.jsonpCallback||"jsonp"+sb++;if(e.data)e.data=(e.data+"").replace(N,"="+j+"$1");e.url=e.url.replace(N,"="+j+"$1");e.dataType="script";A[j]=A[j]||function(q){o=q;b();d();A[j]=w;try{delete A[j]}catch(p){}z&&z.removeChild(C)}}if(e.dataType==="script"&&e.cache===null)e.cache=false;if(e.cache===
false&&n==="GET"){var r=J(),u=e.url.replace(wb,"$1_="+r+"$2");e.url=u+(u===e.url?(ka.test(e.url)?"&":"?")+"_="+r:"")}if(e.data&&n==="GET")e.url+=(ka.test(e.url)?"&":"?")+e.data;e.global&&!c.active++&&c.event.trigger("ajaxStart");r=(r=xb.exec(e.url))&&(r[1]&&r[1]!==location.protocol||r[2]!==location.host);if(e.dataType==="script"&&n==="GET"&&r){var z=s.getElementsByTagName("head")[0]||s.documentElement,C=s.createElement("script");C.src=e.url;if(e.scriptCharset)C.charset=e.scriptCharset;if(!j){var B=
false;C.onload=C.onreadystatechange=function(){if(!B&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){B=true;b();d();C.onload=C.onreadystatechange=null;z&&C.parentNode&&z.removeChild(C)}}}z.insertBefore(C,z.firstChild);return w}var E=false,x=e.xhr();if(x){e.username?x.open(n,e.url,e.async,e.username,e.password):x.open(n,e.url,e.async);try{if(e.data||a&&a.contentType)x.setRequestHeader("Content-Type",e.contentType);if(e.ifModified){c.lastModified[e.url]&&x.setRequestHeader("If-Modified-Since",
c.lastModified[e.url]);c.etag[e.url]&&x.setRequestHeader("If-None-Match",c.etag[e.url])}r||x.setRequestHeader("X-Requested-With","XMLHttpRequest");x.setRequestHeader("Accept",e.dataType&&e.accepts[e.dataType]?e.accepts[e.dataType]+", */*":e.accepts._default)}catch(ga){}if(e.beforeSend&&e.beforeSend.call(k,x,e)===false){e.global&&!--c.active&&c.event.trigger("ajaxStop");x.abort();return false}e.global&&f("ajaxSend",[x,e]);var g=x.onreadystatechange=function(q){if(!x||x.readyState===0||q==="abort"){E||
d();E=true;if(x)x.onreadystatechange=c.noop}else if(!E&&x&&(x.readyState===4||q==="timeout")){E=true;x.onreadystatechange=c.noop;i=q==="timeout"?"timeout":!c.httpSuccess(x)?"error":e.ifModified&&c.httpNotModified(x,e.url)?"notmodified":"success";var p;if(i==="success")try{o=c.httpData(x,e.dataType,e)}catch(v){i="parsererror";p=v}if(i==="success"||i==="notmodified")j||b();else c.handleError(e,x,i,p);d();q==="timeout"&&x.abort();if(e.async)x=null}};try{var h=x.abort;x.abort=function(){x&&h.call(x);
g("abort")}}catch(l){}e.async&&e.timeout>0&&setTimeout(function(){x&&!E&&g("timeout")},e.timeout);try{x.send(n==="POST"||n==="PUT"||n==="DELETE"?e.data:null)}catch(m){c.handleError(e,x,null,m);d()}e.async||g();return x}},handleError:function(a,b,d,f){if(a.error)a.error.call(a.context||a,b,d,f);if(a.global)(a.context?c(a.context):c.event).trigger("ajaxError",[b,a,f])},active:0,httpSuccess:function(a){try{return!a.status&&location.protocol==="file:"||a.status>=200&&a.status<300||a.status===304||a.status===
1223||a.status===0}catch(b){}return false},httpNotModified:function(a,b){var d=a.getResponseHeader("Last-Modified"),f=a.getResponseHeader("Etag");if(d)c.lastModified[b]=d;if(f)c.etag[b]=f;return a.status===304||a.status===0},httpData:function(a,b,d){var f=a.getResponseHeader("content-type")||"",e=b==="xml"||!b&&f.indexOf("xml")>=0;a=e?a.responseXML:a.responseText;e&&a.documentElement.nodeName==="parsererror"&&c.error("parsererror");if(d&&d.dataFilter)a=d.dataFilter(a,b);if(typeof a==="string")if(b===
"json"||!b&&f.indexOf("json")>=0)a=c.parseJSON(a);else if(b==="script"||!b&&f.indexOf("javascript")>=0)c.globalEval(a);return a},param:function(a,b){function d(i,o){if(c.isArray(o))c.each(o,function(k,n){b||/\[\]$/.test(i)?f(i,n):d(i+"["+(typeof n==="object"||c.isArray(n)?k:"")+"]",n)});else!b&&o!=null&&typeof o==="object"?c.each(o,function(k,n){d(i+"["+k+"]",n)}):f(i,o)}function f(i,o){o=c.isFunction(o)?o():o;e[e.length]=encodeURIComponent(i)+"="+encodeURIComponent(o)}var e=[];if(b===w)b=c.ajaxSettings.traditional;
if(c.isArray(a)||a.jquery)c.each(a,function(){f(this.name,this.value)});else for(var j in a)d(j,a[j]);return e.join("&").replace(yb,"+")}});var la={},Ab=/toggle|show|hide/,Bb=/^([+-]=)?([\d+-.]+)(.*)$/,W,va=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];c.fn.extend({show:function(a,b){if(a||a===0)return this.animate(K("show",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");
this[a].style.display=d||"";if(c.css(this[a],"display")==="none"){d=this[a].nodeName;var f;if(la[d])f=la[d];else{var e=c("<"+d+" />").appendTo("body");f=e.css("display");if(f==="none")f="block";e.remove();la[d]=f}c.data(this[a],"olddisplay",f)}}a=0;for(b=this.length;a<b;a++)this[a].style.display=c.data(this[a],"olddisplay")||"";return this}},hide:function(a,b){if(a||a===0)return this.animate(K("hide",3),a,b);else{a=0;for(b=this.length;a<b;a++){var d=c.data(this[a],"olddisplay");!d&&d!=="none"&&c.data(this[a],
"olddisplay",c.css(this[a],"display"))}a=0;for(b=this.length;a<b;a++)this[a].style.display="none";return this}},_toggle:c.fn.toggle,toggle:function(a,b){var d=typeof a==="boolean";if(c.isFunction(a)&&c.isFunction(b))this._toggle.apply(this,arguments);else a==null||d?this.each(function(){var f=d?a:c(this).is(":hidden");c(this)[f?"show":"hide"]()}):this.animate(K("toggle",3),a,b);return this},fadeTo:function(a,b,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,d)},
animate:function(a,b,d,f){var e=c.speed(b,d,f);if(c.isEmptyObject(a))return this.each(e.complete);return this[e.queue===false?"each":"queue"](function(){var j=c.extend({},e),i,o=this.nodeType===1&&c(this).is(":hidden"),k=this;for(i in a){var n=i.replace(ia,ja);if(i!==n){a[n]=a[i];delete a[i];i=n}if(a[i]==="hide"&&o||a[i]==="show"&&!o)return j.complete.call(this);if((i==="height"||i==="width")&&this.style){j.display=c.css(this,"display");j.overflow=this.style.overflow}if(c.isArray(a[i])){(j.specialEasing=
j.specialEasing||{})[i]=a[i][1];a[i]=a[i][0]}}if(j.overflow!=null)this.style.overflow="hidden";j.curAnim=c.extend({},a);c.each(a,function(r,u){var z=new c.fx(k,j,r);if(Ab.test(u))z[u==="toggle"?o?"show":"hide":u](a);else{var C=Bb.exec(u),B=z.cur(true)||0;if(C){u=parseFloat(C[2]);var E=C[3]||"px";if(E!=="px"){k.style[r]=(u||1)+E;B=(u||1)/z.cur(true)*B;k.style[r]=B+E}if(C[1])u=(C[1]==="-="?-1:1)*u+B;z.custom(B,u,E)}else z.custom(B,u,"")}});return true})},stop:function(a,b){var d=c.timers;a&&this.queue([]);
this.each(function(){for(var f=d.length-1;f>=0;f--)if(d[f].elem===this){b&&d[f](true);d.splice(f,1)}});b||this.dequeue();return this}});c.each({slideDown:K("show",1),slideUp:K("hide",1),slideToggle:K("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(a,b){c.fn[a]=function(d,f){return this.animate(b,d,f)}});c.extend({speed:function(a,b,d){var f=a&&typeof a==="object"?a:{complete:d||!d&&b||c.isFunction(a)&&a,duration:a,easing:d&&b||b&&!c.isFunction(b)&&b};f.duration=c.fx.off?0:typeof f.duration===
"number"?f.duration:c.fx.speeds[f.duration]||c.fx.speeds._default;f.old=f.complete;f.complete=function(){f.queue!==false&&c(this).dequeue();c.isFunction(f.old)&&f.old.call(this)};return f},easing:{linear:function(a,b,d,f){return d+f*a},swing:function(a,b,d,f){return(-Math.cos(a*Math.PI)/2+0.5)*f+d}},timers:[],fx:function(a,b,d){this.options=b;this.elem=a;this.prop=d;if(!b.orig)b.orig={}}});c.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this);(c.fx.step[this.prop]||
c.fx.step._default)(this);if((this.prop==="height"||this.prop==="width")&&this.elem.style)this.elem.style.display="block"},cur:function(a){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];return(a=parseFloat(c.css(this.elem,this.prop,a)))&&a>-10000?a:parseFloat(c.curCSS(this.elem,this.prop))||0},custom:function(a,b,d){function f(j){return e.step(j)}this.startTime=J();this.start=a;this.end=b;this.unit=d||this.unit||"px";this.now=this.start;
this.pos=this.state=0;var e=this;f.elem=this.elem;if(f()&&c.timers.push(f)&&!W)W=setInterval(c.fx.tick,13)},show:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.show=true;this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur());c(this.elem).show()},hide:function(){this.options.orig[this.prop]=c.style(this.elem,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(a){var b=J(),d=true;if(a||b>=this.options.duration+this.startTime){this.now=
this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;for(var f in this.options.curAnim)if(this.options.curAnim[f]!==true)d=false;if(d){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;a=c.data(this.elem,"olddisplay");this.elem.style.display=a?a:this.options.display;if(c.css(this.elem,"display")==="none")this.elem.style.display="block"}this.options.hide&&c(this.elem).hide();if(this.options.hide||this.options.show)for(var e in this.options.curAnim)c.style(this.elem,
e,this.options.orig[e]);this.options.complete.call(this.elem)}return false}else{e=b-this.startTime;this.state=e/this.options.duration;a=this.options.easing||(c.easing.swing?"swing":"linear");this.pos=c.easing[this.options.specialEasing&&this.options.specialEasing[this.prop]||a](this.state,e,0,1,this.options.duration);this.now=this.start+(this.end-this.start)*this.pos;this.update()}return true}};c.extend(c.fx,{tick:function(){for(var a=c.timers,b=0;b<a.length;b++)a[b]()||a.splice(b--,1);a.length||
c.fx.stop()},stop:function(){clearInterval(W);W=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){c.style(a.elem,"opacity",a.now)},_default:function(a){if(a.elem.style&&a.elem.style[a.prop]!=null)a.elem.style[a.prop]=(a.prop==="width"||a.prop==="height"?Math.max(0,a.now):a.now)+a.unit;else a.elem[a.prop]=a.now}}});if(c.expr&&c.expr.filters)c.expr.filters.animated=function(a){return c.grep(c.timers,function(b){return a===b.elem}).length};c.fn.offset="getBoundingClientRect"in s.documentElement?
function(a){var b=this[0];if(a)return this.each(function(e){c.offset.setOffset(this,a,e)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);var d=b.getBoundingClientRect(),f=b.ownerDocument;b=f.body;f=f.documentElement;return{top:d.top+(self.pageYOffset||c.support.boxModel&&f.scrollTop||b.scrollTop)-(f.clientTop||b.clientTop||0),left:d.left+(self.pageXOffset||c.support.boxModel&&f.scrollLeft||b.scrollLeft)-(f.clientLeft||b.clientLeft||0)}}:function(a){var b=
this[0];if(a)return this.each(function(r){c.offset.setOffset(this,a,r)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return c.offset.bodyOffset(b);c.offset.initialize();var d=b.offsetParent,f=b,e=b.ownerDocument,j,i=e.documentElement,o=e.body;f=(e=e.defaultView)?e.getComputedStyle(b,null):b.currentStyle;for(var k=b.offsetTop,n=b.offsetLeft;(b=b.parentNode)&&b!==o&&b!==i;){if(c.offset.supportsFixedPosition&&f.position==="fixed")break;j=e?e.getComputedStyle(b,null):b.currentStyle;
k-=b.scrollTop;n-=b.scrollLeft;if(b===d){k+=b.offsetTop;n+=b.offsetLeft;if(c.offset.doesNotAddBorder&&!(c.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(b.nodeName))){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=d;d=b.offsetParent}if(c.offset.subtractsBorderForOverflowNotVisible&&j.overflow!=="visible"){k+=parseFloat(j.borderTopWidth)||0;n+=parseFloat(j.borderLeftWidth)||0}f=j}if(f.position==="relative"||f.position==="static"){k+=o.offsetTop;n+=o.offsetLeft}if(c.offset.supportsFixedPosition&&
f.position==="fixed"){k+=Math.max(i.scrollTop,o.scrollTop);n+=Math.max(i.scrollLeft,o.scrollLeft)}return{top:k,left:n}};c.offset={initialize:function(){var a=s.body,b=s.createElement("div"),d,f,e,j=parseFloat(c.curCSS(a,"marginTop",true))||0;c.extend(b.style,{position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"});b.innerHTML="<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
a.insertBefore(b,a.firstChild);d=b.firstChild;f=d.firstChild;e=d.nextSibling.firstChild.firstChild;this.doesNotAddBorder=f.offsetTop!==5;this.doesAddBorderForTableAndCells=e.offsetTop===5;f.style.position="fixed";f.style.top="20px";this.supportsFixedPosition=f.offsetTop===20||f.offsetTop===15;f.style.position=f.style.top="";d.style.overflow="hidden";d.style.position="relative";this.subtractsBorderForOverflowNotVisible=f.offsetTop===-5;this.doesNotIncludeMarginInBodyOffset=a.offsetTop!==j;a.removeChild(b);
c.offset.initialize=c.noop},bodyOffset:function(a){var b=a.offsetTop,d=a.offsetLeft;c.offset.initialize();if(c.offset.doesNotIncludeMarginInBodyOffset){b+=parseFloat(c.curCSS(a,"marginTop",true))||0;d+=parseFloat(c.curCSS(a,"marginLeft",true))||0}return{top:b,left:d}},setOffset:function(a,b,d){if(/static/.test(c.curCSS(a,"position")))a.style.position="relative";var f=c(a),e=f.offset(),j=parseInt(c.curCSS(a,"top",true),10)||0,i=parseInt(c.curCSS(a,"left",true),10)||0;if(c.isFunction(b))b=b.call(a,
d,e);d={top:b.top-e.top+j,left:b.left-e.left+i};"using"in b?b.using.call(a,d):f.css(d)}};c.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),d=this.offset(),f=/^body|html$/i.test(b[0].nodeName)?{top:0,left:0}:b.offset();d.top-=parseFloat(c.curCSS(a,"marginTop",true))||0;d.left-=parseFloat(c.curCSS(a,"marginLeft",true))||0;f.top+=parseFloat(c.curCSS(b[0],"borderTopWidth",true))||0;f.left+=parseFloat(c.curCSS(b[0],"borderLeftWidth",true))||0;return{top:d.top-
f.top,left:d.left-f.left}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||s.body;a&&!/^body|html$/i.test(a.nodeName)&&c.css(a,"position")==="static";)a=a.offsetParent;return a})}});c.each(["Left","Top"],function(a,b){var d="scroll"+b;c.fn[d]=function(f){var e=this[0],j;if(!e)return null;if(f!==w)return this.each(function(){if(j=wa(this))j.scrollTo(!a?f:c(j).scrollLeft(),a?f:c(j).scrollTop());else this[d]=f});else return(j=wa(e))?"pageXOffset"in j?j[a?"pageYOffset":
"pageXOffset"]:c.support.boxModel&&j.document.documentElement[d]||j.document.body[d]:e[d]}});c.each(["Height","Width"],function(a,b){var d=b.toLowerCase();c.fn["inner"+b]=function(){return this[0]?c.css(this[0],d,false,"padding"):null};c.fn["outer"+b]=function(f){return this[0]?c.css(this[0],d,false,f?"margin":"border"):null};c.fn[d]=function(f){var e=this[0];if(!e)return f==null?null:this;if(c.isFunction(f))return this.each(function(j){var i=c(this);i[d](f.call(this,j,i[d]()))});return"scrollTo"in
e&&e.document?e.document.compatMode==="CSS1Compat"&&e.document.documentElement["client"+b]||e.document.body["client"+b]:e.nodeType===9?Math.max(e.documentElement["client"+b],e.body["scroll"+b],e.documentElement["scroll"+b],e.body["offset"+b],e.documentElement["offset"+b]):f===w?c.css(e,d):this.css(d,typeof f==="string"?f:f+"px")}});A.jQuery=A.$=c})(window);
/* Douglas Crockford's json2.js, 2/23/11 Snapshot (minified via closure simple optimization)
Duck-punches the JSON global and toJSON functions into existence
Falls back to native implementations where available */
var JSON;JSON||(JSON={}); (function(){function k(a){return a<10?"0"+a:a}function o(a){p.lastIndex=0;return p.test(a)?'"'+a.replace(p,function(a){var c=r[a];return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+a+'"'}function l(a,j){var c,d,h,m,g=e,f,b=j[a];b&&typeof b==="object"&&typeof b.toJSON==="function"&&(b=b.toJSON(a));typeof i==="function"&&(b=i.call(j,a,b));switch(typeof b){case "string":return o(b);case "number":return isFinite(b)?String(b):"null";case "boolean":case "null":return String(b);case "object":if(!b)return"null"; e+=n;f=[];if(Object.prototype.toString.apply(b)==="[object Array]"){m=b.length;for(c=0;c<m;c+=1)f[c]=l(c,b)||"null";h=f.length===0?"[]":e?"[\n"+e+f.join(",\n"+e)+"\n"+g+"]":"["+f.join(",")+"]";e=g;return h}if(i&&typeof i==="object"){m=i.length;for(c=0;c<m;c+=1)typeof i[c]==="string"&&(d=i[c],(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h))}else for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(h=l(d,b))&&f.push(o(d)+(e?": ":":")+h);h=f.length===0?"{}":e?"{\n"+e+f.join(",\n"+e)+"\n"+g+"}":"{"+f.join(",")+ "}";e=g;return h}}if(typeof Date.prototype.toJSON!=="function")Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+k(this.getUTCMonth()+1)+"-"+k(this.getUTCDate())+"T"+k(this.getUTCHours())+":"+k(this.getUTCMinutes())+":"+k(this.getUTCSeconds())+"Z":null},String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()};var q=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, p=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,e,n,r={"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},i;if(typeof JSON.stringify!=="function")JSON.stringify=function(a,j,c){var d;n=e="";if(typeof c==="number")for(d=0;d<c;d+=1)n+=" ";else typeof c==="string"&&(n=c);if((i=j)&&typeof j!=="function"&&(typeof j!=="object"||typeof j.length!=="number"))throw Error("JSON.stringify");return l("", {"":a})};if(typeof JSON.parse!=="function")JSON.parse=function(a,e){function c(a,d){var g,f,b=a[d];if(b&&typeof b==="object")for(g in b)Object.prototype.hasOwnProperty.call(b,g)&&(f=c(b,g),f!==void 0?b[g]=f:delete b[g]);return e.call(a,d,b)}var d,a=String(a);q.lastIndex=0;q.test(a)&&(a=a.replace(q,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}));if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g,"")))return d=eval("("+a+")"),typeof e==="function"?c({"":d},""):d;throw new SyntaxError("JSON.parse");}})();
/*
 * Modernizr v1.6
 * http://www.modernizr.com
 *
 * Developed by:
 * - Faruk Ates  http://farukat.es/
 * - Paul Irish  http://paulirish.com/
 *
 * Copyright (c) 2009-2010
 * Dual-licensed under the BSD or MIT licenses.
 * http://www.modernizr.com/license/
 */
window.Modernizr=function(i,e,u){function s(a,b){return(""+a).indexOf(b)!==-1}function D(a,b){for(var c in a)if(j[a[c]]!==u&&(!b||b(a[c],E)))return true}function n(a,b){var c=a.charAt(0).toUpperCase()+a.substr(1);c=(a+" "+F.join(c+" ")+c).split(" ");return!!D(c,b)}function S(){f.input=function(a){for(var b=0,c=a.length;b<c;b++)L[a[b]]=!!(a[b]in h);return L}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" "));f.inputtypes=function(a){for(var b=0,c,k=a.length;b<
k;b++){h.setAttribute("type",a[b]);if(c=h.type!=="text"){h.value=M;if(/^range$/.test(h.type)&&h.style.WebkitAppearance!==u){l.appendChild(h);c=e.defaultView;c=c.getComputedStyle&&c.getComputedStyle(h,null).WebkitAppearance!=="textfield"&&h.offsetHeight!==0;l.removeChild(h)}else/^(search|tel)$/.test(h.type)||(c=/^(url|email)$/.test(h.type)?h.checkValidity&&h.checkValidity()===false:h.value!=M)}N[a[b]]=!!c}return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}
var f={},l=e.documentElement,E=e.createElement("modernizr"),j=E.style,h=e.createElement("input"),M=":)",O=Object.prototype.toString,q=" -webkit- -moz- -o- -ms- -khtml- ".split(" "),F="Webkit Moz O ms Khtml".split(" "),v={svg:"http://www.w3.org/2000/svg"},d={},N={},L={},P=[],w,Q=function(a){var b=document.createElement("style"),c=e.createElement("div");b.textContent=a+"{#modernizr{height:3px}}";(e.head||e.getElementsByTagName("head")[0]).appendChild(b);c.id="modernizr";l.appendChild(c);a=c.offsetHeight===
3;b.parentNode.removeChild(b);c.parentNode.removeChild(c);return!!a},o=function(){var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return function(b,c){c=c||document.createElement(a[b]||"div");b="on"+b;var k=b in c;if(!k){c.setAttribute||(c=document.createElement("div"));if(c.setAttribute&&c.removeAttribute){c.setAttribute(b,"");k=typeof c[b]=="function";if(typeof c[b]!="undefined")c[b]=u;c.removeAttribute(b)}}return k}}(),G={}.hasOwnProperty,R;R=
typeof G!=="undefined"&&typeof G.call!=="undefined"?function(a,b){return G.call(a,b)}:function(a,b){return b in a&&typeof a.constructor.prototype[b]==="undefined"};d.flexbox=function(){var a=e.createElement("div"),b=e.createElement("div");(function(k,g,r,x){g+=":";k.style.cssText=(g+q.join(r+";"+g)).slice(0,-g.length)+(x||"")})(a,"display","box","width:42px;padding:0;");b.style.cssText=q.join("box-flex:1;")+"width:10px;";a.appendChild(b);l.appendChild(a);var c=b.offsetWidth===42;a.removeChild(b);
l.removeChild(a);return c};d.canvas=function(){var a=e.createElement("canvas");return!!(a.getContext&&a.getContext("2d"))};d.canvastext=function(){return!!(f.canvas&&typeof e.createElement("canvas").getContext("2d").fillText=="function")};d.webgl=function(){var a=e.createElement("canvas");try{if(a.getContext("webgl"))return true}catch(b){}try{if(a.getContext("experimental-webgl"))return true}catch(c){}return false};d.touch=function(){return"ontouchstart"in i||Q("@media ("+q.join("touch-enabled),(")+
"modernizr)")};d.geolocation=function(){return!!navigator.geolocation};d.postmessage=function(){return!!i.postMessage};d.websqldatabase=function(){return!!i.openDatabase};d.indexedDB=function(){for(var a=-1,b=F.length;++a<b;){var c=F[a].toLowerCase();if(i[c+"_indexedDB"]||i[c+"IndexedDB"])return true}return false};d.hashchange=function(){return o("hashchange",i)&&(document.documentMode===u||document.documentMode>7)};d.history=function(){return!!(i.history&&history.pushState)};d.draganddrop=function(){return o("drag")&&
o("dragstart")&&o("dragenter")&&o("dragover")&&o("dragleave")&&o("dragend")&&o("drop")};d.websockets=function(){return"WebSocket"in i};d.rgba=function(){j.cssText="background-color:rgba(150,255,150,.5)";return s(j.backgroundColor,"rgba")};d.hsla=function(){j.cssText="background-color:hsla(120,40%,100%,.5)";return s(j.backgroundColor,"rgba")||s(j.backgroundColor,"hsla")};d.multiplebgs=function(){j.cssText="background:url(//:),url(//:),red url(//:)";return/(url\s*\(.*?){3}/.test(j.background)};d.backgroundsize=
function(){return n("backgroundSize")};d.borderimage=function(){return n("borderImage")};d.borderradius=function(){return n("borderRadius","",function(a){return s(a,"orderRadius")})};d.boxshadow=function(){return n("boxShadow")};d.textshadow=function(){return e.createElement("div").style.textShadow===""};d.opacity=function(){var a=q.join("opacity:.5;")+"";j.cssText=a;return s(j.opacity,"0.5")};d.cssanimations=function(){return n("animationName")};d.csscolumns=function(){return n("columnCount")};d.cssgradients=
function(){var a=("background-image:"+q.join("gradient(linear,left top,right bottom,from(#9f9),to(white));background-image:")+q.join("linear-gradient(left top,#9f9, white);background-image:")).slice(0,-17);j.cssText=a;return s(j.backgroundImage,"gradient")};d.cssreflections=function(){return n("boxReflect")};d.csstransforms=function(){return!!D(["transformProperty","WebkitTransform","MozTransform","OTransform","msTransform"])};d.csstransforms3d=function(){var a=!!D(["perspectiveProperty","WebkitPerspective",
"MozPerspective","OPerspective","msPerspective"]);if(a)a=Q("@media ("+q.join("transform-3d),(")+"modernizr)");return a};d.csstransitions=function(){return n("transitionProperty")};d.fontface=function(){var a,b=e.head||e.getElementsByTagName("head")[0]||l,c=e.createElement("style"),k=e.implementation||{hasFeature:function(){return false}};c.type="text/css";b.insertBefore(c,b.firstChild);a=c.sheet||c.styleSheet;b=k.hasFeature("CSS2","")?function(g){if(!(a&&g))return false;var r=false;try{a.insertRule(g,
0);r=!/unknown/i.test(a.cssRules[0].cssText);a.deleteRule(a.cssRules.length-1)}catch(x){}return r}:function(g){if(!(a&&g))return false;a.cssText=g;return a.cssText.length!==0&&!/unknown/i.test(a.cssText)&&a.cssText.replace(/\r+|\n+/g,"").indexOf(g.split(" ")[0])===0};f._fontfaceready=function(g){g(f.fontface)};return b('@font-face { font-family: "font"; src: "font.ttf"; }')};d.video=function(){var a=e.createElement("video"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('video/ogg; codecs="theora"');
b.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"')||a.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');b.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"')}return b};d.audio=function(){var a=e.createElement("audio"),b=!!a.canPlayType;if(b){b=new Boolean(b);b.ogg=a.canPlayType('audio/ogg; codecs="vorbis"');b.mp3=a.canPlayType("audio/mpeg;");b.wav=a.canPlayType('audio/wav; codecs="1"');b.m4a=a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")}return b};d.localstorage=function(){try{return"localStorage"in
i&&i.localStorage!==null}catch(a){return false}};d.sessionstorage=function(){try{return"sessionStorage"in i&&i.sessionStorage!==null}catch(a){return false}};d.webWorkers=function(){return!!i.Worker};d.applicationcache=function(){return!!i.applicationCache};d.svg=function(){return!!e.createElementNS&&!!e.createElementNS(v.svg,"svg").createSVGRect};d.inlinesvg=function(){var a=document.createElement("div");a.innerHTML="<svg/>";return(a.firstChild&&a.firstChild.namespaceURI)==v.svg};d.smil=function(){return!!e.createElementNS&&
/SVG/.test(O.call(e.createElementNS(v.svg,"animate")))};d.svgclippaths=function(){return!!e.createElementNS&&/SVG/.test(O.call(e.createElementNS(v.svg,"clipPath")))};for(var H in d)if(R(d,H)){w=H.toLowerCase();f[w]=d[H]();P.push((f[w]?"":"no-")+w)}f.input||S();f.crosswindowmessaging=f.postmessage;f.historymanagement=f.history;f.addTest=function(a,b){a=a.toLowerCase();if(!f[a]){b=!!b();l.className+=" "+(b?"":"no-")+a;f[a]=b;return f}};j.cssText="";E=h=null;i.attachEvent&&function(){var a=e.createElement("div");
a.innerHTML="<elem></elem>";return a.childNodes.length!==1}()&&function(a,b){function c(p){for(var m=-1;++m<r;)p.createElement(g[m])}function k(p,m){for(var I=p.length,t=-1,y,J=[];++t<I;){y=p[t];m=y.media||m;J.push(k(y.imports,m));J.push(y.cssText)}return J.join("")}var g="abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video".split("|"),r=g.length,x=RegExp("<(/*)(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)",
"gi"),T=RegExp("\\b(abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video)\\b(?!.*[;}])","gi"),z=b.createDocumentFragment(),A=b.documentElement,K=A.firstChild,B=b.createElement("style"),C=b.createElement("body");B.media="all";c(b);c(z);a.attachEvent("onbeforeprint",function(){for(var p=-1;++p<r;)for(var m=b.getElementsByTagName(g[p]),I=m.length,t=-1;++t<I;)if(m[t].className.indexOf("iepp_")<0)m[t].className+=" iepp_"+
g[p];K.insertBefore(B,K.firstChild);B.styleSheet.cssText=k(b.styleSheets,"all").replace(T,".iepp_$1");z.appendChild(b.body);A.appendChild(C);C.innerHTML=z.firstChild.innerHTML.replace(x,"<$1bdo")});a.attachEvent("onafterprint",function(){C.innerHTML="";A.removeChild(C);K.removeChild(B);A.appendChild(z.firstChild)})}(this,document);f._enableHTML5=true;f._version="1.6";l.className=l.className.replace(/\bno-js\b/,"")+" js";l.className+=" "+P.join(" ");return f}(this,this.document);
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();
/*!
 * Amplify 1.1.2
 *
 * Copyright 2011 - 2013 appendTo LLC. (http://appendto.com/team)
 * Dual licensed under the MIT or GPL licenses.
 * http://appendto.com/open-source-licenses
 *
 * http://amplifyjs.com
 */
(function(e,t){var n=[].slice,r={},i=e.amplify={publish:function(e){if(typeof e!="string")throw new Error("You must provide a valid topic to publish.");var t=n.call(arguments,1),i,s,o,u=0,a;if(!r[e])return!0;i=r[e].slice();for(o=i.length;u<o;u++){s=i[u],a=s.callback.apply(s.context,t);if(a===!1)break}return a!==!1},subscribe:function(e,t,n,i){if(typeof e!="string")throw new Error("You must provide a valid topic to create a subscription.");arguments.length===3&&typeof n=="number"&&(i=n,n=t,t=null),arguments.length===2&&(n=t,t=null),i=i||10;var s=0,o=e.split(/\s/),u=o.length,a;for(;s<u;s++){e=o[s],a=!1,r[e]||(r[e]=[]);var f=r[e].length-1,l={callback:n,context:t,priority:i};for(;f>=0;f--)if(r[e][f].priority<=i){r[e].splice(f+1,0,l),a=!0;break}a||r[e].unshift(l)}return n},unsubscribe:function(e,t,n){if(typeof e!="string")throw new Error("You must provide a valid topic to remove a subscription.");arguments.length===2&&(n=t,t=null);if(!r[e])return;var i=r[e].length,s=0;for(;s<i;s++)r[e][s].callback===n&&(!t||r[e][s].context===t)&&(r[e].splice(s,1),s--,i--)}}})(this),function(e,t){function i(e,i){n.addType(e,function(s,o,u){var a,f,l,c,h=o,p=(new Date).getTime();if(!s){h={},c=[],l=0;try{s=i.length;while(s=i.key(l++))r.test(s)&&(f=JSON.parse(i.getItem(s)),f.expires&&f.expires<=p?c.push(s):h[s.replace(r,"")]=f.data);while(s=c.pop())i.removeItem(s)}catch(d){}return h}s="__amplify__"+s;if(o===t){a=i.getItem(s),f=a?JSON.parse(a):{expires:-1};if(!(f.expires&&f.expires<=p))return f.data;i.removeItem(s)}else if(o===null)i.removeItem(s);else{f=JSON.stringify({data:o,expires:u.expires?p+u.expires:null});try{i.setItem(s,f)}catch(d){n[e]();try{i.setItem(s,f)}catch(d){throw n.error()}}}return h})}var n=e.store=function(e,t,r){var i=n.type;return r&&r.type&&r.type in n.types&&(i=r.type),n.types[i](e,t,r||{})};n.types={},n.type=null,n.addType=function(e,t){n.type||(n.type=e),n.types[e]=t,n[e]=function(t,r,i){return i=i||{},i.type=e,n(t,r,i)}},n.error=function(){return"amplify.store quota exceeded"};var r=/^__amplify__/;for(var s in{localStorage:1,sessionStorage:1})try{window[s].setItem("__amplify__","x"),window[s].removeItem("__amplify__"),i(s,window[s])}catch(o){}if(!n.types.localStorage&&window.globalStorage)try{i("globalStorage",window.globalStorage[window.location.hostname]),n.type==="sessionStorage"&&(n.type="globalStorage")}catch(o){}(function(){if(n.types.localStorage)return;var e=document.createElement("div"),r="amplify";e.style.display="none",document.getElementsByTagName("head")[0].appendChild(e);try{e.addBehavior("#default#userdata"),e.load(r)}catch(i){e.parentNode.removeChild(e);return}n.addType("userData",function(i,s,o){e.load(r);var u,a,f,l,c,h=s,p=(new Date).getTime();if(!i){h={},c=[],l=0;while(u=e.XMLDocument.documentElement.attributes[l++])a=JSON.parse(u.value),a.expires&&a.expires<=p?c.push(u.name):h[u.name]=a.data;while(i=c.pop())e.removeAttribute(i);return e.save(r),h}i=i.replace(/[^\-._0-9A-Za-z\xb7\xc0-\xd6\xd8-\xf6\xf8-\u037d\u037f-\u1fff\u200c-\u200d\u203f\u2040\u2070-\u218f]/g,"-"),i=i.replace(/^-/,"_-");if(s===t){u=e.getAttribute(i),a=u?JSON.parse(u):{expires:-1};if(!(a.expires&&a.expires<=p))return a.data;e.removeAttribute(i)}else s===null?e.removeAttribute(i):(f=e.getAttribute(i),a=JSON.stringify({data:s,expires:o.expires?p+o.expires:null}),e.setAttribute(i,a));try{e.save(r)}catch(d){f===null?e.removeAttribute(i):e.setAttribute(i,f),n.userData();try{e.setAttribute(i,a),e.save(r)}catch(d){throw f===null?e.removeAttribute(i):e.setAttribute(i,f),n.error()}}return h})})(),function(){function i(e){return e===t?t:JSON.parse(JSON.stringify(e))}var e={},r={};n.addType("memory",function(n,s,o){return n?s===t?i(e[n]):(r[n]&&(clearTimeout(r[n]),delete r[n]),s===null?(delete e[n],null):(e[n]=s,o.expires&&(r[n]=setTimeout(function(){delete e[n],delete r[n]},o.expires)),s)):i(e)})}()}(this.amplify=this.amplify||{}),function(e,t){"use strict";function n(){}function r(e){return{}.toString.call(e)==="[object Function]"}function i(e){var t=!1;return setTimeout(function(){t=!0},1),function(){var n=this,r=arguments;t?e.apply(n,r):setTimeout(function(){e.apply(n,r)},1)}}e.request=function(t,s,o){var u=t||{};typeof u=="string"&&(r(s)&&(o=s,s={}),u={resourceId:t,data:s||{},success:o});var a={abort:n},f=e.request.resources[u.resourceId],l=u.success||n,c=u.error||n;u.success=i(function(t,n){n=n||"success",e.publish("request.success",u,t,n),e.publish("request.complete",u,t,n),l(t,n)}),u.error=i(function(t,n){n=n||"error",e.publish("request.error",u,t,n),e.publish("request.complete",u,t,n),c(t,n)});if(!f)throw u.resourceId?"amplify.request: unknown resourceId: "+u.resourceId:"amplify.request: no resourceId provided";if(!e.publish("request.before",u)){u.error(null,"abort");return}return e.request.resources[u.resourceId](u,a),a},e.request.types={},e.request.resources={},e.request.define=function(t,n,r){if(typeof n=="string"){if(!(n in e.request.types))throw"amplify.request.define: unknown type: "+n;r.resourceId=t,e.request.resources[t]=e.request.types[n](r)}else e.request.resources[t]=n}}(amplify),function(e,t,n){"use strict";var r=["status","statusText","responseText","responseXML","readyState"],i=/\{([^\}]+)\}/g;e.request.types.ajax=function(i){return i=t.extend({type:"GET"},i),function(s,o){var u,a,f=i.url,l=o.abort,c=t.extend(!0,{},i,{data:s.data}),h=!1,p={readyState:0,setRequestHeader:function(e,t){return u.setRequestHeader(e,t)},getAllResponseHeaders:function(){return u.getAllResponseHeaders()},getResponseHeader:function(e){return u.getResponseHeader(e)},overrideMimeType:function(e){return u.overrideMimeType(e)},abort:function(){h=!0;try{u.abort()}catch(e){}a(null,"abort")},success:function(e,t){s.success(e,t)},error:function(e,t){s.error(e,t)}};a=function(e,i){t.each(r,function(e,t){try{p[t]=u[t]}catch(n){}}),/OK$/.test(p.statusText)&&(p.statusText="success"),e===n&&(e=null),h&&(i="abort"),/timeout|error|abort/.test(i)?p.error(e,i):p.success(e,i),a=t.noop},e.publish("request.ajax.preprocess",i,s,c,p),t.extend(c,{isJSONP:function(){return/jsonp/gi.test(this.dataType)},cacheURL:function(){if(!this.isJSONP())return this.url;var e="callback";this.hasOwnProperty("jsonp")&&(this.jsonp!==!1?e=this.jsonp:this.hasOwnProperty("jsonpCallback")&&(e=this.jsonpCallback));var t=new RegExp("&?"+e+"=[^&]*&?","gi");return this.url.replace(t,"")},success:function(e,t){a(e,t)},error:function(e,t){a(null,t)},beforeSend:function(t,n){u=t,c=n;var r=i.beforeSend?i.beforeSend.call(this,p,c):!0;return r&&e.publish("request.before.ajax",i,s,c,p)}}),c.cache&&c.isJSONP()&&t.extend(c,{cache:!0}),t.ajax(c),o.abort=function(){p.abort(),l.call(this)}}},e.subscribe("request.ajax.preprocess",function(e,n,r){var s=[],o=r.data;if(typeof o=="string")return;o=t.extend(!0,{},e.data,o),r.url=r.url.replace(i,function(e,t){if(t in o)return s.push(t),o[t]}),t.each(s,function(e,t){delete o[t]}),r.data=o}),e.subscribe("request.ajax.preprocess",function(e,n,r){var i=r.data,s=e.dataMap;if(!s||typeof i=="string")return;t.isFunction(s)?r.data=s(i):(t.each(e.dataMap,function(e,t){e in i&&(i[t]=i[e],delete i[e])}),r.data=i)});var s=e.request.cache={_key:function(e,t,n){function s(){return n.charCodeAt(i++)<<24|n.charCodeAt(i++)<<16|n.charCodeAt(i++)<<8|n.charCodeAt(i++)<<0}n=t+n;var r=n.length,i=0,o=s();while(i<r)o^=s();return"request-"+e+"-"+o},_default:function(){var e={};return function(t,n,r,i){var o=s._key(n.resourceId,r.cacheURL(),r.data),u=t.cache;if(o in e)return i.success(e[o]),!1;var a=i.success;i.success=function(t){e[o]=t,typeof u=="number"&&setTimeout(function(){delete e[o]},u),a.apply(this,arguments)}}}()};e.store&&(t.each(e.store.types,function(t){s[t]=function(n,r,i,o){var u=s._key(r.resourceId,i.cacheURL(),i.data),a=e.store[t](u);if(a)return i.success(a),!1;var f=o.success;o.success=function(r){e.store[t](u,r,{expires:n.cache.expires}),f.apply(this,arguments)}}}),s.persist=s[e.store.type]),e.subscribe("request.before.ajax",function(e){var t=e.cache;if(t)return t=t.type||t,s[t in s?t:"_default"].apply(this,arguments)}),e.request.decoders={jsend:function(e,t,n,r,i){e.status==="success"?r(e.data):e.status==="fail"?i(e.data,"fail"):e.status==="error"?(delete e.status,i(e,"error")):i(null,"error")}},e.subscribe("request.before.ajax",function(n,r,i,s){function f(e,t){o(e,t)}function l(e,t){u(e,t)}var o=s.success,u=s.error,a=t.isFunction(n.decoder)?n.decoder:n.decoder in e.request.decoders?e.request.decoders[n.decoder]:e.request.decoders._default;if(!a)return;s.success=function(e,t){a(e,t,s,f,l)},s.error=function(e,t){a(e,t,s,f,l)}})}(amplify,jQuery)
/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START;
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();

// Checks for browser support
fxcm.support = new function() {
	var thatSupport = this;
	
	var _select = document.createElement('select');
	var _opt = _select.appendChild(document.createElement('option'));
	
	// Make sure that the options inside disabled selects aren't marked as disabled (WebKit marks them as disabled)
	_select.disabled = true;
	this.optDisabled = !_opt.disabled;

	// Add fallback support for Array.indexOf in older versions of IE: IE6-8 or compatibility/quirks mode
	// Code taken from https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Global_Objects/Array/indexOf
	(function(){
		if (!Array.prototype.indexOf) {
			Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
				"use strict";
		        if (this == null) {
					throw new TypeError();
				}
				var t = Object(this);
				var len = t.length >>> 0;
				if (len === 0) {
					return -1;
				}
		        var n = 0;
		        if (arguments.length > 1) {
					n = Number(arguments[1]);
					if (n != n) { // shortcut for verifying if it's NaN
						n = 0;
					} else if (n != 0 && n != Infinity && n != -Infinity) {
						n = (n > 0 || -1) * Math.floor(Math.abs(n));
					}
				}
				if (n >= len) {
					return -1;
				}
				var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);
				for (; k < len; k++) {
					if (k in t && t[k] === searchElement) {
						return k;
					}
				}
				return -1;
			};
		}
	})();

	// Polyfill - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	if (!String.prototype.trim) {
		(function() {
			// Make sure we trim BOM and NBSP
			var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
			String.prototype.trim = function() {
				return this.replace(rtrim, '');
			};
		})();
	}
	
}();
// Library of utility functions
fxcm.lib = new function() {
	var thatLib = this;
	
	/* makeClass - By John Resig (MIT Licensed), modified by Anthony DiSanti
	Allows a class to be instantiated without using the new keyword and uses prototypical inheritance
	Usage:
	var className = makeClass();
	className.prototype.init = function() {
		// Constructor Function
	}

	var obj1 = new newClass(); // Correct class instantiation using the new keyword, properly returns an instance of className
	var obj2 = newClass(); // Incorrect class instantiation missing the new keyword, still properly returns an instance of className */
	this.makeClass = function() {
		return function(args) {
			if (this instanceof arguments.callee) {
				if (typeof this.init === 'function') {
					this.init.apply(this, args && args.callee ? args : arguments);
				}
			} else {
				return new arguments.callee(arguments);
			}
		};
	};


    // Retrieves a URL query parameter, null if it does not exist
	this.getURLParameter = function(parameter) {
		// Confirm that there are URL parameters at all
		if (document.location.search === '') { return false; }
		
		var parameters = document.location.search.substring(1).split('&');	// Strip off the leading ? and split the string into individual key/value pairs
		for (parameterIndex = 0; parameterIndex < parameters.length; parameterIndex++) {
			var parameterParts = parameters[parameterIndex].split('=');	// Split the key and the value
			if (decodeURIComponent(parameterParts[0]).toUpperCase() === parameter.toUpperCase()) {
				return parameterParts.length >= 2 ? decodeURIComponent(parameterParts[1]) : null;	// Return null if the parameter doesn't have a value
			}
		}
		
		return false;	// Return false if the parameter doesn't exist
	};

	
	// Sets a URL query parameter
	this.setURLParameter = function (URL, parameter, value) {
		var URLParts = URL.toLowerCase().match('^(.*[\?&]' + parameter.toLowerCase() + '=).*?([\?&#].*)?$');
		
		if (URLParts)	{
			// Use the original URL so that we don't force the URL and parameters to be lower case
			return URL.substr(0,URLParts[1].length) + value + (typeof URLParts[2] !== 'undefined' ? URL.substr(URL.length - URLParts[2].length) : '');
		} else {
			// Account for a possible anchor
			var anchorLocation = URL.indexOf('#');
			if (anchorLocation >= 0) {
				return [URL.substr(0,anchorLocation), (URL.indexOf('?') == -1 ? '?' : '&'), parameter, '=', value, URL.substr(anchorLocation)].join('');
			} else {
				return URL + (URL.indexOf('?') == -1 ? '?' : '&') + parameter + '=' + value;
			}
		}
	};

	
	// Prepends padChar to a string or number to reach desired length
	this.padLeft = function(string, padChar, length) {
		return _padString(string, padChar, length, true);
	};
	
	
	// Appends padChar to a string or number to reach desired length
	this.padRight = function(string, padChar, length) {
		return _padString(string, padChar, length, false);
	};
	
	
	// Pads a string with padChar to the desired length
	function _padString(string, padChar, length, left) {
		// Convert numbers to strings
		if (typeof string === 'number') { string = String(string); }
		if (typeof padChar === 'number') { padChar = String(padChar); }
		
		// If string isn't a string or padChar isn't a 1 character string or left isn't a boolean, bomb out
		if (typeof string !== 'string' || typeof padChar !== 'string' || padChar.length !== 1 || typeof left !== 'boolean') { return false; }
		
		var padFunction = left ? Array.prototype.unshift : Array.prototype.push;
		
		var padCount = length - string.length;
		var finalString = [string];
		while (padCount > 0) {
			padFunction.call(finalString, padChar);
			padCount--;
		}
		
		return finalString.join('');
	}
	
	
	// Validates an e-mail address
	_validEmail = /^[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*@(\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,})$/i;
	this.isValidEmail = function(email) {
		if (typeof email !== 'string') { return false; }
		
		return _validEmail.test(email);
	}
	
	
	// Validates a date
	this.isValidDate = function(date, longDay, longMonth, longYear, delimiter, internationalFormat) {
		if (typeof date !== 'string') { return false; }
		
		if (typeof longDay !== 'boolean') { longDay = false; }
		if (typeof longMonth !== 'boolean') { longMonth = false; }
		if (typeof longYear !== 'boolean') { longYear = false; }
		
		
		var day = ['(0', (longDay ? '' : '?'), '[1-9]|[12][0-9]|3[01])'];
		var year = ['(19|20)', (longYear ? '' : '?'), '\\d\\d'];
		if (typeof delimiter !== 'string') { delimiter = '[-\\/.]'; }
		delimiter = [delimiter];
		
		var dateRegEx;
		if (typeof internationalFormat !== 'boolean') {
			// Accept both US and international formats
			dateRegEx = [].concat(['^'], day, delimiter, day, delimiter, year, ['$']);
		} else {
			var month = ['(0', (longMonth ? '' : '?'), '[1-9]|1[0-2])'];
			if (internationalFormat) {
				dateRegEx = [].concat(['^'], day, delimiter, month, delimiter, year, ['$']);
			} else {
				dateRegEx = [].concat(['^'], month, delimiter, day, delimiter, year, ['$']);
			}
		}
		
		console.log(dateRegEx.join(''));
		return new RegExp(dateRegEx.join('')).test(date);
	}
	
	
	// Generates Locally Unique IDs (length parameter is optional)
	this.generateNumericID = function(length) {
		if (typeof length !== 'undefined' && typeof length !== 'number') { return false; }
		
		if (typeof length === 'undefined') {
			length = 20;	// Maximum length before the browser uses scientific notation
		}
		return Math.floor(Math.random() * Math.pow(10, length));
	}
	
	
	/* Like typeof, but can tell different types of built-in objects apart
	Adapted from jQuery 1.5.2 */
	this.type = function(object) {
		var parameterType = typeof object;
        if (parameterType !== 'object') {
            return parameterType;
        } else {
			if (object instanceof Date) {
				return 'date';
			} else if (object instanceof Array) {
				return 'array';
			} else if (object instanceof RegExp) {
				return 'regexp';
			} else {
				return 'object';
			}
        }
	};


    /* Reads a cookie
	Adapted from JQuery Cookie: https://github.com/carhartl/jquery-cookie 7/8/11 Snapshot */
    this.readCookie = function(name) {
        if (typeof name !== 'string') { return false; }

        var cookieParts = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
        return cookieParts !== null ? decodeURIComponent(cookieParts[1]) : null;
    };


    // Writes a cookie (Adapted from JQuery Cookie: https://github.com/carhartl/jquery-cookie 7/8/11 Snapshot)
    this.writeCookie = function(name, value, options) {
        if (typeof name !== 'string') { return false; }

        switch (typeof value) {
            case 'string':  // Ideal
                break;

            case 'undefined':   // Parameter wasn't passed, set a cookie with no value
                value = '';
                break;

            case 'object':
                if (value === null) {   // Treat null as an intention to set a cookie with no value
                    value = '';
                } else {    // We could JSON.stringify all other objects, but then we need to duck punch JSON.stringify into older browsers, let the client app deal with that
                    return false;
                }
                break;

            default:    // Cast other primitives to string
                value = String(value);
                break;
        }

        if (typeof options !== 'object') { options = {}; }

        return (document.cookie = [
            encodeURIComponent(name) + '=' + (value !== '' ? encodeURIComponent(value) : ''),
            options.expires instanceof Date ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
            typeof options.path === 'string' ? '; path=' + options.path : '',
            typeof options.domain === 'string' ? '; domain=' + options.domain : '',
            typeof options.secure !== 'undefined' && options.secure ? '; secure' : ''
        ].join(''));
    };


    // Deletes a cookie
    this.deleteCookie = function(name, options) {
        if (typeof options !== 'object') { options = {}; }

        options.expires = new Date(0);    // Set cookie expiration to epoch
        return thatLib.writeCookie(name, '', options) ? true : false;
    }


	/* A crude way of determining if an object is a window
	Taken from jQuery 1.5.2 */
	this.isWindow = function(object) {
		return object && typeof object === "object" && "setInterval" in object;
	};

	// Adapted from isPlainObject in jQuery 1.5.2
	this.isDOMElement = function(object) {
		return object && (thatLib.type(object) === 'object') && (object.nodeType || thatLib.isWindow(object));
	};


	/* typeof returns "object" for arrays, use this function instead
	Taken from jQuery 1.5.2 */
	this.isArray = function(object) {
		return thatLib.type(object) === 'array';
	};


	/* Checks if object was created using "{}" or "new Object()"
	Taken from jQuery 1.5.2 */
	this.isPlainObject = function(object) {
		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if (typeof object !== 'object' || thatLib.type(object) !== "object" || object.nodeType || thatLib.isWindow(object)) {
			return false;
		}

		// Not own constructor property must be Object
		if (object.constructor &&
			!Object.prototype.hasOwnProperty.call(object, "constructor") &&
			!Object.prototype.hasOwnProperty.call(object.constructor.prototype, "isPrototypeOf") ) {
			return false;
		}

		// Own properties are enumerated firstly, so to speed up, if last one is own, then all properties are own.
		var key;
		for (key in object) {}

		return typeof key === 'undefined' || Object.prototype.hasOwnProperty.call(object, key);
	};

	/* Checks if object is a jquery object (as opposed to native DOM element) */
	this.isJqueryElement = function(object) {
		return jQuery && object instanceof jQuery;
	}
	
	/* Clones an object
	source is the object to clone
	deep is a boolean signifying whether or not to perform a recursive copy
	Adapted from jQuery 1.5.2's extend called with parameters (deep, {}, source) */
	this.cloneObject = function(source, deep) {
		if (typeof source === 'undefined' || source === null) { return source; }
		if (typeof deep === 'undefined') { deep = false; }

		var clone = (thatLib.isArray(source) ? [] : {});

		for (name in source) {
			if (typeof source[name] !== 'undefined' && source !== null) {
				if (deep && (thatLib.isArray(source[name]) || thatLib.isPlainObject(source[name]))) {
					clone[name] = thatLib.cloneObject(source[name], deep);  // Never move original objects, clone them
				} else {    // Shallow copy primitives or if in shallow copy mode
					clone[name] = source[name];
				}
			}
		}

		// Return the clone
		return clone;
	};


	/* Ignore Earlier Callbacks v1.0
	Cancels earlier callbacks that haven't been invoked yet for the given id.
	This is especially useful when UI elements can trigger async calls directly.
	Wrapping the callback in this function will prevent it from being called repeatedly.
	This becomes very important for asynchronous calls because the responses are not guaranteed to
	arrive in the same order in which the requests were sent.
	Usage:
	asyncCall(parameters, fxcm.lib.ignoreEarlierCallbacks(callback, id)); */
	var _callbacksCount = {};
	
	this.ignoreEarlierCallbacks = function(callback, id) {
		if (typeof id === 'undefined') { id = callback; }

		if (typeof _callbacksCount[id] === 'undefined') { _callbacksCount[id] = 0; }
		_callbacksCount[id]++;

		var callbackWrapper = {};
		callbackWrapper.index = _callbacksCount[id];
		callbackWrapper.f = function() {
			if (_callbacksCount[id] === callbackWrapper.index) {
				callback.apply(this, arguments);
			}
		};
		return callbackWrapper.f;
	};


	// Queues callback functions to be executed in FIFO order
	var _callbacksQueues = {};
	this.queueCallback = function(callback, id) {
		if (typeof id === 'undefined') { id = callback; }

		if (typeof _callbacksQueues[id] === 'undefined') { _callbacksQueues[id] = []; }
		_callbacksQueues[id].push(callback);

		return function() {
			while (_callbacksQueues[id].length > 0) {
				_callbacksQueues[id].shift().apply(this, arguments);
			}
		};
	};


	// Stacks callback functions to be executed in FILO order
	var _callbacksStacks = {};
	this.stackCallback = function(callback, id) {
		if (typeof id === 'undefined') { id = callback; }

		if (typeof _callbacksStacks[id] === 'undefined') { _callbacksStacks[id] = []; }
		_callbacksStacks[id].push(callback);

		return function() {
			while (_callbacksStacks[id].length > 0) {
				_callbacksStacks[id].pop().apply(this, arguments);
			}
		};
	};
	
	
	// Performs an AJAX POST request
	this.ajaxPost = function(URL, postData, callback) {
		if (typeof postData === 'undefined') { postData = ''; }
		
		if (typeof postData === 'object') {
			if (!(postData instanceof Array)) {
				var dataArray = [];
				
				for (var field in postData) {
					if (dataArray.length > 0) {
						dataArray.push('&');
					}
					dataArray.push(field, '=', postData[field]);
				}
				
				postData = dataArray;
			}
			
			postData = postData.join('');
		}
		
		if (typeof URL !== 'string' || typeof postData !== 'string') {
			return false;
		}
		
		if (document.location.host !== thatLib.getHost(URL)) { return false; }	// Cannot perform cross-domain POSTs
		
		var httpRequest = thatLib.getAJAXObject();	// The XMLHttpRequest object is recreated on every call to workaround an IE cache problem
		if(!httpRequest) { return false; }	// The browser doesn't support AJAX
		
		if (httpRequest.overrideMimeType) {
			httpRequest.overrideMimeType('text/xml');
		}
		
		// Workaround for IE caching issue
		URL+= (url.indexOf('?') === -1 ? '?' : '&') + 'cacheBuster=' + thatLib.generateNumericID();

		// Open the connection
		httpRequest.open('POST', URL, true);
		
		// Set the proper headers
		httpRequest.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
		httpRequest.setRequestHeader('Content-length', postData.length);
		httpRequest.setRequestHeader('Connection', 'close');

		httpRequest.onreadystatechange = function () {	// Callback for handling the response
			if (httpRequest.readyState === 4) {	// Response has been fully received
				if (httpRequest.status === 200) {	// Successful submission
					if (httpRequest.responseText) {
						if (typeof callback === 'function') {
							callback.call(this, httpRequest.responseText);
						}
					}
				}
			}
		}
		
		httpRequest.send(postData);
	};
	
	
	// Extracts the hostname from a URL
	this.getHost = function (URL) {
		if (typeof URL !== 'string') { return false; }
		
		var host = URL.match(/^(?:(?:.*:)?\/\/)?([^/]+)/);
		if (!host) { return false; }	// Regex didn't match
		
		return host[1];
	};
	
	
	// Instantiates a browser-specific AJAX communication object
	this.getAJAXObject = function() {
		if (typeof ActiveXObject !== 'undefined') {	// Check for IE's ActiveX object
			try {
				var http = new ActiveXObject("Msxml2.XMLHTTP");
			} catch (e) {
				try {
					var http = new ActiveXObject("Microsoft.XMLHTTP");
				} catch (e2) {
					var http = false;
				}
			}
		} else if (typeof XMLHttpRequest === 'function') {	// Use XMLHttpRequest if ActiveX is not available
			try {
				var http = new XMLHttpRequest();
			} catch (e) {
				var http = false;
			}
		} else {	// The browser does not support AJAX communication
			var http = false;
		}
		
		return http;
	};


	// Loads a script dynamically and invokes callback after it loads
	this.getScript = function(URL, callback) {
		var script = document.createElement('script');
		script.setAttribute('type', 'text/javascript');
		if (typeof callback === 'function') {
			thatLib.addLoadHandler(script, callback);
		}
		script.setAttribute('src', encodeURI(URL));
		thatLib.attachElement(script);
	};
	
	
	// Loads a URL dynamically and invokes callback after it loads
	this.getURL = function(URL, callback) {
		var iframe = document.createElement('iframe');
		iframe.setAttribute('style', 'display:none');
		if (typeof callback === 'function') {
			thatLib.addLoadHandler(iframe, callback);
		}
		iframe.setAttribute('src', encodeURI(URL));
		thatLib.attachElement(iframe);
	};
	
	
	/* Attaches an element to the current document
	Taken from jQuery 1.5.2
	Inspired by code by Andrea Giammarchi
	http://webreflection.blogspot.com/2007/08/global-scope-evaluation-and-dom.html */
	this.attachElement = function(element) {
		var head = document.head || document.getElementsByTagName('head')[0] || document.documentElement;

		head.appendChild(element);
	};


	/* Parses ISO-8601 dates into javascript Date objects
	Adapted from Colin Snover's <http://zetafleet.com> Date.parse with progressive enhancement for ISO-8601, version 2 */
	this.parseISO8601 = function(ISO8601) {
		var timezoneOffset = 0, dateParts;
		if (dateParts = /^(\d{4}|[+\-]\d{6})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2})(?::(\d{2})(?:\.(\d{3,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?))?/.exec(ISO8601)) {
			if (dateParts[4]) {  // Includes the time
				if (dateParts[8] !== 'Z') {
					timezoneOffset = +dateParts[10] * 60 + (+dateParts[11]); // timezoneOffset = Timezone Hours * 60 + Timezone Minutes

					if (dateParts[9] === '+') {
						timezoneOffset*= -1;  // If the timezone is ahead of UTC, the offset must be negative
					}
				}

				dateParts[7] = +dateParts[7].substr(0, 3);
			} else {    // Date only
				dateParts[4] = 0;   // Hours
				dateParts[5] = new Date().getTimezoneOffset();   // Set minutes to offset from UTC so that resulting date will be midnight in the local time zone
				dateParts[6] = 0;   // Seconds
				dateParts[7] = 0;   // Milliseconds
			}

			// Date.UTC returns the milliseconds since epoch in UTC time, which is then used to initialize a Date object to prevent local time zone issues
			return new Date(Date.UTC(+dateParts[1], +dateParts[2] - 1, +dateParts[3], +dateParts[4], +dateParts[5] + timezoneOffset, +dateParts[6], dateParts[7]));
		} else {
			return false;   // Parameter did not meet ISO-8601 format specifications
		}
	};


    // Removes illegal characters and invalid prefixes (numbers, --, or -number) from text to generate a valid CSS class name
    this.generateCSSClassName = function(text) {
        if (typeof text !== 'string' && typeof text !== 'number') { return ''; }
		text = String(text);
		
        text = text.replace(/[^-a-zA-Z_0-9]/g,'_');
        var prefixTrimmed = text.replace(/^([0-9]|-[^a-zA-Z_])*/, '');

        return (prefixTrimmed.length >= 2 ? prefixTrimmed : 'class_' + text);
    };


    // Removes illegal characters and invalid prefixes (any non-letter) from text to generate a valid CSS class name
    this.generateCSSID = function(text) {
        if (typeof text !== 'string' && typeof text !== 'number') { return ''; }
		text = String(text);
		
        text = text.replace(/[^-a-zA-Z_0-9:.]/g,'_');
        var prefixTrimmed = text.replace(/^[^a-zA-Z]*/, '');

        return (prefixTrimmed.length >= 0 ? prefixTrimmed : 'id_' + text);
    };
	
	
	// Removes illegal characters and invalid prefixes (anything other than letters, $, or _) from text to generate a valid javascript function name
    this.generateFunctionName = function(text) {
        if (typeof text !== 'string' && typeof text !== 'number') { return ''; }
		text = String(text);
		
		var illegalSuffixChars = /[^a-zA-Z0-9_]/g;
		
		var prefix = text.charAt(0);
		if (prefix.match(/[a-zA-Z$_]/)) {
			return prefix + text.substr(1).replace(illegalSuffixChars,'_');
		} else {
			return 'function_' + text.replace(illegalSuffixChars,'_');
		}
    };


    // Calculates the timestamp for midnight of the parameter
    this.midnightTimestamp = function(date) {
        switch (typeof date) {
			case 'object':
				if (!(date instanceof Date)) {
					return false;
				}
				break;

			case 'number':
			case 'string':
				date = new Date(date);
				break;

			case 'undefined':
			default:
			    return false;
		}

        return date.getTime() - (((date.getHours() * 60 + date.getMinutes()) * 60 + date.getSeconds()) * 1000 + date.getMilliseconds());
    };


    // Removes whitespace from the beginning and end of a string
    this.trim = function(text) {
        if (typeof text !== 'string') { return false; }

        if (String.prototype.trim) {    // Use native implementation if it exists
            return String.prototype.trim.call(text);
        } else {
            return text.replace(/^\s+/, '').replace(/\s+$/, '');
        }
    }


    /* Adapted from jQuery 1.6.1
    Adds one or more space-separated classes to element */
    this.addClass = function(element, classNames) {
        if (typeof classNames !== 'string') { return false; }

        switch (typeof element) {
            case 'object':
                if (!thatLib.isDOMElement(element)) {
                    return false;
                }
                break;

            case 'string':
                element = document.getElementById(element);
                if (element === null) {
                    return false;
                }
                break;

            default:
                return false;
        }

        if (classNames === '') { return true; }

        if (!element.className) {
            element.className = classNames;
        } else {
            var className = ' ' + element.className + ' ';
            var setClass = element.className;

            classNames = classNames.split(/\s+/);
            for (var classNamesIndex = 0; classNamesIndex < classNames.length; classNamesIndex++) {
                if (className.indexOf(' ' + classNames[classNamesIndex] + ' ') < 0 ) {
                    setClass += ' ' + classNames[classNamesIndex];
                }
            }

            element.className = setClass;
        }

        return true;
    };


    /* Adapted from jQuery 1.6.1
    Removes one or more space-separated classes to element */
    this.removeClass = function(element, classNames) {
        if (!(typeof classNames === 'string' || typeof classNames === 'undefined')) { return false; }

        switch (typeof element) {
            case 'object':
                if (!thatLib.isDOMElement(element)) {
                    return false;
                }
                break;

            case 'string':
                element = document.getElementById(element);
                if (element === null) {
                    return false;
                }
                break;

            default:
                return false;
        }

        if (!element.className) { return true; }
        if (typeof classNames === 'undefined' || classNames === '') {
            element.className = '';
            return true;
        }

        classNames = classNames.split(/\s+/);
        var className = (' ' + element.className + ' ').replace(/[\n\r\t]/g, ' ');

        for (var classNamesIndex = 0; classNamesIndex < classNames.length; classNamesIndex++) {
            className = className.replace(' ' + classNames[classNamesIndex] + ' ', ' ');
        }

        element.className = thatLib.trim(className);

        return true;
    };


    /* Translates Date.getDay() to the name of the day.
    If shortForm is true, only returns the first 3 characters */
    var _dayNames = {};
    _dayNames['english'] = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
	this.formatDay = function(day, shortForm, language) {
		if (typeof language !== 'string' || typeof _dayNames[language.toLowerCase()] === 'undefined') {
			language = 'english';
		}

        if (typeof shortForm === 'undefined') {
            shortForm = false;
        }

        var dayName = _dayNames[language.toLowerCase()][day];
		if (shortForm) {
            return dayName.substr(0,3);
        } else {
            return dayName;
        }
	};


    /* Translates Date.getMonth() to the name of the month.
    If shortForm is true, only returns the first 3 characters */
	var _monthNames = {};
    _monthNames['english'] = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    this.formatMonth = function(month, shortForm, language) {
		if (typeof language !== 'string' && typeof _monthNames[language] === 'undefined') {
			language = 'english';
		}

        if (typeof shortForm === 'undefined') {
            shortForm = false;
        }

        var monthName = _monthNames[language.toLowerCase()][month];
		if (shortForm) {
            return monthName.substr(0,3);
        } else {
            return monthName;
        }
	};
	
	// Attaches events with cross-browser support, properly setting the context of this
	this.addEventHandler = function(element, event, handler, capture) {
		if (!thatLib.isDOMElement(element) || typeof event !== 'string' || typeof handler !== 'function') { return false; }
		if (event.substr(0,2) === 'on') { event = event.substr(2); }	// Strip the 'on' at the beginning of the event if it is present
		
		if (typeof element.addEventListener === 'function') {	// Primary way of adding event listeners
			if (typeof capture === 'undefined') { capture = false; }
			return element.addEventListener(event, handler, capture);
		} else if (typeof element.attachEvent !== 'undefined') {	// Special case for IE (also, strangely typeof element.attachEvent = 'object' in IE)
			return element.attachEvent('on' + event, function(e) { return handler.call(element, e); });
		} else {
			return false;
		}
	};
	
	
	// Adds an onload handler for script and iframe elements (supports IE)
	var _addLoadHandlerCallbackFired = {};
	this.addLoadHandler = function(element, callback) {
		if (typeof callback !== 'function') { return false; }
		
		var callbackID = thatLib.generateNumericID();	// Generate an ID for the callback
		_addLoadHandlerCallbackFired[callbackID] = false;	// Initialize its state as not fired
		callback = thatLib.queueCallback(callback, 'fxcm.lib.addLoadHandler:' + callbackID);	// Support multiple callbacks on the same element
		var wrappedCallback = function() {	// Wrap callback to set state to fired when called
				_addLoadHandlerCallbackFired[callbackID] = true;
				return callback.call(element);
			};
		
		// Attach standard load handler
		thatLib.addEventHandler(element, 'load', wrappedCallback);

		/* Hack to replicate element.onload in IE
		Adapted from Nick Spacek's code at https://gist.github.com/461797 */
		thatLib.addEventHandler(element, 'readystatechange', function() {
				if ((element.readyState === 'loaded' || element.readyState === 'complete') && _addLoadHandlerCallbackFired[callbackID] === false) {
					return wrappedCallback.call(element);
				}
			});
		
		return true;
	};
	
	
	/* Returns an object of name/value pairs for the contents of a form
	Inspired by jQuery 1.6.2's serializeArray() */
	var _selectTextareaRegEx = /^(?:select|textarea)/i;
	var _inputTypesRegEx = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i;
	
	this.serializeForm = function(form) {
		// Dereference an ID
		if (typeof form === 'string') { form = document.getElementById(form); }
		
		// Confirm that form is a form element
		if (!(thatLib.isDOMElement(form) && form.tagName === 'FORM')) { return false; }
		
		var serializedForm = {};
		for (elementIndex = 0; elementIndex < form.elements.length; elementIndex++) {
			var element = form.elements[elementIndex];
			
			if (element.name && !element.disabled && (element.checked || _selectTextareaRegEx.test(element.tagName) || _inputTypesRegEx.test(element.type))) {
				serializedForm[element.name] = thatLib.inputValue(element);
			}
		}
		
		return serializedForm;
	};
	
	
	/*	Returns the value of an input (supports all types)
	Inspired by jQuery 1.6.2's val() */
	var _hardReturnRegEx = /\r/g;
	
	this.inputValue = function(element) {
		if (!thatLib.isDOMElement(element)) { return false; }
		
		switch(element.tagName) {
			case 'SELECT':
				var selectedIndex = element.selectedIndex;
				if (selectedIndex < 0) { return null; }

				if (element.type === 'select-one') {
					var option = element.options[selectedIndex];
					
					if (option.selected && thatLib.isEnabledOption(option)) {
						return thatLib.inputValue(option);
					} else {
						return null;
					}
				} else {				
					var options = element.options;
					
					var values = [];
					for (var optionIndex = 0; optionIndex < options.length; optionIndex++) {
						var option = options[optionIndex];
						
						if (option.selected && thatLib.isEnabledOption(option)) {
							values.push(thatLib.inputValue(option));
						}
					}
					
					if (values.length === 0) {
						return null;
					} else if (values.length === 1) {
						return values[0];
					} else {
						return values;
					}
				}

				return null;
			
			case 'OPTION':
				var attrValue = element.attributes.value;
				if (!attrValue || attrValue.specified) {
					return element.value;
				} else {
					return element.text;
				}
			
			case 'INPUT':
				var value = element.value;
				if (typeof value === 'string') {
					return value.replace(_hardReturnRegEx, '');
				} else if (value == null) {
					return '';
				} else {
					return value;
				}
			
			case 'TEXTAREA':
				var value = element.value;
				if (value == null) {
					return '';
				} else {
					return value;
				}
			
			default:
				return false;
		}
	};
	
	
	// Checks if the option element has been disabled or is in a disabled optgroup
	this.isEnabledOption = function(option) {
		return (fxcm.support.optDisabled ? !option.disabled : option.getAttribute('disabled') === null) &&
			(!option.parentNode.disabled || option.parentNode.tagName === 'OPTGROUP');
	};
	
	
	/* Cancels events in a cross-browser compatible way
	Usage:
	
	return fxcm.lib.cancelEvent(event);	*/
	this.cancelEvent = function(event) {
		if (typeof event !== 'object') { return false; }
		
		// Cancel the default action
		if (typeof event.preventDefault === 'function') {
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
		
		// Stop the event from bubbling
		if (typeof event.stopPropagation === 'function') {
			event.stopPropagation();
		} else {
			event.cancelBubble = true;
		}
		
		// Return false
		return false;
	}
	
	// Returns a copy of the array with numberOfElements shifted off
	this.shiftArray = function(array, numberOfElements) {
		if (typeof numberOfElements === 'undefined') {
			numberOfElements = 1;
		} else 	if (typeof numberOfElements !== 'number' || numberOfElements < 0) {
			return false;
		}
		
		var returnArray = [];
		for (var index = numberOfElements; index < array.length; index++) {
			returnArray.push(array[index]);
		}
		
		return returnArray;
	};
	
	// Returns a copy of the array with numberOfElements popped off
	this.popArray = function(array, numberOfElements) {
		if (typeof numberOfElements === 'undefined') {
			numberOfElements = 1;
		} else 	if (typeof numberOfElements !== 'number' || numberOfElements < 0) {
			return false;
		}
		
		var returnArray = [];
		for (var index = array.length - numberOfElements - 1; index >= 0; index--) {
			returnArray.unshift(array[index]);
		}
		
		return returnArray;
	};
	
	// Dynamically adds style to the current document
	this.addStyle = function() {
		var styleElement = thatLib.createStyleElement.apply(this, arguments);
		return thatLib.attachElement(styleElement);
	};
	
	// Dynamically creates a style element
	this.createStyleElement = function(id, style) {
		var styleContent = id + ' { ' + style + ' }';

		var styleElement = document.createElement('style');
		styleElement.type = 'text/css';
		
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = styleContent;
		} else {
			styleElement.appendChild(document.createTextNode(styleContent));
		}
		
		return styleElement;
	};
}();
// The calendar class queries a Google Calendar and generates HTML
fxcm.Calendar = fxcm.lib.makeClass();
fxcm.Calendar.prototype.init = function(timeframe, displayCallback, calendarCallback, googCalendar, apiKey) {
	var thatCalendar = this;

	var _settings = {
		categories: {},
		types: {}
	};

	var _defaults = {
		months: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		months_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		days_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],		
		text_join_title: 'Join Webinar'
	};

	/**
	 * Requests from the fxcm calendars account events relevant to the timeframe.
	 * @param timeframe: "today" | "previousWeek" | "thisWeek" | "nextWeek" | "featured"
	 * @param displayCallback: function used to display anything to the user; will be passed the start and end dates
	 * @param calendarCallback: function used to process the items retrieved from the calendar; will be passed the array of items
	 * @param googCalendar: google email address of calednar to poll, with URL-safe characters, e.g. %40
	 * @param apiKey: public API key
	 * @returns 
	 */

	function _outputTime24h(time) {
		return _padZero(time.getHours()) + ":" + _padZero(time.getMinutes());
	}

	function _eventTypeToClass(type) {
		if (typeof(type) == "undefined") return "";
		if (type.toLowerCase() == "live client") return "live_client";
		return type.toLowerCase();
	}

	/**
	 * Handle values that are undefined
	 * @param str
	 * @returns
	 */
	function _coalesceOutput(str){
		return typeof(str) == "undefined" ? "&nbsp" : str;
	}


	/**
	 * Look up translated value in the provided array, and if not found, return itself
	 */
	function _translateValue(translationArray, key) {
		var value = _coalesceOutput(key);
		if (translationArray === null) {return value;}
		var lookup = translationArray[value.toLowerCase().trim()];
		return (typeof(lookup) !== "undefined" && lookup !== "") ? lookup : value;
	}

	function _parseDateTime(string) {
		var split = string.split("T");
		var dateElements = split[0].split("-");
		var timeElements = split[1].substring(0,8).split(":");
		return new Date(dateElements[0], (parseFloat(dateElements[1]) - 1 + 12) % 12, dateElements[2], timeElements[0], timeElements[1], timeElements[2]);
	}

	function _getStartOfLastWeek() {
		var start = _getStartOfThisWeek();
		start.setDate(start.getDate() - 7);
		return start;
	}

	function _getStartOfNextWeek() {
		var start = _getStartOfThisWeek();
		start.setDate(start.getDate() + 7);
		return start;
	}

	function _getStartOfThisWeek() {
		var datetime = new Date();
		datetime.setDate(datetime.getDate() - datetime.getDay());
		_zeroOut(datetime);
		return datetime;
	}

	function _getStartOfToday() {
		var datetime = new Date();
		_zeroOut(datetime);
		return datetime;
	}

	function _getEndOfLastWeek() {
		var end = _getEndOfThisWeek();
		end.setDate(end.getDate() - 7);
		return end;
	}

	function _getEndOfNextWeek() {
		var end = _getEndOfThisWeek();
		end.setDate(end.getDate() + 7);
		return end;
	}

	function _getEndOfThisWeek() {
		var datetime = new Date();
		datetime.setDate(datetime.getDate() + (6 - datetime.getDay() + 1));
		_zeroOut(datetime);
		return datetime;
	}

	function _getEndOfToday() {
		var datetime = new Date();
		datetime.setDate(datetime.getDate() + 1);
		_zeroOut(datetime);
		return datetime;
	}

	function _zeroOut(datetime) {
		datetime.setHours(0);
		datetime.setMinutes(0);
		datetime.setSeconds(0);
		datetime.setMilliseconds(0);
	}

	function formatHours(n) {
		if (n % 12 === 0) return 12;
		return n % 12;
	}

	function _padZero(n) { return n <= 9 ? "0" + n : n; }

	function _padTwoZero(n) {
		if (n <= 9) {
			return "00" + n;
		} else if (n <= 99) {
			return "0" + n;
		} else {
			return n;
		}
	}

	this.requestEvents = function(timeframe, displayCallback, calendarCallback, googCalendar, apiKey) {
		if (typeof(googCalendar) == "undefined") googCalendar = "fxcmcalendars%40gmail.com";
		if (typeof(apiKey) == "undefined") apiKey = "AIzaSyAd-5yprrBP9QEM4fS-PWCBNeMMdv3Jrlo";
		var url = "https://www.googleapis.com/calendar/v3/calendars/" + googCalendar + "/events?key=" + apiKey + "&maxResults=200&orderBy=startTime&singleEvents=true&timeZone=" + jstz.determine().name();
		var start;
		var end;
		switch(timeframe) {
		case "today":
			start = _getStartOfToday();
			end = _getEndOfToday();
			break;
		case "previousWeek":
			start = _getStartOfLastWeek();
			end = _getEndOfLastWeek();
			break;
		case "thisWeek":
			start = _getStartOfThisWeek();
			end = _getEndOfThisWeek();
			break;
		case "nextWeek":
			start = _getStartOfNextWeek();
			end = _getEndOfNextWeek();
			break;
		case "featured":
			start = new Date();
			end = _getEndOfNextWeek();
			break;
		default:
			start = _getStartOfThisWeek();
			end = _getEndOfThisWeek();
		}
		if (start.toISOString) {
			url += "&timeMin=" + start.toISOString() + "&timeMax=" + end.toISOString();
		} else {
			var offsetStart = new Date(start.getTime());
			offsetStart.setMinutes(offsetStart.getMinutes() + offsetStart.getTimezoneOffset());
			var startString = offsetStart.getFullYear() + "-" + _padZero(offsetStart.getMonth() + 1) + "-" + _padZero(offsetStart.getDate()) + "T" + _padZero(offsetStart.getHours()) + ":" + _padZero(offsetStart.getMinutes()) + ":" + _padZero(offsetStart.getSeconds()) + "." + _padTwoZero(offsetStart.getMilliseconds()) + "Z";
			var offsetEnd = new Date(end.getTime());
			offsetEnd.setMinutes(offsetEnd.getMinutes() + offsetEnd.getTimezoneOffset());
			var endString = offsetEnd.getFullYear() + "-" + _padZero(offsetEnd.getMonth() + 1) + "-" + _padZero(offsetEnd.getDate()) + "T" + _padZero(offsetEnd.getHours()) + ":" + _padZero(offsetEnd.getMinutes()) + ":" + _padZero(offsetEnd.getSeconds()) + "." + _padTwoZero(offsetEnd.getMilliseconds()) + "Z";
			url += "&timeMin=" + startString + "&timeMax=" + endString;
		}
		displayCallback(start, end);

		$.ajax({
			async: true,
			cache: false,
			crossDomain: true,
			type: "GET",
			url: url,
			dataType: "jsonp",
			success: function (data) {
				calendarCallback(data.items);
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				console.log(errorThrown); console.log(textStatus); console.log(XMLHttpRequest);
			}
		});
	};

	/**
	 * Outputs an event in HTML form.  Default for DFX; can/should be overwritten for other usage.
	 * @param event
	 * @returns {String}
	 */
	this.outputEvent = function(event) {
		var output = "";
		var eventStart = _parseDateTime(event.start.dateTime);
		var eventItems = thatCalendar.parseEventDescription(event.description);
		
		output += "<li class='event'>";
		output += "<a class='eventLink' href='" + _coalesceOutput(eventItems["room-link"]) + "' target='_blank' title='" + _defaults.text_join_title + "'></a>";
		output += "<ul class='eventDescr'>";
		output += "<li class='date'><span><strong>" + _defaults.days[eventStart.getDay()] + "</strong> " + _defaults.months[eventStart.getMonth()] + " " + eventStart.getDate() + "</span></li>";
		output += "<li class='time'>" + formatHours(eventStart.getHours()) + ":" + _padZero(eventStart.getMinutes()) + (eventStart.getHours() >= 12 ? "P" : "A") + "</li>";
		output += "<li class='title'>" + event.summary + "</li>";
		output += "<li class='host'>" + _coalesceOutput(eventItems["host"]) + "</li>";
		output += "<li class='category'>" + _translateValue(_settings.categories, eventItems["category"]) + "</li>";
		output += "<li class='type " + _eventTypeToClass(eventItems["type"]) + "'>" + _translateValue(_settings.types, eventItems["type"]) + "</li>";
		output += "</ul></li>";
		
		return output;
	};

	this.parseEventDescription = function(eventDescription) {
		if (typeof eventDescription === "undefined") {return [];}
		var descriptionItems =[];
		var tokens = eventDescription.split("\n");
		for (var i = 0; i < tokens.length; i++) {
			var split = tokens[i].split(":");
			var splitLength = split.length;
			var key = split[0].toLowerCase();
			var val = "";
			for (var j = 1; j < splitLength; j++) {
				val += $.trim(split[j]);
				if (splitLength >= 3 && j < splitLength - 1) val += ":";
			}
			descriptionItems[key] = val;
		}
		return descriptionItems;
	};

	this.outputFeaturedEvent = function(event) {
		var output = "";
		var eventStart = _parseDateTime(event.start.dateTime);
		var eventItems = thatCalendar.parseEventDescription(event.description);
		
		output += "<li class='featured-event'>";
		output += "<i class='ico ico-simple-light-grey ico-star-lg'></i>";
		output += "<span class='date'>" + _defaults.days_full[eventStart.getDay()] + ", " + _defaults.months_full[eventStart.getMonth()] + " " + eventStart.getDate() + "</span> ";
		output += formatHours(eventStart.getHours()) + ":" + _padZero(eventStart.getMinutes()) + (eventStart.getHours() >= 12 ? "P" : "A");
		output += "<a href='" + _coalesceOutput(eventItems["room-link"]) + "' target='_blank'>" + event.summary + "</a>";
		output += "</li>";
		return output;
	};

};


fxcm.Demo = fxcm.lib.makeClass();
fxcm.Demo.prototype.init = function(rb, form, successCallback, currency) {
	var thatDemo = this;

	var _settings = {};
	_settings.submissionTargets = {};
	_settings.submissionTargets.get = [];
	_settings.submissionTargets.post = [];
	_settings.submissionTargets.JSONP = [];
	_settings.submissionTargets.eloqua = [];

	var _timeoutID = null;
	var _requestsQueue = [];

	this.setRB = function(rb) {
		if (typeof rb !== 'string') { return false; }

		return _settings.rb = rb.toLowerCase();
	};

	this.getRB = function() {
		return _settings.rb;
	};

	this.setDB = function(rb, currency) {
		if (typeof rb !== 'string') { return false; }

		var _db = _dbLookup(rb, currency);

		if(!_db){
			return false;
		} else {
			return _settings.db = _db;
		}
	};

	this.getDB = function() {
		return _settings.db;
	};

	this.setCurrency = function(currency){
		if (typeof currency !== 'string') { return false; }

		return _settings.currency = currency.toUpperCase();
	};

	this.getCurrency = function(){
		return _settings.currency;
	};

	this.setConversionData = function() {
		var _rb = thatDemo.getRB();
		var _data = {};

		if (typeof fxcm.registration.demoRBMap !== 'object' || typeof fxcm.registration.demoRBMap[_rb] !== 'object')  { return false; }

		var _raw = fxcm.registration.demoRBMap[_rb];

		// feed values into object for returning
		_data.rb = _rb;
		_data.database = thatDemo.getDB();
		_data.currency = thatDemo.getCurrency();

		// check for an mt4 server
		if (typeof _raw.server === 'object' && typeof _raw.server[_data.currency] === 'string') {
			_data.server = _raw.server[_data.currency];
		}

		// check for a platform
		if (typeof _raw.platform === 'string') {
			_data.platform = _raw.platform;
		}

		return _settings.conversionData = _data;
	};

	this.getConversionData = function() {
		return _settings.conversionData;
	};

	this.setCountry = function(country) {
		if (typeof country !== 'string') { return false; }

		_settings.country = country;
		_settings.rb = _rbLookup();

		return _settings.country;
	};

	this.getCountry = function() {
		return _settings.country;
	};

	this.setAccountType = function(accountType) {
		if (typeof accountType !== 'string') { return false; }

		_settings.accountType = accountType;
		_settings.rb = _rbLookup();

		return _settings.accountType;
	};

	this.getAccountType = function() {
		return _settings.accountType;
	};

	this.setCountryAccountType = function(country, accountType) {
		if (typeof country !== 'string' || typeof accountType !== 'string') { return false; }

		_settings.country = country;
		_settings.accountType = accountType;
		_settings.rb = _rbLookup();

		return {country: _settings.country, accountType: _settings.accountType};
	};

	this.setCampaign = function(campaign) {
		if (typeof campaign !== 'string') { return false; }

		return _settings.campaign = campaign;
	};

	this.getCampaign = function() {
		return _settings.campaign;
	};

	this.setFormName = function(name) {
		if (typeof name !== 'string') { return false; }

		return _settings.formName = name;
	};

	this.getFormName = function() {
		return _settings.formName;
	};

	/* Adds another submission target submitted with HTTP GET into an iFrame
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field names
	additionalData is an object of key/value pairs that will be submitted along with the demo data
	valueMap is an object of field names, which each are objects containing key/value pairs mapping values to aliases
	If any Personally Identifiable Information (PII, e.g. name, address) is being passed, you should use a secure link (https) otherwise the data is passed as plain text */
	this.addGetSubmissionTarget = function(target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('get', target, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	/* Adds another submission target submitted with HTTP POST
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field name
	additionalData is an object of key/value pairs that will be submitted along with the demo data
	valueMap is an object of field names, which each are objects containing key/value pairs mapping values to aliases
	If any Personally Identifiable Information (PII, e.g. name, address) is being passed, you should use a secure link (https) otherwise the data is passed as plain text */
	this.addPostSubmissionTarget = function(target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('post', target, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	/* Adds another submission target submitted via a script tag
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field names
	additionalData is an object of key/value pairs that will be submitted along with the demo data
	valueMap is an object of field names, which each are objects containing key/value pairs mapping values to aliases
	If any Personally Identifiable Information (PII, e.g. name, address) is being passed, you should use a secure link (https) otherwise the data is passed as plain text */
	this.addJSONPSubmissionTarget = function(target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('JSONP', target, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	/* Adds another submission target submitted to Eloqua
	fieldMap is an object where the keys are the clientInfo field names to map and values are the submission target's expected field names
	additionalData is an object of key/value pairs that will be submitted along with the demo data */
	this.addEloquaSubmissionTarget = function(eloquaFormName, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		return _addSubmissionTarget('eloqua', eloquaFormName, fieldMap, additionalData, callback, valueMap, extendOriginalFields);
	};

	function _addSubmissionTarget(type, target, fieldMap, additionalData, callback, valueMap, extendOriginalFields) {
		var submissionTarget = {};

		if (typeof target === 'string') {
			submissionTarget[type === 'eloqua' ? 'formName' : 'target'] = target;
		} else {
			return false;
		}

		if (typeof fieldMap !== 'undefined') {
			if (typeof fieldMap === 'object') {
				submissionTarget.fieldMap = fieldMap;
			} else {
				return false;
			}
		}

		if (typeof additionalData !== 'undefined') {
			if (typeof additionalData === 'object') {
				submissionTarget.additionalData = additionalData;
			} else {
				return false;
			}
		}

		if (typeof callback !== 'undefined') {
			if (typeof callback === 'function') {
				submissionTarget.callback = callback;
			} else {
				return false;
			}
		}

		if (typeof valueMap !== 'undefined') {
			if (typeof valueMap === 'object') {
				submissionTarget.valueMap = valueMap;
			} else {
				return false;
			}
		}

		submissionTarget.extendOriginalFields = typeof extendOriginalFields !== 'boolean' ? true : extendOriginalFields;

		_settings.submissionTargets[type].push(submissionTarget);
		return submissionTarget;
	}

	this.getSubmissionTargets = function() {
		return _settings.submissionTargets;
	};

	function _getCampaign() {
		return fxcm.lib.getURLParameter('CMP') ||
			(typeof jPersist === 'object' && typeof jPersist.visitor === 'object' && typeof jPersist.visitor.campaign === 'string' && 'SFS-' + jPersist.visitor.campaign);
	}

	this.setSuccessCallback = function(callback) {
		if (typeof callback !== 'function') { return false; }

		return _settings.successCallback = callback;
	};

	this.getSuccessCallback = function() {
		return _settings.successCallback;
	};

	this.setErrorCallback = function(callback) {
		if (typeof callback !== 'function') { return false; }

		return _settings.errorCallback = callback;
	};

	this.getErrorCallback = function() {
		return _settings.errorCallback;
	};

	this.checkFXTRStatus = function() {
		var callbackName = fxcm.lib.generateFunctionName(fxcm.lib.generateNumericID());

		window[callbackName] = _handleFXTRStatus;
		_timeoutID = setTimeout(_FXTRTimeout, 2000);	// Give FXTR Status 2 seconds to respond before defaulting to FXTR
		return fxcm.lib.getScript(thatDemo.FXTRStatusURL + '?callback=' + callbackName);
	}

	function _FXTRTimeout() {
		_timeoutID = null;

		_settings.submissionTarget = 'fxtr';

		_submitRequests();
	}

	function _handleFXTRStatus(status) {
		if (_timeoutID !== null) {
			clearTimeout(_timeoutID);
		}

		if (status) {
			_settings.submissionTarget = 'fxtr';
		} else {
			_settings.submissionTarget = 'eloqua';
		}

		_submitRequests();
	}

	function _rbLookup(country, accountType) {
		if (typeof country === 'undefined') { country = _settings.country; }
		if (typeof accountType === 'undefined') { accountType = _settings.accountType || 'ts'; }

		if (typeof country !== 'string' || typeof accountType !== 'string') { return false; }

		switch(country) {
			case 'united_states':
			case 'american_samoa':
			case 'guam':
			case 'puerto_rico':
				switch(accountType) {
					case 'ts':
						return 'fxcm';

					case 'at':
						return 'active_trader';

					case 'tsg':
						return 'tsg_llc';

					case 'st':
						return 'strategy_trader_llc';

					default:
						return false;
				}

			case 'australia':
			case 'new_zealand':
				switch(accountType) {
					case 'ts':
						return 'fxcmau';

					default:
						return false;
				}

			case 'united_kingdom':
			default:
				switch(accountType) {
					case 'ts':
					default:
						return 'fxcmuk';
				}
		}
	}

	this.bindCountry = function(element) {
		// Dereference an id
		if (typeof element === 'undefined') {
			if (typeof _settings.bindTarget !== 'undefined') {
				element = _settings.bindTarget;
			} else {
				return false;
			}
		} else if (typeof element === 'string') {
			element = document.getElementById(element);
		}

		// Confirm that element is an element
		if (!fxcm.lib.isDOMElement(element)) { return false; }

		switch (element.tagName) {
			case 'SELECT':
				fxcm.lib.addEventHandler(element, 'change', _countryChangeHandler);
				return true;

			case 'FORM':
				for (elementIndex = 0; elementIndex < element.elements.length; elementIndex++) {
					var formElement = element.elements[elementIndex];

					if (formElement.name.toLowerCase() === 'country' || formElement.name === 'demo.' + fxcm.Demo.prototype._demoFieldMap['country'].fxtrName || formElement.name === fxcm.Demo.prototype._demoFieldMap['country'].eloquaName) {
						fxcm.lib.addEventHandler(formElement, 'change', _countryChangeHandler);
						return true;
					}
				}
				return false;

			default:
				return false;
		}
	}

	function _countryChangeHandler(event) {
		return thatDemo.setCountry(fxcm.lib.inputValue(this));
	}

	this.bind = function(form) {
		// Dereference an id
		if (typeof form === 'string') {
			form = document.getElementById(form);
		}

		// Confirm that "form" is a form
		if (!(fxcm.lib.isDOMElement(form) && form.tagName === 'FORM')) {
			return false;
		}

		// Set the form name to the name attribute of the bind target if one hasn't been set already
		if (typeof _settings.formName === 'undefined') {
			thatDemo.setFormName(form.name);
		}

		// Attach submit handler
		_settings.bindTarget = form;
		return fxcm.lib.addEventHandler(form, 'submit', _submitHandler);
	}

	function _submitHandler(event) {
		// Set the form name to the name attribute of the bind target if one hasn't been set already
		if (typeof _settings.formName === 'undefined') {
			thatDemo.setFormName(this.name);
		}

		// Scrape data from the form
		var formData = fxcm.lib.serializeForm(this);

		// Map fxtr fields to their respective clientInfo name
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof formData['demo.' + fxcm.Demo.prototype._demoFieldMap[field].fxtrName] !== 'undefined') {
				formData[field] = formData['demo.' + fxcm.Demo.prototype._demoFieldMap[field].fxtrName];
				delete formData['demo.' + fxcm.Demo.prototype._demoFieldMap[field].fxtrName];
			}
		}

		if (typeof event === 'object') {	// _submitHandler is handling a submit event
			thatDemo.submit(formData);	// Submit the request

			return fxcm.lib.cancelEvent(event);	// Cancel the form submission
		} else {	// _submitHandler was manually invoked by submit because a form was passed in
			return thatDemo.submit(formData, event);	// Submit the request, event is the callback in this case
		}
	}

	/* clientInfo can contain the following members:
	firstName (max of 50 characters)
	lastName (required): The client's last name (max of 50 characters)
	email (required): Must be a validly formatted email address (max of 50 characters)
	phone: May only use digits, letters, and the characters: +()_,.:-=* (max of 20 characters)
	phone2: May only use digits, letters, and the characters: +()_,.:-=* (max of 20 characters)
	imNetwork: Instant messaging network (aol, yahoo, icq, msn, other)
	imID: Instant messaging screen name (max of 255 characters)
	street (max of 50 characters)
	address2 (max of 255 characters)
	city (max of 50 characters)
	state: State or province (max of 50 characters)
	zip (max of 10 characters)
	country: Lower-case with underscores (white list)
	company (max of 255 characters)
	language: Preferred language (English, Traditional_Chinese, Simplified_Chinese, Bahasa_Malayu, Korean, Japanese, Vietnamese, Thai, Tagalog)
	accountType: Account type (individual, joint, corporate, partnership, trust)
	balance: Initial balance of the demo account (maximum of 13 digits before the decimal and 2 after)
	accounts: Number of accounts to create (1-9999)
	margin: Expected margin (0, less50000, 50000_100000, more100000)
	deposit: Intended funding amount for the future account (5000_24999, 25000_49999, 50000_99999, 100000_inf)
	traderType: Type of trader (individual_investor, high_volume_trader, manager, ib_regulated_introducing_broker, ib_service_provider)
	forexExperience: Years trading forex (0, 1, 2, 3, 4, 5+)
	equitiesExperience: Years trading equities (0, 1, 2, 3, 4, 5+)
	futuresExperience: Years trading futures (0, 1, 2, 3, 4, 5+)
	experienceLevel: Level of FX experience (Novice, Intermediate, Expert)
	tradingFrequency: How often the client will be trading FX (Never, Daily, Weekly, Occasionally)
	reference: Where the client heard about us (max of 255 characters)
	previousSignup: Whether or not the client has signed up before (yes, no)
	freeProduct: Whether or not the client wants to receive a free product (yes, no)
	emailSignup: Email opt-in (yes, no)
	*/
	this.submit = function(clientInfo, callback) {
		var errors = [];

		/**** BEGIN check for submit being called with a form as the first parameter ****/
		// Dereference an ID
		if (typeof clientInfo === 'string') {
			clientInfo = document.getElementById(clientInfo);
			if (clientInfo === null) {
				errors.push('Form ID does not exist in the DOM');
				return errors;
			}
		}

		// If clientInfo is a DOM element, confirm that it's a form then reinvoke submit with the scraped data
		if (fxcm.lib.isDOMElement(clientInfo)) {
			if (clientInfo.tagName === 'FORM') {
				return _submitHandler.call(clientInfo, callback);
			} else {
				errors.push('First parameter was a DOM element (or its id) that was not a form');
				return errors;
			}
		}
		/***** END check for submit being called with a form as the first parameter *****/

		// Check that client info was passed in
		if (typeof clientInfo !== 'object') {
			errors.push('No client info');
			return errors;
		}

		// Check for an rb being passed in with the clientInfo
		if (typeof clientInfo['rb'] === 'string') {
			thatDemo.setRB(clientInfo['rb']);
			delete clientInfo['rb'];
		}

		// Check for a currency being passed in with the clientInfo
		if (typeof clientInfo['currency'] === 'string') {
			thatDemo.setCurrency(clientInfo['currency']);
			delete clientInfo['currency'];
		}

		// Check for a broken RB and set db
		if (!_settings.rb) {
			errors.push('No RB defined');
		} else {
			var db = thatDemo.setDB(_settings.rb, _settings.currency);
			if (!db) { errors.push('No DB set for this RB'); }
		}

		// Check for a hardcoded campaign
		if (typeof clientInfo['cmp'] !== 'undefined') {
			thatDemo.setCampaign(clientInfo['cmp']);
			delete clientInfo['cmp'];
		} else if (typeof clientInfo['CAMPAIGN_ID'] !== 'undefined') {
			thatDemo.setCampaign(clientInfo['CAMPAIGN_ID']);
			delete clientInfo['CAMPAIGN_ID'];
		} else if (typeof clientInfo['campaign'] !== 'undefined') {
			thatDemo.setCampaign(clientInfo['campaign']);
			delete clientInfo['campaign'];
		}

		// Check for a hardcoded elqFormName implying that the Eloqua form should be coregistered
		if (typeof clientInfo['elqFormName'] !== 'undefined') {
			thatDemo.addEloquaSubmissionTarget(clientInfo['elqFormName']);
			delete clientInfo['elqFormName'];
		}

		// Validate clientInfo
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof clientInfo[field] !== 'undefined') {
				if (!fxcm.Demo.prototype._demoFieldMap[field].validation.call(this, clientInfo[field])) {
					errors.push('Invalid ' + fxcm.Demo.prototype._demoFieldMap[field].humanName);
				}
			} else if (fxcm.Demo.prototype._demoFieldMap[field].required) {
				errors.push('Missing ' + fxcm.Demo.prototype._demoFieldMap[field].humanName);
			}
		}

		if (errors.length > 0) { return errors; }

		// cache conversion data to be used
		thatDemo.setConversionData(_settings.rb);

		var returnValue = _submitRequests(clientInfo, callback);

		return returnValue;
	};

	function _dbLookup(rb, currency){
		if (typeof rb === 'undefined') { rb = _settings.rb; }
		if (typeof rb !== 'string' || typeof fxcm.registration.demoRBMap[rb] !== 'object') { return false; }

		var _item,
			_databases = fxcm.registration.demoRBMap[rb].db,
			_selectedDB = _databases[currency]; // select proper database according to requested currency

		if (!_selectedDB) { // No support for requested currency. Auto-select a supported currency/db pair instead
			if (typeof _databases === 'string') { // check for rbs coded in legacy format. In this case, return "unknown" for currency
				_selectedDB = _databases;
				currency = thatDemo.setCurrency('unknown');
			} else {
				for (_item in _databases) {
					_selectedDB = _databases[_item];
					currency = thatDemo.setCurrency(_item);
					break;
				}
			}
		}

		return _selectedDB;
	}

	function _submitRequests(clientInfo, callback) {
		var returnValue, submissionTarget,
		conversionData = thatDemo.getConversionData();

		if (typeof _settings.submissionTarget !== 'string') {	// The FXTR Status Check hasn't returned nor timed out, so queue requests
			_requestsQueue.push(function() { return _submitRequests(clientInfo, callback); });

			return true;
		} else {
			returnValue = false;

			while (_requestsQueue.length > 0) {	// Earlier requests were queued while waiting for the FXTR Status Check
				returnValue = _requestsQueue.shift().call(this);
			}

			if (typeof clientInfo === 'undefined') {	// This invocation was only intended to submit the requests in the queue
				return returnValue;
			}

			// Submit requests
			if (typeof fxcmdebug === 'object' && typeof fxcmdebug.demo === 'object' && typeof fxcmdebug.demo.submissionTarget === 'string') {	// We're in debug mode
				submissionTarget = fxcmdebug.demo.submissionTarget;
			} else {	// Production use case
				submissionTarget = _settings.submissionTarget;
			}

			if (submissionTarget === 'fxtr') {
				returnValue = _submitToFXTR(clientInfo, callback);
			} else {
				returnValue = _submitToEloqua(clientInfo, callback);
			}

			if (returnValue) {
				_submitToAdditionalTargets(clientInfo);

				// Fire off tracking requests
				amplify.publish('fxcm.form.onDemoComplete', {
					'formName': _settings.formName,
					'rb': _settings.rb,
					'db': _settings.db,
					'platform': conversionData.platform || 'n/a',
					'currency': _settings.currency || 'n/a',
					'formCountry': clientInfo.country || 'n/a',
					'product': conversionData.product || 'n/a'
				});

				// TODO set siteID via GTM
			}

			return returnValue;
		}
	}

	function _submitToFXTR(clientInfo, callback) {
		// Build the request URL base
		var requestURL = [thatDemo.FXTRSubmissionURL, '&rb=', _settings.rb, '&DB=', _settings.db];

		// Add clientInfo parameters
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof clientInfo[field] !== 'undefined' && typeof fxcm.Demo.prototype._demoFieldMap[field].fxtrName === 'string') {
				requestURL.push('&demo.', fxcm.Demo.prototype._demoFieldMap[field].fxtrName, '=', clientInfo[field]);
			}
		}

		// Add the campaign
		if (typeof _settings.campaign === 'string') {
			requestURL.push('&cmp=', _settings.campaign, '&tid=', thatDemo.generateTransactionID());
		}

		// Add the form name
		if (typeof _settings.formName === 'string' && _settings.formName !== '') {
			requestURL.push('&coReg=', _settings.formName);
		}

		// Setup the callback
		var callbackName = fxcm.lib.generateFunctionName(fxcm.lib.generateNumericID());
		window[callbackName] = callback || _FXTRCallback;
		requestURL.push('&callback=', callbackName);

		// Submit the request
		fxcm.lib.getScript(requestURL.join(''));

		return true;
	}

	function _FXTRCallback(data) {
		if (data.errors.length === 0) {
			if (typeof _settings.successCallback === 'function') {
				_settings.successCallback.call(this, data.username, data.password, thatDemo.getConversionData());
			}

			return true;
		} else {
			if (typeof _settings.errorCallback === 'function') {
				_settings.errorCallback.call(this, data.errors);
			}

			return false;
		}
	}

	function _submitToEloqua(clientInfo, callback) {
		var eloquaFormName = thatDemo.EloquaMaintenanceFormName || false;
		if (!eloquaFormName) { return false; }

		// Build the submitData object
		var submitData = {};
		for (var field in fxcm.Demo.prototype._demoFieldMap) {
			if (typeof clientInfo[field] !== 'undefined' && typeof fxcm.Demo.prototype._demoFieldMap[field].eloquaName === 'string') {
				switch(field) {
					case 'address':
						var fieldValue = clientInfo[field] + ' ' + (typeof clientInfo['address2'] === 'string' ? clientInfo['address2'] : '');
						break;

					case 'emailSignup':
						var fieldValue = clientInfo[field] === 'yes' ? 'Y' : 'N';
						break;

					default:
						var fieldValue = clientInfo[field];
						break;
				}
				submitData[fxcm.Demo.prototype._demoFieldMap[field].eloquaName] = fieldValue;
			} else if (field === 'emailSignup') {
				// Eloqua requires that we pass N if the box was unchecked, but unchecked boxes aren't passed at all by default, so we add it if it was missing
				submitData[fxcm.Demo.prototype._demoFieldMap[field].eloquaName] = 'N';
			}
		}

		// Add the RB
		if (typeof _settings.rb === 'string') {
			submitData['rb'] = _settings.rb;
		}

		// Add the DB
		if (typeof _settings.db === 'string') {
			submitData['DB'] = _settings.db;
		}

		// Add the campaign  (formatted for eloqua)
		if (typeof _settings.campaign === 'string') {
			submitData['CAMPAIGN_ID'] = _settings.campaign;
		}

		// Add the cmp and tid (formatted for FXDR)
		if (typeof _settings.campaign === 'string') {
			submitData['cmp'] = _settings.campaign;
			submitData['tid'] = thatDemo.generateTransactionID();
		}
		// Add the form name
		if (typeof _settings.formName === 'string') {
			submitData['CoReg'] = _settings.formName;
		}

		// Submit the request
		var eloquaRequest = new fxcm.Eloqua;
		eloquaRequest.setFormName(eloquaFormName);
		return eloquaRequest.submit(submitData, callback || _eloquaCallback);
	}

	function _eloquaCallback() {
		if (typeof _settings.successCallback === 'function') {
			_settings.successCallback.call(this);
		}

		return true;
	}

	function _submitToAdditionalTargets(clientInfo) {
		var submissionFunctions = {
				get: fxcm.lib.getURL,
				JSONP: fxcm.lib.getScript
			};

		for (var targetType in _settings.submissionTargets) {
			for (var targetIndex = 0; targetIndex < _settings.submissionTargets[targetType].length; targetIndex++) {
				var submissionTarget = _settings.submissionTargets[targetType][targetIndex];

				var submissionData = {};
				for (var field in clientInfo) {
					// Map field values
					if (typeof submissionTarget.valueMap === 'object' && typeof submissionTarget.valueMap[field] === 'object' && typeof submissionTarget.valueMap[field][clientInfo[field]] !== 'undefined') {
						clientInfo[field] = submissionTarget.valueMap[field][clientInfo[field]];
					}

					// Map field names
					if (typeof submissionTarget.fieldMap === 'object' && typeof submissionTarget.fieldMap[field] === 'string') {
						submissionData[submissionTarget.fieldMap[field]] = clientInfo[field];
					} else if (submissionTarget.extendOriginalFields) {
					// if extendOriginalFields is true, try to find the proper mapping for the current value, otherwise, drop the current field from this submissionTarget's data
						if (targetType === 'eloqua' && typeof fxcm.Demo.prototype._demoFieldMap[field] === 'object' && typeof fxcm.Demo.prototype._demoFieldMap[field].eloquaName === 'string') {
							submissionData[fxcm.Demo.prototype._demoFieldMap[field].eloquaName] = clientInfo[field];
						} else {
							submissionData[field] = clientInfo[field];
						}
					}
				}

				if (typeof submissionTarget.additionalData === 'object') {
					for (var field in submissionTarget.additionalData) {
						submissionData[field] = submissionTarget.additionalData[field];
					}
				}

				if (targetType === 'eloqua') {
					var eloquaSubmission = new fxcm.Eloqua();
					eloquaSubmission.setFormName(submissionTarget.formName);
					eloquaSubmission.submit(submissionData, submissionTarget.callback);
				} else if (targetType === 'get' || targetType === 'JSONP') {
					var submissionURL = [submissionTarget.target];
					if (submissionTarget.target.indexOf('?') === -1) {
						submissionURL.push('?');
					}

					for (var field in submissionData) {
						submissionURL.push('&', field, '=', submissionData[field]);
					}

					submissionFunctions[targetType].call(this, submissionURL.join(''), submissionTarget.callback);
				} else if (targetType === 'post') {
					fxcm.lib.ajaxPost(submissionTarget.target, submissionData, submissionTarget.callback);
				}
			}
		}

		return true;
	}

	function _defaultSuccessCallback(username, password) {
		/*
		if (typeof username === 'string' && typeof password === 'string') {
			console.log('user: ' + username + "\npass: " + password);
		} else {
			console.log('Successful non-FXTR submission!');
		}
		*/
	}

	function _defaultErrorCallback(errors) {
		//console.log(errors);
	}

	this.iframeLoad = function(iframe, layout) {
		// Fallback to default iframe id
		if (typeof iframe === 'undefined') {
			iframe = 'demo_reg';
		}

		// Dereference an id
		if (typeof iframe === 'string') {
			iframe = document.getElementById(iframe);
		}

		// Check that iframe is actually an iFrame
		if (!(fxcm.lib.isDOMElement(iframe) && iframe.tagName === 'IFRAME')) {
			return false;
		}

		// Check that the rb has been set
		if (!_settings.rb) { return false; }

		// Check that the db is in our list
		var db = _dbLookup(_settings.rb);
		if (!db) { return false; }

		var iframeURL = [thatDemo.FXTRiframeURL, '?ib=', _settings.rb, '&DB=', _settings.db];

		if (typeof layout === 'string') {
			iframeURL.push('&layout=', layout);
		}

		var sessionID = fxcm.lib.getURLParameter('jsessionid') || fxcm.lib.readCookie('JSESSIONID');
		var transactionID = fxcm.lib.getURLParameter('tid') || fxcm.lib.readCookie('tid') || thatDemo.generateTransactionID(sessionID);
		iframeURL.push('&tid=', transactionID);

		// Add the Campaign ID
		if (typeof _settings.campaign === 'string') {
			iframeURL.push('&cmp=', _settings.campaign);
		}

		var keyword = fxcm.lib.getURLParameter('keyword') || fxcm.lib.readCookie('keyword');
		if (keyword) {
			iframeURL.push('&keyword=', keyword);
		}

		iframe.src = iframeURL.join('');
	};

	// Constructor logic
	thatDemo.checkFXTRStatus();
	thatDemo.setRB(rb) || thatDemo.setCountryAccountType('united_kingdom', 'ts');
	thatDemo.setDB(_settings.rb, currency);
	thatDemo.setConversionData();
	thatDemo.setSuccessCallback(successCallback || _defaultSuccessCallback);
	thatDemo.setErrorCallback(_defaultErrorCallback);
	thatDemo.setCampaign(_getCampaign());
	thatDemo.bind(form);
};

fxcm.Demo.prototype.FXTRStatusURL = (document.location.protocol.substring(0,4) === 'http' ? '' : 'https:') + '//static.fxcm.co.uk/status/fxtr.php';
fxcm.Demo.prototype.FXTRSubmissionURL = 'https://secure4.fxcorporate.com/tr-demo/form/service/?format=jsonp';
fxcm.Demo.prototype.FXTRiframeURL = 'https://secure4.fxcorporate.com/fxtr/demo';
fxcm.Demo.prototype.EloquaMaintenanceFormName = 'FXCMDEMOMaintenanceUniversal';

fxcm.Demo.prototype.generateTransactionID = function(sessionID) {
	if (typeof sessionID === 'number') { sessionID = String(sessionID); }

	if (typeof sessionID !== 'string') {
		var suffixLength = 17;
		sessionID = fxcm.lib.padLeft(fxcm.lib.generateNumericID(suffixLength), '0', suffixLength);
	}

	var now = new Date();
	var transactionID = [fxcm.lib.padLeft(now.getFullYear() % 100, '0', 2),
		fxcm.lib.padLeft(now.getMonth() + 1, '0', 2),
		fxcm.lib.padLeft(now.getDate(), '0', 2),
		'_',
		sessionID];

	return transactionID.join('');
};

fxcm.Demo.prototype.isValidName = function(name) {
	return typeof name === 'string' && name.length <= 50;
};

fxcm.Demo.prototype.isValidEmail = function(email) {
	return fxcm.lib.isValidEmail(email) && email.length <= 50;
};

fxcm.Demo.prototype._demoPhoneRegEx = /^[+()_,.:a-zA-Z\-=0-9 *]{0,20}$/i;
fxcm.Demo.prototype.isValidPhone = function(phone) {
	return typeof phone === 'string' && (phone === '' || fxcm.Demo.prototype._demoPhoneRegEx.test(phone)) && phone.length <= 20;
};

fxcm.Demo.prototype._demoIMNetworks = ['', 'aol', 'yahoo', 'icq', 'msn', 'other'];
fxcm.Demo.prototype.isValidIMNetwork = function(imNetwork) {
	return typeof imNetwork === 'string' && fxcm.Demo.prototype._demoIMNetworks.indexOf(imNetwork) >= 0;
};

fxcm.Demo.prototype.isValidIMID = function(imID) {
	return typeof imID === 'string' && imID.length <= 255;
};

fxcm.Demo.prototype.isValidStreet = function(street) {
	return typeof street === 'string' && street.length <= 50;
};

fxcm.Demo.prototype.isValidAddress2 = function(address) {
	return typeof address === 'string' && address.length <= 255;
};

fxcm.Demo.prototype.isValidCity = function(city) {
	return typeof city === 'string' && city.length <= 50;
};

fxcm.Demo.prototype.isValidState = function(state) {
	return typeof state === 'string' && state.length <= 50;
};

fxcm.Demo.prototype.isValidZip = function(zip) {
	return (typeof zip === 'string' || typeof zip === 'number') && String(zip).length <= 10;
};

fxcm.Demo.prototype._demoCountryRegEx = /^[a-z_]*$/;
fxcm.Demo.prototype.isValidCountry = function(country) {
	// We don't include the white list here for forward-compatibility.  The only assumption is that all countries will continue to be lower case with _'s in place of spaces.
	return typeof country === 'string' && fxcm.Demo.prototype._demoCountryRegEx.test(country);
};

fxcm.Demo.prototype.isValidCompany = function(company) {
	return typeof company === 'string' && company.length <= 255;
};

fxcm.Demo.prototype._demoLanguages = ['', 'English', 'Traditional_Chinese', 'Simplified_Chinese', 'Bahasa_Malayu', 'Korean', 'Japanese', 'Vietnamese', 'Thai', 'Tagalog'];
fxcm.Demo.prototype.isValidLanguage = function(language) {
	return typeof language === 'string' && fxcm.Demo.prototype._demoLanguages.indexOf(language) >= 0;
};

fxcm.Demo.prototype._demoAccountTypes = ['', 'individual', 'joint', 'corporate', 'partnership', 'trust'];
fxcm.Demo.prototype.isValidAccountType = function(accountType) {
	return typeof accountType === 'string' && fxcm.Demo.prototype._demoAccountTypes.indexOf(accountType) >= 0;
};

fxcm.Demo.prototype._demoBalanceRegEx = /^\d{0,13}(\.\d{0,2})?$/;
fxcm.Demo.prototype.isValidBalance = function(balance) {
	return fxcm.Demo.prototype._demoBalanceRegEx.test(balance);
};

fxcm.Demo.prototype._demoAccountsRegEx = /^\d{1,4}$/;
fxcm.Demo.prototype.isValidAccounts = function(accounts) {
	return fxcm.Demo.prototype._demoAccountsRegEx.test(accounts) && accounts > 0;
};

fxcm.Demo.prototype._demoMargins = ['', '0', 'less50000', '50000_100000', 'more100000'];
fxcm.Demo.prototype.isValidMargin = function(margin) {
	return typeof margin === 'string' && fxcm.Demo.prototype._demoMargins.indexOf(margin) >= 0;
};

fxcm.Demo.prototype._demoDeposits = ['', '5000_24999', '25000_49999', '50000_99999', '100000_inf'];
fxcm.Demo.prototype.isValidDeposit = function(deposit) {
	return typeof deposit === 'string' && fxcm.Demo.prototype._demoDeposits.indexOf(deposit) >= 0;
};

fxcm.Demo.prototype._demoTraderTypes = ['', 'individual_investor', 'high_volume_trader', 'manager', 'ib_regulated_introducing_broker', 'ib_service_provider'];
fxcm.Demo.prototype.isValidTraderType = function(traderType) {
	return typeof traderType === 'string' && fxcm.Demo.prototype._demoTraderTypes.indexOf(traderType) >= 0;
};

fxcm.Demo.prototype._demoYearsForexExperience = ['0', '1', '2', '3', '4', '5+'];
fxcm.Demo.prototype.isValidForexExperience = function(forexExperience) {
	return typeof forexExperience === 'string' && (forexExperience === '' || fxcm.Demo.prototype._demoYearsForexExperience.indexOf(forexExperience) >=0);
};

fxcm.Demo.prototype._demoYearsEquitiesExperience = ['0', '1', '2', '3', '4', '5+'];
fxcm.Demo.prototype.isValidEquitiesExperience = function(equitiesExperience) {
	return typeof equitiesExperience === 'string' && (equitiesExperience === '' || fxcm.Demo.prototype._demoYearsEquitiesExperience.indexOf(equitiesExperience) >=0);
};

fxcm.Demo.prototype._demoYearsFuturesExperience = ['0', '1', '2', '3', '4', '5+'];
fxcm.Demo.prototype.isValidFuturesExperience = function(futuresExperience) {
	return typeof futuresExperience === 'string' && (futuresExperience === '' || fxcm.Demo.prototype._demoYearsFuturesExperience.indexOf(futuresExperience) >=0);
};

fxcm.Demo.prototype._demoExperienceLevels = ['', 'Novice', 'Intermediate', 'Expert'];
fxcm.Demo.prototype.isValidExperienceLevel = function(experienceLevel) {
	return typeof experienceLevel === 'string' && fxcm.Demo.prototype._demoExperienceLevels.indexOf(experienceLevel) >= 0;
};

fxcm.Demo.prototype._demoTradingFrequencies = ['', 'Never', 'Daily', 'Weekly', 'Occasionally'];
fxcm.Demo.prototype.isValidTradingFrequency = function(tradingFrequency) {
	return typeof tradingFrequency === 'string' && fxcm.Demo.prototype._demoTradingFrequencies.indexOf(tradingFrequency) >= 0;
};

fxcm.Demo.prototype.isValidReference = function(reference) {
	return typeof reference === 'string' && reference.length <= 255;
};

fxcm.Demo.prototype.isValidPreviousSignup = function(previousSignup) {
	return previousSignup === 'yes' || previousSignup === 'no';
};

fxcm.Demo.prototype.isValidFreeProduct = function(freeProduct) {
	return freeProduct === 'yes' || freeProduct === 'no';
};

fxcm.Demo.prototype.isValidEmailSignup = function(emailSignup) {
	return emailSignup === 'yes' || emailSignup === 'no';
};

fxcm.Demo.prototype._demoFieldMap = {
	firstName: {
		fxtrName: 'firstname',
		eloquaName: 'FNAME',
		validation: fxcm.Demo.prototype.isValidName,
		humanName: 'first name',
		required: false
	},
	lastName: {
		fxtrName: 'lastname',
		eloquaName: 'LNAME',
		validation: fxcm.Demo.prototype.isValidName,
		humanName: 'last name',
		required: true
	},
	email: {
		fxtrName: 'email_address',
		eloquaName: 'EMAIL',
		validation: fxcm.Demo.prototype.isValidEmail,
		humanName: 'e-mail address',
		required: true
	},
	phone: {
		fxtrName: 'phone',
		eloquaName: 'PHONE',
		validation: fxcm.Demo.prototype.isValidPhone,
		humanName: 'phone number',
		required: false
	},
	phone2: {
		fxtrName: 'alternative_phone',
		validation: fxcm.Demo.prototype.isValidPhone,
		humanName: 'alternative phone number',
		required: false
	},
	imNetwork: {
		fxtrName: 'im_provider',
		validation: fxcm.Demo.prototype.isValidIMNetwork,
		humanName: 'IM network',
		required: false
	},
	imID: {
		fxtrName: 'im_id',
		validation: fxcm.Demo.prototype.isValidIMID,
		humanName: 'IM screen name',
		required: false
	},
	street: {
		fxtrName: 'residental_address',  // Misspelled within the web service
		eloquaName: 'address',
		validation: fxcm.Demo.prototype.isValidStreet,
		humanName: 'street',
		required: false
	},
	address2: {
		fxtrName: 'address_misc',
		validation: fxcm.Demo.prototype.isValidAddress2,
		humanName: 'address 2',
		required: false
	},
	city: {
		fxtrName: 'city',
		eloquaName: 'city',
		validation: fxcm.Demo.prototype.isValidCity,
		humanName: 'city',
		required: false
	},
	state: {
		fxtrName: 'state_province',
		eloquaName: 'state',
		validation: fxcm.Demo.prototype.isValidState,
		humanName: 'state/province',
		required: false
	},
	zip: {
		fxtrName: 'zip_postal_code',
		eloquaName: 'zip',
		validation: fxcm.Demo.prototype.isValidZip,
		humanName: 'zip code',
		required: false
	},
	country: {
		fxtrName: 'country',
		eloquaName: 'COUNTRY',
		validation: fxcm.Demo.prototype.isValidCountry,
		humanName: 'country',
		required: true
	},
	company: {
		fxtrName: 'company_name',
		validation: fxcm.Demo.prototype.isValidCompany,
		humanName: 'company',
		required: false
	},
	language: {
		fxtrName: 'preferred_language',
		validation: fxcm.Demo.prototype.isValidLanguage,
		humanName: 'language',
		required: false
	},
	accountType: {
		fxtrName: 'desired_account_type',
		validation: fxcm.Demo.prototype.isValidAccountType,
		humanName: 'account type',
		required: false
	},
	balance: {
		fxtrName: 'initial_balance',
		validation: fxcm.Demo.prototype.isValidBalance,
		humanName: 'account balance',
		required: false
	},
	accounts: {
		fxtrName: 'number_accounts',
		validation: fxcm.Demo.prototype.isValidAccounts,
		humanName: 'number of accounts',
		required: false
	},
	margin: {
		fxtrName: 'expect_margin',
		validation: fxcm.Demo.prototype.isValidMargin,
		humanName: 'margin',
		required: false
	},
	deposit: {
		fxtrName: 'intended_amount',
		validation: fxcm.Demo.prototype.isValidDeposit,
		humanName: 'initial deposit',
		required: false
	},
	traderType: {
		fxtrName: 'which_describes_you',
		validation: fxcm.Demo.prototype.isValidTraderType,
		humanName: 'trader type',
		required: false
	},
	forexExperience: {
		fxtrName: 'trading_experiance_forex',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidForexExperience,
		humanName: 'years of forex trading experience',
		required: false
	},
	equitiesExperience: {
		fxtrName: 'trading_experiance_equities',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidEquitiesExperience,
		humanName: 'years of equities trading experience',
		required: false
	},
	futuresExperience: {
		fxtrName: 'trading_experiance_futures',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidFuturesExperience,
		humanName: 'years of futures trading experience',
		required: false
	},
	experienceLevel: {
		fxtrName: 'trading_experiance',	// Misspelled within the web service
		validation: fxcm.Demo.prototype.isValidExperienceLevel,
		humanName: 'forex trading experience level',
		required: false
	},
	tradingFrequency: {
		fxtrName: 'trading_frequency',
		validation: fxcm.Demo.prototype.isValidTradingFrequency,
		humanName: 'trading frequency',
		required: false
	},
	reference: {
		fxtrName: 'where_did_you_hear',
		validation: fxcm.Demo.prototype.isValidReference,
		humanName: 'reference',
		required: false
	},
	previousSignup: {
		fxtrName: 'previously_signed_up',
		validation: fxcm.Demo.prototype.isValidPreviousSignup,
		humanName: 'status of previous signup',
		required: false
	},
	freeProduct: {
		fxtrName: 'send_me_free_product',
		validation: fxcm.Demo.prototype.isValidFreeProduct,
		humanName: 'free product opt-in',
		required: false
	},
	emailSignup: {
		fxtrName: 'email_me_training_material',
		eloquaName: 'PROD_INFO_MKT',
		validation: fxcm.Demo.prototype.isValidEmailSignup,
		humanName: 'email opt-in',
		required: false
	}
};
fxcm.Eloqua = fxcm.lib.makeClass();
fxcm.Eloqua.prototype.init = function(formName, form, callback) {
	var thatEloqua = this;
	var _settings = {};
	
	this.setFormName = function(formName) {
		if (typeof formName !== 'string') { return false; }
		
		return _settings.formName = formName;
	};
	
	this.getFormName = function() {
		return _settings.formName;
	};
	
	this.setCallback = function(callback) {
		if (typeof callback !== 'function') { return false; }
		
		return _settings.callback = callback;
	};
	
	this.getCallback = function() {
		return _settings.callback;
	};
	
	this.bind = function(form, formName) {
		// Dereference an id
		if (typeof form === 'string') {
			form = document.getElementById(form);
		}
		
		// Confirm that "form" is a form
		if (!(fxcm.lib.isDOMElement(form) && form.tagName === 'FORM')) {
			return false;
		}
		
		// Capture the formName if it is present on the form or was passed in
		var formName = fxcm.lib.serializeForm(form)['elqFormName'] || formName;
		if (typeof formName === 'string') {
			thatEloqua.setFormName(formName);
		}
		
		// Attach submit handler
		return fxcm.lib.addEventHandler(form, 'submit', _submitHandler);
	};
	
	function _submitHandler(event) {
		// Scrape the form
		var formData = fxcm.lib.serializeForm(this);
		
		if (typeof event === 'object') {	// _submitHandler is handling a submit event
			thatEloqua.submit(formData);	// Submit the request
			
			return fxcm.lib.cancelEvent(event);	// Cancel the form submission
		} else {	// _submitHandler was manually invoked by submit because a form was passed in
			return thatEloqua.submit(formData, event);	// Submit the request, event is the callback in this case
		}
	}
	
	// Submits submissionData, an object of key/value pairs, and invokes callback after
	this.submit = function(submissionData, callback) {
		//**** BEGIN check for submit being called with a form as the first parameter ****
		// Dereference an ID
		if (typeof submissionData === 'string') {
			submissionData = document.getElementById(submissionData);
			if (submissionData === null) { return false; }
		}
		
		// If submissionData is a DOM element, confirm that it's a form then reinvoke submit with the scraped data
		if (fxcm.lib.isDOMElement(submissionData)) {
			if (submissionData.tagName === 'FORM') {
				return _submitHandler.call(submissionData, callback);
			} else {
				return false;
			}
		}
		//***** END check for submit being called with a form as the first parameter *****
		
		// If submissionData contains an elqFormName, override the setting
		if (typeof submissionData['elqFormName'] === 'string') {
			thatEloqua.setFormName(submissionData['elqFormName']);
			delete submissionData['elqFormName'];
		}
		
		// Confirm that formName has been set and submissionData is either undefined or a non-null object
		if (typeof _settings.formName !== 'string' ||	// The formName must be set
				!(
					typeof submissionData === 'undefined' || 	// Allow no submissionData to be passed in
					(typeof submissionData === 'object' && submissionData !== null)	// Otherwise submissionData must be a non-null object
				)
			) {
			return false;
		}
		
		// Build the request URL base
		var requestURL = [thatEloqua.submissionURL]
		
		// Add the Eloqua site ID
		requestURL.push('?elqSiteID=' + thatEloqua.elqSiteID);
		
		// Add the salesforce oid
		requestURL.push('&oid=' + thatEloqua.oid);

		// Add the Eloqua Form Name
		requestURL.push('&elqFormName=', _settings.formName);
		
		// Add submissionData parameters
		for (var field in submissionData) {
			requestURL.push('&', field, '=', submissionData[field]);
		}
		
		// Submit the request
		fxcm.lib.getURL(requestURL.join(''), callback || _settings.callback);
		
		return true;
	};
	
	// Constructor logic
	thatEloqua.setFormName(formName);
	thatEloqua.bind(form);
	thatEloqua.setCallback(callback);
};

fxcm.Eloqua.prototype.submissionURL = 'http://s202.t.eloqua.com/e/f2';
fxcm.Eloqua.prototype.elqSiteID = '202';
fxcm.Eloqua.prototype.oid = '00D30000000010t';
fxcm.Flowplayer = fxcm.lib.makeClass();
fxcm.Flowplayer.prototype.init = function(player, playlist) {
	var thatFlowplayer = this;

	var _settings = {};
		
	this.getPlayer = function(){
		return _settings.player;
	};

	this.getPlaylist = function(){
		return _settings.playlist;
	};
	
	this.loadPlayer = function(player, playlist){
		if (typeof player === 'undefined') {return false};
		
		var _player = _setPlayer(player);
		if(!_player){ return false; }

		_setPlaylist(_player, playlist);
	};

	function _setPlayer(player){
		if (typeof player === 'undefined') {return false;}

		// Check if we have an already installed flowplayer element. If not, we validate and install it.
		if(_isInstalledPlayer(player)) {	// passed in an installed flowplayer element
			var _installedPlayer = player;	
		} else {	// passed in a raw string, jquery element or DOM element
			if (typeof player === 'string') {
				player = document.getElementById(player);
			} else if (player && fxcm.lib.isJqueryElement(player)){
				player = player[0];
			}

			if (!fxcm.lib.isDOMElement(player)) { // no player DOM element, bomb out
				return false;
			}
			var _installedPlayer = _installPlayer(player) || false;
		}

		if (!_installedPlayer) { return false; }

		return _settings.player = _installedPlayer;
	}

	function _installPlayer(player) {
		if (typeof player === 'undefined') {return false;}

		// Find key for current site (remove subdomains)
		var siteKey = location.hostname.split('.').slice(1).join('.');

		// Create Flowplayer instance
		var _instance = $f(player, thatFlowplayer.coreSWF, {
			key: thatFlowplayer.keyMap[siteKey] || '',
			logo: null,
			clip: FlowplayerClip({
				scaling: 'fit',
				autoPlay: true,
				autoBuffering: true
			})
		});

		if (!_isInstalledPlayer(_instance)){ return false; }

		return _instance;
	}

	function _setPlaylist(player, playlist){
		if (!player) {return false;}

		// check first for passed in playlist. If not, grab href from player element.
		if (typeof playlist === 'undefined' && _isInstalledPlayer(player)) {	// passed in an installed player
			var _sanitized = [player.getParent().getAttribute('href')];
		} else if(fxcm.lib.isArray(playlist)){	// passed in an array of video urls
			var _sanitized = playlist;
		} else if (playlist && fxcm.lib.isDOMElement(document.getElementById(playlist))){	// passed in a playlist DOM element
			var _sanitized = document.getElementById(playlist);
		} else if (typeof playlist === 'string'){	// passed in a video url string
			var _sanitized = [playlist];
		}

		if (!_sanitized) { return false; }

		_settings.playlist = _sanitized;
		_applyPlaylist(player, _sanitized);

	}

	function _applyPlaylist(player, playlist){
		if (typeof player === 'undefined' || !_isInstalledPlayer(player)) {return false;}

		var _videos = [];

		if (fxcm.lib.isArray(playlist)){
			_videos = playlist;
		} else if (fxcm.lib.isDOMElement(playlist)){				
			// Passed in a DOM element as playlist - grab first video to pass to flowplayer's setPlaylist function. This enables the video to play on page load.
			_videos.push(playlist.getElementsByTagName("A")[0].getAttribute('href'));	

			/* Attach playlist plugin functionality - 
			Flowplayer's playlist plugin expects a css selector like "div#myPlayer"
			http://stackoverflow.com/questions/3568570/why-wont-my-playlist-work */
			player.playlist('#' + playlist.getAttribute('id'), {loop:true});
		}

		/* Pass the video array into flowplayer's setPlaylist function - 
		Flowplayer requires you to call setPlaylist() within an onload function
		http://flash.dev72.flowplayer.org/forum/3/38866 */
		player.onLoad(function()  {
			this.setPlaylist(_videos);
		});
	}

	function _isInstalledPlayer(player){
		if(typeof player !== 'undefined' && typeof flowplayer === 'function' && $f('*').length > 0){
			var _installed = false;
			for (var i = 0; i < $f('*').length; i++) {
				if ($f(i) === player) {
					_installed = true;
				}
			}
			return _installed;
		} 
	}

	// Constructor logic
	// Check if core flowplayer script is loaded or not
	if(typeof flowplayer !== 'function'){	// flowplayer is not yet loaded
		fxcm.lib.getScript(thatFlowplayer.coreScript, function(){
			thatFlowplayer.loadPlayer(player, playlist);
		});
	} else {		// flowplayer is already loaded
		thatFlowplayer.loadPlayer(player, playlist);		
	}

};

fxcm.Flowplayer.prototype.coreScript = '/proto/assets/script/flowplayer.js';
fxcm.Flowplayer.prototype.coreSWF = (document.location.protocol.substring(0,4) === 'http' ? '' : 'https:') + '//devorahthedeveloper.com/proto/assets/flash/flowplayer.commercial-3.1.5.swf';
fxcm.Flowplayer.prototype.keyMap = {};
fxcm.internal = new function() {
	var thatInternal = this;

	// Maps special characters to their non-special equivalents.
	this.specialCharMap = {
		'Ã ': 'a',
		'Ã¢': 'a',
		'Ã¤': 'ae',
		'Ã¦': 'ae',
		'Ã§': 'c',
		'Ã©': 'e',
		'Ã¨': 'e',
		'Ãª': 'e',
		'Ã«': 'e',
		'Ã®': 'i',
		'Ã¯': 'i',
		'Ã´': 'o',
		'Ã¶': 'oe',
		'Å“': 'oe',
		'Ã¹': 'u',
		'Ã»': 'u',
		'Ã¼': 'ue',
		'ÃŸ': 'ss',
		'Ã¿': 'y'
	};


	/* Concatenates all functions that are passed in and appends all strings as html within a div to the body
	Usage:

	var trackingFunction = fxcm.internal.trackingFactory(someFunction, '<img src="trackingPixel" />', trackingRelatedFunction);
	...
	trackingFunction();
	*/
	this.trackingFactory = function() {
		var outterArguments = arguments;

		return function() {
			for (var argumentIndex = 0; argumentIndex < outterArguments.length; argumentIndex++) {
				var outterArgument = outterArguments[argumentIndex];
				if (typeof outterArgument === 'string') {
					var trackingDiv = document.createElement('div');
					trackingDiv.innerHTML = outterArgument;
					trackingDiv.setAttribute('style', 'display: none');
					document.body.appendChild(trackingDiv);
				} else if (typeof outterArgument === 'function') {
					outterArgument.apply(this, arguments);
				}
			}
		};
	};

	// Generalized function for jQuery submitHandlers that redirect the user after form submission
	function _AJAXFormRedirectValidatorSubmitHandlerFactory(continuationFunction, redirectURL, id) {
		if (typeof redirectURL !== 'string') { return null; }

		var callback = function() { document.location.href = redirectURL; };

		var continuationArguments = fxcm.lib.shiftArray(arguments, 2);
		continuationArguments.unshift(callback);

		return continuationFunction.apply(this, continuationArguments);
	}

	/* Generalized function for creating jQuery Validator submitHandlers
	Class is the conversion type's class (fxcm.Eloqua or fxcm.Demo)
	callback is the callback function on success
	idSetter is the function for setting the conversion's id ('setFormName' or 'setRB')
	id is the conversion's id (the formName or the RB) */
	function _AJAXFormValidatorSubmitHandlerFactory(Class, successCallbackSetter, successCallback, idSetter, id, configFunction) {
		var outterArguments = arguments;

		return function(form) {
			$(form).find('input[type=submit], input[type=button], input[type=image]').attr({disabled: true});	// Disable the form to prevent multiple submissions

			var conversion = new Class();

			// set the ID
			if (typeof id === 'string') {
				conversion[idSetter].apply(this, fxcm.lib.shiftArray(outterArguments, 4));	// Remove all arguments before id
			}


			if (typeof successCallback === 'string') {	// Generic Eloqua
				var internalCallback = function() {
						var confBox = $('<div class="confBox" style="display:block">' + successCallback + '</div>');
						_copyClasses(form, confBox, '_conf');
						$(form).closest('.formBox').replaceWith(confBox);
					};
			} else if (typeof successCallback === 'object') {	// Generic Demo
				var internalCallback = function(username, password) {
						if (typeof username === 'string' && typeof password === 'string')  {
							var confText = successCallback.fxtr;
							confText = confText.replace('%username%', username).replace('%password%', password);
						} else {
							var confText = successCallback.eloqua;
						}
						var confBox = $('<div class="confBox" style="display:block">' + confText + '</div>');
						_copyClasses(form, confBox, '_conf');
						$(form).closest('.formBox').replaceWith(confBox);
					};
			} else if (typeof successCallback === 'function') {	// Non-generic
				var internalCallback = function() {
						Array.prototype.unshift.call(arguments, form);
						successCallback.apply(this, arguments);
					};
			} else {
				var internalCallback = function() {};
			}

			// Run the configuration function
			if (typeof configFunction === 'function') {
				configFunction(conversion);
			}

			conversion[successCallbackSetter].call(this, internalCallback);

			/****** Begin demo-specific logic ******/

			if (idSetter === 'setRB') { // If current form is a demo

				// Create logic for swapping characters
				function replaceSpecialChars(value){
					// Break field value into separate words, then run each word through the replace function, swapping out special chars while keeping original capitalization
					// Returns a string
					return $.map(value.split(' '), function(arrayPart, arrayIndex){

						// Begin regex replace
						return arrayPart.replace(/./g, function (character, index, word){

							var cleanChar = character; // if character is not a special char, we will return it unmodified
							var isLowerCase = character === character.toLowerCase();
							var adjacent = word.charAt(index + 1);

							// Replace character and figure out correct capitalization
							if (fxcm.internal.specialCharMap[character.toLowerCase()]) {
								cleanChar = fxcm.internal.specialCharMap[character.toLowerCase()]; // Find replacement character
								cleanChar = isLowerCase ? cleanChar : function(char, adj){ // Set proper capitalization
									return (char.length === 2 && adj !== '' && adj === adj.toLowerCase() ) ? // Check if this is a two-letter replacement that needs mixed case
										char.charAt(0).toUpperCase() + char.charAt(1) : // If yes, capitalize only the first letter
										char.toUpperCase();								// Otherwise, capitalize both letters
								}(cleanChar, adjacent);
							}

							return cleanChar;
						}); // End regex replace

					}).join(' '); // End $.map
				}

				// Scrape values from submitted form
				var originalForm = fxcm.lib.serializeForm(form);
				var sanitizedForm = document.createElement('form');
				sanitizedForm.setAttribute('name', form.name);
				var newField;

				// Swap out special chars and generate sanitized form to submit to fxcm.Demo
				for (field in originalForm) {
					var val = originalForm[field];

					if(val !== '') { // only bring over populated fields
						if (field.indexOf('demo.') > -1) { // replace special chars only for "demo." fields
							val = replaceSpecialChars(val);
						}
						newField = document.createElement('input');
						newField.name = field;
						newField.type = 'hidden';
						newField.value = val;
						sanitizedForm.appendChild(newField);
					}
				}
			}
			/****** End special character logic ******/

			// Submit - submits "sanitizedForm" in the case of demos and "form" in the case of eloqua
			conversion.submit(sanitizedForm || form);

		};
	}
	// Copies the classes from source to destination, optionally adding suffix
	function _copyClasses(source, destination, suffix) {
		if (typeof suffix !== 'string') { suffix = ''; }

		var classes = $(source).attr('class').split(' ');
		destination = $(destination);
		for (var classIndex = 0; classIndex < classes.length; classIndex++) {
			destination.addClass(classes[classIndex] + suffix);
		}
	}

	/********************* BEGIN Demo submitHandlers ****************/
	/* How to setup the jQuery Validate submitHandler for Demo forms

	Show the on-page confBox:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxDemoValidatorSubmitHandler;

	Show the generic Thank You text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericDemoValidatorSubmitHandler;

	Custom callback function:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoValidatorSubmitHandlerFactory(yourFunction, optionalRB);

	Custom confirmation text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoValidatorSubmitHandlerFactory('confirmationText', optionalRB);

	Redirect:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoRedirectValidatorSubmitHandlerFactory('redirectURL', optionalRB);

	Do nothing after submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoValidatorSubmitHandlerFactory();

	Show the on-page confBox with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxCountryDemoValidatorSubmitHandler;

	Show the generic Thank You text with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericCountryDemoValidatorSubmitHandler;

	Custom callback function with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryValidatorSubmitHandlerFactory(yourFunction);

	Custom confirmation text with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryValidatorSubmitHandlerFactory('confirmationText');

	Redirect with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryRedirectValidatorSubmitHandlerFactory('redirectURL');

	Do nothing after submission with the selected country determining the RB:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.demoCountryValidatorSubmitHandlerFactory();

	Custom tracking on form submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.trackingFactory(fxcm.internal.confBoxDemoValidatorSubmitHandler, '<img src="trackingPixel" />', otherTrackingFunction); */



	/* Produces a submitHandler function for jQuery Validator on Demo forms
	The rb field can be left off the form if desired and instead passed in as the second parameter to demoValidatorSubmitHandlerFactory
	Usage:
	callback is not passed in (undefined): The form submits and no UI changes are made
	callback is a function: Invokes the callback after the form submits
	callback is text: Replaces the form with a confBox containing the text after the form submits */
	this.demoCountryRedirectValidatorSubmitHandlerFactory = function(redirectURL) {
		return _AJAXFormRedirectValidatorSubmitHandlerFactory(thatInternal.demoCountryValidatorSubmitHandlerFactory, redirectURL);
	};

	this.demoCountryValidatorSubmitHandlerFactory = function(callback) {
		return function(form) {
			var handler = _AJAXFormValidatorSubmitHandlerFactory(fxcm.Demo, 'setSuccessCallback', callback, 'setCountry', $(form).find('select[name=demo.country]').val());

			return handler(form);
		};
	};

	this.demoRedirectValidatorSubmitHandlerFactory = function(redirectURL, rb) {
		return _AJAXFormRedirectValidatorSubmitHandlerFactory(thatInternal.demoValidatorSubmitHandlerFactory, redirectURL, rb);
	};

	this.demoValidatorSubmitHandlerFactory = function(callback, rb, configFunction) {

		if (typeof rb === 'function' && configFunction === undefined) { // Did not pass in id but passed in configFunction
			configFunction = rb;
			rb = undefined;
		}

		return _AJAXFormValidatorSubmitHandlerFactory(fxcm.Demo, 'setSuccessCallback', callback, 'setRB', rb, configFunction);
	};

	// Hides the demo form and shows the confirmation div
	this.showDemoConfBox = function(form, username, password, conversionData) {
		var formParent = $(form).closest(".formBox");
		var confParent = formParent.next('.confBox');
		var server = confParent.find('span.demoServer');

		if (typeof username === 'string' && typeof password === 'string') {	// FXTR signup
			confParent.find('.success').find('span.demoUsername').text(username);
			confParent.find('.success').find('span.demoPassword').text(password);

			// show server if available
			if (typeof conversionData.server === 'string' && server.length) { 
				server.text(conversionData.server);
			}			
		} else {	// Maintenance signup
			confParent.find('.maint').show();
		}

		formParent.hide();
		confParent.find('.success').show();
		confParent.fadeIn(100);
	};

	// Shows the confBox that already exists on the page after the form submits
	this.confBoxDemoValidatorSubmitHandler = thatInternal.demoValidatorSubmitHandlerFactory(thatInternal.showDemoConfBox);
	this.confBoxCountryDemoValidatorSubmitHandler = thatInternal.demoCountryValidatorSubmitHandlerFactory(thatInternal.showDemoConfBox);

	// Replaces the form with generic Thank You text after the form submits
	var _genericFXTRConfText = {
									fxtr:'<h3>Congratulations</h3> <p>You have successfully signed up for a demo account. Your username and password are below:</p> <p><strong>Username:</strong> %username% <br /> <strong>Password:</strong> %password%</p>',
									eloqua:'<h3>Thank you</h3> <p>Our demo registration is currently unavailable due to routine weekend maintenance. When the system again becomes available, a representative will send your demo account login information to the e-mail address you provided.</p>'
								};
	this.genericDemoValidatorSubmitHandler = thatInternal.demoValidatorSubmitHandlerFactory(_genericFXTRConfText);
	this.genericCountryDemoValidatorSubmitHandler = thatInternal.demoCountryValidatorSubmitHandlerFactory(_genericFXTRConfText);
	/********************** END Demo submitHandlers *****************/


	/********************* BEGIN Eloqua submitHandlers ****************/
	/*How to setup the jQuery Validate submitHandler for Eloqua forms
	Show the on-page confBox:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxEloquaValidatorSubmitHandler;

	Show the generic Thank You text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericEloquaValidatorSubmitHandler;

	Custom callback function:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaValidatorSubmitHandlerFactory(yourFunction);

	Custom confirmation text:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaValidatorSubmitHandlerFactory('confirmationText');

	Redirect:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaRedirectValidatorSubmitHandlerFactory('redirectURL');

	Do nothing after submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.eloquaValidatorSubmitHandlerFactory();

	Custom tracking on form submission:
	jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.trackingFactory(fxcm.internal.confBoxEloquaValidatorSubmitHandler, '<img src="trackingPixel" />', otherTrackingFunction); */



	/* Produces a submitHandler function for jQuery Validator on Eloqua forms
	The elqFormName field can be left off the form if desired and instead passed in as the second parameter to eloquaValidatorSubmitHandlerFactory
	Usage:
	callback is not passed in (undefined): The form submits and no UI changes are made
	callback is a function: Invokes the callback after the form submits
	callback is text: Replaces the form with a confBox containing the text after the form submits */
	this.eloquaRedirectValidatorSubmitHandlerFactory = function(redirectURL, formName) {
		return _AJAXFormRedirectValidatorSubmitHandlerFactory(thatInternal.eloquaValidatorSubmitHandlerFactory, redirectURL, formName);
	};

	this.eloquaValidatorSubmitHandlerFactory = function(callback, formName) {
		return _AJAXFormValidatorSubmitHandlerFactory(fxcm.Eloqua, 'setCallback', callback, 'setFormName', formName);
	};

	// Hides the form and shows the confirmation div
	this.showEloquaConfBox = function(form) {
		var formParent = $(form).closest('.formBox');
		formParent.hide();
		formParent.next('.confBox').fadeIn(100);
	};

	// Shows the confBox that already exists on the page after the form submits
	this.confBoxEloquaValidatorSubmitHandler = thatInternal.eloquaValidatorSubmitHandlerFactory(thatInternal.showEloquaConfBox);

	// Replaces the form with generic Thank You text after the form submits
	this.genericEloquaValidatorSubmitHandler = thatInternal.eloquaValidatorSubmitHandlerFactory('<h3>Thank you</h3> <p>Your information has been received and will be processed shortly.</p>');
	/********************** END Eloqua submitHandlers *****************/

	this.generateLivePersonProfile = function() {
		if (typeof jPersist === 'object') {
			for (var namespace in jPersist) {
				if (typeof jPersist[namespace] === 'object') {
					for (property in jPersist[namespace]) {
						lpAddVars('page', namespace + '_' + property, jPersist[namespace][property]);
					}
				}
			}
		}

		if (typeof redirectData === 'object') {
			lpAddVars('page', 'country', redirectData.country);
		}
	};


	/********************* BEGIN Seminar Events Eloqua and Demo Functions ****************/
	/* Callback function for Eloqua Forms "confBoxSeminarDemoCoreg"
	Functionality which signs users for seminars/webinars and, if opted for, simultaneously signs up for a demo account.
	Required: rb (string), formName (string)
	Optional: demoFired (bool).
	*/
	this.seminarDemoCoregTrackingCallback = function(rb, formName, demoFired) {
		if (typeof rb !== 'string') { return false; }
		if (typeof demoFired !== "boolean") { demoFired = false; }

		// Fire GTM seminar complete event
		if (typeof fxcmgtm === 'object') {
			fxcmgtm.recordSeminar(formName.toLowerCase());
		}

		// Fire Site Catalyst tracking
		if (typeof s === "object") {
			s.events = s.apl(s.events,'event79',',',1); // seminar signup event

			// only fires if user signed up for demo
			if(demoFired){
				if (typeof fxcmsc === "object") {
					fxcmsc.recordDemo(rb);
				}
			}
			else {
				s.t();
			}
		}
	};

	/*
		Find and tranform demo country field; append new input element if it does not already exist
	*/
	this.setDemoCountryField = function(countryField) {
		var countryField = $(countryField);

		// demo format: lowercase, underscores for spaces and dashes, parenthesis and periods removed
		var countrySelected = countryField.val().toLowerCase().replace(/[ \-]/g,"_").replace(/[()\.]/g,"");
		if ($('input[name="demo.country"]').length > 0) {
			$('input[name="demo.country"]').val(countrySelected);
		}
		else {
			$('<input>').attr('type','hidden').attr('name','demo.country').val(countrySelected).appendTo(countryField.closest('form'));
		}
	};

	/*
		Show/hide demo requested spans within confBox
	*/
	this.toggleDemoConfText = function(demoRequested) {
		if (demoRequested) {
			$('.demo-not-requested').hide();
			$('.demo-requested').show();
		}
		else {
			$('.demo-not-requested').show();
			$('.demo-requested').hide();
		}
	};
	/********************* END Seminar Events Eloqua and Demo Functions ****************/


	/********************* BEGIN Eloqua Campaign ID ****************/

    this.setEloquaCampaignID = function(form){
        // Get reference to cmp value first from url  param and then from cookie
        var cmp = fxcm.lib.getURLParameter('CMP') || (typeof jPersist === 'object' && typeof jPersist.visitor === 'object' && typeof jPersist.visitor.campaign === 'string' && jPersist.visitor.campaign);

        if(!form) {
            // User didn't pass in a form. Try to find a likely candidate on page.
            form = $('.confBoxEloqua').length > 0 ? $('.confBoxEloqua') : $('.confBoxDemo').length > 0 ? $('.confBoxDemo') : $('.confBoxSeminarDemoCoreg').length > 0 ? $('.confBoxSeminarDemoCoreg') : $();
        } else {
            // User passed in form
            form = $(form);
        }

        if (form.length < 1 || !cmp) {return false;} // no form or no cmp, return false;

        // Check for existence of cmp field on form
        var cmpField = form.find('input[name="Campaign_ID"]');
        if (cmpField.length < 1) {
            cmpField = $('<input type="hidden" name="Campaign_ID" />');
            form.append(cmpField);
        }

        // Update cmp field value
        cmpField.val(cmp.replace(/^SFS-/i, ''));
    };


	/********************* END Eloqua Campaign ID ****************/
	
	
	/********************* BEGIN Create Globalize Instance ****************/
	/*
		If there is no Globalize object detected, create a prototype with base methods returning formatted values from the data object.
		IMPORTANT: Only spreads formatting values are supported. CFD Oil Tables are not supported.
	*/
	this.createTempGlobalize = function() {

		var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
		var monthNamesAbr = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];

		var culture = {
			calendar: {
				patterns: {
					dmy: "MMMM d, yyyy", // Show month date, year (added)
					m: "MMMM", // Show just the name of the month (added)
					dm: "dd-MMM" // Show the date and abbrevaited month (added)
				}
			}
		};

		var Globalize = function Globalize() {};

		Globalize.culture = function() {
			return culture;
		};

		Globalize.localize = function(message) {
			return message;
		};

		Globalize.format = function(value, view) {
			switch (view) {
				case 'n1': // for spreads with 1 decimal place
					return value.toFixed(1);
				case 'p0': // for savings percentage 0 decimal places
					return ((value * 100).toFixed(0) + "%") ;
				case 'p2': // for savings percentage 2 decimal places
					return ((value * 100).toFixed(2) + "%") ;
				case 'Y': // for spreads date
					return (monthNames[value.getMonth()] + " " + value.getFullYear());
				case 'MMMM d, yyyy': // for spreads date
					return (monthNames[value.getMonth()] + " " + value.getDate() + ", " + value.getFullYear());
				case 'MMMM': // for oil month only date
					return (monthNames[value.getMonth()]);
				case 'dd-MMM': // for oil date-month date
					return (value.getDate() + "-" + monthNamesAbr[value.getMonth()]);
				default:
					return value.toString();
			}
		};

		window.Globalize = Globalize; // bring scope of this Globalize to the global window
	};

	this.globalizeExists = function() {
		var exists = (typeof Globalize === 'function');

		if(!exists) {
			thatInternal.createTempGlobalize();
		}

		return exists;
	};
	/********************* END Create Globalize Instance ****************/

}();
if (typeof jPersist === 'undefined') {
    var jPersist = new function() {
        var _settings = {};
        _settings.cookieLife = {};
        var _maxCookieLife = 1000*60*60*24 * 90;    // Track visitors for 90 days by default (most browsers enforce this cap on max cookie length, so set it for consistency)
        var _defaultVisitTimeout = 1000*60 * 30;    // Default visit timeout is 30 minutes from last page view

        this.setCookiePrefix = function(prefix) {
            if (typeof prefix !== 'string') { return false; }

            _settings.prefix = prefix;   // Allow illegal cookie characters because they'll be encoded by _writeCookie

            _load();

            return _settings.prefix;
        };

        this.getCookiePrefix = function() {
            return _settings.prefix;
        };

        this.setLifetime = function(namespace, lifetime) {
            if (typeof namespace !== 'string' || typeof lifetime !== 'number') { return false; }

            return _settings.cookieLife[namespace] = lifetime;
        };

        this.getLifetime = function(namespace) {
            if (typeof namespace !== 'string') { return false; }

            return _settings.cookieLife[namespace];
        };

		// TODO: Fix issue where setting a new cookie prefix after the old one has stored values will cause the new prefix to inherit the old values.
        function _load() {
            var allCookies = document.cookie.split('; ');
            for (var cookieIndex=0; cookieIndex < allCookies.length; cookieIndex++){
                var propertyComponents = allCookies[cookieIndex].match('^\\s*' + encodeURIComponent(_settings.prefix) + '(.+?)=(.+?)\\s*$');
                if (propertyComponents) {
                    if (propertyComponents[1] === '.cookieLife') {
                        _settings.cookieLife = JSON.parse(decodeURIComponent(propertyComponents[2]));
                    } else {
                        _thatjPersist[decodeURIComponent(propertyComponents[1])] = JSON.parse(decodeURIComponent(propertyComponents[2]));
                    }
                }
            }

            // Clear out expired objects' lifetime settings
            for (var memberName in _settings.cookieLife) {
                if (typeof _thatjPersist[memberName] === 'undefined') {
                    delete _settings.cookieLife[memberName];
                }
            }

            if (typeof _thatjPersist.visitor === 'undefined') {
                _thatjPersist.visitor = {};
                _thatjPersist.visitor.pageViews = 0;
                _thatjPersist.visitor.visits = 0;
                _thatjPersist.setLifetime('visitor', _maxCookieLife);
            }
            if (typeof _thatjPersist.visit === 'undefined') {
                _thatjPersist.visit = {};
                _thatjPersist.visit.pageViews = 0;
                _thatjPersist.setLifetime('visit', _defaultVisitTimeout);
            }

            return _thatjPersist.recordPageView();
        }

        this.recordPageView = function() {
            if (typeof _thatjPersist.visitor === 'object') {
                if (typeof _thatjPersist.visit === 'object' && _thatjPersist.visit.pageViews === 0) { // New Visit
                    _thatjPersist.visitor.visits++;
                }
                _thatjPersist.visitor.pageViews++;
            }
            if (typeof _thatjPersist.visit === 'object') {
                _thatjPersist.visit.pageViews++;
            }

            return _thatjPersist.save();
        }

        this.recordNewVisit = function() {
            if (typeof _thatjPersist.visit !== 'object') { _thatjPersist.visit = {}; }
            _thatjPersist.visit.pageViews = 0;

            if (typeof _settings.cookieLife.visit === 'undefined') {
                _settings.cookieLife.visit = _defaultVisitTimeout;
            }

            return _thatjPersist.recordPageView();
        }

        this.save = function() {
            // Store object namespaces as cookies
            var options = { expires: new Date() };
            var now = new Date().getTime();
            for (var memberName in _thatjPersist) {
                if (typeof _thatjPersist[memberName] !== 'function') {
                    var cookieName = _settings.prefix + memberName;
                    var cookieValue = JSON.stringify(_thatjPersist[memberName]);
                    options.expires.setTime(now + (_settings.cookieLife[memberName] || _settings.cookieLife.visitor || _maxCookieLife));    // Set expiration to this namespace's expiration if one has been set, otherwise fallback to visitor, then the max cookie life

                    _writeCookie(cookieName, cookieValue, options);
                }
            }

            // Store cookie lifetimes
            options.expires.setTime(now + (_settings.cookieLife.visitor || _maxCookieLife));
            _writeCookie(_settings.prefix + '.cookieLife', JSON.stringify(_settings.cookieLife), options);

            return true;
        };

        this.kill = function(namespace) {
            if (typeof namespace !== 'string' || namespace === 'visit' || namespace === 'visitor') { return false; }

            delete _thatjPersist[namespace];
            delete _settings.cookieLife[namespace];
            return _deleteCookie(_settings.prefix + namespace);
        };

        function _readCookie(name) {
            if (typeof fxcm === 'object' && typeof fxcm.lib === 'object' && typeof fxcm.lib.writeCookie === 'function') {
                return fxcm.lib.readCookie(name);
            } else {
                if (typeof name !== 'string') { return false; }

                var cookieParts = new RegExp('(?:^|; )' + encodeURIComponent(name) + '=([^;]*)').exec(document.cookie);
                return cookieParts ? decodeURIComponent(cookieParts[1]) : null;
            }
        }

        function _writeCookie(name, value, options) {
            if (typeof fxcm === 'object' && typeof fxcm.lib === 'object' && typeof fxcm.lib.writeCookie === 'function') {
                return fxcm.lib.writeCookie(name, value, options);
            } else {
                if (typeof name !== 'string') { return false; }

                switch (typeof value) {
                    case 'string':  // Ideal
                        break;

                    case 'undefined':   // Parameter wasn't passed, set a cookie with no value
                        value = '';
                        break;

                    case 'object':
                        if (value === null) {   // Treat null as an intention to set a cookie with no value
                            value = '';
                        } else {    // We could JSON.stringify all other objects, but then we need to duck punch JSON.stringify into older browsers, let the client app deal with that
                            return false;
                        }
                        break;

                    default:    // Cast other primitives to string
                        value = String(value);
                        break;
                }

                if (typeof options !== 'object') { options = {}; }

                return (document.cookie = [
                    encodeURIComponent(name) + '=' + (value !== '' ? encodeURIComponent(value) : ''),
                    options.expires instanceof Date ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
                    typeof options.path === 'string' ? '; path=' + options.path : '',
                    typeof options.domain === 'string' ? '; domain=' + options.domain : '',
                    typeof options.secure !== 'undefined' && options.secure ? '; secure' : ''
                ].join(''));
            }
        }

        function _deleteCookie(name, options) {
            if (typeof fxcm === 'object' && typeof fxcm.lib === 'object' && typeof fxcm.lib.deleteCookie === 'function') {
                return fxcm.lib.deleteCookie(name, options);
            } else {
                if (typeof options !== 'object') { options = {}; }

                options.expires = new Date(0);    // Set cookie expiration to epoch
                return _writeCookie(name, '', options) ? true : false;
            }
        }

        var _thatjPersist = this;
        _thatjPersist.setCookiePrefix('jp_');   // Triggers the load process
    }();
}
fxcm.TwitterStream = function() {
	if (typeof $.fn.linkUrl !== 'function') {
		$.fn.extend({
			linkUrl: function() {
				var returning = [];
				var regexp = /((ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?)/gi;
				this.each(function() {
					returning.push(this.replace(regexp,'<a class=\"textlink\" target=\"_blank\" href=\"$1\">$1</a>'));
				});
				return $(returning);
			}
		});
	}
	
	if (typeof $.fn.linkUser !== 'function') {
		$.fn.extend({
			linkUser: function() {
				var returning = [];
				var regexp = /^[\@]+([A-Za-z0-9-_]+)/gi;
				this.each(function() {
					returning.push(this.replace(regexp,'<a class=\"textlink" target=\"_blank\" href=\"http://twitter.com/$1\">@$1</a>'));
				});
				return $(returning);
			}
		});
	}

	function dateString(str)
	{
		var values = str.split(' ');
		var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var d = new Date(values[1] + ' ' + values[2] + ' ' + values[5] + ' ' + values [3] + ' ' + values[4]);
		var day = d.getDate();
		var m = d.getMonth();
		var time = d.toLocaleTimeString();

		return day + ' ' + month[m] + ' ' + time;
	}
	
	var focus = true;

	var maxSize = 40; //default

	this.setMaxSize = function(maxSizeParam)
	{
		maxSize = maxSizeParam;
	};

	var size = 0;

	var textLimit = -1;

	this.setTextLimit = function(textLimitParam)
	{
		textLimit = textLimitParam;
	};

	this.getSize = function()
	{
		return size;
	};

	this.items = {};
	var oldestKey = -1;
	var target;
	var feedURL;
	var asyncTimeout = 30000;

	this.setAsyncTimeout = function(asyncTimeoutParam)
	{
		asyncTimeout = asyncTimeoutParam;
	};

	var firstRun = true;

	var avatarWidth = 48;
	var avatarHeight = 48;

	this.setAvatarSize = function(avatarWidthParam, avatarHeightParam)
	{
		avatarWidth = avatarWidthParam;
		avatarHeight = avatarHeightParam;
	};

	var containingList = $('<ul id="tweetListUL" class="items">')[0];

	var pauseImageDiv = $('<div id="pauseImageDiv"></div>');
	pauseImageDiv.hide();

	var that = this;
	var doRun = false;

	var pauseTimeout = 10800000; // default (copied from current dailfyx-twitter app)
	//var pauseTimeout = 10000;

	this.setPauseTimeout = function(paramPauseTimeout)
	{
		pauseTimeout = paramPauseTimeout;
	};

	this.setPauseImage = function(pauseImageUrl, pauseImageWidth, pauseImageHeight)
	{
		if(document.getElementById('pauseImage'))
			$(document.getElementById('pauseImage')).remove();

		var button = $('<img id="pauseImage" src="' + pauseImageUrl  +
							   '" alt="Launch Stream" width="' + pauseImageWidth +
							   '" height="' + pauseImageHeight + '" border="0" />').click(
																					function()
																					{
																						pauseImageDiv.hide();
																						that.stop();
																						that.start();
																					});

		pauseImageDiv.append(button);
	};

	var defaultPauseImageUrl = 'http://www.dailyfx.com/design/default/img/marketnews/launch-forex-stream.gif';
	var defaultPauseImageWidth = 514;
	var defaultPauseImageHeight = 86;

	this.setPauseImage(defaultPauseImageUrl, defaultPauseImageWidth, defaultPauseImageHeight);

	var newItems = 0;
	var title = document.title;
	var updateId = 0;

	var pollIntervalMillis = -1;

	var transformFunction = transformTweet;

	this.setTransformFunction = function(transformFunctionParam)
	{
		transformFunction = transformFunctionParam;
	};

	this.setLongPoll = function(pollIntervalMillisParam)
	{
		pollIntervalMillis = pollIntervalMillisParam;
	};

	var focusTimeout;

	if($.browser.msie)
	{
		document.onfocusin = onFocus;
		document.onfocusout = onBlur;
	}
	else
	{
		document.onfocus = onFocus;
		document.onblur = onBlur;
	}

	this.start = function()
	{
		if(doRun)
			return false; //Already running - must call stop() first

		if(this.isUndefined(target) || this.isUndefined(feedURL))
			return false;

		firstRun = true;
		doRun = true;

		getTweets();

		return true;
	};

	this.stop = function()
	{
		doRun = false;

		return true;
	};

	this.getTweetsOnce = function()
	{
		if(doRun)
			return false; //Already running - must call stop() first

		if(this.isUndefined(target) || this.isUndefined(feedURL))
			return false;

		var url = feedURL + '?since_timestamp=' + sinceTimestamp + '&async_timeout=' + asyncTimeout + '&callback=?';

		$.getJSON(url,  updateTweetList);
	};

	function onFocus()
	{
		if(!focus)
		{
			document.title = title;
			newItems = 0;

			focus = true;

			if(focusTimeout)
				clearTimeout(focusTimeout);
		}
	}

	function onBlur() {
		focus = false;
		focusTimeout = setTimeout(pause, pauseTimeout);
	}

	function pause()
	{
		that.stop();
		$(containingList).empty();
		pauseImageDiv.show();
		sinceTimestamp = -1;
		newItems = 0;
	}

	this.setFeedURL = function(feedURLParam)
	{
		if(typeof feedURLParam === 'string')
			feedURL = feedURLParam;

		else
			feedURL = 'http://realtimenews.dailyfx.com/news.json';
	};

	this.setTarget = function(targetParam)
	{
		if(typeof targetParam === 'string')
			target = document.getElementById(targetParam);

		else if((typeof targetParam === 'object') && (typeof targetParam.innerHTML !== 'undefined'))
			target = targetParam;

		$(target).append(pauseImageDiv);
		$(target).append(containingList);
	};

	function transformTweet(tweet)
	{
		var avatar_img = '<img src="' + tweet.user.profile_image_url + '" height="' + avatarHeight + '" width="' + avatarWidth + '" alt="' + tweet.user.screen_name + '\'s avatar" border="0"/>';
		var avatar = '<li class="avatar"><a target="_blank" href="http://twitter.com/' + tweet.user.screen_name + '">' + avatar_img + '</a></li>';
		var date = '<a class="date" target="_blank" href="http://twitter.com/' + tweet.user.screen_name + '/statuses/' + tweet.id_str + '" title="Follow us on Twitter">' + dateString(tweet.created_at) + '</a> ';

		var tweetText = textLimit == -1 ? tweet.text : tweet.text.substring(0, textLimit);

		var text = $([tweetText]).linkUrl().linkUser()[0];

		var tweetLiHtml =
				'<li class="real-time-news-box" id="' + tweet.id + '">' +
					'<div class="real-time-news-avatar">' + avatar_img + '<br />' +
						'<a target="_blank" href="http://twitter.com/' + tweet.user.screen_name + '">' +
							'<img src="http://www.dailyfx.com/design/fxcm/img/common/blank.gif" width="48" height="17" alt="" />' +
						'</a>' +
					'</div>' +
					'<div class="real-time-news-post">' + text + '</div>' +
					'<div class="real-time-news-post-date">'  + dateString(tweet.created_at) +  '</div>' +
				'</li>';

		return tweetLiHtml;
	}

	this.removeItem = function(key)
	{
		var previous = null;
		if(this.hasItem(key))
		{
			size--;
			previous = this.items[key];
			delete this.items[key];

			this.setOldest();
		}

		if(document.getElementById(key))
			$(document.getElementById(key)).remove();

		return previous;
	};

	this.getItem = function(key)
	{
		return this.items[key];
	};

	// returns value previously associated with this key if any. TODO: is this even necessary?
	this.putItem = function(key, value)
	{
		var tmp_previous;
		// if the map is full - only use new tweet if its timestamp is later than the current oldest
		var useTweet = size == maxSize ? key > oldestKey : true;

		if(useTweet && !this.isUndefined(value))
		{
			if(!this.hasItem(key))
			{
				// will add new key, value so must remove oldest key, value (by timestamp) - only if the new tweet is newer than the current oldest
				if(size == maxSize)
					this.removeItem(oldestKey);

				size++;
			}
			else
				// no need to remove one if its too big as this will replace existing key, value
				tmp_previous = this.items[key];


			this.items[key] = value;

			this.setOldest();

			//var tweetLi = $(transformTweet(value))[0];
			var tweetLi = $(transformFunction(value))[0];

			var newItem = $(tweetLi).prependTo(containingList);

			if(firstRun)
				newItem.slideDown('fast');
			else
				newItem.slideDown('slow');

			if(!firstRun)
				$(tweetLi).effect('pulsate', {times: 3}, 1000);

			//else
				//$(tweetLi).effect('slide', 100);
		}

		return tmp_previous;
	};

	this.setOldest = function()
	{
		oldestKey = -1;

		for(var key in this.items)
		{
			if(oldestKey == -1 || key < oldestKey)
				oldestKey = key;

		}
	};

	this.hasItem = function(key)
	{
		return !this.isUndefined(this.items[key]);
	};

	this.isUndefined = function(obj)
	{
		return !((typeof obj !== 'undefined') && (obj !== null));
	};

	this.notNull = function(obj)
	{
		return (!isUndefined(obj) && (obj !== null));
	};

	this.clear = function()
	{
		for(var i in this.items)
			delete this.items[i];

		size = 0;
	};

	// TODO: - performance?
	// adds all keys to a temp array, sorts the array, readds the keys in order to a temp map, and replaces the main map with the temp one
	this.sortByKey = function()
	{
		function sortDescending(a,b)
		{
			return b - a;
		}

		var tweetKeyArr = new Array();

		for(var key in this.items)
			tweetKeyArr.push(key);

		tweetKeyArr.sort(sortDescending);

		var tempItems = {};

		for(var i = 0; i < tweetKeyArr.length; i++)
			tempItems[tweetKeyArr[i]] = this.items[tweetKeyArr[i]];

		this.items = tempItems;
	};

	/*
	var favoriteTweet = new Object();
	favoriteTweet.id = -1;
	favoriteTweet.timestamp = -1;
	favoriteTweet.event_type = 'FAVORITE';
	*/

	var sinceTimestamp = -1;

	function updateTweetList(data)
	{
		$.each(data,
			function(i, newTweet)
			{
				//var favoriteTweetNotNull = typeof favoriteTweet != 'undefined';

				if(sinceTimestamp < newTweet.timestamp)
					sinceTimestamp = newTweet.timestamp;

				switch(newTweet.event_type)
				{
					case 'ADD':
						that.putItem(newTweet.id, newTweet);
						break;

					case 'FAVORITE':
						if(newTweet.show)
							that.putItem(newTweet.id, newTweet);

						/*
						if(!favoriteTweetNotNull || favoriteTweet.timestamp < newTweet.timestamp)
						{
							favoriteTweet = newTweet;
							document.getElementById("favoriteTweetBox").innerHTML = "tweetid: " + favoriteTweet.id + " timestamp: " + favoriteTweet.timestamp +
									" event type: " + favoriteTweet.event_type + " text: " + favoriteTweet.text + " favortie: " + favoriteTweet.favorited + "";

							favoriteTweetNotNull = true;
						}
						*/
						break;

					case 'UNFAVORITE':
						if(newTweet.show)
							that.putItem(newTweet.id, newTweet);

						/*
						if(typeof favoriteTweet != 'undefined' && favoriteTweet.id == newTweet.id)
						{
							favoriteTweet = null;
							document.getElementById("favoriteTweetBox").innerHTML = "<i>... no favorite</i>";
						}
						*/
						break;

					case 'DELETE':
						that.removeItem(newTweet.id);

						/*
						if(favoriteTweetNotNull  && favoriteTweet.id == newTweet.id)
						{
							favoriteTweet = null;
							document.getElementById("favoriteTweetBox").innerHTML = "<i>... no favorite</i>";
						}
						*/
						break;
				}

				if(!focus)
				{
					if(newItems < 20)
						newItems++;

					document.title = '(' + newItems + ' new) ' + title;
				}

				updateId++;
			}
		);

		//document.getElementById("tweetSize").innerHTML = "<b>map size: " + that.size + ", ul child length: " + containingList.children.length + "</b>";

		firstRun = false;

		getTweets();

	}

	function getTweets()
	{
		if(doRun)
		{
			var url = feedURL + '?since_timestamp=' + sinceTimestamp + '&async_timeout=' + asyncTimeout + '&callback=?';

			if(pollIntervalMillis > 0 && !firstRun)
				setTimeout(
						function()
						{
							//$.getJSON(feedURL + '?since_timestamp=' + sinceTimestamp + '&callback=?',  updateTweetList);
							$.getJSON(url,  updateTweetList);
						}, pollIntervalMillis);
			else
				//$.getJSON(feedURL + '?since_timestamp=' + sinceTimestamp + '&callback=?',  updateTweetList);
				$.getJSON(url,  updateTweetList);
		}
	}
};
fxcm.ui = new function() {
	this.ExpandableSet = fxcm.lib.makeClass();
	
	this.ExpandableSet.prototype.init = function(wrapper, controlLink) {
		var thatExpandableSet = this;
		var _settings = {};
		
		this.setControlLink = function(controlLink) {
			// Dereference is an ID
			if (typeof controlLink === 'string' && controlLink) {
				controlLink = document.getElementById(controlLink);
			}
			
			// Look for default if no control link was passed in
			if (!controlLink) {
				controlLink = _removeDescendents($(_settings.wrapper).find('a.controlThisSection'), _dls)[0];
			}
			
			// Set the control link if one has been found
			if (fxcm.lib.isDOMElement(controlLink)) {
				_settings.controlLink = controlLink;
				$(_settings.controlLink).click(_controlLinkClick);
				_updateControlLinkText();
				
				return _settings.controlLink;
			} else {
				return false;
			}
		};
		
		this.getControlLink = function(controlLink) {
			if (_settings.controlLink) {
				return _settings.controlLink;
			} else {
				return false;
			}
		};
		
		this.handleAnchor = function(anchor) {
			if (typeof anchor !== 'string') { return false; }
			if (anchor === '') { return true; }
			
			var filter = 'a[name=' + anchor + ']';
			
			for (var dtIndex = 0; dtIndex < _dts.length; dtIndex++) {
				var dt = $(_dts[dtIndex]);
				var dd = dt.next('dd');
				
				if (dt.find(filter).length || dd.find(filter).length) {
					_setAllDtStates(false);
					_setDtState(dt, true);
					break;
				}
			}
		};
		
		function _controlLinkClick() {
			if (_settings.controlLinkState === 'expand') {
				_setAllDtStates(true);
			} else if (_settings.controlLinkState === 'collapse') {
				_setAllDtStates(false);
			}
			_updateControlLinkText();
			return false;		
		}
		
		function _setAllDtStates(expanded) {
			return _setDtState(_dts, expanded);
		}
		
		// Sets the state of one or more dt elements (pass in a jQuery object containing multiple dt elements for multiple)
		function _setDtState(dt, expanded) {
			dt = $(dt);
			
			if (expanded) {
				dt.addClass('open').next('dd').addClass('open');
			} else {
				dt.removeClass('open').next('dd').removeClass('open');
			}
			
			return true;
		}
		
		// Expands/collapses dt and dd elements
		function _toggleState(e) {
			e.stopPropagation();
			e.cancelBubble = true;
			$(this).toggleClass('open').next('dd').toggleClass('open');
			if (_settings.controlLink && (_countDts(true) === _countDts() || _countDts(false) === _countDts())) {
				_updateControlLinkText();
			}
			return false;
		}
		
		function _updateControlLinkText() {
			if (_settings.controlLink) {
				if (_countDts(true) === _countDts()) {	// All dt's are expanded
					$(_settings.controlLink).text(thatExpandableSet.controlLink.collapseText);
					_settings.controlLinkState = 'collapse';
				} else {	// Not all dt's are expanded
					$(_settings.controlLink).text(thatExpandableSet.controlLink.expandText);
					_settings.controlLinkState = 'expand';
				}
			}
		}
		
		// Counts the number of expanded dt elements
		function _countDts(expanded) { 
			if (typeof expanded === 'undefined') {	// Count all dt's
				return _dts.length;
			} else {
				if (expanded) {	// Count expanded dt's
					return _dts.filter('.open').length;
				} else {	// Count collapsed dt's
					return _dts.length - _countDts(true);
				}
			}
		}
		
		// Returns the elements that are not decendents of any other elements in the array
		function _removeDescendents(elements, ancestors) {
			if (typeof ancestors === 'undefined') {
				ancestors = elements;
			}
			
			var topLevelElements = [];
			for (var elementIndex = 0; elementIndex < elements.length; elementIndex++) {
				var ancestorFound = false;
				for (var ancestorIndex = 0; ancestorIndex < ancestors.length; ancestorIndex++) {
					if ($.contains(ancestors[ancestorIndex], elements[elementIndex])) {
						ancestorFound = true;
						break;
					}
				}
				
				if (!ancestorFound) {
					topLevelElements.push(elements[elementIndex]);
				}
			}
			
			return topLevelElements;
		}
			
		// Find the wrapper element
		if (typeof wrapper === 'string' && wrapper) {	// Dereference an ID
			wrapper = document.getElementById(wrapper);
		}
		
		if (!fxcm.lib.isDOMElement(wrapper)) {	// No wrapper, bomb out
			return false;
		}
		
		_settings.wrapper = wrapper;

		// Construct list of top level dl elements
		var _dls = $(_removeDescendents($(_settings.wrapper).find('dl')));
		
		// Construct list of dt elements directly within the top level dl elements
		var _dts = _dls.children('dt');
		
		// Add close this links and expand/collapse click handler
		_dts.append('<a class="closeThis"></a>');
		_dts.click(_toggleState);
		
		// Initialize the control link
		thatExpandableSet.setControlLink(controlLink);
		thatExpandableSet.handleAnchor(document.location.hash.substr(1));
	};

	this.ExpandableSet.prototype.controlLink = {
		expandText: 	'Expand All',
		collapseText: 	'Collapse All'
	};


	this.PlaceholderLabel = fxcm.lib.makeClass();
	
	/* Sets a form's labels as placeholders for fields.
	form = required
	fields = optional. Pass in an array, string or an empty array/string
	placeholderClass = optional. Pass in a string. */
	this.PlaceholderLabel.prototype.init = function(form, fields, placeholderClass) {

		var thatPlaceholderLabel = this;
		var _settings = {};
		
		this.setFields = function(fields) {
			var _fieldList = $();		
			
			// Parse passed-in fields
			if (typeof fields === 'string' && _findField(fields)) {	// passed in a string
				_fieldList = _fieldList.add(_findField(fields));	
			}
			else if (fxcm.lib.isArray(fields) && fields.length > 0) {	// passed in an array
				for (var i = 0; i < fields.length; i++) {
					if (_findField(fields[i])) {
						_fieldList = _fieldList.add(_findField(fields[i]));	
					}
				}
			}
			
			if (_fieldList.length > 0) {
				return _settings.fields = _fieldList;
			}
			else {
				return false;
			}
		};
				
		this.getFields = function() {
			return _settings.fields;
		};

		this.setPlaceholderClass = function(placeholderClass) {
			if (typeof placeholderClass === 'string' && placeholderClass !== '') {
				return _settings.placeholderClass = placeholderClass;
			} else {
				return false;
			}
		};
		
		this.getPlaceholderClass = function() {
			return _settings.placeholderClass;
		};
		
		function _findField(field) {
			if ($(_settings.form).find(field).length > 0) {
				return $(_settings.form).find(field);
			} else {
				return false;
			}
		}
		
		function _getTag(field) {
			return  $(field).attr('tagName').toLowerCase();
		}

		function _getLabel(field) {
			var label = $(field).prev('label');
			return label.length > 0 ? label : false;
		}
		
		function _hasValue(field) {
			var val = $(field).val();
			return val === '' ? false : true;
		}
		
		// Show/hide the label
		function _setLabelState(field, hide) {
			if (_getLabel(field) === false) {return false;}
			
			if (hide) {
				_getLabel(field).hide();
			} else {
				_getLabel(field).show();
			}
		}
		
		// Add placeholder class to labels. Provides style hook.
		function _initializeLabels(field) {
			_settings.fields.each(function(){
				_togglePlaceholderClass(_getLabel(this), true);
			});
		}
		
		// Add/remove the "placeholder" label
		function _togglePlaceholderClass(field, addClass) {
			if (addClass) {
				$(field).addClass(_settings.placeholderClass);
			}
			else {
				$(field).removeClass(_settings.placeholderClass);
			}
		}
		
		function _initializeSelectField(field) {
			if (_getTag(field) !== 'select') {return false;}	
			if (!_getLabel(field)) {return false;}		// If no label text, bomb out
			
			var label = _getLabel(field);
			var firstOption = $(field).children('option:first-child');
			
			// Insert label's innerHTML as first option
			if (_hasValue(firstOption)) {		
				$(field).prepend('<option value="">' + label.text() + '</option>').attr("selectedIndex", 0);	 //To do: select this first option.
			} else {
				firstOption.text(label.text()); 
			}
			return true;
		}		
		
		function _handleSelectField(field, event) {
			if (_getTag(field) !== 'select') {return false;}
			if (typeof event === 'undefined') {
					event = '';
					event.type = 'load'
			}
			
			var isPlaceholding = false; // Set default to remove placeholding class 
			
			// For focus, always remove placeholder class
			if (event.type === 'focusin') {	
				isPlaceholding = false;
			}
			// For other events, add/remove placeholder class depending on selection
			else {		
				if (!_hasValue(field) && $(field).children('option:selected').index() === 0) {	// Check if selected option is the first option
					isPlaceholding = true;
				}
			}
			_togglePlaceholderClass(field, isPlaceholding);		
		}
		
		function _handleAllFields(field, event){
			if (typeof event === 'undefined') {
					event = '';
					event.type = 'load'
			}
			
			if (_getTag(field) === 'select') {
				_handleSelectField(field, event);	
			}
			else {
				if (event.type === 'focus') {
					_setLabelState(field, true);				//	on focus, hide label		
				} else {
					_setLabelState(field, _hasValue(field));	// on change and blur, set label state based on value
				}
			}
		}

		//----------- Constructor logic -----------//
		
		// Find the form
		if (typeof form === 'string' && form) {		// Dereference an ID
			form = document.getElementById(form);
		}
		if (!fxcm.lib.isDOMElement(form)) {	// No form, bomb out
			return false;
		}
		
		_settings.form = form;
		
		// Set the placeholder class 
		if (!thatPlaceholderLabel.setPlaceholderClass(placeholderClass)) {
			thatPlaceholderLabel.setPlaceholderClass('placeholder');
		}
		
		// Set the fields
		if (!thatPlaceholderLabel.setFields(fields)) {
			thatPlaceholderLabel.setFields(['input[type="text"]','input[type="password"]', 'input[type="email"]', 'input[type="tel"]', 'select','textarea']);
		}
						
		// Add event handlers to fields		
		_settings.fields.each(function() {
			
			var boundEvents = '';
			
			// Tag-specific settings
			if (_getTag(this) === 'select') {
				boundEvents = 'focusin blur'; // Use focusin to fix IE bug on selects with focus eventhandler (where selects require two clicks to open the dropdown).
				
				_setLabelState(this,true);		// Hide label 
				_initializeSelectField(this);	// Insert label's innerHTML into first option
			}
			else {
				boundEvents = 'focus blur';
			}
			
			// Handle fields on page load
			_togglePlaceholderClass(_getLabel(this), true);	// Add placeholder class to labels
			_handleAllFields(this);								// Set initial placeholder state for all fields
			
			// Attach eventhandlers to fields
			$(this).bind(boundEvents, function(e) {
				_handleAllFields(this, e);
			});
		});
	};
	
	/* 	GeoBox gives us the ability to load different content depending on geographic location (country)

		Parameters:
		- wrapper [jquery object]: 	Required. A DOM element that contains one or more .geoTarget elements marked with a data-target="" attribute

		Optional config object may contain:
		- target [string]: 			this value sets the current geoTarget to display. Corresponds to the data-geoTarget attributes on content
		- targetLevel [string]: 	this values sets which level of targeting you are aiming for. Possible values are: 'country', 'city'

		Implementation examples:
		HTML :
		<div class="myGeoTargetedElement">
			<div data-geoTarget="australia">This is the Australian content</div>
			<div data-geoTarget="default">This is the default content</div>
			<div data-geoTarget="germany">This is the German content</div>
		</div>

		JS:
		--- Show australian content on page load ---
		var targetedContent = new fxcm.ui.GeoBox($('.myGeoTargetedElement'), {target: 'australia'});
		
		--- Show default content on page load ---
		var targetedContent = new fxcm.ui.GeoBox($('.myGeoTargetedElement'));
	*/

	this.GeoBox = fxcm.lib.makeClass();
	this.GeoBox.prototype.init = function(wrapper, config) {
		var thatGeoBox = this;
		var _settings = config || {};

		this.getWrapper = function() {
			return _settings.wrapper;
		};

		this.getTargetLevel = function() {
			return _settings.targetLevel;
		};

		this.setTargetLevel = function(targetLevel) {
			_settings.targetLevel = targetLevel;
		};

		this.getTarget = function() {
			return _settings.target;
		};

		this.setTarget = function(target) {
			_settings.target = target;
		};


		/* --- Constructor logic -- */
		
		// Set wrapping parent element context (required) and ensure it's a jquery wrapped set
		if (!wrapper || !wrapper.length) {return false;}
		_settings.wrapper = fxcm.lib.isJqueryElement(wrapper) ? wrapper : $(wrapper);

		thatGeoBox.setTarget( _settings.target || 'default' );

		// If we can locate a matching geo set, show it. Otherwise, do nothing.
		if ( thatGeoBox.getElements( thatGeoBox.getTarget() ) ) {
			thatGeoBox.show( thatGeoBox.getTarget() );
		}
	};	

	this.GeoBox.prototype.getElements = function(target) {
		// Accepts a single parameter: target [string]. Returns all elements within the parent geoBox that have a matching data-geoTarget attritube. 
		// Omit the target argument to return all target elements within parent geoBox
		
		if (typeof target !== 'string') {
			return this.getWrapper().find('[data-geoTarget]');
		} else {
			return this.getWrapper().find('[data-geoTarget='+ target +']');
		}
	};

	this.GeoBox.prototype.show = function(target) {
		// Show the content associated with a specific target. 
		// If you call this method without passing in a target, reshow currently-set target
		
		if (typeof target !== 'string') { // no target supplied. get current from _settings
			target = this.getTarget(); 
		} else if (target !== this.getTarget() ){ // supplied new target - reset current target in _settings
			this.setTarget(target); 
		}

		var targetContent = this.getElements(target);

		if (targetContent.length) {
			this.getElements().hide();
			targetContent.show();
		}
	};
}();
<!-- Google Tag Manager Data Layer -->
analyticsEvent = function() {};
analyticsSocial = function() {};
analyticsVPV = function() {};
dataLayer = [];
<!-- End Google Tag Manager Data Layer -->
/**
 * GTM: On Demo Complete
 * - Required Data -
 * rb
 * db
 * formName
 * currency
 * product
 * platform
 * formCountry
 */
amplify.subscribe( 'fxcm.form.onDemoComplete', function( data ) {
    analyticsEvent({
        eventCategory : 'conversion',
        eventAction : 'complete',
        eventLabel : 'demo',
        eventValue : gtmGetTimeSpent(),
        eventNonInt : 'false',
        rb : data.rb,
        db : data.db,
        formName : data.formName,
        currency : data.currency,
        product : data.product,
        platform : data.platform,
        formCountry : data.formCountry
    });
} );


/**
 * GTM: On Form Error
 * - Required Data -
 * formType
 * formName
 * errorFieldNames
 */
amplify.subscribe( 'fxcm.form.onError', function( data ) {
    analyticsEvent({
        eventCategory : 'conversion',
        eventAction : 'error',
        eventLabel : data.formType || 'n/a',
        eventValue : gtmGetTimeSpent(),
        eventNonInt : 'false',
        formName : data.formName,
        errorFieldNames : data.errorFieldNames || 'n/a'
    });
} );

var gtmGlobalStartTime = new Date();

function gtmGetTimeSpent( startTime ) {
    var startTime = startTime || gtmGlobalStartTime;
    var endTime = new Date();
    // Get the time spent in seconds by getting the difference of endTime and startTime
    var timeSpentInSeconds = ( endTime.getTime() - startTime.getTime() ) / 1000;
    return timeSpentInSeconds;

}


/*
 * jQuery Autocomplete plugin 1.2.2
 *
 * Copyright (c) 2009 JÃ¶rn Zaefferer
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * With small modifications by Alfonso GÃ³mez-Arzola.
 * See changelog for details.
 *
 */

;(function($){$.fn.extend({autocomplete:function(urlOrData,options){var isUrl=typeof urlOrData=="string";options=$.extend({},$.Autocompleter.defaults,{url:isUrl?urlOrData:null,data:isUrl?null:urlOrData,delay:isUrl?$.Autocompleter.defaults.delay:10,max:options&&!options.scroll?10:150,noRecord:"No Records."},options);options.highlight=options.highlight||function(value){return value};options.formatMatch=options.formatMatch||options.formatItem;return this.each(function(){new $.Autocompleter(this,options)})},result:function(handler){return this.bind("result",handler)},search:function(handler){return this.trigger("search",[handler])},flushCache:function(){return this.trigger("flushCache")},setOptions:function(options){return this.trigger("setOptions",[options])},unautocomplete:function(){return this.trigger("unautocomplete")}});$.Autocompleter=function(input,options){var KEY={UP:38,DOWN:40,DEL:46,TAB:9,RETURN:13,ESC:27,COMMA:188,PAGEUP:33,PAGEDOWN:34,BACKSPACE:8};var globalFailure=null;if(options.failure!=null&&typeof options.failure=="function"){globalFailure=options.failure}var $input=$(input).attr("autocomplete","off").addClass(options.inputClass);var timeout;var previousValue="";var cache=$.Autocompleter.Cache(options);var hasFocus=0;var lastKeyPressCode;var config={mouseDownOnSelect:false};var select=$.Autocompleter.Select(options,input,selectCurrent,config);var blockSubmit;navigator.userAgent.indexOf("Opera")!=-1&&$(input.form).bind("submit.autocomplete",function(){if(blockSubmit){blockSubmit=false;return false}});$input.bind((navigator.userAgent.indexOf("Opera")!=-1&&!'KeyboardEvent'in window?"keypress":"keydown")+".autocomplete",function(event){hasFocus=1;lastKeyPressCode=event.keyCode;switch(event.keyCode){case KEY.UP:if(select.visible()){event.preventDefault();select.prev()}else{onChange(0,true)}break;case KEY.DOWN:if(select.visible()){event.preventDefault();select.next()}else{onChange(0,true)}break;case KEY.PAGEUP:if(select.visible()){event.preventDefault();select.pageUp()}else{onChange(0,true)}break;case KEY.PAGEDOWN:if(select.visible()){event.preventDefault();select.pageDown()}else{onChange(0,true)}break;case options.multiple&&$.trim(options.multipleSeparator)==","&&KEY.COMMA:case KEY.TAB:case KEY.RETURN:if(selectCurrent()){event.preventDefault();blockSubmit=true;return false}break;case KEY.ESC:select.hide();break;default:clearTimeout(timeout);timeout=setTimeout(onChange,options.delay);break}}).focus(function(){hasFocus++}).blur(function(){hasFocus=0;if(!config.mouseDownOnSelect){hideResults()}}).click(function(){if(options.clickFire){if(!select.visible()){onChange(0,true)}}else{if(hasFocus++>1&&!select.visible()){onChange(0,true)}}}).bind("search",function(){var fn=(arguments.length>1)?arguments[1]:null;function findValueCallback(q,data){var result;if(data&&data.length){for(var i=0;i<data.length;i++){if(data[i].result.toLowerCase()==q.toLowerCase()){result=data[i];break}}}if(typeof fn=="function")fn(result);else $input.trigger("result",result&&[result.data,result.value])}$.each(trimWords($input.val()),function(i,value){request(value,findValueCallback,findValueCallback)})}).bind("flushCache",function(){cache.flush()}).bind("setOptions",function(){$.extend(true,options,arguments[1]);if("data"in arguments[1])cache.populate()}).bind("unautocomplete",function(){select.unbind();$input.unbind();$(input.form).unbind(".autocomplete")});function selectCurrent(){var selected=select.selected();if(!selected)return false;var v=selected.result;previousValue=v;if(options.multiple){var words=trimWords($input.val());if(words.length>1){var seperator=options.multipleSeparator.length;var cursorAt=$(input).selection().start;var wordAt,progress=0;$.each(words,function(i,word){progress+=word.length;if(cursorAt<=progress){wordAt=i;return false}progress+=seperator});words[wordAt]=v;v=words.join(options.multipleSeparator)}v+=options.multipleSeparator}$input.val(v);hideResultsNow();$input.trigger("result",[selected.data,selected.value]);return true}function onChange(crap,skipPrevCheck){if(lastKeyPressCode==KEY.DEL){select.hide();return}var currentValue=$input.val();if(!skipPrevCheck&&currentValue==previousValue)return;previousValue=currentValue;currentValue=lastWord(currentValue);if(currentValue.length>=options.minChars){$input.addClass(options.loadingClass);if(!options.matchCase)currentValue=currentValue.toLowerCase();request(currentValue,receiveData,hideResultsNow)}else{stopLoading();select.hide()}};function trimWords(value){if(!value)return[""];if(!options.multiple)return[$.trim(value)];return $.map(value.split(options.multipleSeparator),function(word){return $.trim(value).length?$.trim(word):null})}function lastWord(value){if(!options.multiple)return value;var words=trimWords(value);if(words.length==1)return words[0];var cursorAt=$(input).selection().start;if(cursorAt==value.length){words=trimWords(value)}else{words=trimWords(value.replace(value.substring(cursorAt),""))}return words[words.length-1]}function autoFill(q,sValue){if(options.autoFill&&(lastWord($input.val()).toLowerCase()==q.toLowerCase())&&lastKeyPressCode!=KEY.BACKSPACE){$input.val($input.val()+sValue.substring(lastWord(previousValue).length));$(input).selection(previousValue.length,previousValue.length+sValue.length)}};function hideResults(){clearTimeout(timeout);timeout=setTimeout(hideResultsNow,200)};function hideResultsNow(){var wasVisible=select.visible();select.hide();clearTimeout(timeout);stopLoading();if(options.mustMatch){$input.search(function(result){if(!result){if(options.multiple){var words=trimWords($input.val()).slice(0,-1);$input.val(words.join(options.multipleSeparator)+(words.length?options.multipleSeparator:""))}else{$input.val("");$input.trigger("result",null)}}})}};function receiveData(q,data){if(data&&data.length&&hasFocus){stopLoading();select.display(data,q);autoFill(q,data[0].value);select.show()}else{hideResultsNow()}};function request(term,success,failure){if(!options.matchCase)term=term.toLowerCase();var data=cache.load(term);if(data){if(data.length){success(term,data)}else{var parsed=options.parse&&options.parse(options.noRecord)||parse(options.noRecord);success(term,parsed)}}else if((typeof options.url=="string")&&(options.url.length>0)){var extraParams={timestamp:+new Date()};$.each(options.extraParams,function(key,param){extraParams[key]=typeof param=="function"?param():param});$.ajax({mode:"abort",port:"autocomplete"+input.name,dataType:options.dataType,url:options.url,data:$.extend({q:lastWord(term),limit:options.max},extraParams),success:function(data){var parsed=options.parse&&options.parse(data)||parse(data);cache.add(term,parsed);success(term,parsed)}})}else{select.emptyList();if(globalFailure!=null){globalFailure()}else{failure(term)}}};function parse(data){var parsed=[];var rows=data.split("\n");for(var i=0;i<rows.length;i++){var row=$.trim(rows[i]);if(row){row=row.split("|");parsed[parsed.length]={data:row,value:row[0],result:options.formatResult&&options.formatResult(row,row[0])||row[0]}}}return parsed};function stopLoading(){$input.removeClass(options.loadingClass)}};$.Autocompleter.defaults={inputClass:"ac_input",resultsClass:"ac_results",loadingClass:"ac_loading",minChars:1,delay:400,matchCase:false,matchSubset:true,matchContains:false,cacheLength:100,max:1000,mustMatch:false,extraParams:{},selectFirst:true,formatItem:function(row){return row[0]},formatMatch:null,autoFill:false,width:0,multiple:false,multipleSeparator:" ",inputFocus:true,clickFire:false,highlight:function(value,term){return value.replace(new RegExp("(?![^&;]+;)(?!<[^<>]*)("+term.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi,"\\$1")+")(?![^<>]*>)(?![^&;]+;)","gi"),"<strong>$1</strong>")},scroll:true,scrollHeight:180,scrollJumpPosition:true};$.Autocompleter.Cache=function(options){var data={};var length=0;function matchSubset(s,sub){if(!options.matchCase)s=s.toLowerCase();var i=s.indexOf(sub);if(options.matchContains=="word"){i=s.toLowerCase().search("\\b"+sub.toLowerCase())}if(i==-1)return false;return i==0||options.matchContains};function add(q,value){if(length>options.cacheLength){flush()}if(!data[q]){length++}data[q]=value}function populate(){if(!options.data)return false;var stMatchSets={},nullData=0;if(!options.url)options.cacheLength=1;stMatchSets[""]=[];for(var i=0,ol=options.data.length;i<ol;i++){var rawValue=options.data[i];rawValue=(typeof rawValue=="string")?[rawValue]:rawValue;var value=options.formatMatch(rawValue,i+1,options.data.length);if(typeof(value)==='undefined'||value===false)continue;var firstChar=value.charAt(0).toLowerCase();if(!stMatchSets[firstChar])stMatchSets[firstChar]=[];var row={value:value,data:rawValue,result:options.formatResult&&options.formatResult(rawValue)||value};stMatchSets[firstChar].push(row);if(nullData++<options.max){stMatchSets[""].push(row)}};$.each(stMatchSets,function(i,value){options.cacheLength++;add(i,value)})}setTimeout(populate,25);function flush(){data={};length=0}return{flush:flush,add:add,populate:populate,load:function(q){if(!options.cacheLength||!length)return null;if(!options.url&&options.matchContains){var csub=[];for(var k in data){if(k.length>0){var c=data[k];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub.push(x)}})}}return csub}else if(data[q]){return data[q]}else if(options.matchSubset){for(var i=q.length-1;i>=options.minChars;i--){var c=data[q.substr(0,i)];if(c){var csub=[];$.each(c,function(i,x){if(matchSubset(x.value,q)){csub[csub.length]=x}});return csub}}}return null}}};$.Autocompleter.Select=function(options,input,select,config){var CLASSES={ACTIVE:"ac_over"};var listItems,active=-1,data,term="",needsInit=true,element,list;function init(){if(!needsInit)return;element=$("<div/>").hide().addClass(options.resultsClass).css("position","absolute").appendTo(document.body).hover(function(event){if($(this).is(":visible")){input.focus()}config.mouseDownOnSelect=false});list=$("<ul/>").appendTo(element).mouseover(function(event){if(target(event).nodeName&&target(event).nodeName.toUpperCase()=='LI'){active=$("li",list).removeClass(CLASSES.ACTIVE).index(target(event));$(target(event)).addClass(CLASSES.ACTIVE)}}).click(function(event){$(target(event)).addClass(CLASSES.ACTIVE);select();if(options.inputFocus)input.focus();return false}).mousedown(function(){config.mouseDownOnSelect=true}).mouseup(function(){config.mouseDownOnSelect=false});if(options.width>0)element.css("width",options.width);needsInit=false}function target(event){var element=event.target;while(element&&element.tagName!="LI")element=element.parentNode;if(!element)return[];return element}function moveSelect(step){listItems.slice(active,active+1).removeClass(CLASSES.ACTIVE);movePosition(step);var activeItem=listItems.slice(active,active+1).addClass(CLASSES.ACTIVE);if(options.scroll){var offset=0;listItems.slice(0,active).each(function(){offset+=this.offsetHeight});if((offset+activeItem[0].offsetHeight-list.scrollTop())>list[0].clientHeight){list.scrollTop(offset+activeItem[0].offsetHeight-list.innerHeight())}else if(offset<list.scrollTop()){list.scrollTop(offset)}}};function movePosition(step){if(options.scrollJumpPosition||(!options.scrollJumpPosition&&!((step<0&&active==0)||(step>0&&active==listItems.size()-1)))){active+=step;if(active<0){active=listItems.size()-1}else if(active>=listItems.size()){active=0}}}function limitNumberOfItems(available){return options.max&&options.max<available?options.max:available}function fillList(){list.empty();var max=limitNumberOfItems(data.length);for(var i=0;i<max;i++){if(!data[i])continue;var formatted=options.formatItem(data[i].data,i+1,max,data[i].value,term);if(formatted===false)continue;var li=$("<li/>").html(options.highlight(formatted,term)).addClass(i%2==0?"ac_even":"ac_odd").appendTo(list)[0];$.data(li,"ac_data",data[i])}listItems=list.find("li");if(options.selectFirst){listItems.slice(0,1).addClass(CLASSES.ACTIVE);active=0}if($.fn.bgiframe)list.bgiframe()}return{display:function(d,q){init();data=d;term=q;fillList()},next:function(){moveSelect(1)},prev:function(){moveSelect(-1)},pageUp:function(){if(active!=0&&active-8<0){moveSelect(-active)}else{moveSelect(-8)}},pageDown:function(){if(active!=listItems.size()-1&&active+8>listItems.size()){moveSelect(listItems.size()-1-active)}else{moveSelect(8)}},hide:function(){element&&element.hide();listItems&&listItems.removeClass(CLASSES.ACTIVE);active=-1},visible:function(){return element&&element.is(":visible")},current:function(){return this.visible()&&(listItems.filter("."+CLASSES.ACTIVE)[0]||options.selectFirst&&listItems[0])},show:function(){var offset=$(input).offset();element.css({width:typeof options.width=="string"||options.width>0?options.width:$(input).width(),top:offset.top+input.offsetHeight,left:offset.left}).show();if(options.scroll){list.scrollTop(0);list.css({maxHeight:options.scrollHeight,overflow:'auto'});if(navigator.userAgent.indexOf("MSIE")!=-1&&typeof document.body.style.maxHeight==="undefined"){var listHeight=0;listItems.each(function(){listHeight+=this.offsetHeight});var scrollbarsVisible=listHeight>options.scrollHeight;list.css('height',scrollbarsVisible?options.scrollHeight:listHeight);if(!scrollbarsVisible){listItems.width(list.width()-parseInt(listItems.css("padding-left"))-parseInt(listItems.css("padding-right")))}}}},selected:function(){var selected=listItems&&listItems.filter("."+CLASSES.ACTIVE).removeClass(CLASSES.ACTIVE);return selected&&selected.length&&$.data(selected[0],"ac_data")},emptyList:function(){list&&list.empty()},unbind:function(){element&&element.remove()}}};$.fn.selection=function(start,end){if(start!==undefined){return this.each(function(){if(this.createTextRange){var selRange=this.createTextRange();if(end===undefined||start==end){selRange.move("character",start);selRange.select()}else{selRange.collapse(true);selRange.moveStart("character",start);selRange.moveEnd("character",end);selRange.select()}}else if(this.setSelectionRange){this.setSelectionRange(start,end)}else if(this.selectionStart){this.selectionStart=start;this.selectionEnd=end}})}var field=this[0];if(field.createTextRange){var range=document.selection.createRange(),orig=field.value,teststring="<->",textLength=range.text.length;range.text=teststring;var caretAt=field.value.indexOf(teststring);field.value=orig;this.selection(caretAt,caretAt+textLength);return{start:caretAt,end:caretAt+textLength}}else if(field.selectionStart!==undefined){return{start:field.selectionStart,end:field.selectionEnd}}}})(jQuery);
// ColorBox v1.3.18 - a full featured, light-weight, customizable lightbox based on jQuery 1.3+
// Copyright (c) 2011 Jack Moore - jack@colorpowered.com
// Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
(function(a,b,c){function Y(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function Z(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function $(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function _(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function ab(){var b;K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function bb(b,c){a.event.trigger(b),c&&c.call(P)}function cb(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(Q<y.length-1||K.loop)a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function db(b){if(!U){P=b,ab(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1));if(!S){S=T=!0,r.show();if(K.returnFocus)try{P.blur(),a(P).one(l,function(){try{this.focus()}catch(a){}})}catch(c){}q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=$(K.initialWidth,"x"),K.h=$(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),bb(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()}W.load(!0)}}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=a.browser.msie&&!a.support.opacity,o=n&&a.browser.version<7,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div";W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},W.init();if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}return c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b)),a(this).addClass(g)}),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&db(f[0]),f},W.init=function(){if(!r){if(!a("body")[0]){a(W.init);return}z=a(c),r=Y(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}),q=Y(X,"Overlay",o?"position:absolute":"").hide(),s=Y(X,"Wrapper"),t=Y(X,"Content").append(A=Y(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Y(X,"LoadingOverlay").add(Y(X,"LoadingGraphic")),D=Y(X,"Title"),E=Y(X,"Current"),G=Y(X,"Next"),H=Y(X,"Previous"),F=Y(X,"Slideshow").bind(h,cb),I=Y(X,"Close")),s.append(Y(X).append(Y(X,"TopLeft"),u=Y(X,"TopCenter"),Y(X,"TopRight")),Y(X,!1,"clear:left").append(v=Y(X,"MiddleLeft"),t,w=Y(X,"MiddleRight")),Y(X,!1,"clear:left").append(Y(X,"BottomLeft"),x=Y(X,"BottomCenter"),Y(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Y(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),a("body").prepend(q,r.append(s,B)),L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}).hide(),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),J=G.add(H).add(E).add(F),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))})}},W.remove=function(){r.add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g)},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,C[0].style.height=C[1].style.height=t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g=z.scrollTop(),h=z.scrollLeft();z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-$(K.right,"x"),0):K.left!==!1?d+=$(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-$(K.bottom,"y"),0):K.top!==!1?c+=$(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",b&&b(),setTimeout(function(){z.bind("resize."+f,W.position)},1)},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=$(a.width,"x")-O-M),a.innerWidth&&(K.w=$(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=$(a.height,"y")-N-L),a.innerHeight&&(K.h=$(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Y(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function q(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p;if(!S)return;l=function(){clearTimeout(V),C.hide(),bb(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[Z(-1),Z(1)];while(c=y[b.pop()])o=a.data(c,e).href||c.href,a.isFunction(o)&&(o=o.call(c)),_(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Y("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,q):q()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||ab(),bb(m),bb(i,K.onLoad),K.h=K.height?$(K.height,"y")-N-L:K.innerHeight&&$(K.innerHeight,"y"),K.w=K.width?$(K.width,"x")-O-M:K.innerWidth&&$(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=$(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=$(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Y(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):_(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Y(X,"Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(Q<y.length-1||K.loop)&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Y(X,"Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!T&&y[1]&&(Q<y.length-1||K.loop)&&(Q=Z(1),W.load())},W.prev=function(){!T&&y[1]&&(Q||K.loop)&&(Q=Z(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,bb(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),bb(m),A.remove(),setTimeout(function(){U=!1,bb(l,K.onClosed)},1)}))},W.element=function(){return a(P)},W.settings=d,a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),db(this))}),W.init()})(jQuery,document,this);
/* ---------- start jqprint ---------- */ 
// -----------------------------------------------------------------------
// eros@recoding.it
// jqprint 0.3
//
// - 19/06/2009 - some new implementations, added Opera support
// - 11/05/2009 - first sketch
//
// Printing plug-in for jQuery, evolution of jPrintArea: http://plugins.jquery.com/project/jPrintArea
// requires jQuery 1.3.x
//------------------------------------------------------------------------
(function(a){var b;a.fn.jqprint=function(c){b=a.extend({},a.fn.jqprint.defaults,c);var d=this instanceof jQuery?this:a(this);if(b.operaSupport&&a.browser.opera){var e=window.open("","jqPrint-preview");e.document.open();var f=e.document}else{var g=a("<iframe  />");b.debug||g.css({position:"absolute",width:"0px",height:"0px",left:"-600px",top:"-600px"}),g.appendTo("body");var f=g[0].contentWindow.document}b.importCSS&&(a("link[media=print]").length>0?a("link[media=print]").each(function(){f.write("<link type='text/css' rel='stylesheet' href='"+a(this).attr("href")+"' media='print' />")}):a("link").each(function(){f.write("<link type='text/css' rel='stylesheet' href='"+a(this).attr("href")+"' />")})),b.addLogo&&f.write("<div class='topLogo'><img src='http://assets.fxcm.com/img/chrome/header/fxcm_logo.gif' width='240' height='49' alt='FXCM' /></div>"),b.printContainer?f.write(d.outer()):d.each(function(){f.write(a(this).html())});var h=a(".customMessageTarget").html();b.customMSG&&f.write(h),f.close(),(b.operaSupport&&a.browser.opera?e:g[0].contentWindow).focus(),setTimeout(function(){(b.operaSupport&&a.browser.opera?e:g[0].contentWindow).print(),e&&e.close()},1e3)},a.fn.jqprint.defaults={debug:!1,importCSS:!0,addLogo:!0,printContainer:!0,customMSG:!0,operaSupport:!0},jQuery.fn.outer=function(){return a(a("<div></div>").html(this.clone())).html()}})(jQuery);
/* ---------- end jqprint ---------- */ 
/*
 * jquery.tools 1.1.2 - The missing UI library for the Web
 * 
 * [tools.tabs-1.0.4, tools.tabs.slideshow-1.0.2, tools.tabs.history-1.0.2, tools.tooltip-1.1.3, tools.tooltip.slide-1.0.0, tools.tooltip.dynamic-1.0.1]
 * 
 * Copyright (c) 2009 Tero Piirainen
 * http://flowplayer.org/tools/
 *
 * Dual licensed under MIT and GPL 2+ licenses
 * http://www.opensource.org/licenses
 * 
 * -----
 * 
 * File generated: Mon Feb 15 12:49:33 GMT 2010
 */
(function(d){d.tools=d.tools||{};d.tools.tabs={version:"1.0.4",conf:{tabs:"a",current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",api:false,rotate:false},addEffect:function(e,f){c[e]=f}};var c={"default":function(f,e){this.getPanes().hide().eq(f).show();e.call()},fade:function(g,e){var f=this.getConf(),j=f.fadeOutSpeed,h=this.getPanes();if(j){h.fadeOut(j)}else{h.hide()}h.eq(g).fadeIn(f.fadeInSpeed,e)},slide:function(f,e){this.getPanes().slideUp(200);this.getPanes().eq(f).slideDown(400,e)},ajax:function(f,e){this.getPanes().eq(0).load(this.getTabs().eq(f).attr("href"),e)}};var b;d.tools.tabs.addEffect("horizontal",function(f,e){if(!b){b=this.getPanes().eq(0).width()}this.getCurrentPane().animate({width:0},function(){d(this).hide()});this.getPanes().eq(f).animate({width:b},function(){d(this).show();e.call()})});function a(g,h,f){var e=this,j=d(this),i;d.each(f,function(k,l){if(d.isFunction(l)){j.bind(k,l)}});d.extend(this,{click:function(k,n){var o=e.getCurrentPane();var l=g.eq(k);if(typeof k=="string"&&k.replace("#","")){l=g.filter("[href*="+k.replace("#","")+"]");k=Math.max(g.index(l),0)}if(f.rotate){var m=g.length-1;if(k<0){return e.click(m,n)}if(k>m){return e.click(0,n)}}if(!l.length){if(i>=0){return e}k=f.initialIndex;l=g.eq(k)}if(k===i){return e}n=n||d.Event();n.type="onBeforeClick";j.trigger(n,[k]);if(n.isDefaultPrevented()){return}c[f.effect].call(e,k,function(){n.type="onClick";j.trigger(n,[k])});n.type="onStart";j.trigger(n,[k]);if(n.isDefaultPrevented()){return}i=k;g.removeClass(f.current);l.addClass(f.current);return e},getConf:function(){return f},getTabs:function(){return g},getPanes:function(){return h},getCurrentPane:function(){return h.eq(i)},getCurrentTab:function(){return g.eq(i)},getIndex:function(){return i},next:function(){return e.click(i+1)},prev:function(){return e.click(i-1)},bind:function(k,l){j.bind(k,l);return e},onBeforeClick:function(k){return this.bind("onBeforeClick",k)},onClick:function(k){return this.bind("onClick",k)},unbind:function(k){j.unbind(k);return e}});g.each(function(k){d(this).bind(f.event,function(l){e.click(k,l);return false})});if(location.hash){e.click(location.hash)}else{if(f.initialIndex===0||f.initialIndex>0){e.click(f.initialIndex)}}h.find("a[href^=#]").click(function(k){e.click(d(this).attr("href"),k)})}d.fn.tabs=function(i,f){var g=this.eq(typeof f=="number"?f:0).data("tabs");if(g){return g}if(d.isFunction(f)){f={onBeforeClick:f}}var h=d.extend({},d.tools.tabs.conf),e=this.length;f=d.extend(h,f);this.each(function(l){var j=d(this);var k=j.find(f.tabs);if(!k.length){k=j.children()}var m=i.jquery?i:j.children(i);if(!m.length){m=e==1?d(i):j.parent().find(i)}g=new a(k,m,f);j.data("tabs",g)});return f.api?g:this}})(jQuery);
(function(b){var a=b.tools.tabs;a.plugins=a.plugins||{};a.plugins.slideshow={version:"1.0.2",conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3000,clickable:true,api:false}};b.prototype.slideshow=function(e){var f=b.extend({},a.plugins.slideshow.conf),c=this.length,d;e=b.extend(f,e);this.each(function(){var p=b(this),m=p.tabs(),i=b(m),o=m;b.each(e,function(t,u){if(b.isFunction(u)){m.bind(t,u)}});function n(t){return c==1?b(t):p.parent().find(t)}var s=n(e.next).click(function(){m.next()});var q=n(e.prev).click(function(){m.prev()});var h,j,l,g=false;b.extend(m,{play:function(){if(h){return}var t=b.Event("onBeforePlay");i.trigger(t);if(t.isDefaultPrevented()){return m}g=false;h=setInterval(m.next,e.interval);i.trigger("onPlay");m.next()},pause:function(){if(!h){return m}var t=b.Event("onBeforePause");i.trigger(t);if(t.isDefaultPrevented()){return m}h=clearInterval(h);l=clearInterval(l);i.trigger("onPause")},stop:function(){m.pause();g=true},onBeforePlay:function(t){return m.bind("onBeforePlay",t)},onPlay:function(t){return m.bind("onPlay",t)},onBeforePause:function(t){return m.bind("onBeforePause",t)},onPause:function(t){return m.bind("onPause",t)}});if(e.autopause){var k=m.getTabs().add(s).add(q).add(m.getPanes());k.hover(function(){m.pause();j=clearInterval(j)},function(){if(!g){j=setTimeout(m.play,e.interval)}})}if(e.autoplay){l=setTimeout(m.play,e.interval)}else{m.stop()}if(e.clickable){m.getPanes().click(function(){m.next()})}if(!m.getConf().rotate){var r=e.disabledClass;if(!m.getIndex()){q.addClass(r)}m.onBeforeClick(function(u,t){if(!t){q.addClass(r)}else{q.removeClass(r);if(t==m.getTabs().length-1){s.addClass(r)}else{s.removeClass(r)}}})}});return e.api?d:this}})(jQuery);
(function(d){var a=d.tools.tabs;a.plugins=a.plugins||{};a.plugins.history={version:"1.0.2",conf:{api:false}};var e,b;function c(f){if(f){var g=b.contentWindow.document;g.open().close();g.location.hash=f}}d.fn.onHash=function(g){var f=this;if(d.browser.msie&&d.browser.version<"8"){if(!b){b=d("<iframe/>").attr("src","javascript:false;").hide().get(0);d("body").prepend(b);setInterval(function(){var i=b.contentWindow.document,j=i.location.hash;if(e!==j){d.event.trigger("hash",j);e=j}},100);c(location.hash||"#")}f.bind("click.hash",function(h){c(d(this).attr("href"))})}else{setInterval(function(){var j=location.hash;var i=f.filter("[href$="+j+"]");if(!i.length){j=j.replace("#","");i=f.filter("[href$="+j+"]")}if(i.length&&j!==e){e=j;d.event.trigger("hash",j)}},100)}d(window).bind("hash",g);return this};d.fn.history=function(g){var h=d.extend({},a.plugins.history.conf),f;g=d.extend(h,g);this.each(function(){var j=d(this).tabs(),i=j.getTabs();if(j){f=j}i.onHash(function(k,l){if(!l||l=="#"){l=j.getConf().initialIndex}j.click(l)});i.click(function(k){location.hash=d(this).attr("href").replace("#","")})});return g.api?f:this}})(jQuery);
(function(c){var d=[];c.tools=c.tools||{};c.tools.tooltip={version:"1.1.3",conf:{effect:"toggle",fadeOutSpeed:"fast",tip:null,predelay:0,delay:30,opacity:1,lazy:undefined,position:["top","center"],offset:[0,0],cancelDefault:true,relative:false,oneInstance:true,events:{def:"mouseover,mouseout",input:"focus,blur",widget:"focus mouseover,blur mouseout",tooltip:"mouseover,mouseout"},api:false},addEffect:function(e,g,f){b[e]=[g,f]}};var b={toggle:[function(e){var f=this.getConf(),g=this.getTip(),h=f.opacity;if(h<1){g.css({opacity:h})}g.show();e.call()},function(e){this.getTip().hide();e.call()}],fade:[function(e){this.getTip().fadeIn(this.getConf().fadeInSpeed,e)},function(e){this.getTip().fadeOut(this.getConf().fadeOutSpeed,e)}]};function a(f,g){var p=this,k=c(this);f.data("tooltip",p);var l=f.next();if(g.tip){l=c(g.tip);if(l.length>1){l=f.nextAll(g.tip).eq(0);if(!l.length){l=f.parent().nextAll(g.tip).eq(0)}}}function o(u){var t=g.relative?f.position().top:f.offset().top,s=g.relative?f.position().left:f.offset().left,v=g.position[0];t-=l.outerHeight()-g.offset[0];s+=f.outerWidth()+g.offset[1];var q=l.outerHeight()+f.outerHeight();if(v=="center"){t+=q/2}if(v=="bottom"){t+=q}v=g.position[1];var r=l.outerWidth()+f.outerWidth();if(v=="center"){s-=r/2}if(v=="left"){s-=r}return{top:t,left:s}}var i=f.is(":input"),e=i&&f.is(":checkbox, :radio, select, :button"),h=f.attr("type"),n=g.events[h]||g.events[i?(e?"widget":"input"):"def"];n=n.split(/,\s*/);if(n.length!=2){throw"Tooltip: bad events configuration for "+h}f.bind(n[0],function(r){if(g.oneInstance){c.each(d,function(){this.hide()})}var q=l.data("trigger");if(q&&q[0]!=this){l.hide().stop(true,true)}r.target=this;p.show(r);n=g.events.tooltip.split(/,\s*/);l.bind(n[0],function(){p.show(r)});if(n[1]){l.bind(n[1],function(){p.hide(r)})}});f.bind(n[1],function(q){p.hide(q)});if(!c.browser.msie&&!i&&!g.predelay){f.mousemove(function(){if(!p.isShown()){f.triggerHandler("mouseover")}})}if(g.opacity<1){l.css("opacity",g.opacity)}var m=0,j=f.attr("title");if(j&&g.cancelDefault){f.removeAttr("title");f.data("title",j)}c.extend(p,{show:function(r){if(r){f=c(r.target)}clearTimeout(l.data("timer"));if(l.is(":animated")||l.is(":visible")){return p}function q(){l.data("trigger",f);var t=o(r);if(g.tip&&j){l.html(f.data("title"))}r=r||c.Event();r.type="onBeforeShow";k.trigger(r,[t]);if(r.isDefaultPrevented()){return p}t=o(r);l.css({position:"absolute",top:t.top,left:t.left});var s=b[g.effect];if(!s){throw'Nonexistent effect "'+g.effect+'"'}s[0].call(p,function(){r.type="onShow";k.trigger(r)})}if(g.predelay){clearTimeout(m);m=setTimeout(q,g.predelay)}else{q()}return p},hide:function(r){clearTimeout(l.data("timer"));clearTimeout(m);if(!l.is(":visible")){return}function q(){r=r||c.Event();r.type="onBeforeHide";k.trigger(r);if(r.isDefaultPrevented()){return}b[g.effect][1].call(p,function(){r.type="onHide";k.trigger(r)})}if(g.delay&&r){l.data("timer",setTimeout(q,g.delay))}else{q()}return p},isShown:function(){return l.is(":visible, :animated")},getConf:function(){return g},getTip:function(){return l},getTrigger:function(){return f},bind:function(q,r){k.bind(q,r);return p},onHide:function(q){return this.bind("onHide",q)},onBeforeShow:function(q){return this.bind("onBeforeShow",q)},onShow:function(q){return this.bind("onShow",q)},onBeforeHide:function(q){return this.bind("onBeforeHide",q)},unbind:function(q){k.unbind(q);return p}});c.each(g,function(q,r){if(c.isFunction(r)){p.bind(q,r)}})}c.prototype.tooltip=function(e){var f=this.eq(typeof e=="number"?e:0).data("tooltip");if(f){return f}var g=c.extend(true,{},c.tools.tooltip.conf);if(c.isFunction(e)){e={onBeforeShow:e}}else{if(typeof e=="string"){e={tip:e}}}e=c.extend(true,g,e);if(typeof e.position=="string"){e.position=e.position.split(/,?\s/)}if(e.lazy!==false&&(e.lazy===true||this.length>20)){this.one("mouseover",function(h){f=new a(c(this),e);f.show(h);d.push(f)})}else{this.each(function(){f=new a(c(this),e);d.push(f)})}return e.api?f:this}})(jQuery);
(function(b){var a=b.tools.tooltip;a.effects=a.effects||{};a.effects.slide={version:"1.0.0"};b.extend(a.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!b.browser.msie});var c={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};b.tools.tooltip.addEffect("slide",function(d){var f=this.getConf(),g=this.getTip(),h=f.slideFade?{opacity:f.opacity}:{},e=c[f.direction]||c.up;h[e[1]]=e[0]+"="+f.slideOffset;if(f.slideFade){g.css({opacity:0})}g.show().animate(h,f.slideInSpeed,d)},function(e){var g=this.getConf(),i=g.slideOffset,h=g.slideFade?{opacity:0}:{},f=c[g.direction]||c.up;var d=""+f[0];if(g.bounce){d=d=="+"?"-":"+"}h[f[1]]=d+"="+i;this.getTip().animate(h,g.slideOutSpeed,function(){b(this).hide();e.call()})})})(jQuery);
(function(d){var c=d.tools.tooltip;c.plugins=c.plugins||{};c.plugins.dynamic={version:"1.0.1",conf:{api:false,classNames:"top right bottom left"}};function b(h){var e=d(window);var g=e.width()+e.scrollLeft();var f=e.height()+e.scrollTop();return[h.offset().top<=e.scrollTop(),g<=h.offset().left+h.width(),f<=h.offset().top+h.height(),e.scrollLeft()>=h.offset().left]}function a(f){var e=f.length;while(e--){if(f[e]){return false}}return true}d.fn.dynamic=function(g){var h=d.extend({},c.plugins.dynamic.conf),f;if(typeof g=="number"){g={speed:g}}g=d.extend(h,g);var e=g.classNames.split(/\s/),i;this.each(function(){if(d(this).tooltip().jquery){throw"Lazy feature not supported by dynamic plugin. set lazy: false for tooltip"}var j=d(this).tooltip().onBeforeShow(function(n,o){var m=this.getTip(),l=this.getConf();if(!i){i=[l.position[0],l.position[1],l.offset[0],l.offset[1],d.extend({},l)]}d.extend(l,i[4]);l.position=[i[0],i[1]];l.offset=[i[2],i[3]];m.css({visibility:"hidden",position:"absolute",top:o.top,left:o.left}).show();var k=b(m);if(!a(k)){if(k[2]){d.extend(l,g.top);l.position[0]="top";m.addClass(e[0])}if(k[3]){d.extend(l,g.right);l.position[1]="right";m.addClass(e[1])}if(k[0]){d.extend(l,g.bottom);l.position[0]="bottom";m.addClass(e[2])}if(k[1]){d.extend(l,g.left);l.position[1]="left";m.addClass(e[3])}if(k[0]||k[2]){l.offset[0]*=-1}if(k[1]||k[3]){l.offset[1]*=-1}}m.css({visibility:"visible"}).hide()});j.onShow(function(){var l=this.getConf(),k=this.getTip();l.position=[i[0],i[1]];l.offset=[i[2],i[3]]});j.onHide(function(){var k=this.getTip();k.removeClass(g.classNames)});f=j});return g.api?f:this}})(jQuery);
/* ---------- end jquery.tools ---------- */ 
/**
* maxChar jQuery plugin
* @author Mitch Wilson
* @version 0.1.0
* @requires jQuery
* @description Enforces max character limit on any input or textarea HTML element and provides user feedback.
* @see http://mitchwilson.net/2009/08/03/new-jquery-plugin-maxchar/
*/

(function($){
	$.fn.maxChar = function(limit, options) {
		// Define default settings and override w/ options.
		settings = jQuery.extend({
			indicator: 'indicator',
			pluralMessage: ' characters remaining',
			rate: 200,
			singularMessage: ' character remaining',
			spaceBeforeMessage: ' '
		}, options);
		// Define local variables.
		var limit = limit;
		var remaining = limit;
		var rate = settings.rate;
		var timer = null;
		var target = $(this);
		var indicator = getIndicator();
		var singularMessage = settings.singularMessage;
		var pluralMessage = settings.pluralMessage;
		// If user did not create indicator, we will create default one for them.
		if(indicator.size() == 0) {
			createIndicator();
		}
		// Create helper functions.
		function update(limit){
			var remaining = limit - target.val().length;
			if(remaining < 1) {
			indicator = getIndicator();
				target.val(target.val().slice(0,limit));
				remaining = 0; // Prevents displaying negative remaining character amounts, such as -1.
			}
			if(remaining == 1) {
				indicator.text(remaining + singularMessage);//'1,000 character limit. ' +
			} else {
				indicator.text(remaining + pluralMessage);//'1,000 character limit. ' +
			}
			try {
				if(console) {
					console.log(remaining);
				}
			} catch(e) {
				// Do nothing on error.
			}
		}
		function createIndicator(){
			target.after(settings.spaceBeforeMessage + '<span id="'+settings.indicator+'"></span>');
		}
		function getIndicator(){
			return $('#'+settings.indicator);
		}
		// Call update once on code initialization to update view if text is already in textarea,
		// eg, if user relaoads page or hits back button and form textarea retains previoulsy entered text.
		update(limit);
		// Bind to focus event to active when user starts interacting with textarea.
		$(this).focus(function(){
			if(timer == null) {
				timer = setInterval(function(){update(limit)}, rate);
			}
		});
		//
		$(this).blur(function() {
			if(timer != null) {
				clearInterval(timer);
				timer = null;
				// Clear manually in case blur happened between timer updates.
				update(limit);
			}
		});
	};
})(jQuery);
/*
 * jQuery validation plug-in 1.7
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright (c) 2006 - 2008 JÃ¶rn Zaefferer
 *
 * $Id: jquery.validate.js 6403 2009-06-17 14:27:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
(function($){$.extend($.fn,{validate:function(options){if(!this.length){options&&options.debug&&window.console&&console.warn("nothing selected, can't validate, returning nothing");return;}var validator=$.data(this[0],'validator');if(validator){return validator;}validator=new $.validator(options,this[0]);$.data(this[0],'validator',validator);if(validator.settings.onsubmit){this.find("input, button").filter(".cancel").click(function(){validator.cancelSubmit=true;});if(validator.settings.submitHandler){this.find("input, button").filter(":submit").click(function(){validator.submitButton=this;});}this.submit(function(event){if(validator.settings.debug)event.preventDefault();function handle(){if(validator.settings.submitHandler){if(validator.submitButton){var hidden=$("<input type='hidden'/>").attr("name",validator.submitButton.name).val(validator.submitButton.value).appendTo(validator.currentForm);}validator.settings.submitHandler.call(validator,validator.currentForm);if(validator.submitButton){hidden.remove();}return false;}return true;}if(validator.cancelSubmit){validator.cancelSubmit=false;return handle();}if(validator.form()){if(validator.pendingRequest){validator.formSubmitted=true;return false;}return handle();}else{validator.focusInvalid();return false;}});}return validator;},valid:function(){if($(this[0]).is('form')){return this.validate().form();}else{var valid=true;var validator=$(this[0].form).validate();this.each(function(){valid&=validator.element(this);});return valid;}},removeAttrs:function(attributes){var result={},$element=this;$.each(attributes.split(/\s/),function(index,value){result[value]=$element.attr(value);$element.removeAttr(value);});return result;},rules:function(command,argument){var element=this[0];if(command){var settings=$.data(element.form,'validator').settings;var staticRules=settings.rules;var existingRules=$.validator.staticRules(element);switch(command){case"add":$.extend(existingRules,$.validator.normalizeRule(argument));staticRules[element.name]=existingRules;if(argument.messages)settings.messages[element.name]=$.extend(settings.messages[element.name],argument.messages);break;case"remove":if(!argument){delete staticRules[element.name];return existingRules;}var filtered={};$.each(argument.split(/\s/),function(index,method){filtered[method]=existingRules[method];delete existingRules[method];});return filtered;}}var data=$.validator.normalizeRules($.extend({},$.validator.metadataRules(element),$.validator.classRules(element),$.validator.attributeRules(element),$.validator.staticRules(element)),element);if(data.required){var param=data.required;delete data.required;data=$.extend({required:param},data);}return data;}});$.extend($.expr[":"],{blank:function(a){return!$.trim(""+a.value);},filled:function(a){return!!$.trim(""+a.value);},unchecked:function(a){return!a.checked;}});$.validator=function(options,form){this.settings=$.extend(true,{},$.validator.defaults,options);this.currentForm=form;this.init();};$.validator.format=function(source,params){if(arguments.length==1)return function(){var args=$.makeArray(arguments);args.unshift(source);return $.validator.format.apply(this,args);};if(arguments.length>2&&params.constructor!=Array){params=$.makeArray(arguments).slice(1);}if(params.constructor!=Array){params=[params];}$.each(params,function(i,n){source=source.replace(new RegExp("\\{"+i+"\\}","g"),n);});return source;};$.extend($.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusInvalid:true,errorContainer:$([]),errorLabelContainer:$([]),onsubmit:true,ignore:[],ignoreTitle:false,onfocusin:function(element){this.lastActive=element;if(this.settings.focusCleanup&&!this.blockFocusCleanup){this.settings.unhighlight&&this.settings.unhighlight.call(this,element,this.settings.errorClass,this.settings.validClass);this.errorsFor(element).hide();}},onfocusout:function(element){if(!this.checkable(element)&&(element.name in this.submitted||!this.optional(element))){this.element(element);}},onkeyup:function(element){if(element.name in this.submitted||element==this.lastElement){this.element(element);}},onclick:function(element){if(element.name in this.submitted)this.element(element);else if(element.parentNode.name in this.submitted)this.element(element.parentNode);},highlight:function(element,errorClass,validClass){$(element).addClass(errorClass).removeClass(validClass);},unhighlight:function(element,errorClass,validClass){$(element).removeClass(errorClass).addClass(validClass);}},setDefaults:function(settings){$.extend($.validator.defaults,settings);},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date (ISO).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",accept:"Please enter a value with a valid extension.",maxlength:$.validator.format("Please enter no more than {0} characters."),minlength:$.validator.format("Please enter at least {0} characters."),rangelength:$.validator.format("Please enter a value between {0} and {1} characters long."),range:$.validator.format("Please enter a value between {0} and {1}."),max:$.validator.format("Please enter a value less than or equal to {0}."),min:$.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:false,prototype:{init:function(){this.labelContainer=$(this.settings.errorLabelContainer);this.errorContext=this.labelContainer.length&&this.labelContainer||$(this.currentForm);this.containers=$(this.settings.errorContainer).add(this.settings.errorLabelContainer);this.submitted={};this.valueCache={};this.pendingRequest=0;this.pending={};this.invalid={};this.reset();var groups=(this.groups={});$.each(this.settings.groups,function(key,value){$.each(value.split(/\s/),function(index,name){groups[name]=key;});});var rules=this.settings.rules;$.each(rules,function(key,value){rules[key]=$.validator.normalizeRule(value);});function delegate(event){var validator=$.data(this[0].form,"validator"),eventType="on"+event.type.replace(/^validate/,"");validator.settings[eventType]&&validator.settings[eventType].call(validator,this[0]);}$(this.currentForm).validateDelegate(":text, :password, :file, select, textarea","focusin focusout keyup",delegate).validateDelegate(":radio, :checkbox, select, option","click",delegate);if(this.settings.invalidHandler)$(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler);},form:function(){this.checkForm();$.extend(this.submitted,this.errorMap);this.invalid=$.extend({},this.errorMap);if(!this.valid())$(this.currentForm).triggerHandler("invalid-form",[this]);this.showErrors();return this.valid();},checkForm:function(){this.prepareForm();for(var i=0,elements=(this.currentElements=this.elements());elements[i];i++){this.check(elements[i]);}return this.valid();},element:function(element){element=this.clean(element);this.lastElement=element;this.prepareElement(element);this.currentElements=$(element);var result=this.check(element);if(result){delete this.invalid[element.name];}else{this.invalid[element.name]=true;}if(!this.numberOfInvalids()){this.toHide=this.toHide.add(this.containers);}this.showErrors();return result;},showErrors:function(errors){if(errors){$.extend(this.errorMap,errors);this.errorList=[];for(var name in errors){this.errorList.push({message:errors[name],element:this.findByName(name)[0]});}this.successList=$.grep(this.successList,function(element){return!(element.name in errors);});}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors();},resetForm:function(){if($.fn.resetForm)$(this.currentForm).resetForm();this.submitted={};this.prepareForm();this.hideErrors();this.elements().removeClass(this.settings.errorClass);},numberOfInvalids:function(){return this.objectLength(this.invalid);},objectLength:function(obj){var count=0;for(var i in obj)count++;return count;},hideErrors:function(){this.addWrapper(this.toHide).hide();},valid:function(){return this.size()==0;},size:function(){return this.errorList.length;},focusInvalid:function(){if(this.settings.focusInvalid){try{$(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin");}catch(e){}}},findLastActive:function(){var lastActive=this.lastActive;return lastActive&&$.grep(this.errorList,function(n){return n.element.name==lastActive.name;}).length==1&&lastActive;},elements:function(){var validator=this,rulesCache={};return $([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function(){!this.name&&validator.settings.debug&&window.console&&console.error("%o has no name assigned",this);if(this.name in rulesCache||!validator.objectLength($(this).rules()))return false;rulesCache[this.name]=true;return true;});},clean:function(selector){return $(selector)[0];},errors:function(){return $(this.settings.errorElement+"."+this.settings.errorClass,this.errorContext);},reset:function(){this.successList=[];this.errorList=[];this.errorMap={};this.toShow=$([]);this.toHide=$([]);this.currentElements=$([]);},prepareForm:function(){this.reset();this.toHide=this.errors().add(this.containers);},prepareElement:function(element){this.reset();this.toHide=this.errorsFor(element);},check:function(element){element=this.clean(element);if(this.checkable(element)){element=this.findByName(element.name)[0];}var rules=$(element).rules();var dependencyMismatch=false;for(method in rules){var rule={method:method,parameters:rules[method]};try{var result=$.validator.methods[method].call(this,element.value.replace(/\r/g,""),element,rule.parameters);if(result=="dependency-mismatch"){dependencyMismatch=true;continue;}dependencyMismatch=false;if(result=="pending"){this.toHide=this.toHide.not(this.errorsFor(element));return;}if(!result){this.formatAndAdd(element,rule);return false;}}catch(e){this.settings.debug&&window.console&&console.log("exception occured when checking element "+element.id
+", check the '"+rule.method+"' method",e);throw e;}}if(dependencyMismatch)return;if(this.objectLength(rules))this.successList.push(element);return true;},customMetaMessage:function(element,method){if(!$.metadata)return;var meta=this.settings.meta?$(element).metadata()[this.settings.meta]:$(element).metadata();return meta&&meta.messages&&meta.messages[method];},customMessage:function(name,method){var m=this.settings.messages[name];return m&&(m.constructor==String?m:m[method]);},findDefined:function(){for(var i=0;i<arguments.length;i++){if(arguments[i]!==undefined)return arguments[i];}return undefined;},defaultMessage:function(element,method){return this.findDefined(this.customMessage(element.name,method),this.customMetaMessage(element,method),!this.settings.ignoreTitle&&element.title||undefined,$.validator.messages[method],"<strong>Warning: No message defined for "+element.name+"</strong>");},formatAndAdd:function(element,rule){var message=this.defaultMessage(element,rule.method),theregex=/\$?\{(\d+)\}/g;if(typeof message=="function"){message=message.call(this,rule.parameters,element);}else if(theregex.test(message)){message=jQuery.format(message.replace(theregex,'{$1}'),rule.parameters);}this.errorList.push({message:message,element:element});this.errorMap[element.name]=message;this.submitted[element.name]=message;},addWrapper:function(toToggle){if(this.settings.wrapper)toToggle=toToggle.add(toToggle.parent(this.settings.wrapper));return toToggle;},defaultShowErrors:function(){for(var i=0;this.errorList[i];i++){var error=this.errorList[i];this.settings.highlight&&this.settings.highlight.call(this,error.element,this.settings.errorClass,this.settings.validClass);this.showLabel(error.element,error.message);}if(this.errorList.length){this.toShow=this.toShow.add(this.containers);}if(this.settings.success){for(var i=0;this.successList[i];i++){this.showLabel(this.successList[i]);}}if(this.settings.unhighlight){for(var i=0,elements=this.validElements();elements[i];i++){this.settings.unhighlight.call(this,elements[i],this.settings.errorClass,this.settings.validClass);}}this.toHide=this.toHide.not(this.toShow);this.hideErrors();this.addWrapper(this.toShow).show();},validElements:function(){return this.currentElements.not(this.invalidElements());},invalidElements:function(){return $(this.errorList).map(function(){return this.element;});},showLabel:function(element,message){var label=this.errorsFor(element);if(label.length){label.removeClass().addClass(this.settings.errorClass);label.attr("generated")&&label.html(message);}else{label=$("<"+this.settings.errorElement+"/>").attr({"for":this.idOrName(element),generated:true}).addClass(this.settings.errorClass).html(message||"");if(this.settings.wrapper){label=label.hide().show().wrap("<"+this.settings.wrapper+"/>").parent();}if(!this.labelContainer.append(label).length)this.settings.errorPlacement?this.settings.errorPlacement(label,$(element)):label.insertAfter(element);}if(!message&&this.settings.success){label.text("");typeof this.settings.success=="string"?label.addClass(this.settings.success):this.settings.success(label);}this.toShow=this.toShow.add(label);},errorsFor:function(element){var name=this.idOrName(element);return this.errors().filter(function(){return $(this).attr('for')==name;});},idOrName:function(element){return this.groups[element.name]||(this.checkable(element)?element.name:element.id||element.name);},checkable:function(element){return/radio|checkbox/i.test(element.type);},findByName:function(name){var form=this.currentForm;return $(document.getElementsByName(name)).map(function(index,element){return element.form==form&&element.name==name&&element||null;});},getLength:function(value,element){switch(element.nodeName.toLowerCase()){case'select':return $("option:selected",element).length;case'input':if(this.checkable(element))return this.findByName(element.name).filter(':checked').length;}return value.length;},depend:function(param,element){return this.dependTypes[typeof param]?this.dependTypes[typeof param](param,element):true;},dependTypes:{"boolean":function(param,element){return param;},"string":function(param,element){return!!$(param,element.form).length;},"function":function(param,element){return param(element);}},optional:function(element){return!$.validator.methods.required.call(this,$.trim(element.value),element)&&"dependency-mismatch";},startRequest:function(element){if(!this.pending[element.name]){this.pendingRequest++;this.pending[element.name]=true;}},stopRequest:function(element,valid){this.pendingRequest--;if(this.pendingRequest<0)this.pendingRequest=0;delete this.pending[element.name];if(valid&&this.pendingRequest==0&&this.formSubmitted&&this.form()){$(this.currentForm).submit();this.formSubmitted=false;}else if(!valid&&this.pendingRequest==0&&this.formSubmitted){$(this.currentForm).triggerHandler("invalid-form",[this]);this.formSubmitted=false;}},previousValue:function(element){return $.data(element,"previousValue")||$.data(element,"previousValue",{old:null,valid:true,message:this.defaultMessage(element,"remote")});}},classRuleSettings:{required:{required:true},email:{email:true},url:{url:true},date:{date:true},dateISO:{dateISO:true},dateDE:{dateDE:true},number:{number:true},numberDE:{numberDE:true},digits:{digits:true},creditcard:{creditcard:true}},addClassRules:function(className,rules){className.constructor==String?this.classRuleSettings[className]=rules:$.extend(this.classRuleSettings,className);},classRules:function(element){var rules={};var classes=$(element).attr('class');classes&&$.each(classes.split(' '),function(){if(this in $.validator.classRuleSettings){$.extend(rules,$.validator.classRuleSettings[this]);}});return rules;},attributeRules:function(element){var rules={};var $element=$(element);for(method in $.validator.methods){var value=$element.attr(method);if(value){rules[method]=value;}}if(rules.maxlength&&/-1|2147483647|524288/.test(rules.maxlength)){delete rules.maxlength;}return rules;},metadataRules:function(element){if(!$.metadata)return{};var meta=$.data(element.form,'validator').settings.meta;return meta?$(element).metadata()[meta]:$(element).metadata();},staticRules:function(element){var rules={};var validator=$.data(element.form,'validator');if(validator.settings.rules){rules=$.validator.normalizeRule(validator.settings.rules[element.name])||{};}return rules;},normalizeRules:function(rules,element){$.each(rules,function(prop,val){if(val===false){delete rules[prop];return;}if(val.param||val.depends){var keepRule=true;switch(typeof val.depends){case"string":keepRule=!!$(val.depends,element.form).length;break;case"function":keepRule=val.depends.call(element,element);break;}if(keepRule){rules[prop]=val.param!==undefined?val.param:true;}else{delete rules[prop];}}});$.each(rules,function(rule,parameter){rules[rule]=$.isFunction(parameter)?parameter(element):parameter;});$.each(['minlength','maxlength','min','max'],function(){if(rules[this]){rules[this]=Number(rules[this]);}});$.each(['rangelength','range'],function(){if(rules[this]){rules[this]=[Number(rules[this][0]),Number(rules[this][1])];}});if($.validator.autoCreateRanges){if(rules.min&&rules.max){rules.range=[rules.min,rules.max];delete rules.min;delete rules.max;}if(rules.minlength&&rules.maxlength){rules.rangelength=[rules.minlength,rules.maxlength];delete rules.minlength;delete rules.maxlength;}}if(rules.messages){delete rules.messages;}return rules;},normalizeRule:function(data){if(typeof data=="string"){var transformed={};$.each(data.split(/\s/),function(){transformed[this]=true;});data=transformed;}return data;},addMethod:function(name,method,message){$.validator.methods[name]=method;$.validator.messages[name]=message!=undefined?message:$.validator.messages[name];if(method.length<3){$.validator.addClassRules(name,$.validator.normalizeRule(name));}},methods:{required:function(value,element,param){if(!this.depend(param,element))return"dependency-mismatch";switch(element.nodeName.toLowerCase()){case'select':var val=$(element).val();return val&&val.length>0;case'input':if(this.checkable(element))return this.getLength(value,element)>0;default:return $.trim(value).length>0;}},remote:function(value,element,param){if(this.optional(element))return"dependency-mismatch";var previous=this.previousValue(element);if(!this.settings.messages[element.name])this.settings.messages[element.name]={};previous.originalMessage=this.settings.messages[element.name].remote;this.settings.messages[element.name].remote=previous.message;param=typeof param=="string"&&{url:param}||param;if(previous.old!==value){previous.old=value;var validator=this;this.startRequest(element);var data={};data[element.name]=value;$.ajax($.extend(true,{url:param,mode:"abort",port:"validate"+element.name,dataType:"json",data:data,success:function(response){validator.settings.messages[element.name].remote=previous.originalMessage;var valid=response===true;if(valid){var submitted=validator.formSubmitted;validator.prepareElement(element);validator.formSubmitted=submitted;validator.successList.push(element);validator.showErrors();}else{var errors={};var message=(previous.message=response||validator.defaultMessage(element,"remote"));errors[element.name]=$.isFunction(message)?message(value):message;validator.showErrors(errors);}previous.valid=valid;validator.stopRequest(element,valid);}},param));return"pending";}else if(this.pending[element.name]){return"pending";}return previous.valid;},minlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)>=param;},maxlength:function(value,element,param){return this.optional(element)||this.getLength($.trim(value),element)<=param;},rangelength:function(value,element,param){var length=this.getLength($.trim(value),element);return this.optional(element)||(length>=param[0]&&length<=param[1]);},min:function(value,element,param){return this.optional(element)||value>=param;},max:function(value,element,param){return this.optional(element)||value<=param;},range:function(value,element,param){return this.optional(element)||(value>=param[0]&&value<=param[1]);},email:function(value,element){return this.optional(element)||/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value);},url:function(value,element){return this.optional(element)||/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);},date:function(value,element){return this.optional(element)||!/Invalid|NaN/.test(new Date(value));},dateISO:function(value,element){return this.optional(element)||/^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(value);},number:function(value,element){return this.optional(element)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(value);},digits:function(value,element){return this.optional(element)||/^\d+$/.test(value);},creditcard:function(value,element){if(this.optional(element))return"dependency-mismatch";if(/[^0-9-]+/.test(value))return false;var nCheck=0,nDigit=0,bEven=false;value=value.replace(/\D/g,"");for(var n=value.length-1;n>=0;n--){var cDigit=value.charAt(n);var nDigit=parseInt(cDigit,10);if(bEven){if((nDigit*=2)>9)nDigit-=9;}nCheck+=nDigit;bEven=!bEven;}return(nCheck%10)==0;},accept:function(value,element,param){param=typeof param=="string"?param.replace(/,/g,'|'):"png|jpe?g|gif";return this.optional(element)||value.match(new RegExp(".("+param+")$","i"));},equalTo:function(value,element,param){var target=$(param).unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){$(element).valid();});return value==target.val();}}});$.format=$.validator.format;})(jQuery);;(function($){var ajax=$.ajax;var pendingRequests={};$.ajax=function(settings){settings=$.extend(settings,$.extend({},$.ajaxSettings,settings));var port=settings.port;if(settings.mode=="abort"){if(pendingRequests[port]){pendingRequests[port].abort();}return(pendingRequests[port]=ajax.apply(this,arguments));}return ajax.apply(this,arguments);};})(jQuery);;(function($){if(!jQuery.event.special.focusin&&!jQuery.event.special.focusout&&document.addEventListener){$.each({focus:'focusin',blur:'focusout'},function(original,fix){$.event.special[fix]={setup:function(){this.addEventListener(original,handler,true);},teardown:function(){this.removeEventListener(original,handler,true);},handler:function(e){arguments[0]=$.event.fix(e);arguments[0].type=fix;return $.event.handle.apply(this,arguments);}};function handler(e){e=$.event.fix(e);e.type=fix;return $.event.handle.call(this,e);}});};$.extend($.fn,{validateDelegate:function(delegate,type,handler){return this.bind(type,function(event){var target=$(event.target);if(target.is(delegate)){return handler.apply(target,arguments);}});}});})(jQuery);

/********************* BEGIN Custom Validation Code *********************/
// Returns the name of the current form being validated. Tracked as eVar23
function getFormName(currentForm){
	return currentForm.name || currentForm.id || currentForm.parentNode.name || currentForm.parentNode.id || currentForm.parentNode.className || "Form Not Named";
}

// Checks for any fields related to the requested field name and returns the value, e.g. searching for "name" would get the values for both First Name and Last Name
function getFieldValue(form, fieldName) {
	var fieldValue = '';
	var fields = $(form).serializeArray();
	for (var i = 0; i < fields.length; i++) {
		if ((fields[i].name.toLowerCase().indexOf(fieldName) >= 0) && (fields[i].value != '')) {
			if (fieldName.toLowerCase() !== 'name' || (fields[i].name.toLowerCase() !== 'ibname' && fields[i].name.toLowerCase() !== 'elqformname')) {
			    fieldValue+= (fieldValue ? ' ' : '') + fields[i].value;
			}
		}
	}
	return fieldValue;
}

// Initial error counter required for proper e-mail validation
jQuery.validator.submitStatus = true;

// Function called in showErorrs. Tracks field errors and sends the info to Omniture
function trackFormErrors(errorList, currentForm){
    var errorFieldNames = [];

    for (var i=0 ; i < errorList.length ; i++) {
        var error = errorList[i];
        errorFieldNames.push(error.element.id);
    }

    if (errorList.length > 0 && jQuery.validator.submitStatus === true) {

        var isDemo = $(currentForm).find('[name="rb"]').length ? true : false;

        amplify.publish('fxcm.form.onError', {
            'formType' : isDemo ? 'demo' : 'eloqua',
            'formName': getFormName(currentForm),
            'errorFieldNames': errorFieldNames.join(",")
        });

        jQuery.validator.submitStatus = false;
    }
}

jQuery.validator._demoBalanceRegEx = /^\d{0,13}(\.\d{0,2})?$/;
jQuery.validator.demoBalanceValidate = function(value, element){
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidBalance === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidBalance(value) : jQuery.validator._demoBalanceRegEx.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator._emailRegEx = /^[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*@(\[([0-9]{1,3}\.){3}[0-9]{1,3}\])|(([a-z\-0-9]+\.)+[a-z]{2,})$/i;
jQuery.validator.emailValidate = function(value, element) {
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidEmail === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidEmail(value) : jQuery.validator._emailRegEx.test(value)) {
		if (typeof s === 'object' && s.eVar23 !== getFormName(this.currentForm)) {
			s.linkTrackVars = s.apl(s.linkTrackVars, 'eVar23', ',', 1);
			s.eVar23 = getFormName(this.currentForm);
			if(s.TrackingFunctions) {
				s.TrackingFunctions.SetTrackingTimeout(1000, 'Form Name Capture');	// Use a timeout to avoid sending multiple requests as the user types
			}
		}
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator._phoneRegEx = /^[+()_,.:a-zA-Z\-=0-9 *]{0,20}$/i;
jQuery.validator.phoneValidate = function(value, element){
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidPhone === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidPhone(value) : jQuery.validator._phoneRegEx.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator._zipRegEx = function(value) { return (typeof value === 'string' || typeof value === 'number') && String(value).length <= 10 };
jQuery.validator.zipValidate = function(value, element){
	var demoValidation = typeof fxcm === 'object' && typeof fxcm.Demo === 'function' && typeof fxcm.Demo.prototype.isValidZip === 'function';

	if (demoValidation ? fxcm.Demo.prototype.isValidZip(value) : jQuery.validator._zipRegEx(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

// Use on sites that need stricter zip code validation. Does not employ fxcm.Demo validation rules.
jQuery.validator._zipRegExStrict = /^\d{5}$/;
jQuery.validator.zipValidateStrict = function(value, element){
	if (jQuery.validator._zipRegExStrict.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

// Use on sites that may require 4 or 5 digit zip codes.
jQuery.validator._zipRegEx4or5Digit = /^\d{4,5}$/;
jQuery.validator.zipValidate4or5Digit = function(value, element){
	if (jQuery.validator._zipRegEx4or5Digit.test(value)) {
		return true;
	} else {
		return this.optional(element);
	}
};

jQuery.validator.addMethod('demobalancecustom', jQuery.validator.demoBalanceValidate, 'Please enter a valid amount.');

jQuery.validator.addMethod('emailcustom', jQuery.validator.emailValidate, 'Please enter a valid email address.');

jQuery.validator.addMethod('phonecustom', jQuery.validator.phoneValidate, 'Please enter a valid phone number.');

jQuery.validator.addMethod('zipcustom', jQuery.validator.zipValidate, 'Please enter a valid zip code.');

jQuery.validator.addMethod('zipcustomstrict', jQuery.validator.zipValidateStrict, 'Please enter a valid 5 digit zip code.');

jQuery.validator.addMethod('zipcustom4or5Digit', jQuery.validator.zipValidate4or5Digit, 'Please enter a valid 4 or 5 digit zip code.');

jQuery.validator.addMethod('DateOfBirth', function(value, element) {
	return this.optional(element) || /^(0?[1-9]|1[012])[-\/.](0?[1-9]|[12][0-9]|3[01])[-\/.](19|20)\d\d$/.test(value);
}, 'Please enter a valid date of birth.');

jQuery.validator.addMethod('DateOfBirthEurope', function(value, element) {
	return this.optional(element) || /^(0?[1-9]|[12][0-9]|3[01])[-\/.](0?[1-9]|1[012])[-\/.](19|20)\d\d$/.test(value);
}, 'Please enter a valid date of birth.');

jQuery.validator.addMethod('DateOfBirthAsia', function(value, element) {
	return this.optional(element) || /^(19|20)\d\d[-\/.](0?[1-9]|1[012])[-\/.](0?[1-9]|[12][0-9]|3[01])$/.test(value);
}, 'Please enter a valid date of birth.');

jQuery.validator.addMethod('numbersCommasPeriodsOnly', function(value, element) {
	return this.optional(element) || /^[0-9,.]+$/.test(value);
}, 'Please use numbers, commas, or periods only.');

jQuery.validator.messages.required = "";

jQuery.validator.standardValidationOptions = {
	// showErrors is a function that sends form error information to Omniture for tracking
	showErrors: function(errorMap, errorList) {
		trackFormErrors(this.errorList, this.currentForm);
		//========BEGIN defaultShowErrors from jQuery.validator======
		for ( var i = 0; this.errorList[i]; i++ ) {
			var error = this.errorList[i];
			this.settings.highlight && this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
			this.showLabel( error.element, error.message );

			// Highlight invalid field's <label>
			this.settings.highlightLabel( this.settings.findLabel(this.currentForm, error.element), this.settings.errorLabelClass, true );
		}

		if( this.errorList.length ) {
			this.toShow = this.toShow.add( this.containers );
		}
		if (this.settings.success) {
			for ( var i = 0; this.successList[i]; i++ ) {
				this.showLabel( this.successList[i] );
			}
		}
		if (this.settings.unhighlight) {
			for ( var i = 0, elements = this.validElements(); elements[i]; i++ ) {
				this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );

			// Unhighlight invalid field's <label>
				this.settings.highlightLabel( this.settings.findLabel(this.currentForm, elements[i]), this.settings.errorLabelClass, false);
			}
		}
		this.toHide = this.toHide.not( this.toShow );
		this.hideErrors();
		this.addWrapper( this.toShow ).show();
		//=========END defaultShowErrors from jQuery.validator=======

	},
	// End of show Errors

	// Locates associated <label> of a form field
	findLabel: function (form, element){
		if ($(element).length < 1){ return false; }

		var _form = $(form),
			_element = $(element),
			_parentElement = _element.parent(),
			_labels = _parentElement.find('label');

		// if no label found, check if element is contained within its own label
		if (_labels.length < 1 && _parentElement.attr('tagName') === 'LABEL') {
			_labels = _parentElement;
		}

		// if no label found, loop upward through form to locate a label with proper "for" attribute
		while (_labels.length < 1) {
			if (_parentElement[0] === _form[0]) {break;} // reached the top of the form, break out of loop

			_parentElement = _parentElement.parent();
			_labels = _parentElement.find('label[for= '+ _element.attr('id') +']');
		}

		// collect all label elements that reside in a particular radiobox
		if (_element.attr('type') === 'radio'){
			var _radioLabels = _element.closest('.radiobox').find('label');
			if (_radioLabels.length > 0){
				_labels = _labels.add(_radioLabels);
			}
		}

		return _labels;
	},

	// Sets highlighting for <label> elements
	highlightLabel: function (label, errorLabelClass, highlight) {
		if (typeof label === undefined || $(label).length < 1) {return false}

		if(highlight) {
			$(label).addClass(errorLabelClass);
		}
		else {
			$(label).removeClass(errorLabelClass);
		}
	},
	// End label highlighting

	errorElement: 'span',
	errorClass: 'invalid',
	errorLabelClass: 'validate',

	rules: {
		email: {
			required: true,
			emailcustom: true
		},
		JointEmail: {
			emailcustom: true
		},
		phone: {
			phonecustom: true
		},
		TransferAmount: {
			required: '#transferConsent:checked'
		},
		ExistingAccountNumber: {
			required: '#TransferFunds:checked'
		},
		'demo.phone': {
			required: true,
			phonecustom: true
		},
		'demo.initial_balance': {
			demobalancecustom: true
		},
		'demo.zip_postal_code': {
			zipcustom: true
		},
		DateOfBirth: {
			DateOfBirth: true
		},
		AmountDisputed: {
			numbersCommasPeriodsOnly: true
		}

	},
	messages: {
		consent: {
			required: 'Please agree to the statement'
		}
	},
	onfocusout: function(element, event){
		// this function returns determines what to do on blur for each field
		// if there are rules set for the current field (element)
		if(typeof this.settings.rules[element.name] != 'undefined'){
			// if 'phonecustom' is the validation method for this field, and the field is valid
			if(this.settings.rules[element.name]['phonecustom'] && this.element(element)){
				// strip whitespaces from this field
				element.value = element.value.replace(/ /g, '');
			}
		}
		// required so all fields are validated on blur
		this.element(element);
	}

	/* The following options are also available:
	onkeyup:
	onsubmit:
	*/
};

// Field name aliases
var _jQueryValidatorRules = jQuery.validator.standardValidationOptions.rules;
// Aliases for required email rule
_jQueryValidatorRules['demo.email_address'] =
	_jQueryValidatorRules['C_EmailAddress'] =
	_jQueryValidatorRules.EMAIL =
	_jQueryValidatorRules.Email =
	_jQueryValidatorRules.email;

// Aliases for non-required email
_jQueryValidatorRules.JointAccountEmail =
	_jQueryValidatorRules.JointEmailAddress =
	_jQueryValidatorRules.JointEmail;

// Aliases for phone field
_jQueryValidatorRules['C_BusPhone'] =
	_jQueryValidatorRules.PHONE =
	_jQueryValidatorRules.Phone =
	_jQueryValidatorRules.phone;

// Aliases for DOB
_jQueryValidatorRules['DOB'] =
	_jQueryValidatorRules.DateofBirth =
	_jQueryValidatorRules.Dateofbirth =
	_jQueryValidatorRules.dateofbirth =
	_jQueryValidatorRules.DateOfBirth;

var _jQueryValidatorMessages = jQuery.validator.standardValidationOptions.messages;
// Aliases for consent message
_jQueryValidatorMessages.youherbebyacknowledgethatyou =
	_jQueryValidatorMessages.Confirm =
	_jQueryValidatorMessages.consentTransfer =
	_jQueryValidatorMessages.transferConsent =
	_jQueryValidatorMessages.Consent =
	_jQueryValidatorMessages.Consent2 =
	_jQueryValidatorMessages.consent;

// Legacy object to support old code
jQuery.validator.customDemoFormValidationOptions = jQuery.validator.standardValidationOptions;

/*
Form Dependency Plugin
======================
Allows for elements to be shown/hidden based on a set of field validation rules.

See README.md for documentation.

Author: Ben Brady
Licensed: MIT

https://gist.github.com/keyo/2970340

*/
!function(a){a.fn.dependsOn=function(b){var c=this,d={rules:[],ruleLogic:"all",onValid:function(b){a(b).show()},onInvalid:function(b){a(b).hide()}};b=a.extend(d,b);var e=function(){var d=0,e=0;a.each(b.rules,function(b,c){if(void 0==c.validate&&(c.validate=function(b){var c;return 0==a(b+":not(:disabled)").length?!0:(c=a(b).is("input[type=checkbox], input[type=radio]")?a(b+":not(:disabled):checked").val():a(b+":not(:disabled)").val(),void 0!=c?!0:!1)}),"string"==typeof c.validate){var f=c.validate;c.validate=function(b){var c;return c=a(b).is("input[type=checkbox], input[type=radio]")?a(b+":not(:disabled):checked").val():a(b+":not(:disabled)").val(),c===f?!0:!1}}var g=c.validate(c.field);g?d++:e++}),"all"==b.ruleLogic&&e>0?b.onInvalid(c):"any"==b.ruleLogic&&0==d?b.onInvalid(c):b.onValid(c)};return a.each(b.rules,function(b,c){a(c.field).change(function(){e()})}),e(),this}}(jQuery);

if (typeof jQuery !== 'undefined') {
$(document).ready(function(){


	/********************* BEGIN Custom Validation Application *********************/
	if (typeof jQuery.validator !== 'undefined') {

		// Required for proper firing of tracking requests
		$("form").submit(function(){
			jQuery.validator.submitStatus = true;
		});

		// The forms must be looped through because jQuery Validator's .validate() function will treat all the forms as one big form
		$('form.std_validate, form.standard, form.custom').each(function() {
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		// Attach Eloqua AJAX submission
		jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.genericEloquaValidatorSubmitHandler;
		$('form.genericEloqua').each(function() {
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.confBoxEloquaValidatorSubmitHandler;
		$('form.confBoxEloqua').each(function() {
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		// Attach actions for Demo signup in conjunction with Seminar event signup
		$('form.confBoxSeminarDemoCoreg').each(function() {

			var $form = $( this );
			var rb = $form.find('input[name="rb"]').val();

			// populate demo.country hidden input field for generating demos
			$('select[name="country"]').change(function() {
				fxcm.internal.setDemoCountryField(this);
			});

			// Set submitHandler
			jQuery.validator.standardValidationOptions.submitHandler = fxcm.internal.trackingFactory( fxcm.internal.confBoxEloquaValidatorSubmitHandler, function(){
				var demoField = $form.find( '#demo-signup' );
				var demoFired = false; //default

				// Determine if user requested a demo
				if( demoField.length ) {
					demoFired =  demoField.attr('type') === 'checkbox' ? demoField.is( ':checked' ) : $.inArray( demoField.val().toLowerCase(), [ "yes", "on" ] ) > -1; // support multiple formats (yes/on)
				}

				fxcm.internal.toggleDemoConfText(demoFired); // set proper state of confirmation depending on whether user requested demo or not
				fxcm.internal.seminarDemoCoregTrackingCallback(rb, $form.attr('name'), demoFired);
			});

			$( this ).validate( jQuery.validator.standardValidationOptions );
		});

		// Attach Demo AJAX submission
		$('form.genericDemo').each(function() {
			jQuery.validator.standardValidationOptions.submitHandler = $(this).hasClass('countryFilter') ?
				fxcm.internal.genericCountryDemoValidatorSubmitHandler :
				fxcm.internal.genericDemoValidatorSubmitHandler;
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		$('form.confBoxDemo').each(function() {
			jQuery.validator.standardValidationOptions.submitHandler = $(this).hasClass('countryFilter') ?
				fxcm.internal.confBoxCountryDemoValidatorSubmitHandler :
				fxcm.internal.confBoxDemoValidatorSubmitHandler;
			$(this).validate(jQuery.validator.standardValidationOptions);
		});

		delete jQuery.validator.standardValidationOptions.submitHandler;
	}
	/********************* END Custom Validation Application *********************/




	/********************* BEGIN UI Application *********************/
	if (typeof fxcm.ui !== 'undefined') {
		// Attach ExpandableSet functionality
		$('div.expandableSet').each(function() {
			new fxcm.ui.ExpandableSet(this);
		});

		// Attach LabelPlaceholder functionality
		$('form.placeholderLabel').each(function() {
			new fxcm.ui.PlaceholderLabel(this);
		});
	}
	/********************* END UI Application *********************/



	/********************* Additional Applications *********************/
	// Set autocomplete="off" for all submit buttons to prevent FF issue where submit stays disabled through refresh
	$('input[type=submit],input[type=image]').attr('autocomplete', 'off');

	/* Enable "formHint" form style, where labels are used as field placeholder text */
	$('form.labelHint').find('input.text').focus(function(){
		$(this).prev('label').hide();
	});
	$('form.labelHint').find('input.text').blur(function(){
		if($(this).val() === ''){
			$(this).prev('label').show();
		}
	});
});
}

/******************* Legacy Functions *******************/
// everything below here came from the old legacy_functions.js

// Create Object for Custom Omniture Tracking
var sProperties = {};

// Generate Trackable Flowplayer Clip Object
function FlowplayerClip(configuration) {
	if (typeof configuration === 'undefined') {
		configuration = {};
	}

	// Track start event for this clip
	configuration.onStart = function(clip) {
		s.TrackingFunctions.mediaInit(clip.completeUrl,clip.fullDuration,this.getParent().id);
	};

	// Track pause event for this clip. time (in seconds) is also tracked
	configuration.onPause = function(clip) {
		s.TrackingFunctions.mediaPause(clip.completeUrl,parseInt(this.getTime()));
	};

	// Track Resume of player
	configuration.onResume = function(clip) {
		s.TrackingFunctions.mediaResume(clip.completeUrl,parseInt(this.getTime()));
	};

	// Track stop event for this clip. time is also tracked
	configuration.onStop = function(clip) {
		s.TrackingFunctions.mediaPause(clip.completeUrl,parseInt(this.getTime()));
	};

	// Track finish event for this clip
	configuration.onFinish = function(clip) {
		s.TrackingFunctions.mediaComplete(clip.completeUrl);
	};

	// Track FF or REV
	configuration.onSeek = function(clip) {
		s.TrackingFunctions.mediaSeek(clip.completeUrl,parseInt(this.getTime()));
	};

	return configuration;
}

// Retrieves a URL Query Parameter, null if it does not exist
function getURLParameter(ParameterName) {
	if (document.location.href.indexOf('?') > -1) {
		var URLParameters = document.location.href.substr(document.location.href.indexOf('?')+1);
		URLParameters = URLParameters.split('&');
		for (URLParameterIndex in URLParameters) {
			if (decodeURIComponent(URLParameters[URLParameterIndex].split('=')[0]).toUpperCase() == ParameterName.toUpperCase()) {
					return URLParameters[URLParameterIndex].split("=")[1];
				}
		}
	}
	return null;
}

// Reads a cookie (Taken from JQuery Cookie: https://github.com/carhartl/jquery-cookie  7/8/11 Snapshot)
if (typeof fxcm.lib !== 'undefined') {
	function ReadCookie(cookieName) {
		return fxcm.lib.readCookie(cookieName);
	}
}

// Retrieves the most recent Campaign ID checking the URL first, then the cookie
function GetCampaignID() {
	var CampaignID = getURLParameter('CMP');
	if (CampaignID == null) {
		var CampaignString;
		if (CampaignString = ReadCookie('s_cpm')) {
			eval('var CampaignArray = ' + CampaignString);
			CampaignID = CampaignArray[CampaignArray.length - 1][0];
		}
	}
	return (CampaignID == null ? '' : CampaignID); //Do not return null
}

// Generates TransactionIDs for use with FXCorporate in the format that their forms use
function GenerateTransactionID(SessionID) {
	if (typeof SessionID === 'undefined') {
		SessionID = GenerateNumericID(17);
	}

	var TransactionID = '';
	var DateObj = new Date();
	var TransactionIDSections = [DateObj.getFullYear() % 100, DateObj.getMonth() + 1, DateObj.getDate()];
	for (var Section = 0; Section < TransactionIDSections.length; Section++) {
		TransactionID += (TransactionIDSections[Section] < 10 ? '0' : '') + TransactionIDSections[Section];
	}
	TransactionID += '_' + SessionID;
	return TransactionID;
}

// Generates Locally Unique IDs (Length parameter is optional)
function GenerateNumericID(Length) {
	if (typeof Length === 'undefined') {
		Length = 20;	// Maximum length before the browser uses scientific notation
	}
	return Math.floor(Math.random() * Math.pow(10, Length));
}

// Adds tracking parameters to an iframed fxcorporate demo form tagged with id="demo_reg"
function iframeLoadGlobal(fxcorporateURL, iframeID) {
	var iframeURL = fxcorporateURL;

	var SessionID = getURLParameter('jsessionid');
	if (SessionID === null){
		SessionID = ReadCookie('JSESSIONID');
	}

	var TransactionID = getURLParameter('tid');
	if (TransactionID === null){
		TransactionID = ReadCookie('tid');
		if (TransactionID === null) {
			if (SessionID) {
				TransactionID = GenerateTransactionID(SessionID);
			} else {
				TransactionID = GenerateTransactionID();
			}
		}
	}
	iframeURL += '&tid=' + TransactionID;

	var LastCampaign = GetCampaignID();
	if (LastCampaign) {
		iframeURL += '&cmp=' + LastCampaign;
	}

	var Keyword = getURLParameter('keyword');
	if (Keyword === null){
		Keyword = ReadCookie('keyword');
	}
	if (Keyword) {
		iframeURL += '&keyword=' + Keyword;
	}

	document.getElementById(typeof iframeID !== 'undefined' ? iframeID : 'demo_reg').src = iframeURL;
}

// Turns a form into a custom demo form
function CustomDemoFormSetup(FormID, IB) {
	// Confirm that the form exists
	var Form = document.getElementById(FormID);
	if (!Form) { return false; }

	// Define values that are consistent across all forms
	var HiddenInputs = {
		rb: IB,
		IBNAME: IB,
		elqFormName: IB,
		elqSiteID: 202,
		tid: GenerateTransactionID()
	};

	// Define values that are specific to each form
	switch(IB.toLowerCase()) {
		case 'fxcm':
			HiddenInputs.DB = 'PremiumDemo';
			break;

		case 'active_trader':
			HiddenInputs.DB = 'XTPDEMO01';
			break;

		case 'tsg_llc':
			HiddenInputs.DB = 'XTPDEMO01';
			break;

		case 'strategy_trader_llc':
			HiddenInputs.DB = 'U100D1';
			break;

		case 'fxcmau':
			HiddenInputs.DB = 'AUDMINIDEMO';
			break;

		case 'fxcm-french':
			HiddenInputs.DB = 'EUDEMO';
			break;

		case 'fxcm_germany':
			HiddenInputs.DB = 'EUDEMO';
			break;

		case 'fxcm-italy':
			HiddenInputs.DB = 'EUDEMO';
			break;

		case 'fxcmuk':
			HiddenInputs.DB = 'U100D1';
			break;

		case 'fxcmgbp_spread_betting':
			HiddenInputs.DB = 'GBDEMO';
			break;

		case 'cnbc_10k_llc':
			HiddenInputs.DB = 'PremiumDemo';
			break;

		case 'cnbc_10k_au':
			HiddenInputs.DB = 'AUDMINIDEMO';
			break;

		case 'cnbc_10k_ltd':
			HiddenInputs.DB = 'U100D1';
			break;

		default:
			return false;
	}

	// Capture the campaign if one exists
	var CampaignID = GetCampaignID();
	if (CampaignID) {
		HiddenInputs.cmp = CampaignID;
	}

	// Generate hidden iframe for confirmation page
	if (Form.getAttribute('target') === null)
	{
		var TargetName = GenerateNumericID();
		try {
			var iframeTarget = document.createElement('<iframe name="' + TargetName + '" />');	// IE Fix
		} catch (ex) {
			var iframeTarget = document.createElement('iframe');
			iframeTarget.setAttribute('name', TargetName);
		}
		iframeTarget.setAttribute('id', TargetName);
		iframeTarget.setAttribute('style','display:none');
		iframeTarget.setAttribute('width','1');
		iframeTarget.setAttribute('height','1');
		document.body.appendChild(iframeTarget);
		Form.setAttribute('target', TargetName);
	}

	// Setup Form Element
	Form.setAttribute('method', 'post');
	Form.setAttribute('action', 'https://secure4.fxcorporate.com/tr-demo/form/register-form');

	// Add hidden fields
	var HiddenInput;
	for (var HiddenInputName in HiddenInputs) {
		HiddenInput = document.getElementsByName(HiddenInputName);
		if (HiddenInput.length == 1)
		{
			HiddenInput = HiddenInput[0];
		} else {
			HiddenInput = document.createElement('input');
			HiddenInput.setAttribute('type', 'hidden');
			HiddenInput.setAttribute('name', HiddenInputName);
			Form.appendChild(HiddenInput);
		}
		HiddenInput.setAttribute('value',  HiddenInputs[HiddenInputName]);
	}

	return true;
}

// Wrapper for CustomDemoFormSetup mapping country and  account type(optional) to IB
function CustomDemoFormSetupByCountry(formID, country, accountType)
{
	if (typeof country === 'undefined') { return false; }
	if (typeof accountType === 'undefined') { accountType = 'ts'; }

	country = country.toLowerCase();
	accountType = accountType.toLowerCase();

	var ib;
	switch(country) {
		case 'united_states':
		case 'american_samoa':
		case 'guam':
		case 'puerto_rico':
			switch(accountType) {
				case 'ts':
					ib = 'fxcm';
					break;

				case 'at':
					ib = 'active_trader';
					break;

				case 'tsg':
					ib = 'tsg_llc';
					break;

				case 'st':
					ib = 'strategy_trader_llc';
					break;

				default:
					return false;
			}
			break;

		case 'australia':
		case 'new_zealand':
			ib = 'fxcmau';
			break;

		default:
			switch(accountType) {
				case 'ts':
					ib = 'fxcmuk';
					break;

				case 'sb':
					ib = 'fxcmgbp_spread_betting';
					break;

				default:
					return false;
			}
			break;
	}

	return CustomDemoFormSetup(formID, ib);
}
fxcm.registration = {};

// Demo RB Map
fxcm.registration.demoRBMap = {
	active_trader: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	au_dd_ts_retail: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO', USD: 'PremiumDemo'}
	},
	au_at_ts_retail: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO', USD: 'U100D1'}
	},
	au_dd_mt4_retail: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO', USD: 'MT4USDDEMO02'}
	},
	canada: {
		platform: 'ts',
		db: {USD: 'U10D2'}
	},
	canada_friedberg_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	canada_friedberg_ninja: {
		platform: 'ninja',
		db: {USD: 'U100D1'}
	},
	cnbc_10k_au: {
		db: {AUD: 'AUDMINIDEMO'}
	},
	cnbc_10k_llc: {
		db: {USD: 'PremiumDemo'}
	},
	cnbc_10k_ltd: {
		db: {USD: 'U100D1'}
	},
	dailyfx_au: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO'}
	},
	dailyfx_uk: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	dailyfx_us: {
		platform: 'ts',
		db: {USD: 'PremiumDemo'}
	},
	etradefx: {
		db: {USD: 'MINIDEMO7'}
	},
	fmcm_sp: {
		db: {EUR: 'EUDEMO'}
	},
	fx_greece: {
		platform: 'ts',
		db: {USD: 'MiniDemo', EUR: 'EUDEMO'}
	},
	fxcm: {
		platform: 'ts',
		db: {USD: 'PremiumDemo'}
	},
	'fxcm-french': {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcm_germany: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcm_italy: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcm_testing: {
		platform: 'ts',
		db: {EUR: 'MT4EURDEMO', GBP: 'MT4GBPDEMO', USD: 'MT4USDDEMO' }
	},
	fxcm_university_contest: {
		platform: 'ts',
		db: {USD: 'PremiumDemo'}
	},
	fxcmau: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO', USD: 'PremiumDemo'}
	},
	fxcmar_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmasia: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmasiaen: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmbullion_tc_ts2_dd: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmbullion_en_ts2_dd: {
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmbullion_sc_ts2_dd:{
		db: {USD: 'HKDEMO2', HKD: 'HONGKONGDEMO'}
	},
	fxcmau_bt: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO', USD: 'MT4USDDEMO02'}
	},
	fxcmde_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
	fxcmfr_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
	fxcmgbp_spread_betting: {
		db: {GBP: 'GBDEMO'}
	},
	fxcmgr_mt4: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO', USD: 'MT4USDDEMO02', EUR: 'MT4EURDEMO' }
	},
	fxcmm_ar_at_ts : {
		db: {USD: 'MiniDemo'}
	},
	fxcmsc_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmtc_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmuk: {
		platform: 'ts',
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'PremiumDemo'}
	},
	'fxcmuk-chinese': {
		platform: 'ts',
		db: {USD: 'U100D5'}
	},
	fxcmuk_active_trader: {
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'U100D1'}
	},
	fxcmuk_bt: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO', EUR: 'MT4EURDEMO', USD: 'MT4USDDEMO02'},
		server: {GBP: 'FXCM-GBPDemo01', EUR: 'FXCM-EURDemo01', USD: 'FXCM-USDDemo02'}
	},
	fxcmuk_es: {
		platform: 'ts',
		db: {EUR: 'EUDEMO', GBP: 'GBDEMO', USD: 'PremiumDemo'}
	},
	fxcmuk_de_dd_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
	fxcmuk_de_dd_ts: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_de_at_ts_retail: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	ninja_trader_de: {
		platform: 'ninja',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_fr_dd_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
	fxcmuk_fr_dd_ts: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_fr_at_ts_retail: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_hellas_dd_tsii: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_hellas_ninja: {
		platform: 'ninja',
		db: {USD: 'MiniDemo', EUR: 'EUDEMO'}
	},
	fxcmuk_it_dd_ts: {
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_it_dd_mt4: {
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
    fxcmuk_it_at_ts_retail:{
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
	fxcmuk_spread_betting: {
		platform: 'ts',
		db: {GBP: 'GBDEMO'}
	},
	fxcmuk_zh_at: {
		db: {USD: 'U100D5'}
	},
	fxcmuksb_mt4: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO'},
		server: { GBP: 'FXCM-GBPDemo01'}
	},
	godmodetradercontest: {
		db: {EUR: 'EUDEMO'}
	},
	llc_dd_mt4_retail_usd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	llc_dd_ts_retail_usd: {
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	ltd_dd_mt4_retail: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO', EUR: 'MT4EURDEMO', USD: 'MT4USDDEMO02'}
	},
	ltd_dd_mt4_retail_gbp: {
		platform: 'mt4',
		db: {GBP: 'MT4GBPDEMO'}
	},
	ltd_dd_ts_retail: {
		platform: 'ts',
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'U100D2'}
	},
	ltd_dd_ts_retail_usd: {
		platform: 'ts',
		db: {USD: 'U100D2'}
	},
	ltd_ninja: {
		platform: 'ninja',
		db: {GBP: 'GBDEMO', EUR: 'EUDEMO', USD: 'MiniDemo'}
	},
	fxcm_markets_usd_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcm_markets_usd_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcm_markets_usd_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcm_markets_usd_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'},
		server: {USD: 'FXCM-USDDemo01'}
	},
	fxcm_markets_ts_at_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmm_ar_ts_dd: {
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmm_ar_ts_ndd: {
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmm_ar_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmm_ar_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'},
		server: {USD: 'FXCM-USDDemo01'}
	},
	ninja_trader_llc: {
		platform: 'ninja',
		db: {USD: 'MiniDemo'}
	},
	strategy_trader_llc: {
		db: {USD: 'U100D1'}
	},
	tsg_llc: {
		db: {USD: 'XTPDEMO01'}
	},
	ninja_trader_au: {
		db: {AUD: 'AUDMINIDEMO', USD: 'PremiumDemo'}
	},
	fxcmid_markets_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmid_markets_usd_mt4: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmid_markets_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmid_markets_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmph_markets_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmph_markets_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmph_markets_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmph_markets_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmmy_markets_mt4_ndd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmmy_markets_ts_dd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	fxcmmy_markets_ts_ndd: {
		platform: 'ts',
		db: {USD: 'U100D1'}
	},
	ftlbullion_demo: {
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmau_tc_mt4: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO'}
	},
	fxcmau_sc_mt4: {
		platform: 'mt4',
		db: {AUD: 'MT4AUDDEMO'}
	},
	fxcmau_chinese: {
		platform: 'ts',
		db: {AUD: 'AUDMINIDEMO'}
	},
	fxcmmy_markets_mt4_dd: {
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmth_markets_ts_dd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmth_markets_ts_ndd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmth_markets_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmth_markets_mt4_ndd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmvn_markets_ts_dd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmvn_markets_ts_ndd:{
		platform: 'ts',
		db: {USD: 'MiniDemo'}
	},
	fxcmvn_markets_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmvn_markets_mt4_ndd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO'}
	},
	fxcmbullion_en_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'}
	},
	fxcmbullion_tc_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'}
	},
	fxcmbullion_sc_mt4_dd:{
		platform: 'mt4',
		db: {USD: 'MT4USDDEMO02'}
	},
    fxcm_italian:{
		platform: 'ts',
		db: {EUR: 'EUDEMO'}
	},
    fxcmit_mt4:{
		platform: 'mt4',
		db: {EUR: 'MT4EURDEMO'}
	},
    fxcm_italian_ninja:{
		platform: 'ninja',
		db: {EUR: 'EUDEMO'}
	}
};
fxcm.registration.demoRBMap['fxcm-italy'] = fxcm.registration.demoRBMap.fxcm_italy;
fxcm.registration.demoRBMap.fxcmuk_french = fxcm.registration.demoRBMap['fxcm-french'];


fxcm.packageDetails = {};
fxcm.packageDetails.packageUsed = 'legacy';
fxcm.packageDetails.filesIncluded = 25;
fxcm.packageDetails.libraries = ['jquery', 'json2', 'modernizr', 'swfobject', 'amplify', 'handlebars'];
fxcm.packageDetails.modules = ['support', 'lib', 'calendar', 'demo', 'eloqua', 'flowplayer', 'internal', 'jpersist', 'twitterstream', 'ui', 'gtm-prep', 'gtm'];
fxcm.packageDetails.plugins = ['autocomplete', 'colorbox', 'jqprint', 'jqtools', 'maxchar', 'validation', 'formdependency'];
fxcm.packageDetails.errors = [];fxcm.packageDetails.errors.push("'add' is not a valid component type");