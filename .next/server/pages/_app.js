"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9589);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6056);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__, _widgets__WEBPACK_IMPORTED_MODULE_3__]);
([_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__, _widgets__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Common = ({ children , renderHeader ,  })=>{
    const { modal , open  } = (0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .dd)({
        disableScrollLock: true,
        disableBackdropClose: true,
        disableEscapeKeyDown: true,
        actionButtonProps: {
            children: "Submit"
        },
        // cancelButtonProps: {
        //   children: 'Cancel',
        // },
        title: "Create new Challenge",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Challenge"
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .ScrollView */ .pf, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .h4, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets__WEBPACK_IMPORTED_MODULE_3__/* .HeaderLogo */ .OE, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets__WEBPACK_IMPORTED_MODULE_3__/* .HeaderFit */ .Uy, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                            size: "large",
                            variant: "contained",
                            onClick: open,
                            children: "Go Challenge!"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                children: children
            }),
            modal
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().memo(Common));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7338:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9589);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6056);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__, _widgets__WEBPACK_IMPORTED_MODULE_4__]);
([_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__, _widgets__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Guest = ({ children , renderHeader ,  })=>{
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(`(min-width: ${_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .BREAKPOINTS.md */ .j$.md}px)`);
    const { modal , open  } = (0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .dd)({
        title: "Create new Challenge",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Challenge"
        })
    });
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .ScrollView */ .pf, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_widgets__WEBPACK_IMPORTED_MODULE_4__/* .Header */ .h4, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets__WEBPACK_IMPORTED_MODULE_4__/* .HeaderLogo */ .OE, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_widgets__WEBPACK_IMPORTED_MODULE_4__/* .HeaderFit */ .Uy, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .zx, {
                            variant: "contained",
                            onClick: open,
                            children: "Go Challenge!"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .ScreenLayout */ .f6, {
                children: children
            }),
            modal
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().memo(Guest));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _guest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7338);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5494);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7484);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_guest__WEBPACK_IMPORTED_MODULE_2__, _common__WEBPACK_IMPORTED_MODULE_3__, _user__WEBPACK_IMPORTED_MODULE_4__]);
([_guest__WEBPACK_IMPORTED_MODULE_2__, _common__WEBPACK_IMPORTED_MODULE_3__, _user__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const NextApp = ({ isCommonPage =false , ...props })=>{
    const isAuthorized = false;
    const CurrentApp = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (isCommonPage) {
            return _common__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z;
        }
        if (isAuthorized) {
            return _user__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z;
        }
        return _guest__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z;
    }, [
        isCommonPage,
        isAuthorized
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CurrentApp, {
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7484:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9589);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__]);
_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const User = ({ withMenu =false , children ,  })=>{
    const isDesktop = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(`(min-width: ${_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .BREAKPOINTS.desktop */ .j$.desktop}px)`);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const layoutStyle = isDesktop ? {
        marginTop: "35px"
    } : {};
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .ScrollView */ .pf, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_1__/* .ScreenLayout */ .f6, {
            style: layoutStyle,
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8473:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9752);
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9589);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8309);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _jozani_uikit__WEBPACK_IMPORTED_MODULE_6__, _app__WEBPACK_IMPORTED_MODULE_7__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__, _jozani_uikit__WEBPACK_IMPORTED_MODULE_6__, _app__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const BaseApp = (props)=>{
    const { Component , pageProps  } = props;
    const { 0: queryClient  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(()=>new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClient()
    );
    const { isCommonPage =false , withMenu =false , renderHeader ,  } = (0,lodash__WEBPACK_IMPORTED_MODULE_2__.pick)((0,lodash__WEBPACK_IMPORTED_MODULE_2__.get)(Component, "type"), [
        "isCommonPage",
        "withMenu",
        "renderHeader", 
    ]);
    const appProps = {
        isCommonPage,
        withMenu,
        renderHeader
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_jozani_uikit__WEBPACK_IMPORTED_MODULE_6__/* .ThemeProvider */ .L_, {
        theme: (0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_6__/* .getTheme */ .gh)("dark", {
            typography: {
                fontFamily: _jozani_uikit__WEBPACK_IMPORTED_MODULE_6__/* .FONT_FAMILY */ .ut
            }
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_6__/* .GlobalStyle */ .ZL, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_app__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                ...appProps,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                                children: "Paylol"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1, maximum-scale=1"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                                rel: "icon",
                                href: "/favicon_64x64.png"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {
                        client: queryClient,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.Hydrate, {
                            state: pageProps?.dehydratedState,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("app", {
                                    "appCommon": isCommonPage
                                }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                })
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5692:
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ 8442:
/***/ ((module) => {

module.exports = require("@mui/material/styles");

/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 2364:
/***/ ((module) => {

module.exports = require("lottie-web");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 5611:
/***/ ((module) => {

module.exports = import("nanoid");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [56], () => (__webpack_exec__(8473)));
module.exports = __webpack_exports__;

})();