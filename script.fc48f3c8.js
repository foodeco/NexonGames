parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
new Swiper(".inner .swiper",{navigation:{prevEl:".swiper-prev",nextEl:".swiper-next"}});for(var e=document.querySelector(".status"),n=document.querySelector(".bar"),t=document.getElementById("flickity"),o=t.getElementsByTagName("video"),i=o.length,r=new Flickity(t,{wrapAround:!0,autoPlay:!1,on:{ready:function(){console.log("Flickity ready"),o[0].play()}}}),a=function(e){o[e].addEventListener("loadedmetadata",function(){console.log("Video Duration_"+e+" : "+o[e].duration)},!1),o[e].addEventListener("ended",function(){r.next("true")},!1)},c=0;c<i;c++)a(c);function l(){var n=r.selectedIndex+1;e.innerHTML="0"+n+"<span> / 0"+r.slides.length+"</span>"}function d(e){e=Math.max(0,Math.min(1,e)),n.style.width=100*e+"%"}function u(e){for(var n=0;n<i;n++)o[n].currentTime=0,o[e].play()}l(),d(),r.on("change",u),r.on("select",l),r.on("scroll",d);var s=document.querySelector(".next-btn"),y=document.querySelector(".flickity-prev-next-button.next");s.addEventListener("click",function(e){e.preventDefault(),y.dispatchEvent(new Event("click"))});
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.fc48f3c8.js.map