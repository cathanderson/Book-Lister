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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/data_fetcher */ \"./src/scripts/data_fetcher.js\");\n/* harmony import */ var _scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/card_filler */ \"./src/scripts/card_filler.js\");\n/* harmony import */ var _scripts_sidebar_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/sidebar_helper */ \"./src/scripts/sidebar_helper.js\");\n\n\n\n_scripts_sidebar_helper__WEBPACK_IMPORTED_MODULE_2__.dropdownMaker();\n_scripts_sidebar_helper__WEBPACK_IMPORTED_MODULE_2__.defaultDateSetter();\n_scripts_data_fetcher__WEBPACK_IMPORTED_MODULE_0__.dataFetcher();\nconst searchForm = document.getElementById(\"search-form\");\nsearchForm.addEventListener(\"submit\", e => {\n  e.preventDefault();\n  let selectedList = e.target.elements[0].value;\n  let selectedDate = e.target.elements[1].value;\n  //   console.log(e.target.elements);\n\n  fetch(`https://api.nytimes.com/svc/books/v3/lists/${selectedDate}/${selectedList}.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z`).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue :/\");\n    }\n    return response.json();\n  }).then(data => {\n    for (let i = 0; i < data.results.books.length; i++) {\n      // MAKING CARD\n      const card = document.createElement(\"div\");\n      card.setAttribute(\"id\", `card-${i + 1}`);\n      card.setAttribute(\"class\", \"card\");\n\n      // APPENDING CARD TO MAIN SECTION\n      const cardHolder = document.getElementById(\"card-holder\");\n      cardHolder.appendChild(card);\n\n      // CARD FLIPPER\n      card.addEventListener(\"click\", e => {\n        card.classList.toggle(\"is-flipped\");\n      });\n    }\n    data.results.books.forEach((book, i) => {\n      _scripts_card_filler__WEBPACK_IMPORTED_MODULE_1__.cardFiller(book, i);\n    });\n  }).catch(error => {\n    console.error(error);\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUF5RDtBQUNGO0FBQ007QUFFN0RFLGtFQUE4QixFQUFFO0FBQ2hDQSxzRUFBa0MsRUFBRTtBQUNwQ0YsOERBQTBCLEVBQUU7QUFFNUIsTUFBTU0sVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7QUFFekRGLFVBQVUsQ0FBQ0csZ0JBQWdCLENBQUMsUUFBUSxFQUFHQyxDQUFDLElBQUs7RUFDM0NBLENBQUMsQ0FBQ0MsY0FBYyxFQUFFO0VBQ2xCLElBQUlDLFlBQVksR0FBR0YsQ0FBQyxDQUFDRyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQ0MsS0FBSztFQUM3QyxJQUFJQyxZQUFZLEdBQUdOLENBQUMsQ0FBQ0csTUFBTSxDQUFDQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUs7RUFDN0M7O0VBRUFFLEtBQUssQ0FDRiw4Q0FBNkNELFlBQWEsSUFBR0osWUFBYSxnREFBK0MsQ0FDM0gsQ0FDRU0sSUFBSSxDQUFFQyxRQUFRLElBQUs7SUFDbEIsSUFBSSxDQUFDQSxRQUFRLENBQUNDLEVBQUUsRUFBRTtNQUNoQixNQUFNLElBQUlDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQztJQUN4QztJQUNBLE9BQU9GLFFBQVEsQ0FBQ0csSUFBSSxFQUFFO0VBQ3hCLENBQUMsQ0FBQyxDQUNESixJQUFJLENBQUVLLElBQUksSUFBSztJQUNkLEtBQUssSUFBSUMsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHRCxJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxNQUFNLEVBQUVILENBQUMsRUFBRSxFQUFFO01BQ2xEO01BQ0EsTUFBTUksSUFBSSxHQUFHckIsUUFBUSxDQUFDc0IsYUFBYSxDQUFDLEtBQUssQ0FBQztNQUMxQ0QsSUFBSSxDQUFDRSxZQUFZLENBQUMsSUFBSSxFQUFHLFFBQU9OLENBQUMsR0FBRyxDQUFFLEVBQUMsQ0FBQztNQUN4Q0ksSUFBSSxDQUFDRSxZQUFZLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQzs7TUFFbEM7TUFDQSxNQUFNQyxVQUFVLEdBQUd4QixRQUFRLENBQUNDLGNBQWMsQ0FBQyxhQUFhLENBQUM7TUFDekR1QixVQUFVLENBQUNDLFdBQVcsQ0FBQ0osSUFBSSxDQUFDOztNQUU1QjtNQUNBQSxJQUFJLENBQUNuQixnQkFBZ0IsQ0FBQyxPQUFPLEVBQUdDLENBQUMsSUFBSztRQUNwQ2tCLElBQUksQ0FBQ0ssU0FBUyxDQUFDQyxNQUFNLENBQUMsWUFBWSxDQUFDO01BQ3JDLENBQUMsQ0FBQztJQUNKO0lBQ0FYLElBQUksQ0FBQ0UsT0FBTyxDQUFDQyxLQUFLLENBQUNTLE9BQU8sQ0FBQyxDQUFDQyxJQUFJLEVBQUVaLENBQUMsS0FBSztNQUN0Q3ZCLDREQUF3QixDQUFDbUMsSUFBSSxFQUFFWixDQUFDLENBQUM7SUFDbkMsQ0FBQyxDQUFDO0VBQ0osQ0FBQyxDQUFDLENBQ0RjLEtBQUssQ0FBRUMsS0FBSyxJQUFLO0lBQ2hCQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL255dF9ib29rcy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGFsbERhdGFGZXRjaGVyIGZyb20gXCIuL3NjcmlwdHMvZGF0YV9mZXRjaGVyXCI7XG5pbXBvcnQgKiBhcyBhbGxDYXJkRmlsbGVyIGZyb20gXCIuL3NjcmlwdHMvY2FyZF9maWxsZXJcIjtcbmltcG9ydCAqIGFzIGFsbFNpZGViYXJIZWxwZXIgZnJvbSBcIi4vc2NyaXB0cy9zaWRlYmFyX2hlbHBlclwiO1xuXG5hbGxTaWRlYmFySGVscGVyLmRyb3Bkb3duTWFrZXIoKTtcbmFsbFNpZGViYXJIZWxwZXIuZGVmYXVsdERhdGVTZXR0ZXIoKTtcbmFsbERhdGFGZXRjaGVyLmRhdGFGZXRjaGVyKCk7XG5cbmNvbnN0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaC1mb3JtXCIpO1xuXG5zZWFyY2hGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgc2VsZWN0ZWRMaXN0ID0gZS50YXJnZXQuZWxlbWVudHNbMF0udmFsdWU7XG4gIGxldCBzZWxlY3RlZERhdGUgPSBlLnRhcmdldC5lbGVtZW50c1sxXS52YWx1ZTtcbiAgLy8gICBjb25zb2xlLmxvZyhlLnRhcmdldC5lbGVtZW50cyk7XG5cbiAgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy8ke3NlbGVjdGVkRGF0ZX0vJHtzZWxlY3RlZExpc3R9Lmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WmBcbiAgKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOZXR3b3JraW5nIGlzc3VlIDovXCIpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucmVzdWx0cy5ib29rcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBNQUtJTkcgQ0FSRFxuICAgICAgICBjb25zdCBjYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2FyZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBgY2FyZC0ke2kgKyAxfWApO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2FyZFwiKTtcblxuICAgICAgICAvLyBBUFBFTkRJTkcgQ0FSRCBUTyBNQUlOIFNFQ1RJT05cbiAgICAgICAgY29uc3QgY2FyZEhvbGRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FyZC1ob2xkZXJcIik7XG4gICAgICAgIGNhcmRIb2xkZXIuYXBwZW5kQ2hpbGQoY2FyZCk7XG5cbiAgICAgICAgLy8gQ0FSRCBGTElQUEVSXG4gICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgY2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtZmxpcHBlZFwiKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBkYXRhLnJlc3VsdHMuYm9va3MuZm9yRWFjaCgoYm9vaywgaSkgPT4ge1xuICAgICAgICBhbGxDYXJkRmlsbGVyLmNhcmRGaWxsZXIoYm9vaywgaSk7XG4gICAgICB9KTtcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pO1xufSk7XG4iXSwibmFtZXMiOlsiYWxsRGF0YUZldGNoZXIiLCJhbGxDYXJkRmlsbGVyIiwiYWxsU2lkZWJhckhlbHBlciIsImRyb3Bkb3duTWFrZXIiLCJkZWZhdWx0RGF0ZVNldHRlciIsImRhdGFGZXRjaGVyIiwic2VhcmNoRm9ybSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0Iiwic2VsZWN0ZWRMaXN0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInNlbGVjdGVkRGF0ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiaSIsInJlc3VsdHMiLCJib29rcyIsImxlbmd0aCIsImNhcmQiLCJjcmVhdGVFbGVtZW50Iiwic2V0QXR0cmlidXRlIiwiY2FyZEhvbGRlciIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImJvb2siLCJjYXJkRmlsbGVyIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataFetcher\": function() { return /* binding */ dataFetcher; }\n/* harmony export */ });\n/* harmony import */ var _card_filler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card_filler */ \"./src/scripts/card_filler.js\");\n\n\n// NYT request root URL: https://api.nytimes.com/svc/books/v3\n// NYT Books API Key: \"P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\"\n// To get all lists: https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n// the above returns 29 weekly lists and 30 monthly lists (59 total)\n\n// below is an example call using GET /lists/{date}/{list}.json\n// dates are entered YYYY-MM-DD or \"current\" (AS STRINGS) and list names are pulled from the list name above (also as strings)\n// https://api.nytimes.com/svc/books/v3/lists/2022-08-11/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\n\n// data we need:\n// front of card:\n// book_image\n// title (need a titleize function lol)\n// author\n// rank\n// weeks_on_list\n// back of card:\n// description\n// buy_links[5].url (buy_links is an array of 6 vendors, choose the 5th ele for indiebound and select url from subarr )\n// book_review_link -- JK- this is almost always null, so we're skipping it\n\nconst dataFetcher = async function () {\n  // pass in date (plus default of current) and list (and default) params?\n  const url =\n  // then interpolate params into here?\n  \"https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue :/\");\n    }\n    return response.json();\n  }).then(data => {\n    for (let i = 0; i < data.results.books.length; i++) {\n      // MAKING CARD\n      const card = document.createElement(\"div\");\n      card.setAttribute(\"id\", `card-${i + 1}`);\n      card.setAttribute(\"class\", \"card\");\n\n      // APPENDING CARD TO MAIN SECTION\n      const cardHolder = document.getElementById(\"card-holder\");\n      cardHolder.appendChild(card);\n\n      // CARD FLIPPER\n      card.addEventListener(\"click\", e => {\n        card.classList.toggle(\"is-flipped\");\n      });\n    }\n    data.results.books.forEach((book, i) => {\n      _card_filler__WEBPACK_IMPORTED_MODULE_0__.cardFiller(book, i);\n    });\n  }).catch(error => {\n    console.error(error);\n  });\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9kYXRhX2ZldGNoZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPLE1BQU1DLFdBQVcsR0FBRyxrQkFBa0I7RUFDM0M7RUFDQSxNQUFNQyxHQUFHO0VBQUc7RUFDVixvSEFBb0g7RUFDdEhDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQ1BFLElBQUksQ0FBRUMsUUFBUSxJQUFLO0lBQ2xCLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFFLEVBQUU7TUFDaEIsTUFBTSxJQUFJQyxLQUFLLENBQUMscUJBQXFCLENBQUM7SUFDeEM7SUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksRUFBRTtFQUN4QixDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFFSyxJQUFJLElBQUs7SUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLENBQUNDLEtBQUssQ0FBQ0MsTUFBTSxFQUFFSCxDQUFDLEVBQUUsRUFBRTtNQUNsRDtNQUNBLE1BQU1JLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsS0FBSyxDQUFDO01BQzFDRixJQUFJLENBQUNHLFlBQVksQ0FBQyxJQUFJLEVBQUcsUUFBT1AsQ0FBQyxHQUFHLENBQUUsRUFBQyxDQUFDO01BQ3hDSSxJQUFJLENBQUNHLFlBQVksQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDOztNQUVsQztNQUNBLE1BQU1DLFVBQVUsR0FBR0gsUUFBUSxDQUFDSSxjQUFjLENBQUMsYUFBYSxDQUFDO01BQ3pERCxVQUFVLENBQUNFLFdBQVcsQ0FBQ04sSUFBSSxDQUFDOztNQUU1QjtNQUNBQSxJQUFJLENBQUNPLGdCQUFnQixDQUFDLE9BQU8sRUFBR0MsQ0FBQyxJQUFLO1FBQ3BDUixJQUFJLENBQUNTLFNBQVMsQ0FBQ0MsTUFBTSxDQUFDLFlBQVksQ0FBQztNQUNyQyxDQUFDLENBQUM7SUFDSjtJQUNBZixJQUFJLENBQUNFLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDYSxPQUFPLENBQUMsQ0FBQ0MsSUFBSSxFQUFFaEIsQ0FBQyxLQUFLO01BQ3RDVixvREFBd0IsQ0FBQzBCLElBQUksRUFBRWhCLENBQUMsQ0FBQztJQUNuQyxDQUFDLENBQUM7RUFDSixDQUFDLENBQUMsQ0FDRGtCLEtBQUssQ0FBRUMsS0FBSyxJQUFLO0lBQ2hCQyxPQUFPLENBQUNELEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0VBQ3RCLENBQUMsQ0FBQztBQUNOLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvc2NyaXB0cy9kYXRhX2ZldGNoZXIuanM/Nzk3MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBhbGxDYXJkRmlsbGVyIGZyb20gXCIuL2NhcmRfZmlsbGVyXCI7XG5cbi8vIE5ZVCByZXF1ZXN0IHJvb3QgVVJMOiBodHRwczovL2FwaS5ueXRpbWVzLmNvbS9zdmMvYm9va3MvdjNcbi8vIE5ZVCBCb29rcyBBUEkgS2V5OiBcIlA4cGNiMmRnbkdGOVlpT3M2dkdPMkFUU2xKdkRsNzhaXCJcbi8vIFRvIGdldCBhbGwgbGlzdHM6IGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy9uYW1lcy5qc29uP2FwaS1rZXk9UDhwY2IyZGduR0Y5WWlPczZ2R08yQVRTbEp2RGw3OFpcbi8vIHRoZSBhYm92ZSByZXR1cm5zIDI5IHdlZWtseSBsaXN0cyBhbmQgMzAgbW9udGhseSBsaXN0cyAoNTkgdG90YWwpXG5cbi8vIGJlbG93IGlzIGFuIGV4YW1wbGUgY2FsbCB1c2luZyBHRVQgL2xpc3RzL3tkYXRlfS97bGlzdH0uanNvblxuLy8gZGF0ZXMgYXJlIGVudGVyZWQgWVlZWS1NTS1ERCBvciBcImN1cnJlbnRcIiAoQVMgU1RSSU5HUykgYW5kIGxpc3QgbmFtZXMgYXJlIHB1bGxlZCBmcm9tIHRoZSBsaXN0IG5hbWUgYWJvdmUgKGFsc28gYXMgc3RyaW5ncylcbi8vIGh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy8yMDIyLTA4LTExL2hhcmRjb3Zlci1maWN0aW9uLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlxuXG4vLyBkYXRhIHdlIG5lZWQ6XG4vLyBmcm9udCBvZiBjYXJkOlxuLy8gYm9va19pbWFnZVxuLy8gdGl0bGUgKG5lZWQgYSB0aXRsZWl6ZSBmdW5jdGlvbiBsb2wpXG4vLyBhdXRob3Jcbi8vIHJhbmtcbi8vIHdlZWtzX29uX2xpc3Rcbi8vIGJhY2sgb2YgY2FyZDpcbi8vIGRlc2NyaXB0aW9uXG4vLyBidXlfbGlua3NbNV0udXJsIChidXlfbGlua3MgaXMgYW4gYXJyYXkgb2YgNiB2ZW5kb3JzLCBjaG9vc2UgdGhlIDV0aCBlbGUgZm9yIGluZGllYm91bmQgYW5kIHNlbGVjdCB1cmwgZnJvbSBzdWJhcnIgKVxuLy8gYm9va19yZXZpZXdfbGluayAtLSBKSy0gdGhpcyBpcyBhbG1vc3QgYWx3YXlzIG51bGwsIHNvIHdlJ3JlIHNraXBwaW5nIGl0XG5cbmV4cG9ydCBjb25zdCBkYXRhRmV0Y2hlciA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgLy8gcGFzcyBpbiBkYXRlIChwbHVzIGRlZmF1bHQgb2YgY3VycmVudCkgYW5kIGxpc3QgKGFuZCBkZWZhdWx0KSBwYXJhbXM/XG4gIGNvbnN0IHVybCA9IC8vIHRoZW4gaW50ZXJwb2xhdGUgcGFyYW1zIGludG8gaGVyZT9cbiAgICBcImh0dHBzOi8vYXBpLm55dGltZXMuY29tL3N2Yy9ib29rcy92My9saXN0cy9jdXJyZW50L2hhcmRjb3Zlci1maWN0aW9uLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiO1xuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmtpbmcgaXNzdWUgOi9cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmJvb2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE1BS0lORyBDQVJEXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIGBjYXJkLSR7aSArIDF9YCk7XG4gICAgICAgIGNhcmQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjYXJkXCIpO1xuXG4gICAgICAgIC8vIEFQUEVORElORyBDQVJEIFRPIE1BSU4gU0VDVElPTlxuICAgICAgICBjb25zdCBjYXJkSG9sZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXJkLWhvbGRlclwiKTtcbiAgICAgICAgY2FyZEhvbGRlci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICAvLyBDQVJEIEZMSVBQRVJcbiAgICAgICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICAgICAgICBjYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1mbGlwcGVkXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGRhdGEucmVzdWx0cy5ib29rcy5mb3JFYWNoKChib29rLCBpKSA9PiB7XG4gICAgICAgIGFsbENhcmRGaWxsZXIuY2FyZEZpbGxlcihib29rLCBpKTtcbiAgICAgIH0pO1xuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59O1xuIl0sIm5hbWVzIjpbImFsbENhcmRGaWxsZXIiLCJkYXRhRmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiaSIsInJlc3VsdHMiLCJib29rcyIsImxlbmd0aCIsImNhcmQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJjYXJkSG9sZGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiZm9yRWFjaCIsImJvb2siLCJjYXJkRmlsbGVyIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/data_fetcher.js\n");

/***/ }),

/***/ "./src/scripts/sidebar_helper.js":
/*!***************************************!*\
  !*** ./src/scripts/sidebar_helper.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"defaultDateSetter\": function() { return /* binding */ defaultDateSetter; },\n/* harmony export */   \"dropdownMaker\": function() { return /* binding */ dropdownMaker; }\n/* harmony export */ });\nconst dropdownMaker = async function () {\n  // pass in date (plus default of current) and list (and default) params?\n  const url =\n  // then interpolate params into here?\n  \"https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=P8pcb2dgnGF9YiOs6vGO2ATSlJvDl78Z\";\n  fetch(url).then(response => {\n    if (!response.ok) {\n      throw new Error(\"Networking issue...couldn't make dropdown menu :/\");\n    }\n    return response.json();\n  }).then(data => {\n    for (let i = 0; i < data.results.length; i++) {\n      // MAKING OPTION\n      const option = document.createElement(\"option\");\n      option.setAttribute(\"class\", \"list-option\");\n      option.setAttribute(\"value\", data.results[i].list_name_encoded);\n      option.textContent = data.results[i].display_name;\n\n      // APPENDING CARD TO SELECT\n      const listSelector = document.getElementById(\"list-selector\");\n      listSelector.appendChild(option);\n\n      // // LIST SELECTOR LISTENER\n      // option.addEventListener(\"click\", (e) => {\n      //   console.log('you selected a list')\n      //   // option.classList.toggle(\"is-selected-list\");\n      // });\n    }\n  }).catch(error => {\n    console.error(error);\n  });\n};\n\n// function to set default date as today on date form\n\nconst defaultDateSetter = async function () {\n  document.getElementById(\"date-picker\").valueAsDate = new Date();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaWRlYmFyX2hlbHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLGFBQWEsR0FBRyxrQkFBa0I7RUFDN0M7RUFDQSxNQUFNQyxHQUFHO0VBQUc7RUFDVixnR0FBZ0c7RUFDbEdDLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQ1BFLElBQUksQ0FBRUMsUUFBUSxJQUFLO0lBQ2xCLElBQUksQ0FBQ0EsUUFBUSxDQUFDQyxFQUFFLEVBQUU7TUFDaEIsTUFBTSxJQUFJQyxLQUFLLENBQUMsbURBQW1ELENBQUM7SUFDdEU7SUFDQSxPQUFPRixRQUFRLENBQUNHLElBQUksRUFBRTtFQUN4QixDQUFDLENBQUMsQ0FDREosSUFBSSxDQUFFSyxJQUFJLElBQUs7SUFDZCxLQUFLLElBQUlDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0QsSUFBSSxDQUFDRSxPQUFPLENBQUNDLE1BQU0sRUFBRUYsQ0FBQyxFQUFFLEVBQUU7TUFDNUM7TUFDQSxNQUFNRyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztNQUMvQ0YsTUFBTSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQztNQUMzQ0gsTUFBTSxDQUFDRyxZQUFZLENBQUMsT0FBTyxFQUFFUCxJQUFJLENBQUNFLE9BQU8sQ0FBQ0QsQ0FBQyxDQUFDLENBQUNPLGlCQUFpQixDQUFDO01BQy9ESixNQUFNLENBQUNLLFdBQVcsR0FBR1QsSUFBSSxDQUFDRSxPQUFPLENBQUNELENBQUMsQ0FBQyxDQUFDUyxZQUFZOztNQUVqRDtNQUNBLE1BQU1DLFlBQVksR0FBR04sUUFBUSxDQUFDTyxjQUFjLENBQUMsZUFBZSxDQUFDO01BQzdERCxZQUFZLENBQUNFLFdBQVcsQ0FBQ1QsTUFBTSxDQUFDOztNQUVoQztNQUNBO01BQ0E7TUFDQTtNQUNBO0lBQ0Y7RUFDRixDQUFDLENBQUMsQ0FDRFUsS0FBSyxDQUFFQyxLQUFLLElBQUs7SUFDaEJDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDQSxLQUFLLENBQUM7RUFDdEIsQ0FBQyxDQUFDO0FBQ04sQ0FBQzs7QUFHRDs7QUFFTyxNQUFNRSxpQkFBaUIsR0FBRyxrQkFBa0I7RUFDakRaLFFBQVEsQ0FBQ08sY0FBYyxDQUFDLGFBQWEsQ0FBQyxDQUFDTSxXQUFXLEdBQUcsSUFBSUMsSUFBSSxFQUFFO0FBRWpFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ueXRfYm9va3MvLi9zcmMvc2NyaXB0cy9zaWRlYmFyX2hlbHBlci5qcz9mZDEwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkcm9wZG93bk1ha2VyID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICAvLyBwYXNzIGluIGRhdGUgKHBsdXMgZGVmYXVsdCBvZiBjdXJyZW50KSBhbmQgbGlzdCAoYW5kIGRlZmF1bHQpIHBhcmFtcz9cbiAgY29uc3QgdXJsID0gLy8gdGhlbiBpbnRlcnBvbGF0ZSBwYXJhbXMgaW50byBoZXJlP1xuICAgIFwiaHR0cHM6Ly9hcGkubnl0aW1lcy5jb20vc3ZjL2Jvb2tzL3YzL2xpc3RzL25hbWVzLmpzb24/YXBpLWtleT1QOHBjYjJkZ25HRjlZaU9zNnZHTzJBVFNsSnZEbDc4WlwiO1xuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5ldHdvcmtpbmcgaXNzdWUuLi5jb3VsZG4ndCBtYWtlIGRyb3Bkb3duIG1lbnUgOi9cIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pXG4gICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5yZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIE1BS0lORyBPUFRJT05cbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibGlzdC1vcHRpb25cIik7XG4gICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBkYXRhLnJlc3VsdHNbaV0ubGlzdF9uYW1lX2VuY29kZWQpO1xuICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLnJlc3VsdHNbaV0uZGlzcGxheV9uYW1lO1xuXG4gICAgICAgIC8vIEFQUEVORElORyBDQVJEIFRPIFNFTEVDVFxuICAgICAgICBjb25zdCBsaXN0U2VsZWN0b3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxpc3Qtc2VsZWN0b3JcIik7XG4gICAgICAgIGxpc3RTZWxlY3Rvci5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgICAgIC8vIC8vIExJU1QgU0VMRUNUT1IgTElTVEVORVJcbiAgICAgICAgLy8gb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKCd5b3Ugc2VsZWN0ZWQgYSBsaXN0JylcbiAgICAgICAgLy8gICAvLyBvcHRpb24uY2xhc3NMaXN0LnRvZ2dsZShcImlzLXNlbGVjdGVkLWxpc3RcIik7XG4gICAgICAgIC8vIH0pO1xuICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSk7XG59O1xuXG5cbi8vIGZ1bmN0aW9uIHRvIHNldCBkZWZhdWx0IGRhdGUgYXMgdG9kYXkgb24gZGF0ZSBmb3JtXG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0RGF0ZVNldHRlciA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlLXBpY2tlclwiKS52YWx1ZUFzRGF0ZSA9IG5ldyBEYXRlKCk7XG5cbn0iXSwibmFtZXMiOlsiZHJvcGRvd25NYWtlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwib2siLCJFcnJvciIsImpzb24iLCJkYXRhIiwiaSIsInJlc3VsdHMiLCJsZW5ndGgiLCJvcHRpb24iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJsaXN0X25hbWVfZW5jb2RlZCIsInRleHRDb250ZW50IiwiZGlzcGxheV9uYW1lIiwibGlzdFNlbGVjdG9yIiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGVmYXVsdERhdGVTZXR0ZXIiLCJ2YWx1ZUFzRGF0ZSIsIkRhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/sidebar_helper.js\n");

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