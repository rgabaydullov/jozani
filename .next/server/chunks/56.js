"use strict";
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 5285:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5547);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared__WEBPACK_IMPORTED_MODULE_2__]);
_shared__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ButtonPromo = ({ type , ...props })=>{
    return /*#__PURE__*/ _jsx(StyledButtonPromo, {
        ...props
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(ButtonPromo))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5547:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8237);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_0__]);
_ui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8237:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony export StyledButtonPromo */
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9589);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__]);
_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledButtonPromo = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx)`
  background: ${(0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .getCssVar */ .MX)("green", 500)};
  color: ${(0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .getCssVar */ .MX)("black", 90)};

  &:hover {
    background: ${(0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .getCssVar */ .MX)("green", 600)};
  }

  &:active {
    background: ${(0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .getCssVar */ .MX)("green", 700)};
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4138:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "zZ": () => (/* reexport safe */ _types__WEBPACK_IMPORTED_MODULE_3__.z)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5686);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared__WEBPACK_IMPORTED_MODULE_2__]);
_shared__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CardDigest = ({ type , bgColors =_shared__WEBPACK_IMPORTED_MODULE_2__/* .DIGEST_COLORS */ .$O , title , children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_2__/* .CardDigestWrapper */ .aW, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_2__/* .CardDigestBlock */ .sN, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_2__/* .CardDigestContainer */ .lm, {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared__WEBPACK_IMPORTED_MODULE_2__/* .StyledCardDigest */ .yq, {
                    type: type,
                    bgColors: bgColors,
                    ...props,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_2__/* .CardDigestTitle */ .AK, {
                            variant: "h6",
                            children: title
                        }),
                        children
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CardDigest));



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 393:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$O": () => (/* binding */ DIGEST_COLORS),
/* harmony export */   "QP": () => (/* binding */ DEFAULT_COLORS)
/* harmony export */ });
/* unused harmony export CATEGORY_COLORS */
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9589);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__]);
_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const DEFAULT_COLORS = [
    _jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .green[500] */ .ek[500],
    _jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .green[300] */ .ek[300]
];
const DIGEST_COLORS = {
    Main: DEFAULT_COLORS,
    Apricot: [
        "#FCB69F",
        "#F3CA92"
    ],
    Lavande: [
        "#FBC2EB",
        "#A18CD1"
    ],
    Marine: [
        "#00F2FE",
        "#4FACFE"
    ],
    Orange: [
        "#FF8C7F",
        "#FF8177"
    ],
    Nuclear: [
        "#38F9D7",
        "#43E97B"
    ],
    Peach: [
        "#FAD0C4",
        "#FF9A9E"
    ],
    Rose: [
        "#FF91FF",
        "#FBB9A7"
    ],
    Sky: [
        "#A5C0EE",
        "#FBC5EC"
    ],
    Violet: [
        "#764BA2",
        "#667EEA"
    ]
};
const CATEGORY_COLORS = {
    Animal: [
        "#7d4707",
        "#f0a967"
    ],
    Business: [
        "#753511",
        "#8f6035"
    ],
    Folks: [
        "#ee4d87",
        "#e79bbb"
    ],
    Giving: [
        "#e11b00",
        "#f98662"
    ],
    Health: [
        "#e89e86",
        "#ffe0c3"
    ],
    Housing: [
        "#f47703",
        "#fbcf35"
    ],
    Nature: [
        "#51dc5f",
        "#03f4ac"
    ],
    Nutrition: [
        "#f5963d",
        "#ffedad"
    ],
    Pray: [
        "#63daff",
        "#e1fffc"
    ],
    Promise: [
        "#262727",
        "#7c8082"
    ],
    Rest: [
        "#e9b020",
        "#fff7ab"
    ],
    Sport: [
        "#1d2e87",
        "#20bff4"
    ],
    Learn: [
        "#c90c00",
        "#d37f42"
    ]
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5686:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$O": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.$O),
/* harmony export */   "AK": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.AK),
/* harmony export */   "aW": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.aW),
/* harmony export */   "lm": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.lm),
/* harmony export */   "sN": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.sN),
/* harmony export */   "yq": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.yq)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(393);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3832);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_constants__WEBPACK_IMPORTED_MODULE_0__, _ui__WEBPACK_IMPORTED_MODULE_1__]);
([_constants__WEBPACK_IMPORTED_MODULE_0__, _ui__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3832:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AK": () => (/* binding */ CardDigestTitle),
/* harmony export */   "aW": () => (/* binding */ CardDigestWrapper),
/* harmony export */   "lm": () => (/* binding */ CardDigestContainer),
/* harmony export */   "sN": () => (/* binding */ CardDigestBlock),
/* harmony export */   "yq": () => (/* binding */ StyledCardDigest)
/* harmony export */ });
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9589);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(393);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__, _constants__WEBPACK_IMPORTED_MODULE_3__]);
([_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__, _constants__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CardDigestWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().section)`
  display: flex;
  position: relative;
  width: 140px;
`;
const CardDigestBlock = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  padding-top: 100%;
`;
const CardDigestContainer = (styled_components__WEBPACK_IMPORTED_MODULE_2___default().div)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
const CardDigestTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .Typography */ .ZT)``;
const StyledCardDigest = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zb)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 1.6rem;
  background: ${({ type , bgColors  })=>{
    const [from, to] = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.get)(bgColors, (0,lodash__WEBPACK_IMPORTED_MODULE_1__.capitalize)(type), _constants__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_COLORS */ .QP);
    return `linear-gradient(135deg, ${from} 0%, ${to} 100%)`;
}};
  font-size: ${(0,_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .getCssVar */ .MX)("font", "common")};
  opacity: .9;
  transition: all .27s;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 40:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Digest)
/* harmony export */ });
/* unused harmony export Category */
var Digest;
(function(Digest) {
    Digest["Main"] = "main";
    Digest["Apricot"] = "apricot";
    Digest["Lavande"] = "lavande";
    Digest["Marine"] = "marine";
    Digest["Orange"] = "orange";
    Digest["Nuclear"] = "nuclear";
    Digest["Peach"] = "peach";
    Digest["Rose"] = "rose";
    Digest["Sky"] = "sky";
    Digest["Violet"] = "violet";
})(Digest || (Digest = {}));
var Category;
(function(Category) {
    Category["Animal"] = "Animal";
    Category["Business"] = "Business";
    Category["Folks"] = "Folks";
    Category["Giving"] = "Giving";
    Category["Health"] = "Health";
    Category["Housing"] = "Housing";
    Category["Learn"] = "Learn";
    Category["Nature"] = "Nature";
    Category["Nutrition"] = "Nutrition";
    Category["Pray"] = "Pray";
    Category["Promise"] = "Promise";
    Category["Rest"] = "Rest";
    Category["Sport"] = "Sport";
})(Category || (Category = {}));


/***/ }),

/***/ 5025:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9487);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared__WEBPACK_IMPORTED_MODULE_2__]);
_shared__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CardPromo = ({ alignItems ="center" , justifyContent ="center" , style , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared__WEBPACK_IMPORTED_MODULE_2__/* .StyledCardPromo */ .z, {
        ...props,
        style: {
            ...style,
            alignItems: alignItems,
            justifyContent: justifyContent
        }
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CardPromo));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_0__.z)
/* harmony export */ });
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8996);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_0__]);
_ui__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ StyledCardPromo)
/* harmony export */ });
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9589);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__]);
_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const StyledCardPromo = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_jozani_uikit__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zb)`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
`;

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OE": () => (/* reexport safe */ _shared_ui__WEBPACK_IMPORTED_MODULE_4__.OE),
/* harmony export */   "Uy": () => (/* reexport safe */ _shared_ui__WEBPACK_IMPORTED_MODULE_4__.Uy),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jozani_uikit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9589);
/* harmony import */ var _shared_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9527);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_jozani_uikit__WEBPACK_IMPORTED_MODULE_3__]);
_jozani_uikit__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const Header = ({ children  })=>{
    const isMobile = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.useMediaQuery)(`(max-width: ${_jozani_uikit__WEBPACK_IMPORTED_MODULE_3__/* .BREAKPOINTS.md */ .j$.md}px)`);
    const { 0: isActive , 1: setIsActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        const listener = (e)=>{
            setIsActive(document.documentElement.scrollTop >= 15);
        };
        window.addEventListener("scroll", listener);
        return ()=>{
            window.removeEventListener("scroll", listener);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .HeaderWrapper */ .Pz, {
        isActive: isActive,
        id: "header",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_ui__WEBPACK_IMPORTED_MODULE_4__/* .HeaderContainer */ .gM, {
                children: children
            }),
            !isActive && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_jozani_uikit__WEBPACK_IMPORTED_MODULE_3__/* .Divider */ .iz, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Header));



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9527:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gM": () => (/* binding */ HeaderContainer),
  "Uy": () => (/* binding */ HeaderFit),
  "OE": () => (/* reexport */ ui_Logo),
  "Pz": () => (/* binding */ HeaderWrapper)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./widgets/header/shared/ui/Logo.tsx



const LogoCaption = (external_styled_components_default()).div`
  font-size: 2.6rem;
  font-weight: 900;
  color: #fff7ed;
  text-shadow: 0 0 18px rgba(0, 0, 0, .65);
`;
const randomInt = (min, max)=>Math.floor(min + Math.random() * (max + 1 - min))
;
const Logo = ()=>{
    const randomEmoji = String.fromCodePoint(+`1285${randomInt(13, 91)}`);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(LogoCaption, {
        children: [
            "Pay L",
            randomEmoji,
            "L"
        ]
    });
};
/* harmony default export */ const ui_Logo = (Logo);

;// CONCATENATED MODULE: ./widgets/header/shared/ui/index.tsx

const HeaderWrapper = (external_styled_components_default()).header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 2.4rem;
  width: 100%;
  background: ${({ isActive =false  })=>isActive ? "rgba(185, 235, 253, .15)" : "transparent"
};
  border: 1px solid transparent;
  z-index: 10;
  backdrop-filter: ${({ isActive =false  })=>isActive ? "blur(14px)" : "none"
};
  transition: all .27s;
`;
const HeaderContainer = (external_styled_components_default()).div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: 1.6rem 0;
  height: 4rem;
`;
const HeaderFit = (external_styled_components_default()).div`
  margin-left: auto;
`;



/***/ }),

/***/ 5208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ hero_promo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./widgets/hero-promo/shared/clip-path.tsx


const ClipPath = ()=>/*#__PURE__*/ jsx_runtime_.jsx("svg", {
        width: "0",
        height: "0",
        children: /*#__PURE__*/ jsx_runtime_.jsx("defs", {
            children: /*#__PURE__*/ jsx_runtime_.jsx("clipPath", {
                id: "curve",
                clipPathUnits: "objectBoundingBox",
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M 0 1 L 0 0 L 1 0 L 1 1 L 1 0.75 C 0.45 0.45 0.45 1 0 0.75 Z"
                })
            })
        })
    })
;
/* harmony default export */ const clip_path = (ClipPath);

;// CONCATENATED MODULE: ./widgets/hero-promo/shared/ui.ts

const StyledHeroWrapper = (external_styled_components_default()).section`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50vh;
`;
const HeroView = (external_styled_components_default()).div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  clip-path: url(#curve);
  overflow: hidden;
`;
const HeroContent = (external_styled_components_default()).div`
  position: relative;
  margin: 7.4rem 0 0;
  padding: 3.6rem 0;
`;


;// CONCATENATED MODULE: ./widgets/hero-promo/index.tsx



const HeroPromo = ({ backgroundComponent , children , style ,  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledHeroWrapper, {
        style: style,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(HeroView, {
                children: [
                    backgroundComponent,
                    /*#__PURE__*/ jsx_runtime_.jsx(clip_path, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HeroContent, {
                children: children
            })
        ]
    });
};
/* harmony default export */ const hero_promo = (/*#__PURE__*/external_react_default().memo(HeroPromo));


/***/ }),

/***/ 6056:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Nc": () => (/* reexport safe */ _hero_promo__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "OE": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_3__.OE),
/* harmony export */   "Od": () => (/* reexport safe */ _section_promo__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "Rb": () => (/* reexport safe */ _card_promo__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "Uy": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_3__.Uy),
/* harmony export */   "eK": () => (/* reexport safe */ _card_digest__WEBPACK_IMPORTED_MODULE_1__.ZP),
/* harmony export */   "h4": () => (/* reexport safe */ _header__WEBPACK_IMPORTED_MODULE_3__.ZP),
/* harmony export */   "zZ": () => (/* reexport safe */ _card_digest__WEBPACK_IMPORTED_MODULE_1__.zZ)
/* harmony export */ });
/* harmony import */ var _button_promo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5285);
/* harmony import */ var _card_digest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4138);
/* harmony import */ var _card_promo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5025);
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7160);
/* harmony import */ var _hero_promo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5208);
/* harmony import */ var _section_promo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6649);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_button_promo__WEBPACK_IMPORTED_MODULE_0__, _card_digest__WEBPACK_IMPORTED_MODULE_1__, _card_promo__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_3__]);
([_button_promo__WEBPACK_IMPORTED_MODULE_0__, _card_digest__WEBPACK_IMPORTED_MODULE_1__, _card_promo__WEBPACK_IMPORTED_MODULE_2__, _header__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ section_promo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./widgets/section-promo/shared/ui.ts

const StyledSectionPromo = (external_styled_components_default()).section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 6.4rem 0;
  padding: 2.4rem 0;
  background: linear-gradient(135deg, #A5C0EE 0%, #FBC5EC 100%);
`;

;// CONCATENATED MODULE: ./widgets/section-promo/shared/index.ts


;// CONCATENATED MODULE: ./widgets/section-promo/index.tsx



const SectionPromo = ({ children ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledSectionPromo, {
        children: children
    });
};
/* harmony default export */ const section_promo = (/*#__PURE__*/external_react_default().memo(SectionPromo));


/***/ }),

/***/ 9589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JX": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.JX),
/* harmony export */   "Kp": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.Kp),
/* harmony export */   "L_": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.f6),
/* harmony export */   "MX": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.MX),
/* harmony export */   "X2": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.X2),
/* harmony export */   "ZL": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ZL),
/* harmony export */   "ZT": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.ZT),
/* harmony export */   "Zb": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.Zb),
/* harmony export */   "dd": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.dd),
/* harmony export */   "ek": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ek),
/* harmony export */   "f6": () => (/* reexport safe */ _widgets__WEBPACK_IMPORTED_MODULE_2__.f),
/* harmony export */   "gh": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.gh),
/* harmony export */   "iz": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.iz),
/* harmony export */   "j$": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.j$),
/* harmony export */   "kJ": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.kJ),
/* harmony export */   "pf": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.pf),
/* harmony export */   "ut": () => (/* reexport safe */ _lib__WEBPACK_IMPORTED_MODULE_0__.ut),
/* harmony export */   "zx": () => (/* reexport safe */ _shared__WEBPACK_IMPORTED_MODULE_1__.zx)
/* harmony export */ });
/* harmony import */ var _lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5728);
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9693);
/* harmony import */ var _widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5544);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_shared__WEBPACK_IMPORTED_MODULE_1__]);
_shared__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5728:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "j$": () => (/* reexport */ breakpoints),
  "ut": () => (/* reexport */ FONT_FAMILY),
  "ZL": () => (/* reexport */ global),
  "f6": () => (/* reexport */ material_.ThemeProvider),
  "MX": () => (/* reexport */ getCssVar),
  "T2": () => (/* reexport */ getSizeUnit),
  "gh": () => (/* reexport */ getTheme),
  "ek": () => (/* reexport */ green)
});

// UNUSED EXPORTS: DARK_THEME, FONTS, LIGHT_THEME, black, blue, grey, hexToRgb, map2CssVars, red, white, yellow

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
// EXTERNAL MODULE: external "@mui/material/styles"
var styles_ = __webpack_require__(8442);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
;// CONCATENATED MODULE: ../../libs/uikit/src/lib/styles/helpers.ts

const map2CssVars = (vocabulary, prefix)=>`${(0,external_lodash_.join)((0,external_lodash_.transform)(vocabulary, (r, value, key)=>r.push(`--paylol-${prefix}-${/([0-9]+)/.test(key) && key || (0,external_lodash_.kebabCase)(key)}: ${(0,external_lodash_.get)(vocabulary, key)}`)
    , []), ";\r\n")};`
;
const getCssVar = (prefix, key)=>`var(--paylol-${prefix}-${key})`
;

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/types.ts
var Unit;
(function(Unit) {
    Unit["Pixel"] = "px";
    Unit["RootElement"] = "rem";
    Unit["Emphasized"] = "em";
    Unit["Percent"] = "%";
})(Unit || (Unit = {}));
var Colors;
(function(Colors) {
    Colors["Blue"] = "blue";
    Colors["Green"] = "green";
    Colors["Red"] = "red";
    Colors["Yellow"] = "yellow";
    Colors["Grey"] = "grey";
    Colors["White"] = "white";
    Colors["Black"] = "black";
})(Colors || (Colors = {}));
var Fonts;
(function(Fonts) {
    Fonts["Common"] = "common";
    Fonts["Small"] = "small";
    Fonts["Medium"] = "medium";
    Fonts["Large"] = "large";
    Fonts["H1"] = "h1";
    Fonts["H2"] = "h2";
    Fonts["H3"] = "h3";
    Fonts["H4"] = "h4";
    Fonts["H5"] = "h5";
    Fonts["H6"] = "h6";
    Fonts["LineHeight"] = "lineHeight";
    Fonts["Regular"] = "regular";
    Fonts["SemiBold"] = "semiBold";
    Fonts["Bold"] = "bold";
})(Fonts || (Fonts = {}));
var Breakpoints;
(function(Breakpoints) {
    Breakpoints["Mobile"] = "mobile";
    Breakpoints["XS"] = "xs";
    Breakpoints["SM"] = "sm";
    Breakpoints["MD"] = "md";
    Breakpoints["Tablet"] = "tablet";
    Breakpoints["Desktop"] = "desktop";
    Breakpoints["LG"] = "lg";
    Breakpoints["XL"] = "xl";
})(Breakpoints || (Breakpoints = {}));

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/breakpoints.ts
const BREAKPOINTS = {
    mobile: 390,
    xs: 480,
    sm: 576,
    md: 768,
    tablet: 768,
    desktop: 1024,
    lg: 1024,
    xl: 1440
};
/* harmony default export */ const breakpoints = (BREAKPOINTS);

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/utils.ts
const hexToRgb = (hex, alpha = 1, isRgbOnly = false)=>{
    const channels = parseInt(hex.slice(1, 7), 16);
    // tslint:disable: no-bitwise
    const r = channels >> 16 & 255;
    const g = channels >> 8 & 255;
    const b = channels & 255;
    const type = isRgbOnly ? "rgb" : "rgba";
    const rgb = [
        r,
        g,
        b, 
    ];
    if (!isRgbOnly) {
        rgb.push(alpha);
    }
    return `${type}(${rgb.join(",")})`;
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/black.ts

/* eslint-disable @typescript-eslint/naming-convention */ const black = {
    20: hexToRgb("#111314", 0.2),
    40: hexToRgb("#111314", 0.4),
    60: hexToRgb("#111314", 0.6),
    80: hexToRgb("#111314", 0.8),
    100: "#111314"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/blue.ts
/* eslint-disable @typescript-eslint/naming-convention */ const blue = {
    25: "#F5F9FF",
    50: "#E5EFFF",
    100: "#CCDFFF",
    200: "#99C0FF",
    300: "#68A2FF",
    400: "#3381FF",
    500: "#0062FF",
    600: "#004ECC",
    700: "#0044B2",
    800: "#003B99",
    900: "#003180",
    950: "#002766",
    975: "#001D4C"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/green.ts
/* eslint-disable @typescript-eslint/naming-convention */ const green = {
    25: "#F2FFED",
    50: "#D9FFC8",
    100: "#BFFFA4",
    200: "#A6FF80",
    300: "#8DFF5B",
    400: "#73FF37",
    500: "#5AFF12",
    600: "#47ED00",
    700: "#3CC800",
    800: "#31A400",
    900: "#268000",
    950: "#1B5B00",
    975: "#103700"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/grey.ts
/* eslint-disable @typescript-eslint/naming-convention */ const grey = {
    25: "#FAFCFF",
    50: "#F5F7F9",
    100: "#EBEDF0",
    200: "#D6DBE4",
    300: "#C4CBD6",
    400: "#A9B0BC",
    500: "#898E96",
    600: "#666A73",
    700: "#4E5158",
    800: "#43464B",
    900: "#3A3C41",
    950: "#292A2E",
    975: "#202124"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/red.ts
/* eslint-disable @typescript-eslint/naming-convention */ const red = {
    25: "#FFF7F7",
    50: "#FEE6E6",
    100: "#FDCECE",
    200: "#FB9D9D",
    300: "#FA7979",
    400: "#F94C4C",
    500: "#F60909",
    600: "#DB0808",
    700: "#AC0606",
    800: "#940505",
    900: "#7B0404",
    950: "#620404",
    975: "#4A0303"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/white.ts

/* eslint-disable @typescript-eslint/naming-convention */ const white = {
    20: hexToRgb("#ffffff", 0.2),
    40: hexToRgb("#ffffff", 0.4),
    60: hexToRgb("#ffffff", 0.6),
    80: hexToRgb("#ffffff", 0.8),
    100: "#ffffff"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/yellow.ts
/* eslint-disable @typescript-eslint/naming-convention */ const yellow = {
    25: "#FFFCF5",
    50: "#FFF8E6",
    100: "#FEF2CC",
    200: "#FEE59A",
    300: "#FDD868",
    500: "#FDAE1C",
    400: "#FCC51C",
    600: "#F79008",
    700: "#E26B03",
    800: "#C44D08",
    900: "#8D350C",
    950: "#732C0C",
    975: "#5F2207"
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/colors/index.ts








;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/helpers.ts

const getSizeUnit = (size, unit = Unit.RootElement)=>{
    switch(unit){
        case "px":
            return `${size}px`;
        case "%":
            return `${size}%`;
        case "em":
            return `${+size / 10}em`;
        case "rem":
        default:
            return `${+size / 10}rem`;
    }
};

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/fonts.ts

const FONT_FAMILY = "Lato, sans-serif";
const FONTS = {
    common: getSizeUnit(14),
    small: getSizeUnit(12),
    medium: getSizeUnit(14),
    large: getSizeUnit(16),
    h1: getSizeUnit(60),
    h2: getSizeUnit(32),
    h3: getSizeUnit(28),
    h4: getSizeUnit(24),
    h5: getSizeUnit(20),
    h6: getSizeUnit(18),
    lineHeight: 1.215,
    regular: 300,
    semiBold: 700,
    bold: 900
};
/* harmony default export */ const fonts = (FONTS);

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/constants/index.ts






;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/config/dark.ts
/* eslint-disable @typescript-eslint/no-explicit-any */ /* eslint-disable @typescript-eslint/naming-convention */ 




const DARK_THEME = (theme)=>{
    const { fontFamily =FONT_FAMILY  } = theme.typography || {};
    return (0,styles_.createTheme)({
        breakpoints: {
            step: 4,
            keys: Object.values(Breakpoints),
            values: breakpoints
        },
        palette: {
            mode: "dark",
            primary: {
                main: blue[500]
            },
            secondary: {
                // Buttons
                main: grey[100]
            },
            info: {
                // Buttons
                main: grey[900]
            },
            error: {
                // Buttons
                main: red[300]
            },
            success: {
                main: green[300]
            },
            text: {
                primary: black[100],
                secondary: grey[800]
            },
            background: {
                default: black[100]
            },
            tonalOffset: 0.115
        },
        typography: {
            button: {
                fontFamily,
                fontSize: getCssVar("font", "common"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(18),
                textAlign: "center",
                textTransform: "none"
            },
            h1: {
                fontFamily,
                fontSize: getCssVar("font", "h1"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(60)
            },
            h2: {
                fontFamily,
                fontSize: getCssVar("font", "h2"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(36)
            },
            h3: {
                fontFamily,
                fontSize: getCssVar("font", "h3"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(38)
            },
            h4: {
                fontFamily,
                fontSize: getCssVar("font", "h4"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(30)
            },
            h5: {
                fontFamily,
                fontSize: getCssVar("font", "h5"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(24)
            },
            h6: {
                fontFamily,
                fontSize: getCssVar("font", "h6"),
                fontWeight: getCssVar("font", "semi-bold"),
                lineHeight: getSizeUnit(22)
            },
            body1: {
                fontFamily,
                color: black[100],
                fontSize: getCssVar("font", "common"),
                lineHeight: getSizeUnit(18)
            },
            body2: {
                fontFamily,
                color: black[100],
                fontSize: getCssVar("font", "large"),
                lineHeight: getSizeUnit(22)
            },
            caption: {
                fontSize: getCssVar("font", "small"),
                lineHeight: getSizeUnit(14),
                letterSpacing: "0.2px"
            }
        },
        components: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            MuiButton: {
                styleOverrides: {
                    sizeLarge: {
                        height: getSizeUnit(48),
                        padding: "0 1.6rem",
                        borderRadius: ".6rem",
                        fontSize: getCssVar("font", "large"),
                        fontWeight: getCssVar("font", "bold"),
                        lineHeight: getSizeUnit(20),
                        letterSpacing: "0.1px"
                    },
                    sizeMedium: {
                        height: getSizeUnit(38),
                        padding: "0 1.6rem",
                        fontSize: getCssVar("font", "common"),
                        fontWeight: getCssVar("font", "bold")
                    },
                    sizeSmall: {
                        height: getSizeUnit(32),
                        padding: "0 1.2rem",
                        fontSize: getCssVar("font", "common"),
                        fontWeight: getCssVar("font", "bold"),
                        lineHeight: getSizeUnit(18)
                    },
                    containedPrimary: {
                        background: getCssVar("green", 500),
                        color: getCssVar("black", 80),
                        "&:hover": {
                            background: getCssVar("green", 600)
                        },
                        "&:active": {
                            background: getCssVar("green", 700)
                        }
                    },
                    containedSecondary: {
                        background: getCssVar("grey", 900),
                        color: getCssVar("grey", 100),
                        "&:hover": {
                            background: getCssVar("grey", 950)
                        },
                        "&:active": {
                            background: getCssVar("grey", 975)
                        }
                    },
                    textPrimary: {
                        color: getCssVar("green", 950),
                        "&:hover": {
                            color: getCssVar("green", 975)
                        },
                        "&:active": {
                            color: getCssVar("green", 975)
                        }
                    },
                    textSecondary: {
                        color: getCssVar("grey", 100),
                        "&:hover": {
                            background: getCssVar("grey", 950)
                        },
                        "&:active": {
                            background: getCssVar("grey", 975)
                        }
                    }
                }
            },
            MuiLink: {
                styleOverrides: {
                    root: ({ ownerState  })=>({
                            fontSize: getCssVar("font", "common"),
                            fontWeight: getCssVar("font", "semi-bold"),
                            color: getCssVar("blue", 300),
                            textDecoration: "none",
                            transition: "all .27s",
                            cursor: "pointer",
                            "&:hover": {
                                color: getCssVar("blue", 500)
                            },
                            "&:active": {
                                color: getCssVar("blue", 700)
                            }
                        })
                }
            },
            MuiSlider: {
                styleOverrides: {
                    thumbSizeSmall: {
                        width: "auto",
                        height: "inherit"
                    }
                }
            },
            MuiTextField: {
                styleOverrides: {
                    root: ()=>({
                            fontFamily,
                            fontWeight: getCssVar("font", "semi-bold")
                        })
                }
            }
        }
    });
};
/* harmony default export */ const dark = (DARK_THEME);

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/config/light.ts

const LIGHT_THEME = (theme)=>{
    const { fontFamily ="Roboto, Helvetica, Arial, sans-serif"  } = theme.typography || {};
    return (0,styles_.createTheme)({
        palette: {
            mode: "light"
        },
        typography: {
            fontFamily
        }
    });
};
/* harmony default export */ const light = (LIGHT_THEME);

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/config/index.ts



// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/provider.ts


;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/shared/index.ts






;// CONCATENATED MODULE: ../../libs/uikit/src/lib/theme/index.ts

const getTheme = (mode = "dark", theme)=>{
    return mode === "light" ? light(theme) : dark(theme);
};



;// CONCATENATED MODULE: ../../libs/uikit/src/lib/styles/global.tsx



const GlobalStyle = external_styled_components_.createGlobalStyle`
  :root {
    ${map2CssVars(fonts, "font")}
    ${map2CssVars(breakpoints, "bp")}
    --font-family: ${FONT_FAMILY};
    --smooth-transition: .27s;

    ${map2CssVars(red, "red")}
    ${map2CssVars(green, "green")}
    ${map2CssVars(blue, "blue")}
    ${map2CssVars(grey, "grey")}
    ${map2CssVars(yellow, "yellow")}
    ${map2CssVars(black, "black")}
    ${map2CssVars(white, "white")}
  }

  html {
    font-family: var(--paylol-font-family);
    font-weight: var(--paylolg-font-semi-bold);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smooth: auto;
  }
`;
/* harmony default export */ const global = (GlobalStyle);

;// CONCATENATED MODULE: ../../libs/uikit/src/lib/styles/index.ts



;// CONCATENATED MODULE: ../../libs/uikit/src/lib/index.ts




/***/ }),

/***/ 9693:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JX": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.JX),
/* harmony export */   "Kp": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.Kp),
/* harmony export */   "X2": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.X2),
/* harmony export */   "ZT": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.ZT),
/* harmony export */   "Zb": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.Zb),
/* harmony export */   "dd": () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_0__.dd),
/* harmony export */   "iz": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.iz),
/* harmony export */   "kJ": () => (/* reexport safe */ _model__WEBPACK_IMPORTED_MODULE_0__.kJ),
/* harmony export */   "pf": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.pf),
/* harmony export */   "zx": () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_1__.zx)
/* harmony export */ });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2592);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_model__WEBPACK_IMPORTED_MODULE_0__, _ui__WEBPACK_IMPORTED_MODULE_1__]);
([_model__WEBPACK_IMPORTED_MODULE_0__, _ui__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2592:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dd": () => (/* reexport safe */ _useModal__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "kJ": () => (/* reexport safe */ _useLottie__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _useLottie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3202);
/* harmony import */ var _useMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4842);
/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8316);
/* harmony import */ var _usePortal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6894);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_useMenu__WEBPACK_IMPORTED_MODULE_1__, _useModal__WEBPACK_IMPORTED_MODULE_2__]);
([_useMenu__WEBPACK_IMPORTED_MODULE_1__, _useModal__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3202:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ model_useLottie)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "lottie-web"
var external_lottie_web_ = __webpack_require__(2364);
var external_lottie_web_default = /*#__PURE__*/__webpack_require__.n(external_lottie_web_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/model/useLottie/shared/constants.ts
const DEFAULT_CONFIG = {
    renderer: "svg",
    loop: true,
    autoplay: true
};

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/model/useLottie/shared/ui.ts

const StyledView = (external_styled_components_default()).div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/model/useLottie/shared/index.ts



;// CONCATENATED MODULE: ../../libs/uikit/src/shared/model/useLottie/index.tsx




const useLottie = (props1)=>{
    const { animationData  } = props1;
    const { 0: isReady , 1: setIsReady  } = (0,external_react_.useState)(false);
    const animationContainerRef = (0,external_react_.useRef)(null);
    const animationInstanceRef = (0,external_react_.useRef)();
    const loadAnimation = (0,external_react_.useCallback)(()=>{
        if (!animationContainerRef.current) {
            return;
        }
        animationInstanceRef.current?.destroy();
        const config = {
            ...DEFAULT_CONFIG,
            ...props1,
            container: animationContainerRef.current
        };
        animationInstanceRef.current = external_lottie_web_default().loadAnimation(config);
        setIsReady(!!animationInstanceRef.current);
        return ()=>{
            animationInstanceRef.current?.destroy();
            animationInstanceRef.current = undefined;
        };
    }, [
        animationContainerRef,
        animationInstanceRef,
        props1
    ]);
    const View = (0,external_react_.useCallback)((props)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledView, {
            ref: animationContainerRef,
            ...props
        })
    , [
        animationContainerRef
    ]);
    (0,external_react_.useEffect)(()=>{
        const onUnmount = loadAnimation();
        // Clean up on unmount
        return ()=>onUnmount?.()
        ;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        animationData
    ]);
    return {
        isReady,
        loadAnimation,
        View
    };
};
/* harmony default export */ const model_useLottie = (useLottie);


/***/ }),

/***/ 4842:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_3__]);
_ui__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useMenu = ({ id , list , transformOrigin , renderItem , onButtonClick , onItemClick  })=>{
    const { 0: anchorEl , 1: setAnchorEl  } = useState(null);
    const { 0: sharedData1 , 1: setSharedData  } = useState(null);
    const open = useCallback((e, sharedData)=>{
        e.stopPropagation();
        setAnchorEl(e.currentTarget);
        if (sharedData) {
            setSharedData(sharedData);
        }
    }, []);
    const close = useCallback((e)=>{
        e.stopPropagation();
        setAnchorEl(null);
        if (sharedData1) {
            setSharedData(null);
        }
    }, [
        sharedData1
    ]);
    const onMenuButtonClick = useCallback((e)=>{
        if (onButtonClick) {
            onButtonClick(e, open);
            return;
        }
        open(e);
    }, [
        open,
        onButtonClick
    ]);
    const onMenuItemClick = useCallback((e, item)=>{
        if (onItemClick) {
            onItemClick(e, item, sharedData1);
        }
        close(e);
    }, [
        sharedData1,
        onItemClick
    ]);
    const menuList = useMemo(()=>list.map((item)=>{
            const menuItem = renderItem(item, sharedData1);
            if (!menuItem) {
                return null;
            }
            return /*#__PURE__*/ _jsx(StyledMenuItem, {
                onClick: (e)=>onMenuItemClick(e, item)
                ,
                children: menuItem
            });
        })
    , [
        list,
        sharedData1,
        renderItem
    ]);
    const menu = useMemo(()=>{
        return /*#__PURE__*/ _jsx(OriginMenu, {
            anchorEl: anchorEl,
            open: !!anchorEl,
            transformOrigin: transformOrigin,
            onClose: close,
            children: menuList
        });
    }, [
        anchorEl,
        transformOrigin,
        menuList
    ]);
    const MenuButton = useMemo(()=>({ onClick  })=>/*#__PURE__*/ _jsx(Button, {
                className: cn("flex", "ml-7", "w-4", "justify-center"),
                onClick: (e)=>{
                    if (onClick) {
                        onClick(e);
                        return;
                    }
                    onMenuButtonClick(e);
                },
                children: /*#__PURE__*/ _jsx("i", {
                    children: /*#__PURE__*/ _jsx(IconTriplePoints, {})
                })
            })
    , [
        onMenuButtonClick
    ]);
    return {
        anchorEl,
        MenuButton,
        menu,
        open,
        close
    };
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useMenu)));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4825);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui__WEBPACK_IMPORTED_MODULE_3__]);
_ui__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const useModal = ({ id , disableBackdropClose =false , children , onClose: _onClose , onSubmit: _onSubmit , ...props })=>{
    const { 0: isOpen , 1: setIsOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const { 0: sharedItem1 , 1: setSharedItem  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const open = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((sharedItem)=>{
        setIsOpen(true);
        if (sharedItem) {
            setSharedItem(sharedItem);
        }
    }, []);
    const close = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(()=>{
        setIsOpen(false);
    }, []);
    const onClose = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((_, reason)=>{
        if (reason === "backdropClick" && disableBackdropClose) {
            return false;
        }
        close();
        if (_onClose) {
            _onClose();
        }
    }, [
        disableBackdropClose,
        close,
        _onClose
    ]);
    const onSubmit = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)((e)=>{
        e.preventDefault();
        if (_onSubmit) {
            _onSubmit(sharedItem1);
        }
        onClose(e);
    }, [
        sharedItem1,
        onClose,
        _onSubmit
    ]);
    const modal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ui__WEBPACK_IMPORTED_MODULE_3__/* .Modal */ .u_, {
            open: isOpen,
            ...props,
            children: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.isFunction)(children) && children(close) || children,
            onClose: onClose,
            onSubmit: onSubmit
        })
    , [
        isOpen,
        children,
        props,
        close,
        onClose,
        onSubmit
    ]);
    return {
        isOpen,
        modal,
        open,
        close,
        onSubmit
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6894:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



const usePortal = (children, selector, type = "div")=>{
    const ref = useRef(null);
    const element = useRef(null);
    const getRootElement = useCallback(()=>{
        if (true) {
            return null;
        }
        if (!!ref && !ref.current) {
            const existingElement = document.querySelector(selector);
            if (existingElement) {
                ref.current = existingElement;
                return ref.current;
            }
            const newElement = createRootElement(selector, type);
            addRootElement(newElement);
            ref.current = newElement;
        }
        return ref.current;
    }, [
        selector,
        type,
        ref
    ]);
    useEffect(()=>{
        const rootElement = getRootElement();
        if (!rootElement) {
            return;
        }
        element.current = /*#__PURE__*/ createPortal(children, rootElement);
        return ()=>{
            ref?.current?.remove();
        };
    }, [
        ref,
        children,
        getRootElement
    ]);
    return {
        ref,
        element: element.current
    };
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (usePortal)));


/***/ }),

/***/ 2040:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/avatar/shared/ui.tsx



const ui_AvatarWrapper = (external_styled_components_default()).div`
  display: flex;
  flex: ${({ size =40  })=>`0 0 ${(0,lib/* getSizeUnit */.T2)(size)}`
};
  align-items: center;
  justify-content: center;
  width: ${({ size =40  })=>(0,lib/* getSizeUnit */.T2)(size)
};
  height: ${({ size =40  })=>(0,lib/* getSizeUnit */.T2)(size)
};
  background: ${(0,lib/* getCssVar */.MX)("grey", 950)};
  border: 0 solid transparent;
  border-radius: 50%;
  text-transform: uppercase;
  overflow: hidden;
`;
const ui_StyledAvatar = external_styled_components_default()(material_.Avatar)`
  display: flex;
  width: 100%;
  height: 100%;
  border: 0;
  font-size: ${(0,lib/* getCssVar */.MX)("font", "common")};
  font-weight: ${(0,lib/* getCssVar */.MX)("font", "bold")};
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/avatar/index.tsx



const Avatar = ({ size =40 , className , style , ...props })=>{
    return /*#__PURE__*/ _jsx(AvatarWrapper, {
        className: className,
        size: size,
        style: style,
        children: /*#__PURE__*/ _jsx(StyledAvatar, {
            ...props
        })
    });
};
/* harmony default export */ const avatar = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Avatar))));


/***/ }),

/***/ 4206:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: StyledBottomNavigation, StyledBottomNavigationAction, default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/bottom-navigation/shared/ui.tsx



const ui_StyledBottomNavigation = external_styled_components_default()(material_.BottomNavigation)`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 8.2rem;
  background: ${(0,lib/* getCssVar */.MX)("grey", 950)};
  border: 0 transparent solid;
  border-radius: 1.2rem 1.2rem 0 0;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.45);
  z-index: 10;
`;
const StyledBottomNavigationAction = external_styled_components_default()(material_.BottomNavigationAction)`
  &[class*=selected] {
    color: ${(0,lib/* getCssVar */.MX)("grey", 200)};
  }

  span:first-of-type {
    margin-top: .4rem;
    font-size: 1rem;
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/bottom-navigation/index.tsx



const BottomNavigation = ({ sx , ...props })=>{
    return /*#__PURE__*/ _jsx(StyledBottomNavigation, {
        ...props
    });
};
/* harmony default export */ const bottom_navigation = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(BottomNavigation))));




/***/ }),

/***/ 3431:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const Box = (props)=>/*#__PURE__*/ _jsx(MuiBox, {
        ...props
    })
;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Box))));


/***/ }),

/***/ 2167:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/breadcrumbs/shared/ui.ts



const ui_StyledBreadcrumbs = external_styled_components_default()(material_.Breadcrumbs)`
  margin: 2.4rem 0;
  color: inherit;

  a {
    color: inherit;

    &:hover {
      font-weight: ${(0,lib/* getCssVar */.MX)("font", "bold")};
      color: ${(0,lib/* getCssVar */.MX)("grey", 500)};
    }
  }

  @media screen and (min-width: ${lib/* BREAKPOINTS.md */.j$.md}px) {
    margin: 1.6rem 0;
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/breadcrumbs/index.tsx



const Breadcrumbs = (props)=>{
    return /*#__PURE__*/ _jsx(StyledBreadcrumbs, {
        ...props
    });
};
/* harmony default export */ const breadcrumbs = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Breadcrumbs))));


/***/ }),

/***/ 3166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ui_button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/button/shared/ui.ts


const StyledButton = external_styled_components_default()(material_.Button)`
  min-width: auto;
  max-width: none;
  min-height: 3.2rem;
  border-radius: .8rem;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/button/index.tsx



const Button = ({ component: Component , to , ...props })=>{
    const Wrapper = (0,external_react_.useMemo)(()=>({ children  })=>{
            if (Component) {
                return /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    href: to,
                    children: children
                });
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: children
            });
        }
    , [
        Component,
        to
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(Wrapper, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(StyledButton, {
            disableRipple: true,
            ...props
        })
    });
};
/* harmony default export */ const ui_button = (/*#__PURE__*/external_react_default().memo(Button));



/***/ }),

/***/ 9228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ card)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../../libs/uikit/src/shared/ui/divider/index.tsx + 1 modules
var divider = __webpack_require__(5806);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/card/shared/ui.ts



const StyledCard = external_styled_components_default()(material_.Card)`
  width: ${({ isFullWidth =false  })=>isFullWidth ? "100%" : "auto"
};
  height: ${({ isFullHeight =false  })=>isFullHeight ? "100%" : "auto"
};
  background: ${(0,lib/* getCssVar */.MX)("white", 100)};
  border: 0 solid ${(0,lib/* getCssVar */.MX)("grey", 200)};
  border-radius: 1.6rem;
  box-shadow: 2px 8px 16px ${(0,lib/* getCssVar */.MX)("grey", 200)};
`;
const CardTitleWrapper = (external_styled_components_default()).div`
  padding: 2.4rem;
  font-size: ${(0,lib/* getCssVar */.MX)("font", "h5")};
  font-weight: ${(0,lib/* getCssVar */.MX)("font", "bold")};

  @media screen and (max-width: ${lib/* BREAKPOINTS.sm */.j$.sm}px) {
    padding: 1rem .8rem;
    .ml-auto > button {
      padding: 0 .5rem;
      width: 120px;
    }
  }
`;
const CardContainer = (external_styled_components_default()).div`
  padding: 3.2rem 4rem;

  @media screen and (max-width: ${lib/* BREAKPOINTS.sm */.j$.sm}px) {
    padding: .6rem;
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/card/index.tsx




const Card = ({ isFullWidth =false , isFullHeight =false , title , children , ...props })=>{
    const titleComponent = (0,external_react_.useMemo)(()=>{
        if (title) {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CardTitleWrapper, {
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(divider/* default */.Z, {})
                ]
            });
        }
        return null;
    }, [
        title
    ]);
    // Content depends on 'title' prop
    const content = (0,external_react_.useMemo)(()=>{
        if (title) {
            return /*#__PURE__*/ jsx_runtime_.jsx(CardContainer, {
                children: children
            });
        }
        return children;
    }, [
        children,
        title
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(StyledCard, {
        isFullWidth: isFullWidth,
        isFullHeight: isFullHeight,
        ...props,
        children: [
            titleComponent,
            content
        ]
    });
};
/* harmony default export */ const card = (/*#__PURE__*/external_react_default().memo(Card));



/***/ }),

/***/ 8647:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../libs/uikit/src/shared/ui/icons/index.ts + 41 modules
var icons = __webpack_require__(5650);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/checkbox/shared/ui.tsx



const ui_StyledCheckbox = external_styled_components_default()(material_.Checkbox)`
  display: flex;
  position: relative;
  padding: 0;
  width: 2rem;
  height: 2rem;
  background: ${({ checked =false  })=>checked ? (0,lib/* getCssVar */.MX)("blue", 500) : "transparent"
};
  border: 1px solid transparent;
  border-color: ${({ checked =false  })=>checked ? (0,lib/* getCssVar */.MX)("blue", 500) : (0,lib/* getCssVar */.MX)("grey", 500)
};
  border-radius: .4rem;
  transition: all .27s;

  &:hover {
    background: ${({ checked =false  })=>checked ? (0,lib/* getCssVar */.MX)("blue", 500) : "transparent"
};
  }
`;
const ui_CheckboxWrapper = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  margin: .8rem 0 0;
`;
const ui_CheckboxLabel = (external_styled_components_default()).label`
  margin-left: 1rem;
  font-size: ${(0,lib/* getCssVar */.MX)("font", "large")};
  color: ${(0,lib/* getCssVar */.MX)("grey", 100)};
  cursor: pointer;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/checkbox/index.tsx




const Checkbox = ({ isChecked =false , isRequired =false , label , id , name , ...props })=>{
    const labelComponent = useMemo(()=>{
        if (label) {
            return /*#__PURE__*/ _jsx(CheckboxLabel, {
                htmlFor: id || name,
                children: label
            });
        }
        return null;
    }, [
        label,
        id,
        name
    ]);
    return /*#__PURE__*/ _jsxs(CheckboxWrapper, {
        children: [
            /*#__PURE__*/ _jsx(StyledCheckbox, {
                checked: isChecked,
                required: isRequired,
                id: id || name,
                name: name,
                ...props,
                icon: /*#__PURE__*/ _jsx("span", {}),
                checkedIcon: /*#__PURE__*/ _jsx("span", {
                    children: /*#__PURE__*/ _jsx(IconTick, {})
                })
            }),
            labelComponent
        ]
    });
};
/* harmony default export */ const ui_checkbox = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Checkbox))));



/***/ }),

/***/ 9280:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/chip/shared/ui.ts



const ui_ChipComponent = external_styled_components_default()(material_.Chip)`
  padding: .8rem;
  height: auto;
  font-family: var(--font-family);
  font-size: ${(0,lib/* getCssVar */.MX)("font", "small")};
  border-color: ${(0,lib/* getCssVar */.MX)("grey", 950)};
  border-radius: 100px;

  & > span {
    padding: 0 .8rem;
  }

  [class*=avatar] {
    margin: 0;
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/chip/index.tsx



const Chip = ({ children , ...props })=>/*#__PURE__*/ _jsx(ChipComponent, {
        ...props,
        children: children
    })
;
/* harmony default export */ const chip = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Chip))));


/***/ }),

/***/ 325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const Col = ({ sx , ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        item: true,
        sx: {
            ...sx,
            flex: 1
        },
        ...props
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Col));


/***/ }),

/***/ 5806:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ divider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/divider/shared/ui.tsx



const StyledDivider = external_styled_components_default()(material_.Divider)`
  background: ${(0,lib/* getCssVar */.MX)("white", 30)};
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/divider/index.tsx



const Divider = (props)=>/*#__PURE__*/ jsx_runtime_.jsx(StyledDivider, {
        ...props
    })
;
/* harmony default export */ const divider = (/*#__PURE__*/external_react_default().memo(Divider));


/***/ }),

/***/ 5784:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtualized_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_virtualized_list__WEBPACK_IMPORTED_MODULE_2__]);
_virtualized_list__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const FlatList = (props)=>/*#__PURE__*/ _jsx(VirtualizedList, {
        ...props
    })
;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(FlatList))));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3171:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: StyledForm, StyledFormWrapper, default, getFormComponent

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/form/shared/ui.ts



const ui_StyledFormWrapper = (external_styled_components_default()).div`
  display: flex;
  flex: 1;
  flex-direction: column;
  line-height: ${(0,lib/* getCssVar */.MX)("font", "line-height")};
  font-size: ${(0,lib/* getCssVar */.MX)("font", "common")};
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const StyledForm = (external_styled_components_default()).form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
const getFormComponent = (Component = StyledForm)=>styled(Component)``
;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/form/index.tsx




const Form = ({ initialValues ={} , children , formProvider: FormProvider , formComponent: FormComponent , onSubmit , ...props1 })=>{
    const renderChildren = useCallback((props)=>{
        if (isFunction(children)) {
            return /*#__PURE__*/ _jsx(FormComponent, {
                children: children(props)
            });
        }
        return /*#__PURE__*/ _jsx(FormComponent, {
            children: children
        });
    }, [
        children
    ]);
    return /*#__PURE__*/ _jsx(StyledFormWrapper, {
        children: /*#__PURE__*/ _jsx(FormProvider, {
            initialValues: initialValues,
            onSubmit: onSubmit,
            ...props1,
            children: renderChildren
        })
    });
};
/* harmony default export */ const ui_form = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Form))));



/***/ }),

/***/ 6823:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



/***/ }),

/***/ 5650:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Wc": () => (/* reexport */ shared_Cross)
});

// UNUSED EXPORTS: IconArrowBack, IconBrowserChrome, IconBrowserSafari, IconBrowserYandex, IconChannel, IconCheckRound, IconChevronDown, IconChevronLeft, IconChevronRight, IconClock, IconCopy, IconCustomize, IconDislike, IconDownload, IconEye, IconEyeClose, IconEyeOpen, IconInfo, IconLike, IconLogoSymbol, IconNavCalls, IconNavRooms, IconNavSuperuserDashboard, IconNavVideo, IconPlay, IconPlayOutline, IconPlaylist, IconPlus, IconSearch, IconSend, IconSettings, IconShare, IconSidebarPin, IconSidebarUnpin, IconSpinner, IconStar, IconTick, IconTrash, IconTriplePoints, IconUpload

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/ArrowBack.tsx



const ArrowBack = ({ width =15 , height =13 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 15 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M7.5426 12.1482C7.4126 12.2882 7.2426 12.3582 7.0626 12.3582C6.9026 12.3582 6.7526 12.3082 6.6226 12.1882L0.582597 6.69817C0.272598 6.41817 0.272598 5.93817 0.582597 5.65817L6.6226 0.168174C6.8926 -0.0718255 7.3026 -0.0518256 7.5426 0.208174C7.7826 0.478174 7.7726 0.888175 7.5026 1.12817L2.66695 5.52817H13.5626C13.9216 5.52817 14.2126 5.81919 14.2126 6.17817C14.2126 6.53716 13.9216 6.82817 13.5626 6.82817H2.66695L7.5026 11.2282C7.7626 11.4682 7.7826 11.8782 7.5426 12.1482Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_ArrowBack = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(ArrowBack))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/BrowserChrome.tsx



const BrowserChrome = ({ width =25 , height =24 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 25 24",
        fill: fill,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsxs("g", {
                clipPath: "url(#clip0_6558_73572)",
                children: [
                    /*#__PURE__*/ _jsx("path", {
                        d: "M22.8895 6.00045C21.8362 4.17636 20.3214 2.66164 18.4972 1.60852C16.673 0.555397 14.6038 0.000976562 12.4975 0.000976562C10.3911 0.000976562 8.3219 0.555397 6.49773 1.60852C4.67357 2.66164 3.15873 4.17636 2.10547 6.00045L2.82547 18.9605L22.8895 6.00045Z",
                        fill: "url(#paint0_linear_6558_73572)"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M7.3037 15L2.1077 6C1.05449 7.82421 0.500013 9.89351 0.5 11.9999C0.499987 14.1063 1.05444 16.1756 2.10762 17.9999C3.1608 19.8241 4.67561 21.3389 6.4998 22.3922C8.32399 23.4454 10.3933 23.9999 12.4997 24L24.2597 12L7.3037 15Z",
                        fill: "url(#paint1_linear_6558_73572)"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M17.696 15L12.5 24C14.6062 23.9995 16.6752 23.4447 18.4991 22.3913C20.3229 21.3379 21.8374 19.823 22.8903 17.9988C23.9432 16.1747 24.4974 14.1055 24.4973 11.9993C24.4972 9.89311 23.9427 7.82403 22.8896 6H12.5L17.696 15Z",
                        fill: "url(#paint2_linear_6558_73572)"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M12.5 18C13.2879 18 14.0681 17.8448 14.7961 17.5433C15.5241 17.2417 16.1855 16.7998 16.7426 16.2426C17.2998 15.6855 17.7417 15.0241 18.0433 14.2961C18.3448 13.5681 18.5 12.7879 18.5 12C18.5 11.2121 18.3448 10.4319 18.0433 9.7039C17.7417 8.97595 17.2998 8.31451 16.7426 7.75736C16.1855 7.20021 15.5241 6.75825 14.7961 6.45672C14.0681 6.15519 13.2879 6 12.5 6C10.9087 6 9.38258 6.63214 8.25736 7.75736C7.13214 8.88258 6.5 10.4087 6.5 12C6.5 13.5913 7.13214 15.1174 8.25736 16.2426C9.38258 17.3679 10.9087 18 12.5 18Z",
                        fill: "white"
                    }),
                    /*#__PURE__*/ _jsx("path", {
                        d: "M12.5 16.752C13.1241 16.752 13.742 16.6291 14.3186 16.3903C14.8951 16.1515 15.419 15.8014 15.8602 15.3602C16.3015 14.9189 16.6515 14.3951 16.8903 13.8185C17.1291 13.242 17.252 12.624 17.252 12C17.252 11.376 17.1291 10.758 16.8903 10.1815C16.6515 9.60495 16.3015 9.08109 15.8602 8.63983C15.419 8.19857 14.8951 7.84854 14.3186 7.60973C13.742 7.37092 13.1241 7.248 12.5 7.248C11.2397 7.248 10.031 7.74866 9.13988 8.63983C8.2487 9.531 7.74805 10.7397 7.74805 12C7.74805 13.2603 8.2487 14.469 9.13988 15.3602C10.031 16.2513 11.2397 16.752 12.5 16.752Z",
                        fill: "#1A73E8"
                    })
                ]
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint0_linear_6558_73572",
                        x1: "2.10787",
                        y1: "7.50045",
                        x2: "22.8895",
                        y2: "7.50045",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#D93025"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#EA4335"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint1_linear_6558_73572",
                        x1: "13.7981",
                        y1: "23.2488",
                        x2: "3.4061",
                        y2: "5.2488",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#1E8E3E"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#34A853"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint2_linear_6558_73572",
                        x1: "10.748",
                        y1: "24",
                        x2: "21.14",
                        y2: "6.0312",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                stopColor: "#FCC934"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                stopColor: "#FBBC04"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("clipPath", {
                        id: "clip0_6558_73572",
                        children: /*#__PURE__*/ _jsx("rect", {
                            width: "24",
                            height: "24",
                            fill: "white",
                            transform: "translate(0.5)"
                        })
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const shared_BrowserChrome = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(BrowserChrome))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/BrowserSafari.tsx



const BrowserSafari = ({ width =32 , height =32 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 33 32",
        fill: fill,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("g", {
                filter: "url(#filter0_d_6886_72578)",
                children: /*#__PURE__*/ _jsxs("g", {
                    "clip-path": "url(#clip0_6886_72578)",
                    children: [
                        /*#__PURE__*/ _jsx("mask", {
                            id: "mask0_6886_72578",
                            style: {
                                maskType: "alpha"
                            },
                            maskUnits: "userSpaceOnUse",
                            x: "4",
                            y: "2",
                            width: "25",
                            height: "24",
                            children: /*#__PURE__*/ _jsx("path", {
                                d: "M28.4984 8.61978C28.4969 8.37975 28.4942 8.13978 28.4876 7.89987C28.4736 7.37697 28.4427 6.84958 28.3497 6.33251C28.2554 5.80798 28.1014 5.31979 27.8587 4.8432C27.6201 4.37477 27.3084 3.94612 26.9365 3.5745C26.5647 3.20288 26.136 2.8914 25.6673 2.65295C25.1903 2.41018 24.7016 2.25622 24.1764 2.16194C23.6593 2.06909 23.1318 2.0383 22.6089 2.02417C22.3688 2.01768 22.1287 2.01494 21.8886 2.01346C21.6035 2.01171 21.3184 2.01185 21.0333 2.01185L17.7232 2H15.2475L11.996 2.01185C11.7103 2.01185 11.4247 2.01171 11.139 2.01346C10.8984 2.01494 10.6579 2.01768 10.4173 2.02417C9.8932 2.0383 9.36448 2.06912 8.84612 2.16209C8.32031 2.25634 7.83088 2.41024 7.35315 2.65283C6.88356 2.89132 6.45386 3.20282 6.08128 3.5745C5.70876 3.94609 5.3965 4.37465 5.15746 4.843C4.91408 5.31982 4.75977 5.8083 4.66523 6.33312C4.57215 6.84999 4.5413 7.3772 4.52712 7.89987C4.52065 8.13981 4.51785 8.37978 4.5164 8.61978C4.51465 8.90475 4.5 9.25872 4.5 9.54366V12.7502V15.2524L4.5148 18.527C4.5148 18.8123 4.51468 19.0976 4.5164 19.383C4.51785 19.6233 4.52065 19.8636 4.52715 20.1039C4.5413 20.6274 4.5722 21.1556 4.66538 21.6733C4.75989 22.1986 4.91417 22.6875 5.15734 23.1647C5.39641 23.6338 5.70873 24.063 6.08128 24.4351C6.45383 24.8073 6.88341 25.1191 7.35292 25.3579C7.83094 25.601 8.3206 25.7552 8.84674 25.8496C9.36486 25.9426 9.89341 25.9734 10.4173 25.9876C10.6579 25.9941 10.8984 25.9968 11.1391 25.9983C11.4247 26 11.7103 26 11.996 26H15.2769H17.7587H21.0333C21.3184 26 21.6035 26 21.8886 25.9983C22.1287 25.9968 22.3688 25.9941 22.6089 25.9876C23.132 25.9734 23.6597 25.9425 24.1771 25.8495C24.7019 25.7551 25.1903 25.601 25.6671 25.358C26.1358 25.1193 26.5647 24.8073 26.9365 24.4351C27.3083 24.063 27.62 23.6339 27.8586 23.1649C28.1014 22.6874 28.2555 22.1983 28.3498 21.6727C28.4427 21.1552 28.4736 20.6272 28.4877 20.1039C28.4942 19.8636 28.4969 19.6233 28.4984 19.383C28.5 19.0976 28.5 18.8123 28.5 18.527C28.5 18.527 28.5 18.527 28.5 18.527C28.5 18.527 28.5 15.3102 28.5 15.2524V12.7475C28.5 12.7048 28.5 9.47457 28.5 9.47457C28.5 9.47457 28.5 9.47457 28.5 9.47457C28.5 9.18966 28.5 8.90472 28.4984 8.61978Z",
                                fill: "#8E8E93"
                            })
                        }),
                        /*#__PURE__*/ _jsxs("g", {
                            mask: "url(#mask0_6886_72578)",
                            children: [
                                /*#__PURE__*/ _jsx("path", {
                                    d: "M28.4984 8.61978C28.4969 8.37975 28.4942 8.13978 28.4876 7.89987C28.4736 7.37697 28.4427 6.84958 28.3497 6.33251C28.2554 5.80798 28.1014 5.31979 27.8587 4.8432C27.6201 4.37477 27.3084 3.94612 26.9365 3.5745C26.5647 3.20288 26.136 2.8914 25.6673 2.65295C25.1903 2.41018 24.7016 2.25622 24.1764 2.16194C23.6593 2.06909 23.1318 2.0383 22.6089 2.02417C22.3688 2.01768 22.1287 2.01494 21.8886 2.01346C21.6035 2.01171 21.3184 2.01185 21.0333 2.01185L17.7232 2H15.2475L11.996 2.01185C11.7103 2.01185 11.4247 2.01171 11.139 2.01346C10.8984 2.01494 10.6579 2.01768 10.4173 2.02417C9.8932 2.0383 9.36448 2.06912 8.84612 2.16209C8.32031 2.25634 7.83088 2.41024 7.35315 2.65283C6.88356 2.89132 6.45386 3.20282 6.08128 3.5745C5.70876 3.94609 5.3965 4.37465 5.15746 4.843C4.91408 5.31982 4.75977 5.8083 4.66523 6.33312C4.57215 6.84999 4.5413 7.3772 4.52712 7.89987C4.52065 8.13981 4.51785 8.37978 4.5164 8.61978C4.51465 8.90475 4.5 9.25872 4.5 9.54366V12.7502V15.2524L4.5148 18.527C4.5148 18.8123 4.51468 19.0976 4.5164 19.383C4.51785 19.6233 4.52065 19.8636 4.52715 20.1039C4.5413 20.6274 4.5722 21.1556 4.66538 21.6733C4.75989 22.1986 4.91417 22.6875 5.15734 23.1647C5.39641 23.6338 5.70873 24.063 6.08128 24.4351C6.45383 24.8073 6.88341 25.1191 7.35292 25.3579C7.83094 25.601 8.3206 25.7552 8.84674 25.8496C9.36486 25.9426 9.89341 25.9734 10.4173 25.9876C10.6579 25.9941 10.8984 25.9968 11.1391 25.9983C11.4247 26 11.7103 26 11.996 26H15.2769H17.7587H21.0333C21.3184 26 21.6035 26 21.8886 25.9983C22.1287 25.9968 22.3688 25.9941 22.6089 25.9876C23.132 25.9734 23.6597 25.9425 24.1771 25.8495C24.7019 25.7551 25.1903 25.601 25.6671 25.358C26.1358 25.1193 26.5647 24.8073 26.9365 24.4351C27.3083 24.063 27.62 23.6339 27.8586 23.1649C28.1014 22.6874 28.2555 22.1983 28.3498 21.6727C28.4427 21.1552 28.4736 20.6272 28.4877 20.1039C28.4942 19.8636 28.4969 19.6233 28.4984 19.383C28.5 19.0976 28.5 18.8123 28.5 18.527C28.5 18.527 28.5 18.527 28.5 18.527C28.5 18.527 28.5 15.3102 28.5 15.2524V12.7475C28.5 12.7048 28.5 9.47457 28.5 9.47457C28.5 9.47457 28.5 9.47457 28.5 9.47457C28.5 9.18966 28.5 8.90472 28.4984 8.61978Z",
                                    fill: "url(#paint0_linear_6886_72578)"
                                }),
                                /*#__PURE__*/ _jsx("g", {
                                    style: {
                                        mixBlendMode: "hard-light"
                                    },
                                    filter: "url(#filter1_ddiii_6886_72578)",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        "fill-rule": "evenodd",
                                        clipRule: "evenodd",
                                        d: "M30.793 6.72677C30.8008 7.01282 30.8041 7.29893 30.8058 7.58512C30.8078 7.92486 30.8078 8.2646 30.8078 8.6043V12.5067V15.4932V19.3976C30.8078 19.7378 30.8078 20.0779 30.8058 20.4181C30.8041 20.7047 30.8008 20.9912 30.7931 21.2777C30.7762 21.9017 30.7395 22.5312 30.6287 23.1483C30.5162 23.7749 30.3326 24.3581 30.043 24.9273C29.7585 25.4866 29.3869 25.9982 28.9436 26.4419C28.5003 26.8856 27.989 27.2576 27.4301 27.5423C26.8616 27.8319 26.2792 28.0157 25.6535 28.1282C25.0366 28.2392 24.4074 28.276 23.7837 28.2929C23.4975 28.3006 23.2112 28.3039 22.9249 28.3056C22.5853 28.3077 22.2457 28.3077 21.9061 28.3077H21.9052H18.0009H15.0417H11.1299H11.1289C10.7887 28.3077 10.4484 28.3077 10.1082 28.3056C9.82128 28.3039 9.53447 28.3006 9.24765 28.2929C8.62298 28.276 7.99279 28.2392 7.37503 28.1284C6.74772 28.0158 6.16388 27.832 5.59394 27.5422C5.03414 27.2574 4.52195 26.8856 4.07775 26.4419C3.63356 25.9982 3.26118 25.4864 2.97614 24.9271C2.6862 24.3581 2.50225 23.7752 2.38956 23.149C2.27847 22.5316 2.24163 21.9019 2.22475 21.2777C2.217 20.9912 2.21367 20.7047 2.21193 20.4181C2.21001 20.0983 2.21002 19.7784 2.21002 19.4585L2.21002 19.3976L2.19238 15.4932V12.5098V8.68667C2.19238 8.50453 2.1974 8.29874 2.20238 8.09465C2.20669 7.91806 2.21097 7.74274 2.21193 7.58512C2.21367 7.29897 2.217 7.01285 2.22471 6.72677C2.24163 6.10359 2.2784 5.47499 2.38939 4.85872C2.50211 4.23297 2.6861 3.65056 2.97628 3.08204C3.26128 2.52362 3.63359 2.01264 4.07775 1.56959C4.52198 1.12644 5.03431 0.755031 5.59422 0.470684C6.16381 0.18144 6.74737 -0.00205868 7.3743 -0.114436C7.99234 -0.225286 8.62274 -0.262027 9.24765 -0.27887C9.53447 -0.286614 9.82124 -0.289878 10.1082 -0.291649C10.4244 -0.293584 10.7406 -0.293573 11.0569 -0.293561L11.1299 -0.293559L15.0067 -0.307693H17.9585L21.9052 -0.293559L21.978 -0.293561C22.2937 -0.293573 22.6093 -0.293584 22.9249 -0.291649C23.2112 -0.289878 23.4975 -0.286614 23.7837 -0.27887C24.4072 -0.262027 25.0362 -0.22532 25.6528 -0.11461C26.2789 -0.00219759 26.8615 0.181371 27.4304 0.470823C27.9891 0.755135 28.5003 1.12651 28.9436 1.56959C29.387 2.01268 29.7586 2.52376 30.0431 3.08228C30.3325 3.65052 30.5161 4.23259 30.6286 4.85799C30.7395 5.4745 30.7762 6.10331 30.793 6.72677ZM16.5001 23.2308C21.5981 23.2308 25.7308 19.098 25.7308 14C25.7308 8.90198 21.5981 4.76923 16.5001 4.76923C11.4021 4.76923 7.2693 8.90198 7.2693 14C7.2693 19.098 11.4021 23.2308 16.5001 23.2308Z",
                                        fill: "url(#paint1_linear_6886_72578)"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("g", {
                                    style: {
                                        mixBlendMode: "soft-light"
                                    },
                                    opacity: "0.2",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        d: "M16.2767 7.4737C16.3366 7.24349 16.6634 7.24349 16.7233 7.4737L17.7518 11.4264C17.9203 12.074 18.426 12.5797 19.0736 12.7482L23.0263 13.7767C23.2565 13.8366 23.2565 14.1634 23.0263 14.2233L19.0736 15.2518C18.426 15.4203 17.9203 15.926 17.7518 16.5736L16.7233 20.5263C16.6634 20.7565 16.3366 20.7565 16.2767 20.5263L15.2482 16.5736C15.0797 15.926 14.574 15.4203 13.9264 15.2518L9.97368 14.2233C9.74347 14.1634 9.74347 13.8366 9.97368 13.7767L13.9264 12.7482C14.574 12.5797 15.0797 12.074 15.2482 11.4264L16.2767 7.4737Z",
                                        fill: "white"
                                    })
                                }),
                                /*#__PURE__*/ _jsx("g", {
                                    style: {
                                        mixBlendMode: "overlay"
                                    },
                                    opacity: "0.44",
                                    children: /*#__PURE__*/ _jsx("path", {
                                        "fill-rule": "evenodd",
                                        clipRule: "evenodd",
                                        d: "M11.2783 8.77829C11.0981 8.95853 11.0981 9.25076 11.2783 9.431L12.5838 10.7364C12.764 10.9167 13.0563 10.9167 13.2365 10.7364C13.4167 10.5562 13.4167 10.264 13.2365 10.0837L11.9311 8.77829C11.7508 8.59805 11.4586 8.59805 11.2783 8.77829ZM19.7636 17.2636C19.5834 17.4438 19.5834 17.736 19.7636 17.9163L21.0691 19.2217C21.2493 19.402 21.5415 19.402 21.7218 19.2217C21.902 19.0415 21.902 18.7492 21.7218 18.569L20.4163 17.2636C20.2361 17.0833 19.9439 17.0833 19.7636 17.2636ZM11.9311 19.2217C11.7508 19.402 11.4586 19.402 11.2784 19.2217C11.0981 19.0415 11.0981 18.7492 11.2784 18.569L12.5838 17.2636C12.764 17.0833 13.0563 17.0833 13.2365 17.2636C13.4167 17.4438 13.4167 17.736 13.2365 17.9163L11.9311 19.2217ZM19.7636 10.7364C19.9439 10.9167 20.2361 10.9167 20.4163 10.7364L21.7218 9.431C21.902 9.25076 21.902 8.95853 21.7218 8.77829C21.5415 8.59804 21.2493 8.59804 21.0691 8.77829L19.7636 10.0837C19.5834 10.264 19.5834 10.5562 19.7636 10.7364Z",
                                        fill: "white"
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("g", {
                                    filter: "url(#filter2_dd_6886_72578)",
                                    children: [
                                        /*#__PURE__*/ _jsx("path", {
                                            d: "M20.8839 7.33825C21.0651 7.12205 21.4018 7.35775 21.2606 7.60198L17.2561 14.5295L15.7438 13.4705L20.8839 7.33825Z",
                                            fill: "url(#paint2_linear_6886_72578)"
                                        }),
                                        /*#__PURE__*/ _jsx("g", {
                                            style: {
                                                mixBlendMode: "overlay"
                                            },
                                            children: /*#__PURE__*/ _jsx("path", {
                                                "fill-rule": "evenodd",
                                                clipRule: "evenodd",
                                                d: "M21.1932 7.29745C21.104 7.23502 20.9745 7.23015 20.8839 7.33825L15.7438 13.4705L17.2561 14.5295L17.2563 14.5292L16.5002 13.9997L21.1932 7.29745Z",
                                                fill: "url(#paint3_linear_6886_72578)"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsx("path", {
                                            d: "M12.1161 20.6617C11.9349 20.8779 11.5982 20.6422 11.7394 20.398L15.7439 13.4705L17.2562 14.5295L12.1161 20.6617Z",
                                            fill: "url(#paint4_linear_6886_72578)"
                                        }),
                                        /*#__PURE__*/ _jsx("g", {
                                            style: {
                                                mixBlendMode: "overlay"
                                            },
                                            children: /*#__PURE__*/ _jsx("path", {
                                                "fill-rule": "evenodd",
                                                clipRule: "evenodd",
                                                d: "M17.256 14.5297L17.2562 14.5295L15.7439 13.4705L11.7394 20.398C11.6688 20.5201 11.7177 20.6401 11.8068 20.7025L16.4998 14.0002L17.256 14.5297Z",
                                                fill: "url(#paint5_linear_6886_72578)"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("path", {
                                    opacity: "0.1",
                                    d: "M28.5 18.527L28 18.527V18.5269V18.5267V18.5264V18.5261V18.5257V18.5252V18.5247V18.5241V18.5234V18.5226V18.5218V18.5209V18.5199V18.5189V18.5178V18.5166V18.5153V18.514V18.5127V18.5112V18.5097V18.5081V18.5065V18.5047V18.5029V18.5011V18.4992V18.4972V18.4951V18.493V18.4909V18.4886V18.4863V18.4839V18.4815V18.479V18.4764V18.4738V18.4711V18.4684V18.4656V18.4627V18.4598V18.4568V18.4537V18.4506V18.4474V18.4442V18.4409V18.4375V18.4341V18.4307V18.4271V18.4235V18.4199V18.4162V18.4124V18.4086V18.4047V18.4008V18.3968V18.3928V18.3887V18.3845V18.3803V18.376V18.3717V18.3673V18.3629V18.3584V18.3539V18.3493V18.3447V18.34V18.3352V18.3304V18.3256V18.3207V18.3157V18.3107V18.3057V18.3006V18.2954V18.2902V18.2849V18.2796V18.2743V18.2689V18.2634V18.2579V18.2524V18.2468V18.2412V18.2355V18.2298V18.224V18.2182V18.2123V18.2064V18.2004V18.1944V18.1884V18.1823V18.1761V18.1699V18.1637V18.1574V18.1511V18.1448V18.1384V18.132V18.1255V18.1189V18.1124V18.1058V18.0991V18.0925V18.0857V18.079V18.0722V18.0653V18.0584V18.0515V18.0446V18.0376V18.0305V18.0235V18.0164V18.0092V18.002V17.9948V17.9876V17.9803V17.9729V17.9656V17.9582V17.9508V17.9433V17.9358V17.9283V17.9207V17.9131V17.9055V17.8978V17.8901V17.8824V17.8746V17.8668V17.859V17.8512V17.8433V17.8354V17.8274V17.8195V17.8115V17.8034V17.7954V17.7873V17.7791V17.771V17.7628V17.7546V17.7464V17.7381V17.7299V17.7216V17.7132V17.7049V17.6965V17.6881V17.6796V17.6712V17.6627V17.6542V17.6456V17.6371V17.6285V17.6199V17.6113V17.6026V17.594V17.5853V17.5766V17.5678V17.5591V17.5503V17.5415V17.5327V17.5239V17.515V17.5061V17.4972V17.4883V17.4794V17.4705V17.4615V17.4525V17.4435V17.4345V17.4255V17.4164V17.4073V17.3983V17.3892V17.3801V17.3709V17.3618V17.3526V17.3435V17.3343V17.3251V17.3159V17.3066V17.2974V17.2882V17.2789V17.2696V17.2603V17.251V17.2417V17.2324V17.2231V17.2138V17.2044V17.1951V17.1857V17.1763V17.1669V17.1575V17.1481V17.1387V17.1293V17.1199V17.1105V17.101V17.0916V17.0821V17.0727V17.0632V17.0538V17.0443V17.0348V17.0253V17.0159V17.0064V16.9969V16.9874V16.9779V16.9684V16.9589V16.9494V16.9399V16.9304V16.9209V16.9114V16.9019V16.8924V16.8828V16.8733V16.8638V16.8543V16.8448V16.8353V16.8258V16.8163V16.8068V16.7973V16.7878V16.7783V16.7688V16.7593V16.7499V16.7404V16.7309V16.7214V16.712V16.7025V16.6931V16.6836V16.6742V16.6647V16.6553V16.6459V16.6365V16.6271V16.6177V16.6083V16.5989V16.5896V16.5802V16.5708V16.5615V16.5522V16.5428V16.5335V16.5242V16.5149V16.5057V16.4964V16.4871V16.4779V16.4687V16.4594V16.4502V16.441V16.4319V16.4227V16.4135V16.4044V16.3953V16.3862V16.3771V16.368V16.3589V16.3499V16.3409V16.3319V16.3229V16.3139V16.3049V16.296V16.2871V16.2782V16.2693V16.2604V16.2516V16.2427V16.2339V16.2251V16.2164V16.2076V16.1989V16.1902V16.1815V16.1729V16.1642V16.1556V16.147V16.1384V16.1299V16.1214V16.1129V16.1044V16.0959V16.0875V16.0791V16.0707V16.0624V16.0541V16.0458V16.0375V16.0292V16.021V16.0128V16.0047V15.9965V15.9884V15.9803V15.9723V15.9643V15.9563V15.9483V15.9404V15.9325V15.9246V15.9168V15.909V15.9012V15.8934V15.8857V15.878V15.8704V15.8628V15.8552V15.8476V15.8401V15.8326V15.8252V15.8177V15.8104V15.803V15.7957V15.7884V15.7812V15.774V15.7668V15.7597V15.7526V15.7455V15.7385V15.7315V15.7246V15.7177V15.7108V15.704V15.6972V15.6904V15.6837V15.6771V15.6704V15.6639V15.6573V15.6508V15.6443V15.6379V15.6315V15.6252V15.6189V15.6126V15.6064V15.6003V15.5941V15.5881V15.582V15.576V15.5701V15.5642V15.5584V15.5525V15.5468V15.5411V15.5354V15.5298V15.5242V15.5187V15.5132V15.5078V15.5024V15.4971V15.4918V15.4865V15.4813V15.4762V15.4711V15.4661V15.4611V15.4562V15.4513V15.4465V15.4417V15.4369V15.4323V15.4276V15.4231V15.4186V15.4141V15.4097V15.4053V15.401V15.3968V15.3926V15.3885V15.3844V15.3803V15.3764V15.3725V15.3686V15.3648V15.3611V15.3574V15.3538V15.3502V15.3467V15.3432V15.3398V15.3365V15.3332V15.33V15.3269V15.3238V15.3207V15.3178V15.3148V15.312V15.3092V15.3065V15.3038V15.3012V15.2987V15.2962V15.2938V15.2914V15.2892V15.2869V15.2848V15.2827V15.2807V15.2787V15.2768V15.275V15.2732V15.2715V15.2699V15.2684V15.2669V15.2654V15.2641V15.2628V15.2616V15.2604V15.2593V15.2583V15.2574V15.2565V15.2557V15.255V15.2543V15.2537V15.2532V15.2528V15.2524V12.7475V12.7472V12.7469V12.7465V12.746V12.7454V12.7447V12.744V12.7432V12.7424V12.7414V12.7404V12.7394V12.7382V12.737V12.7357V12.7344V12.733V12.7315V12.7299V12.7283V12.7266V12.7249V12.7231V12.7212V12.7192V12.7172V12.7151V12.713V12.7108V12.7085V12.7061V12.7037V12.7013V12.6987V12.6961V12.6935V12.6908V12.688V12.6851V12.6822V12.6793V12.6762V12.6731V12.67V12.6668V12.6635V12.6602V12.6568V12.6533V12.6498V12.6462V12.6426V12.6389V12.6352V12.6314V12.6275V12.6236V12.6196V12.6156V12.6115V12.6074V12.6032V12.5989V12.5946V12.5903V12.5859V12.5814V12.5769V12.5723V12.5677V12.563V12.5583V12.5535V12.5486V12.5437V12.5388V12.5338V12.5288V12.5237V12.5185V12.5133V12.5081V12.5028V12.4975V12.4921V12.4866V12.4811V12.4756V12.47V12.4644V12.4587V12.453V12.4472V12.4414V12.4355V12.4296V12.4237V12.4177V12.4116V12.4055V12.3994V12.3932V12.387V12.3807V12.3744V12.3681V12.3617V12.3553V12.3488V12.3423V12.3357V12.3291V12.3225V12.3158V12.3091V12.3023V12.2955V12.2886V12.2818V12.2748V12.2679V12.2609V12.2539V12.2468V12.2397V12.2325V12.2253V12.2181V12.2109V12.2036V12.1962V12.1889V12.1815V12.174V12.1666V12.1591V12.1515V12.144V12.1364V12.1287V12.1211V12.1134V12.1056V12.0979V12.0901V12.0822V12.0744V12.0665V12.0586V12.0506V12.0426V12.0346V12.0266V12.0185V12.0104V12.0023V11.9941V11.986V11.9777V11.9695V11.9612V11.9529V11.9446V11.9363V11.9279V11.9195V11.9111V11.9027V11.8942V11.8857V11.8772V11.8686V11.8601V11.8515V11.8429V11.8342V11.8256V11.8169V11.8082V11.7995V11.7907V11.7819V11.7732V11.7643V11.7555V11.7467V11.7378V11.7289V11.72V11.7111V11.7021V11.6932V11.6842V11.6752V11.6662V11.6572V11.6481V11.6391V11.63V11.6209V11.6118V11.6026V11.5935V11.5843V11.5752V11.566V11.5568V11.5476V11.5383V11.5291V11.5199V11.5106V11.5013V11.492V11.4827V11.4734V11.4641V11.4548V11.4454V11.4361V11.4267V11.4173V11.408V11.3986V11.3892V11.3798V11.3703V11.3609V11.3515V11.342V11.3326V11.3232V11.3137V11.3042V11.2948V11.2853V11.2758V11.2663V11.2568V11.2473V11.2378V11.2283V11.2188V11.2093V11.1998V11.1903V11.1808V11.1712V11.1617V11.1522V11.1427V11.1331V11.1236V11.1141V11.1046V11.095V11.0855V11.076V11.0665V11.0569V11.0474V11.0379V11.0284V11.0189V11.0094V10.9999V10.9903V10.9808V10.9713V10.9619V10.9524V10.9429V10.9334V10.9239V10.9145V10.905V10.8955V10.8861V10.8767V10.8672V10.8578V10.8484V10.839V10.8295V10.8202V10.8108V10.8014V10.792V10.7827V10.7733V10.764V10.7546V10.7453V10.736V10.7267V10.7174V10.7082V10.6989V10.6897V10.6804V10.6712V10.662V10.6528V10.6436V10.6345V10.6253V10.6162V10.6071V10.598V10.5889V10.5798V10.5707V10.5617V10.5527V10.5437V10.5347V10.5257V10.5168V10.5078V10.4989V10.49V10.4811V10.4723V10.4634V10.4546V10.4458V10.437V10.4283V10.4195V10.4108V10.4021V10.3935V10.3848V10.3762V10.3676V10.359V10.3504V10.3419V10.3334V10.3249V10.3164V10.308V10.2996V10.2912V10.2829V10.2745V10.2662V10.2579V10.2497V10.2415V10.2333V10.2251V10.2169V10.2088V10.2007V10.1927V10.1847V10.1767V10.1687V10.1607V10.1528V10.145V10.1371V10.1293V10.1215V10.1138V10.106V10.0984V10.0907V10.0831V10.0755V10.0679V10.0604V10.0529V10.0455V10.038V10.0307V10.0233V10.016V10.0087V10.0015V9.99427V9.9871V9.97997V9.97288V9.96582V9.9588V9.95182V9.94487V9.93797V9.9311V9.92428V9.91749V9.91074V9.90404V9.89737V9.89075V9.88416V9.87762V9.87111V9.86465V9.85824V9.85186V9.84553V9.83924V9.83299V9.82679V9.82063V9.81451V9.80844V9.80241V9.79643V9.7905V9.78461V9.77876V9.77296V9.76721V9.7615V9.75584V9.75023V9.74467V9.73915V9.73368V9.72826V9.72289V9.71757V9.7123V9.70708V9.7019V9.69678V9.69171V9.68668V9.68171V9.67679V9.67192V9.66711V9.66234V9.65763V9.65297V9.64837V9.64381V9.63931V9.63487V9.63048V9.62614V9.62186V9.61763V9.61346V9.60934V9.60528V9.60128V9.59733V9.59344V9.5896V9.58583V9.58211V9.57845V9.57484V9.5713V9.56781V9.56438V9.56102V9.55771V9.55446V9.55127V9.54814V9.54508V9.54207V9.53913V9.53624V9.53342V9.53066V9.52797V9.52533V9.52276V9.52025V9.51781V9.51543V9.51311V9.51086V9.50868V9.50655V9.5045V9.50251V9.50058V9.49872V9.49693V9.49521V9.49355V9.49196V9.49043V9.48898V9.48759V9.48627V9.48502V9.48384V9.48273V9.48169V9.48072V9.47982V9.47898V9.47822V9.47753V9.47692V9.47637V9.47589V9.47549V9.47516V9.47491V9.47472V9.47461L28.5 9.47457H28C28 9.18942 28 8.90592 27.9984 8.62265M28.5 18.527L21.8855 2.51345C22.1241 2.51492 22.3603 2.51763 22.5954 2.52399L22.5954 2.52399C23.1101 2.5379 23.6081 2.56788 24.0881 2.65407L24.1764 2.16216L24.0881 2.65407C24.5713 2.74084 25.0125 2.88073 25.4406 3.09857C25.8623 3.31316 26.2483 3.59357 26.583 3.92814L26.5831 3.92818C26.9178 4.26271 27.1984 4.64859 27.4131 5.0701C27.6309 5.49776 27.7708 5.93837 27.8576 6.42099L27.8576 6.42102C27.9439 6.90092 27.974 7.39873 27.9878 7.91335L27.9878 7.91346C27.9942 8.14832 27.997 8.38432 27.9984 8.62265M28.5 18.527H28C28 18.8126 28 19.0964 27.9984 19.3801M28.5 18.527L7.5796 24.9123M27.9984 8.62265L28.4984 8.61978L27.9984 8.62275C27.9984 8.62272 27.9984 8.62268 27.9984 8.62265ZM27.9984 19.3801C27.9984 19.3801 27.9984 19.38 27.9984 19.38L28.4984 19.383L27.9984 19.3801ZM27.9984 19.3801C27.997 19.6187 27.9942 19.8551 27.9879 20.0903L27.9879 20.0904C27.974 20.6055 27.9439 21.1039 27.8577 21.5844C27.7708 22.0682 27.6309 22.5097 27.4129 22.9382M27.4129 22.9382C27.1982 23.3603 26.9176 23.7467 26.5828 24.0817L26.5828 24.0817C26.248 24.4168 25.8619 24.6977 25.4402 24.9125L25.4402 24.9125C25.0123 25.1305 24.5714 25.2705 24.0885 25.3574C23.6083 25.4437 23.1102 25.4738 22.5954 25.4877C22.3602 25.4941 22.1241 25.4968 21.8856 25.4983C21.6022 25.5 21.3187 25.5 21.0333 25.5H17.7587H15.2769H11.996C11.7101 25.5 11.426 25.5 11.1421 25.4983C10.9031 25.4968 10.6664 25.4941 10.4308 25.4877L10.4308 25.4877C9.91512 25.4738 9.41609 25.4438 8.93507 25.3575L8.93503 25.3575C8.45075 25.2706 8.00864 25.1305 7.5796 24.9123M27.4129 22.9382L27.8586 23.1649M27.4129 22.9382C27.4129 22.9382 27.4129 22.9382 27.4129 22.9382L27.8586 23.1649M7.5796 24.9123L7.35292 25.3579L7.57956 24.9123C7.15694 24.6973 6.7701 24.4165 6.43464 24.0814C6.09916 23.7463 5.81797 23.3598 5.60283 22.9376C5.38462 22.5094 5.24445 22.0681 5.15747 21.5848C5.07099 21.1042 5.04089 20.6056 5.02696 20.0903C5.0206 19.855 5.01784 19.6186 5.01639 19.3799L7.5796 24.9123ZM27.8586 23.1649C28.1014 22.6874 28.2555 22.1983 28.3498 21.6727C28.4427 21.1552 28.4736 20.6272 28.4877 20.1039L26.9365 24.4351C27.3083 24.063 27.62 23.6339 27.8586 23.1649ZM21.0333 2.51185H21.0315L17.7232 2.5H17.7223H15.2484H15.2475L11.9978 2.51185L11.996 2.51186L11.935 2.51185C11.6695 2.51184 11.4057 2.51183 11.1421 2.51345L21.0333 2.51185ZM21.0333 2.51185L21.0941 2.51185M21.0333 2.51185L21.0941 2.51185M10.4308 2.52399L10.4308 2.52399C9.91489 2.5379 9.41566 2.56791 8.93439 2.65423L8.93434 2.65424C8.4503 2.74101 8.00836 2.88089 7.57956 3.09864L10.4308 2.52399ZM10.4308 2.52399C10.6664 2.51763 10.903 2.51492 11.1421 2.51345L10.4308 2.52399ZM6.4344 3.92848L6.43439 3.92849C6.09898 4.26307 5.81788 4.6489 5.60281 5.0703L5.6028 5.07031C5.38447 5.49806 5.2443 5.93886 5.15732 6.42174L6.4344 3.92848ZM6.4344 3.92848C6.76986 3.59384 7.1568 3.31334 7.57954 3.09865L6.4344 3.92848ZM5.01639 8.62282L5.01639 8.62285C5.01555 8.75985 5.01185 8.91138 5.00826 9.05828C5.00797 9.07018 5.00768 9.08205 5.0074 9.09388C5.0035 9.25443 5 9.40821 5 9.54366V12.7502V15.2512V15.2524L5.01479 18.5247L5.0148 18.527L5.0148 18.5777C5.01479 18.8464 5.01478 19.1132 5.01639 19.3799L5.01639 8.62282ZM5.01639 8.62282C5.01783 8.38452 5.0206 8.14844 5.02693 7.91344L5.01639 8.62282ZM21.0941 2.51185C21.3591 2.51184 21.6224 2.51183 21.8855 2.51345L21.0941 2.51185ZM5.02693 7.91334C5.0409 7.39893 5.07094 6.90137 5.15731 6.42176L5.02693 7.91334Z",
                                    stroke: "black"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ _jsxs("defs", {
                children: [
                    /*#__PURE__*/ _jsxs("filter", {
                        id: "filter0_d_6886_72578",
                        x: "0.5",
                        y: "0",
                        width: "32",
                        height: "32",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ _jsx("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: "2"
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "2"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect1_dropShadow_6886_72578",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("filter", {
                        id: "filter1_ddiii_6886_72578",
                        x: "-9.80762",
                        y: "-12.3077",
                        width: "52.6155",
                        height: "52.6154",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ _jsx("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: "2"
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "2"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {}),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "6"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0.117647 0 0 0 0 0.243137 0 0 0 0 0.494118 0 0 0 0.2 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "effect1_dropShadow_6886_72578",
                                result: "effect2_dropShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect2_dropShadow_6886_72578",
                                result: "shape"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {}),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "4"
                            }),
                            /*#__PURE__*/ _jsx("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "shape",
                                result: "effect3_innerShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: "2"
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ _jsx("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "effect3_innerShadow_6886_72578",
                                result: "effect4_innerShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: "-1"
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ _jsx("feComposite", {
                                in2: "hardAlpha",
                                operator: "arithmetic",
                                k2: "-1",
                                k3: "1"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "effect4_innerShadow_6886_72578",
                                result: "effect5_innerShadow_6886_72578"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("filter", {
                        id: "filter2_dd_6886_72578",
                        x: "1.70581",
                        y: "-1.74682",
                        width: "29.5884",
                        height: "33.4936",
                        filterUnits: "userSpaceOnUse",
                        "color-interpolation-filters": "sRGB",
                        children: [
                            /*#__PURE__*/ _jsx("feFlood", {
                                "flood-opacity": "0",
                                result: "BackgroundImageFix"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: "1"
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "5"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "BackgroundImageFix",
                                result: "effect1_dropShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                in: "SourceAlpha",
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                result: "hardAlpha"
                            }),
                            /*#__PURE__*/ _jsx("feOffset", {
                                dy: "2"
                            }),
                            /*#__PURE__*/ _jsx("feGaussianBlur", {
                                stdDeviation: "1"
                            }),
                            /*#__PURE__*/ _jsx("feColorMatrix", {
                                type: "matrix",
                                values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in2: "effect1_dropShadow_6886_72578",
                                result: "effect2_dropShadow_6886_72578"
                            }),
                            /*#__PURE__*/ _jsx("feBlend", {
                                mode: "normal",
                                in: "SourceGraphic",
                                in2: "effect2_dropShadow_6886_72578",
                                result: "shape"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint0_linear_6886_72578",
                        x1: "16.5",
                        y1: "2",
                        x2: "16.5",
                        y2: "26",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                "stop-color": "#3ED4F9"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                "stop-color": "#2E6DEA"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint1_linear_6886_72578",
                        x1: "16.5001",
                        y1: "2.23077",
                        x2: "16.5001",
                        y2: "25.6538",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                "stop-color": "white"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                "stop-color": "white",
                                "stop-opacity": "0.8"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint2_linear_6886_72578",
                        x1: "22.5887",
                        y1: "5.30438",
                        x2: "16.5",
                        y2: "14",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.234375",
                                "stop-color": "#FF667A"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                "stop-color": "#BE113A"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint3_linear_6886_72578",
                        x1: "21.1932",
                        y1: "7.29745",
                        x2: "16.5",
                        y2: "14",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                "stop-color": "white",
                                "stop-opacity": "0"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                "stop-color": "white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint4_linear_6886_72578",
                        x1: "10.4113",
                        y1: "22.6956",
                        x2: "16.5",
                        y2: "14",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "0.234375",
                                "stop-color": "white",
                                "stop-opacity": "0.9"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                "stop-color": "white",
                                "stop-opacity": "0.5"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsxs("linearGradient", {
                        id: "paint5_linear_6886_72578",
                        x1: "13.3191",
                        y1: "21.7614",
                        x2: "18.0123",
                        y2: "15.0589",
                        gradientUnits: "userSpaceOnUse",
                        children: [
                            /*#__PURE__*/ _jsx("stop", {
                                "stop-color": "white",
                                "stop-opacity": "0"
                            }),
                            /*#__PURE__*/ _jsx("stop", {
                                offset: "1",
                                "stop-color": "white"
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx("clipPath", {
                        id: "clip0_6886_72578",
                        children: /*#__PURE__*/ _jsx("rect", {
                            x: "4.5",
                            y: "2",
                            width: "24",
                            height: "24",
                            rx: "12",
                            fill: "white"
                        })
                    })
                ]
            })
        ]
    })
;
/* harmony default export */ const shared_BrowserSafari = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(BrowserSafari))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/BrowserYandex.tsx



const BrowserYandex = ({ width =25 , height =24 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 25 24",
        fill: fill,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12.4887 23.4199C18.7906 23.4199 23.8992 18.3079 23.8992 12.002C23.8992 5.69599 18.7906 0.583984 12.4887 0.583984C6.18681 0.583984 1.07812 5.69599 1.07812 12.002C1.07812 18.3079 6.18681 23.4199 12.4887 23.4199Z",
                fill: "white"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M6.92569 4.75391L4.80469 6.87491L11.0047 13.0754V20.4464H14.0047V13.0674L20.1972 6.87491L18.0762 4.75391L12.5007 10.3294L6.92569 4.75391Z",
                fill: "#FF0000"
            })
        ]
    })
;
/* harmony default export */ const shared_BrowserYandex = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(BrowserYandex))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Channel.tsx



const Channel = ({ width =24 , height =24 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M7.24174 12.311C7.86306 12.311 8.36674 11.8073 8.36674 11.186C8.36674 10.5647 7.86306 10.061 7.24174 10.061C6.62041 10.061 6.11674 10.5647 6.11674 11.186C6.11674 11.8073 6.62041 12.311 7.24174 12.311Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8.36674 15.4713C8.36674 16.0926 7.86306 16.5963 7.24174 16.5963C6.62041 16.5963 6.11674 16.0926 6.11674 15.4713C6.11674 14.85 6.62041 14.3463 7.24174 14.3463C7.86306 14.3463 8.36674 14.85 8.36674 15.4713Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.9822 6.10427L8.12843 2.25045C7.9234 2.04542 7.59099 2.04542 7.38597 2.25045L6.8026 2.83381C6.59758 3.03884 6.59758 3.37125 6.8026 3.57627L9.3306 6.10427H7.00723C4.50123 6.10427 2.46973 8.13578 2.46973 10.6418V16.0156C2.46973 18.5215 4.50124 20.5531 7.00723 20.5531H16.9142C19.4202 20.5531 21.4517 18.5215 21.4517 16.0156V10.6418C21.4517 8.13578 19.4202 6.10427 16.9142 6.10427H14.6696L17.1976 3.57627C17.4026 3.37125 17.4026 3.03884 17.1976 2.83381L16.6142 2.25045C16.4092 2.04542 16.0768 2.04542 15.8718 2.25045L12.0179 6.10427H11.9822ZM9.97774 18.6781V7.97927H7.00723C5.53677 7.97927 4.34473 9.17131 4.34473 10.6418V16.0156C4.34473 17.486 5.53677 18.6781 7.00723 18.6781H9.97774Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Channel = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Channel))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Clock.tsx



const Clock = ({ width =18 , height =18 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0ZM9 4.50342C9.35898 4.50342 9.65 4.79443 9.65 5.15342V9.00342H13C13.359 9.00342 13.65 9.29443 13.65 9.65342C13.65 10.0124 13.359 10.3034 13 10.3034H9C8.64101 10.3034 8.35 10.0124 8.35 9.65342V5.15342C8.35 4.79443 8.64101 4.50342 9 4.50342Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Clock = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Clock))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/CheckRound.tsx


const CheckRound = ({ width =18 , height =18 , fill ="#4e5158" , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18ZM14.4714 5.59526C14.7318 5.85561 14.7318 6.27772 14.4714 6.53807L8.47141 12.5381C8.21106 12.7984 7.78895 12.7984 7.5286 12.5381L4.19526 9.20474C3.93491 8.94439 3.93491 8.52228 4.19526 8.26193C4.45561 8.00158 4.87772 8.00158 5.13807 8.26193L8 11.1239L13.5286 5.59526C13.7889 5.33491 14.2111 5.33491 14.4714 5.59526Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_CheckRound = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(CheckRound))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/ChevronDown.tsx



const ChevronDown = ({ width =11 , height =7 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 11 7",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5.17369 5.09786L1.11937 1.04354C0.936311 0.860485 0.639515 0.860485 0.456456 1.04354C0.273398 1.2266 0.273398 1.5234 0.456456 1.70646L4.67871 5.92872C4.95208 6.20208 5.3953 6.20208 5.66866 5.92871L9.89092 1.70646C10.074 1.5234 10.074 1.2266 9.89092 1.04354C9.70786 0.860486 9.41107 0.860485 9.22801 1.04354L5.17369 5.09786Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_ChevronDown = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(ChevronDown))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/ChevronLeft.tsx



const ChevronLeft = ({ width =8 , height =14 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M1.7769 6.9999L7.18266 1.59414C7.42674 1.35006 7.42674 0.95433 7.18266 0.710252C6.93859 0.466175 6.54286 0.466175 6.29878 0.710252L0.504111 6.50492C0.230744 6.77829 0.230744 7.2215 0.504111 7.49487L6.29878 13.2895C6.54286 13.5336 6.93859 13.5336 7.18266 13.2895C7.42674 13.0455 7.42674 12.6497 7.18266 12.4057L1.7769 6.9999Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_ChevronLeft = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(ChevronLeft))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/ChevronRight.tsx



const ChevronRight = ({ width =8 , height =14 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 8 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6.22358 7.0001L0.817824 12.4059C0.573746 12.6499 0.573746 13.0457 0.817824 13.2897V13.2897C1.0619 13.5338 1.45763 13.5338 1.70171 13.2897L7.49638 7.49508C7.76974 7.22171 7.76974 6.7785 7.49638 6.50513L1.70171 0.710459C1.45763 0.466382 1.0619 0.466382 0.817823 0.710459V0.710459C0.573745 0.954537 0.573745 1.35027 0.817823 1.59434L6.22358 7.0001Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_ChevronRight = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(ChevronRight))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Copy.tsx



const Copy = ({ width =16 , height =18 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 16 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M13.925 0.75C14.7534 0.75 15.425 1.42157 15.425 2.25L15.425 10.8C15.425 11.6284 14.7534 12.3 13.925 12.3H12.125V7.35C12.125 5.52746 10.6475 4.05 8.82501 4.05H5.52501V2.25C5.52501 1.42157 6.19658 0.75 7.02501 0.75H13.925Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M2.22501 5.7C1.31374 5.7 0.575012 6.43873 0.575012 7.35V15.6C0.575012 16.5113 1.31374 17.25 2.22501 17.25H8.82501C9.73628 17.25 10.475 16.5113 10.475 15.6L10.475 7.35C10.475 6.49568 9.82574 5.79302 8.99371 5.70852C8.93824 5.70289 8.88196 5.7 8.82501 5.7L2.22501 5.7Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Copy = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Copy))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Cross.tsx



const Cross = ({ width =24 , height =24 , fill =(0,lib/* getCssVar */.MX)("grey", 500) , ...props })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.39903 20.2651C3.12566 19.9918 3.12566 19.5485 3.39903 19.2752L19.2751 3.39915C19.5485 3.12578 19.9917 3.12578 20.265 3.39915L20.6009 3.73503C20.8743 4.00839 20.8743 4.45161 20.6009 4.72498L4.72485 20.601C4.45148 20.8744 4.00827 20.8744 3.7349 20.601L3.39903 20.2651Z",
                fill: fill
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M3.73494 3.39912C4.00831 3.12575 4.45152 3.12575 4.72489 3.39912L20.6009 19.2752C20.8743 19.5485 20.8743 19.9918 20.6009 20.2651L20.265 20.601C19.9917 20.8744 19.5485 20.8744 19.2751 20.601L3.39906 4.72494C3.1257 4.45158 3.1257 4.00836 3.39906 3.73499L3.73494 3.39912Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Cross = (/*#__PURE__*/external_react_default().memo(Cross));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Customize.tsx



const Search = ({ width =28 , height =18 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 28 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M26.5759 2.5H13.4106C12.9073 1.18431 11.633 0.25 10.1404 0.25C8.64777 0.25 7.37339 1.18431 6.87018 2.5H1.42372C1.03712 2.5 0.723717 2.8134 0.723717 3.2V4.3C0.723717 4.6866 1.03712 5 1.42372 5H6.87018C7.37339 6.31569 8.64777 7.25 10.1404 7.25C11.633 7.25 12.9073 6.31569 13.4106 5H26.5759C26.9625 5 27.2759 4.6866 27.2759 4.3V3.2C27.2759 2.8134 26.9625 2.5 26.5759 2.5ZM26.6332 15.5005C27.0198 15.5005 27.3332 15.1871 27.3332 14.8005V13.7005C27.3332 13.3139 27.0198 13.0005 26.6332 13.0005L21.1295 13.0005C20.6263 11.6848 19.3519 10.7505 17.8593 10.7505C16.3667 10.7505 15.0923 11.6848 14.5891 13.0005L1.36651 13.0005C0.979906 13.0005 0.666504 13.3139 0.666504 13.7005V14.8005C0.666504 15.1871 0.979905 15.5005 1.3665 15.5005L14.5891 15.5005C15.0923 16.8162 16.3667 17.7505 17.8593 17.7505C19.3519 17.7505 20.6263 16.8162 21.1295 15.5005L26.6332 15.5005Z",
            fill: fill
        })
    })
;
/* harmony default export */ const Customize = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Search))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Download.tsx



const Download = ({ width =12 , height =13 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 12 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M11.019 4.94238C11.327 5.25037 11.327 5.74972 11.019 6.05772L7.11534 9.96139C6.49935 10.5774 5.50065 10.5774 4.88467 9.96139L0.980994 6.05771C0.673002 5.74972 0.673002 5.25037 0.980994 4.94238C1.28899 4.63439 1.78834 4.63439 2.09633 4.94238L5.21442 8.06047C5.21467 7.12436 5.213 6.31335 5.21133 5.50178L5.21133 5.50102C5.20863 4.19009 5.20593 2.87743 5.21133 1.03635C5.21261 0.600784 5.56674 0.248726 6.0023 0.250003C6.43786 0.25128 6.78992 0.60541 6.78865 1.04097C6.78326 2.87806 6.78595 4.18732 6.78865 5.498L6.78865 5.49889C6.79031 6.30862 6.79198 7.11919 6.79174 8.05432L9.90367 4.94238C10.2117 4.63439 10.711 4.63439 11.019 4.94238Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M1.5 11.5C1.08579 11.5 0.75 11.8358 0.75 12.25C0.75 12.6642 1.08579 13 1.5 13H10.5C10.9142 13 11.25 12.6642 11.25 12.25C11.25 11.8358 10.9142 11.5 10.5 11.5H1.5Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Download = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Download))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Dislike.tsx



const Dislike = ({ width =19 , height =18 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 19 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M12.1551 13.2217C12.9789 12.2394 13.4304 10.9984 13.4304 9.7165V1.38244C13.4304 1.11132 13.2106 0.891535 12.9395 0.891535H5.88969C4.13297 0.891535 2.54754 1.94497 1.8669 3.56449L0.645027 6.47179C0.279463 7.34161 0.0911636 8.27563 0.0911636 9.21915V10.0647C0.0911636 10.9685 0.82379 11.7011 1.72753 11.7011H7.38498C7.72066 11.7011 7.95733 12.0305 7.85023 12.3486L6.6518 15.9087C6.47598 16.431 6.65158 17.0073 7.08878 17.3428C7.63643 17.7631 8.41796 17.6775 8.86158 17.1486L12.1551 13.2217Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.0611 10.6548C18.3322 10.6548 18.552 10.435 18.552 10.1639V1.38245C18.552 1.11132 18.3322 0.891537 18.0611 0.891537H16.1031C15.832 0.891537 15.6122 1.11133 15.6122 1.38245V10.1639C15.6122 10.435 15.832 10.6548 16.1031 10.6548H18.0611Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Dislike = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Dislike))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Eye.tsx



const Eye = ({ width =11 , height =8 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 11 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M10.1602 3.875C10.1485 3.84375 9.81649 3.10938 9.08211 2.37109C8.10165 1.39453 6.86336 0.875 5.50008 0.875C4.1368 0.875 2.89852 1.39453 1.91805 2.37109C1.18368 3.10938 0.851645 3.84375 0.839927 3.875C0.822486 3.91437 0.813477 3.95694 0.813477 4C0.813477 4.04306 0.822486 4.08563 0.839927 4.125C0.851645 4.15625 1.18368 4.89062 1.91805 5.62891C2.89852 6.60547 4.1368 7.125 5.50008 7.125C6.86336 7.125 8.10165 6.60547 9.08211 5.62891C9.81649 4.89062 10.1485 4.15625 10.1602 4.125C10.1777 4.08563 10.1867 4.04306 10.1867 4C10.1867 3.95694 10.1777 3.91437 10.1602 3.875ZM5.50008 2.59375C5.77821 2.59375 6.0501 2.67623 6.28135 2.83075C6.51261 2.98527 6.69285 3.20489 6.79929 3.46185C6.90572 3.71881 6.93357 4.00156 6.87931 4.27435C6.82505 4.54713 6.69112 4.7977 6.49445 4.99437C6.29778 5.19104 6.04721 5.32497 5.77443 5.37923C5.50164 5.43349 5.21889 5.40564 4.96193 5.29921C4.70498 5.19277 4.48535 5.01253 4.33083 4.78127C4.17631 4.55001 4.09383 4.27813 4.09383 4C4.09383 3.62704 4.24199 3.26935 4.50571 3.00563C4.76944 2.74191 5.12712 2.59375 5.50008 2.59375Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Eye = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Eye))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/EyeClose.tsx



const EyeClose = ({ width =24 , height =24 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M20 10C20 12.5714 16.4183 16 12 16C7.58172 16 4 12.5714 4 10",
                stroke: fill,
                strokeWidth: "2",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "11",
                y: "15",
                width: "2",
                height: "5",
                rx: "1",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "6.38403",
                y: "13.835",
                width: "2",
                height: "4.49902",
                rx: "1",
                transform: "rotate(30 6.38403 13.835)",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "15.884",
                y: "14.835",
                width: "2",
                height: "4.5",
                rx: "1",
                transform: "rotate(-30 15.884 14.835)",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_EyeClose = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(EyeClose))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/EyeOpen.tsx



const EyeOpen = ({ width =24 , height =24 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M20 12C20 13.0928 19.2258 14.5887 17.7189 15.8609C16.2451 17.1051 14.2177 18 12 18C9.78228 18 7.75494 17.1051 6.28113 15.8609C4.77423 14.5887 4 13.0928 4 12C4 10.9072 4.77423 9.4113 6.28113 8.13911C7.75494 6.89486 9.78228 6 12 6C14.2177 6 16.2451 6.89486 17.7189 8.13911C19.2258 9.4113 20 10.9072 20 12Z",
                stroke: fill,
                strokeWidth: "2"
            }),
            /*#__PURE__*/ _jsx("circle", {
                cx: "12",
                cy: "12",
                r: "2",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_EyeOpen = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(EyeOpen))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Info.tsx


const Info = ({ width =12 , height =12 , fill ="#d9d9d9" , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 12 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12ZM5.29674 2.82015C5.29674 2.63837 5.4441 2.491 5.62589 2.491H6.37411C6.5559 2.491 6.70326 2.63837 6.70326 2.82015V3.39319C6.70326 3.57497 6.5559 3.72234 6.37411 3.72234H5.62589C5.4441 3.72234 5.29674 3.57497 5.29674 3.39319V2.82015ZM6.25861 4.69377C6.4404 4.69377 6.58777 4.84114 6.58777 5.02292V9.23779C6.58777 9.41957 6.4404 9.56694 6.25861 9.56694H5.74138C5.55959 9.56694 5.41223 9.41957 5.41223 9.23779V5.02292C5.41223 4.84114 5.55959 4.69377 5.74138 4.69377H6.25861Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Info = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Info))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Like.tsx



const Like = ({ width =8 , height =8 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 8 8",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M2.95346 2.03305C2.61021 2.44231 2.42208 2.95939 2.42208 3.49353V6.96606C2.42208 7.07902 2.51365 7.1706 2.62662 7.1706H5.56405C6.29602 7.1706 6.95661 6.73167 7.24021 6.05687L7.74933 4.8455C7.90164 4.48307 7.9801 4.09389 7.9801 3.70076V3.34844C7.9801 2.97188 7.67484 2.66662 7.29828 2.66662H4.94101C4.80114 2.66662 4.70253 2.52938 4.74716 2.39682L5.2465 0.913452C5.31976 0.695822 5.2466 0.455691 5.06443 0.315888C4.83624 0.140765 4.5106 0.176454 4.32576 0.396844L2.95346 2.03305Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M0.492631 3.10259C0.379664 3.10259 0.288086 3.19416 0.288086 3.30713V6.96605C0.288086 7.07902 0.379664 7.1706 0.492631 7.1706H1.30844C1.42141 7.1706 1.51299 7.07902 1.51299 6.96605V3.30713C1.51299 3.19416 1.42141 3.10259 1.30844 3.10259H0.492631Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Like = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Like))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/LogoSymbol.tsx


const LogoSymbol = ({ width =348 , height =391 , fill ="white" , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 348 391",
        fill: fill,
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M93.2465 81.2411H10.4536C7.68117 81.2411 5.02223 80.1345 3.06179 78.1649C1.10136 76.1952 0 73.5237 0 70.7382V10.5038C0 7.71826 1.10136 5.04679 3.06179 3.0771C5.02223 1.10742 7.68117 0.000873441 10.4536 0.000873441H162.972C164.498 -0.0188958 166.009 0.297141 167.4 0.926707C168.792 1.55627 170.029 2.48411 171.025 3.64515C172.021 4.8062 172.752 6.17228 173.167 7.64746C173.582 9.12263 173.67 10.6712 173.426 12.1843C170.499 31.4306 160.798 48.9836 146.085 61.6551C131.373 74.3266 112.625 81.276 93.2465 81.2411Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M130.494 298.051V195.322C130.494 143.519 151.105 93.8385 187.794 57.2085C224.483 20.5785 274.243 0 326.129 0H337.285C340.09 0 342.78 1.11242 344.763 3.09242C346.746 5.07242 347.86 7.7578 347.86 10.5579V71.055C347.86 73.8552 346.746 76.5406 344.763 78.5206C342.78 80.5006 340.09 81.613 337.285 81.613H228.523C225.718 81.613 223.028 82.7253 221.045 84.7053C219.062 86.6853 217.948 89.3708 217.948 92.1709V194.636C217.948 246.438 197.336 296.119 160.648 332.749C123.959 369.379 74.1986 389.958 22.313 389.958H10.5749C7.77023 389.958 5.08047 388.845 3.0973 386.865C1.11413 384.885 0 382.2 0 379.4V318.744C0 315.944 1.11413 313.259 3.0973 311.279C5.08047 309.299 7.77023 308.186 10.5749 308.186H120.078C122.783 308.148 125.371 307.076 127.308 305.191C129.246 303.305 130.386 300.75 130.494 298.051Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M254.208 308.717H336.611C339.399 308.717 342.072 309.83 344.043 311.813C346.014 313.795 347.122 316.484 347.122 319.288V380.124C347.122 382.928 346.014 385.617 344.043 387.599C342.072 389.582 339.399 390.696 336.611 390.696H184.207C182.673 390.715 181.154 390.397 179.755 389.764C178.356 389.13 177.112 388.196 176.111 387.028C175.109 385.859 174.374 384.484 173.957 382.999C173.54 381.515 173.451 379.956 173.697 378.433C176.602 359.046 186.323 341.35 201.096 328.557C215.869 315.765 234.714 308.725 254.208 308.717Z"
            })
        ]
    })
;
/* harmony default export */ const shared_LogoSymbol = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(LogoSymbol))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/NavCalls.tsx



const NavCalls = ({ width =25 , height =25 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M23.0933 3.69482C23.4799 3.69516 23.793 4.00883 23.7927 4.39543L23.7902 7.28716H23.8028C26.4537 7.28716 28.6028 9.4362 28.6028 12.0872V23.5052C28.6028 26.1561 26.4537 28.3052 23.8028 28.3052L8.19746 28.3052C5.54649 28.3052 3.39746 26.1561 3.39746 23.5052V12.0872C3.39746 9.4362 5.54649 7.28716 8.19746 7.28716H8.40937L8.40937 4.39435C8.40937 4.00775 8.72277 3.69435 9.10937 3.69435L10.2094 3.69435C10.596 3.69435 10.9094 4.00775 10.9094 4.39435L10.9094 7.28716H14.7657L14.7657 4.39435C14.7657 4.00775 15.0791 3.69435 15.4657 3.69435L16.5657 3.69435C16.9523 3.69435 17.2657 4.00775 17.2657 4.39435L17.2657 7.28716L21.2902 7.28716L21.2927 4.39323C21.293 4.00663 21.6067 3.69351 21.9933 3.69385L23.0933 3.69482ZM13.833 11.0659C14.2442 11.0262 14.5976 11.3502 14.6354 11.7616C14.7144 12.6198 14.924 13.4387 15.2438 14.1993C15.3807 14.5247 15.2855 14.9084 14.9936 15.107L14.1684 15.6684C13.8766 15.867 13.7761 16.2533 13.9517 16.5595C14.8 18.0381 15.7981 19.0337 17.2804 19.8808C17.5794 20.0516 17.9559 19.9601 18.1588 19.6819L18.763 18.8533C18.9659 18.5751 19.3399 18.4888 19.657 18.6231C20.4226 18.9472 21.2476 19.1596 22.1126 19.2392C22.524 19.2771 22.8479 19.6304 22.8082 20.0417L22.4535 23.7161C22.4179 24.0847 22.1011 24.3638 21.7322 24.3324C15.2553 23.7809 10.0934 18.6189 9.54227 12.1419C9.51087 11.773 9.78996 11.4562 10.1585 11.4206L13.833 11.0659Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_NavCalls = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(NavCalls))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/NavRooms.tsx



const NavRooms = ({ width =24 , height =24 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M18.9734 13.95C18.9734 15.3381 20.0986 16.4633 21.4867 16.4633C22.8748 16.4633 24 15.3381 24 13.95V2.51331C24 1.12525 22.8748 -2.38419e-07 21.4867 0C20.0986 0 18.9734 1.12525 18.9734 2.51331V13.95Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M2.5502 18.8996C1.14176 18.8996 0 20.0414 0 21.4498C0 22.8582 1.14176 24 2.5502 24H13.9131C15.3216 24 16.4633 22.8582 16.4633 21.4498C16.4633 20.0414 15.3216 18.8996 13.9131 18.8996H2.5502Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M21.4498 24C20.0414 24 18.8996 22.8582 18.8996 21.4498C18.8996 20.0414 20.0414 18.8996 21.4498 18.8996C22.8582 18.8996 24 20.0414 24 21.4498C24 22.8582 22.8582 24 21.4498 24Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0 4.8C0 2.14903 2.14903 0 4.8 0H11.6633C14.3143 0 16.4633 2.14903 16.4633 4.8V11.6633C16.4633 14.3143 14.3143 16.4633 11.6633 16.4633H4.8C2.14903 16.4633 0 14.3143 0 11.6633V4.8ZM2.47162 6.81384C2.47162 5.63463 3.42756 4.67868 4.60678 4.67868H8.53788C9.7171 4.67868 10.673 5.63463 10.673 6.81384V9.64948C10.673 10.8287 9.7171 11.7846 8.53788 11.7846H4.60678C3.42756 11.7846 2.47162 10.8287 2.47162 9.64948V6.81384ZM13.4776 11.2484C13.6446 11.4655 13.9917 11.3474 13.9917 11.0735V5.35849C13.9917 5.08421 13.6437 4.96639 13.4771 5.18429L11.8697 7.28654C11.8315 7.33657 11.8107 7.39779 11.8107 7.46075V8.98416C11.8107 9.04742 11.8317 9.10891 11.8702 9.15905L13.4776 11.2484Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_NavRooms = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(NavRooms))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/NavSuperuserDashboard.tsx



const NavSuperuserDashboard = ({ width =25 , height =25 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 25 25",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M24.0391 6.20978C24.0391 3.31767 21.6945 0.973145 18.8024 0.973145H5.2757C2.38358 0.973145 0.0390625 3.31767 0.0390625 6.20978C0.0390625 9.10189 2.38358 11.4464 5.2757 11.4464H18.8024C21.6945 11.4464 24.0391 9.10189 24.0391 6.20978ZM2.47639 6.20981C2.47639 7.75581 3.72967 9.00909 5.27567 9.00909C6.82167 9.00909 8.07495 7.75581 8.07495 6.20981C8.07495 4.6638 6.82167 3.41052 5.27567 3.41052C3.72967 3.41052 2.47639 4.6638 2.47639 6.20981Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M0.0390625 19.7365C0.0390625 16.8444 2.38358 14.4999 5.2757 14.4999H18.8024C21.6945 14.4999 24.0391 16.8444 24.0391 19.7365C24.0391 22.6286 21.6945 24.9731 18.8024 24.9731H5.2757C2.38358 24.9731 0.0390625 22.6286 0.0390625 19.7365ZM21.6017 19.7365C21.6017 21.2825 20.3485 22.5358 18.8025 22.5358C17.2565 22.5358 16.0032 21.2825 16.0032 19.7365C16.0032 18.1905 17.2565 16.9373 18.8025 16.9373C20.3485 16.9373 21.6017 18.1905 21.6017 19.7365Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_NavSuperuserDashboard = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(NavSuperuserDashboard))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/NavVideo.tsx



const NavVideo = ({ width =24 , height =20 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M5 0C2.23858 0 0 2.23858 0 5V15C0 17.7614 2.23858 20 5 20H19C21.7614 20 24 17.7614 24 15V5C24 2.23858 21.7614 0 19 0H5ZM15.5244 10.8457C16.1585 10.4699 16.1585 9.53014 15.5244 9.15426L10.4267 6.13229C9.7926 5.75641 9 6.22626 9 6.97803V13.022C9 13.7737 9.7926 14.2436 10.4267 13.8677L15.5244 10.8457Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_NavVideo = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(NavVideo))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Play.tsx



const Play = ({ width =11 , height =12 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 11 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M9.5 4.7009C10.5 5.27825 10.5 6.72163 9.5 7.29898L2.75 11.1961C1.75 11.7734 0.5 11.0518 0.5 9.89705L0.5 2.10282C0.5 0.948124 1.75 0.226435 2.75 0.803785L9.5 4.7009Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Play = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Play))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Playlist.tsx



const Playlist = ({ width =24 , height =24 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M20.686 6.6C20.686 6.88995 20.4509 7.125 20.1609 7.125H3.95273C3.66278 7.125 3.42773 6.88995 3.42773 6.6V5.775C3.42773 5.48505 3.66279 5.25 3.95273 5.25H20.1609C20.4509 5.25 20.686 5.48505 20.686 5.775V6.6Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M11.3799 12.6C11.3799 12.8899 11.1449 13.125 10.8549 13.125H3.95273C3.66278 13.125 3.42773 12.8899 3.42773 12.6V11.775C3.42773 11.485 3.66279 11.25 3.95273 11.25H10.8549C11.1449 11.25 11.3799 11.4851 11.3799 11.775V12.6Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M10.8549 19.125C11.1449 19.125 11.3799 18.8899 11.3799 18.6V17.775C11.3799 17.485 11.1449 17.25 10.8549 17.25L3.95273 17.25C3.66279 17.25 3.42773 17.485 3.42773 17.775V18.6C3.42773 18.8899 3.66279 19.125 3.95273 19.125H10.8549Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M20.8472 15.8119C21.1372 15.6444 21.3159 15.3349 21.3159 15C21.3159 14.665 21.1372 14.3555 20.8472 14.1881L14.8644 10.7339C14.5743 10.5664 14.217 10.5664 13.9269 10.7339C13.6368 10.9014 13.4581 11.2109 13.4581 11.5458V18.4541C13.4581 18.7891 13.6368 19.0985 13.9269 19.266C14.217 19.4335 14.5743 19.4335 14.8644 19.266L20.8472 15.8119Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Playlist = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Playlist))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/PlayOutline.tsx



const PlayOutline = ({ width =18 , height =16 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 18 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M3.75 0.5C1.67893 0.5 0 2.17893 0 4.25V11.75C0 13.8211 1.67893 15.5 3.75 15.5H14.25C16.3211 15.5 18 13.8211 18 11.75V4.25C18 2.17893 16.3211 0.5 14.25 0.5H3.75ZM11.6433 8.63431C12.1188 8.35239 12.1188 7.64761 11.6433 7.36569L7.81995 5.09922C7.34439 4.81731 6.74994 5.1697 6.74994 5.73353V10.2665C6.74994 10.8303 7.34439 11.1827 7.81995 10.9008L11.6433 8.63431Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_PlayOutline = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(PlayOutline))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Plus.tsx



const Plus = ({ width =14 , height =14 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 14 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0.999965 5.99994C0.44768 5.99994 -3.54904e-05 6.44766 -3.54535e-05 6.99994C-3.54798e-05 7.55223 0.44768 7.99994 0.999965 7.99994L5.99991 7.99994L5.99991 13C5.99991 13.5523 6.44762 14 6.99991 14C7.55219 14 7.99991 13.5523 7.99991 13L7.99991 7.99994H13C13.5522 7.99994 14 7.55223 14 6.99994C14 6.44766 13.5522 5.99994 13 5.99994H7.99991L7.99991 1C7.99991 0.447717 7.55219 1.16683e-06 6.99991 8.92876e-07C6.44762 6.13653e-07 5.99991 0.447716 5.99991 1L5.99991 5.99994L0.999965 5.99994Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Plus = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Plus))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Search.tsx



const Search_Search = ({ width =16 , height =17 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 16 17",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M0 7C0 3.13 3.13 0 7 0C10.87 0 14 3.13 14 7C14 8.76212 13.3511 10.3708 12.2789 11.6005L15.7802 15.111C16.0337 15.3652 16.0332 15.7767 15.779 16.0302C15.5248 16.2837 15.1133 16.2832 14.8598 16.029L11.3373 12.4973C10.1453 13.4386 8.639 14 7 14C3.13 14 0 10.87 0 7ZM12.7 7C12.7 3.86 10.14 1.3 7 1.3C3.86 1.3 1.3 3.86 1.3 7C1.3 10.14 3.86 12.7 7 12.7C10.14 12.7 12.7 10.14 12.7 7Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Search = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Search_Search))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Send.tsx



const Send = ({ isDisabled =false , width =21 , height =18 , fill ="#d9d9d9" , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 21 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M1.85167 17.5211L20.3666 9.69073C20.9771 9.43254 20.9771 8.56738 20.3666 8.3092L1.85167 0.478872C1.30833 0.249084 0.724648 0.707588 0.819234 1.28989L1.41156 4.93643C1.62328 6.23983 2.66236 7.25154 3.97095 7.4284L11.6963 8.47248C11.9604 8.50816 12.1574 8.73356 12.1574 9C12.1574 9.26644 11.9604 9.49183 11.6963 9.52752L3.97094 10.5716C2.66235 10.7485 1.62326 11.7602 1.41155 13.0636L0.819233 16.71C0.724647 17.2923 1.30833 17.7508 1.85167 17.5211Z",
            fill: isDisabled ? getCssVar("grey", 900) : fill
        })
    })
;
/* harmony default export */ const shared_Send = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Send))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Settings.tsx


const Settings_NavVideo = ({ width =20 , height =20 , fill ="#d9d9d9" , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M7.56845 1.2037C7.64442 0.740166 8.04499 0.399902 8.51471 0.399902H11.4851C11.9548 0.399902 12.3554 0.740165 12.4314 1.2037L12.6252 2.38618C12.6803 2.72237 12.9117 2.99977 13.2199 3.14481C13.6072 3.32706 13.9766 3.54116 14.3246 3.78374C14.6043 3.97868 14.9605 4.04054 15.2794 3.92009L16.4019 3.4961C16.8413 3.33013 17.3363 3.5069 17.5711 3.91369L19.0563 6.48611C19.2912 6.8929 19.1968 7.40994 18.8334 7.7075L17.9048 8.4677C17.6415 8.68328 17.5169 9.02192 17.5452 9.36103C17.5628 9.57166 17.5718 9.78473 17.5718 9.9999C17.5718 10.2151 17.5628 10.4281 17.5452 10.6388C17.5169 10.9779 17.6415 11.3165 17.9048 11.5321L18.8334 12.2923C19.1968 12.5899 19.2912 13.1069 19.0563 13.5137L17.5712 16.0861C17.3363 16.4929 16.8413 16.6697 16.4019 16.5037L15.2794 16.0797C14.9605 15.9593 14.6043 16.0211 14.3246 16.2161C13.9766 16.4586 13.6073 16.6727 13.2199 16.855C12.9117 17 12.6803 17.2774 12.6252 17.6136L12.4314 18.7961C12.3554 19.2596 11.9548 19.5999 11.4851 19.5999H8.51471C8.04499 19.5999 7.64442 19.2596 7.56845 18.7961L7.37465 17.6136C7.31955 17.2774 7.08811 17 6.77986 16.855C6.39256 16.6727 6.02321 16.4586 5.67518 16.2161C5.39552 16.0211 5.03931 15.9593 4.7204 16.0797L3.59789 16.5037C3.15848 16.6697 2.66351 16.4929 2.42865 16.0861L0.943462 13.5137C0.708602 13.1069 0.802994 12.5899 1.16644 12.2923L2.09499 11.5321C2.35829 11.3165 2.4829 10.9779 2.45457 10.6388C2.43698 10.4281 2.428 10.2151 2.428 9.9999C2.428 9.78473 2.43698 9.57166 2.45457 9.36104C2.4829 9.02193 2.35829 8.68328 2.09499 8.46771L1.16644 7.7075C0.802997 7.40994 0.708605 6.8929 0.943465 6.48612L2.42866 3.91369C2.66352 3.5069 3.15848 3.33013 3.5979 3.4961L4.7204 3.92009C5.03931 4.04055 5.39552 3.97868 5.67519 3.78374C6.02321 3.54116 6.39256 3.32706 6.77986 3.14482C7.08811 2.99977 7.31955 2.72237 7.37465 2.38619L7.56845 1.2037ZM9.99991 14.2611C12.3533 14.2611 14.2612 12.3533 14.2612 9.9999C14.2612 7.64648 12.3533 5.73866 9.99991 5.73866C7.64649 5.73866 5.73867 7.64648 5.73867 9.9999C5.73867 12.3533 7.64649 14.2611 9.99991 14.2611Z",
            fill: fill
        })
    })
;
/* harmony default export */ const Settings = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Settings_NavVideo))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Share.tsx



const Share = ({ width =17 , height =14 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 17 14",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M0.896046 13.726C1.02743 13.765 1.16829 13.7563 1.29377 13.7014C1.41926 13.6463 1.5213 13.5487 1.58178 13.4256C2.96792 11.1885 5.09383 10.0711 7.58839 9.53705C8.29993 9.39683 9.01993 9.30303 9.74369 9.25647C9.98946 9.23683 10.068 9.29588 10.0632 9.55422C10.0461 10.3392 10.0632 11.1219 10.0632 11.9071C10.0632 12.2147 10.137 12.4683 10.4467 12.5839C10.7564 12.6996 10.9579 12.5347 11.1496 12.3206C12.7667 10.5159 14.3864 8.71089 16.0085 6.9062C16.3305 6.5494 16.3305 6.31549 16.0085 5.95621C14.3815 4.15144 12.7537 2.34154 11.125 0.527003C10.9308 0.307947 10.7121 0.172673 10.4172 0.29806C10.2926 0.352035 10.1898 0.446387 10.1256 0.566145C10.0613 0.685902 10.0394 0.823791 10.0632 0.957707V2.11685C10.0632 2.51309 10.0484 2.91176 10.0632 3.31046C10.0632 3.55657 10.0067 3.61315 9.76097 3.63773C5.73351 4.01843 2.89557 6.05627 1.24751 9.75113C0.794238 10.8089 0.544079 11.9428 0.510198 13.0933C0.483865 13.2279 0.508964 13.3675 0.580418 13.4846C0.651874 13.6017 0.764521 13.6878 0.896046 13.726Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Share = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Share))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/SidebarPin.tsx



const SidebarPin = ({ width =32 , height =32 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "9",
                y: "7",
                width: "7",
                height: "4",
                rx: "2",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "9",
                y: "14",
                width: "7",
                height: "4",
                rx: "2",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "9",
                y: "21",
                width: "7",
                height: "4",
                rx: "2",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M24.4331 15.3453C24.7585 15.7211 24.7585 16.2789 24.4331 16.6547L22.2559 19.1686C21.6498 19.8685 20.5 19.4398 20.5 18.5139L20.5 13.4861C20.5 12.5602 21.6498 12.1315 22.2559 12.8314L24.4331 15.3453Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_SidebarPin = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(SidebarPin))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/SidebarUnpin.tsx



const SidebarUnpin = ({ width =32 , height =32 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 32 32",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                x: "17",
                y: "7",
                width: "7",
                height: "4",
                rx: "2",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "17",
                y: "14",
                width: "7",
                height: "4",
                rx: "2",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("rect", {
                x: "17",
                y: "21",
                width: "7",
                height: "4",
                rx: "2",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M8.56695 15.3453C8.24152 15.7211 8.24152 16.2789 8.56695 16.6547L10.7441 19.1686C11.3502 19.8685 12.5 19.4398 12.5 18.5139L12.5 13.4861C12.5 12.5602 11.3502 12.1315 10.7441 12.8314L8.56695 15.3453Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_SidebarUnpin = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(SidebarUnpin))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Spinner.tsx



const Spinner = ({ width =20 , height =20 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M9.99979 0.972021C9.99979 0.474965 9.59551 0.0677545 9.10045 0.112207C4.0388 0.566696 0.0717773 4.8201 0.0717773 10C0.0717773 15.4831 4.51671 19.928 9.99979 19.928C15.1798 19.928 19.4331 15.9611 19.8876 10.8994C19.9321 10.4043 19.5249 9.99764 19.0278 9.99385C18.9837 9.99351 18.9396 9.99321 18.8954 9.99296C18.408 9.99021 18.0253 10.3897 17.9728 10.8742C17.5372 14.8924 14.1338 18.0202 9.99979 18.0202C5.5704 18.0202 1.97967 14.4294 1.97967 10C1.97967 5.8744 5.0948 2.47634 9.10125 2.02969C9.59524 1.97461 9.99979 1.57697 9.99979 1.07991V1.02597V0.972021Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Spinner = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Spinner))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Star.tsx



const Star = ({ width =24 , height =24 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M10.716 3.81808C11.1201 2.57431 12.8797 2.57431 13.2838 3.81808L14.4345 7.35954C14.6153 7.91577 15.1336 8.29236 15.7184 8.29236H19.4422C20.7499 8.29236 21.2937 9.96585 20.2357 10.7345L17.2231 12.9233C16.75 13.267 16.552 13.8764 16.7327 14.4326L17.8834 17.9741C18.2875 19.2178 16.864 20.2521 15.806 19.4834L12.7934 17.2947C12.3203 16.9509 11.6796 16.9509 11.2064 17.2947L8.19386 19.4834C7.13585 20.2521 5.7123 19.2178 6.11642 17.9741L7.26711 14.4326C7.44784 13.8764 7.24985 13.267 6.77669 12.9233L3.76416 10.7345C2.70614 9.96585 3.24989 8.29236 4.55766 8.29236H8.28137C8.86622 8.29236 9.38456 7.91577 9.56529 7.35954L10.716 3.81808Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Star = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Star))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Tick.tsx



const Tick = ({ width =15 , height =10 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 15 10",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            d: "M13.8393 2.25584C14.1647 1.9304 14.1647 1.40277 13.8393 1.07733C13.5138 0.751893 12.9862 0.751893 12.6607 1.07733L5.75 7.98807L2.17259 4.41066C1.84715 4.08523 1.31951 4.08523 0.994078 4.41066C0.668641 4.7361 0.668641 5.26374 0.994078 5.58917L5.16074 9.75584C5.48618 10.0813 6.01382 10.0813 6.33926 9.75584L13.8393 2.25584Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Tick = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Tick))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Trash.tsx



const Trash = ({ width =17 , height =20 , fill =getCssVar("red", 300) , ...props })=>/*#__PURE__*/ _jsx("svg", {
        width: width,
        height: height,
        viewBox: "0 0 17 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9.20712 0.065918C9.57992 0.065918 9.88212 0.368125 9.88212 0.740918V2.93079H15.5043C15.7943 2.93079 16.0293 3.16584 16.0293 3.45579V4.28079C16.0293 4.57074 15.7943 4.80579 15.5043 4.80579H14.5647L13.934 17.7935C13.8758 18.9923 12.8869 19.9343 11.6866 19.9343H4.42305C3.22283 19.9343 2.23391 18.9923 2.1757 17.7935L1.54498 4.80579H0.554297C0.264347 4.80579 0.0292969 4.57074 0.0292969 4.28079V3.45579C0.0292969 3.16584 0.264347 2.93079 0.554297 2.93079H6.22758V0.740918C6.22758 0.368126 6.52979 0.065918 6.90258 0.065918H9.20712ZM6.62004 16.0743C6.78572 16.0743 6.92004 15.94 6.92004 15.7743L6.92004 7.99212C6.92004 7.82644 6.78572 7.69212 6.62004 7.69212H5.34504C5.17935 7.69212 5.04504 7.82644 5.04504 7.99212V15.7743C5.04504 15.94 5.17935 16.0743 5.34504 16.0743H6.62004ZM10.7061 16.0743C10.8718 16.0743 11.0061 15.94 11.0061 15.7743V7.99212C11.0061 7.82644 10.8718 7.69212 10.7061 7.69212H9.43108C9.2654 7.69212 9.13108 7.82644 9.13108 7.99212V15.7743C9.13108 15.94 9.2654 16.0743 9.43108 16.0743H10.7061Z",
            fill: fill
        })
    })
;
/* harmony default export */ const shared_Trash = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Trash))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/TriplePoints.tsx



const TriplePoints = ({ width =4 , height =18 , fill =getCssVar("grey", 500) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 4 18",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M-8.74226e-08 16C-1.35705e-07 14.8954 0.89543 14 2 14C3.10457 14 4 14.8954 4 16C4 17.1046 3.10457 18 2 18C0.895431 18 -3.91404e-08 17.1046 -8.74226e-08 16Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M-6.99381e-07 2C-7.47663e-07 0.895433 0.89543 1.86821e-06 2 1.81993e-06C3.10457 1.77164e-06 4 0.895431 4 2C4 3.10457 3.10457 4 2 4C0.89543 4 -6.51099e-07 3.10457 -6.99381e-07 2Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M2 7C0.89543 7 -4.41684e-07 7.89543 -3.93402e-07 9C-3.45119e-07 10.1046 0.89543 11 2 11C3.10457 11 4 10.1046 4 9C4 7.89543 3.10457 7 2 7Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_TriplePoints = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(TriplePoints))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/shared/Upload.tsx



const Upload = ({ width =24 , height =24 , fill =getCssVar("grey", 100) , ...props })=>/*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.32 5.38489C12.1433 5.2106 11.8567 5.2106 11.68 5.38489L6.52527 10.4691C6.34856 10.6434 6.06205 10.6434 5.88534 10.4691L5.38253 9.97315C5.20582 9.79886 5.20582 9.51628 5.38253 9.34198L11.68 3.13072C11.8567 2.95643 12.1433 2.95643 12.32 3.13072L18.6175 9.34198C18.7942 9.51628 18.7942 9.79886 18.6175 9.97315L18.1147 10.4691C17.938 10.6434 17.6514 10.6434 17.4747 10.4691L12.32 5.38489Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M11.6445 3.94224C11.3946 3.94224 11.192 4.14205 11.192 4.38854L11.192 16.0537C11.192 16.3002 11.3946 16.5 11.6445 16.5H12.3556C12.6055 16.5 12.8081 16.3002 12.8081 16.0537L12.808 4.38854C12.808 4.14205 12.6054 3.94223 12.3555 3.94223L11.6445 3.94224Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M6 20.58C6 20.812 6.19057 21 6.42565 21L17.5744 21C17.8094 21 18 20.8119 18 20.58L18 19.92C18 19.688 17.8094 19.5 17.5744 19.5L6.42564 19.5C6.19057 19.5 6 19.6881 6 19.92L6 20.58Z",
                fill: fill
            })
        ]
    })
;
/* harmony default export */ const shared_Upload = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Upload))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/icons/index.ts












































/***/ }),

/***/ 7448:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ImageEmptyList, ImageLogo, ImagePictureBulk

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/images/shared/EmptyList.tsx



const EmptyList = ({ fill =getCssVar("grey", 100) , width =72 , height =72 , ...props })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 72 72",
        fill: fill,
        width: width,
        height: height,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("rect", {
                y: "52",
                width: "72",
                height: "20",
                rx: "4",
                fill: "#3A3C41"
            }),
            /*#__PURE__*/ _jsx("rect", {
                opacity: "0.9",
                x: "23",
                y: "58",
                width: "24",
                height: "2",
                fill: "#898E96"
            }),
            /*#__PURE__*/ _jsx("rect", {
                opacity: "0.9",
                x: "23",
                y: "63",
                width: "13",
                height: "2",
                fill: "#4E5158"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14 61.1339C14.6667 61.5188 14.6667 62.4811 14 62.866L9.5 65.4641C8.83333 65.849 8 65.3678 8 64.598L8 59.4019C8 58.6321 8.83333 58.151 9.5 58.5359L14 61.1339Z",
                fill: "#898E96"
            }),
            /*#__PURE__*/ _jsx("rect", {
                y: "26",
                width: "72",
                height: "20",
                rx: "4",
                fill: "#3A3C41"
            }),
            /*#__PURE__*/ _jsx("rect", {
                opacity: "0.9",
                x: "23",
                y: "32",
                width: "24",
                height: "2",
                fill: "#898E96"
            }),
            /*#__PURE__*/ _jsx("rect", {
                opacity: "0.9",
                x: "23",
                y: "37",
                width: "13",
                height: "2",
                fill: "#4E5158"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14 35.1339C14.6667 35.5188 14.6667 36.4811 14 36.866L9.5 39.4641C8.83333 39.849 8 39.3678 8 38.598L8 33.4019C8 32.6321 8.83333 32.151 9.5 32.5359L14 35.1339Z",
                fill: "#898E96"
            }),
            /*#__PURE__*/ _jsx("rect", {
                width: "72",
                height: "20",
                rx: "4",
                fill: "#3A3C41"
            }),
            /*#__PURE__*/ _jsx("rect", {
                opacity: "0.9",
                x: "23",
                y: "7",
                width: "24",
                height: "2",
                fill: "#898E96"
            }),
            /*#__PURE__*/ _jsx("rect", {
                opacity: "0.9",
                x: "23",
                y: "12",
                width: "13",
                height: "2",
                fill: "#4E5158"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M14 9.13393C14.6667 9.51883 14.6667 10.4811 14 10.866L9.5 13.4641C8.83333 13.849 8 13.3678 8 12.598L8 7.40188C8 6.63208 8.83333 6.15096 9.5 6.53586L14 9.13393Z",
                fill: "#898E96"
            })
        ]
    });
};
/* harmony default export */ const shared_EmptyList = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(EmptyList))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/images/shared/PictureBulk.tsx



const PictureBulk = ({ fill =getCssVar("grey", 500) , width =60 , height =54 , ...props })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        width: width,
        height: height,
        viewBox: "0 0 60 54",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M40.5 18C42.9853 18 45 15.9853 45 13.5C45 11.0147 42.9853 9 40.5 9C38.0147 9 36 11.0147 36 13.5C36 15.9853 38.0147 18 40.5 18Z",
                fill: fill
            }),
            /*#__PURE__*/ _jsx("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9 0C4.02944 0 0 4.02944 0 9V45C0 49.9706 4.02944 54 9 54H51C55.9706 54 60 49.9706 60 45V9C60 4.02944 55.9706 0 51 0H9ZM51 6H9C7.34315 6 6 7.34315 6 9V24.3748L15 16.4993L39 39L48 30L54 35V9C54 7.34314 52.6569 6 51 6Z",
                fill: fill
            })
        ]
    });
};
/* harmony default export */ const shared_PictureBulk = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(PictureBulk))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/images/shared/Logo.tsx



const Logo = ({ fill =getCssVar("grey", 100) , width =61 , height =15 , ...props })=>{
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 61 15",
        fill: fill,
        width: width,
        height: height,
        ...props,
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M60.6013 0.0580645H58.1413C58.0377 0.0580645 57.9383 0.0992364 57.865 0.172523C57.7917 0.24581 57.7505 0.345209 57.7505 0.448852V9.38617H57.6723L57.2816 8.84297L49.8976 0.19484C49.862 0.15173 49.8172 0.117093 49.7665 0.0934367C49.7158 0.0697801 49.6605 0.0576968 49.6045 0.0580645H46.9335C46.8299 0.0580645 46.7305 0.0992364 46.6572 0.172523C46.5839 0.24581 46.5427 0.345209 46.5427 0.448852V14.1147C46.5427 14.2183 46.5839 14.3177 46.6572 14.391C46.7305 14.4643 46.8299 14.5055 46.9335 14.5055H49.3955C49.4991 14.5055 49.5985 14.4643 49.6718 14.391C49.7451 14.3177 49.7863 14.2183 49.7863 14.1147V5.17738H49.8644L50.2552 5.71862L57.645 14.3668C57.6817 14.409 57.727 14.443 57.7779 14.4662C57.8288 14.4895 57.8841 14.5015 57.94 14.5016H60.6091C60.7128 14.5016 60.8122 14.4604 60.8854 14.3871C60.9587 14.3138 60.9999 14.2144 60.9999 14.1108V0.446899C60.9997 0.395081 60.9891 0.343829 60.9689 0.296126C60.9486 0.248424 60.9191 0.205222 60.882 0.169038C60.8449 0.132854 60.801 0.104409 60.7528 0.0853569C60.7046 0.0663052 60.6531 0.0570275 60.6013 0.0580645Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M7.31555 0.0579863H0.390788C0.287144 0.0579863 0.187746 0.0991581 0.114459 0.172445C0.0411719 0.245732 0 0.345131 0 0.448774V14.1146C0 14.2183 0.0411719 14.3177 0.114459 14.3909C0.187746 14.4642 0.287144 14.5054 0.390788 14.5054H7.45623C9.34649 14.5033 11.1607 13.7609 12.5102 12.4373C13.8597 11.1137 14.6372 9.31419 14.676 7.42433C14.7522 3.37187 11.3622 0.0579863 7.31555 0.0579863ZM7.16704 11.4768H3.60306C3.49942 11.4768 3.40002 11.4356 3.32673 11.3623C3.25345 11.2891 3.21227 11.1897 3.21227 11.086V3.47738C3.21227 3.37374 3.25345 3.27434 3.32673 3.20105C3.40002 3.12776 3.49942 3.08659 3.60306 3.08659H7.45818C9.75602 3.08659 11.4169 4.93697 11.4423 7.22894C11.4657 9.5639 9.502 11.4768 7.16509 11.4768H7.16704Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M44.8475 7.28661C44.8475 3.26382 41.657 0.0038625 37.7192 0H36.1221C32.1804 0 28.9861 3.26189 28.9861 7.28661C28.9861 11.3113 32.1862 14.5752 36.1221 14.5752H37.7385C41.6686 14.5578 44.8475 11.3017 44.8475 7.28661ZM37.7018 11.5354H36.1143C33.8239 11.5354 32.1765 9.63888 32.1765 7.30013C32.1765 4.96139 33.8239 3.0649 36.1143 3.0649H37.7018C39.9942 3.0649 41.6416 4.96139 41.6416 7.30013C41.6416 9.63888 40.0019 11.5373 37.7095 11.5373L37.7018 11.5354Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M18.6827 3.08678H15.6179C15.5153 3.08678 15.4169 3.04561 15.3443 2.97232C15.2717 2.89904 15.231 2.79964 15.231 2.69599V0.454827C15.231 0.351184 15.2717 0.251785 15.3443 0.178498C15.4169 0.105211 15.5153 0.0640393 15.6179 0.0640393H21.2637C21.3202 0.0633037 21.3762 0.0750627 21.4277 0.0984872C21.4791 0.121912 21.5249 0.156434 21.5618 0.199634C21.5987 0.242833 21.6258 0.293662 21.6411 0.348549C21.6565 0.403437 21.6597 0.461054 21.6507 0.517354C21.5423 1.23346 21.1832 1.88656 20.6386 2.35804C20.094 2.82951 19.4 3.08808 18.6827 3.08678Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M20.063 11.0978V7.29548C20.063 5.37808 20.8247 3.53921 22.1805 2.1834C23.5363 0.827593 25.3752 0.0659075 27.2926 0.0659075H27.7049C27.8085 0.0659075 27.9079 0.107082 27.9812 0.180369C28.0545 0.253656 28.0957 0.353052 28.0957 0.456695V2.69591C28.0957 2.79955 28.0545 2.89895 27.9812 2.97224C27.9079 3.04553 27.8085 3.0867 27.7049 3.0867H23.6856C23.582 3.0867 23.4826 3.12787 23.4093 3.20116C23.336 3.27444 23.2949 3.37384 23.2949 3.47748V7.27008C23.2949 9.18748 22.5332 11.0264 21.1774 12.3822C19.8216 13.738 17.9827 14.4997 16.0653 14.4997H15.6315C15.5279 14.4997 15.4285 14.4585 15.3552 14.3852C15.2819 14.3119 15.2407 14.2125 15.2407 14.1089V11.8638C15.2407 11.7601 15.2819 11.6607 15.3552 11.5875C15.4285 11.5142 15.5279 11.473 15.6315 11.473H19.6781C19.7781 11.4716 19.8737 11.4319 19.9453 11.3621C20.0169 11.2923 20.0591 11.1977 20.063 11.0978Z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M24.6402 11.4749H27.6896C27.7927 11.4749 27.8917 11.5161 27.9646 11.5893C28.0375 11.6626 28.0785 11.762 28.0785 11.8657V14.1147C28.0785 14.2183 28.0375 14.3177 27.9646 14.391C27.8917 14.4643 27.7927 14.5054 27.6896 14.5054H22.0497C21.993 14.5062 21.9367 14.4944 21.885 14.471C21.8332 14.4476 21.7872 14.4131 21.7501 14.3699C21.7131 14.3267 21.6858 14.2758 21.6704 14.2209C21.655 14.1661 21.6517 14.1084 21.6608 14.0521C21.7683 13.3354 22.128 12.6812 22.6747 12.2083C23.2214 11.7355 23.9188 11.4752 24.6402 11.4749Z"
            })
        ]
    });
};
/* harmony default export */ const shared_Logo = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Logo))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/images/index.ts





/***/ }),

/***/ 4825:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JX": () => (/* reexport safe */ _col__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "Kp": () => (/* reexport safe */ _safe_view__WEBPACK_IMPORTED_MODULE_21__.Z),
/* harmony export */   "X2": () => (/* reexport safe */ _row__WEBPACK_IMPORTED_MODULE_17__.Z),
/* harmony export */   "ZT": () => (/* reexport safe */ _typography__WEBPACK_IMPORTED_MODULE_27__.Z),
/* harmony export */   "Zb": () => (/* reexport safe */ _card__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "iz": () => (/* reexport safe */ _divider__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "pf": () => (/* reexport safe */ _scroll_view__WEBPACK_IMPORTED_MODULE_22__.Z),
/* harmony export */   "u_": () => (/* reexport safe */ _modal__WEBPACK_IMPORTED_MODULE_15__.ZP),
/* harmony export */   "zx": () => (/* reexport safe */ _button__WEBPACK_IMPORTED_MODULE_4__.Z)
/* harmony export */ });
/* harmony import */ var _avatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2040);
/* harmony import */ var _bottom_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4206);
/* harmony import */ var _box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3431);
/* harmony import */ var _breadcrumbs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2167);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3166);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9228);
/* harmony import */ var _checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8647);
/* harmony import */ var _chip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9280);
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(325);
/* harmony import */ var _divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5806);
/* harmony import */ var _flat_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5784);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3171);
/* harmony import */ var _link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8913);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(4569);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(859);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(9345);
/* harmony import */ var _pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(5081);
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1569);
/* harmony import */ var _section_list__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(5004);
/* harmony import */ var _side_navigation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8198);
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(6988);
/* harmony import */ var _safe_view__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(361);
/* harmony import */ var _scroll_view__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8775);
/* harmony import */ var _stack__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(5811);
/* harmony import */ var _stepper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(3094);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(483);
/* harmony import */ var _textfield__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(2574);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(9172);
/* harmony import */ var _virtualized_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(5154);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(5650);
/* harmony import */ var _images__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(7448);
/* harmony import */ var _form_types__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(6823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_flat_list__WEBPACK_IMPORTED_MODULE_10__, _pagination__WEBPACK_IMPORTED_MODULE_16__, _section_list__WEBPACK_IMPORTED_MODULE_18__, _virtualized_list__WEBPACK_IMPORTED_MODULE_28__]);
([_flat_list__WEBPACK_IMPORTED_MODULE_10__, _pagination__WEBPACK_IMPORTED_MODULE_16__, _section_list__WEBPACK_IMPORTED_MODULE_18__, _virtualized_list__WEBPACK_IMPORTED_MODULE_28__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















































__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8913:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/link/shared/ui.ts


const ui_LinkComponent = (external_styled_components_default()).a`
  text-transform: inherit;
`;
const ui_StyledLink = external_styled_components_default()(material_.Link)`
  /* font-weight: inherit; */
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/link/index.tsx



const Link = ({ component: Component = LinkComponent , to , children , ...props1 })=>{
    const Wrapper = useMemo(()=>(props)=>{
            if (to) {
                return /*#__PURE__*/ _jsx(Component, {
                    href: to,
                    ...props
                });
            }
            return /*#__PURE__*/ _jsx(React.Fragment, {
                ...props
            });
        }
    , [
        to
    ]);
    return /*#__PURE__*/ _jsx(Wrapper, {
        children: /*#__PURE__*/ _jsx(StyledLink, {
            ...props1,
            children: children
        })
    });
};
/* harmony default export */ const ui_link = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Link))));


/***/ }),

/***/ 4569:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: ListWrapper, StyledList, StyledListItem, StyledListItemButton, StyledListItemIcon, StyledListItemText, default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/list/shared/ui.ts



const ui_ListWrapper = (external_styled_components_default()).div`
  display: flex;
  margin: 2rem 0;
`;
const ui_StyledList = external_styled_components_default()(material_.List)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const StyledListItem = external_styled_components_default()(material_.ListItem)`
  color: ${({ isActive  })=>isActive ? (0,lib/* getCssVar */.MX)("grey", 950) : (0,lib/* getCssVar */.MX)("grey", 500)
};
`;
const StyledListItemButton = external_styled_components_default()(material_.ListItemButton)`
  padding: .8rem;
  border-radius: .4rem;
  color: currentColor;
`;
const StyledListItemText = external_styled_components_default()(material_.ListItemText)`
  white-space: nowrap;
  color: currentColor;

  span {
    font-weight: inherit;
    color: currentColor;
  }
`;
const StyledListItemIcon = external_styled_components_default()(material_.ListItemIcon)`
  display: inline-flex;
  justify-content: center;
  min-width: 3.2rem;
  color: currentColor;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/list/index.tsx



const List = ({ children , className ,  })=>{
    return /*#__PURE__*/ _jsx(ListWrapper, {
        className: className,
        children: /*#__PURE__*/ _jsx(StyledList, {
            children: children
        })
    });
};
/* harmony default export */ const list = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(List))));




/***/ }),

/***/ 859:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: StyledMenu, StyledMenuItem, default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/menu/shared/ui.tsx



const ui_StyledMenu = external_styled_components_default()(material_.Menu)``;
const StyledMenuItem = external_styled_components_default()(material_.MenuItem)`
  background: transparent;

  &:active, &[class*=selected] {
    background: ${(0,lib/* getCssVar */.MX)("grey", 900)};

    &:hover {
      background: ${(0,lib/* getCssVar */.MX)("grey", 900)};
    }
  }

  &:hover {
    background: ${(0,lib/* getCssVar */.MX)("grey", 900)};
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/menu/index.tsx



const Menu = (props)=>{
    return /*#__PURE__*/ _jsx(StyledMenu, {
        ...props
    });
};
/* harmony default export */ const menu = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Menu))));




/***/ }),

/***/ 9345:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ modal)
});

// UNUSED EXPORTS: ButtonsWrapper, ModalCloseButton, ModalContainer, ModalContent, ModalFooter, ModalTitle, StorySubstrate, StyledModal

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
// EXTERNAL MODULE: ../../libs/uikit/src/shared/ui/button/index.tsx + 1 modules
var ui_button = __webpack_require__(3166);
// EXTERNAL MODULE: ../../libs/uikit/src/shared/ui/icons/index.ts + 41 modules
var icons = __webpack_require__(5650);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/modal/shared/ui.tsx



const StyledModal = external_styled_components_default()(material_.Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
`;
const ModalContainer = (external_styled_components_default()).section`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.4rem 3.2rem;
  background: ${(0,lib/* getCssVar */.MX)("white", 100)};
  border: 0 solid transparent;
  border-radius: 1.6rem;
`;
const ModalCloseButton = (external_styled_components_default()).button`
  position: absolute;
  top: -3.2rem;
  right: -1.6rem;
  background: transparent;
`;
const ModalTitle = (external_styled_components_default()).h4`
  font-size: ${(0,lib/* getCssVar */.MX)("font", "h4")};
  font-weight: ${(0,lib/* getCssVar */.MX)("font", "bold")};
`;
const ModalContent = (external_styled_components_default()).form`
  margin-bottom: 1.6rem;
  font-size: ${(0,lib/* getCssVar */.MX)("font", "common")};
`;
const ModalFooter = (external_styled_components_default()).div`
  margin-top: 5.6rem;

  button {
    width: 150px;
  }
`;
const StorySubstrate = (external_styled_components_default()).div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  display: flex;
  justify-content: center;
`;
const ButtonsWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/modal/index.tsx






const Modal = ({ title , children , actionButtonProps , cancelButtonProps , onClose , ...props })=>{
    const onSubmit = (event)=>{
        event.preventDefault();
        if (actionButtonProps?.onClick) {
            actionButtonProps.onClick(event);
        }
    };
    const footerContent = (0,external_react_.useMemo)(()=>{
        if (!actionButtonProps && !cancelButtonProps) return null;
        return /*#__PURE__*/ jsx_runtime_.jsx(ModalFooter, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ButtonsWrapper, {
                children: [
                    actionButtonProps && /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        type: "submit",
                        variant: "contained",
                        color: "primary",
                        ...actionButtonProps,
                        children: actionButtonProps.children
                    }),
                    cancelButtonProps && /*#__PURE__*/ jsx_runtime_.jsx(ui_button/* default */.Z, {
                        variant: "contained",
                        color: "secondary",
                        onClick: onClose,
                        ...cancelButtonProps,
                        children: cancelButtonProps.children
                    })
                ]
            })
        });
    }, [
        actionButtonProps,
        cancelButtonProps,
        onClose
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledModal, {
        ...props,
        onClose: onClose,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalContainer, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ModalCloseButton, {
                    onClick: onClose,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* IconCross */.Wc, {
                        width: 16,
                        height: 16,
                        fill: (0,lib/* getCssVar */.MX)("white", 40)
                    })
                }),
                title && /*#__PURE__*/ jsx_runtime_.jsx(ModalTitle, {
                    children: title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(ModalContent, {
                    style: {
                        marginTop: title ? 0 : "1.6rem"
                    },
                    onSubmit: onSubmit,
                    children: [
                        children,
                        footerContent
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const modal = (/*#__PURE__*/external_react_default().memo(Modal));




/***/ }),

/***/ 5081:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2592);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5650);
/* harmony import */ var _typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9172);
/* harmony import */ var _shared_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5550);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_model__WEBPACK_IMPORTED_MODULE_3__]);
_model__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const Pagination = ({ pages , page: _page = 1 , limit: _limit = PAGINATION_LIMITS[0] , onChange , ...props })=>{
    const { 0: page , 1: setPage  } = useState(_page);
    const { 0: limit , 1: setLimit  } = useState(_limit);
    const isMobile = useMediaQuery(`(max-width: 768px)`);
    const renderItem = useCallback((item)=>/*#__PURE__*/ _jsxs(_Fragment, {
            children: [
                item,
                item === limit && /*#__PURE__*/ _jsx("span", {
                    className: "ml-3",
                    children: /*#__PURE__*/ _jsx(IconTick, {})
                })
            ]
        })
    , [
        limit
    ]);
    const onItemClick = useCallback((_, newLimit)=>{
        setLimit(newLimit);
        if (onChange) {
            onChange(page, newLimit);
        }
    }, [
        page,
        onChange
    ]);
    const onChangeCallback = useCallback((_, newPage)=>{
        setPage(newPage);
        if (onChange) {
            onChange(newPage, limit);
        }
    }, [
        limit,
        onChange
    ]);
    const { menu , open  } = useMenu({
        id: "pagination-menu",
        list: PAGINATION_LIMITS,
        transformOrigin: {
            vertical: "bottom",
            horizontal: "right"
        },
        renderItem,
        onItemClick
    });
    if (!pages) {
        return null;
    }
    return /*#__PURE__*/ _jsxs(PaginationWrapper, {
        children: [
            pages && pages > 1 && /*#__PURE__*/ _jsx(StyledPagination, {
                shape: "rounded",
                page: page,
                count: pages,
                ...props,
                renderItem: (item)=>/*#__PURE__*/ _jsx(PaginationItem, {
                        components: {
                            previous: IconChevronLeft,
                            next: IconChevronRight
                        },
                        ...item,
                        color: "primary"
                    })
                ,
                onChange: onChangeCallback
            }),
            !isMobile && /*#__PURE__*/ _jsxs(PaginationDropdown, {
                children: [
                    /*#__PURE__*/ _jsx(Typography, {
                        variant: "body1",
                        children: "\u0417\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435:"
                    }),
                    /*#__PURE__*/ _jsxs(PaginationDropdownButton, {
                        type: "button",
                        onClick: open,
                        children: [
                            limit,
                            /*#__PURE__*/ _jsx(PaginationDropdownIcon, {
                                children: /*#__PURE__*/ _jsx(IconChevronDown, {})
                            })
                        ]
                    })
                ]
            }),
            menu
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Pagination))));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5550:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports PaginationWrapper, StyledPagination, PaginationDropdown, PaginationDropdownButton, PaginationDropdownIcon */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var libs_uikit_src_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5728);



const PaginationWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex: 1;
  align-items: center;
  margin: 2.4rem 0;
`;
const StyledPagination = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Pagination)``;
const PaginationDropdown = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  align-items: center;
  margin-left: auto;
`;
const PaginationDropdownButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  margin-left: .8rem;
  background: transparent;
  font-size: ${(0,libs_uikit_src_lib__WEBPACK_IMPORTED_MODULE_2__/* .getCssVar */ .MX)("font", "common")};
  font-weight: ${(0,libs_uikit_src_lib__WEBPACK_IMPORTED_MODULE_2__/* .getCssVar */ .MX)("font", "bold")};
`;
const PaginationDropdownIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().i)`
  display: inline-flex;
  margin-left: .8rem;
`;


/***/ }),

/***/ 1569:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);



const Row = (props)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {
        container: true,
        ...props
    })
;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Row));


/***/ }),

/***/ 361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ safe_view)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/safe-view/shared/ui.ts


const SafeViewWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  margin: 0 1.6rem;
  max-width: 1200px;

  @media screen and (min-width: ${lib/* BREAKPOINTS.md */.j$.md}px) {
    margin: 0 2.4rem;
  }

  @media screen and (min-width: ${lib/* BREAKPOINTS.xl */.j$.xl}px) {
    margin: 0 auto;
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/safe-view/index.tsx



const SafeView = ({ children , className ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(SafeViewWrapper, {
        className: className,
        children: children
    });
};
/* harmony default export */ const safe_view = (/*#__PURE__*/external_react_default().memo(SafeView));


/***/ }),

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ scroll_view)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/scroll-view/shared/ui.ts

const ScrollViewWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/scroll-view/index.tsx



const ScrollView = ({ children , className ,  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ScrollViewWrapper, {
        className: className,
        children: children
    });
};
/* harmony default export */ const scroll_view = (/*#__PURE__*/external_react_default().memo(ScrollView));


/***/ }),

/***/ 5004:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _virtualized_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5154);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_virtualized_list__WEBPACK_IMPORTED_MODULE_2__]);
_virtualized_list__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SectionList = ({ sections , renderItem: _renderItem , renderSectionHeader: _renderSectionHeader , ...props })=>{
    const data1 = useMemo(()=>sections.reduce((res, { title , data  })=>{
            if (title && Array.isArray(data) && data.length) {
                res.push({
                    title,
                    data
                });
                res.push(...data);
            }
            return res;
        }, [])
    , [
        sections
    ]);
    const renderSectionHeader = useCallback(_renderSectionHeader, [
        _renderSectionHeader
    ]);
    const renderItem = useCallback((section, index, data)=>{
        if (section && section.title) {
            return renderSectionHeader(section, index, data);
        }
        return _renderItem(section, index, data);
    }, [
        _renderItem,
        renderSectionHeader
    ]);
    return /*#__PURE__*/ _jsx(VirtualizedList, {
        ...props,
        data: data1,
        renderItem: renderItem
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(SectionList))));


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8198:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: SideNavigationAction, SideNavigationCTA, SideNavigationCTAWrapper, SideNavigationPinButton, SideNavigationWrapper, StyledAction, StyledActionLabel, StyledPinButton, default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/side-navigation/shared/ui.tsx


// @TODO: px -> rem
const ui_SideNavigationWrapper = (external_styled_components_default()).aside`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  margin: 72px 0 82px;
  padding: 32px 0;
  width: 72px;
  background: ${(0,lib/* getCssVar */.MX)("black", 100)};
  transform: ${({ isHovered =false  })=>isHovered ? "translateX(0)" : "translateX(-100%)"
};
  transition: all .27s;
`;
const ui_SideNavigationCTA = (external_styled_components_default()).button`
  width: 5px;
  height: 34px;
  background: ${(0,lib/* getCssVar */.MX)("grey", 900)};
  border: 0 solid transparent;
  border-radius: 100px;
  transform: ${({ isHovered =false  })=>isHovered ? "translateX(-100%)" : "translateX(0)"
};
  opacity: ${({ isHovered =false  })=>isHovered ? 0 : 1
};
  transition: all .27s;

  &:hover {
    background: ${(0,lib/* getCssVar */.MX)("grey", 950)};
    cursor: pointer;
  }
`;
const ui_SideNavigationCTAWrapper = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -38px;
  width: 34px;
  height: 68px;
  transform: translateY(-50%);
  cursor: pointer;
`;
const ui_StyledPinButton = (external_styled_components_default()).button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background: transparent;
`;
const ui_StyledAction = (external_styled_components_default()).button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 14px 0;
  background: transparent;
  border: 2px transparent solid;
  border-left-color: ${({ isActive =false  })=>isActive ? (0,lib/* getCssVar */.MX)("blue", 500) : "transparent"
};
  color: ${({ isActive =false  })=>isActive ? (0,lib/* getCssVar */.MX)("grey", 100) : (0,lib/* getCssVar */.MX)("grey", 500)
};
  transition: all .25s;

  &:hover {
    color: ${(0,lib/* getCssVar */.MX)("grey", 500)};
  }
`;
const ui_StyledActionLabel = (external_styled_components_default()).span`
  margin-top: 4px;
  font-size: 10px;
  color: currentColor;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/side-navigation/shared/Action.tsx



const Action = ({ isActive =false , disabled =false , label , icon , className , onClick ,  })=>{
    return /*#__PURE__*/ _jsxs(StyledAction, {
        disabled: disabled,
        isActive: isActive,
        className: className,
        onClick: onClick,
        children: [
            icon,
            /*#__PURE__*/ _jsx(StyledActionLabel, {
                children: label
            })
        ]
    });
};
/* harmony default export */ const shared_Action = ((/* unused pure expression or super */ null && (Action)));

// EXTERNAL MODULE: ../../libs/uikit/src/shared/ui/icons/index.ts + 41 modules
var icons = __webpack_require__(5650);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/side-navigation/shared/PinButton.tsx





const PinButton = ({ isVisible =false , isPinned =false , onClick: _onClick ,  })=>{
    const { 0: isHovered , 1: setIsHovered  } = useState(false);
    const fill = isHovered ? getCssVar("grey", 100) : getCssVar("grey", 500);
    const Icon = useMemo(()=>{
        if (isPinned) {
            return IconSidebarUnpin;
        }
        return IconSidebarPin;
    }, [
        isHovered,
        isPinned
    ]);
    const onClick = useCallback(()=>{
        if (_onClick) {
            _onClick(isPinned, isVisible);
        }
    }, [
        isPinned,
        isVisible,
        _onClick
    ]);
    return /*#__PURE__*/ _jsx(StyledPinButton, {
        onClick: onClick,
        onMouseOver: ()=>setIsHovered(true)
        ,
        onMouseLeave: ()=>setIsHovered(false)
        ,
        children: /*#__PURE__*/ _jsx(Icon, {
            fill: fill
        })
    });
};
/* harmony default export */ const shared_PinButton = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(PinButton))));

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/side-navigation/shared/index.ts




;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/side-navigation/index.tsx



const SideNavigation = ({ isHovered: _isHovered = false , isHoverDisabled =false , children , className , style , onChange: _onChange ,  })=>{
    const { 0: isHovered1 , 1: setIsHovered  } = useState(_isHovered);
    const timeout = useRef();
    const show = ()=>{
        clearTimeout(timeout.current);
        setIsHovered(true);
    };
    const hide = ()=>{
        timeout.current = setTimeout(()=>{
            setIsHovered(false);
            clearTimeout(timeout.current);
        }, 1000);
    };
    const onChange = useCallback((isHovered)=>{
        if (isHoverDisabled) {
            return;
        }
        if (_onChange) {
            _onChange(isHovered);
        }
    }, [
        isHoverDisabled,
        _onChange
    ]);
    const onMouseOverCTA = useCallback(()=>{
        if (isHoverDisabled) {
            return;
        }
        show();
    }, [
        isHoverDisabled
    ]);
    const onMouseLeave = useCallback(()=>{
        if (isHoverDisabled) {
            return;
        }
        hide();
    }, [
        isHoverDisabled
    ]);
    useEffect(()=>{
        return ()=>{
            clearTimeout(timeout.current);
        };
    }, []);
    // Keep isHovered up to date on prop
    useEffect(()=>{
        if (isHoverDisabled) {
            setIsHovered(true); // Make it visible otherwise
            return;
        }
        setIsHovered(_isHovered);
    }, [
        _isHovered,
        isHoverDisabled
    ]);
    useEffect(()=>{
        onChange(isHovered1);
    }, [
        isHovered1
    ]);
    return /*#__PURE__*/ _jsxs(SideNavigationWrapper, {
        isHovered: isHovered1,
        className: className,
        style: style,
        onMouseLeave: onMouseLeave,
        children: [
            children,
            !isHoverDisabled && /*#__PURE__*/ _jsx(SideNavigationCTAWrapper, {
                onMouseOver: onMouseOverCTA,
                children: /*#__PURE__*/ _jsx(SideNavigationCTA, {
                    isHovered: isHovered1
                })
            })
        ]
    });
};
/* harmony default export */ const side_navigation = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(SideNavigation))));




/***/ }),

/***/ 6988:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5692);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Slider = (props)=>{
    return /*#__PURE__*/ _jsx(MuiSlider, {
        ...props
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Slider))));


/***/ }),

/***/ 5811:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/stack/shared/ui.ts


const ui_StackStyled = external_styled_components_default()(material_.Stack)`
  display: flex;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/stack/index.tsx



const Stack = (props)=>/*#__PURE__*/ _jsx(StackStyled, {
        ...props
    })
;
/* harmony default export */ const stack = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Stack))));


/***/ }),

/***/ 3094:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: StepBullet, StepContainer, StepInlineConnector, StepStuff, StyledStep, StyledStepper, default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ../../libs/uikit/src/shared/ui/icons/index.ts + 41 modules
var icons = __webpack_require__(5650);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/stepper/shared/ui.tsx



const ui_StyledStepper = external_styled_components_default()(material_.Stepper)`
  display: flex;
  flex: 1;
`;
const ui_StyledStep = external_styled_components_default()(material_.Step)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0 .8rem;
  padding: 0;
  color: ${({ isActive =false , isCompleted =false  })=>{
    if (isCompleted) {
        return (0,lib/* getCssVar */.MX)("green", 500);
    }
    if (isActive) {
        return (0,lib/* getCssVar */.MX)("grey", 100);
    }
    return (0,lib/* getCssVar */.MX)("grey", 900);
}};
  cursor: ${({ isActive =false  })=>isActive ? "pointer" : "default"
};

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }
`;
const ui_StepStuff = (external_styled_components_default()).div`
  display: flex;
  align-items: center;
`;
const ui_StepContainer = (external_styled_components_default()).div`
  display: flex;
  margin-top: 1rem;
  font-size: ${(0,lib/* getCssVar */.MX)("font", "large")};
  color: currentColor;
`;
const ui_StepBullet = (external_styled_components_default()).i`
  display: inline-block;
  width: 1.8rem;
  height: 1.8rem;
  border: 0.54rem solid currentColor;
  border-radius: 50%;
`;
const ui_StepInlineConnector = (external_styled_components_default()).div`
  display: flex;
  flex: 1;
  margin: 0 .5rem;
  height: .2rem;
  background: currentColor;
  border: 0 solid transparent;
  border-radius: 1px;
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/stepper/index.tsx




const Stepper = ({ isNonLinear =false , activeStep =-1 , data , skippedSteps , renderStep , ...props })=>{
    const isStepCompleted = useCallback((step)=>{
        if (isNonLinear) {
            return !!skippedSteps && !skippedSteps.has(step) && step < activeStep;
        }
        return step < activeStep && !!activeStep;
    }, [
        isNonLinear,
        activeStep,
        skippedSteps
    ]);
    const renderStepBullet = useCallback((isCompleted)=>{
        if (isCompleted) {
            return /*#__PURE__*/ _jsx(IconCheckRound, {
                fill: "currentColor",
                width: 18,
                height: 18
            });
        }
        return /*#__PURE__*/ _jsx(StepBullet, {});
    }, []);
    const steps = useMemo(()=>{
        if (Array.isArray(data) && data.length > 0) {
            return data.map((stepData, index)=>{
                const isActive = activeStep === index;
                const isCompleted = isStepCompleted(index);
                const stepBullet = renderStepBullet(isCompleted);
                return /*#__PURE__*/ _jsxs(StyledStep, {
                    isActive: isActive,
                    isCompleted: isCompleted,
                    children: [
                        /*#__PURE__*/ _jsxs(StepStuff, {
                            children: [
                                stepBullet,
                                /*#__PURE__*/ _jsx(StepInlineConnector, {})
                            ]
                        }),
                        /*#__PURE__*/ _jsx(StepContainer, {
                            children: renderStep(stepData, index, data)
                        })
                    ]
                });
            });
        }
        return;
    }, [
        activeStep,
        data
    ]);
    return /*#__PURE__*/ _jsx(StyledStepper, {
        ...props,
        nonLinear: isNonLinear,
        connector: null,
        children: steps
    });
};
/* harmony default export */ const stepper = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Stepper))));




/***/ }),

/***/ 483:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/tabs/shared/ui.tsx



const ui_TabsWrapper = (external_styled_components_default()).section``;
const ui_StyledTabs = external_styled_components_default()(material_.Tabs)`
  & > div {
    & > span {
      background: ${({ isMinified =false  })=>isMinified ? (0,lib/* getCssVar */.MX)("blue", 500) : "transparent"
};
    }
  }
`;
const ui_StyledTabItem = external_styled_components_default()(material_.Tab)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${({ isMinified =false  })=>isMinified ? (0,lib/* getSizeUnit */.T2)(24) : 0
};
  padding: 0 .8rem;
  font-size: ${({ isMinified =false  })=>isMinified ? (0,lib/* getCssVar */.MX)("font", "h5") : (0,lib/* getCssVar */.MX)("font", "h6")
};
  font-weight: ${(0,lib/* getCssVar */.MX)("font", "bold")};
  color: ${(0,lib/* getCssVar */.MX)("grey", 500)};

  &:first-child {
    margin-left: 0;
    padding-left: ${({ orientation ="horizontal"  })=>orientation === "horizontal" ? 0 : (0,lib/* getSizeUnit */.T2)(8)
};
  }

  i {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.4rem;
    margin-right: 1.6rem;
  }

  span {
    display: flex;
    align-items: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &[class*=selected] {
    color: ${(0,lib/* getCssVar */.MX)("grey", 100)};
  }
`;
const ui_TabsPanelList = (external_styled_components_default()).div`

`;
const ui_TabPanel = (external_styled_components_default()).div`

`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/tabs/index.tsx



const Tabs = ({ isMinified =false , defaultValue =0 , value: _value , data , orientation , renderTab , onChange: _onChange , ...props })=>{
    const { 0: value1 , 1: setValue  } = useState(defaultValue || _value);
    const items = useMemo(()=>data.map(({ value , icon , label  }, index)=>{
            const itemValue = value || index;
            const specificLabel = isMinified ? label : /*#__PURE__*/ _jsxs(_Fragment, {
                children: [
                    icon && /*#__PURE__*/ _jsx("i", {
                        children: icon
                    }),
                    /*#__PURE__*/ _jsx("span", {
                        children: label
                    })
                ]
            });
            return /*#__PURE__*/ _jsx(StyledTabItem, {
                disableRipple: true,
                isMinified: isMinified,
                orientation: orientation,
                label: specificLabel,
                value: itemValue
            }, `${itemValue}`);
        })
    , [
        isMinified,
        orientation,
        data
    ]);
    const itemsPanel = useMemo(()=>{
        if (!renderTab) {
            return;
        }
        // @TODO: refactor Array<Object> comparison
        return data.map((item, index)=>{
            const { value: foundValue  } = item;
            const itemValue = foundValue || index;
            const isActive = value1 === itemValue;
            return /*#__PURE__*/ _jsx(TabPanel, {
                role: "tabpanel",
                children: renderTab(item, itemValue, isActive)
            }, `${itemValue}`);
        });
    }, [
        value1,
        data
    ]);
    const onChange = useCallback((e, value)=>{
        setValue(value);
        if (_onChange) {
            _onChange(e, value);
        }
    }, [
        _onChange
    ]);
    useEffect(()=>setValue(_value)
    , [
        _value
    ]);
    return /*#__PURE__*/ _jsxs(TabsWrapper, {
        children: [
            /*#__PURE__*/ _jsx(StyledTabs, {
                isMinified: isMinified,
                orientation: orientation,
                value: value1,
                onChange: onChange,
                ...props,
                children: items
            }),
            /*#__PURE__*/ _jsx(TabsPanelList, {
                children: itemsPanel
            })
        ]
    });
};
/* harmony default export */ const tabs = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(Tabs))));



/***/ }),

/***/ 2574:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// UNUSED EXPORTS: StyledTextField, default

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/textfield/shared/ui.tsx



const ui_StyledTextField = external_styled_components_default()(material_.TextField)`
  width: ${({ isFullWidth =false  })=>{
    return isFullWidth ? "100%" : "auto";
}};
  border: 0 solid transparent;
  border-radius: .4rem;
  outline: 0;

  & > div {
    padding: .8rem 1.2rem;
    background: ${(0,lib/* getCssVar */.MX)("grey", 950)};
    font-size: ${(0,lib/* getCssVar */.MX)("font", "large")};
  }

  &.contrast > div, & > div[class*=focused] {
    background: ${(0,lib/* getCssVar */.MX)("grey", 900)};
  }

  input {
    padding: 0;
    font-weight: ${(0,lib/* getCssVar */.MX)("font", "semi-bold")};
  }

  fieldset {
    border: 0 solid transparent !important;
  }

  label {
    position: relative;
    margin-bottom: .8rem;
    font-size: ${(0,lib/* getCssVar */.MX)("font", "common")};
    font-weight: ${(0,lib/* getCssVar */.MX)("font", "semi-bold")};
    color: ${(0,lib/* getCssVar */.MX)("grey", 100)};
    line-height: 1;
    overflow: initial;
    transform: scale(1);
    transition: none;

    &[class*=focused],
    &[class*=error] {
      color: ${(0,lib/* getCssVar */.MX)("grey", 100)};
    }

    & > span {
      display: none;
    }
  }
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/textfield/index.tsx






const TextField = ({ isContrast =false , isDisabled =false , isFullWidth =false , isMultiline =false , isDynamicMultiline =false , className , value: value1 , onChange: _onChange , onKeyDown: _onKeyDown , onKeyUp: _onKeyUp , ...props })=>{
    // @TODO: move dynamic multiline functionality to the hoc
    const ref = useRef(null);
    const rows = getRows(value1, ref.current);
    const onChange = useCallback((e)=>{
        const { value: value2  } = e.target;
        const update = (value)=>{
            if (_onChange) {
                _onChange(value);
                return;
            }
        };
        if (!isDynamicMultiline) {
            update(value2);
            return;
        }
        const lastChar = value2.substr(-1);
        const preLastChar = value2.substr(-2, 1);
        if (lastChar === preLastChar && TRIM_SYMBOLS.includes(preLastChar)) {
            e.preventDefault();
            return;
        }
        update(value2);
    }, [
        isDynamicMultiline,
        _onChange
    ]);
    const onKeyDown = useCallback((e)=>{
        if (!isDynamicMultiline) {
            return;
        }
        if (_onKeyDown) {
            _onKeyDown(e);
            return;
        }
        e.stopPropagation();
    }, [
        isDynamicMultiline,
        ref,
        _onKeyDown
    ]);
    const onKeyUp = useCallback((e)=>{
        if (!isDynamicMultiline) {
            return;
        }
        if (_onKeyUp) {
            _onKeyUp(e);
        }
        e.stopPropagation();
    }, [
        isDynamicMultiline,
        _onKeyUp
    ]);
    return /*#__PURE__*/ _jsx(StyledTextField, {
        inputRef: ref,
        disabled: isDisabled,
        multiline: isMultiline || isDynamicMultiline,
        isFullWidth: isFullWidth,
        className: cn(className, {
            "contrast": isContrast
        }),
        value: value1,
        rows: rows,
        onChange: onChange,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        ...props
    });
};
/* harmony default export */ const textfield = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(TextField))));



/***/ }),

/***/ 9172:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ typography)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "@mui/material"
var material_ = __webpack_require__(5692);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/typography/shared/ui.tsx


const StyledTypography = external_styled_components_default()(material_.Typography)``;

;// CONCATENATED MODULE: ../../libs/uikit/src/shared/ui/typography/index.tsx



const Typography = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(StyledTypography, {
        ...props
    });
};
/* harmony default export */ const typography = (/*#__PURE__*/external_react_default().memo(Typography));



/***/ }),

/***/ 5154:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5611);
/* harmony import */ var _shared_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8358);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([nanoid__WEBPACK_IMPORTED_MODULE_2__]);
nanoid__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const mapKeyValues = (data)=>Array.isArray(data) ? data?.map(()=>nanoid()
    ) : []
;
const VirtualizedList = ({ isReady =false , isRefreshable =false , data: _data = [] , emptyContent , style , className , listClassName , itemClassName , keyExtractor , renderItem , onRefresh , onError ,  })=>{
    const { 0: data1 , 1: setData  } = useState(_data);
    const { 0: keys , 1: setKeys  } = useState(mapKeyValues(_data));
    const isSizeChanged = useCallback(()=>{
        const isArrayDataValid = Array.isArray(data1);
        const isArrayKeysValid = Array.isArray(keys);
        return isArrayDataValid && isArrayKeysValid && data1.length !== keys.length;
    }, [
        data1,
        keys
    ]);
    const list = useMemo(()=>{
        if (isSizeChanged() || !(Array.isArray(data1) && Array.isArray(keys))) {
            return;
        }
        return data1?.map((item, index)=>{
            const key = keyExtractor ? keyExtractor(item, index) : keys[index];
            return /*#__PURE__*/ _jsx(VirtualizedItemWrapper, {
                className: itemClassName,
                children: renderItem(item, index, data1)
            }, key);
        });
    }, [
        data1,
        keys,
        itemClassName
    ]);
    const content = useMemo(()=>{
        if (!isReady) {
            return;
        }
        if (Array.isArray(list) && list.length > 0) {
            return /*#__PURE__*/ _jsx(StyledVirtualizedList, {
                className: listClassName,
                style: style,
                children: list
            });
        }
        return emptyContent;
    }, [
        isReady,
        list,
        emptyContent,
        listClassName,
        style
    ]);
    useEffect(()=>{
        if (!isRefreshable) {
            return;
        }
        if (onRefresh) {
            onRefresh().then((data)=>!!data && setData(data)
            ).catch((err)=>{
                if (onError) {
                    onError(err);
                }
            });
        }
    }, [
        isRefreshable
    ]);
    useEffect(()=>{
        // Update keys once size of data has changed
        if (isSizeChanged() && Array.isArray(data1) && Array.isArray(keys)) {
            setKeys(mapKeyValues(data1));
        }
    }, [
        data1,
        keys
    ]);
    // Update if prop "data" changes
    useEffect(()=>{
        setData(_data);
    }, [
        _data
    ]);
    return /*#__PURE__*/ _jsx(VirtualizedListWrapper, {
        className: className,
        children: content
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/(/* unused pure expression or super */ null && (React.memo(VirtualizedList))));



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony exports VirtualizedListWrapper, StyledVirtualizedList, VirtualizedItemWrapper */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7518);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const VirtualizedListWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex: 1;
`;
const StyledVirtualizedList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;
const VirtualizedItemWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  /* background: gray; */
`;


/***/ }),

/***/ 5544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* reexport */ screen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ../../libs/uikit/src/lib/index.ts + 23 modules
var lib = __webpack_require__(5728);
;// CONCATENATED MODULE: ../../libs/uikit/src/widgets/layout/shared/ui.ts


const LayoutWrapper = (external_styled_components_default()).div`
  display: flex;
  padding: 1.6rem;
  overflow: hidden;

  @media screen and (min-width: ${lib/* BREAKPOINTS.md */.j$.md}px) {
    margin: 0;
    height: calc(100vh - 7.2rem);
  }

  @media screen and (max-width: ${lib/* BREAKPOINTS.desktop */.j$.desktop}px) and (orientation: landscape) {
    margin: 7.2rem 0 0;
    height: auto;
  }
`;
const ScreenLayoutWrapper = (external_styled_components_default()).div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 7.4rem 0 0;
  padding: .8rem 2.4rem;

  @media screen and (min-width: ${lib/* BREAKPOINTS.desktop */.j$.desktop}px) {
    margin: 7.4rem 0 0;
    padding: 0 3.6rem;
  }
`;
const ScreenLayoutContent = (external_styled_components_default()).div`
  /* max-width: ${lib/* BREAKPOINTS.desktop */.j$.desktop}px; */
`;

;// CONCATENATED MODULE: ../../libs/uikit/src/widgets/layout/screen/index.tsx



const ScreenLayout = ({ children , style  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(ScreenLayoutWrapper, {
        style: style,
        children: /*#__PURE__*/ jsx_runtime_.jsx(ScreenLayoutContent, {
            children: children
        })
    });
};
/* harmony default export */ const screen = (/*#__PURE__*/external_react_default().memo(ScreenLayout));

;// CONCATENATED MODULE: ../../libs/uikit/src/widgets/layout/index.ts


;// CONCATENATED MODULE: ../../libs/uikit/src/widgets/index.ts



/***/ })

};
;