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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data_fetcher */ \"./src/scripts/data_fetcher.js\");\n\n// import * as allCardFiller from \"./scripts/card_filler\";\n\n_scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__.dataFetcher();\nconst cardHolder = document.getElementById(\"card-holder\");\ncardHolder.addEventListener('click', e => {\n  if (e.target.classList.contains('card')) {\n    target.toggle(\"flipCard\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBeUQ7QUFDekQ7O0FBRUFBLDhEQUEwQixFQUFFO0FBRTVCLE1BQU1FLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsYUFBYSxDQUFDO0FBRXpERixVQUFVLENBQUNHLGdCQUFnQixDQUFDLE9BQU8sRUFBRUMsQ0FBQyxJQUFJO0VBQ3RDLElBQUlBLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxTQUFTLENBQUNDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRTtJQUNyQ0YsTUFBTSxDQUFDRyxNQUFNLENBQUMsVUFBVSxDQUFDO0VBQzdCO0FBQ0osQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWxsRGF0YUZldGNoZXIgZnJvbSBcIi4vc2NyaXB0cy9kYXRhX2ZldGNoZXJcIjtcbi8vIGltcG9ydCAqIGFzIGFsbENhcmRGaWxsZXIgZnJvbSBcIi4vc2NyaXB0cy9jYXJkX2ZpbGxlclwiO1xuXG5hbGxEYXRhRmV0Y2hlci5kYXRhRmV0Y2hlcigpO1xuXG5jb25zdCBjYXJkSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlclwiKVxuXG5jYXJkSG9sZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2FyZCcpKSB7XG4gICAgICAgIHRhcmdldC50b2dnbGUoXCJmbGlwQ2FyZFwiKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6WyJhbGxEYXRhRmV0Y2hlciIsImRhdGFGZXRjaGVyIiwiY2FyZEhvbGRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwidG9nZ2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card_filler.js":
/*!************************************!*\
  !*** ./src/scripts/card_filler.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardFiller\": function() { return /* binding */ cardFiller; }\n/* harmony export */ });\n// import * as allDataFetcher from \"./data_fetcher\";\n\nfunction titleize(str) {\n  const littleWords = [\"a\", \"an\", \"and\", \"at\", \"but\", \"by\", \"for\", \"from\", \"in\", \"into\", \"of\", \"off\", \"over\", \"the\", \"to\"];\n  let titleized = [];\n  let rawWords = str.split(\" \");\n  let words = [];\n  rawWords.map(word => {\n    words.push(word.toLowerCase());\n  });\n  for (let i = 0; i < words.length; i++) {\n    let cappsedWord = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();\n    if (i === 0 || !littleWords.includes(words[i])) {\n      titleized.push(cappsedWord);\n    } else {\n      titleized.push(words[i]);\n    }\n  }\n  return titleized.join(\" \");\n}\nconst cardFiller = function (book, i) {\n  const frontData = [\"book_image\", \"title\", \"author\", \"rank\", \"weeks_on_list\"];\n  const backData = [\"description\", \"buy_links[5].url\", \"amazon_product_url\"];\n  const card = document.getElementById(`card-${i + 1}`);\n\n  // MAKING FRONT OF CARD\n\n  let front = document.createElement(\"ul\");\n  front.setAttribute(\"class\", \"front-of-card\");\n  frontData.forEach(category => {\n    let li = document.createElement(\"li\");\n    li.setAttribute(\"class\", category);\n    if (category === \"book_image\") {\n      let img = document.createElement(\"img\");\n      img.setAttribute(\"src\", book[\"book_image\"]);\n      img.setAttribute(\"alt\", `Cover image for ${titleize(book[\"title\"])}`);\n      li.appendChild(img);\n    } else {\n      if (category === \"title\") {\n        li.textContent = titleize(book[\"title\"]);\n      } else {\n        li.textContent = book[category];\n      }\n    }\n    front.appendChild(li);\n  });\n  card.appendChild(front);\n\n  // MAKING BACK OF CARD\n\n  let back = document.createElement(\"ul\");\n  back.setAttribute(\"class\", \"back-of-card\");\n  backData.forEach(category => {\n    let li = document.createElement(\"li\");\n    li.setAttribute(\"class\", category);\n    if (category === \"description\") {\n      li.textContent = book[category];\n    } else {\n      let a = document.createElement(\"a\");\n      if (category === \"buy_links[5].url\") {\n        a.setAttribute(\"href\", book.buy_links[5].url);\n        a.textContent = \"Purchase from an independent bookstore with IndieBound\";\n      } else {\n        a.setAttribute(\"href\", book[category]);\n        a.textContent = \"...Or purchase from Amazon :/\";\n      }\n      li.appendChild(a);\n    }\n    back.appendChild(li);\n  });\n  card.appendChild(back);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQztRQUN0Q00sQ0FBQyxDQUFDRixXQUFXLEdBQUcsK0JBQStCO01BQ2pEO01BQ0FILEVBQUUsQ0FBQ0UsV0FBVyxDQUFDRyxDQUFDLENBQUM7SUFDbkI7SUFDQUQsSUFBSSxDQUFDRixXQUFXLENBQUNGLEVBQUUsQ0FBQztFQUN0QixDQUFDLENBQUM7RUFFRlIsSUFBSSxDQUFDVSxXQUFXLENBQUNFLElBQUksQ0FBQztBQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL3NjcmlwdHMvY2FyZF9maWxsZXIuanM/NjcwZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgKiBhcyBhbGxEYXRhRmV0Y2hlciBmcm9tIFwiLi9kYXRhX2ZldGNoZXJcIjtcblxuZnVuY3Rpb24gdGl0bGVpemUoc3RyKSB7XG4gIGNvbnN0IGxpdHRsZVdvcmRzID0gW1xuICAgIFwiYVwiLFxuICAgIFwiYW5cIixcbiAgICBcImFuZFwiLFxuICAgIFwiYXRcIixcbiAgICBcImJ1dFwiLFxuICAgIFwiYnlcIixcbiAgICBcImZvclwiLFxuICAgIFwiZnJvbVwiLFxuICAgIFwiaW5cIixcbiAgICBcImludG9cIixcbiAgICBcIm9mXCIsXG4gICAgXCJvZmZcIixcbiAgICBcIm92ZXJcIixcbiAgICBcInRoZVwiLFxuICAgIFwidG9cIixcbiAgXTtcblxuICBsZXQgdGl0bGVpemVkID0gW107XG5cbiAgbGV0IHJhd1dvcmRzID0gc3RyLnNwbGl0KFwiIFwiKTtcbiAgbGV0IHdvcmRzID0gW107XG5cbiAgcmF3V29yZHMubWFwKCh3b3JkKSA9PiB7XG4gICAgd29yZHMucHVzaCh3b3JkLnRvTG93ZXJDYXNlKCkpO1xuICB9KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNhcHBzZWRXb3JkID1cbiAgICAgIHdvcmRzW2ldWzBdLnRvVXBwZXJDYXNlKCkgKyB3b3Jkc1tpXS5zbGljZSgxKS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmIChpID09PSAwIHx8ICFsaXR0bGVXb3Jkcy5pbmNsdWRlcyh3b3Jkc1tpXSkpIHtcbiAgICAgIHRpdGxlaXplZC5wdXNoKGNhcHBzZWRXb3JkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGl0bGVpemVkLnB1c2god29yZHNbaV0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdGl0bGVpemVkLmpvaW4oXCIgXCIpO1xufVxuXG5leHBvcnQgY29uc3QgY2FyZEZpbGxlciA9IGZ1bmN0aW9uIChib29rLCBpKSB7XG4gIGNvbnN0IGZyb250RGF0YSA9IFtcImJvb2tfaW1hZ2VcIiwgXCJ0aXRsZVwiLCBcImF1dGhvclwiLCBcInJhbmtcIiwgXCJ3ZWVrc19vbl9saXN0XCJdO1xuICBjb25zdCBiYWNrRGF0YSA9IFtcImRlc2NyaXB0aW9uXCIsIFwiYnV5X2xpbmtzWzVdLnVybFwiLCBcImFtYXpvbl9wcm9kdWN0X3VybFwiXTtcblxuICBjb25zdCBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGNhcmQtJHtpICsgMX1gKTtcblxuICAvLyBNQUtJTkcgRlJPTlQgT0YgQ0FSRFxuXG4gIGxldCBmcm9udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgZnJvbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmcm9udC1vZi1jYXJkXCIpO1xuXG4gIGZyb250RGF0YS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjYXRlZ29yeSk7XG4gICAgaWYgKGNhdGVnb3J5ID09PSBcImJvb2tfaW1hZ2VcIikge1xuICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKFwic3JjXCIsIGJvb2tbXCJib29rX2ltYWdlXCJdKTtcbiAgICAgIGltZy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgYENvdmVyIGltYWdlIGZvciAke3RpdGxlaXplKGJvb2tbXCJ0aXRsZVwiXSl9YCk7XG4gICAgICBsaS5hcHBlbmRDaGlsZChpbWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoY2F0ZWdvcnkgPT09IFwidGl0bGVcIikge1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IHRpdGxlaXplKGJvb2tbXCJ0aXRsZVwiXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGJvb2tbY2F0ZWdvcnldO1xuICAgICAgfVxuICAgIH1cbiAgICBmcm9udC5hcHBlbmRDaGlsZChsaSk7XG4gIH0pO1xuXG4gIGNhcmQuYXBwZW5kQ2hpbGQoZnJvbnQpO1xuXG4gIC8vIE1BS0lORyBCQUNLIE9GIENBUkRcblxuICBsZXQgYmFjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgYmFjay5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImJhY2stb2YtY2FyZFwiKTtcblxuICBiYWNrRGF0YS5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjYXRlZ29yeSk7XG4gICAgaWYgKGNhdGVnb3J5ID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgIGxpLnRleHRDb250ZW50ID0gYm9va1tjYXRlZ29yeV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiYnV5X2xpbmtzWzVdLnVybFwiKSB7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBib29rLmJ1eV9saW5rc1s1XS51cmwpO1xuICAgICAgICBhLnRleHRDb250ZW50ID1cbiAgICAgICAgICBcIlB1cmNoYXNlIGZyb20gYW4gaW5kZXBlbmRlbnQgYm9va3N0b3JlIHdpdGggSW5kaWVCb3VuZFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGJvb2tbY2F0ZWdvcnldKTtcbiAgICAgICAgYS50ZXh0Q29udGVudCA9IFwiLi4uT3IgcHVyY2hhc2UgZnJvbSBBbWF6b24gOi9cIjtcbiAgICAgIH1cbiAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuICAgIH1cbiAgICBiYWNrLmFwcGVuZENoaWxkKGxpKTtcbiAgfSk7XG5cbiAgY2FyZC5hcHBlbmRDaGlsZChiYWNrKTtcbn07XG4iXSwibmFtZXMiOlsidGl0bGVpemUiLCJzdHIiLCJsaXR0bGVXb3JkcyIsInRpdGxlaXplZCIsInJhd1dvcmRzIiwic3BsaXQiLCJ3b3JkcyIsIm1hcCIsIndvcmQiLCJwdXNoIiwidG9Mb3dlckNhc2UiLCJpIiwibGVuZ3RoIiwiY2FwcHNlZFdvcmQiLCJ0b1VwcGVyQ2FzZSIsInNsaWNlIiwiaW5jbHVkZXMiLCJqb2luIiwiY2FyZEZpbGxlciIsImJvb2siLCJmcm9udERhdGEiLCJiYWNrRGF0YSIsImNhcmQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZnJvbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiZm9yRWFjaCIsImNhdGVnb3J5IiwibGkiLCJpbWciLCJhcHBlbmRDaGlsZCIsInRleHRDb250ZW50IiwiYmFjayIsImEiLCJidXlfbGlua3MiLCJ1cmwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/card_filler.js\n");

/***/ }),

/***/ "./src/scripts/data_fetcher.js":
/*!*************************************!*\
  !*** ./src/scripts/data_fetcher.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; }\n/* harmony export */ });\n/* harmony import */ var _card_filler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card_filler */ \"./src/scripts/card_filler.js\");\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link -- JK- this is almost always null, so we're skipping it\n\nconst dataFetcher = async function () {\n  const url = \"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue :/\");\n    }\n    return response.json();\n  }).then(data => {\n    for (let i = 0; i < data.results.books.length; i++) {\n      // MAKING CARD\n      const card = document.createElement(\"div\");\n      card.setAttribute(\"id\", `card-${i + 1}`);\n      card.setAttribute(\"class\", \"card\");\n\n      // APPENDING CARD TO MAIN SECTION\n      const cardHolder = document.getElementById(\"card-holder\");\n      cardHolder.appendChild(card);\n    }\n    data.results.books.forEach((book, i) => {\n      _card_filler__WEBPACK_IMPORTED_MODULE_0__.cardFiller(book, i);\n    });\n  }).catch(error => {\n    console.error(error);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhX2ZldGNoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLFdBQVcsR0FBRyxrQkFBa0I7RUFDM0MsTUFBTUMsR0FBRyxHQUNQLG9IQUFvSDtFQUN0SEMsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FDUEUsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztJQUN4QztJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0VBQ3hCLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUVLLElBQUksSUFBSztJQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEVBQUVILENBQUMsRUFBRSxFQUFFO01BQ2xEO01BQ0EsTUFBTUksSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxLQUFLLENBQUM7TUFDMUNGLElBQUksQ0FBQ0csWUFBWSxDQUFDLElBQUksRUFBRyxRQUFPUCxDQUFDLEdBQUcsQ0FBRSxFQUFDLENBQUM7TUFDeENJLElBQUksQ0FBQ0csWUFBWSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUM7O01BRWxDO01BQ0EsTUFBTUMsVUFBVSxHQUFHSCxRQUFRLENBQUNJLGNBQWMsQ0FBQyxhQUFhLENBQUM7TUFDekRELFVBQVUsQ0FBQ0UsV0FBVyxDQUFDTixJQUFJLENBQUM7SUFDOUI7SUFDQUwsSUFBSSxDQUFDRSxPQUFPLENBQUNDLEtBQUssQ0FBQ1MsT0FBTyxDQUFDLENBQUNDLElBQUksRUFBRVosQ0FBQyxLQUFLO01BQ3RDVixvREFBd0IsQ0FBQ3NCLElBQUksRUFBRVosQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQztFQUNKLENBQUMsQ0FBQyxDQUNEYyxLQUFLLENBQUVDLEtBQUssSUFBSztJQUNoQkMsT0FBTyxDQUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL3NjcmlwdHMvZGF0YV9mZXRjaGVyLmpzPzc5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWxsQ2FyZEZpbGxlciBmcm9tIFwiLi9jYXJkX2ZpbGxlclwiO1xuXG4vLyBOWVQgcmVxdWVzdCByb290IFVSTDogaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzXG4vLyBOWVQgQm9va3MgQVBJIEtleTogXCJQOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiXG4vLyBUbyBnZXQgYWxsIGxpc3RzOiBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvbmFtZXMuanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXG4vLyB0aGUgYWJvdmUgcmV0dXJucyAyOSB3ZWVrbHkgbGlzdHMgYW5kIDMwIG1vbnRobHkgbGlzdHMgKDU5IHRvdGFsKVxuXG4vLyBiZWxvdyBpcyBhbiBleGFtcGxlIGNhbGwgdXNpbmcgR0VUIC9saXN0cy97ZGF0ZX0ve2xpc3R9Lmpzb25cbi8vIGRhdGVzIGFyZSBlbnRlcmVkIFlZWVktTU0tREQgb3IgXCJjdXJyZW50XCIgKEFTIFNUUklOR1MpIGFuZCBsaXN0IG5hbWVzIGFyZSBwdWxsZWQgZnJvbSB0aGUgbGlzdCBuYW1lIGFib3ZlIChhbHNvIGFzIHN0cmluZ3MpXG4vLyBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvMjAyMi0wOC0xMS9oYXJkY292ZXItZmljdGlvbi5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcblxuLy8gZGF0YSB3ZSBuZWVkOlxuLy8gZnJvbnQgb2YgY2FyZDpcbi8vIGJvb2tfaW1hZ2Vcbi8vIHRpdGxlIChuZWVkIGEgdGl0bGVpemUgZnVuY3Rpb24gbG9sKVxuLy8gYXV0aG9yXG4vLyByYW5rXG4vLyB3ZWVrc19vbl9saXN0XG4vLyBiYWNrIG9mIGNhcmQ6XG4vLyBkZXNjcmlwdGlvblxuLy8gYnV5X2xpbmtzWzVdLnVybCAoYnV5X2xpbmtzIGlzIGFuIGFycmF5IG9mIDYgdmVuZG9ycywgY2hvb3NlIHRoZSA1dGggZWxlIGZvciBpbmRpZWJvdW5kIGFuZCBzZWxlY3QgdXJsIGZyb20gc3ViYXJyIClcbi8vIGJvb2tfcmV2aWV3X2xpbmsgLS0gSkstIHRoaXMgaXMgYWxtb3N0IGFsd2F5cyBudWxsLCBzbyB3ZSdyZSBza2lwcGluZyBpdFxuXG5leHBvcnQgY29uc3QgZGF0YUZldGNoZXIgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHVybCA9XG4gICAgXCJodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvY3VycmVudC9oYXJkY292ZXItZmljdGlvbi5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcIjtcbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JraW5nIGlzc3VlIDovXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5ib29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBNQUtJTkcgQ0FSRFxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2FyZC0ke2kgKyAxfWApO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZFwiKTtcblxuICAgICAgICAvLyBBUFBFTkRJTkcgQ0FSRCBUTyBNQUlOIFNFQ1RJT05cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ob2xkZXJcIik7XG4gICAgICAgIGNhcmRIb2xkZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG4gICAgICB9XG4gICAgICBkYXRhLnJlc3VsdHMuYm9va3MuZm9yRWFjaCgoYm9vaywgaSkgPT4ge1xuICAgICAgICBhbGxDYXJkRmlsbGVyLmNhcmRGaWxsZXIoYm9vaywgaSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufTtcbiJdLCJuYW1lcyI6WyJhbGxDYXJkRmlsbGVyIiwiZGF0YUZldGNoZXIiLCJ1cmwiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsIm9rIiwiRXJyb3IiLCJqc29uIiwiZGF0YSIsImkiLCJyZXN1bHRzIiwiYm9va3MiLCJsZW5ndGgiLCJjYXJkIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2FyZEhvbGRlciIsImdldEVsZW1lbnRCeUlkIiwiYXBwZW5kQ2hpbGQiLCJmb3JFYWNoIiwiYm9vayIsImNhcmRGaWxsZXIiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/data_fetcher.js\n");

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