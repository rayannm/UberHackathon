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

/***/ "./src/pages/index.jsx":
/*!*****************************!*\
  !*** ./src/pages/index.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/pages/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(16);\n    const [isSpeaking, setIsSpeaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [speech, setSpeech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const increaseFontSize = ()=>{\n        setFontSize((prevFontSize)=>prevFontSize + 2);\n    };\n    const decreaseFontSize = ()=>{\n        setFontSize((prevFontSize)=>prevFontSize - 2);\n    };\n    const handleHover = (content)=>{\n        if (isSpeaking) {\n            const newSpeech = new SpeechSynthesisUtterance(content);\n            setSpeech(newSpeech);\n            window.speechSynthesis.speak(newSpeech);\n        }\n    };\n    const handleLeave = ()=>{\n        window.speechSynthesis.cancel();\n    };\n    const toggleSpeech = ()=>{\n        if (isSpeaking) {\n            window.speechSynthesis.cancel();\n            setIsSpeaking(false);\n        } else {\n            const newSpeech = new SpeechSynthesisUtterance(\"Hover over a section to read\");\n            setSpeech(newSpeech);\n            window.speechSynthesis.speak(newSpeech);\n            setIsSpeaking(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tech Support Titans\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-white text-blue-600 text-center py-4 shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-semibold\",\n                    onMouseEnter: ()=>handleHover(\"Tech Support Titans\"),\n                    onMouseLeave: ()=>handleLeave(),\n                    ref: sectionRef,\n                    children: \"Tech Support Titans\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow p-4\",\n                style: {\n                    fontSize: \"\".concat(fontSize, \"px\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-8 mx-4 my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-semibold mb-4\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize, \"px\")\n                                    },\n                                    onMouseEnter: ()=>handleHover(\"R\\xe9sume and Github\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: \"R\\xe9sume & GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://www.virtualglobalhackathon.org/resume.pdf\",\n                                            className: \"text-blue-600 underline\",\n                                            onMouseEnter: ()=>handleHover(\"Click to download techincal documentation\"),\n                                            onMouseLeave: ()=>handleLeave(),\n                                            ref: sectionRef,\n                                            children: \"Download Technical Documentation (LATEX)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 62,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://github.com/monek1\",\n                                                className: \"text-blue-600 underline mr-4\",\n                                                onMouseEnter: ()=>handleHover(\"Github Repository\"),\n                                                onMouseLeave: ()=>handleLeave(),\n                                                ref: sectionRef,\n                                                children: \"Github Repository\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold mb-4 text-white\",\n                                            children: \"Integration with Public Transport\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/graph1.png\",\n                                            alt: \"Integration with Public Transport Graph\",\n                                            className: \"w-full h-48 object-cover rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 78,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold mb-4 text-white\",\n                                            children: \"Traffic Congestion and Travel Times\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/graph2.png\",\n                                            alt: \"Traffic Congestion and Travel Times Graph\",\n                                            className: \"w-full h-48 object-cover rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-4 text-white\",\n                                        children: \"Environmental Impact\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-4 text-white\",\n                                        children: \"Accessibility and Inclusivity\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                        lineNumber: 97,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                            lineNumber: 73,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 56,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: increaseFontSize,\n                className: \"fixed bottom-2 right-4 p-3 text-lg bg-blue-600 text-white rounded-full shadow-lg\",\n                children: \"Increase Font Size\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: decreaseFontSize,\n                className: \"fixed bottom-2 right-100 p-3 text-lg bg-blue-600 text-white rounded-full shadow-lg\",\n                children: \"Decrease Font Size\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 110,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-white text-blue-600 text-center py-4 shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    style: {\n                        fontSize: \"\".concat(fontSize, \"px\")\n                    },\n                    children: \"Created by Vinesh R., Gregory R., Rayan M., Maadhav D.\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 118,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed top-3 left-4 p-3 \".concat(isSpeaking ? \"bg-red-500\" : \"bg-green-500\", \" text-lg text-white rounded-full shadow-lg\"),\n                onClick: toggleSpeech,\n                children: isSpeaking ? \"Pause Speech\" : \"Start Speech\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed top-3 right-4 p-3  text-lg text-white rounded-full shadow-lg\",\n                href: \"./map\",\n                children: \"Map\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cG3Yv/dPmv9hEsKgMl1SLWgi56U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDeUI7NENBQUdWLFdBQVU7c0RBQXdDOzs7Ozs7c0RBQ3RELDhEQUFDYTs0Q0FBSUMsS0FBSTs0Q0FBcUJDLEtBQUk7NENBQTRDZixXQUFVOzs7Ozs7Ozs7Ozs7OENBRzFGLDhEQUFDUztvQ0FBUVQsV0FBVTtvQ0FBMEJJLGNBQWMsSUFBTWYsWUFBWTtvQ0FDN0VnQixjQUFjLElBQU1UO29DQUNwQlUsS0FBS3JCOzhDQUNILDRFQUFDeUI7d0NBQUdWLFdBQVU7a0RBQXdDOzs7Ozs7Ozs7Ozs4Q0FHeEQsOERBQUNTO29DQUFRVCxXQUFVO29DQUEwQkksY0FBYyxJQUFNZixZQUFZO29DQUM3RWdCLGNBQWMsSUFBTVQ7b0NBQ3BCVSxLQUFLckI7OENBQ0gsNEVBQUN5Qjt3Q0FBR1YsV0FBVTtrREFBd0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTzlELDhEQUFDZ0I7Z0JBQ0NDLFNBQVMvQjtnQkFDVGMsV0FBVTswQkFDWDs7Ozs7OzBCQUdELDhEQUFDZ0I7Z0JBQ0NDLFNBQVM3QjtnQkFDVFksV0FBVTswQkFDWDs7Ozs7OzBCQUlELDhEQUFDa0I7Z0JBQU9sQixXQUFVOzBCQUNoQiw0RUFBQ21CO29CQUFFbkIsV0FBVTtvQkFBVVEsT0FBTzt3QkFBRTdCLFVBQVUsR0FBWSxPQUFUQSxVQUFTO29CQUFJOzhCQUFHOzs7Ozs7Ozs7OzswQkFHL0QsOERBQUNxQztnQkFDRGhCLFdBQVcsMEJBQXFFLE9BQTNDbkIsYUFBYSxlQUFlLGdCQUFlO2dCQUNoRm9DLFNBQVNuQjswQkFFUmpCLGFBQWEsaUJBQWlCOzs7Ozs7MEJBRy9CLDhEQUFDbUM7Z0JBQ0RoQixXQUFZO2dCQUNaWSxNQUFLOzBCQUNOOzs7Ozs7Ozs7Ozs7QUFNTDtHQXBJd0JsQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanN4P2QzNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuaW1wb3J0IFwiLi9BcHAuY3NzXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2ZvbnRTaXplLCBzZXRGb250U2l6ZV0gPSB1c2VTdGF0ZSgxNik7XG4gIGNvbnN0IFtpc1NwZWFraW5nLCBzZXRJc1NwZWFraW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3NwZWVjaCwgc2V0U3BlZWNoXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBzZWN0aW9uUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IGluY3JlYXNlRm9udFNpemUgPSAoKSA9PiB7XG4gICAgc2V0Rm9udFNpemUocHJldkZvbnRTaXplID0+IHByZXZGb250U2l6ZSArIDIpO1xuICB9O1xuXG4gIGNvbnN0IGRlY3JlYXNlRm9udFNpemUgPSAoKSA9PiB7XG4gICAgc2V0Rm9udFNpemUocHJldkZvbnRTaXplID0+IHByZXZGb250U2l6ZSAtIDIpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUhvdmVyID0gKGNvbnRlbnQpID0+IHtcbiAgICBpZiAoaXNTcGVha2luZykge1xuICAgICAgY29uc3QgbmV3U3BlZWNoID0gbmV3IFNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZShjb250ZW50KTtcbiAgICAgIHNldFNwZWVjaChuZXdTcGVlY2gpO1xuICAgICAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5zcGVhayhuZXdTcGVlY2gpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVMZWF2ZSA9ICgpID0+IHtcbiAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNwZWVjaCA9ICgpID0+IHtcbiAgICBpZiAoaXNTcGVha2luZykge1xuICAgICAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5jYW5jZWwoKTtcbiAgICAgIHNldElzU3BlYWtpbmcoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBuZXdTcGVlY2ggPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKCdIb3ZlciBvdmVyIGEgc2VjdGlvbiB0byByZWFkJyk7XG4gICAgICBzZXRTcGVlY2gobmV3U3BlZWNoKTtcbiAgICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuc3BlYWsobmV3U3BlZWNoKTtcbiAgICAgIHNldElzU3BlYWtpbmcodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIG1pbi1oLXNjcmVlbiBiZy1ncmFkaWVudC10by1yIGZyb20tYmx1ZS01MDAgdmlhLXB1cnBsZS01MDAgdG8tYmx1ZS01MDBcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+VGVjaCBTdXBwb3J0IFRpdGFuczwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibHVlLTYwMCB0ZXh0LWNlbnRlciBweS00IHNoYWRvdy1tZFwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1zZW1pYm9sZFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ1RlY2ggU3VwcG9ydCBUaXRhbnMnKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTGVhdmUoKX1cbiAgICAgICAgICAgIHJlZj17c2VjdGlvblJlZn0+VGVjaCBTdXBwb3J0IFRpdGFuczwvaDE+XG4gICAgICA8L2hlYWRlcj5cblxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiZmxleC1ncm93IHAtNFwiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAgfX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgcC04IG14LTQgbXktOFwiPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1iLThcIiA+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1zZW1pYm9sZCBtYi00XCIgc3R5bGU9e3sgZm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCB9fSBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdSw6lzdW1lIGFuZCBHaXRodWInKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTGVhdmUoKX1cbiAgICAgICAgICAgIHJlZj17c2VjdGlvblJlZn0+UsOpc3VtZSAmIEdpdEh1YjwvaDI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy52aXJ0dWFsZ2xvYmFsaGFja2F0aG9uLm9yZy9yZXN1bWUucGRmXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB1bmRlcmxpbmVcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdDbGljayB0byBkb3dubG9hZCB0ZWNoaW5jYWwgZG9jdW1lbnRhdGlvbicpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVMZWF2ZSgpfVxuICAgICAgICAgICAgcmVmPXtzZWN0aW9uUmVmfT5Eb3dubG9hZCBUZWNobmljYWwgRG9jdW1lbnRhdGlvbiAoTEFURVgpPC9hPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vbW9uZWsxXCIgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMCB1bmRlcmxpbmUgbXItNFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ0dpdGh1YiBSZXBvc2l0b3J5Jyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUxlYXZlKCl9XG4gICAgICAgICAgICByZWY9e3NlY3Rpb25SZWZ9PkdpdGh1YiBSZXBvc2l0b3J5PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBtZDpncmlkLWNvbHMtMiBnYXAtOFwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctYmxhY2sgcm91bmRlZC1sZyBwLTRcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdJbnRlZ3JhdGlvbiB3aXRoIFB1YmxpYyBUcmFuc3BvcnQnKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTGVhdmUoKX1cbiAgICAgICAgICAgIHJlZj17c2VjdGlvblJlZn0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LXdoaXRlXCI+SW50ZWdyYXRpb24gd2l0aCBQdWJsaWMgVHJhbnNwb3J0PC9oMj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dyYXBoMS5wbmdcIiBhbHQ9XCJJbnRlZ3JhdGlvbiB3aXRoIFB1YmxpYyBUcmFuc3BvcnQgR3JhcGhcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQtbGcgcC00XCIgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcignSW50ZWdyYXRpb24gd2l0aCBQdWJsaWMgVHJhbnNwb3J0Jyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUxlYXZlKCl9XG4gICAgICAgICAgICByZWY9e3NlY3Rpb25SZWZ9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC13aGl0ZVwiPlRyYWZmaWMgQ29uZ2VzdGlvbiBhbmQgVHJhdmVsIFRpbWVzPC9oMj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL2dyYXBoMi5wbmdcIiBhbHQ9XCJUcmFmZmljIENvbmdlc3Rpb24gYW5kIFRyYXZlbCBUaW1lcyBHcmFwaFwiIGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciByb3VuZGVkLWxnXCIgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctYmxhY2sgcm91bmRlZC1sZyBwLTRcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdJbnRlZ3JhdGlvbiB3aXRoIFB1YmxpYyBUcmFuc3BvcnQnKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTGVhdmUoKX1cbiAgICAgICAgICAgIHJlZj17c2VjdGlvblJlZn0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LXdoaXRlXCI+RW52aXJvbm1lbnRhbCBJbXBhY3Q8L2gyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLWxnIHAtNFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ0ludGVncmF0aW9uIHdpdGggUHVibGljIFRyYW5zcG9ydCcpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVMZWF2ZSgpfVxuICAgICAgICAgICAgcmVmPXtzZWN0aW9uUmVmfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtd2hpdGVcIj5BY2Nlc3NpYmlsaXR5IGFuZCBJbmNsdXNpdml0eTwvaDI+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogQWNjZXNzaWJpbGl0eSBCdXR0b24gKi99XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2luY3JlYXNlRm9udFNpemV9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0yIHJpZ2h0LTQgcC0zIHRleHQtbGcgYmctYmx1ZS02MDAgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgc2hhZG93LWxnXCJcbiAgICAgID5cbiAgICAgICAgSW5jcmVhc2UgRm9udCBTaXplXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgb25DbGljaz17ZGVjcmVhc2VGb250U2l6ZX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZml4ZWQgYm90dG9tLTIgcmlnaHQtMTAwIHAtMyB0ZXh0LWxnIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiXG4gICAgICA+XG4gICAgICAgIERlY3JlYXNlIEZvbnQgU2l6ZVxuICAgICAgPC9idXR0b24+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiYmctd2hpdGUgdGV4dC1ibHVlLTYwMCB0ZXh0LWNlbnRlciBweS00IHNoYWRvdy1tZFwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnXCIgc3R5bGU9e3sgZm9udFNpemU6IGAke2ZvbnRTaXplfXB4YCB9fT5DcmVhdGVkIGJ5IFZpbmVzaCBSLiwgR3JlZ29yeSBSLiwgUmF5YW4gTS4sIE1hYWRoYXYgRC48L3A+XG4gICAgICA8L2Zvb3Rlcj5cblxuICAgICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtgZml4ZWQgdG9wLTMgbGVmdC00IHAtMyAke2lzU3BlYWtpbmcgPyAnYmctcmVkLTUwMCcgOiAnYmctZ3JlZW4tNTAwJ30gdGV4dC1sZyB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdgfVxuICAgICAgb25DbGljaz17dG9nZ2xlU3BlZWNofVxuICAgID5cbiAgICAgIHtpc1NwZWFraW5nID8gJ1BhdXNlIFNwZWVjaCcgOiAnU3RhcnQgU3BlZWNoJ31cbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e2BmaXhlZCB0b3AtMyByaWdodC00IHAtMyAgdGV4dC1sZyB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdgfVxuICAgICAgaHJlZj1cIi4vbWFwXCJcbiAgICA+XG4gICAgICBNYXBcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsIkhlYWQiLCJIb21lIiwiZm9udFNpemUiLCJzZXRGb250U2l6ZSIsImlzU3BlYWtpbmciLCJzZXRJc1NwZWFraW5nIiwic3BlZWNoIiwic2V0U3BlZWNoIiwic2VjdGlvblJlZiIsImluY3JlYXNlRm9udFNpemUiLCJwcmV2Rm9udFNpemUiLCJkZWNyZWFzZUZvbnRTaXplIiwiaGFuZGxlSG92ZXIiLCJjb250ZW50IiwibmV3U3BlZWNoIiwiU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlIiwid2luZG93Iiwic3BlZWNoU3ludGhlc2lzIiwic3BlYWsiLCJoYW5kbGVMZWF2ZSIsImNhbmNlbCIsInRvZ2dsZVNwZWVjaCIsImRpdiIsImNsYXNzTmFtZSIsInRpdGxlIiwiaGVhZGVyIiwiaDEiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJyZWYiLCJtYWluIiwic3R5bGUiLCJzZWN0aW9uIiwiaDIiLCJhIiwiaHJlZiIsImltZyIsInNyYyIsImFsdCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJmb290ZXIiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});