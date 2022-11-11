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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n/* harmony import */ var _scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card_filler */ \"./src/scripts/card_filler.js\");\n\n\nconst cardEle = document.getElementById(\"card\");\nnew _scripts_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cardEle);\n_scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__.dataFetcher();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ3FCO0FBRXZELE1BQU1FLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQy9DLElBQUlKLHFEQUFJLENBQUNFLE9BQU8sQ0FBQztBQUVqQkQsNkRBQXlCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9zY3JpcHRzL2NhcmRcIjtcbmltcG9ydCAqIGFzIGFsbENhcmRGaWxsZXIgZnJvbSBcIi4vc2NyaXB0cy9jYXJkX2ZpbGxlclwiO1xuXG5jb25zdCBjYXJkRWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkXCIpO1xubmV3IENhcmQoY2FyZEVsZSk7XG5cbmFsbENhcmRGaWxsZXIuZGF0YUZldGNoZXIoKTtcbiJdLCJuYW1lcyI6WyJDYXJkIiwiYWxsQ2FyZEZpbGxlciIsImNhcmRFbGUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZGF0YUZldGNoZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// all JS code goes in an indiviual file in this script folder\n\nclass Card {\n  constructor(ele) {\n    this.ele = ele;\n    const front = document.createElement(\"div\");\n    front.setAttribute(\"id\", \"front-of-card\");\n    const back = document.createElement(\"div\");\n    back.setAttribute(\"id\", \"back-of-card\");\n    ele.appendChild(front);\n    ele.appendChild(back);\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLENBQUM7RUFDVEMsV0FBVyxDQUFDQyxHQUFHLEVBQUU7SUFDZixJQUFJLENBQUNBLEdBQUcsR0FBR0EsR0FBRztJQUVkLE1BQU1DLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzNDRixLQUFLLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUUsZUFBZSxDQUFDO0lBRXpDLE1BQU1DLElBQUksR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO0lBQzFDRSxJQUFJLENBQUNELFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDO0lBRXZDSixHQUFHLENBQUNNLFdBQVcsQ0FBQ0wsS0FBSyxDQUFDO0lBQ3RCRCxHQUFHLENBQUNNLFdBQVcsQ0FBQ0QsSUFBSSxDQUFDO0VBQ3ZCO0FBQ0Y7QUFFQSwrREFBZVAsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9zY3JpcHRzL2NhcmQuanM/NjhmMCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhbGwgSlMgY29kZSBnb2VzIGluIGFuIGluZGl2aXVhbCBmaWxlIGluIHRoaXMgc2NyaXB0IGZvbGRlclxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IoZWxlKSB7XG4gICAgdGhpcy5lbGUgPSBlbGU7XG5cbiAgICBjb25zdCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZnJvbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmcm9udC1vZi1jYXJkXCIpO1xuXG4gICAgY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYmFjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stb2YtY2FyZFwiKTtcblxuICAgIGVsZS5hcHBlbmRDaGlsZChmcm9udCk7XG4gICAgZWxlLmFwcGVuZENoaWxkKGJhY2spO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwiZWxlIiwiZnJvbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJiYWNrIiwiYXBwZW5kQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

/***/ }),

/***/ "./src/scripts/card_filler.js":
/*!************************************!*\
  !*** ./src/scripts/card_filler.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardFiller\": function() { return /* binding */ cardFiller; },\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; }\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/scripts/card.js\");\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link (sometimes null- consider what to do in this case)\n\nconst cardFiller = function () {};\nconst dataFetcher = function () {\n  const url = \"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => response.json()).then(data => {\n    //   console.log(data.results);\n\n    data.results.books.map(book => {\n      console.log(book.title);\n    });\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkX2ZpbGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQztBQUVqQyxNQUFNQyxXQUFXLEdBQUcsWUFBWTtFQUNyQyxNQUFNQyxHQUFHLEdBQ1Asb0hBQW9IO0VBQ3RIQyxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUNQRSxJQUFJLENBQUVDLFFBQVEsSUFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUNuQ0YsSUFBSSxDQUFFRyxJQUFJLElBQUs7SUFDZDs7SUFFQUEsSUFBSSxDQUFDQyxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsR0FBRyxDQUFFQyxJQUFJLElBQUs7TUFDL0JDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixJQUFJLENBQUNHLEtBQUssQ0FBQztJQUN6QixDQUFDLENBQUM7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL3NjcmlwdHMvY2FyZF9maWxsZXIuanM/NjcwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9jYXJkXCI7XG5cbi8vIE5ZVCByZXF1ZXN0IHJvb3QgVVJMOiBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjNcbi8vIE5ZVCBCb29rcyBBUEkgS2V5OiBcIlA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXCJcbi8vIFRvIGdldCBhbGwgbGlzdHM6IGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy9uYW1lcy5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcbi8vIHRoZSBhYm92ZSByZXR1cm5zIDI5IHdlZWtseSBsaXN0cyBhbmQgMzAgbW9udGhseSBsaXN0cyAoNTkgdG90YWwpXG5cbi8vIGJlbG93IGlzIGFuIGV4YW1wbGUgY2FsbCB1c2luZyBHRVQgL2xpc3RzL3tkYXRlfS97bGlzdH0uanNvblxuLy8gZGF0ZXMgYXJlIGVudGVyZWQgWVlZWS1NTS1ERCBvciBcImN1cnJlbnRcIiAoQVMgU1RSSU5HUykgYW5kIGxpc3QgbmFtZXMgYXJlIHB1bGxlZCBmcm9tIHRoZSBsaXN0IG5hbWUgYWJvdmUgKGFsc28gYXMgc3RyaW5ncylcbi8vIGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy8yMDIyLTA4LTExL2hhcmRjb3Zlci1maWN0aW9uLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlxuXG4vLyBkYXRhIHdlIG5lZWQ6XG4vLyBmcm9udCBvZiBjYXJkOlxuLy8gYm9va19pbWFnZVxuLy8gdGl0bGUgKG5lZWQgYSB0aXRsZWl6ZSBmdW5jdGlvbiBsb2wpXG4vLyBhdXRob3Jcbi8vIHJhbmtcbi8vIHdlZWtzX29uX2xpc3Rcbi8vIGJhY2sgb2YgY2FyZDpcbi8vIGRlc2NyaXB0aW9uXG4vLyBidXlfbGlua3NbNV0udXJsIChidXlfbGlua3MgaXMgYW4gYXJyYXkgb2YgNiB2ZW5kb3JzLCBjaG9vc2UgdGhlIDV0aCBlbGUgZm9yIGluZGllYm91bmQgYW5kIHNlbGVjdCB1cmwgZnJvbSBzdWJhcnIgKVxuLy8gYm9va19yZXZpZXdfbGluayAoc29tZXRpbWVzIG51bGwtIGNvbnNpZGVyIHdoYXQgdG8gZG8gaW4gdGhpcyBjYXNlKVxuXG5leHBvcnQgY29uc3QgY2FyZEZpbGxlciA9IGZ1bmN0aW9uICgpIHt9O1xuXG5leHBvcnQgY29uc3QgZGF0YUZldGNoZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVybCA9XG4gICAgXCJodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvY3VycmVudC9oYXJkY292ZXItZmljdGlvbi5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcIjtcbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKGRhdGEucmVzdWx0cyk7XG5cbiAgICAgIGRhdGEucmVzdWx0cy5ib29rcy5tYXAoKGJvb2spID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coYm9vay50aXRsZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbn07XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNhcmRGaWxsZXIiLCJkYXRhRmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwiYm9va3MiLCJtYXAiLCJib29rIiwiY29uc29sZSIsImxvZyIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/card_filler.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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