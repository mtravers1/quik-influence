"use strict";
exports.id = 5566;
exports.ids = [5566];
exports.modules = {

/***/ 5566:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1135);
/* harmony import */ var _alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3814);





const UploadImage = ({ handleChange , name , label , labelProps , error , initialImage , previewImage =true ,  })=>{
    const [image, setImage] = react__WEBPACK_IMPORTED_MODULE_3___default().useState('');
    const asdMediaRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef();
    const { colorMode  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useColorMode)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!initialImage) return;
        setImage(initialImage);
        const event = {};
        event.target = {
            name: name,
            value: initialImage,
            type: 'image-upload',
            checked: undefined
        };
    }, [
        initialImage
    ]);
    const handleFileDone = (fileInfo)=>{
        fileInfo['smartURL'] = `${fileInfo.cdnUrl}-/preview/-/quality/smart/`;
        setImage(fileInfo.smartURL);
        const event = {};
        event.target = {
            name: name,
            value: fileInfo.cdnUrl,
            type: 'image-upload',
            checked: undefined
        };
        handleChange(event);
    };
    const translation = {
        buttons: {
            choose: {
                images: {
                    one: ` <div className="image">${initialImage ? 'Edit Image' : 'Upload Image'}</div>`
                }
            }
        }
    };
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
            isInvalid: !!error,
            children: [
                previewImage && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        ' ',
                        !!label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormLabel, {
                            fontSize: "1.6rem",
                            color: colorMode === 'light' ? utils_constants_colorConstants__WEBPACK_IMPORTED_MODULE_4__/* ["default"].black */ .ZP.black : '#FFFFFF',
                            htmlFor: "multiRangeSelector",
                            "data-testid": "textInput-label",
                            ...labelProps,
                            children: label
                        }),
                        image && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                            maxW: 150,
                            pb: 10,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {
                                src: image,
                                alt: "image to upload"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_1__.ASDMedia, {
                    // @ts-ignore
                    ref: asdMediaRef,
                    publicKey: "6a12dbb10199ec6bfeb3",
                    onChange: ()=>{},
                    localeTranslations: translation,
                    imagesOnly: true,
                    previewStep: true,
                    onFileSelect: (file)=>{
                        if (!file) {
                            console.log('File removed from widget');
                            return;
                        }
                        file.done((fileInfo)=>handleFileDone(fileInfo)
                        );
                    },
                    clearable: true
                }),
                error && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormErrorMessage, {
                    "data-testid": "textInput-error",
                    fontSize: "xl",
                    children: error
                })
            ]
        })
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadImage);


/***/ })

};
;