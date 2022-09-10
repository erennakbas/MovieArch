/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/edit-movie/[id]";
exports.ids = ["pages/edit-movie/[id]"];
exports.modules = {

/***/ "./pages/edit-movie/[id]/index.js":
/*!****************************************!*\
  !*** ./pages/edit-movie/[id]/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ \"./pages/edit-movie/[id]/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! form-serialize */ \"form-serialize\");\n/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_movieSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store/slices/movieSlice */ \"./store/slices/movieSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\react\\\\my-app\\\\pages\\\\edit-movie\\\\[id]\\\\index.js\";\n\n\n\n\n\n\n\n\n\nconst MovieEditor = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.movieList.movies);\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  let {\n    id\n  } = router.query;\n  id = parseInt(id);\n  const index = movies.findIndex(m => m.id === id);\n  const movie = movies[index];\n\n  async function editMovie(id, index, updatedMovie) {\n    await axios__WEBPACK_IMPORTED_MODULE_5___default().put(`http://localhost:3002/movies/${id}`, updatedMovie);\n    const newMovieList = movies.slice();\n    newMovieList[index] = updatedMovie;\n    dispatch((0,_store_slices_movieSlice__WEBPACK_IMPORTED_MODULE_4__.setMovies)(newMovieList));\n  }\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    const updatedMovie = form_serialize__WEBPACK_IMPORTED_MODULE_2___default()(event.target, {\n      hash: true\n    });\n    updatedMovie.id = id;\n    updatedMovie.genre_ids = movie.genre_ids;\n    editMovie(id, index, updatedMovie);\n    router.push('/');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"form\", {\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().form__header),\n      children: \"Edit the form to update your movie.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title_overview__wrapper),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"flex-grow\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          className: \"text-gray-700\",\n          children: \"Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          type: \"text\",\n          defaultValue: movie.title,\n          name: \"title\",\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          className: \"text-gray-700\",\n          children: \"Rating\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          type: \"text\",\n          defaultValue: movie.vote_average,\n          name: \"vote_average\",\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().rating),\n          placeholder: \"7.9\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n        className: \"text-gray-700\",\n        children: \"Image URL\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 47,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        type: \"text\",\n        defaultValue: movie.poster_path,\n        name: \"poster_path\",\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().img__url),\n        placeholder: \"Example.com/example.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n        className: \"text-gray-700\",\n        children: \"Overview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"textarea\", {\n        defaultValue: movie.overview,\n        name: \"overview\",\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().text__area),\n        rows: \"4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().button__apply),\n      children: \"Apply changes\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieEditor);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SixlQVlJO01BQUEsd0JBQ0k7UUFBTSxTQUFTLEVBQUMsZUFBaEI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFESixlQUVJO1FBQU8sSUFBSSxFQUFDLE1BQVo7UUFBbUIsWUFBWSxFQUFFbUIsS0FBSyxDQUFDbUIsV0FBdkM7UUFBb0QsSUFBSSxFQUFFLGFBQTFEO1FBQXdFLFNBQVMsRUFBRXRDLG1FQUFuRjtRQUFvRyxXQUFXLEVBQUM7TUFBaEg7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQVpKLGVBZ0JJO01BQUEsd0JBQ0k7UUFBTSxTQUFTLEVBQUMsZUFBaEI7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFESixlQUVJO1FBQVUsWUFBWSxFQUFFbUIsS0FBSyxDQUFDcUIsUUFBOUI7UUFBd0MsSUFBSSxFQUFDLFVBQTdDO1FBQXdELFNBQVMsRUFBRXhDLHFFQUFuRTtRQUFzRixJQUFJLEVBQUM7TUFBM0Y7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQUZKO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQSxhQWhCSixlQW9CSTtNQUFRLElBQUksRUFBQyxRQUFiO01BQXNCLFNBQVMsRUFBRUEsd0VBQWpDO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBcEJKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURKO0FBd0JILENBaEREOztBQWtEQSxpRUFBZU8sV0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2VkaXQtbW92aWUvW2lkXS9pbmRleC5qcz81NzdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBzZXJpYWxpemUgZnJvbSAnZm9ybS1zZXJpYWxpemUnO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7c2V0TW92aWVzfSBmcm9tICcuLi8uLi8uLi9zdG9yZS9zbGljZXMvbW92aWVTbGljZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG5jb25zdCBNb3ZpZUVkaXRvciA9ICgpID0+e1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICAgIGNvbnN0IG1vdmllcyA9IHVzZVNlbGVjdG9yKChzdGF0ZSk9PnN0YXRlLm1vdmllTGlzdC5tb3ZpZXMpO1xyXG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xyXG4gICAgbGV0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICAgIGlkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgY29uc3QgaW5kZXggPSBtb3ZpZXMuZmluZEluZGV4KG0gPT4gbS5pZCA9PT0gaWQpO1xyXG4gICAgY29uc3QgbW92aWUgPSBtb3ZpZXNbaW5kZXhdO1xyXG4gICAgXHJcbiAgICBhc3luYyBmdW5jdGlvbiBlZGl0TW92aWUoaWQsaW5kZXgsdXBkYXRlZE1vdmllKXtcclxuICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMi9tb3ZpZXMvJHtpZH1gLCB1cGRhdGVkTW92aWUpO1xyXG4gICAgICAgIGNvbnN0IG5ld01vdmllTGlzdCA9IG1vdmllcy5zbGljZSgpO1xyXG4gICAgICAgIG5ld01vdmllTGlzdFtpbmRleF0gPSB1cGRhdGVkTW92aWU7XHJcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKG5ld01vdmllTGlzdCkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgdXBkYXRlZE1vdmllID0gc2VyaWFsaXplKGV2ZW50LnRhcmdldCwge2hhc2g6dHJ1ZX0pO1xyXG4gICAgICAgIHVwZGF0ZWRNb3ZpZS5pZCA9IGlkO1xyXG4gICAgICAgIHVwZGF0ZWRNb3ZpZS5nZW5yZV9pZHMgPSBtb3ZpZS5nZW5yZV9pZHM7XHJcbiAgICAgICAgZWRpdE1vdmllKGlkLGluZGV4LHVwZGF0ZWRNb3ZpZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKTtcclxuICAgIH1cclxuICAgIHJldHVybihcclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtfSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9faGVhZGVyfT5FZGl0IHRoZSBmb3JtIHRvIHVwZGF0ZSB5b3VyIG1vdmllLjwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVfb3ZlcnZpZXdfX3dyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+TmFtZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBkZWZhdWx0VmFsdWU9e21vdmllLnRpdGxlfSBuYW1lPVwidGl0bGVcIiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0vPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5SYXRpbmc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgZGVmYXVsdFZhbHVlPXttb3ZpZS52b3RlX2F2ZXJhZ2V9IG5hbWU9XCJ2b3RlX2F2ZXJhZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmd9IHBsYWNlaG9sZGVyPVwiNy45XCIvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPkltYWdlIFVSTDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGRlZmF1bHRWYWx1ZT17bW92aWUucG9zdGVyX3BhdGh9IG5hbWU9IFwicG9zdGVyX3BhdGhcIiBjbGFzc05hbWU9e3N0eWxlcy5pbWdfX3VybH0gcGxhY2Vob2xkZXI9XCJFeGFtcGxlLmNvbS9leGFtcGxlLmpwZ1wiLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNzAwXCI+T3ZlcnZpZXc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgZGVmYXVsdFZhbHVlPXttb3ZpZS5vdmVydmlld30gbmFtZT1cIm92ZXJ2aWV3XCIgY2xhc3NOYW1lPXtzdHlsZXMudGV4dF9fYXJlYX0gcm93cz1cIjRcIiA+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl9fYXBwbHl9PkFwcGx5IGNoYW5nZXM8L2J1dHRvbj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllRWRpdG9yOyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsInVzZVJvdXRlciIsInNlcmlhbGl6ZSIsInVzZVNlbGVjdG9yIiwidXNlRGlzcGF0Y2giLCJzZXRNb3ZpZXMiLCJheGlvcyIsIk1vdmllRWRpdG9yIiwicm91dGVyIiwibW92aWVzIiwic3RhdGUiLCJtb3ZpZUxpc3QiLCJkaXNwYXRjaCIsImlkIiwicXVlcnkiLCJwYXJzZUludCIsImluZGV4IiwiZmluZEluZGV4IiwibSIsIm1vdmllIiwiZWRpdE1vdmllIiwidXBkYXRlZE1vdmllIiwicHV0IiwibmV3TW92aWVMaXN0Iiwic2xpY2UiLCJoYW5kbGVTdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiaGFzaCIsImdlbnJlX2lkcyIsInB1c2giLCJmb3JtIiwiZm9ybV9faGVhZGVyIiwidGl0bGVfb3ZlcnZpZXdfX3dyYXBwZXIiLCJ0aXRsZSIsInZvdGVfYXZlcmFnZSIsInJhdGluZyIsInBvc3Rlcl9wYXRoIiwiaW1nX191cmwiLCJvdmVydmlldyIsInRleHRfX2FyZWEiLCJidXR0b25fX2FwcGx5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/edit-movie/[id]/index.js\n");

/***/ }),

/***/ "./store/slices/movieSlice.js":
/*!************************************!*\
  !*** ./store/slices/movieSlice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"movieSlice\": () => (/* binding */ movieSlice),\n/* harmony export */   \"setFilteredMovies\": () => (/* binding */ setFilteredMovies),\n/* harmony export */   \"setMovies\": () => (/* binding */ setMovies),\n/* harmony export */   \"setSearchQuery\": () => (/* binding */ setSearchQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  movies: [],\n  filteredMovies: [],\n  searchQuery: \"\"\n};\nconst movieSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'movie',\n  initialState,\n  reducers: {\n    setMovies: (state, action) => {\n      state.movies = action.payload;\n    },\n    setFilteredMovies: (state, action) => {\n      state.filteredMovies = action.payload;\n    },\n    setSearchQuery: (state, action) => {\n      state.searchQuery = action.payload;\n    }\n  }\n});\nconst {\n  setMovies,\n  setFilteredMovies,\n  setSearchQuery\n} = movieSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvbW92aWVTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxZQUFZLEdBQUc7RUFDbkJDLE1BQU0sRUFBQyxFQURZO0VBRW5CQyxjQUFjLEVBQUMsRUFGSTtFQUduQkMsV0FBVyxFQUFDO0FBSE8sQ0FBckI7QUFNTyxNQUFNQyxVQUFVLEdBQUdMLDZEQUFXLENBQUM7RUFDcENNLElBQUksRUFBRSxPQUQ4QjtFQUVwQ0wsWUFGb0M7RUFHcENNLFFBQVEsRUFBRTtJQUNSQyxTQUFTLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO01BQzVCRCxLQUFLLENBQUNQLE1BQU4sR0FBZVEsTUFBTSxDQUFDQyxPQUF0QjtJQUNELENBSE87SUFJUkMsaUJBQWlCLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO01BQ3BDRCxLQUFLLENBQUNOLGNBQU4sR0FBdUJPLE1BQU0sQ0FBQ0MsT0FBOUI7SUFDRCxDQU5PO0lBT1JFLGNBQWMsRUFBRSxDQUFDSixLQUFELEVBQVFDLE1BQVIsS0FBbUI7TUFDakNELEtBQUssQ0FBQ0wsV0FBTixHQUFvQk0sTUFBTSxDQUFDQyxPQUEzQjtJQUNEO0VBVE87QUFIMEIsQ0FBRCxDQUE5QjtBQWVBLE1BQU07RUFBRUgsU0FBRjtFQUFhSSxpQkFBYjtFQUFnQ0M7QUFBaEMsSUFBbURSLFVBQVUsQ0FBQ1MsT0FBcEU7QUFFUCxpRUFBZVQsVUFBVSxDQUFDVSxPQUExQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3N0b3JlL3NsaWNlcy9tb3ZpZVNsaWNlLmpzP2RmZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1vdmllczpbXSxcclxuICBmaWx0ZXJlZE1vdmllczpbXSxcclxuICBzZWFyY2hRdWVyeTpcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZpZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdtb3ZpZScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRNb3ZpZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLm1vdmllcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlcmVkTW92aWVzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZE1vdmllcyA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgc2V0U2VhcmNoUXVlcnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlYXJjaFF1ZXJ5ID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNvbnN0IHsgc2V0TW92aWVzLCBzZXRGaWx0ZXJlZE1vdmllcywgc2V0U2VhcmNoUXVlcnkgfSA9IG1vdmllU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW92aWVTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibW92aWVzIiwiZmlsdGVyZWRNb3ZpZXMiLCJzZWFyY2hRdWVyeSIsIm1vdmllU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRNb3ZpZXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRGaWx0ZXJlZE1vdmllcyIsInNldFNlYXJjaFF1ZXJ5IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/movieSlice.js\n");

/***/ }),

/***/ "./pages/edit-movie/[id]/index.module.css":
/*!************************************************!*\
  !*** ./pages/edit-movie/[id]/index.module.css ***!
  \************************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"_id__form__Ad9P9\",\n\t\"form__header\": \"_id__form__header__uQS4e\",\n\t\"title_rating__wrapper\": \"_id__title_rating__wrapper__1Oaam\",\n\t\"title\": \"_id__title__l5aQI\",\n\t\"rating\": \"_id__rating__cNo6s\",\n\t\"text__area\": \"_id__text__area__xHEbe\",\n\t\"img__url\": \"_id__img__url___wdzy\",\n\t\"button__apply\": \"_id__button__apply__LKAYx\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9lZGl0LW1vdmllL1tpZF0vaW5kZXgubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktYXBwLy4vcGFnZXMvZWRpdC1tb3ZpZS9baWRdL2luZGV4Lm1vZHVsZS5jc3M/N2FjYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJmb3JtXCI6IFwiX2lkX19mb3JtX19BZDlQOVwiLFxuXHRcImZvcm1fX2hlYWRlclwiOiBcIl9pZF9fZm9ybV9faGVhZGVyX191UVM0ZVwiLFxuXHRcInRpdGxlX3JhdGluZ19fd3JhcHBlclwiOiBcIl9pZF9fdGl0bGVfcmF0aW5nX193cmFwcGVyX18xT2FhbVwiLFxuXHRcInRpdGxlXCI6IFwiX2lkX190aXRsZV9fbDVhUUlcIixcblx0XCJyYXRpbmdcIjogXCJfaWRfX3JhdGluZ19fY05vNnNcIixcblx0XCJ0ZXh0X19hcmVhXCI6IFwiX2lkX190ZXh0X19hcmVhX194SEViZVwiLFxuXHRcImltZ19fdXJsXCI6IFwiX2lkX19pbWdfX3VybF9fX3dkenlcIixcblx0XCJidXR0b25fX2FwcGx5XCI6IFwiX2lkX19idXR0b25fX2FwcGx5X19MS0FZeFwiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/edit-movie/[id]/index.module.css\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "form-serialize":
/*!*********************************!*\
  !*** external "form-serialize" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("form-serialize");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/edit-movie/[id]/index.js"));
module.exports = __webpack_exports__;

})();