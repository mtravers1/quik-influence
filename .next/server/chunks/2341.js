"use strict";
exports.id = 2341;
exports.ids = [2341];
exports.modules = {

/***/ 2341:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Button)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
;// CONCATENATED MODULE: ./src/components/Button/CustomButton.tsx




const BaseButton = ({ children , ...props })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
        width: "full",
        padding: "2rem",
        borderRadius: 10,
        fontSize: "2xl",
        transition: "all 0.4s cubic-bezier(.08,.52,.52,1)",
        ...props,
        children: children
    })
;
const CustomButton = ({ variant ='default' , children , ...props })=>{
    switch(variant){
        case 'outline':
            return(/*#__PURE__*/ jsx_runtime_.jsx(BaseButton, {
                border: "1px solid #FF0000",
                color: colorConstants/* default.influenceRed */.ZP.influenceRed,
                bgColor: colorConstants/* default.white */.ZP.white,
                _hover: {
                    color: colorConstants/* default.white */.ZP.white,
                    bgColor: colorConstants/* default.influenceRed */.ZP.influenceRed
                },
                _active: {
                    bgColor: colorConstants/* default.influenceRedWithOpacity */.ZP.influenceRedWithOpacity
                },
                ...props,
                children: children
            }));
        case 'gray':
            return(/*#__PURE__*/ jsx_runtime_.jsx(BaseButton, {
                color: colorConstants/* default.white */.ZP.white,
                bgColor: colorConstants/* default.greyDarker */.ZP.greyDarker,
                _hover: {
                    color: colorConstants/* default.greyDarker */.ZP.greyDarker,
                    bgColor: colorConstants/* default.white */.ZP.white,
                    border: '1px solid #696974'
                },
                ...props,
                children: children
            }));
        default:
            return(/*#__PURE__*/ jsx_runtime_.jsx(BaseButton, {
                color: colorConstants/* default.white */.ZP.white,
                bgColor: colorConstants/* default.influenceRed */.ZP.influenceRed,
                _hover: {
                    opacity: 0.8
                },
                _active: {
                    bgColor: colorConstants/* default.influenceRedWithOpacity */.ZP.influenceRedWithOpacity
                },
                ...props,
                children: children
            }));
    }
};
/* harmony default export */ const Button_CustomButton = (CustomButton);

;// CONCATENATED MODULE: ./src/components/Button/index.ts

/* harmony default export */ const Button = (Button_CustomButton);


/***/ })

};
;