/*!
 * fullPage 3.1.0
 * https://github.com/alvarotrigo/fullPage.js
 *
 * @license GPLv3 for open source use only
 * or Fullpage Commercial License for commercial use
 * http://alvarotrigo.com/fullPage/pricing/
 *
 * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){"function"==typeof define&&define.amd?define((function(){return e.fullpage=o(t,n),e.fullpage})):"object"==typeof exports?module.exports=o(t,n):t.fullpage=o(t,n)}(this,window,document,(function(e,t){"use strict";var n="active",o="fp-completely",r="fp-section",i="."+r,l=i+".active",a=".fp-tableCell",s=".fp-slide",c=".fp-slides",u=".fp-slidesContainer";function f(t,n){e.console&&e.console[t]&&e.console[t]("fullPage: "+n)}function d(e,n){return(n=arguments.length>1?n:t)?n.querySelectorAll(e):null}function v(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=v(e[r],o[r]))}return e}function p(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function h(){return"innerHeight"in e?e.innerHeight:t.documentElement.offsetHeight}function g(){return e.innerWidth}function m(e,t){var n;for(n in e=A(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function w(e,t,n){for(var o=e[n];o&&!X(o,t);)o=o[n];return o}function b(e,t){return w(e,t,"previousElementSibling")}function S(e,t){return w(e,t,"nextElementSibling")}function y(e){return e.previousElementSibling}function E(e){return e.nextElementSibling}function L(e){return e[e.length-1]}function x(e,t){e=O(e)?e[0]:e;for(var n=null!=t?d(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function A(e){return O(e)?e:[e]}function T(e){e=A(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function k(e){e=A(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function O(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function M(e,t){e=A(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function C(e,t){e=A(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function H(e,t){t.appendChild(e)}function I(e,n,o){var r;n=n||t.createElement("div");for(var i=0;i<e.length;i++){var l=e[i];(o&&!i||!o)&&(r=n.cloneNode(!0),l.parentNode.insertBefore(r,l)),r.appendChild(l)}return e}function B(e,t){I(e,t,!0)}function N(e,t){for("string"==typeof t&&(t=_(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function R(e){for(var n=t.createDocumentFragment();e.firstChild;)n.appendChild(e.firstChild);e.parentNode.replaceChild(n,e)}function z(e,t){return e&&1===e.nodeType?X(e,t)?e:z(e.parentNode,t):null}function j(e,t){D(e,e.nextSibling,t)}function P(e,t){D(e,e,t)}function D(e,t,n){O(n)||("string"==typeof n&&(n=_(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function V(){var n=t.documentElement;return(e.pageYOffset||n.scrollTop)-(n.clientTop||0)}function W(e){return Array.prototype.filter.call(e.parentNode.children,(function(t){return t!==e}))}function Y(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function F(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function U(n,o,r){var i;r=void 0===r?{}:r,"function"==typeof e.CustomEvent?i=new CustomEvent(o,{detail:r}):(i=t.createEvent("CustomEvent")).initCustomEvent(o,!0,!0,r),n.dispatchEvent(i)}function X(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function K(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function _(e){var n=t.createElement("div");return n.innerHTML=e.trim(),n.firstChild}function $(e){e=A(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function q(e,t,n){for(var o=e[n],r=[];o;)(X(o,t)||null==t)&&r.push(o),o=o[n];return r}function Q(e,t){return q(e,t,"nextElementSibling")}function G(e,t){return q(e,t,"previousElementSibling")}return e.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(t,n){n=n||e;for(var o=0;o<this.length;o++)t.call(n,this[o],o,this)}),e.fp_utils={$:d,deepExtend:v,hasClass:p,getWindowHeight:h,css:m,until:w,prevUntil:b,nextUntil:S,prev:y,next:E,last:L,index:x,getList:A,hide:T,show:k,isArrayOrList:O,addClass:M,removeClass:C,appendTo:H,wrap:I,wrapAll:B,wrapInner:N,unwrap:R,closest:z,after:j,before:P,insertBefore:D,getScrollTop:V,siblings:W,preventDefault:Y,isFunction:F,trigger:U,matches:X,toggle:K,createElementFromHTML:_,remove:$,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:q,nextAll:Q,prevAll:G,showError:f},function(w,A){var O=A&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(A.licenseKey)||t.domain.indexOf("alvarotrigo.com")>-1,I=d("html, body"),D=d("html")[0],q=d("body")[0];if(!p(D,"fp-enabled")){var J={};A=v({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:e.fp_scrolloverflow?e.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof w?d(w)[0]:w,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},A);var Z,ee,te,ne,oe=!1,re=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),ie="ontouchstart"in e||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,le="string"==typeof w?d(w)[0]:w,ae=h(),se=g(),ce=!1,ue=!0,fe=!0,de=[],ve={m:{up:!0,down:!0,left:!0,right:!0}};ve.k=v({},ve.m);var pe,he,ge,me,we,be,Se,ye,Ee,Le=function(){var t;t=e.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"};return t}(),xe={touchmove:"ontouchmove"in e?"touchmove":Le.move,touchstart:"ontouchstart"in e?"touchstart":Le.down},Ae=!1;try{var Te=Object.defineProperty({},"passive",{get:function(){Ae=!0}});e.addEventListener("testPassive",null,Te),e.removeEventListener("testPassive",null,Te)}catch(e){}var ke,Oe,Me,Ce=v({},A),He=!1,Ie=!0,Be=["parallax","scrollOverflowReset","dragAndMove","offsetSections","fadingEffect","responsiveSlides","continuousHorizontal","interlockedSlides","scrollHorizontally","resetSliders","cards"];Mn(),e.fp_easings=v(e.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),le&&(J.version="3.1.0",J.setAutoScrolling=Ue,J.setRecordHistory=Xe,J.setScrollingSpeed=Ke,J.setFitToSection=_e,J.setLockAnchors=function(e){A.lockAnchors=e},J.setMouseWheelScrolling=$e,J.setAllowScrolling=qe,J.setKeyboardScrolling=Ge,J.moveSectionUp=Je,J.moveSectionDown=Ze,J.silentMoveTo=et,J.moveTo=tt,J.moveSlideRight=nt,J.moveSlideLeft=ot,J.fitToSection=mt,J.reBuild=rt,J.setResponsive=lt,J.getFullpageData=function(){return A},J.destroy=function(n){Ue(!1,"internal"),qe(!0),Qe(!1),Ge(!1),M(le,"fp-destroyed"),[we,me,he,be,Se,Ee,ge,Me].forEach((function(e){clearTimeout(e)})),e.removeEventListener("scroll",gt),e.removeEventListener("hashchange",Yt),e.removeEventListener("resize",ln),t.removeEventListener("keydown",Ut),t.removeEventListener("keyup",Kt),["click","touchstart"].forEach((function(e){t.removeEventListener(e,at)})),["mouseenter","touchstart","mouseleave","touchend"].forEach((function(e){t.removeEventListener(e,ct,!0)})),n&&(An(0),d("img[data-src], source[data-src], audio[data-src], iframe[data-src]",le).forEach((function(e){Bt(e,"src")})),d("img[data-srcset]").forEach((function(e){Bt(e,"srcset")})),$(d("#fp-nav, .fp-slidesNav, .fp-controlArrow")),m(d(i),{height:"","background-color":"",padding:""}),m(d(s),{width:""}),m(le,{height:"",position:"","-ms-touch-action":"","touch-action":""}),m(I,{overflow:"",height:""}),C(D,"fp-enabled"),C(q,"fp-responsive"),q.className.split(/\s+/).forEach((function(e){0===e.indexOf("fp-viewing")&&C(q,e)})),d(i+", "+s).forEach((function(e){A.scrollOverflowHandler&&A.scrollOverflow&&A.scrollOverflowHandler.remove(e),C(e,"fp-table active "+o),e.getAttribute("data-fp-styles")&&e.setAttribute("style",e.getAttribute("data-fp-styles")),p(e,r)&&!He&&e.removeAttribute("data-anchor")})),un(le),[a,u,c].forEach((function(e){d(e,le).forEach((function(e){R(e)}))})),m(le,{"-webkit-transition":"none",transition:"none"}),e.scrollTo(0,0),[r,"fp-slide","fp-slidesContainer"].forEach((function(e){C(d("."+e),e)})))},J.getActiveSection=function(){return new Bn(d(l)[0])},J.getActiveSlide=function(){return Ct(d(".fp-slide.active",d(l)[0])[0])},J.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<d(A.sectionSelector,le).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<d(A.sectionSelector,le).length;t++)e.push(0);return e}(),options:A,setAutoScrolling:Ue},J.shared={afterRenderActions:ht,isNormalScrollElement:!1},e.fullpage_api=J,A.$&&Object.keys(J).forEach((function(e){A.$.fn.fullpage[e]=J[e]})),function(){A.css3&&(A.css3=function(){var n,o=t.createElement("p"),r={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var i in o.style.display="block",t.body.insertBefore(o,null),r)void 0!==o.style[i]&&(o.style[i]="translate3d(1px,1px,1px)",n=e.getComputedStyle(o).getPropertyValue(r[i]));return t.body.removeChild(o),void 0!==n&&n.length>0&&"none"!==n}());A.scrollBar=A.scrollBar||A.hybrid,function(){if(!A.anchors.length){var e=d(A.sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",le);e.length&&e.length===d(A.sectionSelector,le).length&&(He=!0,e.forEach((function(e){A.anchors.push(e.getAttribute("data-anchor").toString())})))}if(!A.navigationTooltips.length){var t=d(A.sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",le);t.length&&t.forEach((function(e){A.navigationTooltips.push(e.getAttribute("data-tooltip").toString())}))}}(),function(){m(le,{height:"100%",position:"relative"}),M(le,"fullpage-wrapper"),M(D,"fp-enabled"),ae=h(),C(le,"fp-destroyed"),M(d(A.sectionSelector,le),r),M(d(A.slideSelector,le),"fp-slide");for(var e=d(i),o=0;o<e.length;o++){var a=o,c=e[o],u=d(s,c),f=u.length;c.setAttribute("data-fp-styles",c.getAttribute("style")),dt(c,a),vt(c,a),f>0?ft(c,u,f):A.verticalCentered&&vn(c)}A.fixedElements&&A.css3&&d(A.fixedElements).forEach((function(e){q.appendChild(e)}));A.navigation&&function(){var e=t.createElement("div");e.setAttribute("id","fp-nav");var o=t.createElement("ul");e.appendChild(o),H(e,q);var r=d("#fp-nav")[0];M(r,"fp-"+A.navigationPosition),A.showActiveTooltip&&M(r,"fp-show-active");for(var a="",s=0;s<d(i).length;s++){var c="";A.anchors.length&&(c=A.anchors[s]),a+='<li><a href="#'+c+'"><span class="fp-sr-only">'+pt(s,"Section")+"</span><span></span></a>";var u=A.navigationTooltips[s];void 0!==u&&""!==u&&(a+='<div class="fp-tooltip fp-'+A.navigationPosition+'">'+u+"</div>"),a+="</li>"}d("ul",r)[0].innerHTML=a;var f=d("li",d("#fp-nav")[0])[x(d(l)[0],i)];M(d("a",f),n)}();void d('iframe[src*="youtube.com/embed/"]',le).forEach((function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)})),A.scrollOverflow&&(pe=A.scrollOverflowHandler.init(A))}(),qe(!0),Qe(!0),Ue(A.autoScrolling,"internal"),sn(),En(),"complete"===t.readyState&&Wt();e.addEventListener("load",Wt),A.scrollOverflow||ht();!function(){for(var e=1;e<4;e++)Ee=setTimeout(ut,350*e)}()}(),e.addEventListener("scroll",gt),e.addEventListener("hashchange",Yt),e.addEventListener("focus",Gt),e.addEventListener("blur",Jt),e.addEventListener("resize",ln),t.addEventListener("keydown",Ut),t.addEventListener("keyup",Kt),["click","touchstart"].forEach((function(e){t.addEventListener(e,at)})),A.normalScrollElements&&(["mouseenter","touchstart"].forEach((function(e){st(e,!1)})),["mouseleave","touchend"].forEach((function(e){st(e,!0)}))));var Ne=!1,Re=0,ze=0,je=0,Pe=0,De=0,Ve=(new Date).getTime(),We=0,Ye=0,Fe=ae;return J}function Ue(e,t){e||An(0),On("autoScrolling",e,t);var n=d(l)[0];if(A.autoScrolling&&!A.scrollBar)m(I,{overflow:"hidden",height:"100%"}),Xe(Ce.recordHistory,"internal"),m(le,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&An(n.offsetTop);else if(m(I,{overflow:"visible",height:"initial"}),Xe(!!A.autoScrolling&&Ce.recordHistory,"internal"),m(le,{"-ms-touch-action":"","touch-action":""}),null!=n){var o=Ht(n.offsetTop);o.element.scrollTo(0,o.options)}}function Xe(e,t){On("recordHistory",e,t)}function Ke(e,t){On("scrollingSpeed",e,t)}function _e(e,t){On("fitToSection",e,t)}function $e(n){n?(!function(){var n,o="";e.addEventListener?n="addEventListener":(n="attachEvent",o="on");var r="onwheel"in t.createElement("div")?"wheel":void 0!==t.onmousewheel?"mousewheel":"DOMMouseScroll",i=!!Ae&&{passive:!1};"DOMMouseScroll"==r?t[n](o+"MozMousePixelScroll",xt,i):t[n](o+r,xt,i)}(),le.addEventListener("mousedown",_t),le.addEventListener("mouseup",$t)):(t.addEventListener?(t.removeEventListener("mousewheel",xt,!1),t.removeEventListener("wheel",xt,!1),t.removeEventListener("MozMousePixelScroll",xt,!1)):t.detachEvent("onmousewheel",xt),le.removeEventListener("mousedown",_t),le.removeEventListener("mouseup",$t))}function qe(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){kn(e,t,"m")})):kn(e,"all","m")}function Qe(e){e?($e(!0),function(){if(re||ie){A.autoScrolling&&(q.removeEventListener(xe.touchmove,bt,{passive:!1}),q.addEventListener(xe.touchmove,bt,{passive:!1}));var e=A.touchWrapper;e.removeEventListener(xe.touchstart,Et),e.removeEventListener(xe.touchmove,St,{passive:!1}),e.addEventListener(xe.touchstart,Et),e.addEventListener(xe.touchmove,St,{passive:!1})}}()):($e(!1),function(){if(re||ie){A.autoScrolling&&(q.removeEventListener(xe.touchmove,St,{passive:!1}),q.removeEventListener(xe.touchmove,bt,{passive:!1}));var e=A.touchWrapper;e.removeEventListener(xe.touchstart,Et),e.removeEventListener(xe.touchmove,St,{passive:!1})}}())}function Ge(e,t){void 0!==t?(t=t.replace(/ /g,"").split(",")).forEach((function(t){kn(e,t,"k")})):(kn(e,"all","k"),A.keyboardScrolling=e)}function Je(){var e=b(d(l)[0],i);e||!A.loopTop&&!A.continuousVertical||(e=L(d(i))),null!=e&&kt(e,null,!0)}function Ze(){var e=S(d(l)[0],i);e||!A.loopBottom&&!A.continuousVertical||(e=d(i)[0]),null!=e&&kt(e,null,!1)}function et(e,t){Ke(0,"internal"),tt(e,t),Ke(Ce.scrollingSpeed,"internal")}function tt(e,t){var n=gn(e);void 0!==t?mn(e,t):null!=n&&kt(n)}function nt(e){At("right",e)}function ot(e){At("left",e)}function rt(t){if(!p(le,"fp-destroyed")){ce=!0,ae=h(),se=g();for(var n=d(i),o=0;o<n.length;++o){var r=n[o],u=d(c,r)[0],f=d(s,r);A.verticalCentered&&m(d(a,r),{height:pn(r)+"px"}),m(r,{height:ae+"px"}),f.length>1&&on(u,d(".fp-slide.active",u)[0])}A.scrollOverflow&&pe.createScrollBarForAll();var v=x(d(l)[0],i);v&&et(v+1),F(A.afterResize)&&t&&A.afterResize.call(le,e.innerWidth,e.innerHeight),F(A.afterReBuild)&&!t&&A.afterReBuild.call(le)}}function it(){return p(q,"fp-responsive")}function lt(e){var t=it();e?t||(Ue(!1,"internal"),_e(!1,"internal"),T(d("#fp-nav")),M(q,"fp-responsive"),F(A.afterResponsive)&&A.afterResponsive.call(le,e),A.scrollOverflow&&pe.createScrollBarForAll()):t&&(Ue(Ce.autoScrolling,"internal"),_e(Ce.autoScrolling,"internal"),k(d("#fp-nav")),C(q,"fp-responsive"),F(A.afterResponsive)&&A.afterResponsive.call(le,e))}function at(e){var t=e.target;t&&z(t,"#fp-nav a")?Zt.call(t,e):X(t,".fp-tooltip")?Xt.call(t):X(t,".fp-controlArrow")?Qt.call(t,e):X(t,".fp-slidesNav a")||null!=z(t,".fp-slidesNav a")?en.call(t,e):z(t,A.menu+" [data-menuanchor]")&&tn.call(t,e)}function st(e,n){t["fp_"+e]=n,t.addEventListener(e,ct,!0)}function ct(e){var n=e.type,o=!1,r=A.scrollOverflow,i="mouseleave"===n?e.toElement||e.relatedTarget:e.target;if(i==t||!i)return Qe(!0),void(r&&A.scrollOverflowHandler.setIscroll(i,!0));("touchend"===n&&(Ie=!1,setTimeout((function(){Ie=!0}),800)),"mouseenter"!==n||Ie)&&(A.normalScrollElements.split(",").forEach((function(e){if(!o){var t=X(i,e),n=z(i,e);(t||n)&&(J.shared.isNormalScrollElement||(Qe(!1),r&&A.scrollOverflowHandler.setIscroll(i,!1)),J.shared.isNormalScrollElement=!0,o=!0)}})),!o&&J.shared.isNormalScrollElement&&(Qe(!0),r&&A.scrollOverflowHandler.setIscroll(i,!0),J.shared.isNormalScrollElement=!1))}function ut(){var e=h(),t=g();ae===e&&se===t||(ae=e,se=t,rt(!0))}function ft(e,o,r){var a=100*r,f=100/r,v=t.createElement("div");v.className="fp-slides",B(o,v);var p=t.createElement("div");p.className="fp-slidesContainer",B(o,p),m(d(u,e),{width:a+"%"}),r>1&&(A.controlArrows&&function(e){var t=[_('<div class="fp-controlArrow fp-prev"></div>'),_('<div class="fp-controlArrow fp-next"></div>')];j(d(c,e)[0],t),"#fff"!==A.controlArrowColor&&(m(d(".fp-controlArrow.fp-next",e),{"border-color":"transparent transparent transparent "+A.controlArrowColor}),m(d(".fp-controlArrow.fp-prev",e),{"border-color":"transparent "+A.controlArrowColor+" transparent transparent"}));A.loopHorizontal||T(d(".fp-controlArrow.fp-prev",e))}(e),A.slidesNavigation&&function(e,t){H(_('<div class="fp-slidesNav"><ul></ul></div>'),e);var o=d(".fp-slidesNav",e)[0];M(o,"fp-"+A.slidesNavPosition);for(var r=0;r<t;r++){var i=d(s,e)[r];H(_('<li><a href="#"><span class="fp-sr-only">'+pt(r,"Slide",i)+"</span><span></span></a></li>"),d("ul",o)[0])}m(o,{"margin-left":"-"+o.innerWidth/2+"px"}),M(d("a",d("li",o)[0]),n)}(e,r)),o.forEach((function(e){m(e,{width:f+"%"}),A.verticalCentered&&vn(e)}));var h=d(".fp-slide.active",e)[0];null!=h&&(0!==x(d(l),i)||0===x(d(l),i)&&0!==x(h))?xn(h,"internal"):M(o[0],n)}function dt(e,t){t||null!=d(l)[0]||M(e,n),ne=d(l)[0],m(e,{height:ae+"px"}),A.paddingTop&&m(e,{"padding-top":A.paddingTop}),A.paddingBottom&&m(e,{"padding-bottom":A.paddingBottom}),void 0!==A.sectionsColor[t]&&m(e,{"background-color":A.sectionsColor[t]}),void 0!==A.anchors[t]&&e.setAttribute("data-anchor",A.anchors[t])}function vt(e,t){void 0!==A.anchors[t]&&p(e,n)&&fn(A.anchors[t],t),A.menu&&A.css3&&null!=z(d(A.menu)[0],".fullpage-wrapper")&&d(A.menu).forEach((function(e){q.appendChild(e)}))}function pt(e,t,n){var o="Section"===t?A.anchors[e]:n.getAttribute("data-anchor");return A.navigationTooltips[e]||o||t+" "+(e+1)}function ht(){var e,t,n=d(l)[0];M(n,o),Rt(n),Nt(),jt(n),A.scrollOverflow&&A.scrollOverflowHandler.afterLoad(),e=Ft(),t=gn(e.section),e.section&&t&&(void 0===t||x(t)!==x(ne))||!F(A.afterLoad)||Ot("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:x(n,i)}),F(A.afterRender)&&Ot("afterRender")}function gt(){var e;if(!ce&&(!A.autoScrolling||A.scrollBar)){var t=V(),r=function(e){var t=e>Re?"down":"up";return Re=e,We=e,t}(t),a=0,s=t+h()/2,c=q.offsetHeight-h()===t,u=d(i);if(c)a=u.length-1;else if(t)for(var f=0;f<u.length;++f){u[f].offsetTop<=s&&(a=f)}else a=0;if(function(e){var t=d(l)[0].offsetTop,n=t+h();if("up"==e)return n>=V()+h();return t<=V()}(r)&&(p(d(l)[0],o)||(M(d(l)[0],o),C(W(d(l)[0]),o))),!p(e=u[a],n)){Ne=!0;var v,g,m=d(l)[0],w=x(m,i)+1,b=dn(e),S=e.getAttribute("data-anchor"),y=x(e,i)+1,E=d(".fp-slide.active",e)[0],L={activeSection:m,sectionIndex:y-1,anchorLink:S,element:e,leavingSection:w,direction:b};E&&(g=E.getAttribute("data-anchor"),v=x(E)),fe&&(M(e,n),C(W(e),n),F(A.onLeave)&&Ot("onLeave",L),F(A.afterLoad)&&Ot("afterLoad",L),Dt(m),Rt(e),jt(e),fn(S,y-1),A.anchors.length&&(Z=S),bn(v,g,S,y)),clearTimeout(be),be=setTimeout((function(){Ne=!1}),100)}A.fitToSection&&(clearTimeout(Se),Se=setTimeout((function(){A.fitToSection&&d(l)[0].offsetHeight<=ae&&mt()}),A.fitToSectionDelay))}}function mt(){fe&&(ce=!0,kt(d(l)[0]),ce=!1)}function wt(e){if(ve.m[e]){var t="down"===e?Ze:Je;if(A.scrollOverflow){var n=A.scrollOverflowHandler.scrollable(d(l)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!A.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function bt(e){A.autoScrolling&&yt(e)&&ve.m.up&&Y(e)}function St(t){var n=z(t.target,i)||d(l)[0];if(yt(t)){A.autoScrolling&&Y(t);var o=Ln(t);Pe=o.y,De=o.x,d(c,n).length&&Math.abs(je-De)>Math.abs(ze-Pe)?!oe&&Math.abs(je-De)>g()/100*A.touchSensitivity&&(je>De?ve.m.right&&nt(n):ve.m.left&&ot(n)):A.autoScrolling&&fe&&Math.abs(ze-Pe)>e.innerHeight/100*A.touchSensitivity&&(ze>Pe?wt("down"):Pe>ze&&wt("up"))}}function yt(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function Et(e){if(A.fitToSection&&(ke=!1),yt(e)){var t=Ln(e);ze=t.y,je=t.x}}function Lt(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function xt(t){var n=(new Date).getTime(),o=p(d(".fp-completely")[0],"fp-normal-scroll");if(!ve.m.down&&!ve.m.up)return Y(t),!1;if(A.autoScrolling&&!te&&!o){var r=(t=t||e.event).wheelDelta||-t.deltaY||-t.detail,i=Math.max(-1,Math.min(1,r)),l=void 0!==t.wheelDeltaX||void 0!==t.deltaX,a=Math.abs(t.wheelDeltaX)<Math.abs(t.wheelDelta)||Math.abs(t.deltaX)<Math.abs(t.deltaY)||!l;de.length>149&&de.shift(),de.push(Math.abs(r)),A.scrollBar&&Y(t);var s=n-Ve;if(Ve=n,s>200&&(de=[]),fe)Lt(de,10)>=Lt(de,70)&&a&&wt(i<0?"down":"up");return!1}A.fitToSection&&(ke=!1)}function At(e,t){var n=null==t?d(l)[0]:t,o=d(c,n)[0];if(!(null==o||oe||d(s,o).length<2)){var r=d(".fp-slide.active",o)[0],i=null;if(null==(i="left"===e?b(r,s):S(r,s))){if(!A.loopHorizontal)return;var a=W(r);i="left"===e?a[a.length-1]:a[0]}oe=!J.test.isTesting,on(o,i,e)}}function Tt(){for(var e=d(".fp-slide.active"),t=0;t<e.length;t++)xn(e[t],"internal")}function kt(e,t,o){if(null!=e){var r,a,s={element:e,callback:t,isMovementUp:o,dtop:function(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=n>We,i=o-ae+t,l=A.bigSectionsDestination;return t>ae?(r||l)&&"bottom"!==l||(o=i):(r||ce&&null==E(e))&&(o=i),We=o,o}(e),yMovement:dn(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:x(e,i),activeSlide:d(".fp-slide.active",e)[0],activeSection:d(l)[0],leavingSection:x(d(l),i)+1,localIsResizing:ce};if(!(s.activeSection==e&&!ce||A.scrollBar&&V()===s.dtop&&!p(e,"fp-auto-height"))){if(null!=s.activeSlide&&(r=s.activeSlide.getAttribute("data-anchor"),a=x(s.activeSlide)),!s.localIsResizing){var c=s.yMovement;if(void 0!==o&&(c=o?"up":"down"),s.direction=c,F(A.onLeave)&&!1===Ot("onLeave",s))return}A.autoScrolling&&A.continuousVertical&&void 0!==s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=function(e){e.isMovementUp?P(d(l)[0],Q(e.activeSection,i)):j(d(l)[0],G(e.activeSection,i).reverse());return An(d(l)[0].offsetTop),Tt(),e.wrapAroundElements=e.activeSection,e.dtop=e.element.offsetTop,e.yMovement=dn(e.element),e}(s)),s.localIsResizing||Dt(s.activeSection),A.scrollOverflow&&A.scrollOverflowHandler.beforeLeave(),M(e,n),C(W(e),n),Rt(e),A.scrollOverflow&&A.scrollOverflowHandler.onLeave(),fe=J.test.isTesting,bn(a,r,s.anchorLink,s.sectionIndex),function(e){var t=A.scrollingSpeed<700,n=t?700:A.scrollingSpeed;if(A.css3&&A.autoScrolling&&!A.scrollBar){hn("translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)",!0),A.scrollingSpeed?(clearTimeout(me),me=setTimeout((function(){It(e),fe=!t}),A.scrollingSpeed)):It(e)}else{var o=Ht(e.dtop);J.test.top=-e.dtop+"px",m(I,{"scroll-behavior":"unset"}),Cn(o.element,o.options,A.scrollingSpeed,(function(){A.scrollBar?setTimeout((function(){It(e)}),30):(It(e),fe=!t)}))}t&&(clearTimeout(Me),Me=setTimeout((function(){fe=!0}),n))}(s),Z=s.anchorLink,fn(s.anchorLink,s.sectionIndex)}}}function Ot(e,t){var n,o=function(e,t){var n;n=A.v2compatible?{afterRender:function(){return[le]},onLeave:function(){return[t.activeSection,t.leavingSection,t.sectionIndex+1,t.direction]},afterLoad:function(){return[t.element,t.anchorLink,t.sectionIndex+1]},afterSlideLoad:function(){return[t.destiny,t.anchorLink,t.sectionIndex+1,t.slideAnchor,t.slideIndex]},onSlideLeave:function(){return[t.prevSlide,t.anchorLink,t.sectionIndex+1,t.prevSlideIndex,t.direction,t.slideIndex]}}:{afterRender:function(){return{section:Mt(d(l)[0]),slide:Ct(d(".fp-slide.active",d(l)[0])[0])}},onLeave:function(){return{origin:Mt(t.activeSection),destination:Mt(t.element),direction:t.direction}},afterLoad:function(){return n.onLeave()},afterSlideLoad:function(){return{section:Mt(t.section),origin:Ct(t.prevSlide),destination:Ct(t.destiny),direction:t.direction}},onSlideLeave:function(){return n.afterSlideLoad()}};return n[e]()}(e,t);if(A.v2compatible){if(!1===A[e].apply(o[0],o.slice(1)))return!1}else if(U(le,e,o),!1===A[e].apply(o[Object.keys(o)[0]],(n=o,Object.keys(n).map((function(e){return n[e]})))))return!1;return!0}function Mt(e){return e?new Bn(e):null}function Ct(e){return e?new Nn(e):null}function Ht(t){var n={};return A.autoScrolling&&!A.scrollBar?(n.options=-t,n.element=d(".fullpage-wrapper")[0]):(n.options=t,n.element=e),n}function It(e){!function(e){null!=e.wrapAroundElements&&(e.isMovementUp?P(d(i)[0],e.wrapAroundElements):j(d(i)[d(i).length-1],e.wrapAroundElements),An(d(l)[0].offsetTop),Tt())}(e),F(A.afterLoad)&&!e.localIsResizing&&Ot("afterLoad",e),A.scrollOverflow&&A.scrollOverflowHandler.afterLoad(),e.localIsResizing||jt(e.element),M(e.element,o),C(W(e.element),o),Nt(),fe=!0,F(e.callback)&&e.callback()}function Bt(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Nt(){var e=d(".fp-auto-height")[0]||it()&&d(".fp-auto-height-responsive")[0];A.lazyLoading&&e&&d(i+":not(.active)").forEach((function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<ae&&n>0||o>2&&o<ae)&&Rt(e)}))}function Rt(e){A.lazyLoading&&d("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Vt(e)).forEach((function(t){if(["src","srcset"].forEach((function(n){var o=t.getAttribute("data-"+n);null!=o&&o&&(Bt(t,n),t.addEventListener("load",(function(){zt(e)})))})),X(t,"source")){var n=z(t,"video, audio");n&&(n.load(),n.onloadeddata=function(){zt(e)})}}))}function zt(e){A.scrollOverflow&&(clearTimeout(Oe),Oe=setTimeout((function(){p(q,"fp-responsive")||pe.createScrollBar(e)}),200))}function jt(e){var t=Vt(e);d("video, audio",t).forEach((function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()})),d('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){e.hasAttribute("data-autoplay")&&Pt(e),e.onload=function(){e.hasAttribute("data-autoplay")&&Pt(e)}}))}function Pt(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Dt(e){var t=Vt(e);d("video, audio",t).forEach((function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()})),d('iframe[src*="youtube.com/embed/"]',t).forEach((function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function Vt(e){var t=d(".fp-slide.active",e);return t.length&&(e=t[0]),e}function Wt(){var e=Ft(),t=e.section,n=e.slide;t&&(A.animateAnchor?mn(t,n):et(t,n))}function Yt(){if(!Ne&&!A.lockAnchors){var e=Ft(),t=e.section,n=e.slide,o=void 0===Z,r=void 0===Z&&void 0===n&&!oe;t&&t.length&&(t&&t!==Z&&!o||r||!oe&&ee!=n)&&mn(t,n)}}function Ft(){var t,n,o=e.location.hash;if(o.length){var r=o.replace("#","").split("/"),i=o.indexOf("#/")>-1;t=i?"/"+r[1]:decodeURIComponent(r[0]);var l=i?r[2]:r[1];l&&l.length&&(n=decodeURIComponent(l))}return{section:t,slide:n}}function Ut(e){clearTimeout(ye);var n=t.activeElement,o=e.keyCode;if(9===o)!function(e){var n=e.shiftKey,o=t.activeElement,r=qt(Vt(d(l)[0]));function a(e){return Y(e),r[0]?r[0].focus():null}if(function(e){var n=qt(t),o=n.indexOf(t.activeElement),r=e.shiftKey?o-1:o+1,l=n[r],a=Ct(z(l,s)),c=Mt(z(l,i));return!a&&!c}(e))return;o?null==z(o,l+","+l+" .fp-slide.active")&&(o=a(e)):a(e);(!n&&o==r[r.length-1]||n&&o==r[0])&&Y(e)}(e);else if(!X(n,"textarea")&&!X(n,"input")&&!X(n,"select")&&"true"!==n.getAttribute("contentEditable")&&""!==n.getAttribute("contentEditable")&&A.keyboardScrolling&&A.autoScrolling){[40,38,32,33,34].indexOf(o)>-1&&Y(e),te=e.ctrlKey,ye=setTimeout((function(){!function(e){var n=e.shiftKey,o=t.activeElement,r=X(o,"video")||X(o,"audio");if(!fe&&[37,39].indexOf(e.keyCode)<0)return;switch(e.keyCode){case 38:case 33:ve.k.up&&Je();break;case 32:if(n&&ve.k.up&&!r){Je();break}case 40:case 34:ve.k.down&&(32===e.keyCode&&r||Ze());break;case 36:ve.k.up&&tt(1);break;case 35:ve.k.down&&tt(d(i).length);break;case 37:ve.k.left&&ot();break;case 39:ve.k.right&&nt();break;default:;}}(e)}),150)}}function Xt(){U(y(this),"click")}function Kt(e){ue&&(te=e.ctrlKey)}function _t(e){2==e.which&&(Ye=e.pageY,le.addEventListener("mousemove",nn))}function $t(e){2==e.which&&le.removeEventListener("mousemove",nn)}function qt(e){return[].slice.call(d('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',e)).filter((function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent}))}function Qt(){var e=z(this,i);p(this,"fp-prev")?ve.m.left&&ot(e):ve.m.right&&nt(e)}function Gt(){ue=!0}function Jt(){ue=!1,te=!1}function Zt(e){Y(e);var t=x(z(this,"#fp-nav li"));kt(d(i)[t])}function en(e){Y(e);var t=d(c,z(this,i))[0];on(t,d(s,t)[x(z(this,"li"))])}function tn(e){!d(A.menu)[0]||!A.lockAnchors&&A.anchors.length||(Y(e),tt(this.getAttribute("data-menuanchor")))}function nn(e){A.autoScrolling&&(fe&&(e.pageY<Ye&&ve.m.up?Je():e.pageY>Ye&&ve.m.down&&Ze()),Ye=e.pageY)}function on(e,t,o){var r=z(e,i),l={slides:e,destiny:t,direction:o,destinyPos:{left:t.offsetLeft},slideIndex:x(t),section:r,sectionIndex:x(r,i),anchorLink:r.getAttribute("data-anchor"),slidesNav:d(".fp-slidesNav",r)[0],slideAnchor:yn(t),prevSlide:d(".fp-slide.active",r)[0],prevSlideIndex:x(d(".fp-slide.active",r)[0]),localIsResizing:ce};l.xMovement=function(e,t){if(e==t)return"none";if(e>t)return"left";return"right"}(l.prevSlideIndex,l.slideIndex),l.direction=l.direction?l.direction:l.xMovement,l.localIsResizing||(fe=!1),A.onSlideLeave&&!l.localIsResizing&&"none"!==l.xMovement&&F(A.onSlideLeave)&&!1===Ot("onSlideLeave",l)?oe=!1:(M(t,n),C(W(t),n),l.localIsResizing||(Dt(l.prevSlide),Rt(t)),!A.loopHorizontal&&A.controlArrows&&(K(d(".fp-controlArrow.fp-prev",r),0!==l.slideIndex),K(d(".fp-controlArrow.fp-next",r),null!=E(t))),p(r,n)&&!l.localIsResizing&&bn(l.slideIndex,l.slideAnchor,l.anchorLink,l.sectionIndex),function(e,t,n){var o=t.destinyPos;if(A.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";J.test.translate3dH[t.sectionIndex]=r,m(cn(d(u,e)),Tn(r)),we=setTimeout((function(){n&&rn(t)}),A.scrollingSpeed)}else J.test.left[t.sectionIndex]=Math.round(o.left),Cn(e,Math.round(o.left),A.scrollingSpeed,(function(){n&&rn(t)}))}(e,l,!0))}function rn(e){var t,o;t=e.slidesNav,o=e.slideIndex,A.slidesNavigation&&null!=t&&(C(d(".active",t),n),M(d("a",d("li",t)[o]),n)),e.localIsResizing||(F(A.afterSlideLoad)&&Ot("afterSlideLoad",e),fe=!0,jt(e.destiny)),oe=!1}function ln(){clearTimeout(he),he=setTimeout((function(){for(var e=0;e<4;e++)ge=setTimeout(an,200*e)}),200)}function an(){if(ce=!0,sn(),re){var e=t.activeElement;if(!X(e,"textarea")&&!X(e,"input")&&!X(e,"select")){var n=h();Math.abs(n-Fe)>20*Math.max(Fe,n)/100&&(rt(!0),Fe=n)}}else ut();ce=!1}function sn(){var t=A.responsive||A.responsiveWidth,n=A.responsiveHeight,o=t&&e.innerWidth<t,r=n&&e.innerHeight<n;t&&n?lt(o||r):t?lt(o):n&&lt(r)}function cn(e){var t="all "+A.scrollingSpeed+"ms "+A.easingcss3;return C(e,"fp-notransition"),m(e,{"-webkit-transition":t,transition:t})}function un(e){return M(e,"fp-notransition")}function fn(e,t){var o;o=e,d(A.menu).forEach((function(e){A.menu&&null!=e&&(C(d(".active",e),n),M(d('[data-menuanchor="'+o+'"]',e),n))})),function(e,t){A.navigation&&null!=d("#fp-nav")[0]&&(C(d(".active",d("#fp-nav")[0]),n),M(e?d('a[href="#'+e+'"]',d("#fp-nav")[0]):d("a",d("li",d("#fp-nav")[0])[t]),n))}(e,t)}function dn(e){var t=x(d(l)[0],i),n=x(e,i);return t==n?"none":t>n?"up":"down"}function vn(e){if(!p(e,"fp-table")){var n=t.createElement("div");n.className="fp-tableCell",n.style.height=pn(e)+"px",M(e,"fp-table"),N(e,n)}}function pn(e){var t=ae;if(A.paddingTop||A.paddingBottom){var n=e;p(n,r)||(n=z(e,i));var o=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"]);t=ae-o}return t}function hn(e,t){t?cn(le):un(le),m(le,Tn(e)),J.test.translate3d=e,setTimeout((function(){C(le,"fp-notransition")}),10)}function gn(e){var t=d(i+'[data-anchor="'+e+'"]',le)[0];if(!t){var n=void 0!==e?e-1:0;t=d(i)[n]}return t}function mn(e,t){var o=gn(e);if(null!=o){var r=function(e,t){var n=d(s+'[data-anchor="'+e+'"]',t)[0];return null==n&&(e=void 0!==e?e:0,n=d(s,t)[e]),n}(t,o);yn(o)===Z||p(o,n)?wn(r):kt(o,(function(){wn(r)}))}}function wn(e){null!=e&&on(z(e,c),e)}function bn(e,t,n,o){var r="";A.anchors.length&&!A.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),ee=t,Sn(r+"/"+t)):null!=e?(ee=t,Sn(n)):Sn(n)),En()}function Sn(t){if(A.recordHistory)location.hash=t;else if(re||ie)e.history.replaceState(void 0,void 0,"#"+t);else{var n=e.location.href.split("#")[0];e.location.replace(n+"#"+t)}}function yn(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=x(e);return null==t&&(t=n),t}function En(){var e=d(l)[0],t=d(".fp-slide.active",e)[0],n=yn(e),o=yn(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");q.className=q.className.replace(i,""),M(q,"fp-viewing-"+r)}function Ln(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,ie&&yt(e)&&A.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function xn(e,t){Ke(0,"internal"),void 0!==t&&(ce=!0),on(z(e,c),e),void 0!==t&&(ce=!1),Ke(Ce.scrollingSpeed,"internal")}function An(e){var t=Math.round(e);if(A.css3&&A.autoScrolling&&!A.scrollBar)hn("translate3d(0px, -"+t+"px, 0px)",!1);else if(A.autoScrolling&&!A.scrollBar)m(le,{top:-t+"px"}),J.test.top=-t+"px";else{var n=Ht(t);Hn(n.element,n.options)}}function Tn(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function kn(e,t,n){"all"!==t?ve[n][t]=e:Object.keys(ve[n]).forEach((function(t){ve[n][t]=e}))}function On(e,t,n){A[e]=t,"internal"!==n&&(Ce[e]=t)}function Mn(){var e=A.licenseKey,t="font-size: 15px;background:yellow;";O?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(f("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),f("error","https://github.com/alvarotrigo/fullPage.js#options")),p(D,"fp-enabled")?f("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(A.continuousVertical&&(A.loopTop||A.loopBottom)&&(A.continuousVertical=!1,f("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!A.scrollOverflow||!A.scrollBar&&A.autoScrolling||f("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!A.continuousVertical||!A.scrollBar&&A.autoScrolling||(A.continuousVertical=!1,f("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),A.scrollOverflow&&null==A.scrollOverflowHandler&&(A.scrollOverflow=!1,f("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),Be.forEach((function(e){A[e]&&f("warn","fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: "+e)})),A.anchors.forEach((function(e){var t=[].slice.call(d("[name]")).filter((function(t){return t.getAttribute("name")&&t.getAttribute("name").toLowerCase()==e.toLowerCase()})),n=[].slice.call(d("[id]")).filter((function(t){return t.getAttribute("id")&&t.getAttribute("id").toLowerCase()==e.toLowerCase()}));if(n.length||t.length){f("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||t.length)&&f("error",'"'+e+'" is is being used by another element `'+o+"` property")}})))}function Cn(t,n,o,r){var i=function(t){return t.self!=e&&p(t,"fp-slides")?t.scrollLeft:!A.autoScrolling||A.scrollBar?V():t.offsetTop}(t),l=n-i,a=0;ke=!0;var s=function(){if(ke){var c=n;a+=20,o&&(c=e.fp_easings[A.easing](a,i,l,o)),Hn(t,c),a<o?setTimeout(s,20):void 0!==r&&r()}else a<o&&r()};s()}function Hn(t,n){!A.autoScrolling||A.scrollBar||t.self!=e&&p(t,"fp-slides")?t.self!=e&&p(t,"fp-slides")?t.scrollLeft=n:t.scrollTo(0,n):t.style.top=n+"px"}function In(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=x(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function Bn(e){In.call(this,e,i)}function Nn(e){In.call(this,e,s)}Mn()}})),window.jQuery&&window.fullpage&&function(e,t){"use strict";e&&t?e.fn.fullpage=function(n){n=e.extend({},n,{$:e});new t(this[0],n)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);