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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/card */ \"./src/scripts/card.js\");\n/* harmony import */ var _scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card_filler */ \"./src/scripts/card_filler.js\");\n\n\n\n// new Card();\n\n_scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__.dataFetcher();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQWtDO0FBQ3FCOztBQUV2RDs7QUFFQUMsNkRBQXlCLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tIFwiLi9zY3JpcHRzL2NhcmRcIjtcbmltcG9ydCAqIGFzIGFsbENhcmRGaWxsZXIgZnJvbSBcIi4vc2NyaXB0cy9jYXJkX2ZpbGxlclwiO1xuXG4vLyBuZXcgQ2FyZCgpO1xuXG5hbGxDYXJkRmlsbGVyLmRhdGFGZXRjaGVyKCk7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImFsbENhcmRGaWxsZXIiLCJkYXRhRmV0Y2hlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card.js":
/*!*****************************!*\
  !*** ./src/scripts/card.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// all JS code goes in an indiviual file in this script folder\n\nclass Card {\n  constructor() {\n    const card = document.createElement(\"div\");\n    card.setAttribute(\"class\", \"card\");\n\n    // const front = document.createElement(\"ol\");\n    // front.setAttribute(\"id\", \"front-of-card\");\n\n    // const back = document.createElement(\"ol\");\n    // back.setAttribute(\"id\", \"back-of-card\");\n\n    const cardHolder = document.getElementById(\"card-holder\");\n    cardHolder.appendChild(card);\n\n    // card.appendChild(front);\n    // card.appendChild(back);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkLmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQSxNQUFNQSxJQUFJLENBQUM7RUFDVEMsV0FBVyxHQUFHO0lBQ1osTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDMUNGLElBQUksQ0FBQ0csWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7O0lBRWxDO0lBQ0E7O0lBRUE7SUFDQTs7SUFFQSxNQUFNQyxVQUFVLEdBQUdILFFBQVEsQ0FBQ0ksY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUV6REQsVUFBVSxDQUFDRSxXQUFXLENBQUNOLElBQUksQ0FBQzs7SUFFNUI7SUFDQTtFQUNGO0FBQ0Y7O0FBRUEsK0RBQWVGLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvc2NyaXB0cy9jYXJkLmpzPzY4ZjAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gYWxsIEpTIGNvZGUgZ29lcyBpbiBhbiBpbmRpdml1YWwgZmlsZSBpbiB0aGlzIHNjcmlwdCBmb2xkZXJcblxuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkXCIpO1xuXG4gICAgLy8gY29uc3QgZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4gICAgLy8gZnJvbnQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJmcm9udC1vZi1jYXJkXCIpO1xuXG4gICAgLy8gY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgICAvLyBiYWNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFjay1vZi1jYXJkXCIpO1xuXG4gICAgY29uc3QgY2FyZEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ob2xkZXJcIik7XG5cbiAgICBjYXJkSG9sZGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgLy8gY2FyZC5hcHBlbmRDaGlsZChmcm9udCk7XG4gICAgLy8gY2FyZC5hcHBlbmRDaGlsZChiYWNrKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYXJkO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJjb25zdHJ1Y3RvciIsImNhcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjYXJkSG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/card.js\n");

/***/ }),

/***/ "./src/scripts/card_filler.js":
/*!************************************!*\
  !*** ./src/scripts/card_filler.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardFiller\": function() { return /* binding */ cardFiller; },\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; }\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/scripts/card.js\");\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link (sometimes null- consider what to do in this case)\n\nconst dataFetcher = async function () {\n  const url = \"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue :/\");\n    }\n    return response.json();\n  }).then(data => {\n    data.results.books.forEach(book => {\n      cardFiller(book);\n    });\n  }).catch(error => {\n    console.error(error);\n  });\n};\nconst cardFiller = function (book) {\n  const frontData = [\"book_image\", \"title\", \"author\", \"rank\", \"weeks_on_list\"];\n  const backData = [\"description\", \"buy_links[5].url\", \"book_review_link\"];\n  let newCard = new _card__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n  //   let front = document.createElement(\"ol\");\n  //   front.setAttribute(\"id\", \"front-of-card\");\n\n  //   frontData.forEach((category) => {\n  //     let li = document.createElement(\"li\");\n  //     li.textContent = book[category];\n  //     // debugger;\n  //     front.appendChild(li);\n  //   });\n\n  //   newCard.appendChild(front);\n\n  //   const back = document.createElement(\"ol\");\n  //   back.setAttribute(\"id\", \"back-of-card\");\n\n  //   card.appendChild(back);\n\n  //   debugger;\n\n  //   for (let i = 0; i < frontData.length; i++) {\n  //     let li = document.createElement(\"li\");\n  //     li.textContent = book[frontData[i]];\n  //     debugger;\n  //     // const front = document.getElementById(\"front-of-card\");\n  //     newCard.appendChild(li);\n  //   }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkX2ZpbGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLFdBQVcsR0FBRyxrQkFBa0I7RUFDM0MsTUFBTUMsR0FBRyxHQUNQLG9IQUFvSDtFQUN0SEMsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FDUEUsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztJQUN4QztJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0VBQ3hCLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUVLLElBQUksSUFBSztJQUNkQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxPQUFPLENBQUVDLElBQUksSUFBSztNQUNuQ0MsVUFBVSxDQUFDRCxJQUFJLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLENBQ0RFLEtBQUssQ0FBRUMsS0FBSyxJQUFLO0lBQ2hCQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFFTSxNQUFNRixVQUFVLEdBQUcsVUFBVUQsSUFBSSxFQUFFO0VBQ3hDLE1BQU1LLFNBQVMsR0FBRyxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxlQUFlLENBQUM7RUFDNUUsTUFBTUMsUUFBUSxHQUFHLENBQUMsYUFBYSxFQUFFLGtCQUFrQixFQUFFLGtCQUFrQixDQUFDO0VBRXhFLElBQUlDLE9BQU8sR0FBRyxJQUFJcEIsNkNBQUksRUFBRTs7RUFFMUI7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUU7RUFDQTs7RUFFQTs7RUFFQTs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvc2NyaXB0cy9jYXJkX2ZpbGxlci5qcz82NzBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXJkIGZyb20gXCIuL2NhcmRcIjtcblxuLy8gTllUIHJlcXVlc3Qgcm9vdCBVUkw6IGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92M1xuLy8gTllUIEJvb2tzIEFQSSBLZXk6IFwiUDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcIlxuLy8gVG8gZ2V0IGFsbCBsaXN0czogaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL25hbWVzLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlxuLy8gdGhlIGFib3ZlIHJldHVybnMgMjkgd2Vla2x5IGxpc3RzIGFuZCAzMCBtb250aGx5IGxpc3RzICg1OSB0b3RhbClcblxuLy8gYmVsb3cgaXMgYW4gZXhhbXBsZSBjYWxsIHVzaW5nIEdFVCAvbGlzdHMve2RhdGV9L3tsaXN0fS5qc29uXG4vLyBkYXRlcyBhcmUgZW50ZXJlZCBZWVlZLU1NLUREIG9yIFwiY3VycmVudFwiIChBUyBTVFJJTkdTKSBhbmQgbGlzdCBuYW1lcyBhcmUgcHVsbGVkIGZyb20gdGhlIGxpc3QgbmFtZSBhYm92ZSAoYWxzbyBhcyBzdHJpbmdzKVxuLy8gaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzLzIwMjItMDgtMTEvaGFyZGNvdmVyLWZpY3Rpb24uanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXG5cbi8vIGRhdGEgd2UgbmVlZDpcbi8vIGZyb250IG9mIGNhcmQ6XG4vLyBib29rX2ltYWdlXG4vLyB0aXRsZSAobmVlZCBhIHRpdGxlaXplIGZ1bmN0aW9uIGxvbClcbi8vIGF1dGhvclxuLy8gcmFua1xuLy8gd2Vla3Nfb25fbGlzdFxuLy8gYmFjayBvZiBjYXJkOlxuLy8gZGVzY3JpcHRpb25cbi8vIGJ1eV9saW5rc1s1XS51cmwgKGJ1eV9saW5rcyBpcyBhbiBhcnJheSBvZiA2IHZlbmRvcnMsIGNob29zZSB0aGUgNXRoIGVsZSBmb3IgaW5kaWVib3VuZCBhbmQgc2VsZWN0IHVybCBmcm9tIHN1YmFyciApXG4vLyBib29rX3Jldmlld19saW5rIChzb21ldGltZXMgbnVsbC0gY29uc2lkZXIgd2hhdCB0byBkbyBpbiB0aGlzIGNhc2UpXG5cbmV4cG9ydCBjb25zdCBkYXRhRmV0Y2hlciA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgdXJsID1cbiAgICBcImh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy9jdXJyZW50L2hhcmRjb3Zlci1maWN0aW9uLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiO1xuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmtpbmcgaXNzdWUgOi9cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGRhdGEucmVzdWx0cy5ib29rcy5mb3JFYWNoKChib29rKSA9PiB7XG4gICAgICAgIGNhcmRGaWxsZXIoYm9vayk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhcmRGaWxsZXIgPSBmdW5jdGlvbiAoYm9vaykge1xuICBjb25zdCBmcm9udERhdGEgPSBbXCJib29rX2ltYWdlXCIsIFwidGl0bGVcIiwgXCJhdXRob3JcIiwgXCJyYW5rXCIsIFwid2Vla3Nfb25fbGlzdFwiXTtcbiAgY29uc3QgYmFja0RhdGEgPSBbXCJkZXNjcmlwdGlvblwiLCBcImJ1eV9saW5rc1s1XS51cmxcIiwgXCJib29rX3Jldmlld19saW5rXCJdO1xuXG4gIGxldCBuZXdDYXJkID0gbmV3IENhcmQoKTtcblxuLy8gICBsZXQgZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2xcIik7XG4vLyAgIGZyb250LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZnJvbnQtb2YtY2FyZFwiKTtcblxuLy8gICBmcm9udERhdGEuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbi8vICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4vLyAgICAgbGkudGV4dENvbnRlbnQgPSBib29rW2NhdGVnb3J5XTtcbi8vICAgICAvLyBkZWJ1Z2dlcjtcbi8vICAgICBmcm9udC5hcHBlbmRDaGlsZChsaSk7XG4vLyAgIH0pO1xuXG4vLyAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQoZnJvbnQpO1xuXG4gIC8vICAgY29uc3QgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgLy8gICBiYWNrLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYmFjay1vZi1jYXJkXCIpO1xuXG4gIC8vICAgY2FyZC5hcHBlbmRDaGlsZChiYWNrKTtcblxuICAvLyAgIGRlYnVnZ2VyO1xuXG4gIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmcm9udERhdGEubGVuZ3RoOyBpKyspIHtcbiAgLy8gICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgLy8gICAgIGxpLnRleHRDb250ZW50ID0gYm9va1tmcm9udERhdGFbaV1dO1xuICAvLyAgICAgZGVidWdnZXI7XG4gIC8vICAgICAvLyBjb25zdCBmcm9udCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZnJvbnQtb2YtY2FyZFwiKTtcbiAgLy8gICAgIG5ld0NhcmQuYXBwZW5kQ2hpbGQobGkpO1xuICAvLyAgIH1cbn07XG4iXSwibmFtZXMiOlsiQ2FyZCIsImRhdGFGZXRjaGVyIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJvayIsIkVycm9yIiwianNvbiIsImRhdGEiLCJyZXN1bHRzIiwiYm9va3MiLCJmb3JFYWNoIiwiYm9vayIsImNhcmRGaWxsZXIiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSIsImZyb250RGF0YSIsImJhY2tEYXRhIiwibmV3Q2FyZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/card_filler.js\n");

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