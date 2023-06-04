"use strict";
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
exports.id = "pages/test";
exports.ids = ["pages/test"];
exports.modules = {

/***/ "./pages/test.js":
/*!***********************!*\
  !*** ./pages/test.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Whatever),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Whatever({ results  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(results);\n    });\n    const getDatabaseDisplay = ()=>{\n        let js = [];\n        results.forEach((post)=>{\n            js.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.properties.Name.title[0].plain_text\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/test.js\",\n                        lineNumber: 14,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.properties.Push.select.name\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/test.js\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.properties.Summary.rich_text[0].plain_text\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/test.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: post.properties.Date.date.start\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/test.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, post.id, true, {\n                fileName: \"/workspace/newblog/pages/test.js\",\n                lineNumber: 13,\n                columnNumber: 17\n            }, this));\n        });\n        return js;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: getDatabaseDisplay()\n    }, void 0, false, {\n        fileName: \"/workspace/newblog/pages/test.js\",\n        lineNumber: 24,\n        columnNumber: 12\n    }, this);\n}\nasync function getStaticProps() {\n    const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_1__.Client({\n        auth: process.env.NOTION_TOKEN\n    });\n    const databaseId = process.env.NOTION_DATABASE_ID;\n    const response = await notion.databases.query({\n        database_id: databaseId\n    });\n    console.log(response);\n    return {\n        props: {\n            results: response.results\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90ZXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEM7QUFDUjtBQUVuQixTQUFTRSxTQUFTLEVBQUVDLFFBQU8sRUFBRSxFQUFFO0lBQzFDRixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pHLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDaEI7SUFFQSxNQUFNRyxxQkFBcUIsSUFBTTtRQUM3QixJQUFJQyxLQUFLLEVBQUU7UUFDWEosUUFBUUssT0FBTyxDQUFDLENBQUNDLE9BQVM7WUFDdEJGLEdBQUdHLElBQUksZUFDSCw4REFBQ0M7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDQztrQ0FBR0osS0FBS0ssVUFBVSxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQyxFQUFFLENBQUNDLFVBQVU7Ozs7OztrQ0FDNUMsOERBQUNKO2tDQUFHSixLQUFLSyxVQUFVLENBQUNJLElBQUksQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJOzs7Ozs7a0NBQ3BDLDhEQUFDUDtrQ0FBR0osS0FBS0ssVUFBVSxDQUFDTyxPQUFPLENBQUNDLFNBQVMsQ0FBQyxFQUFFLENBQUNMLFVBQVU7Ozs7OztrQ0FDbkQsOERBQUNKO2tDQUFHSixLQUFLSyxVQUFVLENBQUNTLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLOzs7Ozs7O2VBSlpoQixLQUFLaUIsRUFBRTs7Ozs7UUFPMUM7UUFDQSxPQUFPbkI7SUFDWDtJQUVBLHFCQUFPLDhEQUFDSTtrQkFBS0w7Ozs7OztBQUNqQixDQUFDO0FBRU0sZUFBZXFCLGlCQUFpQjtJQUNuQyxNQUFNQyxTQUFTLElBQUk1QixvREFBTUEsQ0FBQztRQUFFNkIsTUFBTUMsUUFBUUMsR0FBRyxDQUFDQyxZQUFZO0lBQUM7SUFDM0QsTUFBTUMsYUFBYUgsUUFBUUMsR0FBRyxDQUFDRyxrQkFBa0I7SUFDakQsTUFBTUMsV0FBVyxNQUFNUCxPQUFPUSxTQUFTLENBQUNDLEtBQUssQ0FBQztRQUMxQ0MsYUFBYUw7SUFDakI7SUFFQTdCLFFBQVFDLEdBQUcsQ0FBQzhCO0lBQ1osT0FBTztRQUNISSxPQUFPO1lBQ0hwQyxTQUFTZ0MsU0FBU2hDLE9BQU87UUFDN0I7SUFDSjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL3Rlc3QuanM/ZDA5OSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDbGllbnQgfSBmcm9tICdAbm90aW9uaHEvY2xpZW50JztcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gV2hhdGV2ZXIoeyByZXN1bHRzIH0pIHtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGdldERhdGFiYXNlRGlzcGxheSA9ICgpID0+IHtcbiAgICAgICAgbGV0IGpzID0gW107XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocG9zdCkgPT4ge1xuICAgICAgICAgICAganMucHVzaChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIiBrZXk9e3Bvc3QuaWR9PlxuICAgICAgICAgICAgICAgICAgICA8cD57cG9zdC5wcm9wZXJ0aWVzLk5hbWUudGl0bGVbMF0ucGxhaW5fdGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnByb3BlcnRpZXMuUHVzaC5zZWxlY3QubmFtZX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnByb3BlcnRpZXMuU3VtbWFyeS5yaWNoX3RleHRbMF0ucGxhaW5fdGV4dH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwb3N0LnByb3BlcnRpZXMuRGF0ZS5kYXRlLnN0YXJ0fTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ganM7XG4gICAgfTtcblxuICAgIHJldHVybiA8ZGl2PntnZXREYXRhYmFzZURpc3BsYXkoKX08L2Rpdj47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgICBjb25zdCBub3Rpb24gPSBuZXcgQ2xpZW50KHsgYXV0aDogcHJvY2Vzcy5lbnYuTk9USU9OX1RPS0VOIH0pO1xuICAgIGNvbnN0IGRhdGFiYXNlSWQgPSBwcm9jZXNzLmVudi5OT1RJT05fREFUQUJBU0VfSUQ7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uZGF0YWJhc2VzLnF1ZXJ5KHtcbiAgICAgICAgZGF0YWJhc2VfaWQ6IGRhdGFiYXNlSWQsXG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcmVzdWx0czogcmVzcG9uc2UucmVzdWx0cyxcbiAgICAgICAgfVxuICAgIH1cbn1cblxuIl0sIm5hbWVzIjpbIkNsaWVudCIsInVzZUVmZmVjdCIsIldoYXRldmVyIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJnZXREYXRhYmFzZURpc3BsYXkiLCJqcyIsImZvckVhY2giLCJwb3N0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJwcm9wZXJ0aWVzIiwiTmFtZSIsInRpdGxlIiwicGxhaW5fdGV4dCIsIlB1c2giLCJzZWxlY3QiLCJuYW1lIiwiU3VtbWFyeSIsInJpY2hfdGV4dCIsIkRhdGUiLCJkYXRlIiwic3RhcnQiLCJpZCIsImdldFN0YXRpY1Byb3BzIiwibm90aW9uIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJOT1RJT05fVE9LRU4iLCJkYXRhYmFzZUlkIiwiTk9USU9OX0RBVEFCQVNFX0lEIiwicmVzcG9uc2UiLCJkYXRhYmFzZXMiLCJxdWVyeSIsImRhdGFiYXNlX2lkIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/test.js\n");

/***/ }),

/***/ "@notionhq/client":
/*!***********************************!*\
  !*** external "@notionhq/client" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@notionhq/client");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/test.js"));
module.exports = __webpack_exports__;

})();