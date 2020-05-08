/*!
 * 
 *   MontiMark v1.0.11
 *   https://github.com/domEscobar/montimark
 * 
 *   Copyright (c) domEscobar (https://github.com/domEscobar)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,r){"object"===typeof exports&&"object"===typeof module?module.exports=r():"function"===typeof define&&define.amd?define("MontiMark",[],r):"object"===typeof exports?exports.MontiMark=r():e.MontiMark=r()}(window,function(){return function(e){var r={};function __webpack_require__(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)__webpack_require__.d(t,n,function(r){return e[r]}.bind(null,n));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}t.r(r);var n=function(){function Montimark(e,r){var t,n,i,a=this;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Montimark),i=[],(n="orginals")in(t=this)?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i;var o=document.querySelectorAll(e);this.showOriginals=this.showOriginals.bind(this),this.markImages=this.markImages.bind(this),this.loadImage(r).then(function(e){a.markImages(o,e)}),document.monetization&&document.monetization.addEventListener("monetizationstart",function(){a.showOriginals(o)})}var e,r,t;return e=Montimark,(r=[{key:"showOriginals",value:function(e){var r=this;e.forEach(function(e){var t=r.orginals.find(function(r){return r.id===e.getAttribute("markId")});t&&(e.src=t.src)})}},{key:"markImages",value:function(e,r){var t=this,n=this;e.forEach(function(e){if(e instanceof HTMLImageElement){var i=t.randomUid();n.orginals.push({id:i,src:e.src});var a=t.drawImage(e);a=t.watermark(a,r),e.src=t.dataUrl(a),e.setAttribute("markId",i)}})}},{key:"loadImage",value:function(e){var r=new Image;return new Promise(function(t){r.onload=function(){return t(r)},r.src=e})}},{key:"drawImage",value:function(e){var r=document.createElement("canvas"),t=r.getContext("2d");return r.width=e.width,r.height=e.height,t.drawImage(e,0,0),r}},{key:"watermark",value:function(e,r){return e.getContext("2d").drawImage(r,10,10),e}},{key:"dataUrl",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"image/png",encoderOptions:.92};return e.toDataURL(r.type,r.encoderOptions)}},{key:"randomUid",value:function(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}}])&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Montimark}();r.default=n}])});
//# sourceMappingURL=index.js.map