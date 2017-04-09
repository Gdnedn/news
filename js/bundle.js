/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar news = new Vue({\n    el: \"#news\",\n    data: {\n        title: '把中美关系的大厦建设得更牢、更高、更美——记习近平主席赴美国佛罗里达州海湖庄园同特朗普总统举行中美元首会晤',\n        time: '2017-03-17 19:50:04.0',\n        photo: '../images/demo-news-photo.jpg',\n        content: '当地时间2017年4月7日，习近平在美国佛罗里达州海湖庄园同美国总统特朗普举行中美元首第二场正式会晤。两国元首就中美双边重要领域务实合作和共同关心的国际及地区问题广泛深入交换意见。新华社记者 兰红光 摄'\n    }\n});//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbmV3cy5qcz83NmE0Il0sIm5hbWVzIjpbIm5ld3MiLCJWdWUiLCJlbCIsImRhdGEiLCJ0aXRsZSIsInRpbWUiLCJwaG90byIsImNvbnRlbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsT0FBTyxJQUFJQyxHQUFKLENBQVE7QUFDZkMsUUFBRyxPQURZO0FBRWZDLFVBQUs7QUFDREMsZUFBTSx1REFETDtBQUVEQyxjQUFLLHVCQUZKO0FBR0RDLGVBQU0sK0JBSEw7QUFJREMsaUJBQVE7QUFKUDtBQUZVLENBQVIsQ0FBWCIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG5ld3MgPSBuZXcgVnVlKHtcclxuICAgIGVsOlwiI25ld3NcIixcclxuICAgIGRhdGE6e1xyXG4gICAgICAgIHRpdGxlOifmiorkuK3nvo7lhbPns7vnmoTlpKfljqblu7rorr7lvpfmm7TniaLjgIHmm7Tpq5jjgIHmm7Tnvo7igJTigJTorrDkuaDov5HlubPkuLvluK3otbTnvo7lm73kvZvnvZfph4zovr7lt57mtbfmuZbluoTlm63lkIznibnmnJfmma7mgLvnu5/kuL7ooYzkuK3nvo7lhYPpppbkvJrmmaQnLFxyXG4gICAgICAgIHRpbWU6JzIwMTctMDMtMTcgMTk6NTA6MDQuMCcsXHJcbiAgICAgICAgcGhvdG86Jy4uL2ltYWdlcy9kZW1vLW5ld3MtcGhvdG8uanBnJyxcclxuICAgICAgICBjb250ZW50OiflvZPlnLDml7bpl7QyMDE35bm0NOaciDfml6XvvIzkuaDov5HlubPlnKjnvo7lm73kvZvnvZfph4zovr7lt57mtbfmuZbluoTlm63lkIznvo7lm73mgLvnu5/nibnmnJfmma7kuL7ooYzkuK3nvo7lhYPpppbnrKzkuozlnLrmraPlvI/kvJrmmaTjgILkuKTlm73lhYPpppblsLHkuK3nvo7lj4zovrnph43opoHpoobln5/liqHlrp7lkIjkvZzlkozlhbHlkIzlhbPlv4PnmoTlm73pmYXlj4rlnLDljLrpl67popjlub/ms5vmt7HlhaXkuqTmjaLmhI/op4HjgILmlrDljY7npL7orrDogIUg5YWw57qi5YWJIOaRhCdcclxuICAgIH1cclxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL25ld3MuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _news = __webpack_require__(0);\n\nvar _news2 = _interopRequireDefault(_news);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFpbi5qcz82YTRiIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEiLCJmaWxlIjoiMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBuZXdzIGZyb20gJy4vbmV3cydcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvbWFpbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);