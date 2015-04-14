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

/* ---------- start jquery.simpletip ---------- */ 
/* SIMPLETIP */
/**
 * jquery.simpletip 1.3.1. A simple tooltip plugin
 * 
 * Copyright (c) 2009 Craig Thompson
 * http://craigsworks.com
 *
 * Licensed under GPLv3
 * http://www.opensource.org/licenses/gpl-3.0.html
 *
 * Launch  : February 2009
 * Version : 1.3.1
 * Released: February 5, 2009 - 11:04am
 */
(function(e){function t(e,t){var n=this;e=jQuery(e);var r=jQuery(document.createElement("div")).addClass(t.baseClass).addClass(t.fixed?t.fixedClass:"").addClass(t.persistent?t.persistentClass:"").html(t.content).appendTo("body");t.hidden?r.hide():r.show(),t.persistent?(e.click(function(t){t.target===e.get(0)&&(r.css("display")!=="none"?n.hide():n.show())}),jQuery(window).mousedown(function(e){if(r.css("display")!=="none"){var i=t.focus?jQuery(e.target).parents(".tooltip").andSelf().filter(function(){return this===r.get(0)}).length:0;i===0&&n.hide()}})):(e.hover(function(e){n.show(e)},function(){setTimeout(function(){r.hasClass("isCurrentlyHovered")===!1&&n.hide()},100)}),r.hover(function(){r.addClass("isCurrentlyHovered")},function(){r.removeClass("isCurrentlyHovered"),r.hide()}),t.fixed||e.mousemove(function(e){r.css("display")!=="none"&&n.updatePos(e)})),jQuery.extend(n,{getVersion:function(){return[1,2,0]},getParent:function(){return e},getTooltip:function(){return r},getPos:function(){return r.offset()},setPos:function(t,i){var s=e.offset();return typeof t=="string"&&(t=parseInt(t)+s.left),typeof i=="string"&&(i=parseInt(i)+s.top),r.css({left:t,top:i}),n},show:function(e){t.onBeforeShow.call(n),n.updatePos(t.fixed?null:e);switch(t.showEffect){case"fade":r.fadeIn(t.showTime);break;case"slide":r.slideDown(t.showTime,n.updatePos);break;case"custom":t.showCustom.call(r,t.showTime);break;default:case"none":r.show()}return r.addClass(t.activeClass),t.onShow.call(n),n},hide:function(){t.onBeforeHide.call(n);switch(t.hideEffect){case"fade":r.fadeOut(t.hideTime);break;case"slide":r.slideUp(t.hideTime);break;case"custom":t.hideCustom.call(r,t.hideTime);break;default:case"none":r.hide()}return r.removeClass(t.activeClass),t.onHide.call(n),n},update:function(e){return r.html(e),t.content=e,n},load:function(e,i){return t.beforeContentLoad.call(n),r.load(e,i,function(){t.onContentLoad.call(n)}),n},boundryCheck:function(e,t){var n=e+r.outerWidth(),i=t+r.outerHeight(),s=jQuery(window).width()+jQuery(window).scrollLeft(),o=jQuery(window).height()+jQuery(window).scrollTop();return[n>=s,i>=o]},updatePos:function(i){var s=r.outerWidth(),o=r.outerHeight();if(!i&&t.fixed)if(t.position.constructor==Array)c=parseInt(t.position[0]),h=parseInt(t.position[1]);else if(jQuery(t.position).attr("nodeType")===1){var u=jQuery(t.position).offset();c=u.left,h=u.top}else{var a=e.offset(),f=e.outerWidth(),l=e.outerHeight();switch(t.position){case"top":var c=a.left-s/2+f/2,h=a.top-o;break;case"bottom":var c=a.left-s/2+f/2,h=a.top+l;break;case"left":var c=a.left-s,h=a.top-o/2+l/2;break;case"right":var c=a.left+f,h=a.top-o/2+l/2;break;default:case"default":var c=f/2+a.left+20,h=a.top}}else var c=i.pageX,h=i.pageY;if(typeof t.position!="object"){c+=t.offset[0],h+=t.offset[1];if(t.boundryCheck){var p=n.boundryCheck(c,h);p[0]&&(c=c-s/2-2*t.offset[0]),p[1]&&(h=h-o/2-2*t.offset[1])}}else typeof t.position[0]=="string"&&(c=String(c)),typeof t.position[1]=="string"&&(h=String(h));return n.setPos(c,h),n}})}jQuery.fn.simpletip=function(e){var n=jQuery(this).eq(typeof e=="number"?e:0).data("simpletip");if(n)return n;var r={content:"A simple tooltip",persistent:!1,focus:!1,hidden:!0,position:"default",offset:[0,0],boundryCheck:!0,fixed:!0,showEffect:"fade",showTime:150,showCustom:null,hideEffect:"fade",hideTime:150,hideCustom:null,baseClass:"simpletip",activeClass:"active",fixedClass:"fixed",persistentClass:"persistent",focusClass:"focus",onBeforeShow:function(){},onShow:function(){},onBeforeHide:function(){},onHide:function(){},beforeContentLoad:function(){},onContentLoad:function(){}};return jQuery.extend(r,e),this.each(function(){var e=new t(jQuery(this),r);jQuery(this).data("simpletip",e)}),this}})();
/* ---------- end jquery.simpletip ---------- */ 

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

/* --------- Simpletip abstraction class -----------*/
/* Parameters:
- element: required. Pass in valid DOM element

Setting - use classes to set settings:
- To set persistence:	.persistent-true OR .persistent-false
- To set position: 		.position-top, .position-bottom, .position-right, .position-left;
*/
var Tooltip = fxcm.lib.makeClass();
Tooltip.prototype.init = function(element) {
	var thatTooltip = this;
	
	function _parseClasses() {
		var classes = $(tip).attr('class').split(' ');
		var config = {};
		
		for (i = 0; i < classes.length; i++){	
			if(classes[i].indexOf('-') !== -1) {
				var setting = classes[i].split('-');
				config[setting[0]] = setting[1];				
			}
		}
		return config;
	}
	
	function _getSetting(attribute, settingsObject){
		if (typeof attribute !== 'string') {return false;}
		
		var valueWhitelist = {
			'position' : ['top', 'bottom', 'right', 'left']	,
			'persistent' : ['true', 'false']		
		};
		
		var val = false;
		for (i = 0; i < valueWhitelist[attribute].length; i++) {
			if (settingsObject[attribute] === valueWhitelist[attribute][i]) {
				val = settingsObject[attribute] === 'true' ? true : settingsObject[attribute];
				break;
			}
		}
		return val;
	}
	
	// Get parent element
	if ($(element).length < 0) { return false };
	var parentEl = $(element);
	
	// Find tooltip
	if (parentEl.find('.tooltip').length < 0) { return false };
	var tip = parentEl.find('.tooltip');

	var classSettings = _parseClasses();

	var config = {};
	config.content = tip.html();
	config.fixed = true;
	config.boundryCheck = false;
	config.persistent = _getSetting('persistent', classSettings);
	config.position = _getSetting('position', classSettings);		
	
	parentEl.simpletip(config);
}

/* --------- fxcm 3.0 ColorBox Global Settings -----------*/
$.extend($.colorbox.settings, {
	close: 'Close <i class="ico ico-complex ico-close-dark-sm"></i>',
	transition: 'elastic',
	opacity: '.6',
	fixed: true,
	getHref:  function(el){ 
		if($(el).attr('href')) {
			return $(el).attr('href'); 	
		} else {
			return false;
		}
	},
	video: {
		playerID: 'flowplayerPlayer',
		playerClass: 'flowplayer cb-content cb-content-video',
		generatePlayer: function(href, playerID){
			if (typeof href !== 'string') {return false;}
			playerID = typeof playerID === 'string' ? playerID : this.playerID;

			// generate player
			var _player = document.createElement('a');
			_player.className = this.playerClass;
			_player.setAttribute('id', playerID);
			_player.setAttribute('href', href);

			return this.player = _player;
		},
		sanitizePlayer: function(player){
			if (!fxcm.lib.isDOMElement(player)) {return false;}

			// Remove any existing <object> from previous flowplayer installation (be nice to IE, which keeps old object around)
			while (player.hasChildNodes()) {
			    player.removeChild(player.firstChild);
			}
			return player;
		},
		setPlayer: function(href){
			href = typeof href === 'string' ? href : '';
			
			if (typeof this.player === 'undefined') {
				// Generate a player element
				var _playerElement = this.generatePlayer(href);
			} else {
				// Update existing player element for new flowplayer call
				var _playerElement = this.sanitizePlayer(this.player);
				_playerElement.href = href; 
			}
			
			return _playerElement;
		},
		loadVideo: function(player) {
			if (!fxcm.lib.isDOMElement(player)) {return false;}
			
			if (this.instance) {
				this.instance.loadPlayer(player);
			} else {
				this.instance = new fxcm.Flowplayer(player);	
			}
		}
	}
});

function hideToggles(){
	$('.toggle-control').each(function(index) {
        if($(this).find('.toggle-open').hasClass('active')){
			$(this).next('.toggle-target').addClass('visuallycollapsed');
		}
    });
}

/* --------- Align background heights that are collected in .bg-align wrappers --------- */
function alignBackgrounds(){
	$('.bg-align').each(function(){
        var bgMaxHeight = 0;
		$(this).find('.bg').each(function(){
            if($(this).find('.bg-inner').outerHeight() > bgMaxHeight){
				bgMaxHeight = $(this).find('.bg-inner').outerHeight();
			}
        });
		$(this).find('.bg .bg-inner').css('height', bgMaxHeight + 'px');
    });	
}

/* --------- Launch TS Web Login links within a new window --------- */
function launchChromelessWindow(url) {
	var h = screen.availHeight-150;
	var w = screen.availWidth-150;
	var newwindow = window.open(url, 'chromeless', 'height='+h+', width='+w+', top=25, left=50, scrolling=yes, toolbars=no, menubar=no, resizable=yes');
	try {if (window.focus) {newwindow.focus()}}
		catch(e) { }
}

/* --------- Attach chat functionality to all trigger-chat links ------- */
function appendChat(name, data) {
	var $chatLink = $(lpMTagConfig.dynButton0[data.buttonState + "HTML"]);
	$chatLink.empty();
	$('.trigger-chat').each(function(index){
		$(this).wrapInner($chatLink);
	});
}

$(document).ready(function(){

	/* -------- Resets -------- */

	// add close icon to expandable set
	$('a.closeThis').html('<i class="ico ico-complex ico-close-sm"></i>');
	
	// apply hidden class to demo-hidden inner div
	hideToggles();
	
	// align background heights
	alignBackgrounds();
	
	/* close and open buttons */
	$('.toggle-control a').click(function(e){
		e.preventDefault();
		$(this).parent().next('.toggle-target').toggleClass('visuallycollapsed');
		$(this).siblings().andSelf().toggleClass('active');
	});
	
	/* -------- Attach behavior -------- */
	
	// Attach back to top link behavior
	$('a.back-to-top').click(function(){ $('html,body').animate({scrollTop:0}); });

	/* Attach tabs to nav3-tabs-static */
	$(".nav3-tabs-static").tabs(".nav3-tabs-content > div").history();

	// Attach simpletip
	$('.has-tooltip').each(function(){
		new Tooltip(this);
	});
	
	// Attach colorbox usage
	$('.cb-image').colorbox({
		photo: true,
		maxWidth: '80%',
		href: this.href
	});
	
	$('.cb-html').colorbox({
		inline: true,
		maxWidth:'50%',
		maxHeight: '80%',
		href: this.href
	});
	
	$('.cb-video').colorbox({
		transition: 'elastic',
		scrolling: false,
		html: function(){
			// Use html instead of inline to circumvent IE issues
			// https://groups.google.com/forum/?hl=en&fromgroups=#!searchin/colorbox/flowplayer$20IE/colorbox/H3Bs254L3-U/7gfvR8BXBqQJ
			return $.colorbox.settings.video.setPlayer(this.href);
		},
		onComplete:function(){
			$.colorbox.settings.video.loadVideo($.colorbox.settings.video.player);
		},
		onCleanup: function() { 
			$f($.colorbox.settings.video.player).close();
		}
	});

	// Attach flowplayer to on-page players
	$('.flowplayer').each(function(){
		if($(this).attr('data-playlist')) {
			var playlist = $(this).attr('data-playlist');
		}
		var video = new fxcm.Flowplayer(this, playlist);
	});
	
	// Attach function to launch TS Web Login in its own window
	$('a[href*="https://tsweb.fxcorporate.com"]').click(function(e){ 
		e.preventDefault();
		var url = $(this).attr('href');
		launchChromelessWindow(url);
	 });
	 
	// Run appendChat function if trigger-chat elements exist and chat is instatiated
	if($('.trigger-chat').length > 0 && typeof lpMTagConfig === 'object'){
		lpMTagConfig.onLoadCode[lpMTagConfig.onLoadCode.length]  = function () {
			lpMTag.events.register('LP_DYNBUTTON_STATE', appendChat);
		};
	}

	// Add cross-domain tracking params to mirror trader demo iframes
	(function(){
		var demoIframe = $('.mtdemo-iframe')[0];
		if (demoIframe && typeof s === 'object' && typeof s.Hook === 'function') { 
			s.Hook('CrossDomainiFrame', demoIframe);
		}
	}());
});