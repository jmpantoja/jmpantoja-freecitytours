!function(e){e.fn.navList=function(){var t=e(this),i=t.find("a"),n=[];return i.each(function(){var t=e(this),i=Math.max(0,t.parents("li").length-1),a=t.attr("href"),r=t.attr("target");n.push('<a class="link depth-'+i+'"'+(void 0!==r&&""!=r?' target="'+r+'"':"")+(void 0!==a&&""!=a?' href="'+a+'"':"")+'><span class="indent-'+i+'"></span>'+t.text()+"</a>")}),n.join("")},e.fn.panel=function(t){if(0==this.length)return a;if(this.length>1){for(var i=0;i<this.length;i++)e(this[i]).panel(t);return a}var n,a=e(this),r=e("body"),o=e(window),s=a.attr("id");return n=e.extend({delay:0,hideOnClick:!1,hideOnEscape:!1,hideOnSwipe:!1,resetScroll:!1,resetForms:!1,side:null,target:a,visibleClass:"visible"},t),"jQuery"!=typeof n.target&&(n.target=e(n.target)),a._hide=function(e){n.target.hasClass(n.visibleClass)&&(e&&(e.preventDefault(),e.stopPropagation()),n.target.removeClass(n.visibleClass),window.setTimeout(function(){n.resetScroll&&a.scrollTop(0),n.resetForms&&a.find("form").each(function(){this.reset()})},n.delay))},a.css("-ms-overflow-style","-ms-autohiding-scrollbar").css("-webkit-overflow-scrolling","touch"),n.hideOnClick&&(a.find("a").css("-webkit-tap-highlight-color","rgba(0,0,0,0)"),a.on("click","a",function(t){var i=e(this),r=i.attr("href"),o=i.attr("target");r&&"#"!=r&&""!=r&&r!="#"+s&&(t.preventDefault(),t.stopPropagation(),a._hide(),window.setTimeout(function(){"_blank"==o?window.open(r):window.location.href=r},n.delay+10))})),a.on("touchstart",function(e){a.touchPosX=e.originalEvent.touches[0].pageX,a.touchPosY=e.originalEvent.touches[0].pageY}),a.on("touchmove",function(e){if(null!==a.touchPosX&&null!==a.touchPosY){var t=a.touchPosX-e.originalEvent.touches[0].pageX,i=a.touchPosY-e.originalEvent.touches[0].pageY,r=a.outerHeight(),o=a.get(0).scrollHeight-a.scrollTop();if(n.hideOnSwipe){var s=!1;switch(n.side){case"left":s=i<20&&i>-20&&t>50;break;case"right":s=i<20&&i>-20&&t<-50;break;case"top":s=t<20&&t>-20&&i>50;break;case"bottom":s=t<20&&t>-20&&i<-50}if(s)return a.touchPosX=null,a.touchPosY=null,a._hide(),!1}(a.scrollTop()<0&&i<0||o>r-2&&o<r+2&&i>0)&&(e.preventDefault(),e.stopPropagation())}}),a.on("click touchend touchstart touchmove",function(e){e.stopPropagation()}),a.on("click",'a[href="#'+s+'"]',function(e){e.preventDefault(),e.stopPropagation(),n.target.removeClass(n.visibleClass)}),r.on("click touchend",function(e){a._hide(e)}),r.on("click",'a[href="#'+s+'"]',function(e){e.preventDefault(),e.stopPropagation(),n.target.toggleClass(n.visibleClass)}),n.hideOnEscape&&o.on("keydown",function(e){27==e.keyCode&&a._hide(e)}),a},e.fn.placeholder=function(){if(void 0!==document.createElement("input").placeholder)return e(this);if(0==this.length)return i;if(this.length>1){for(var t=0;t<this.length;t++)e(this[t]).placeholder();return i}var i=e(this);return i.find("input[type=text],textarea").each(function(){var t=e(this);""!=t.val()&&t.val()!=t.attr("placeholder")||t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("blur",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||""==t.val()&&t.addClass("polyfill-placeholder").val(t.attr("placeholder"))}).on("focus",function(){var t=e(this);t.attr("name").match(/-polyfill-field$/)||t.val()==t.attr("placeholder")&&t.removeClass("polyfill-placeholder").val("")}),i.find("input[type=password]").each(function(){var t=e(this),i=e(e("<div>").append(t.clone()).remove().html().replace(/type="password"/i,'type="text"').replace(/type=password/i,"type=text"));""!=t.attr("id")&&i.attr("id",t.attr("id")+"-polyfill-field"),""!=t.attr("name")&&i.attr("name",t.attr("name")+"-polyfill-field"),i.addClass("polyfill-placeholder").val(i.attr("placeholder")).insertAfter(t),""==t.val()?t.hide():i.hide(),t.on("blur",function(e){e.preventDefault();var i=t.parent().find("input[name="+t.attr("name")+"-polyfill-field]");""==t.val()&&(t.hide(),i.show())}),i.on("focus",function(e){e.preventDefault();var t=i.parent().find("input[name="+i.attr("name").replace("-polyfill-field","")+"]");i.hide(),t.show().focus()}).on("keypress",function(e){e.preventDefault(),i.val("")})}),i.on("submit",function(){i.find("input[type=text],input[type=password],textarea").each(function(t){var i=e(this);i.attr("name").match(/-polyfill-field$/)&&i.attr("name",""),i.val()==i.attr("placeholder")&&(i.removeClass("polyfill-placeholder"),i.val(""))})}).on("reset",function(t){t.preventDefault(),i.find("select").val(e("option:first").val()),i.find("input,textarea").each(function(){var t,i=e(this);switch(i.removeClass("polyfill-placeholder"),this.type){case"submit":case"reset":break;case"password":i.val(i.attr("defaultValue")),t=i.parent().find("input[name="+i.attr("name")+"-polyfill-field]"),""==i.val()?(i.hide(),t.show()):(i.show(),t.hide());break;case"checkbox":case"radio":i.attr("checked",i.attr("defaultValue"));break;case"text":case"textarea":i.val(i.attr("defaultValue")),""==i.val()&&(i.addClass("polyfill-placeholder"),i.val(i.attr("placeholder")));break;default:i.val(i.attr("defaultValue"))}})}),i},e.prioritize=function(t,i){var n="__prioritize";"jQuery"!=typeof t&&(t=e(t)),t.each(function(){var t,a=e(this),r=a.parent();if(0!=r.length)if(a.data(n)){if(i)return;t=a.data(n),a.insertAfter(t),a.removeData(n)}else{if(!i)return;if(t=a.prev(),0==t.length)return;a.prependTo(r),a.data(n,t)}})}}(jQuery),function(e){var t={carousels:{speed:4,fadeIn:!0,fadeDelay:250}};skel.breakpoints({wide:"(max-width: 1680px)",normal:"(max-width: 1280px)",narrow:"(max-width: 960px)",narrower:"(max-width: 840px)",mobile:"(max-width: 736px)"}),e(function(){var i=e(window),n=e("body");n.addClass("is-loading"),i.on("load",function(){n.removeClass("is-loading")}),skel.vars.IEVersion<9&&e(":last-child").addClass("last-child"),e("form").placeholder(),skel.on("+mobile -mobile",function(){e.prioritize(".important\\28 mobile\\29",skel.breakpoint("mobile").active)}),e("#nav > ul").dropotron({mode:"fade",speed:350,noOpenerFade:!0,alignment:"center"}),e(".scrolly").scrolly(),e('<div id="navButton"><a href="#navPanel" class="toggle"></a></div>').appendTo(n),e('<div id="navPanel"><nav>'+e("#nav").navList()+"</nav></div>").appendTo(n).panel({delay:500,hideOnClick:!0,hideOnSwipe:!0,resetScroll:!0,resetForms:!0,target:n,visibleClass:"navPanel-visible"}),"wp"==skel.vars.os&&skel.vars.osVersion<10&&e("#navButton, #navPanel, #page-wrapper").css("transition","none"),e(".carousel").each(function(){var n,a,r,o,s=e(this),l=e('<span class="forward"></span>'),c=e('<span class="backward"></span>'),d=s.children(".reel"),h=d.children("article"),u=0;t.carousels.fadeIn&&(h.addClass("loading"),s.onVisible(function(){var e,n=h.length-Math.ceil(i.width()/void 0);e=window.setInterval(function(){var t=h.filter(".loading"),i=t.first();if(t.length<=n)return window.clearInterval(e),void h.removeClass("loading");skel.vars.IEVersion<10?(i.fadeTo(750,1),window.setTimeout(function(){i.removeClass("loading")},50)):i.removeClass("loading")},t.carousels.fadeDelay)},50)),s._update=function(){u=0,a=-1*r+i.width(),n=0,s._updatePos()},skel.vars.IEVersion<9?s._updatePos=function(){d.css("left",u)}:s._updatePos=function(){d.css("transform","translate("+u+"px, 0)")},l.appendTo(s).hide().mouseenter(function(e){o=window.setInterval(function(){u-=t.carousels.speed,u<=a&&(window.clearInterval(o),u=a),s._updatePos()},10)}).mouseleave(function(e){window.clearInterval(o)}),c.appendTo(s).hide().mouseenter(function(e){o=window.setInterval(function(){u+=t.carousels.speed,u>=n&&(window.clearInterval(o),u=n),s._updatePos()},10)}).mouseleave(function(e){window.clearInterval(o)}),i.load(function(){r=d[0].scrollWidth,skel.on("change",function(){skel.vars.mobile?(d.css("overflow-y","hidden").css("overflow-x","scroll").scrollLeft(0),l.hide(),c.hide()):(d.css("overflow","visible").scrollLeft(0),l.show(),c.show()),s._update()}),i.resize(function(){r=d[0].scrollWidth,s._update()}).trigger("resize")})})})}(jQuery),window.Modernizr=function(e,t,i){function n(e){p.cssText=e}function a(e,t){return typeof e===t}function r(e,t){return!!~(""+e).indexOf(t)}function o(e,t){for(var n in e){var a=e[n];if(!r(a,"-")&&p[a]!==i)return"pfx"!=t||a}return!1}function s(e,t,n){for(var r in e){var o=t[e[r]];if(o!==i)return!1===n?e[r]:a(o,"function")?o.bind(n||t):o}return!1}function l(e,t,i){var n=e.charAt(0).toUpperCase()+e.slice(1),r=(e+" "+m.join(n+" ")+n).split(" ");return a(t,"string")||a(t,"undefined")?o(r,t):(r=(e+" "+g.join(n+" ")+n).split(" "),s(r,t,i))}var c,d,h={},u=t.documentElement,f=t.createElement("modernizr"),p=f.style,v="Webkit Moz O ms",m=v.split(" "),g=v.toLowerCase().split(" "),y={},w=[],$=w.slice,b={}.hasOwnProperty;d=a(b,"undefined")||a(b.call,"undefined")?function(e,t){return t in e&&a(e.constructor.prototype[t],"undefined")}:function(e,t){return b.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var i=$.call(arguments,1),n=function(){if(this instanceof n){var a=function(){};a.prototype=t.prototype;var r=new a,o=t.apply(r,i.concat($.call(arguments)));return Object(o)===o?o:r}return t.apply(e,i.concat($.call(arguments)))};return n}),y.csstransitions=function(){return l("transition")};for(var x in y)d(y,x)&&(c=x.toLowerCase(),h[c]=y[x](),w.push((h[c]?"":"no-")+c));return h.addTest=function(e,t){if("object"==typeof e)for(var n in e)d(e,n)&&h.addTest(n,e[n]);else{if(e=e.toLowerCase(),h[e]!==i)return h;t="function"==typeof t?t():t,u.className+=" "+(t?"":"no-")+e,h[e]=t}return h},n(""),f=null,function(e,t){function i(e,t){var i=e.createElement("p"),n=e.getElementsByTagName("head")[0]||e.documentElement;return i.innerHTML="x<style>"+t+"</style>",n.insertBefore(i.lastChild,n.firstChild)}function n(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=m[e[p]];return t||(t={},v++,e[p]=v,m[v]=t),t}function r(e,i,n){if(i||(i=t),d)return i.createElement(e);n||(n=a(i));var r;return r=n.cache[e]?n.cache[e].cloneNode():f.test(e)?(n.cache[e]=n.createElem(e)).cloneNode():n.createElem(e),r.canHaveChildren&&!u.test(e)?n.frag.appendChild(r):r}function o(e,i){if(e||(e=t),d)return e.createDocumentFragment();i=i||a(e);for(var r=i.frag.cloneNode(),o=0,s=n(),l=s.length;o<l;o++)r.createElement(s[o]);return r}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(i){return g.shivMethods?r(i,e,t):t.createElem(i)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var n=a(e);return g.shivCSS&&!c&&!n.hasCSS&&(n.hasCSS=!!i(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),d||s(e,n),e}var c,d,h=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,f=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",v=0,m={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",c="hidden"in e,d=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){c=!0,d=!0}}();var g={elements:h.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:!1!==h.shivCSS,supportsUnknownElements:d,shivMethods:!1!==h.shivMethods,type:"default",shivDocument:l,createElement:r,createDocumentFragment:o};e.html5=g,l(t)}(this,t),h._version="2.6.2",h._domPrefixes=g,h._cssomPrefixes=m,h.testProp=function(e){return o([e])},h.testAllProps=l,h.prefixed=function(e,t,i){return t?l(e,t,i):l(e,"pfx")},u.className=u.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+" js "+w.join(" "),h}(0,this.document),function(e,t,i){function n(e){return"[object Function]"==m.call(e)}function a(e){return"string"==typeof e}function r(){}function o(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=g.shift();y=1,e?e.t?p(function(){("c"==e.t?u.injectCss:u.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function l(e,i,n,a,r,l,c){function d(t){if(!f&&o(h.readyState)&&(w.r=f=1,!y&&s(),h.onload=h.onreadystatechange=null,t)){"img"!=e&&p(function(){b.removeChild(h)},50);for(var n in T[i])T[i].hasOwnProperty(n)&&T[i][n].onload()}}var c=c||u.errorTimeout,h=t.createElement(e),f=0,m=0,w={t:n,s:i,e:r,a:l,x:c};1===T[i]&&(m=1,T[i]=[]),"object"==e?h.data=i:(h.src=i,h.type=e),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){d.call(this,m)},g.splice(a,0,w),"img"!=e&&(m||2===T[i]?(b.insertBefore(h,$?null:v),p(d,c)):T[i].push(h))}function c(e,t,i,n,r){return y=0,t=t||"j",a(e)?l("c"==t?k:x,e,t,this.i++,i,n,r):(g.splice(this.i++,0,e),1==g.length&&s()),this}function d(){var e=u;return e.loader={load:c,i:0},e}var h,u,f=t.documentElement,p=e.setTimeout,v=t.getElementsByTagName("script")[0],m={}.toString,g=[],y=0,w="MozAppearance"in f.style,$=w&&!!t.createRange().compareNode,b=$?f:v.parentNode,f=e.opera&&"[object Opera]"==m.call(e.opera),f=!!t.attachEvent&&!f,x=w?"object":f?"script":"img",k=f?"script":x,C=Array.isArray||function(e){return"[object Array]"==m.call(e)},E=[],T={},P={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};u=function(e){function t(e){var t,i,n,e=e.split("!"),a=E.length,r=e.pop(),o=e.length,r={url:r,origUrl:r,prefixes:e};for(i=0;i<o;i++)n=e[i].split("="),(t=P[n.shift()])&&(r=t(r,n));for(i=0;i<a;i++)r=E[i](r);return r}function o(e,a,r,o,s){var l=t(e),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(a&&(a=n(a)?a:a[e]||a[o]||a[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,a,r,o,s):(T[l.url]?l.noexec=!0:T[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":i,l.noexec,l.attrs,l.timeout),(n(a)||n(c))&&r.load(function(){d(),a&&a(l.origUrl,s,o),c&&c(l.origUrl,s,o),T[l.url]=2})))}function s(e,t){function i(e,i){if(e){if(a(e))i||(h=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}),o(e,h,t,0,c);else if(Object(e)===e)for(l in s=function(){var t,i=0;for(t in e)e.hasOwnProperty(t)&&i++;return i}(),e)e.hasOwnProperty(l)&&(!i&&!--s&&(n(h)?h=function(){var e=[].slice.call(arguments);u.apply(this,e),f()}:h[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),f()}}(u[l])),o(e[l],h,t,l,c))}else!i&&f()}var s,l,c=!!e.test,d=e.load||e.both,h=e.callback||r,u=h,f=e.complete||r;i(c?e.yep:e.nope,!!d),d&&i(d)}var l,c,h=this.yepnope.loader;if(a(e))o(e,0,h,0);else if(C(e))for(l=0;l<e.length;l++)c=e[l],a(c)?o(c,0,h,0):C(c)?u(c):Object(c)===c&&s(c,h);else Object(e)===e&&s(e,h)},u.addPrefix=function(e,t){P[e]=t},u.addFilter=function(e){E.push(e)},u.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",h=function(){t.removeEventListener("DOMContentLoaded",h,0),t.readyState="complete"},0)),e.yepnope=d(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,i,n,a,l,c){var d,h,f=t.createElement("script"),a=a||u.errorTimeout;f.src=e;for(h in n)f.setAttribute(h,n[h]);i=c?s:i||r,f.onreadystatechange=f.onload=function(){!d&&o(f.readyState)&&(d=1,i(),f.onload=f.onreadystatechange=null)},p(function(){d||(d=1,i(1))},a),l?f.onload():v.parentNode.insertBefore(f,v)},e.yepnope.injectCss=function(e,i,n,a,o,l){var c,a=t.createElement("link"),i=l?s:i||r;a.href=e,a.rel="stylesheet",a.type="text/css";for(c in n)a.setAttribute(c,n[c]);o||(v.parentNode.insertBefore(a,v),p(i,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};var $event=$.event,$special,resizeTimeout;$special=$event.special.debouncedresize={setup:function(){$(this).on("resize",$special.handler)},teardown:function(){$(this).off("resize",$special.handler)},handler:function(e,t){var i=this,n=arguments,a=function(){e.type="debouncedresize",$event.dispatch.apply(i,n)};resizeTimeout&&clearTimeout(resizeTimeout),t?a():resizeTimeout=setTimeout(a,$special.threshold)},threshold:250};var BLANK="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";$.fn.imagesLoaded=function(e){function t(){var t=$(l),i=$(c);a&&(c.length?a.reject(o,t,i):a.resolve(o)),$.isFunction(e)&&e.call(n,o,t,i)}function i(e,i){e.src!==BLANK&&-1===$.inArray(e,s)&&(s.push(e),i?c.push(e):l.push(e),$.data(e,"imagesLoaded",{isBroken:i,src:e.src}),r&&a.notifyWith($(e),[i,o,$(l),$(c)]),o.length===s.length&&(setTimeout(t),o.unbind(".imagesLoaded")))}var n=this,a=$.isFunction($.Deferred)?$.Deferred():0,r=$.isFunction(a.notify),o=n.find("img").add(n.filter("img")),s=[],l=[],c=[];return $.isPlainObject(e)&&$.each(e,function(t,i){"callback"===t?e=i:a&&a[t](i)}),o.length?o.bind("load.imagesLoaded error.imagesLoaded",function(e){i(e.target,"error"===e.type)}).each(function(e,t){var n=t.src,a=$.data(t,"imagesLoaded");return a&&a.src===n?void i(t,a.isBroken):t.complete&&void 0!==t.naturalWidth?void i(t,0===t.naturalWidth||0===t.naturalHeight):void((t.readyState||t.complete)&&(t.src=BLANK,t.src=n))}):t(),a?a.promise(n):n};var Grid=function(){function e(e){b=$.extend(!0,{},b,e),d.imagesLoaded(function(){i(!0),r(),n()})}function t(e){h=h.add(e),e.each(function(){var e=$(this);e.data({offsetTop:e.offset().top,height:e.height()})}),a(e)}function i(e){h.each(function(){var t=$(this);t.data("offsetTop",t.offset().top),e&&t.data("height",t.height())})}function n(){a(h),v.on("debouncedresize",function(){p=0,f=-1,i(),r(),void 0!==$.data(this,"preview")&&s()})}function a(e){e.on("click","span.og-close",function(){return s(),!1}).children("a").on("click",function(e){var t=$(this).parent();return u===t.index()?s():o(t),!1})}function r(){c={width:v.width(),height:v.height()}}function o(e){var t=$.data(this,"preview"),i=e.data("offsetTop");if(p=0,void 0!==t){if(f===i)return t.update(e),!1;i>f&&(p=t.height),s()}f=i,t=$.data(this,"preview",new l(e)),t.open()}function s(){u=-1,$.data(this,"preview").close(),$.removeData(this,"preview")}function l(e){this.$item=e,this.expandedIdx=this.$item.index(),this.create(),this.update()}var c,d=$("#og-grid"),h=d.children("li"),u=-1,f=-1,p=0,v=$(window),m=$("html, body"),g={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd",transition:"transitionend"},y=g[Modernizr.prefixed("transition")],w=Modernizr.csstransitions,b={minHeight:500,speed:350,easing:"ease"};return l.prototype={create:function(){this.$title=$("<h3></h3>"),this.$description=$("<p></p>"),this.$details=$('<div class="og-details"></div>').append(this.$title,this.$description),this.$loading=$('<div class="og-loading"></div>'),this.$fullimage=$('<div class="og-fullimg"></div>').append(this.$loading),this.$closePreview=$('<span class="og-close"></span>'),this.$previewInner=$('<div class="og-expander-inner"></div>').append(this.$closePreview,this.$fullimage,this.$details),this.$previewEl=$('<div class="og-expander"></div>').append(this.$previewInner),this.$item.append(this.getEl()),w&&this.setTransition()},update:function(e){if(e&&(this.$item=e),-1!==u){h.eq(u).removeClass("og-expanded"),this.$item.addClass("og-expanded"),this.positionPreview()}u=this.$item.index();var t=this.$item.children("a"),i={href:t.attr("href"),largesrc:t.data("largesrc"),title:t.data("title"),description:t.data("description")};this.$title.html(i.title),this.$description.html(i.description);var n=this;void 0!==n.$largeImg&&n.$largeImg.remove(),n.$fullimage.is(":visible")&&(this.$loading.show(),$("<img/>").load(function(){var e=$(this);e.attr("src")===n.$item.children("a").data("largesrc")&&(n.$loading.hide(),n.$fullimage.find("img").remove(),n.$largeImg=e.fadeIn(350),n.$fullimage.append(n.$largeImg))}).attr("src",i.largesrc))},open:function(){setTimeout($.proxy(function(){this.setHeights(),this.positionPreview()},this),25)},close:function(){var e=this,t=function(){w&&$(this).off(y),e.$item.removeClass("og-expanded"),e.$previewEl.remove()};return setTimeout($.proxy(function(){void 0!==this.$largeImg&&this.$largeImg.fadeOut("fast"),this.$previewEl.css("height",0);var e=h.eq(this.expandedIdx);e.css("height",e.data("height")).on(y,t),w||t.call()},this),25),!1},calcHeight:function(){var e=c.height-this.$item.data("height")-10,t=c.height;e<b.minHeight&&(e=b.minHeight,t=b.minHeight+this.$item.data("height")+10),this.height=e,this.itemHeight=t},setHeights:function(){var e=this,t=function(){w&&e.$item.off(y),e.$item.addClass("og-expanded")};this.calcHeight(),this.$previewEl.css("height",this.height),this.$item.css("height",this.itemHeight).on(y,t),w||t.call()},positionPreview:function(){var e=this.$item.data("offsetTop"),t=this.$previewEl.offset().top-p,i=this.height+this.$item.data("height")+10<=c.height?e:this.height<c.height?t-(c.height-this.height):t;m.animate({scrollTop:i},b.speed)},setTransition:function(){this.$previewEl.css("transition","height "+b.speed+"ms "+b.easing),this.$item.css("transition","height "+b.speed+"ms "+b.easing)},getEl:function(){return this.$previewEl}},{init:e,addItems:t}}();$(function(){Grid.init()});