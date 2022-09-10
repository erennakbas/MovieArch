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
exports.id = "pages/add-movie";
exports.ids = ["pages/add-movie"];
exports.modules = {

/***/ "./pages/add-movie/index.js":
/*!**********************************!*\
  !*** ./pages/add-movie/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./index.module.css */ \"./pages/add-movie/index.module.css\");\n/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! form-serialize */ \"form-serialize\");\n/* harmony import */ var form_serialize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(form_serialize__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_slices_movieSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/slices/movieSlice */ \"./store/slices/movieSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"D:\\\\react\\\\my-app\\\\pages\\\\add-movie\\\\index.js\";\n\n\n\n\n\n\n\n\n\nconst MovieAdder = props => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n  const movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(state => state.movieList.movies);\n\n  async function addMovie(movie) {\n    await axios__WEBPACK_IMPORTED_MODULE_5___default().post(\"http://localhost:3002/movies\", movie);\n    dispatch((0,_store_slices_movieSlice__WEBPACK_IMPORTED_MODULE_4__.setMovies)(movies.concat(movie)));\n  }\n\n  function handleSubmit(event) {\n    event.preventDefault();\n    const newMovie = form_serialize__WEBPACK_IMPORTED_MODULE_1___default()(event.target, {\n      hash: true\n    });\n    addMovie(newMovie);\n    router.push('/');\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"form\", {\n    id: \"my-form\",\n    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().form),\n    onSubmit: handleSubmit,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().form__header),\n      children: \"Fill the form to add a new movie.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title_rating__wrapper),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"flex-grow\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          className: \"text-gray-700\",\n          children: \"Title\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"title\",\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n          placeholder: \"Hobbits\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          className: \"text-gray-700\",\n          children: \"Rating\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 21\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n          type: \"text\",\n          name: \"vote_average\",\n          className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().rating),\n          placeholder: \"7.9\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 21\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n        className: \"text-gray-700\",\n        children: \"Image URL\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"input\", {\n        type: \"text\",\n        name: \"poster_path\",\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().img__url),\n        placeholder: \"Example.com/example.jpg\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n        className: \"text-gray-700\",\n        children: \"Overview\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"textarea\", {\n        name: \"overview\",\n        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().text__area),\n        rows: \"4\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 13\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n      type: \"submit\",\n      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_7___default().button__add),\n      children: \" Add movie\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 13\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 9\n  }, undefined);\n};\n\nasync function getStaticProps(context) {\n  return {\n    props: {} // will be passed to the page component as props\n\n  };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MovieAdder);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFNBQVMsRUFBRUEsc0VBQWpDO01BQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBcEJKO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQSxhQURKO0FBd0JILENBdENEOztBQXVDTyxlQUFlaUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7RUFDMUMsT0FBTztJQUNMMUIsS0FBSyxFQUFFLEVBREYsQ0FDTTs7RUFETixDQUFQO0FBR0Q7QUFDSCxpRUFBZUQsVUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FkZC1tb3ZpZS9pbmRleC5qcz9iMjFlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9pbmRleC5tb2R1bGUuY3NzJztcclxuaW1wb3J0IHNlcmlhbGl6ZSBmcm9tICdmb3JtLXNlcmlhbGl6ZSc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciwgdXNlRGlzcGF0Y2ggfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7IHNldE1vdmllc30gZnJvbSAnLi4vLi4vc3RvcmUvc2xpY2VzL21vdmllU2xpY2UnO1xyXG5pbXBvcnQgIGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5jb25zdCBNb3ZpZUFkZGVyID0gKHByb3BzKSA9PntcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgICBjb25zdCBtb3ZpZXMgPSB1c2VTZWxlY3Rvcigoc3RhdGUpPT5zdGF0ZS5tb3ZpZUxpc3QubW92aWVzKTtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGFkZE1vdmllKG1vdmllKXtcclxuICAgICAgICBhd2FpdCBheGlvcy5wb3N0KFwiaHR0cDovL2xvY2FsaG9zdDozMDAyL21vdmllc1wiLG1vdmllKTtcclxuICAgICAgICBkaXNwYXRjaChzZXRNb3ZpZXMobW92aWVzLmNvbmNhdChtb3ZpZSkpKTsgXHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpe1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgbmV3TW92aWUgPSBzZXJpYWxpemUoZXZlbnQudGFyZ2V0LHtoYXNoOnRydWV9KTtcclxuICAgICAgICBhZGRNb3ZpZShuZXdNb3ZpZSk7XHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxmb3JtIGlkPVwibXktZm9ybVwiIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX19oZWFkZXJ9PkZpbGwgdGhlIGZvcm0gdG8gYWRkIGEgbmV3IG1vdmllLjwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9IHtzdHlsZXMudGl0bGVfcmF0aW5nX193cmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlRpdGxlPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJ0aXRsZVwiIGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfSBwbGFjZWhvbGRlcj1cIkhvYmJpdHNcIi8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPlJhdGluZzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidm90ZV9hdmVyYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nfSBwbGFjZWhvbGRlcj1cIjcuOVwiLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS03MDBcIj5JbWFnZSBVUkw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPSBcInBvc3Rlcl9wYXRoXCIgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX191cmx9IHBsYWNlaG9sZGVyPVwiRXhhbXBsZS5jb20vZXhhbXBsZS5qcGdcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTcwMFwiPk92ZXJ2aWV3PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJvdmVydmlld1wiIGNsYXNzTmFtZT17c3R5bGVzLnRleHRfX2FyZWF9IHJvd3M9XCI0XCIgPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b25fX2FkZH0+IEFkZCBtb3ZpZTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIClcclxufVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHt9LCAvLyB3aWxsIGJlIHBhc3NlZCB0byB0aGUgcGFnZSBjb21wb25lbnQgYXMgcHJvcHNcclxuICAgIH1cclxuICB9XHJcbmV4cG9ydCBkZWZhdWx0IE1vdmllQWRkZXI7Il0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwic2VyaWFsaXplIiwidXNlUm91dGVyIiwidXNlU2VsZWN0b3IiLCJ1c2VEaXNwYXRjaCIsInNldE1vdmllcyIsImF4aW9zIiwiTW92aWVBZGRlciIsInByb3BzIiwicm91dGVyIiwiZGlzcGF0Y2giLCJtb3ZpZXMiLCJzdGF0ZSIsIm1vdmllTGlzdCIsImFkZE1vdmllIiwibW92aWUiLCJwb3N0IiwiY29uY2F0IiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld01vdmllIiwidGFyZ2V0IiwiaGFzaCIsInB1c2giLCJmb3JtIiwiZm9ybV9faGVhZGVyIiwidGl0bGVfcmF0aW5nX193cmFwcGVyIiwidGl0bGUiLCJyYXRpbmciLCJpbWdfX3VybCIsInRleHRfX2FyZWEiLCJidXR0b25fX2FkZCIsImdldFN0YXRpY1Byb3BzIiwiY29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/add-movie/index.js\n");

/***/ }),

/***/ "./store/slices/movieSlice.js":
/*!************************************!*\
  !*** ./store/slices/movieSlice.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"movieSlice\": () => (/* binding */ movieSlice),\n/* harmony export */   \"setFilteredMovies\": () => (/* binding */ setFilteredMovies),\n/* harmony export */   \"setMovies\": () => (/* binding */ setMovies),\n/* harmony export */   \"setSearchQuery\": () => (/* binding */ setSearchQuery)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n  movies: [],\n  filteredMovies: [],\n  searchQuery: \"\"\n};\nconst movieSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n  name: 'movie',\n  initialState,\n  reducers: {\n    setMovies: (state, action) => {\n      state.movies = action.payload;\n    },\n    setFilteredMovies: (state, action) => {\n      state.filteredMovies = action.payload;\n    },\n    setSearchQuery: (state, action) => {\n      state.searchQuery = action.payload;\n    }\n  }\n});\nconst {\n  setMovies,\n  setFilteredMovies,\n  setSearchQuery\n} = movieSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (movieSlice.reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9zbGljZXMvbW92aWVTbGljZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFFQSxNQUFNQyxZQUFZLEdBQUc7RUFDbkJDLE1BQU0sRUFBQyxFQURZO0VBRW5CQyxjQUFjLEVBQUMsRUFGSTtFQUduQkMsV0FBVyxFQUFDO0FBSE8sQ0FBckI7QUFNTyxNQUFNQyxVQUFVLEdBQUdMLDZEQUFXLENBQUM7RUFDcENNLElBQUksRUFBRSxPQUQ4QjtFQUVwQ0wsWUFGb0M7RUFHcENNLFFBQVEsRUFBRTtJQUNSQyxTQUFTLEVBQUUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO01BQzVCRCxLQUFLLENBQUNQLE1BQU4sR0FBZVEsTUFBTSxDQUFDQyxPQUF0QjtJQUNELENBSE87SUFJUkMsaUJBQWlCLEVBQUUsQ0FBQ0gsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO01BQ3BDRCxLQUFLLENBQUNOLGNBQU4sR0FBdUJPLE1BQU0sQ0FBQ0MsT0FBOUI7SUFDRCxDQU5PO0lBT1JFLGNBQWMsRUFBRSxDQUFDSixLQUFELEVBQVFDLE1BQVIsS0FBbUI7TUFDakNELEtBQUssQ0FBQ0wsV0FBTixHQUFvQk0sTUFBTSxDQUFDQyxPQUEzQjtJQUNEO0VBVE87QUFIMEIsQ0FBRCxDQUE5QjtBQWVBLE1BQU07RUFBRUgsU0FBRjtFQUFhSSxpQkFBYjtFQUFnQ0M7QUFBaEMsSUFBbURSLFVBQVUsQ0FBQ1MsT0FBcEU7QUFFUCxpRUFBZVQsVUFBVSxDQUFDVSxPQUExQiIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3N0b3JlL3NsaWNlcy9tb3ZpZVNsaWNlLmpzP2RmZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1vdmllczpbXSxcclxuICBmaWx0ZXJlZE1vdmllczpbXSxcclxuICBzZWFyY2hRdWVyeTpcIlwiXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZpZVNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6ICdtb3ZpZScsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBzZXRNb3ZpZXM6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLm1vdmllcyA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIHNldEZpbHRlcmVkTW92aWVzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS5maWx0ZXJlZE1vdmllcyA9IGFjdGlvbi5wYXlsb2FkXHJcbiAgICB9LFxyXG4gICAgc2V0U2VhcmNoUXVlcnk6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnNlYXJjaFF1ZXJ5ID0gYWN0aW9uLnBheWxvYWRcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuZXhwb3J0IGNvbnN0IHsgc2V0TW92aWVzLCBzZXRGaWx0ZXJlZE1vdmllcywgc2V0U2VhcmNoUXVlcnkgfSA9IG1vdmllU2xpY2UuYWN0aW9uc1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW92aWVTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwibW92aWVzIiwiZmlsdGVyZWRNb3ZpZXMiLCJzZWFyY2hRdWVyeSIsIm1vdmllU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJzZXRNb3ZpZXMiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRGaWx0ZXJlZE1vdmllcyIsInNldFNlYXJjaFF1ZXJ5IiwiYWN0aW9ucyIsInJlZHVjZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/slices/movieSlice.js\n");

/***/ }),

/***/ "./pages/add-movie/index.module.css":
/*!******************************************!*\
  !*** ./pages/add-movie/index.module.css ***!
  \******************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"form\": \"add-movie_form___RipE\",\n\t\"form__header\": \"add-movie_form__header__AHDtk\",\n\t\"title_rating__wrapper\": \"add-movie_title_rating__wrapper__SBxQ9\",\n\t\"title\": \"add-movie_title__gGWVM\",\n\t\"rating\": \"add-movie_rating__XFGjd\",\n\t\"text__area\": \"add-movie_text__area__j_2k1\",\n\t\"img__url\": \"add-movie_img__url__UnUsx\",\n\t\"button__add\": \"add-movie_button__add__Nj1ur\",\n\t\"input\": \"add-movie_input__4U8To\",\n\t\"textarea\": \"add-movie_textarea__TCAYm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGQtbW92aWUvaW5kZXgubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3BhZ2VzL2FkZC1tb3ZpZS9pbmRleC5tb2R1bGUuY3NzPzRjZWEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZm9ybVwiOiBcImFkZC1tb3ZpZV9mb3JtX19fUmlwRVwiLFxuXHRcImZvcm1fX2hlYWRlclwiOiBcImFkZC1tb3ZpZV9mb3JtX19oZWFkZXJfX0FIRHRrXCIsXG5cdFwidGl0bGVfcmF0aW5nX193cmFwcGVyXCI6IFwiYWRkLW1vdmllX3RpdGxlX3JhdGluZ19fd3JhcHBlcl9fU0J4UTlcIixcblx0XCJ0aXRsZVwiOiBcImFkZC1tb3ZpZV90aXRsZV9fZ0dXVk1cIixcblx0XCJyYXRpbmdcIjogXCJhZGQtbW92aWVfcmF0aW5nX19YRkdqZFwiLFxuXHRcInRleHRfX2FyZWFcIjogXCJhZGQtbW92aWVfdGV4dF9fYXJlYV9fal8yazFcIixcblx0XCJpbWdfX3VybFwiOiBcImFkZC1tb3ZpZV9pbWdfX3VybF9fVW5Vc3hcIixcblx0XCJidXR0b25fX2FkZFwiOiBcImFkZC1tb3ZpZV9idXR0b25fX2FkZF9fTmoxdXJcIixcblx0XCJpbnB1dFwiOiBcImFkZC1tb3ZpZV9pbnB1dF9fNFU4VG9cIixcblx0XCJ0ZXh0YXJlYVwiOiBcImFkZC1tb3ZpZV90ZXh0YXJlYV9fVENBWW1cIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/add-movie/index.module.css\n");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/add-movie/index.js"));
module.exports = __webpack_exports__;

})();