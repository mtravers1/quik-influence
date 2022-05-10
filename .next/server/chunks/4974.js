"use strict";
exports.id = 4974;
exports.ids = [4974];
exports.modules = {

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/loader.f36d3387.gif","height":200,"width":200});

/***/ }),

/***/ 2666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "o": () => (/* reexport */ Input_TextInput)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
;// CONCATENATED MODULE: ./src/components/Input/TextInput.tsx




const TextInput = ({ name , type , labelProps , TextInputProps , placeholder ='' , value: value1 , handleChange , label , inputId ='' , error , formControlProps , extraLabel ,  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const format = (val)=>`$` + val
    ;
    const parse = (val)=>val.replace(/^\$/, '')
    ;
    const setValue = (value)=>{
        const event = {
            target: {
                name,
                value: value,
                type: 'number',
                checked: false
            }
        };
        handleChange(event);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
        isInvalid: !!error,
        ...formControlProps,
        children: [
            !!label && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormLabel, {
                fontSize: "1.6rem",
                color: colorMode === 'light' ? colorConstants/* default.black */.ZP.black : '#FFFFFF',
                htmlFor: inputId,
                "data-testid": "textInput-label",
                ...labelProps,
                children: [
                    label,
                    extraLabel && /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        as: "span",
                        fontSize: "md",
                        mx: "4",
                        children: extraLabel
                    })
                ]
            }),
            type === 'amount' ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.NumberInput, {
                onChange: (valueString)=>setValue(parse(valueString))
                ,
                value: format(value1.toString()),
                precision: 2,
                step: 0.2,
                size: "xl",
                placeholder: placeholder,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.NumberInputField, {
                        border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                        p: "1rem",
                        borderRadius: "xl"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.NumberInputStepper, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.NumberIncrementStepper, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.NumberDecrementStepper, {})
                        ]
                    })
                ]
            }) : type === 'textarea' ? /*#__PURE__*/ jsx_runtime_.jsx(react_.Textarea, {
                name: name,
                size: "sm",
                value: value1,
                border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                placeholder: placeholder,
                // @ts-ignore
                onChange: handleChange,
                resize: "none",
                borderRadius: 6,
                ...TextInputProps
            }) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Input, {
                name: name,
                type: type,
                value: value1 && type === 'date' ? new Date(value1).toISOString().substring(0, 10) : value1,
                onChange: handleChange,
                border: `1px solid ${colorConstants/* borderThemeColor */.uH[colorMode]}`,
                size: "xl",
                p: "1rem",
                borderRadius: "xl",
                placeholder: placeholder,
                ...TextInputProps
            }),
            error && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                "data-testid": "textInput-error",
                fontSize: "xl",
                children: error
            })
        ]
    }));
};
/* harmony default export */ const Input_TextInput = (TextInput);

;// CONCATENATED MODULE: ./src/components/Input/index.ts




/***/ }),

/***/ 662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Gf": () => (/* binding */ fetchPostJSON),
/* harmony export */   "LT": () => (/* binding */ errorParser)
/* harmony export */ });
/* unused harmony export fetchGetJSON */
async function fetchGetJSON(url) {
    try {
        const data = await fetch(url).then((res)=>res.json()
        );
        return data;
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw err;
    }
}
async function fetchPostJSON(url, data) {
    try {
        // Default options are marked with *
        const response = await fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrerPolicy: "no-referrer",
            body: JSON.stringify(data || {}) // body data type must match "Content-Type" header
        });
        return await response.json(); // parses JSON response into native JavaScript objects
    } catch (err) {
        if (err instanceof Error) {
            throw new Error(err.message);
        }
        throw err;
    }
}
const errorParser = (error)=>error?.response?.data.message || error.message
;


/***/ })

};
;