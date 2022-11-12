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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardFiller\": function() { return /* binding */ cardFiller; },\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; }\n/* harmony export */ });\n/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ \"./src/scripts/card.js\");\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link (sometimes null- consider what to do in this case)\n\nconst dataFetcher = async function () {\n  const url = \"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue :/\");\n    }\n    return response.json();\n  }).then(data => {\n    data.results.books.forEach(book => {\n      cardFiller(book);\n    });\n  }).catch(error => {\n    console.error(error);\n  });\n};\nconst cardFiller = function (book) {\n  const frontData = [\"book_image\", \"title\", \"author\", \"rank\", \"weeks_on_list\"];\n  const backData = [\"description\", \"buy_links[5].url\", \"book_review_link\"];\n  const card = document.createElement(\"div\");\n  card.setAttribute(\"class\", \"card\");\n  const cardHolder = document.getElementById(\"card-holder\");\n  cardHolder.appendChild(card);\n  let front = document.createElement(\"ol\");\n  front.setAttribute(\"id\", \"front-of-card\");\n  frontData.forEach(category => {\n    let li = document.createElement(\"li\");\n    li.textContent = book[category];\n    front.appendChild(li);\n  });\n  card.appendChild(front);\n  let back = document.createElement(\"ol\");\n  back.setAttribute(\"id\", \"back-of-card\");\n  backData.forEach(category => {\n    // let li = document.createElement(\"li\");\n    if (category === \"buy_links[5].url\") {\n      let li = document.createElement(\"li\");\n      li.textContent = book.buy_links[5].url.toString();\n      back.appendChild(li);\n    } else {\n      let li = document.createElement(\"li\");\n      li.textContent = book[category];\n      back.appendChild(li);\n    }\n  });\n  card.appendChild(back);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3JDTyxFQUFFLENBQUNDLFdBQVcsR0FBR2pCLElBQUksQ0FBQ2UsUUFBUSxDQUFDO01BQy9CRyxJQUFJLENBQUNMLFdBQVcsQ0FBQ0csRUFBRSxDQUFDO0lBQ3RCO0VBQ0YsQ0FBQyxDQUFDO0VBRUZULElBQUksQ0FBQ00sV0FBVyxDQUFDSyxJQUFJLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9zY3JpcHRzL2NhcmRfZmlsbGVyLmpzPzY3MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSBcIi4vY2FyZFwiO1xuXG4vLyBOWVQgcmVxdWVzdCByb290IFVSTDogaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzXG4vLyBOWVQgQm9va3MgQVBJIEtleTogXCJQOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiXG4vLyBUbyBnZXQgYWxsIGxpc3RzOiBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvbmFtZXMuanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXG4vLyB0aGUgYWJvdmUgcmV0dXJucyAyOSB3ZWVrbHkgbGlzdHMgYW5kIDMwIG1vbnRobHkgbGlzdHMgKDU5IHRvdGFsKVxuXG4vLyBiZWxvdyBpcyBhbiBleGFtcGxlIGNhbGwgdXNpbmcgR0VUIC9saXN0cy97ZGF0ZX0ve2xpc3R9Lmpzb25cbi8vIGRhdGVzIGFyZSBlbnRlcmVkIFlZWVktTU0tREQgb3IgXCJjdXJyZW50XCIgKEFTIFNUUklOR1MpIGFuZCBsaXN0IG5hbWVzIGFyZSBwdWxsZWQgZnJvbSB0aGUgbGlzdCBuYW1lIGFib3ZlIChhbHNvIGFzIHN0cmluZ3MpXG4vLyBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvMjAyMi0wOC0xMS9oYXJkY292ZXItZmljdGlvbi5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcblxuLy8gZGF0YSB3ZSBuZWVkOlxuLy8gZnJvbnQgb2YgY2FyZDpcbi8vIGJvb2tfaW1hZ2Vcbi8vIHRpdGxlIChuZWVkIGEgdGl0bGVpemUgZnVuY3Rpb24gbG9sKVxuLy8gYXV0aG9yXG4vLyByYW5rXG4vLyB3ZWVrc19vbl9saXN0XG4vLyBiYWNrIG9mIGNhcmQ6XG4vLyBkZXNjcmlwdGlvblxuLy8gYnV5X2xpbmtzWzVdLnVybCAoYnV5X2xpbmtzIGlzIGFuIGFycmF5IG9mIDYgdmVuZG9ycywgY2hvb3NlIHRoZSA1dGggZWxlIGZvciBpbmRpZWJvdW5kIGFuZCBzZWxlY3QgdXJsIGZyb20gc3ViYXJyIClcbi8vIGJvb2tfcmV2aWV3X2xpbmsgKHNvbWV0aW1lcyBudWxsLSBjb25zaWRlciB3aGF0IHRvIGRvIGluIHRoaXMgY2FzZSlcblxuZXhwb3J0IGNvbnN0IGRhdGFGZXRjaGVyID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL2N1cnJlbnQvaGFyZGNvdmVyLWZpY3Rpb24uanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXCI7XG4gIGZldGNoKHVybClcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTmV0d29ya2luZyBpc3N1ZSA6L1wiKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSlcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgZGF0YS5yZXN1bHRzLmJvb2tzLmZvckVhY2goKGJvb2spID0+IHtcbiAgICAgICAgY2FyZEZpbGxlcihib29rKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2FyZEZpbGxlciA9IGZ1bmN0aW9uIChib29rKSB7XG4gIGNvbnN0IGZyb250RGF0YSA9IFtcImJvb2tfaW1hZ2VcIiwgXCJ0aXRsZVwiLCBcImF1dGhvclwiLCBcInJhbmtcIiwgXCJ3ZWVrc19vbl9saXN0XCJdO1xuICBjb25zdCBiYWNrRGF0YSA9IFtcImRlc2NyaXB0aW9uXCIsIFwiYnV5X2xpbmtzWzVdLnVybFwiLCBcImJvb2tfcmV2aWV3X2xpbmtcIl07XG5cbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkXCIpO1xuXG4gIGNvbnN0IGNhcmRIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaG9sZGVyXCIpO1xuXG4gIGNhcmRIb2xkZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgbGV0IGZyb250ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9sXCIpO1xuICBmcm9udC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZyb250LW9mLWNhcmRcIik7XG5cbiAgZnJvbnREYXRhLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGxpLnRleHRDb250ZW50ID0gYm9va1tjYXRlZ29yeV07XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGZyb250KTtcblxuICBsZXQgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvbFwiKTtcbiAgYmFjay5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJhY2stb2YtY2FyZFwiKTtcblxuICBiYWNrRGF0YS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIC8vIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBpZiAoY2F0ZWdvcnkgPT09IFwiYnV5X2xpbmtzWzVdLnVybFwiKSB7XG4gICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICBsaS50ZXh0Q29udGVudCA9IGJvb2suYnV5X2xpbmtzWzVdLnVybC50b1N0cmluZygpO1xuICAgICAgYmFjay5hcHBlbmRDaGlsZChsaSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgIGxpLnRleHRDb250ZW50ID0gYm9va1tjYXRlZ29yeV07XG4gICAgICBiYWNrLmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoYmFjayk7XG59O1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJkYXRhRmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwicmVzdWx0cyIsImJvb2tzIiwiZm9yRWFjaCIsImJvb2siLCJjYXJkRmlsbGVyIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJmcm9udERhdGEiLCJiYWNrRGF0YSIsImNhcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjYXJkSG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImZyb250IiwiY2F0ZWdvcnkiLCJsaSIsInRleHRDb250ZW50IiwiYmFjayIsImJ1eV9saW5rcyIsInRvU3RyaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/card_filler.js\n");

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