"use strict";
exports.id = 2245;
exports.ids = [2245];
exports.modules = {

/***/ 2245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3814);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8635);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var modules_Campaigns_CreateCampaign_UploadImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5566);








const UserImage = ({ name , handleChange , label , avatar  })=>{
    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorMode)();
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const { admin  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(redux_selectors__WEBPACK_IMPORTED_MODULE_6__/* .getUser */ .P);
    const { pathname  } = route || {
        pathname: '/'
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        d: "flex",
        bgColor: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .cardThemeColor */ .fP[colorMode],
        borderTopStartRadius: "3xl",
        flexDirection: "column",
        alignItems: "center",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                w: "100%",
                h: 250,
                p: "12",
                bg: utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .sidebarBg.dark */ .jN.dark,
                borderTopStartRadius: "3xl",
                overflow: "hidden",
                bgGradient: `linear(to-r, black,${colorMode !== 'dark' ? 'red' : utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .cardThemeColor */ .fP[colorMode]})`
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                borderWidth: "4px",
                bg: "white",
                mt: "-100px",
                borderRadius: "full",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                    borderRadius: "full",
                    fontSize: "7rem",
                    bg: `${utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_2__/* .cardThemeColor */ .fP[colorMode]}`,
                    name: admin?.firstName + ' ' + admin?.lastName,
                    boxSize: {
                        base: '100',
                        md: '150px',
                        lg: '200px'
                    },
                    src: avatar
                })
            }),
            pathname === '/profile/edit' && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mt: "5",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(modules_Campaigns_CreateCampaign_UploadImage__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                    name: name,
                    previewImage: false,
                    handleChange: handleChange,
                    label: label
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                size: "lg",
                my: "10",
                children: admin?.firstName + ' ' + admin?.lastName
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserImage);


/***/ })

};
;