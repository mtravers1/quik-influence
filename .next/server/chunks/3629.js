"use strict";
exports.id = 3629;
exports.ids = [3629];
exports.modules = {

/***/ 3629:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1271);
/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const NextLink = ({ href , isInternal =true , onClick =()=>{} , as , children , hardRefresh =false , ...rest })=>{
    const hoverStyle = {
        color: "red.500"
    };
    if (isInternal) {
        return hardRefresh ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Link, {
            href: href,
            onClick: onClick,
            _hover: hoverStyle,
            ...rest,
            children: children
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
            href: href,
            as: as,
            passHref: true,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Link, {
                onClick: onClick,
                _hover: hoverStyle,
                ...rest,
                children: children
            })
        });
    }
    let finalHref;
    const pathToUrl = as ?? href;
    if (/^(https|http|mailto)/.test(pathToUrl)) {
        finalHref = pathToUrl;
    } else {
        finalHref = `/${pathToUrl}`;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_1__.Link, {
        href: finalHref,
        _hover: hoverStyle,
        onClick: onClick,
        ...rest,
        children: children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NextLink);


/***/ })

};
;