/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n\nconst cardEle = document.getElementById(\"card\");\nnew _scripts_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cardEle);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBa0M7QUFFbEMsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxNQUFNLENBQUM7QUFDL0MsSUFBSUgscURBQUksQ0FBQ0MsT0FBTyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vc2NyaXB0cy9jYXJkXCI7XG5cbmNvbnN0IGNhcmRFbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmRcIik7XG5uZXcgQ2FyZChjYXJkRWxlKTtcblxuIl0sIm5hbWVzIjpbIkNhcmQiLCJjYXJkRWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// all JS code goes in an indiviual file in this script folder\n\nclass Card {\n  constructor(ele) {\n    this.ele = ele;\n    const front = document.createElement(\"div\");\n    front.setAttribute(\"id\", \"front-of-card\");\n    const back = document.createElement(\"div\");\n    back.setAttribute(\"id\", \"back-of-card\");\n    ele.appendChild(front);\n    ele.appendChild(back);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLENBQUM7RUFDVEMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUVkLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDRixLQUFLLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDO0lBRXpDLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDRSxJQUFJLENBQUNELFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDO0lBRXZDSixHQUFHLENBQUNNLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDO0lBQ3RCRCxHQUFHLENBQUNNLFdBQVcsQ0FBQ0QsSUFBSSxDQUFDO0VBR3ZCO0FBQ0Y7QUFFQSwrREFBZVAsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9zY3JpcHRzL2NhcmQuanM/NjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbGwgSlMgY29kZSBnb2VzIGluIGFuIGluZGl2aXVhbCBmaWxlIGluIHRoaXMgc2NyaXB0IGZvbGRlclxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG5cbiAgICBjb25zdCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmcm9udC1vZi1jYXJkXCIpO1xuXG4gICAgY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stb2YtY2FyZFwiKTtcblxuICAgIGVsZS5hcHBlbmRDaGlsZChmcm9udCk7XG4gICAgZWxlLmFwcGVuZENoaWxkKGJhY2spO1xuXG5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImVsZSIsImZyb250IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiYmFjayIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;