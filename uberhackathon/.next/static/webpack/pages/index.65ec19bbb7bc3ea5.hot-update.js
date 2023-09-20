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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App.css */ \"./src/pages/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Home() {\n    _s();\n    const [fontSize, setFontSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(16);\n    const [isSpeaking, setIsSpeaking] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [speech, setSpeech] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const increaseFontSize = ()=>{\n        setFontSize((prevFontSize)=>prevFontSize + 2);\n    };\n    const decreaseFontSize = ()=>{\n        setFontSize((prevFontSize)=>prevFontSize - 2);\n    };\n    const handleHover = (content)=>{\n        if (isSpeaking) {\n            const newSpeech = new SpeechSynthesisUtterance(content);\n            setSpeech(newSpeech);\n            window.speechSynthesis.speak(newSpeech);\n        }\n    };\n    const handleLeave = ()=>{\n        window.speechSynthesis.cancel();\n    };\n    const toggleSpeech = ()=>{\n        if (isSpeaking) {\n            window.speechSynthesis.cancel();\n            setIsSpeaking(false);\n        } else {\n            const newSpeech = new SpeechSynthesisUtterance(\"Hover over a section to read\");\n            setSpeech(newSpeech);\n            window.speechSynthesis.speak(newSpeech);\n            setIsSpeaking(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"uberhackathon/src/app/logo.png\",\n                href: \"/icon?<generated>\",\n                type: \"image/<generated>\",\n                sizes: \"<generated>\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Tech Support Titans\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"bg-white text-blue-600 text-center py-4 shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-3xl font-semibold\",\n                    onMouseEnter: ()=>handleHover(\"Tech Support Titans\"),\n                    onMouseLeave: ()=>handleLeave(),\n                    ref: sectionRef,\n                    children: \"Tech Support Titans\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"flex-grow p-4\",\n                style: {\n                    fontSize: \"\".concat(fontSize, \"px\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"bg-white rounded-lg shadow-lg p-8 mx-4 my-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                            className: \"mb-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"text-2xl font-semibold mb-4\",\n                                    style: {\n                                        fontSize: \"\".concat(fontSize, \"px\")\n                                    },\n                                    onMouseEnter: ()=>handleHover(\"R\\xe9sume and Github\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: \"R\\xe9sume & GitHub\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex justify-between\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                            href: \"https://www.virtualglobalhackathon.org/resume.pdf\",\n                                            className: \"text-blue-600 underline\",\n                                            onMouseEnter: ()=>handleHover(\"Click to download techincal documentation\"),\n                                            onMouseLeave: ()=>handleLeave(),\n                                            ref: sectionRef,\n                                            children: \"Download Technical Documentation (LATEX)\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                href: \"https://github.com/monek1\",\n                                                className: \"text-blue-600 underline mr-4\",\n                                                onMouseEnter: ()=>handleHover(\"Github Repository\"),\n                                                onMouseLeave: ()=>handleLeave(),\n                                                ref: sectionRef,\n                                                children: \"Github Repository\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                                lineNumber: 73,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-1 md:grid-cols-2 gap-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold mb-4 text-white\",\n                                            children: \"Integration with Public Transport\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 84,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/graph1.png\",\n                                            alt: \"Integration with Public Transport Graph\",\n                                            className: \"w-full h-48 object-cover rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 85,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"text-xl font-semibold mb-4 text-white\",\n                                            children: \"Traffic Congestion and Travel Times\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 91,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"/images/graph2.png\",\n                                            alt: \"Traffic Congestion and Travel Times Graph\",\n                                            className: \"w-full h-48 object-cover rounded-lg\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 88,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-4 text-white\",\n                                        children: \"Environmental Impact\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                        lineNumber: 98,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                                    className: \"bg-black rounded-lg p-4\",\n                                    onMouseEnter: ()=>handleHover(\"Integration with Public Transport\"),\n                                    onMouseLeave: ()=>handleLeave(),\n                                    ref: sectionRef,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-semibold mb-4 text-white\",\n                                        children: \"Accessibility and Inclusivity\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                        lineNumber: 104,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: increaseFontSize,\n                className: \"fixed bottom-2 right-4 p-3 text-lg bg-blue-600 text-white rounded-full shadow-lg\",\n                children: \"Increase Font Size\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 111,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: decreaseFontSize,\n                className: \"fixed bottom-2 right-100 p-3 text-lg bg-blue-600 text-white rounded-full shadow-lg\",\n                children: \"Decrease Font Size\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 117,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"bg-white text-blue-600 text-center py-4 shadow-md\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg\",\n                    style: {\n                        fontSize: \"\".concat(fontSize, \"px\")\n                    },\n                    children: \"Created by Vinesh R., Gregory R., Rayan M., Maadhav D.\"\n                }, void 0, false, {\n                    fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                    lineNumber: 125,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"fixed top-3 left-4 p-3 \".concat(isSpeaking ? \"bg-red-500\" : \"bg-green-500\", \" text-lg text-white rounded-full shadow-lg\"),\n                onClick: toggleSpeech,\n                children: isSpeaking ? \"Pause Speech\" : \"Start Speech\"\n            }, void 0, false, {\n                fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n                lineNumber: 128,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/vinesh/Documents/GitHub/UberHackathon/uberhackathon/src/pages/index.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"cG3Yv/dPmv9hEsKgMl1SLWgi56U=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZCxXQUFVO29DQUEwQlMsY0FBYyxJQUFNcEIsWUFBWTtvQ0FDN0VxQixjQUFjLElBQU1kO29DQUNwQmUsS0FBSzFCOztzREFDSCw4REFBQzhCOzRDQUFHZixXQUFVO3NEQUF3Qzs7Ozs7O3NEQUN0RCw4REFBQ2lCOzRDQUFJQyxLQUFJOzRDQUFxQkMsS0FBSTs0Q0FBNENuQixXQUFVOzs7Ozs7Ozs7Ozs7OENBRzFGLDhEQUFDYztvQ0FBUWQsV0FBVTtvQ0FBMEJTLGNBQWMsSUFBTXBCLFlBQVk7b0NBQzdFcUIsY0FBYyxJQUFNZDtvQ0FDcEJlLEtBQUsxQjs4Q0FDSCw0RUFBQzhCO3dDQUFHZixXQUFVO2tEQUF3Qzs7Ozs7Ozs7Ozs7OENBR3hELDhEQUFDYztvQ0FBUWQsV0FBVTtvQ0FBMEJTLGNBQWMsSUFBTXBCLFlBQVk7b0NBQzdFcUIsY0FBYyxJQUFNZDtvQ0FDcEJlLEtBQUsxQjs4Q0FDSCw0RUFBQzhCO3dDQUFHZixXQUFVO2tEQUF3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFPOUQsOERBQUNvQjtnQkFDQ0MsU0FBU25DO2dCQUNUYyxXQUFVOzBCQUNYOzs7Ozs7MEJBR0QsOERBQUNvQjtnQkFDQ0MsU0FBU2pDO2dCQUNUWSxXQUFVOzBCQUNYOzs7Ozs7MEJBSUQsOERBQUNzQjtnQkFBT3RCLFdBQVU7MEJBQ2hCLDRFQUFDdUI7b0JBQUV2QixXQUFVO29CQUFVYSxPQUFPO3dCQUFFbEMsVUFBVSxHQUFZLE9BQVRBLFVBQVM7b0JBQUk7OEJBQUc7Ozs7Ozs7Ozs7OzBCQUcvRCw4REFBQ3lDO2dCQUNEcEIsV0FBVywwQkFBcUUsT0FBM0NuQixhQUFhLGVBQWUsZ0JBQWU7Z0JBQ2hGd0MsU0FBU3ZCOzBCQUVSakIsYUFBYSxpQkFBaUI7Ozs7Ozs7Ozs7OztBQUtyQztHQXBJd0JIO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qc3g/ZDM1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgXCIuL0FwcC5jc3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZm9udFNpemUsIHNldEZvbnRTaXplXSA9IHVzZVN0YXRlKDE2KTtcbiAgY29uc3QgW2lzU3BlYWtpbmcsIHNldElzU3BlYWtpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3BlZWNoLCBzZXRTcGVlY2hdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHNlY3Rpb25SZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgaW5jcmVhc2VGb250U2l6ZSA9ICgpID0+IHtcbiAgICBzZXRGb250U2l6ZShwcmV2Rm9udFNpemUgPT4gcHJldkZvbnRTaXplICsgMik7XG4gIH07XG5cbiAgY29uc3QgZGVjcmVhc2VGb250U2l6ZSA9ICgpID0+IHtcbiAgICBzZXRGb250U2l6ZShwcmV2Rm9udFNpemUgPT4gcHJldkZvbnRTaXplIC0gMik7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSG92ZXIgPSAoY29udGVudCkgPT4ge1xuICAgIGlmIChpc1NwZWFraW5nKSB7XG4gICAgICBjb25zdCBuZXdTcGVlY2ggPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKGNvbnRlbnQpO1xuICAgICAgc2V0U3BlZWNoKG5ld1NwZWVjaCk7XG4gICAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLnNwZWFrKG5ld1NwZWVjaCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUxlYXZlID0gKCkgPT4ge1xuICAgIHdpbmRvdy5zcGVlY2hTeW50aGVzaXMuY2FuY2VsKCk7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU3BlZWNoID0gKCkgPT4ge1xuICAgIGlmIChpc1NwZWFraW5nKSB7XG4gICAgICB3aW5kb3cuc3BlZWNoU3ludGhlc2lzLmNhbmNlbCgpO1xuICAgICAgc2V0SXNTcGVha2luZyhmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5ld1NwZWVjaCA9IG5ldyBTcGVlY2hTeW50aGVzaXNVdHRlcmFuY2UoJ0hvdmVyIG92ZXIgYSBzZWN0aW9uIHRvIHJlYWQnKTtcbiAgICAgIHNldFNwZWVjaChuZXdTcGVlY2gpO1xuICAgICAgd2luZG93LnNwZWVjaFN5bnRoZXNpcy5zcGVhayhuZXdTcGVlY2gpO1xuICAgICAgc2V0SXNTcGVha2luZyh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1ibHVlLTUwMCB2aWEtcHVycGxlLTUwMCB0by1ibHVlLTUwMFwiPlxuICAgICAgXG4gICAgICA8bGlua1xuICAgICAgICByZWw9XCJ1YmVyaGFja2F0aG9uL3NyYy9hcHAvbG9nby5wbmdcIlxuICAgICAgICBocmVmPVwiL2ljb24/PGdlbmVyYXRlZD5cIlxuICAgICAgICB0eXBlPVwiaW1hZ2UvPGdlbmVyYXRlZD5cIlxuICAgICAgICBzaXplcz1cIjxnZW5lcmF0ZWQ+XCJcbiAgICAgIC8+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlRlY2ggU3VwcG9ydCBUaXRhbnM8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmx1ZS02MDAgdGV4dC1jZW50ZXIgcHktNCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGRcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdUZWNoIFN1cHBvcnQgVGl0YW5zJyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUxlYXZlKCl9XG4gICAgICAgICAgICByZWY9e3NlY3Rpb25SZWZ9PlRlY2ggU3VwcG9ydCBUaXRhbnM8L2gxPlxuICAgICAgPC9oZWFkZXI+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cImZsZXgtZ3JvdyBwLTRcIiBzdHlsZT17eyBmb250U2l6ZTogYCR7Zm9udFNpemV9cHhgIH19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIHAtOCBteC00IG15LThcIj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYi04XCIgPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtc2VtaWJvbGQgbWItNFwiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAgfX0gb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcignUsOpc3VtZSBhbmQgR2l0aHViJyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUxlYXZlKCl9XG4gICAgICAgICAgICByZWY9e3NlY3Rpb25SZWZ9PlLDqXN1bWUgJiBHaXRIdWI8L2gyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cudmlydHVhbGdsb2JhbGhhY2thdGhvbi5vcmcvcmVzdW1lLnBkZlwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdW5kZXJsaW5lXCIgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcignQ2xpY2sgdG8gZG93bmxvYWQgdGVjaGluY2FsIGRvY3VtZW50YXRpb24nKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTGVhdmUoKX1cbiAgICAgICAgICAgIHJlZj17c2VjdGlvblJlZn0+RG93bmxvYWQgVGVjaG5pY2FsIERvY3VtZW50YXRpb24gKExBVEVYKTwvYT5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL21vbmVrMVwiIGNsYXNzTmFtZT1cInRleHQtYmx1ZS02MDAgdW5kZXJsaW5lIG1yLTRcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdHaXRodWIgUmVwb3NpdG9yeScpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVMZWF2ZSgpfVxuICAgICAgICAgICAgcmVmPXtzZWN0aW9uUmVmfT5HaXRodWIgUmVwb3NpdG9yeTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTIgZ2FwLThcIj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQtbGcgcC00XCIgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcignSW50ZWdyYXRpb24gd2l0aCBQdWJsaWMgVHJhbnNwb3J0Jyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUxlYXZlKCl9XG4gICAgICAgICAgICByZWY9e3NlY3Rpb25SZWZ9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC13aGl0ZVwiPkludGVncmF0aW9uIHdpdGggUHVibGljIFRyYW5zcG9ydDwvaDI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ncmFwaDEucG5nXCIgYWx0PVwiSW50ZWdyYXRpb24gd2l0aCBQdWJsaWMgVHJhbnNwb3J0IEdyYXBoXCIgY2xhc3NOYW1lPVwidy1mdWxsIGgtNDggb2JqZWN0LWNvdmVyIHJvdW5kZWQtbGdcIiAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy1ibGFjayByb3VuZGVkLWxnIHAtNFwiIG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlSG92ZXIoJ0ludGVncmF0aW9uIHdpdGggUHVibGljIFRyYW5zcG9ydCcpfVxuICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVMZWF2ZSgpfVxuICAgICAgICAgICAgcmVmPXtzZWN0aW9uUmVmfT5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQteGwgZm9udC1zZW1pYm9sZCBtYi00IHRleHQtd2hpdGVcIj5UcmFmZmljIENvbmdlc3Rpb24gYW5kIFRyYXZlbCBUaW1lczwvaDI+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9ncmFwaDIucG5nXCIgYWx0PVwiVHJhZmZpYyBDb25nZXN0aW9uIGFuZCBUcmF2ZWwgVGltZXMgR3JhcGhcIiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZC1sZ1wiIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLWJsYWNrIHJvdW5kZWQtbGcgcC00XCIgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVIb3ZlcignSW50ZWdyYXRpb24gd2l0aCBQdWJsaWMgVHJhbnNwb3J0Jyl9XG4gICAgICAgICAgICBvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZUxlYXZlKCl9XG4gICAgICAgICAgICByZWY9e3NlY3Rpb25SZWZ9PlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LXNlbWlib2xkIG1iLTQgdGV4dC13aGl0ZVwiPkVudmlyb25tZW50YWwgSW1wYWN0PC9oMj5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctYmxhY2sgcm91bmRlZC1sZyBwLTRcIiBvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZUhvdmVyKCdJbnRlZ3JhdGlvbiB3aXRoIFB1YmxpYyBUcmFuc3BvcnQnKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlTGVhdmUoKX1cbiAgICAgICAgICAgIHJlZj17c2VjdGlvblJlZn0+XG4gICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgbWItNCB0ZXh0LXdoaXRlXCI+QWNjZXNzaWJpbGl0eSBhbmQgSW5jbHVzaXZpdHk8L2gyPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIEFjY2Vzc2liaWxpdHkgQnV0dG9uICovfVxuICAgICAgPGJ1dHRvblxuICAgICAgICBvbkNsaWNrPXtpbmNyZWFzZUZvbnRTaXplfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXhlZCBib3R0b20tMiByaWdodC00IHAtMyB0ZXh0LWxnIGJnLWJsdWUtNjAwIHRleHQtd2hpdGUgcm91bmRlZC1mdWxsIHNoYWRvdy1sZ1wiXG4gICAgICA+XG4gICAgICAgIEluY3JlYXNlIEZvbnQgU2l6ZVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIG9uQ2xpY2s9e2RlY3JlYXNlRm9udFNpemV9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpeGVkIGJvdHRvbS0yIHJpZ2h0LTEwMCBwLTMgdGV4dC1sZyBiZy1ibHVlLTYwMCB0ZXh0LXdoaXRlIHJvdW5kZWQtZnVsbCBzaGFkb3ctbGdcIlxuICAgICAgPlxuICAgICAgICBEZWNyZWFzZSBGb250IFNpemVcbiAgICAgIDwvYnV0dG9uPlxuXG4gICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImJnLXdoaXRlIHRleHQtYmx1ZS02MDAgdGV4dC1jZW50ZXIgcHktNCBzaGFkb3ctbWRcIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1sZ1wiIHN0eWxlPXt7IGZvbnRTaXplOiBgJHtmb250U2l6ZX1weGAgfX0+Q3JlYXRlZCBieSBWaW5lc2ggUi4sIEdyZWdvcnkgUi4sIFJheWFuIE0uLCBNYWFkaGF2IEQuPC9wPlxuICAgICAgPC9mb290ZXI+XG5cbiAgICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT17YGZpeGVkIHRvcC0zIGxlZnQtNCBwLTMgJHtpc1NwZWFraW5nID8gJ2JnLXJlZC01MDAnIDogJ2JnLWdyZWVuLTUwMCd9IHRleHQtbGcgdGV4dC13aGl0ZSByb3VuZGVkLWZ1bGwgc2hhZG93LWxnYH1cbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZVNwZWVjaH1cbiAgICA+XG4gICAgICB7aXNTcGVha2luZyA/ICdQYXVzZSBTcGVlY2gnIDogJ1N0YXJ0IFNwZWVjaCd9XG4gICAgICA8L2J1dHRvbj5cblxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJIZWFkIiwiSG9tZSIsImZvbnRTaXplIiwic2V0Rm9udFNpemUiLCJpc1NwZWFraW5nIiwic2V0SXNTcGVha2luZyIsInNwZWVjaCIsInNldFNwZWVjaCIsInNlY3Rpb25SZWYiLCJpbmNyZWFzZUZvbnRTaXplIiwicHJldkZvbnRTaXplIiwiZGVjcmVhc2VGb250U2l6ZSIsImhhbmRsZUhvdmVyIiwiY29udGVudCIsIm5ld1NwZWVjaCIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsIndpbmRvdyIsInNwZWVjaFN5bnRoZXNpcyIsInNwZWFrIiwiaGFuZGxlTGVhdmUiLCJjYW5jZWwiLCJ0b2dnbGVTcGVlY2giLCJkaXYiLCJjbGFzc05hbWUiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJzaXplcyIsInRpdGxlIiwiaGVhZGVyIiwiaDEiLCJvbk1vdXNlRW50ZXIiLCJvbk1vdXNlTGVhdmUiLCJyZWYiLCJtYWluIiwic3R5bGUiLCJzZWN0aW9uIiwiaDIiLCJhIiwiaW1nIiwic3JjIiwiYWx0IiwiYnV0dG9uIiwib25DbGljayIsImZvb3RlciIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.jsx\n"));

/***/ })

});