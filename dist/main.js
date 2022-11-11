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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n/* harmony import */ var _scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card_filler */ \"./src/scripts/card_filler.js\");\n\n\nconst cardEle = document.getElementById(\"card\");\nnew _scripts_card__WEBPACK_IMPORTED_MODULE_0__[\"default\"](cardEle);\nconsole.log(_scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__.dataFetcher(_scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__.myHandler));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ3FCO0FBRXZELE1BQU1FLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsTUFBTSxDQUFDO0FBQy9DLElBQUlKLHFEQUFJLENBQUNFLE9BQU8sQ0FBQztBQUVqQkcsT0FBTyxDQUFDQyxHQUFHLENBQUNMLDZEQUF5QixDQUFDQSwyREFBdUIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vc2NyaXB0cy9jYXJkXCI7XG5pbXBvcnQgKiBhcyBhbGxDYXJkRmlsbGVyIGZyb20gXCIuL3NjcmlwdHMvY2FyZF9maWxsZXJcIjtcblxuY29uc3QgY2FyZEVsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZFwiKTtcbm5ldyBDYXJkKGNhcmRFbGUpO1xuXG5jb25zb2xlLmxvZyhhbGxDYXJkRmlsbGVyLmRhdGFGZXRjaGVyKGFsbENhcmRGaWxsZXIubXlIYW5kbGVyKSk7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImFsbENhcmRGaWxsZXIiLCJjYXJkRWxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhRmV0Y2hlciIsIm15SGFuZGxlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardFiller\": function() { return /* binding */ cardFiller; },\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; },\n/* harmony export */   \"myHandler\": function() { return /* binding */ myHandler; }\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/scripts/card.js\");\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link (sometimes null- consider what to do in this case)\n\nconst dataFetcher = function (handler) {\n  //   let collectedData = [];\n  const url = \"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  //   fetch(url)\n  //     .then((response) => response.json())\n  //     .then((data) => {\n  //       data.results.books.map((book) => {\n  //         return book[category];\n  //         // const bookData = Promise.resolve(book[category]);\n  //         // Promise.resolve(bookData);\n  //         // collectedData.push(bookData);\n  //       });\n  //     });\n\n  // //   debugger;\n  // //   return collectedData;\n\n  fetch(url).then(res => {\n    return res.json();\n  }).then(data => {\n    var a = [];\n    a.push(data);\n    handler(a);\n  });\n};\nconst myHandler = function (result) {\n  return result;\n};\nconst cardFiller = function () {};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkX2ZpbGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTBCOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTyxNQUFNQyxXQUFXLEdBQUcsVUFBVUMsT0FBTyxFQUFFO0VBQzVDO0VBQ0EsTUFBTUMsR0FBRyxHQUNQLG9IQUFvSDtFQUN0SDtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTs7RUFFQTtFQUNBOztFQUVBQyxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUNQRSxJQUFJLENBQUVDLEdBQUcsSUFBSztJQUNiLE9BQU9BLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0VBQ25CLENBQUMsQ0FBQyxDQUNERixJQUFJLENBQUVHLElBQUksSUFBSztJQUNkLElBQUlDLENBQUMsR0FBRyxFQUFFO0lBQ1ZBLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRixJQUFJLENBQUM7SUFDWk4sT0FBTyxDQUFDTyxDQUFDLENBQUM7RUFDWixDQUFDLENBQUM7QUFDTixDQUFDO0FBRU0sTUFBTUUsU0FBUyxHQUFHLFVBQVVDLE1BQU0sRUFBRTtFQUN6QyxPQUFPQSxNQUFNO0FBQ2YsQ0FBQztBQUVNLE1BQU1DLFVBQVUsR0FBRyxZQUFZLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9zY3JpcHRzL2NhcmRfZmlsbGVyLmpzPzY3MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG4vLyBOWVQgcmVxdWVzdCByb290IFVSTDogaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzXG4vLyBOWVQgQm9va3MgQVBJIEtleTogXCJQOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiXG4vLyBUbyBnZXQgYWxsIGxpc3RzOiBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvbmFtZXMuanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXG4vLyB0aGUgYWJvdmUgcmV0dXJucyAyOSB3ZWVrbHkgbGlzdHMgYW5kIDMwIG1vbnRobHkgbGlzdHMgKDU5IHRvdGFsKVxuXG4vLyBiZWxvdyBpcyBhbiBleGFtcGxlIGNhbGwgdXNpbmcgR0VUIC9saXN0cy97ZGF0ZX0ve2xpc3R9Lmpzb25cbi8vIGRhdGVzIGFyZSBlbnRlcmVkIFlZWVktTU0tREQgb3IgXCJjdXJyZW50XCIgKEFTIFNUUklOR1MpIGFuZCBsaXN0IG5hbWVzIGFyZSBwdWxsZWQgZnJvbSB0aGUgbGlzdCBuYW1lIGFib3ZlIChhbHNvIGFzIHN0cmluZ3MpXG4vLyBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvMjAyMi0wOC0xMS9oYXJkY292ZXItZmljdGlvbi5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcblxuLy8gZGF0YSB3ZSBuZWVkOlxuLy8gZnJvbnQgb2YgY2FyZDpcbi8vIGJvb2tfaW1hZ2Vcbi8vIHRpdGxlIChuZWVkIGEgdGl0bGVpemUgZnVuY3Rpb24gbG9sKVxuLy8gYXV0aG9yXG4vLyByYW5rXG4vLyB3ZWVrc19vbl9saXN0XG4vLyBiYWNrIG9mIGNhcmQ6XG4vLyBkZXNjcmlwdGlvblxuLy8gYnV5X2xpbmtzWzVdLnVybCAoYnV5X2xpbmtzIGlzIGFuIGFycmF5IG9mIDYgdmVuZG9ycywgY2hvb3NlIHRoZSA1dGggZWxlIGZvciBpbmRpZWJvdW5kIGFuZCBzZWxlY3QgdXJsIGZyb20gc3ViYXJyIClcbi8vIGJvb2tfcmV2aWV3X2xpbmsgKHNvbWV0aW1lcyBudWxsLSBjb25zaWRlciB3aGF0IHRvIGRvIGluIHRoaXMgY2FzZSlcblxuZXhwb3J0IGNvbnN0IGRhdGFGZXRjaGVyID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgLy8gICBsZXQgY29sbGVjdGVkRGF0YSA9IFtdO1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL2N1cnJlbnQvaGFyZGNvdmVyLWZpY3Rpb24uanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXCI7XG4gIC8vICAgZmV0Y2godXJsKVxuICAvLyAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC8vICAgICAudGhlbigoZGF0YSkgPT4ge1xuICAvLyAgICAgICBkYXRhLnJlc3VsdHMuYm9va3MubWFwKChib29rKSA9PiB7XG4gIC8vICAgICAgICAgcmV0dXJuIGJvb2tbY2F0ZWdvcnldO1xuICAvLyAgICAgICAgIC8vIGNvbnN0IGJvb2tEYXRhID0gUHJvbWlzZS5yZXNvbHZlKGJvb2tbY2F0ZWdvcnldKTtcbiAgLy8gICAgICAgICAvLyBQcm9taXNlLnJlc29sdmUoYm9va0RhdGEpO1xuICAvLyAgICAgICAgIC8vIGNvbGxlY3RlZERhdGEucHVzaChib29rRGF0YSk7XG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgfSk7XG5cbiAgLy8gLy8gICBkZWJ1Z2dlcjtcbiAgLy8gLy8gICByZXR1cm4gY29sbGVjdGVkRGF0YTtcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdmFyIGEgPSBbXTtcbiAgICAgIGEucHVzaChkYXRhKTtcbiAgICAgIGhhbmRsZXIoYSk7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgbXlIYW5kbGVyID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRGaWxsZXIgPSBmdW5jdGlvbiAoKSB7fTtcbiJdLCJuYW1lcyI6WyJDYXJkIiwiZGF0YUZldGNoZXIiLCJoYW5kbGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJhIiwicHVzaCIsIm15SGFuZGxlciIsInJlc3VsdCIsImNhcmRGaWxsZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/card_filler.js\n");

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