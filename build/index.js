/*!
 * 
 *   montimark v1.0.1
 *   https://github.com/domEscobar/montimark
 * 
 *   Copyright (c) Dominic H. (https://github.com/domEscobar)
 * 
 *   This source code is licensed under the MIT license found in the
 *   LICENSE file in the root directory of this source tree.
 *   
 */
!function(e,r){"object"===typeof exports&&"object"===typeof module?module.exports=r():"function"===typeof define&&define.amd?define("MontiMark",[],r):"object"===typeof exports?exports.MontiMark=r():e.MontiMark=r()}(window,function(){return function(e){var r={};function __webpack_require__(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}return __webpack_require__.m=e,__webpack_require__.c=r,__webpack_require__.d=function(e,r,t){__webpack_require__.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},__webpack_require__.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,r){if(1&r&&(e=__webpack_require__(e)),8&r)return e;if(4&r&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(__webpack_require__.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var n in e)__webpack_require__.d(t,n,function(r){return e[r]}.bind(null,n));return t},__webpack_require__.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return __webpack_require__.d(r,"a",r),r},__webpack_require__.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=0)}([function(e,r,t){e.exports=t(1)},function(e,r,t){"use strict";function _createForOfIteratorHelper(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,r){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,r)}(e))){var r=0,t=function(){};return{s:t,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,i,o=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw i}}}}function _arrayLikeToArray(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}t.r(r);var n=function(){function Montimark(e,r){var t=this,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,Montimark),_defineProperty(this,"configurations",{rect:{w:null,h:null},position:{x:10,y:10}}),_defineProperty(this,"orginals",[]);var i=document.querySelectorAll(e);n&&this.handleParams(n),this.showOriginals=this.showOriginals.bind(this),this.markImages=this.markImages.bind(this),this.watermark=this.watermark.bind(this),this.loadImage(r).then(function(e){t.markImages(i,e)}),document.monetization&&document.monetization.addEventListener("monetizationstart",function(){t.showOriginals(i)})}var e,r,t;return e=Montimark,(r=[{key:"showOriginals",value:function(e){var r=this;e.forEach(function(e){var t=r.orginals.find(function(r){return r.id===e.getAttribute("markId")});t&&(e.src=t.src)})}},{key:"markImages",value:function(e,r){var t,n=this,i=this,o=_createForOfIteratorHelper(e);try{var a=function(){var e=t.value;if(e instanceof HTMLImageElement){var o=n.randomUid();e.crossOrigin="*";var a={id:o,src:e.src};i.orginals.push(a),n.showGhostImage(e),n.loadImage(a.src).then(function(t){e.src=a.src;var i=n.drawImage(e);i=n.watermark(i,r),e.src=n.dataUrl(i),e.setAttribute("markId",o)})}};for(o.s();!(t=o.n()).done;)a()}catch(u){o.e(u)}finally{o.f()}}},{key:"showGhostImage",value:function(e){var r=e.height,t=e.width;e.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAmCAIAAADMaMX6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAzSURBVFhH7c1BEQAwEAOh+lcZKTXB3GsxwNutPqvP6rP6rD6rz+qz+qw+q8/qs/qs22/7cqJrk6NNXs8AAAAASUVORK5CYII=",e.height=r,e.width=t}},{key:"loadImage",value:function(e){var r=new Image;return r.crossOrigin="*",new Promise(function(t){r.onload=function(){return t(r)},r.src=e})}},{key:"drawImage",value:function(e){var r=document.createElement("canvas"),t=r.getContext("2d");return r.width=e.width,r.height=e.height,t.drawImage(e,0,0,e.width,e.height),r}},{key:"watermark",value:function(e,r){return e.getContext("2d").drawImage(r,this.configurations.position.x,this.configurations.position.y,this.configurations.rect.w||r.width,this.configurations.rect.h||r.height),e}},{key:"dataUrl",value:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{type:"image/png",encoderOptions:.92};return e.toDataURL(r.type,r.encoderOptions)}},{key:"randomUid",value:function(){return Math.random().toString(36).substring(2)+Date.now().toString(36)}},{key:"handleParams",value:function(e){this.configurations.rect=e.rect||this.configurations.rect,this.configurations.position=e.position||this.configurations.position}}])&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),Montimark}();r.default=n}])});
//# sourceMappingURL=index.js.map