"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/page",{

/***/ "./src/pages/page.jsx":
/*!****************************!*\
  !*** ./src/pages/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/pages/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(16); // Initial font size: 16px\n    const increaseFontSize = ()=>{\n        setFontSize((prevFontSize)=>prevFontSize + 2);\n    };\n    const decreaseFontSize = ()=>{\n        setFontSize((prevFontSize)=>prevFontSize - 2);\n    };\n    const handleHover = (content)=>{\n        const speech = new SpeechSynthesisUtterance(content);\n        window.speechSynthesis.speak(speech);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tech Support Titans\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-white text-blue-600 text-center py-4 shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-semibold\",\n                    children: \"Tech Support Titans\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow p-4\",\n                style: {\n                    fontSize: \"\".concat(fontSize, \"px\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-8 mx-4 my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"mb-8\",\n                            onMouseEnter: ()=>handleHover(\"Resume and GitHub\"),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-semibold mb-4\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize, \"px\")\n                                    },\n                                    children: \"Resume & GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://www.virtualglobalhackathon.org/resume.pdf\",\n                                            className: \"text-blue-600 underline\",\n                                            children: \"Download Technical Documentation (LATEX)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                            lineNumber: 36,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://github.com/monek1\",\n                                                className: \"text-blue-600 underline mr-4\",\n                                                children: \"Github Repository\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                                lineNumber: 38,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                            lineNumber: 37,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold mb-4 text-white\",\n                                            children: \"Integration with Public Transport\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/graph1.png\",\n                                            alt: \"Integration with Public Transport Graph\",\n                                            className: \"w-full h-48 object-cover rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                    lineNumber: 44,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Traffic Congestion and Travel Times\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold mb-4 text-white\",\n                                            children: \"Traffic Congestion and Travel Times\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/graph2.png\",\n                                            alt: \"Traffic Congestion and Travel Times Graph\",\n                                            className: \"w-full h-48 object-cover rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Environmental Impact\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-4 text-white\",\n                                        children: \"Environmental Impact\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Accessibility and Inclusivity\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-4 text-white\",\n                                        children: \"Accessibility and Inclusivity\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                    lineNumber: 32,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: increaseFontSize,\n                className: \"fixed bottom-4 right-4 p-2 bg-blue-600 text-white rounded-full shadow-lg\",\n                children: \"Increase Font Size\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: decreaseFontSize,\n                className: \"fixed bottom-4 right-100 p-2 bg-blue-600 text-white rounded-full shadow-lg\",\n                children: \"Decrease Font Size\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-white text-blue-600 text-center py-4 shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    style: {\n                        fontSize: \"\".concat(fontSize, \"px\")\n                    },\n                    children: \"Created by Vinesh R., Gregory R., Rayan M., Maadhav D.\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 79,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed bottom-4  p-2 bg-blue-600 text-white rounded-full shadow-lg\",\n                onClick: ()=>handleHover(\"Hover over a section to read\"),\n                children: \"Text to Speech\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/page.jsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"VbrO4nWO89ZchEZRwBAHIqlkWc4=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ZvbnRTaXplLCBzZXRGb250U2l6ZV0gPSB1c2VTdGF0ZSgxNik7ICAvLyBJbml0aWFsIGZvbnQgc2l6ZTogMTZweFxuXG4gIGNvbnN0IGluY3JlYXNlRm9udFNpemUgPSAoKSA9PiB7XG4gICAgc2V0Rm9udFNpemUocHJldkZvbnRTaXplID0+IHByZXZGb250U2l6ZSArIDIpO1xuICB9O1xuXG4gIGNvbnN0IGRlY3JlYXNlRm9udFNpemUgPSAoKSA9PiB7XG4gICAgc2V0Rm9udFNpemUocHJldkZvbnRTaXplID0+IHByZXZGb250U2l6ZSAtIDIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKGNvbnRlbnQpID0+IHtcbiAgICBjb25zdCBzcGVlY2ggPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKGNvbnRlbnQpO1xuICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsoc3BlZWNoKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW4gYmctZ3JhZGllbnQtdG8tciBmcm9tLWJsdWUtNTAwIHZpYS1wdXJwbGUtNTAwIHRvLWJsdWUtNTAwXCI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRlY2ggU3VwcG9ydCBUaXRhbnM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmx1ZS02MDAgdGV4dC1jZW50ZXIgcHktNCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIj5UZWNoIFN1cHBvcnQgVGl0YW5zPC9oMT5cbiAgICAgIDwvaGVhZGVyPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJmbGV4LWdyb3cgcC00XCIgc3R5bGU9e3sgZm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBwLTggbXgtNCBteS04XCI+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWItOFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ1Jlc3VtZSBhbmQgR2l0SHViJyl9PlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAgfX0+UmVzdW1lICYgR2l0SHViPC9oMj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnZpcnR1YWxnbG9iYWxoYWNrYXRob24ub3JnL3Jlc3VtZS5wZGZcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIHVuZGVybGluZVwiPkRvd25sb2FkIFRlY2huaWNhbCBEb2N1bWVudGF0aW9uIChMQVRFWCk8L2E+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9tb25lazFcIiBjbGFzc05hbWU9XCJ0ZXh0LWJsdWUtNjAwIHVuZGVybGluZSBtci00XCI+R2l0aHViIFJlcG9zaXRvcnk8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0xIG1kOmdyaWQtY29scy0yIGdhcC04XCI+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLWxnIHAtNFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ0ludGVncmF0aW9uIHdpdGggUHVibGljIFRyYW5zcG9ydCcpfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtd2hpdGVcIj5JbnRlZ3JhdGlvbiB3aXRoIFB1YmxpYyBUcmFuc3BvcnQ8L2gyPlxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvZ3JhcGgxLnBuZ1wiIGFsdD1cIkludGVncmF0aW9uIHdpdGggUHVibGljIFRyYW5zcG9ydCBHcmFwaFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctYmxhY2sgcm91bmRlZC1sZyBwLTRcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdUcmFmZmljIENvbmdlc3Rpb24gYW5kIFRyYXZlbCBUaW1lcycpfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtd2hpdGVcIj5UcmFmZmljIENvbmdlc3Rpb24gYW5kIFRyYXZlbCBUaW1lczwvaDI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ncmFwaDIucG5nXCIgYWx0PVwiVHJhZmZpYyBDb25nZXN0aW9uIGFuZCBUcmF2ZWwgVGltZXMgR3JhcGhcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQtbGcgcC00XCIgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcignRW52aXJvbm1lbnRhbCBJbXBhY3QnKX0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LXdoaXRlXCI+RW52aXJvbm1lbnRhbCBJbXBhY3Q8L2gyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLWxnIHAtNFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ0FjY2Vzc2liaWxpdHkgYW5kIEluY2x1c2l2aXR5Jyl9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC13aGl0ZVwiPkFjY2Vzc2liaWxpdHkgYW5kIEluY2x1c2l2aXR5PC9oMj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiBBY2Nlc3NpYmlsaXR5IEJ1dHRvbiAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17aW5jcmVhc2VGb250U2l6ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtNCBwLTIgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgc2hhZG93LWxnXCJcbiAgICAgID5cbiAgICAgICAgSW5jcmVhc2UgRm9udCBTaXplXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17ZGVjcmVhc2VGb250U2l6ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTQgcmlnaHQtMTAwIHAtMiBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdcIlxuICAgICAgPlxuICAgICAgICBEZWNyZWFzZSBGb250IFNpemVcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmx1ZS02MDAgdGV4dC1jZW50ZXIgcHktNCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAgfX0+Q3JlYXRlZCBieSBWaW5lc2ggUi4sIEdyZWdvcnkgUi4sIFJheWFuIE0uLCBNYWFkaGF2IEQuPC9wPlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIHsvKiBIb3Zlci10cmlnZ2VyZWQgVGV4dC10by1TcGVlY2ggQnV0dG9uICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tNCAgcC0yIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUhvdmVyKCdIb3ZlciBvdmVyIGEgc2VjdGlvbiB0byByZWFkJyl9XG4gICAgICA+XG4gICAgICAgIFRleHQgdG8gU3BlZWNoXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSGVhZCIsIkhvbWUiLCJmb250U2l6ZSIsInNldEZvbnRTaXplIiwiaW5jcmVhc2VGb250U2l6ZSIsInByZXZGb250U2l6ZSIsImRlY3JlYXNlRm9udFNpemUiLCJoYW5kbGVIb3ZlciIsImNvbnRlbnQiLCJzcGVlY2giLCJTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UiLCJ3aW5kb3ciLCJzcGVlY2hTeW50aGVzaXMiLCJzcGVhayIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaGVhZGVyIiwiaDEiLCJtYWluIiwic3R5bGUiLCJzZWN0aW9uIiwib25Nb3VzZUVudGVyIiwiaDIiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb290ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/page.jsx\n"));

/***/ })

});