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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data_fetcher */ \"./src/scripts/data_fetcher.js\");\n/* harmony import */ var _scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card_filler */ \"./src/scripts/card_filler.js\");\n/* harmony import */ var _scripts_sidebar_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar_helper */ \"./src/scripts/sidebar_helper.js\");\n\n\n\n_scripts_sidebar_helper__WEBPACK_IMPORTED_MODULE_2__.dropdownMaker();\n_scripts_sidebar_helper__WEBPACK_IMPORTED_MODULE_2__.defaultDateSetter();\n_scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__.dataFetcher();\nconst searchForm = document.getElementById(\"search-form\");\nsearchForm.addEventListener(\"submit\", e => {\n  e.preventDefault();\n  let selectedList = e.target.elements[0].value;\n  let selectedDate = e.target.elements[1].value;\n  //   console.log(e.target.elements[0].innerText);\n  _scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__.dataFetcher(selectedList, selectedDate);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5RDtBQUNGO0FBQ007QUFFN0RFLGtFQUE4QixFQUFFO0FBQ2hDQSxzRUFBa0MsRUFBRTtBQUNwQ0YsOERBQTBCLEVBQUU7QUFFNUIsTUFBTU0sVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFFekRGLFVBQVUsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxDQUFDLElBQUs7RUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBQ2xCLElBQUlDLFlBQVksR0FBR0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSztFQUM3QyxJQUFJQyxZQUFZLEdBQUdOLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUs7RUFDL0M7RUFDRWYsOERBQTBCLENBQUNZLFlBQVksRUFBRUksWUFBWSxDQUFDO0FBQ3hELENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFsbERhdGFGZXRjaGVyIGZyb20gXCIuL3NjcmlwdHMvZGF0YV9mZXRjaGVyXCI7XG5pbXBvcnQgKiBhcyBhbGxDYXJkRmlsbGVyIGZyb20gXCIuL3NjcmlwdHMvY2FyZF9maWxsZXJcIjtcbmltcG9ydCAqIGFzIGFsbFNpZGViYXJIZWxwZXIgZnJvbSBcIi4vc2NyaXB0cy9zaWRlYmFyX2hlbHBlclwiO1xuXG5hbGxTaWRlYmFySGVscGVyLmRyb3Bkb3duTWFrZXIoKTtcbmFsbFNpZGViYXJIZWxwZXIuZGVmYXVsdERhdGVTZXR0ZXIoKTtcbmFsbERhdGFGZXRjaGVyLmRhdGFGZXRjaGVyKCk7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mb3JtXCIpO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgc2VsZWN0ZWRMaXN0ID0gZS50YXJnZXQuZWxlbWVudHNbMF0udmFsdWU7XG4gIGxldCBzZWxlY3RlZERhdGUgPSBlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZTtcbi8vICAgY29uc29sZS5sb2coZS50YXJnZXQuZWxlbWVudHNbMF0uaW5uZXJUZXh0KTtcbiAgYWxsRGF0YUZldGNoZXIuZGF0YUZldGNoZXIoc2VsZWN0ZWRMaXN0LCBzZWxlY3RlZERhdGUpO1xufSk7XG4iXSwibmFtZXMiOlsiYWxsRGF0YUZldGNoZXIiLCJhbGxDYXJkRmlsbGVyIiwiYWxsU2lkZWJhckhlbHBlciIsImRyb3Bkb3duTWFrZXIiLCJkZWZhdWx0RGF0ZVNldHRlciIsImRhdGFGZXRjaGVyIiwic2VhcmNoRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWRMaXN0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInNlbGVjdGVkRGF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/card_filler.js":
/*!************************************!*\
  !*** ./src/scripts/card_filler.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardFiller\": function() { return /* binding */ cardFiller; }\n/* harmony export */ });\n// import * as allDataFetcher from \"./data_fetcher\";\n\nfunction titleize(str) {\n  const littleWords = [\"a\", \"an\", \"and\", \"at\", \"but\", \"by\", \"for\", \"from\", \"in\", \"into\", \"of\", \"off\", \"over\", \"the\", \"to\"];\n  let titleized = [];\n  let rawWords = str.split(\" \");\n  let words = [];\n  rawWords.map(word => {\n    words.push(word.toLowerCase());\n  });\n  for (let i = 0; i < words.length; i++) {\n    let cappsedWord = words[i][0].toUpperCase() + words[i].slice(1).toLowerCase();\n    if (i === 0 || !littleWords.includes(words[i])) {\n      titleized.push(cappsedWord);\n    } else {\n      titleized.push(words[i]);\n    }\n  }\n  return titleized.join(\" \");\n}\nconst cardFiller = function (book, i) {\n  const frontData = [\"book_image\", \"title\", \"author\", \"rank\", \"weeks_on_list\"];\n  const backData = [\"description\", \"buy_links[5].url\", \"amazon_product_url\"];\n  const card = document.getElementById(`card-${i + 1}`);\n\n  // MAKING FRONT OF CARD\n\n  let front = document.createElement(\"ul\");\n  front.setAttribute(\"class\", \"front-of-card\");\n  frontData.forEach(category => {\n    let li = document.createElement(\"li\");\n    li.setAttribute(\"class\", category);\n    if (category === \"book_image\") {\n      let img = document.createElement(\"img\");\n      img.setAttribute(\"src\", book[\"book_image\"]);\n      img.setAttribute(\"alt\", `Cover image for ${titleize(book[\"title\"])}`);\n      li.appendChild(img);\n    } else {\n      if (category === \"title\") {\n        li.textContent = titleize(book[\"title\"]);\n      } else if (category === \"rank\") {\n        let rankP = document.createElement(\"p\");\n        rankP.innerHTML = \"Rank\";\n        li.textContent = \"# \" + book[category];\n        // li.textContent = book[category];\n        li.appendChild(rankP);\n      } else if (category === \"weeks_on_list\") {\n        let weeksP = document.createElement(\"p\");\n        if (book[\"weeks_on_list\"] === 1) {\n          weeksP.innerHTML = \"Week on list\";\n        } else {\n          weeksP.innerHTML = \"Weeks on list\";\n        }\n        li.textContent = book[category];\n        li.appendChild(weeksP);\n      } else {\n        li.textContent = book[category];\n      }\n    }\n    front.appendChild(li);\n  });\n  card.appendChild(front);\n\n  // MAKING BACK OF CARD\n\n  let back = document.createElement(\"ul\");\n  back.setAttribute(\"class\", \"back-of-card\");\n  backData.forEach(category => {\n    let li = document.createElement(\"li\");\n    // li.setAttribute(\"class\", category);\n    if (category === \"description\") {\n      li.setAttribute(\"class\", category);\n      li.textContent = book[category];\n    } else {\n      let a = document.createElement(\"a\");\n      let button = document.createElement(\"button\");\n      if (category === \"buy_links[5].url\") {\n        li.setAttribute(\"class\", \"indie_bound_link\");\n        a.setAttribute(\"href\", book.buy_links[5].url);\n        button.textContent = \"Purchase from an independent bookstore with IndieBound\";\n      } else {\n        li.setAttribute(\"class\", category);\n        a.setAttribute(\"href\", book[category]);\n        button.textContent = \"...Or purchase from Amazon :/\";\n      }\n      a.appendChild(button);\n      li.appendChild(a);\n    }\n    back.appendChild(li);\n  });\n  card.appendChild(back);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYXJkX2ZpbGxlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBRUEsU0FBU0EsUUFBUSxDQUFDQyxHQUFHLEVBQUU7RUFDckIsTUFBTUMsV0FBVyxHQUFHLENBQ2xCLEdBQUcsRUFDSCxJQUFJLEVBQ0osS0FBSyxFQUNMLElBQUksRUFDSixLQUFLLEVBQ0wsSUFBSSxFQUNKLEtBQUssRUFDTCxNQUFNLEVBQ04sSUFBSSxFQUNKLE1BQU0sRUFDTixJQUFJLEVBQ0osS0FBSyxFQUNMLE1BQU0sRUFDTixLQUFLLEVBQ0wsSUFBSSxDQUNMO0VBRUQsSUFBSUMsU0FBUyxHQUFHLEVBQUU7RUFFbEIsSUFBSUMsUUFBUSxHQUFHSCxHQUFHLENBQUNJLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFDN0IsSUFBSUMsS0FBSyxHQUFHLEVBQUU7RUFFZEYsUUFBUSxDQUFDRyxHQUFHLENBQUVDLElBQUksSUFBSztJQUNyQkYsS0FBSyxDQUFDRyxJQUFJLENBQUNELElBQUksQ0FBQ0UsV0FBVyxFQUFFLENBQUM7RUFDaEMsQ0FBQyxDQUFDO0VBRUYsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdMLEtBQUssQ0FBQ00sTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtJQUNyQyxJQUFJRSxXQUFXLEdBQ2JQLEtBQUssQ0FBQ0ssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNHLFdBQVcsRUFBRSxHQUFHUixLQUFLLENBQUNLLENBQUMsQ0FBQyxDQUFDSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUNMLFdBQVcsRUFBRTtJQUM3RCxJQUFJQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUNULFdBQVcsQ0FBQ2MsUUFBUSxDQUFDVixLQUFLLENBQUNLLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDOUNSLFNBQVMsQ0FBQ00sSUFBSSxDQUFDSSxXQUFXLENBQUM7SUFDN0IsQ0FBQyxNQUFNO01BQ0xWLFNBQVMsQ0FBQ00sSUFBSSxDQUFDSCxLQUFLLENBQUNLLENBQUMsQ0FBQyxDQUFDO0lBQzFCO0VBQ0Y7RUFDQSxPQUFPUixTQUFTLENBQUNjLElBQUksQ0FBQyxHQUFHLENBQUM7QUFDNUI7QUFFTyxNQUFNQyxVQUFVLEdBQUcsVUFBVUMsSUFBSSxFQUFFUixDQUFDLEVBQUU7RUFDM0MsTUFBTVMsU0FBUyxHQUFHLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQztFQUM1RSxNQUFNQyxRQUFRLEdBQUcsQ0FBQyxhQUFhLEVBQUUsa0JBQWtCLEVBQUUsb0JBQW9CLENBQUM7RUFFMUUsTUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBRSxRQUFPYixDQUFDLEdBQUcsQ0FBRSxFQUFDLENBQUM7O0VBRXJEOztFQUVBLElBQUljLEtBQUssR0FBR0YsUUFBUSxDQUFDRyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3hDRCxLQUFLLENBQUNFLFlBQVksQ0FBQyxPQUFPLEVBQUUsZUFBZSxDQUFDO0VBRTVDUCxTQUFTLENBQUNRLE9BQU8sQ0FBRUMsUUFBUSxJQUFLO0lBQzlCLElBQUlDLEVBQUUsR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3JDSSxFQUFFLENBQUNILFlBQVksQ0FBQyxPQUFPLEVBQUVFLFFBQVEsQ0FBQztJQUNsQyxJQUFJQSxRQUFRLEtBQUssWUFBWSxFQUFFO01BQzdCLElBQUlFLEdBQUcsR0FBR1IsUUFBUSxDQUFDRyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQ3ZDSyxHQUFHLENBQUNKLFlBQVksQ0FBQyxLQUFLLEVBQUVSLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztNQUMzQ1ksR0FBRyxDQUFDSixZQUFZLENBQUMsS0FBSyxFQUFHLG1CQUFrQjNCLFFBQVEsQ0FBQ21CLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBRSxFQUFDLENBQUM7TUFDckVXLEVBQUUsQ0FBQ0UsV0FBVyxDQUFDRCxHQUFHLENBQUM7SUFDckIsQ0FBQyxNQUFNO01BQ0wsSUFBSUYsUUFBUSxLQUFLLE9BQU8sRUFBRTtRQUN4QkMsRUFBRSxDQUFDRyxXQUFXLEdBQUdqQyxRQUFRLENBQUNtQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7TUFDMUMsQ0FBQyxNQUFNLElBQUlVLFFBQVEsS0FBSyxNQUFNLEVBQUU7UUFDOUIsSUFBSUssS0FBSyxHQUFHWCxRQUFRLENBQUNHLGFBQWEsQ0FBQyxHQUFHLENBQUM7UUFDdkNRLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLE1BQU07UUFDeEJMLEVBQUUsQ0FBQ0csV0FBVyxHQUFHLElBQUksR0FBR2QsSUFBSSxDQUFDVSxRQUFRLENBQUM7UUFDdEM7UUFDQUMsRUFBRSxDQUFDRSxXQUFXLENBQUNFLEtBQUssQ0FBQztNQUN2QixDQUFDLE1BQU0sSUFBSUwsUUFBUSxLQUFLLGVBQWUsRUFBRTtRQUN2QyxJQUFJTyxNQUFNLEdBQUdiLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUN4QyxJQUFJUCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxFQUFFO1VBQy9CaUIsTUFBTSxDQUFDRCxTQUFTLEdBQUcsY0FBYztRQUNuQyxDQUFDLE1BQU07VUFDTEMsTUFBTSxDQUFDRCxTQUFTLEdBQUcsZUFBZTtRQUNwQztRQUNBTCxFQUFFLENBQUNHLFdBQVcsR0FBR2QsSUFBSSxDQUFDVSxRQUFRLENBQUM7UUFDL0JDLEVBQUUsQ0FBQ0UsV0FBVyxDQUFDSSxNQUFNLENBQUM7TUFDeEIsQ0FBQyxNQUFNO1FBQ0xOLEVBQUUsQ0FBQ0csV0FBVyxHQUFHZCxJQUFJLENBQUNVLFFBQVEsQ0FBQztNQUNqQztJQUNGO0lBQ0FKLEtBQUssQ0FBQ08sV0FBVyxDQUFDRixFQUFFLENBQUM7RUFDdkIsQ0FBQyxDQUFDO0VBRUZSLElBQUksQ0FBQ1UsV0FBVyxDQUFDUCxLQUFLLENBQUM7O0VBRXZCOztFQUVBLElBQUlZLElBQUksR0FBR2QsUUFBUSxDQUFDRyxhQUFhLENBQUMsSUFBSSxDQUFDO0VBQ3ZDVyxJQUFJLENBQUNWLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDO0VBRTFDTixRQUFRLENBQUNPLE9BQU8sQ0FBRUMsUUFBUSxJQUFLO0lBQzdCLElBQUlDLEVBQUUsR0FBR1AsUUFBUSxDQUFDRyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQ3JDO0lBQ0EsSUFBSUcsUUFBUSxLQUFLLGFBQWEsRUFBRTtNQUM5QkMsRUFBRSxDQUFDSCxZQUFZLENBQUMsT0FBTyxFQUFFRSxRQUFRLENBQUM7TUFDbENDLEVBQUUsQ0FBQ0csV0FBVyxHQUFHZCxJQUFJLENBQUNVLFFBQVEsQ0FBQztJQUNqQyxDQUFDLE1BQU07TUFDTCxJQUFJUyxDQUFDLEdBQUdmLFFBQVEsQ0FBQ0csYUFBYSxDQUFDLEdBQUcsQ0FBQztNQUNuQyxJQUFJYSxNQUFNLEdBQUdoQixRQUFRLENBQUNHLGFBQWEsQ0FBQyxRQUFRLENBQUM7TUFDN0MsSUFBSUcsUUFBUSxLQUFLLGtCQUFrQixFQUFFO1FBQ25DQyxFQUFFLENBQUNILFlBQVksQ0FBQyxPQUFPLEVBQUUsa0JBQWtCLENBQUM7UUFDNUNXLENBQUMsQ0FBQ1gsWUFBWSxDQUFDLE1BQU0sRUFBRVIsSUFBSSxDQUFDcUIsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUM7UUFDN0NGLE1BQU0sQ0FBQ04sV0FBVyxHQUNoQix3REFBd0Q7TUFDNUQsQ0FBQyxNQUFNO1FBQ0xILEVBQUUsQ0FBQ0gsWUFBWSxDQUFDLE9BQU8sRUFBRUUsUUFBUSxDQUFDO1FBQ2xDUyxDQUFDLENBQUNYLFlBQVksQ0FBQyxNQUFNLEVBQUVSLElBQUksQ0FBQ1UsUUFBUSxDQUFDLENBQUM7UUFDdENVLE1BQU0sQ0FBQ04sV0FBVyxHQUFHLCtCQUErQjtNQUN0RDtNQUNBSyxDQUFDLENBQUNOLFdBQVcsQ0FBQ08sTUFBTSxDQUFDO01BQ3JCVCxFQUFFLENBQUNFLFdBQVcsQ0FBQ00sQ0FBQyxDQUFDO0lBQ25CO0lBQ0FELElBQUksQ0FBQ0wsV0FBVyxDQUFDRixFQUFFLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0VBRUZSLElBQUksQ0FBQ1UsV0FBVyxDQUFDSyxJQUFJLENBQUM7QUFDeEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9zY3JpcHRzL2NhcmRfZmlsbGVyLmpzPzY3MGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICogYXMgYWxsRGF0YUZldGNoZXIgZnJvbSBcIi4vZGF0YV9mZXRjaGVyXCI7XG5cbmZ1bmN0aW9uIHRpdGxlaXplKHN0cikge1xuICBjb25zdCBsaXR0bGVXb3JkcyA9IFtcbiAgICBcImFcIixcbiAgICBcImFuXCIsXG4gICAgXCJhbmRcIixcbiAgICBcImF0XCIsXG4gICAgXCJidXRcIixcbiAgICBcImJ5XCIsXG4gICAgXCJmb3JcIixcbiAgICBcImZyb21cIixcbiAgICBcImluXCIsXG4gICAgXCJpbnRvXCIsXG4gICAgXCJvZlwiLFxuICAgIFwib2ZmXCIsXG4gICAgXCJvdmVyXCIsXG4gICAgXCJ0aGVcIixcbiAgICBcInRvXCIsXG4gIF07XG5cbiAgbGV0IHRpdGxlaXplZCA9IFtdO1xuXG4gIGxldCByYXdXb3JkcyA9IHN0ci5zcGxpdChcIiBcIik7XG4gIGxldCB3b3JkcyA9IFtdO1xuXG4gIHJhd1dvcmRzLm1hcCgod29yZCkgPT4ge1xuICAgIHdvcmRzLnB1c2god29yZC50b0xvd2VyQ2FzZSgpKTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBjYXBwc2VkV29yZCA9XG4gICAgICB3b3Jkc1tpXVswXS50b1VwcGVyQ2FzZSgpICsgd29yZHNbaV0uc2xpY2UoMSkudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoaSA9PT0gMCB8fCAhbGl0dGxlV29yZHMuaW5jbHVkZXMod29yZHNbaV0pKSB7XG4gICAgICB0aXRsZWl6ZWQucHVzaChjYXBwc2VkV29yZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRpdGxlaXplZC5wdXNoKHdvcmRzW2ldKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRpdGxlaXplZC5qb2luKFwiIFwiKTtcbn1cblxuZXhwb3J0IGNvbnN0IGNhcmRGaWxsZXIgPSBmdW5jdGlvbiAoYm9vaywgaSkge1xuICBjb25zdCBmcm9udERhdGEgPSBbXCJib29rX2ltYWdlXCIsIFwidGl0bGVcIiwgXCJhdXRob3JcIiwgXCJyYW5rXCIsIFwid2Vla3Nfb25fbGlzdFwiXTtcbiAgY29uc3QgYmFja0RhdGEgPSBbXCJkZXNjcmlwdGlvblwiLCBcImJ1eV9saW5rc1s1XS51cmxcIiwgXCJhbWF6b25fcHJvZHVjdF91cmxcIl07XG5cbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjYXJkLSR7aSArIDF9YCk7XG5cbiAgLy8gTUFLSU5HIEZST05UIE9GIENBUkRcblxuICBsZXQgZnJvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGZyb250LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZnJvbnQtb2YtY2FyZFwiKTtcblxuICBmcm9udERhdGEuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2F0ZWdvcnkpO1xuICAgIGlmIChjYXRlZ29yeSA9PT0gXCJib29rX2ltYWdlXCIpIHtcbiAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgaW1nLnNldEF0dHJpYnV0ZShcInNyY1wiLCBib29rW1wiYm9va19pbWFnZVwiXSk7XG4gICAgICBpbWcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIGBDb3ZlciBpbWFnZSBmb3IgJHt0aXRsZWl6ZShib29rW1widGl0bGVcIl0pfWApO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGNhdGVnb3J5ID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSB0aXRsZWl6ZShib29rW1widGl0bGVcIl0pO1xuICAgICAgfSBlbHNlIGlmIChjYXRlZ29yeSA9PT0gXCJyYW5rXCIpIHtcbiAgICAgICAgbGV0IHJhbmtQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHJhbmtQLmlubmVySFRNTCA9IFwiUmFua1wiO1xuICAgICAgICBsaS50ZXh0Q29udGVudCA9IFwiIyBcIiArIGJvb2tbY2F0ZWdvcnldO1xuICAgICAgICAvLyBsaS50ZXh0Q29udGVudCA9IGJvb2tbY2F0ZWdvcnldO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZChyYW5rUCk7XG4gICAgICB9IGVsc2UgaWYgKGNhdGVnb3J5ID09PSBcIndlZWtzX29uX2xpc3RcIikge1xuICAgICAgICBsZXQgd2Vla3NQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGlmIChib29rW1wid2Vla3Nfb25fbGlzdFwiXSA9PT0gMSkge1xuICAgICAgICAgIHdlZWtzUC5pbm5lckhUTUwgPSBcIldlZWsgb24gbGlzdFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdlZWtzUC5pbm5lckhUTUwgPSBcIldlZWtzIG9uIGxpc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBsaS50ZXh0Q29udGVudCA9IGJvb2tbY2F0ZWdvcnldO1xuICAgICAgICBsaS5hcHBlbmRDaGlsZCh3ZWVrc1ApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGkudGV4dENvbnRlbnQgPSBib29rW2NhdGVnb3J5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnJvbnQuYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGZyb250KTtcblxuICAvLyBNQUtJTkcgQkFDSyBPRiBDQVJEXG5cbiAgbGV0IGJhY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gIGJhY2suc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJiYWNrLW9mLWNhcmRcIik7XG5cbiAgYmFja0RhdGEuZm9yRWFjaCgoY2F0ZWdvcnkpID0+IHtcbiAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgLy8gbGkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgY2F0ZWdvcnkpO1xuICAgIGlmIChjYXRlZ29yeSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICBsaS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBjYXRlZ29yeSk7XG4gICAgICBsaS50ZXh0Q29udGVudCA9IGJvb2tbY2F0ZWdvcnldO1xuICAgIH0gZWxzZSB7XG4gICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuICAgICAgbGV0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBpZiAoY2F0ZWdvcnkgPT09IFwiYnV5X2xpbmtzWzVdLnVybFwiKSB7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaW5kaWVfYm91bmRfbGlua1wiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGJvb2suYnV5X2xpbmtzWzVdLnVybCk7XG4gICAgICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9XG4gICAgICAgICAgXCJQdXJjaGFzZSBmcm9tIGFuIGluZGVwZW5kZW50IGJvb2tzdG9yZSB3aXRoIEluZGllQm91bmRcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxpLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIGNhdGVnb3J5KTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGJvb2tbY2F0ZWdvcnldKTtcbiAgICAgICAgYnV0dG9uLnRleHRDb250ZW50ID0gXCIuLi5PciBwdXJjaGFzZSBmcm9tIEFtYXpvbiA6L1wiO1xuICAgICAgfVxuICAgICAgYS5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XG4gICAgfVxuICAgIGJhY2suYXBwZW5kQ2hpbGQobGkpO1xuICB9KTtcblxuICBjYXJkLmFwcGVuZENoaWxkKGJhY2spO1xufTtcbiJdLCJuYW1lcyI6WyJ0aXRsZWl6ZSIsInN0ciIsImxpdHRsZVdvcmRzIiwidGl0bGVpemVkIiwicmF3V29yZHMiLCJzcGxpdCIsIndvcmRzIiwibWFwIiwid29yZCIsInB1c2giLCJ0b0xvd2VyQ2FzZSIsImkiLCJsZW5ndGgiLCJjYXBwc2VkV29yZCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJpbmNsdWRlcyIsImpvaW4iLCJjYXJkRmlsbGVyIiwiYm9vayIsImZyb250RGF0YSIsImJhY2tEYXRhIiwiY2FyZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmcm9udCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJsaSIsImltZyIsImFwcGVuZENoaWxkIiwidGV4dENvbnRlbnQiLCJyYW5rUCIsImlubmVySFRNTCIsIndlZWtzUCIsImJhY2siLCJhIiwiYnV0dG9uIiwiYnV5X2xpbmtzIiwidXJsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/card_filler.js\n");

/***/ }),

/***/ "./src/scripts/data_fetcher.js":
/*!*************************************!*\
  !*** ./src/scripts/data_fetcher.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; }\n/* harmony export */ });\n/* harmony import */ var _card_filler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card_filler */ \"./src/scripts/card_filler.js\");\n/* harmony import */ var _sidebar_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar_helper */ \"./src/scripts/sidebar_helper.js\");\n\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link -- JK- this is almost always null, so we're skipping it\n\nconst dataFetcher = async function (date, list) {\n  if (!date) date = \"current\";\n  if (!list) list = \"combined-print-and-e-book-fiction\";\n  const url = `https://api.nytimes.com/svc/books/v3/lists/${date}/${list}.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z`;\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue :/\");\n    }\n    return response.json();\n  }).then(data => {\n    //RESETTING LIST TITLE HEADER\n    const listTitle = document.getElementById(\"list-title\");\n    listTitle.textContent = `${data.results.list_name} Best Sellers`;\n    for (let i = 0; i < data.results.books.length; i++) {\n      // MAKING CARD\n      const card = document.createElement(\"div\");\n      card.setAttribute(\"id\", `card-${i + 1}`);\n      card.setAttribute(\"class\", \"card\");\n\n      // APPENDING CARD TO MAIN SECTION\n      const cardHolder = document.getElementById(\"card-holder\");\n      cardHolder.appendChild(card);\n\n      // CARD FLIPPER\n      card.addEventListener(\"click\", e => {\n        card.classList.toggle(\"is-flipped\");\n      });\n    }\n    data.results.books.forEach((book, i) => {\n      _card_filler__WEBPACK_IMPORTED_MODULE_0__.cardFiller(book, i);\n    });\n    const cardHolder = document.getElementById(\"card-holder\");\n    for (let times = 0; times < 5; times++) {\n      for (let i = 0; i < cardHolder.children.length; i++) {\n        if (cardHolder.children[i].children.length === 0) {\n          cardHolder.removeChild(cardHolder.children[i]);\n        }\n      }\n    }\n  }).catch(error => {\n    console.error(error);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDRCxLQUFLLENBQUNBLEtBQUssQ0FBQztFQUN0QixDQUFDLENBQUM7QUFDTixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbnl0X2Jvb2tzLy4vc3JjL3NjcmlwdHMvZGF0YV9mZXRjaGVyLmpzPzc5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgYWxsQ2FyZEZpbGxlciBmcm9tIFwiLi9jYXJkX2ZpbGxlclwiO1xuaW1wb3J0ICogYXMgYWxsU2lkZWJhckhlbHBlciBmcm9tIFwiLi9zaWRlYmFyX2hlbHBlclwiO1xuXG4vLyBOWVQgcmVxdWVzdCByb290IFVSTDogaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzXG4vLyBOWVQgQm9va3MgQVBJIEtleTogXCJQOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiXG4vLyBUbyBnZXQgYWxsIGxpc3RzOiBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvbmFtZXMuanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXG4vLyB0aGUgYWJvdmUgcmV0dXJucyAyOSB3ZWVrbHkgbGlzdHMgYW5kIDMwIG1vbnRobHkgbGlzdHMgKDU5IHRvdGFsKVxuXG4vLyBiZWxvdyBpcyBhbiBleGFtcGxlIGNhbGwgdXNpbmcgR0VUIC9saXN0cy97ZGF0ZX0ve2xpc3R9Lmpzb25cbi8vIGRhdGVzIGFyZSBlbnRlcmVkIFlZWVktTU0tREQgb3IgXCJjdXJyZW50XCIgKEFTIFNUUklOR1MpIGFuZCBsaXN0IG5hbWVzIGFyZSBwdWxsZWQgZnJvbSB0aGUgbGlzdCBuYW1lIGFib3ZlIChhbHNvIGFzIHN0cmluZ3MpXG4vLyBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjMvbGlzdHMvMjAyMi0wOC0xMS9oYXJkY292ZXItZmljdGlvbi5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcblxuLy8gZGF0YSB3ZSBuZWVkOlxuLy8gZnJvbnQgb2YgY2FyZDpcbi8vIGJvb2tfaW1hZ2Vcbi8vIHRpdGxlIChuZWVkIGEgdGl0bGVpemUgZnVuY3Rpb24gbG9sKVxuLy8gYXV0aG9yXG4vLyByYW5rXG4vLyB3ZWVrc19vbl9saXN0XG4vLyBiYWNrIG9mIGNhcmQ6XG4vLyBkZXNjcmlwdGlvblxuLy8gYnV5X2xpbmtzWzVdLnVybCAoYnV5X2xpbmtzIGlzIGFuIGFycmF5IG9mIDYgdmVuZG9ycywgY2hvb3NlIHRoZSA1dGggZWxlIGZvciBpbmRpZWJvdW5kIGFuZCBzZWxlY3QgdXJsIGZyb20gc3ViYXJyIClcbi8vIGJvb2tfcmV2aWV3X2xpbmsgLS0gSkstIHRoaXMgaXMgYWxtb3N0IGFsd2F5cyBudWxsLCBzbyB3ZSdyZSBza2lwcGluZyBpdFxuXG5leHBvcnQgY29uc3QgZGF0YUZldGNoZXIgPSBhc3luYyBmdW5jdGlvbiAoZGF0ZSwgbGlzdCkge1xuICBpZiAoIWRhdGUpIGRhdGUgPSBcImN1cnJlbnRcIjtcbiAgaWYgKCFsaXN0KSBsaXN0ID0gXCJjb21iaW5lZC1wcmludC1hbmQtZS1ib29rLWZpY3Rpb25cIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy8ke2RhdGV9LyR7bGlzdH0uanNvbj9hcGkta2V5PVA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaYDtcbiAgZmV0Y2godXJsKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JraW5nIGlzc3VlIDovXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAvL1JFU0VUVElORyBMSVNUIFRJVExFIEhFQURFUlxuICAgICAgY29uc3QgbGlzdFRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsaXN0LXRpdGxlXCIpO1xuICAgICAgbGlzdFRpdGxlLnRleHRDb250ZW50ID0gYCR7ZGF0YS5yZXN1bHRzLmxpc3RfbmFtZX0gQmVzdCBTZWxsZXJzYDtcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnJlc3VsdHMuYm9va3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gTUFLSU5HIENBUkRcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgYGNhcmQtJHtpICsgMX1gKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNhcmRcIik7XG5cbiAgICAgICAgLy8gQVBQRU5ESU5HIENBUkQgVE8gTUFJTiBTRUNUSU9OXG4gICAgICAgIGNvbnN0IGNhcmRIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaG9sZGVyXCIpO1xuICAgICAgICBjYXJkSG9sZGVyLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgICAgIC8vIENBUkQgRkxJUFBFUlxuICAgICAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWZsaXBwZWRcIik7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZGF0YS5yZXN1bHRzLmJvb2tzLmZvckVhY2goKGJvb2ssIGkpID0+IHtcbiAgICAgICAgYWxsQ2FyZEZpbGxlci5jYXJkRmlsbGVyKGJvb2ssIGkpO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGNhcmRIb2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcmQtaG9sZGVyXCIpO1xuICAgICAgZm9yIChsZXQgdGltZXMgPSAwOyB0aW1lcyA8IDU7IHRpbWVzKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJkSG9sZGVyLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGNhcmRIb2xkZXIuY2hpbGRyZW5baV0uY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjYXJkSG9sZGVyLnJlbW92ZUNoaWxkKGNhcmRIb2xkZXIuY2hpbGRyZW5baV0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbImFsbENhcmRGaWxsZXIiLCJhbGxTaWRlYmFySGVscGVyIiwiZGF0YUZldGNoZXIiLCJkYXRlIiwibGlzdCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwibGlzdFRpdGxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRleHRDb250ZW50IiwicmVzdWx0cyIsImxpc3RfbmFtZSIsImkiLCJib29rcyIsImxlbmd0aCIsImNhcmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2FyZEhvbGRlciIsImFwcGVuZENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJmb3JFYWNoIiwiYm9vayIsImNhcmRGaWxsZXIiLCJ0aW1lcyIsImNoaWxkcmVuIiwicmVtb3ZlQ2hpbGQiLCJjYXRjaCIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/data_fetcher.js\n");

/***/ }),

/***/ "./src/scripts/sidebar_helper.js":
/*!***************************************!*\
  !*** ./src/scripts/sidebar_helper.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultDateSetter\": function() { return /* binding */ defaultDateSetter; },\n/* harmony export */   \"dropdownMaker\": function() { return /* binding */ dropdownMaker; }\n/* harmony export */ });\nconst dropdownMaker = async function () {\n  const url = \"https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue...couldn't make dropdown menu :/\");\n    }\n    return response.json();\n  }).then(data => {\n    for (let i = 0; i < data.results.length; i++) {\n      // ONLY INCLUDE BOOK AS AN OPTION IF IT WAS PUBLISHED THIS YEAR\n      let newestPublishedDate = data.results[i].newest_published_date;\n      let newestPublishedYear = parseInt(newestPublishedDate.slice(0, 4));\n      if (newestPublishedYear >= 2022) {\n        // MAKING OPTION\n        const option = document.createElement(\"option\");\n        option.setAttribute(\"class\", \"list-option\");\n        option.setAttribute(\"value\", data.results[i].list_name_encoded);\n        option.textContent = data.results[i].display_name;\n\n        // APPENDING OPTION TO SELECT\n        const listSelector = document.getElementById(\"list-selector\");\n        listSelector.appendChild(option);\n      }\n    }\n  }).catch(error => {\n    console.error(error);\n  });\n};\n\n// function to set default date as today on date form\n\nconst defaultDateSetter = async function () {\n  document.getElementById(\"date-picker\").valueAsDate = new Date();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyX2hlbHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGFBQWEsR0FBRyxrQkFBa0I7RUFDN0MsTUFBTUMsR0FBRyxHQUNQLGdHQUFnRztFQUNsR0MsS0FBSyxDQUFDRCxHQUFHLENBQUMsQ0FDUEUsSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxtREFBbUQsQ0FBQztJQUN0RTtJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0VBQ3hCLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUVLLElBQUksSUFBSztJQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsTUFBTSxFQUFFRixDQUFDLEVBQUUsRUFBRTtNQUU1QztNQUNBLElBQUlHLG1CQUFtQixHQUFHSixJQUFJLENBQUNFLE9BQU8sQ0FBQ0QsQ0FBQyxDQUFDLENBQUNJLHFCQUFxQjtNQUMvRCxJQUFJQyxtQkFBbUIsR0FBR0MsUUFBUSxDQUFDSCxtQkFBbUIsQ0FBQ0ksS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztNQUVuRSxJQUFJRixtQkFBbUIsSUFBSSxJQUFJLEVBQUU7UUFDL0I7UUFDQSxNQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUMvQ0YsTUFBTSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztRQUMzQ0gsTUFBTSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFWixJQUFJLENBQUNFLE9BQU8sQ0FBQ0QsQ0FBQyxDQUFDLENBQUNZLGlCQUFpQixDQUFDO1FBQy9ESixNQUFNLENBQUNLLFdBQVcsR0FBR2QsSUFBSSxDQUFDRSxPQUFPLENBQUNELENBQUMsQ0FBQyxDQUFDYyxZQUFZOztRQUVqRDtRQUNBLE1BQU1DLFlBQVksR0FBR04sUUFBUSxDQUFDTyxjQUFjLENBQUMsZUFBZSxDQUFDO1FBQzdERCxZQUFZLENBQUNFLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDO01BQ2xDO0lBQ0Y7RUFDRixDQUFDLENBQUMsQ0FDRFUsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDaEJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7QUFFRDs7QUFFTyxNQUFNRSxpQkFBaUIsR0FBRyxrQkFBa0I7RUFDakRaLFFBQVEsQ0FBQ08sY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDTSxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0FBQ2pFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvc2NyaXB0cy9zaWRlYmFyX2hlbHBlci5qcz9mZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcm9wZG93bk1ha2VyID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCB1cmwgPVxuICAgIFwiaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL25hbWVzLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiO1xuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmtpbmcgaXNzdWUuLi5jb3VsZG4ndCBtYWtlIGRyb3Bkb3duIG1lbnUgOi9cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFxuICAgICAgICAvLyBPTkxZIElOQ0xVREUgQk9PSyBBUyBBTiBPUFRJT04gSUYgSVQgV0FTIFBVQkxJU0hFRCBUSElTIFlFQVJcbiAgICAgICAgbGV0IG5ld2VzdFB1Ymxpc2hlZERhdGUgPSBkYXRhLnJlc3VsdHNbaV0ubmV3ZXN0X3B1Ymxpc2hlZF9kYXRlO1xuICAgICAgICBsZXQgbmV3ZXN0UHVibGlzaGVkWWVhciA9IHBhcnNlSW50KG5ld2VzdFB1Ymxpc2hlZERhdGUuc2xpY2UoMCwgNCkpO1xuXG4gICAgICAgIGlmIChuZXdlc3RQdWJsaXNoZWRZZWFyID49IDIwMjIpIHtcbiAgICAgICAgICAvLyBNQUtJTkcgT1BUSU9OXG4gICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaXN0LW9wdGlvblwiKTtcbiAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgZGF0YS5yZXN1bHRzW2ldLmxpc3RfbmFtZV9lbmNvZGVkKTtcbiAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnJlc3VsdHNbaV0uZGlzcGxheV9uYW1lO1xuXG4gICAgICAgICAgLy8gQVBQRU5ESU5HIE9QVElPTiBUTyBTRUxFQ1RcbiAgICAgICAgICBjb25zdCBsaXN0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtc2VsZWN0b3JcIik7XG4gICAgICAgICAgbGlzdFNlbGVjdG9yLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufTtcblxuLy8gZnVuY3Rpb24gdG8gc2V0IGRlZmF1bHQgZGF0ZSBhcyB0b2RheSBvbiBkYXRlIGZvcm1cblxuZXhwb3J0IGNvbnN0IGRlZmF1bHREYXRlU2V0dGVyID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGUtcGlja2VyXCIpLnZhbHVlQXNEYXRlID0gbmV3IERhdGUoKTtcbn07XG4iXSwibmFtZXMiOlsiZHJvcGRvd25NYWtlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiaSIsInJlc3VsdHMiLCJsZW5ndGgiLCJuZXdlc3RQdWJsaXNoZWREYXRlIiwibmV3ZXN0X3B1Ymxpc2hlZF9kYXRlIiwibmV3ZXN0UHVibGlzaGVkWWVhciIsInBhcnNlSW50Iiwic2xpY2UiLCJvcHRpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJsaXN0X25hbWVfZW5jb2RlZCIsInRleHRDb250ZW50IiwiZGlzcGxheV9uYW1lIiwibGlzdFNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGVmYXVsdERhdGVTZXR0ZXIiLCJ2YWx1ZUFzRGF0ZSIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sidebar_helper.js\n");

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