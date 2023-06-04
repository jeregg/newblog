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
exports.id = "pages/about";
exports.ids = ["pages/about"];
exports.modules = {

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ About),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @notionhq/client */ \"@notionhq/client\");\n/* harmony import */ var _notionhq_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_notionhq_client__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction About({ data  }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        console.log(data.results);\n    });\n    const getPageDisplay = ()=>{\n        let js = [];\n        data.results.forEach((block)=>{\n            if (block.type === \"paragraph\") {\n                js.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: block.paragraph.rich_text[0]?.plain_text\n                }, void 0, false, {\n                    fileName: \"/workspace/newblog/pages/about.js\",\n                    lineNumber: 13,\n                    columnNumber: 21\n                }, this));\n            }\n            if (block.type === \"bulleted_list_item\") {\n                js.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: block.bulleted_list_item.rich_text[0]?.plain_text\n                    }, void 0, false, {\n                        fileName: \"/workspace/newblog/pages/about.js\",\n                        lineNumber: 18,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/workspace/newblog/pages/about.js\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, this));\n            }\n        });\n        return js;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: getPageDisplay()\n    }, void 0, false, {\n        fileName: \"/workspace/newblog/pages/about.js\",\n        lineNumber: 26,\n        columnNumber: 10\n    }, this);\n}\nasync function getStaticProps() {\n    const notion = new _notionhq_client__WEBPACK_IMPORTED_MODULE_1__.Client({\n        auth: process.env.NOTION_TOKEN\n    });\n    const blockId = \"18479ea4d09c4019b36790a8899494f5\";\n    const response = await notion.blocks.children.list({\n        block_id: blockId,\n        page_size: 50\n    });\n    console.log(response);\n    return {\n        props: {\n            data: response\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBQ1I7QUFFbkIsU0FBU0UsTUFBTSxFQUFFQyxLQUFJLEVBQUUsRUFBRTtJQUN0Q0YsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRyxRQUFRQyxHQUFHLENBQUNGLEtBQUtHLE9BQU87SUFDMUI7SUFFQSxNQUFNQyxpQkFBaUIsSUFBTTtRQUMzQixJQUFJQyxLQUFLLEVBQUU7UUFDWEwsS0FBS0csT0FBTyxDQUFDRyxPQUFPLENBQUMsQ0FBQ0MsUUFBVTtZQUM1QixJQUFJQSxNQUFNQyxJQUFJLEtBQUssYUFBYTtnQkFDNUJILEdBQUdJLElBQUksZUFBQyw4REFBQ0M7OEJBQUdILE1BQU1JLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDLEVBQUUsRUFBRUM7Ozs7OztZQUM5QyxDQUFDO1lBQ0QsSUFBSU4sTUFBTUMsSUFBSSxLQUFLLHNCQUFzQjtnQkFDckNILEdBQUdJLElBQUksZUFDUCw4REFBQ0s7OEJBQ0csNEVBQUNDO2tDQUFJUixNQUFNUyxrQkFBa0IsQ0FBQ0osU0FBUyxDQUFDLEVBQUUsRUFBRUM7Ozs7Ozs7Ozs7O1lBR3BELENBQUM7UUFDTDtRQUNBLE9BQU9SO0lBQ1Q7SUFFQSxxQkFBTyw4REFBQ1k7a0JBQUtiOzs7Ozs7QUFDZixDQUFDO0FBRU0sZUFBZWMsaUJBQWlCO0lBQ3JDLE1BQU1DLFNBQVMsSUFBSXRCLG9EQUFNQSxDQUFDO1FBQUV1QixNQUFNQyxRQUFRQyxHQUFHLENBQUNDLFlBQVk7SUFBQztJQUUzRCxNQUFNQyxVQUFVO0lBQ2hCLE1BQU1DLFdBQVcsTUFBTU4sT0FBT08sTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUksQ0FBQztRQUNqREMsVUFBVUw7UUFDVk0sV0FBVztJQUNiO0lBQ0E3QixRQUFRQyxHQUFHLENBQUN1QjtJQUVaLE9BQU87UUFDTE0sT0FBTztZQUNML0IsTUFBTXlCO1FBQ1I7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwcC8uL3BhZ2VzL2Fib3V0LmpzPzBjNDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSAnQG5vdGlvbmhxL2NsaWVudCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFib3V0KHsgZGF0YSB9KSB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2V0UGFnZURpc3BsYXkgPSAoKSA9PiB7XG4gICAgbGV0IGpzID0gW107XG4gICAgZGF0YS5yZXN1bHRzLmZvckVhY2goKGJsb2NrKSA9PiB7XG4gICAgICAgIGlmIChibG9jay50eXBlID09PSAncGFyYWdyYXBoJykge1xuICAgICAgICAgICAganMucHVzaCg8cD57YmxvY2sucGFyYWdyYXBoLnJpY2hfdGV4dFswXT8ucGxhaW5fdGV4dH08L3A+KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYmxvY2sudHlwZSA9PT0gJ2J1bGxldGVkX2xpc3RfaXRlbScpIHtcbiAgICAgICAgICAgIGpzLnB1c2goXG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgPGxpPntibG9jay5idWxsZXRlZF9saXN0X2l0ZW0ucmljaF90ZXh0WzBdPy5wbGFpbl90ZXh0fTwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBqcztcbiAgfTtcblxuICByZXR1cm4gPGRpdj57Z2V0UGFnZURpc3BsYXkoKX08L2Rpdj47XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcbiAgY29uc3Qgbm90aW9uID0gbmV3IENsaWVudCh7IGF1dGg6IHByb2Nlc3MuZW52Lk5PVElPTl9UT0tFTiB9KTtcblxuICBjb25zdCBibG9ja0lkID0gJzE4NDc5ZWE0ZDA5YzQwMTliMzY3OTBhODg5OTQ5NGY1JztcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBub3Rpb24uYmxvY2tzLmNoaWxkcmVuLmxpc3Qoe1xuICAgIGJsb2NrX2lkOiBibG9ja0lkLFxuICAgIHBhZ2Vfc2l6ZTogNTAsXG4gIH0pO1xuICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgZGF0YTogcmVzcG9uc2UsXG4gICAgfSxcbiAgfTtcbn0iXSwibmFtZXMiOlsiQ2xpZW50IiwidXNlRWZmZWN0IiwiQWJvdXQiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJnZXRQYWdlRGlzcGxheSIsImpzIiwiZm9yRWFjaCIsImJsb2NrIiwidHlwZSIsInB1c2giLCJwIiwicGFyYWdyYXBoIiwicmljaF90ZXh0IiwicGxhaW5fdGV4dCIsInVsIiwibGkiLCJidWxsZXRlZF9saXN0X2l0ZW0iLCJkaXYiLCJnZXRTdGF0aWNQcm9wcyIsIm5vdGlvbiIsImF1dGgiLCJwcm9jZXNzIiwiZW52IiwiTk9USU9OX1RPS0VOIiwiYmxvY2tJZCIsInJlc3BvbnNlIiwiYmxvY2tzIiwiY2hpbGRyZW4iLCJsaXN0IiwiYmxvY2tfaWQiLCJwYWdlX3NpemUiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/about.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/about.js"));
module.exports = __webpack_exports__;

})();