"use strict";
exports.id = 1704;
exports.ids = [1704];
exports.modules = {

/***/ 1704:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_EditableWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2992);
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6830);




const Categories = ({ info  })=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Section__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        background: "#fff",
        h: "unset",
        padding: {
            base: '50px 15px',
            lg: '70px 15px',
            xl: '100px 15px'
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            justifyContent: "center",
            alignItems: "center",
            maxW: "1440px",
            margin: "auto",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                marginBottom: "32px",
                direction: "column",
                flexWrap: "wrap",
                maxH: {
                    base: '100%',
                    sm: '1800px',
                    md: '1500px',
                    xl: '1000px',
                    '2xl': '1150px'
                },
                w: "100%",
                children: info.content.cards.map((card, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        direction: "column",
                        p: "30px 15px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_EditableWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                sectionId: `cards__${i}__title`,
                                data: info,
                                sectionName: "info",
                                as: "h3",
                                fontWeight: "600",
                                color: "red",
                                fontSize: {
                                    base: '20px',
                                    '2xl': '25px'
                                },
                                children: card.title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                as: "ul",
                                children: card.values.map((value, j)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_EditableWrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        sectionId: `cards__${i}__values__${j}`,
                                        data: info,
                                        sectionName: "info",
                                        as: "li",
                                        color: "#000",
                                        listStyleType: "none",
                                        fontWeight: "600",
                                        fontSize: {
                                            base: '16px',
                                            '2xl': '20px'
                                        },
                                        children: value
                                    })
                                )
                            })
                        ]
                    }, `info_box_${i}`)
                )
            })
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Categories);


/***/ })

};
;