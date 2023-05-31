"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"databaseId\": function() { return /* binding */ databaseId; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./[id].js */ \"./pages/[id].js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\nvar __N_SSG = true;\nconst databaseId = process.env.NOTION_DATABASE_ID;\nfunction Home(param) {\n    let { posts  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"plsfix\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/newblog/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-center px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                        className: \"\",\n                        children: posts.map((post)=>{\n                            const date = new Date(post.last_edited_time).toLocaleString(\"en-US\", {\n                                weekday: \"short\",\n                                month: \"short\",\n                                day: \"2-digit\",\n                                year: \"numeric\"\n                            });\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"my-3 flex flex-col justify-between md:flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-lg font-bold underline-offset-8 hover:underline transition duration-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_id_js__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                text: post.properties.Name.title\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/newblog/pages/index.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/newblog/pages/index.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/newblog/pages/index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"flex-shrink-0 align-middle text-sm\",\n                                        children: date\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/newblog/pages/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, post.id, true, {\n                                fileName: \"/workspace/newblog/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/newblog/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/newblog/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDQTtBQUVJO0FBQ1M7QUFDQTs7QUFFbkMsTUFBTUssYUFBYUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0IsQ0FBQztBQUUxQyxTQUFTQyxLQUFLLEtBQVMsRUFBRTtRQUFYLEVBQUVDLE1BQUssRUFBRSxHQUFUO0lBQzNCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNZO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDSjtnQkFBSUssV0FBVTs7a0NBQ2YsOERBQUNiLDBEQUFNQTs7Ozs7a0NBQ0wsOERBQUNjO3dCQUFHRCxXQUFVO2tDQUNYTixNQUFNUSxHQUFHLENBQUMsQ0FBQ0MsT0FBUzs0QkFDbkIsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRixLQUFLRyxnQkFBZ0IsRUFBRUMsY0FBYyxDQUN6RCxTQUNBO2dDQUNFQyxTQUFTO2dDQUNUQyxPQUFPO2dDQUNQQyxLQUFLO2dDQUNMQyxNQUFNOzRCQUNSOzRCQUVGLHFCQUNFLDhEQUFDQztnQ0FBaUJaLFdBQVU7O2tEQUMxQiw4REFBQ2E7d0NBQUdiLFdBQVU7a0RBQ1osNEVBQUNmLGtEQUFJQTs0Q0FBQ2MsTUFBTSxJQUFZLE9BQVJJLEtBQUtXLEVBQUU7c0RBQ3JCLDRFQUFDNUIsd0NBQUlBO2dEQUFDNkIsTUFBTVosS0FBS2EsVUFBVSxDQUFDQyxJQUFJLENBQUNyQixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2tEQUkxQyw4REFBQ3NCO3dDQUFFbEIsV0FBVTtrREFBc0NJOzs7Ozs7OytCQVA1Q0QsS0FBS1csRUFBRTs7Ozs7d0JBVXBCOzs7Ozs7a0NBRUYsOERBQUMxQiwwREFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWYsQ0FBQztLQXJDdUJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgZ2V0RGF0YWJhc2UgfSBmcm9tIFwiLi4vbGliL25vdGlvblwiO1xuaW1wb3J0IHsgVGV4dCB9IGZyb20gXCIuL1tpZF0uanNcIjtcbmltcG9ydCBIZWFkZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZGVyXCI7XG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiO1xuXG5leHBvcnQgY29uc3QgZGF0YWJhc2VJZCA9IHByb2Nlc3MuZW52Lk5PVElPTl9EQVRBQkFTRV9JRDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHBvc3RzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5wbHNmaXg8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4vZmF2aWNvbi5wbmdcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJqdXN0aWZ5LWNlbnRlciBweC00XCI+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxvbCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICB7cG9zdHMubWFwKChwb3N0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUocG9zdC5sYXN0X2VkaXRlZF90aW1lKS50b0xvY2FsZVN0cmluZyhcbiAgICAgICAgICAgICAgXCJlbi1VU1wiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2Vla2RheTogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgICAgICAgZGF5OiBcIjItZGlnaXRcIixcbiAgICAgICAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bvc3QuaWR9IGNsYXNzTmFtZT1cIm15LTMgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbWQ6ZmxleC1yb3dcIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGQgdW5kZXJsaW5lLW9mZnNldC04IGhvdmVyOnVuZGVybGluZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTUwMFwiPlxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC8ke3Bvc3QuaWR9YH0+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0IHRleHQ9e3Bvc3QucHJvcGVydGllcy5OYW1lLnRpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wIGFsaWduLW1pZGRsZSB0ZXh0LXNtXCI+e2RhdGV9PC9wPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9vbD5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgZGF0YWJhc2UgPSBhd2FpdCBnZXREYXRhYmFzZShkYXRhYmFzZUlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0czogZGF0YWJhc2UsXG4gICAgfSxcbiAgICByZXZhbGlkYXRlOiAxLFxuICB9O1xufTsiXSwibmFtZXMiOlsiSGVhZCIsIkxpbmsiLCJUZXh0IiwiSGVhZGVyIiwiRm9vdGVyIiwiZGF0YWJhc2VJZCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fREFUQUJBU0VfSUQiLCJIb21lIiwicG9zdHMiLCJkaXYiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiY2xhc3NOYW1lIiwib2wiLCJtYXAiLCJwb3N0IiwiZGF0ZSIsIkRhdGUiLCJsYXN0X2VkaXRlZF90aW1lIiwidG9Mb2NhbGVTdHJpbmciLCJ3ZWVrZGF5IiwibW9udGgiLCJkYXkiLCJ5ZWFyIiwibGkiLCJoMyIsImlkIiwidGV4dCIsInByb3BlcnRpZXMiLCJOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});