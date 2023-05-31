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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"databaseId\": function() { return /* binding */ databaseId; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _id_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./[id].js */ \"./pages/[id].js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ \"./components/header.js\");\n/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ \"./components/footer.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"./node_modules/next/dist/build/polyfills/process.js\");\n\n\n\n\n\n\nvar __N_SSG = true;\nconst databaseId = process.env.NOTION_DATABASE_ID;\nfunction Home(param) {\n    let { posts  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"plsfix\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"./favicon.png\"\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/newblog/pages/index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"justify-center px-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 7\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                        className: \"\",\n                        children: posts.map((post)=>{\n                            const date = new Date(post.last_edited_time).toLocaleString(\"en-US\", {\n                                weekday: \"short\",\n                                month: \"short\",\n                                day: \"2-digit\",\n                                year: \"numeric\"\n                            }).replace(/,(?=\\s\\d{4}$)/, \"\");\n                            ;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"my-3 flex flex-col justify-between md:flex-row\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-lg font-bold underline-offset-8 hover:underline transition duration-500\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            href: \"/\".concat(post.id),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_id_js__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                                                text: post.properties.Name.title\n                                            }, void 0, false, {\n                                                fileName: \"/workspace/newblog/pages/index.js\",\n                                                lineNumber: 34,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/workspace/newblog/pages/index.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/newblog/pages/index.js\",\n                                        lineNumber: 32,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"flex-shrink-0 align-middle text-sm\",\n                                        children: date\n                                    }, void 0, false, {\n                                        fileName: \"/workspace/newblog/pages/index.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, post.id, true, {\n                                fileName: \"/workspace/newblog/pages/index.js\",\n                                lineNumber: 31,\n                                columnNumber: 15\n                            }, this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/workspace/newblog/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/newblog/pages/index.js\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDQTtBQUVJO0FBQ1M7QUFDQTs7QUFFbkMsTUFBTUssYUFBYUMsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDQyxrQkFBa0IsQ0FBQztBQUUxQyxTQUFTQyxLQUFLLEtBQVMsRUFBRTtRQUFYLEVBQUVDLE1BQUssRUFBRSxHQUFUO0lBQzNCLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNYLGtEQUFJQTs7a0NBQ0gsOERBQUNZO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDSjtnQkFBSUssV0FBVTs7a0NBQ2YsOERBQUNiLDBEQUFNQTs7Ozs7a0NBQ0wsOERBQUNjO3dCQUFHRCxXQUFVO2tDQUNYTixNQUFNUSxHQUFHLENBQUMsQ0FBQ0MsT0FBUzs0QkFDbkIsTUFBTUMsT0FBTyxJQUFJQyxLQUFLRixLQUFLRyxnQkFBZ0IsRUFBRUMsY0FBYyxDQUN6RCxTQUNBO2dDQUNFQyxTQUFTO2dDQUNUQyxPQUFPO2dDQUNQQyxLQUFLO2dDQUNMQyxNQUFNOzRCQUNSLEdBQ0FDLE9BQU8sQ0FBQyxpQkFBaUI7OzRCQUMzQixxQkFDRSw4REFBQ0M7Z0NBQWlCYixXQUFVOztrREFDMUIsOERBQUNjO3dDQUFHZCxXQUFVO2tEQUNaLDRFQUFDZixrREFBSUE7NENBQUNjLE1BQU0sSUFBWSxPQUFSSSxLQUFLWSxFQUFFO3NEQUNyQiw0RUFBQzdCLHdDQUFJQTtnREFBQzhCLE1BQU1iLEtBQUtjLFVBQVUsQ0FBQ0MsSUFBSSxDQUFDdEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7OztrREFJMUMsOERBQUN1Qjt3Q0FBRW5CLFdBQVU7a0RBQXNDSTs7Ozs7OzsrQkFQNUNELEtBQUtZLEVBQUU7Ozs7O3dCQVVwQjs7Ozs7O2tDQUVGLDhEQUFDM0IsMERBQU1BOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlmLENBQUM7S0FyQ3VCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IGdldERhdGFiYXNlIH0gZnJvbSBcIi4uL2xpYi9ub3Rpb25cIjtcbmltcG9ydCB7IFRleHQgfSBmcm9tIFwiLi9baWRdLmpzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRlclwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGRhdGFiYXNlSWQgPSBwcm9jZXNzLmVudi5OT1RJT05fREFUQUJBU0VfSUQ7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwb3N0cyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+cGxzZml4PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIuL2Zhdmljb24ucG5nXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwianVzdGlmeS1jZW50ZXIgcHgtNFwiPlxuICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8b2wgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAge3Bvc3RzLm1hcCgocG9zdCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHBvc3QubGFzdF9lZGl0ZWRfdGltZSkudG9Mb2NhbGVTdHJpbmcoXG4gICAgICAgICAgICAgIFwiZW4tVVNcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHdlZWtkYXk6IFwic2hvcnRcIixcbiAgICAgICAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgICAgICAgIGRheTogXCIyLWRpZ2l0XCIsXG4gICAgICAgICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkucmVwbGFjZSgvLCg/PVxcc1xcZHs0fSQpLywgXCJcIik7O1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGxpIGtleT17cG9zdC5pZH0gY2xhc3NOYW1lPVwibXktMyBmbGV4IGZsZXgtY29sIGp1c3RpZnktYmV0d2VlbiBtZDpmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LWxnIGZvbnQtYm9sZCB1bmRlcmxpbmUtb2Zmc2V0LTggaG92ZXI6dW5kZXJsaW5lIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwXCI+XG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLyR7cG9zdC5pZH1gfT5cbiAgICAgICAgICAgICAgICAgICAgPFRleHQgdGV4dD17cG9zdC5wcm9wZXJ0aWVzLk5hbWUudGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTAgYWxpZ24tbWlkZGxlIHRleHQtc21cIj57ZGF0ZX08L3A+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L29sPlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGNvbnN0IGdldFN0YXRpY1Byb3BzID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCBkYXRhYmFzZSA9IGF3YWl0IGdldERhdGFiYXNlKGRhdGFiYXNlSWQpO1xuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzOiBkYXRhYmFzZSxcbiAgICB9LFxuICAgIHJldmFsaWRhdGU6IDEsXG4gIH07XG59OyJdLCJuYW1lcyI6WyJIZWFkIiwiTGluayIsIlRleHQiLCJIZWFkZXIiLCJGb290ZXIiLCJkYXRhYmFzZUlkIiwicHJvY2VzcyIsImVudiIsIk5PVElPTl9EQVRBQkFTRV9JRCIsIkhvbWUiLCJwb3N0cyIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJjbGFzc05hbWUiLCJvbCIsIm1hcCIsInBvc3QiLCJkYXRlIiwiRGF0ZSIsImxhc3RfZWRpdGVkX3RpbWUiLCJ0b0xvY2FsZVN0cmluZyIsIndlZWtkYXkiLCJtb250aCIsImRheSIsInllYXIiLCJyZXBsYWNlIiwibGkiLCJoMyIsImlkIiwidGV4dCIsInByb3BlcnRpZXMiLCJOYW1lIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});