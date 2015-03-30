!function(e){"use strict";function t(e,t){x.debug&&window.console&&console[t?"error":"log"](e)}function n(){var e,t,n,r=navigator.userAgent,s=navigator.appName,a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10);return-1!==navigator.appVersion.indexOf("Windows NT")&&-1!==navigator.appVersion.indexOf("rv:11")?(s="IE",a="11;"):-1!==(t=r.indexOf("MSIE"))?(s="IE",a=r.substring(t+5)):-1!==(t=r.indexOf("Chrome"))?(s="Chrome",a=r.substring(t+7)):-1!==(t=r.indexOf("Safari"))?(s="Safari",a=r.substring(t+7),-1!==(t=r.indexOf("Version"))&&(a=r.substring(t+8))):-1!==(t=r.indexOf("Firefox"))?(s="Firefox",a=r.substring(t+8)):(e=r.lastIndexOf(" ")+1)<(t=r.lastIndexOf("/"))&&(s=r.substring(e,t),a=r.substring(t+1),s.toLowerCase()==s.toUpperCase()&&(s=navigator.appName)),-1!==(n=a.indexOf(";"))&&(a=a.substring(0,n)),-1!==(n=a.indexOf(" "))&&(a=a.substring(0,n)),o=parseInt(""+a,10),isNaN(o)&&(a=""+parseFloat(navigator.appVersion),o=parseInt(navigator.appVersion,10)),{name:s,version:o,ios:/(iPad|iPhone|iPod)/g.test(navigator.platform)}}function r(e,t){var n=e.media;if("video"==e.type)switch(t){case"video/webm":return!(!n.canPlayType||!n.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/,""));case"video/mp4":return!(!n.canPlayType||!n.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/,""));case"video/ogg":return!(!n.canPlayType||!n.canPlayType('video/ogg; codecs="theora"').replace(/no/,""))}else if("audio"==e.type)switch(t){case"audio/mpeg":return!(!n.canPlayType||!n.canPlayType("audio/mpeg;").replace(/no/,""));case"audio/ogg":return!(!n.canPlayType||!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/,""));case"audio/wav":return!(!n.canPlayType||!n.canPlayType('audio/wav; codecs="1"').replace(/no/,""))}return!1}function s(e,t,n){return e.replace(new RegExp(t.replace(/([.*+?^=!:${}()|\[\]\/\\])/g,"\\$1"),"g"),n)}function a(e,t){e.length||(e=[e]);for(var n=e.length-1;n>=0;n--){var r=n>0?t.cloneNode(!0):t,s=e[n],a=s.parentNode,o=s.nextSibling;r.appendChild(s),o?a.insertBefore(r,o):a.appendChild(r)}}function o(e){e.parentNode.removeChild(e)}function i(e,t){e.insertBefore(t,e.firstChild)}function l(e,t){for(var n in t)e.setAttribute(n,t[n])}function c(e,t,n){if(e)if(e.classList)e.classList[n?"add":"remove"](t);else{var r=(" "+e.className+" ").replace(/\s+/g," ").replace(" "+t+" ","");e.className=r+(n?" "+t:"")}}function u(e,t,n,r){if(t=t.split(" "),e instanceof NodeList)for(var s=0;s<e.length;s++)e[s]instanceof Node&&u(e[s],arguments[1],arguments[2],arguments[3]);else for(var a=0;a<t.length;a++)e[r?"addEventListener":"removeEventListener"](t[a],n,!1)}function p(e,t,n){u(e,t,n,!0)}function d(e,t,n){u(e,t,n,!1)}function f(e,t){var n=document.createEvent("MouseEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function m(e){return e.keyCode&&13!=e.keyCode?!0:(e.target.checked=!e.target.checked,f(e.target,"change"),void 0)}function v(e,t){return 0===e||0===t||isNaN(e)||isNaN(t)?0:(e/t*100).toFixed(2)}function y(e,t){for(var n in t)t[n]&&t[n].constructor&&t[n].constructor===Object?(e[n]=e[n]||{},y(e[n],t[n])):e[n]=t[n];return e}function g(){var e={supportsFullScreen:!1,isFullScreen:function(){return!1},requestFullScreen:function(){},cancelFullScreen:function(){},fullScreenEventName:"",element:null,prefix:""},t="webkit moz o ms khtml".split(" ");if("undefined"!=typeof document.cancelFullScreen)e.supportsFullScreen=!0;else for(var n=0,r=t.length;r>n;n++){if(e.prefix=t[n],"undefined"!=typeof document[e.prefix+"CancelFullScreen"]){e.supportsFullScreen=!0;break}if("undefined"!=typeof document.msExitFullscreen&&document.msFullscreenEnabled){e.prefix="ms",e.supportsFullScreen=!0;break}}return"webkit"===e.prefix&&navigator.userAgent.match(/Version\/[\d\.]+.*Safari/)&&(e.supportsFullScreen=!1),e.supportsFullScreen&&(e.fullScreenEventName="ms"==e.prefix?"MSFullscreenChange":e.prefix+"fullscreenchange",e.isFullScreen=function(){switch(this.prefix){case"":return document.fullScreen;case"webkit":return document.webkitIsFullScreen;case"ms":return null!==document.msFullscreenElement;default:return document[this.prefix+"FullScreen"]}},e.requestFullScreen=function(e){return""===this.prefix?e.requestFullScreen():e[this.prefix+("ms"==this.prefix?"RequestFullscreen":"RequestFullScreen")]("webkit"===this.prefix?e.ALLOW_KEYBOARD_INPUT:null)},e.cancelFullScreen=function(){return""===this.prefix?document.cancelFullScreen():document[this.prefix+("ms"==this.prefix?"ExitFullscreen":"CancelFullScreen")]()},e.element=function(){return""===this.prefix?document.fullscreenElement:document[this.prefix+"FullscreenElement"]}),e}function b(){var e={supported:function(){try{return"localStorage"in window&&null!==window.localStorage}catch(e){return!1}}()};return e}function h(u){function f(e){if(!tt.usingTextTracks&&"video"===tt.type&&tt.supported.full){for(tt.subcount=0,e="number"==typeof e?e:tt.media.currentTime;w(tt.captions[tt.subcount][0])<e.toFixed(1);)if(tt.subcount++,tt.subcount>tt.captions.length-1){tt.subcount=tt.captions.length-1;break}tt.media.currentTime.toFixed(1)>=h(tt.captions[tt.subcount][0])&&tt.media.currentTime.toFixed(1)<=w(tt.captions[tt.subcount][0])?(tt.currentCaption=tt.captions[tt.subcount][1],tt.captionsContainer.innerHTML=tt.currentCaption):tt.captionsContainer.innerHTML=""}}function y(){c(tt.container,x.classes.captions.enabled,!0),x.captions.defaultActive&&(c(tt.container,x.classes.captions.active,!0),tt.buttons.captions.checked=!0)}function h(e){var t=[];return t=e.split(" --> "),T(t[0])}function w(e){var t=[];return t=e.split(" --> "),T(t[1])}function T(e){if(null===e||void 0===e)return 0;var t,n=[],r=[];return n=e.split(","),r=n[0].split(":"),t=Math.floor(60*r[0]*60)+Math.floor(60*r[1])+Math.floor(r[2])}function S(e){return tt.container.querySelectorAll(e)}function F(e){return S(e)[0]}function C(){try{return window.self!==window.top}catch(e){return!0}}function E(){t("Injecting custom controls.");var e=x.html;if(e=s(e,"{seektime}",x.seekTime),e=s(e,"{id}",tt.random),tt.container.insertAdjacentHTML("beforeend",e),x.tooltips)for(var n=S(x.selectors.labels),r=n.length-1;r>=0;r--){var a=n[r];c(a,x.classes.hidden,!1),c(a,x.classes.tooltip,!0)}}function N(){try{return tt.controls=F(x.selectors.controls),tt.buttons={},tt.buttons.seek=F(x.selectors.buttons.seek),tt.buttons.play=F(x.selectors.buttons.play),tt.buttons.pause=F(x.selectors.buttons.pause),tt.buttons.restart=F(x.selectors.buttons.restart),tt.buttons.rewind=F(x.selectors.buttons.rewind),tt.buttons.forward=F(x.selectors.buttons.forward),tt.buttons.fullscreen=F(x.selectors.buttons.fullscreen),tt.buttons.mute=F(x.selectors.buttons.mute),tt.buttons.captions=F(x.selectors.buttons.captions),tt.checkboxes=S("[type='checkbox']"),tt.progress={},tt.progress.container=F(x.selectors.progress.container),tt.progress.buffer={},tt.progress.buffer.bar=F(x.selectors.progress.buffer),tt.progress.buffer.text=tt.progress.buffer.bar.getElementsByTagName("span")[0],tt.progress.played={},tt.progress.played.bar=F(x.selectors.progress.played),tt.progress.played.text=tt.progress.played.bar.getElementsByTagName("span")[0],tt.volume=F(x.selectors.buttons.volume),tt.duration=F(x.selectors.duration),tt.seekTime=S(x.selectors.seekTime),!0}catch(e){return t("It looks like there's a problem with your controls html. Bailing.",!0),!1}}function A(){var e=tt.buttons.play.innerText||"Play";"undefined"!=typeof x.title&&x.title.length&&(e+=", "+x.title),tt.buttons.play.setAttribute("aria-label",e)}function P(){if(!tt.media)return t("No audio or video element found!",!0),!1;if(tt.supported.full&&(tt.media.removeAttribute("controls"),c(tt.container,x.classes[tt.type],!0),c(tt.container,x.classes.stopped,null===tt.media.getAttribute("autoplay")),tt.browser.ios&&c(tt.container,"ios",!0),"video"===tt.type)){var e=document.createElement("div");e.setAttribute("class",x.classes.videoWrapper),a(tt.media,e),tt.videoContainer=e}null!==tt.media.getAttribute("autoplay")&&L()}function I(){if("video"===tt.type){tt.videoContainer.insertAdjacentHTML("afterbegin","<div class='"+x.selectors.captions.replace(".","")+"'></div>"),tt.captionsContainer=F(x.selectors.captions),tt.usingTextTracks=!1,tt.media.textTracks&&(tt.usingTextTracks=!0);for(var e,n="",r=tt.media.childNodes,s=0;s<r.length;s++)"track"===r[s].nodeName.toLowerCase()&&(e=r[s].getAttribute("kind"),"captions"===e&&(n=r[s].getAttribute("src")));if(tt.captionExists=!0,""===n?(tt.captionExists=!1,t("No caption track found.")):t("Caption track found; URI: "+n),tt.captionExists){for(var a=tt.media.textTracks,o=0;o<a.length;o++)a[o].mode="hidden";if(y(tt),("IE"===tt.browser.name&&10===tt.browser.version||"IE"===tt.browser.name&&11===tt.browser.version||"Firefox"===tt.browser.name&&tt.browser.version>=31||"Safari"===tt.browser.name&&tt.browser.version>=7)&&(t("Detected IE 10/11 or Firefox 31+ or Safari 7+."),tt.usingTextTracks=!1),tt.usingTextTracks){t("TextTracks supported.");for(var i=0;i<a.length;i++){var l=a[i];"captions"===l.kind&&p(l,"cuechange",function(){this.activeCues[0]&&this.activeCues[0].hasOwnProperty("text")&&(tt.captionsContainer.innerHTML=this.activeCues[0].text)})}}else if(t("TextTracks not supported so rendering captions manually."),tt.currentCaption="",tt.captions=[],""!==n){var u=new XMLHttpRequest;u.onreadystatechange=function(){if(4===u.readyState)if(200===u.status){var e,n=[],r=u.responseText;n=r.split("\n\n");for(var s=0;s<n.length;s++)e=n[s],tt.captions[s]=[],tt.captions[s]=e.split("\n");tt.captions.shift(),t("Successfully loaded the caption file via AJAX.")}else t("There was a problem loading the caption file via AJAX.",!0)},u.open("get",n,!0),u.send()}if("Safari"===tt.browser.name&&tt.browser.version>=7){t("Safari 7+ detected; removing track from DOM."),a=tt.media.getElementsByTagName("track");for(var d=0;d<a.length;d++)tt.media.removeChild(a[d])}}else c(tt.container,x.classes.captions.enabled)}}function M(){if("video"===tt.type&&x.fullscreen.enabled){var e=k.supportsFullScreen;e||x.fullscreen.fallback&&!C()?(t((e?"Native":"Fallback")+" fullscreen enabled."),c(tt.container,x.classes.fullscreen.enabled,!0)):t("Fullscreen not supported and fallback disabled."),x.fullscreen.hideControls&&c(tt.container,x.classes.fullscreen.hideControls,!0)}}function L(){tt.media.play()}function O(){tt.media.pause()}function q(e){"number"!=typeof e&&(e=x.seekTime),H(tt.media.currentTime-e)}function V(e){"number"!=typeof e&&(e=x.seekTime),H(tt.media.currentTime+e)}function H(e){var n=0;"number"==typeof e?n=e:"object"!=typeof e||"change"!==e.type&&"input"!==e.type||(n=e.target.value/e.target.max*tt.media.duration),0>n?n=0:n>tt.media.duration&&(n=tt.media.duration);try{tt.media.currentTime=n.toFixed(1)}catch(r){}t("Seeking to "+tt.media.currentTime+" seconds"),f(n)}function R(){c(tt.container,x.classes.playing,!tt.media.paused),c(tt.container,x.classes.stopped,tt.media.paused)}function j(e){var t=k.supportsFullScreen;e&&e.type===k.fullScreenEventName?x.fullscreen.active=k.isFullScreen():t?(k.isFullScreen()?k.cancelFullScreen():k.requestFullScreen(tt.container),x.fullscreen.active=k.isFullScreen()):(x.fullscreen.active=!x.fullscreen.active,x.fullscreen.active?(p(document,"keyup",B),document.body.style.overflow="hidden"):(d(document,"keyup",B),document.body.style.overflow="")),c(tt.container,x.classes.fullscreen.active,x.fullscreen.active)}function B(e){27===(e.which||e.charCode||e.keyCode)&&x.fullscreen.active&&j()}function W(e){"undefined"==typeof e&&(e=x.storage.enabled&&b().supported?window.localStorage[x.storage.key]||x.volume:x.volume),e>10&&(e=10),tt.supported.full&&(tt.volume.value=e),tt.media.volume=parseFloat(e/10),U(),x.storage.enabled&&b().supported&&(window.localStorage.plyr_volume=e)}function _(e){"undefined"==typeof e&&(e=!tt.media.muted),tt.supported.full&&(tt.buttons.mute.checked=e),tt.media.muted=e,U()}function D(e){tt.supported.full&&("undefined"==typeof e&&(e=-1===tt.container.className.indexOf(x.classes.captions.active),tt.buttons.captions.checked=e),c(tt.container,x.classes.captions.active,e))}function U(){c(tt.container,x.classes.muted,0===tt.media.volume||tt.media.muted)}function X(e){var t="waiting"===e.type;clearTimeout(tt.loadingTimer),tt.loadingTimer=setTimeout(function(){c(tt.container,x.classes.loading,t)},t?250:0)}function J(e){var t=tt.progress.played.bar,n=tt.progress.played.text,r=0;if(e)switch(e.type){case"timeupdate":case"seeking":r=v(tt.media.currentTime,tt.media.duration),"timeupdate"==e.type&&(tt.buttons.seek.value=r);break;case"change":case"input":r=e.target.value;break;case"playing":case"progress":t=tt.progress.buffer.bar,n=tt.progress.buffer.text,r=function(){var e=tt.media.buffered;return e.length?v(e.end(0),tt.media.duration):0}()}t.value=r,n.innerHTML=r}function $(){tt.secs=parseInt(tt.media.currentTime%60),tt.mins=parseInt(tt.media.currentTime/60%60),tt.hours=parseInt(tt.media.currentTime/60/60%60),tt.secs=("0"+tt.secs).slice(-2),tt.mins=("0"+tt.mins).slice(-2),tt.duration.innerHTML=(tt.hours>0?tt.hours+":":"")+tt.mins+":"+tt.secs}function z(e){$(),J(e)}function K(){for(var e=tt.media.querySelectorAll("source"),t=e.length-1;t>=0;t--)o(e[t]);tt.media.removeAttribute("src")}function Y(e){if(e.src){var t=document.createElement("source");l(t,e),i(tt.media,t)}}function G(e){if(O(),H(),K(),"string"==typeof e)tt.media.setAttribute("src",e);else if(e.constructor===Array)for(var t in e)Y(e[t]);tt.supported.full&&(z(),R()),tt.media.load(),null!==tt.media.getAttribute("autoplay")&&L()}function Q(e){"video"===tt.type&&tt.media.setAttribute("poster",e)}function Z(){p(tt.buttons.play,"click",function(){L(),setTimeout(function(){tt.buttons.pause.focus()},100)}),p(tt.buttons.pause,"click",function(){O(),setTimeout(function(){tt.buttons.play.focus()},100)}),p(tt.buttons.restart,"click",H),p(tt.buttons.rewind,"click",q),p(tt.buttons.forward,"click",V),p(tt.volume,"change input",function(){W(this.value)}),p(tt.buttons.mute,"change",function(){_(this.checked)}),p(tt.buttons.fullscreen,"click",j),k.supportsFullScreen&&p(document,k.fullScreenEventName,j),p(tt.media,"timeupdate seeking",z),p(tt.media,"timeupdate",f),p(tt.buttons.seek,"change input",H),p(tt.buttons.captions,"change",function(){D(this.checked)}),p(tt.media,"ended",function(){"video"===tt.type&&(tt.captionsContainer.innerHTML=""),R()}),p(tt.media,"progress",J),p(tt.media,"playing",J),p(tt.media,"volumechange",U),p(tt.media,"play pause",R),p(tt.media,"waiting canplay seeked",X),p(tt.checkboxes,"keyup",m),"video"===tt.type&&x.click&&p(tt.videoContainer,"click",function(){tt.media.paused?L():tt.media.ended?(H(),L()):O()}),x.fullscreen.hideControls&&p(tt.controls,"mouseenter mouseleave",function(e){c(tt.controls,x.classes.hover,"mouseenter"===e.type)})}function et(){if(k=g(),tt.browser=n(),tt.media=tt.container.querySelectorAll("audio, video")[0],tt.type=tt.media.tagName.toLowerCase(),tt.supported=e.supported(tt.type),!tt.supported.basic)return!1;if(t(tt.browser.name+" "+tt.browser.version),P(),tt.random=Math.floor(1e4*Math.random()),tt.supported.full){if(E(),!N())return!1;A(),I(),W(),M(),Z()}return!0}var tt=this;return tt.container=u,et()?{media:tt.media,play:L,pause:O,restart:H,rewind:q,forward:V,seek:H,setVolume:W,toggleMute:_,toggleCaptions:D,source:G,poster:Q,support:function(e){return r(tt,e)}}:{}}var k,x,w={enabled:!0,debug:!1,seekTime:10,volume:5,click:!0,tooltips:!1,selectors:{container:".player",controls:".player-controls",labels:"[data-player] .sr-only, label .sr-only",buttons:{seek:"[data-player='seek']",play:"[data-player='play']",pause:"[data-player='pause']",restart:"[data-player='restart']",rewind:"[data-player='rewind']",forward:"[data-player='fast-forward']",mute:"[data-player='mute']",volume:"[data-player='volume']",captions:"[data-player='captions']",fullscreen:"[data-player='fullscreen']"},progress:{container:".player-progress",buffer:".player-progress-buffer",played:".player-progress-played"},captions:".player-captions",duration:".player-duration"},classes:{video:"player-video",videoWrapper:"player-video-wrapper",audio:"player-audio",stopped:"stopped",playing:"playing",muted:"muted",loading:"loading",tooltip:"player-tooltip",hidden:"sr-only",hover:"hover",captions:{enabled:"captions-enabled",active:"captions-active"},fullscreen:{enabled:"fullscreen-enabled",active:"fullscreen-active",hideControls:"fullscreen-hide-controls"}},captions:{defaultActive:!1},fullscreen:{enabled:!0,fallback:!0,hideControls:!0},storage:{enabled:!0,key:"plyr_volume"},html:function(){return["<div class='player-controls'>","<div class='player-progress'>","<label for='seek{id}' class='sr-only'>Seek</label>","<input id='seek{id}' class='player-progress-seek' type='range' min='0' max='100' step='0.5' value='0' data-player='seek'>","<progress class='player-progress-played' max='100' value='0'>","<span>0</span>% played","</progress>","<progress class='player-progress-buffer' max='100' value='0'>","<span>0</span>% buffered","</progress>","</div>","<span class='player-controls-left'>","<button type='button' data-player='restart'>","<svg><use xlink:href='#icon-restart'></use></svg>","<span class='sr-only'>Restart</span>","</button>","<button type='button' data-player='rewind'>","<svg><use xlink:href='#icon-rewind'></use></svg>","<span class='sr-only'>Rewind {seektime} secs</span>","</button>","<button type='button' data-player='play'>","<svg><use xlink:href='#icon-play'></use></svg>","<span class='sr-only'>Play</span>","</button>","<button type='button' data-player='pause'>","<svg><use xlink:href='#icon-pause'></use></svg>","<span class='sr-only'>Pause</span>","</button>","<button type='button' data-player='fast-forward'>","<svg><use xlink:href='#icon-fast-forward'></use></svg>","<span class='sr-only'>Forward {seektime} secs</span>","</button>","<span class='player-time'>","<span class='sr-only'>Time</span>","<span class='player-duration'>00:00</span>","</span>","</span>","<span class='player-controls-right'>","<input class='inverted sr-only' id='mute{id}' type='checkbox' data-player='mute'>","<label id='mute{id}' for='mute{id}'>","<svg class='icon-muted'><use xlink:href='#icon-muted'></use></svg>","<svg><use xlink:href='#icon-volume'></use></svg>","<span class='sr-only'>Toggle Mute</span>","</label>","<label for='volume{id}' class='sr-only'>Volume</label>","<input id='volume{id}' class='player-volume' type='range' min='0' max='10' value='5' data-player='volume'>","<input class='sr-only' id='captions{id}' type='checkbox' data-player='captions'>","<label for='captions{id}'>","<svg class='icon-captions-on'><use xlink:href='#icon-captions-on'></use></svg>","<svg><use xlink:href='#icon-captions-off'></use></svg>","<span class='sr-only'>Toggle Captions</span>","</label>","<button type='button' data-player='fullscreen'>","<svg class='icon-exit-fullscreen'><use xlink:href='#icon-exit-fullscreen'></use></svg>","<svg><use xlink:href='#icon-enter-fullscreen'></use></svg>","<span class='sr-only'>Toggle Fullscreen</span>","</button>","</span>","</div>"].join("\n")}()};e.supported=function(e){var t,r,s=n(),a="IE"===s.name&&s.version<=9,o=/iPhone|iPod/i.test(navigator.userAgent),i=!!document.createElement("audio").canPlayType,l=!!document.createElement("video").canPlayType;switch(e){case"video":t=l,r=t&&!a&&!o;break;case"audio":t=i,r=t&&!a;break;default:t=i&&l,r=t&&!a}return{basic:t,full:r}},e.setup=function(t){if(x=y(w,t),!x.enabled||!e.supported().basic)return!1;for(var n=document.querySelectorAll(x.selectors.container),r=[],s=n.length-1;s>=0;s--){var a=n[s];if("undefined"==typeof a.plyr){var o=new h(a);a.plyr=Object.keys(o).length?o:!1}r.push(a.plyr)}return r}}(this.plyr=this.plyr||{});