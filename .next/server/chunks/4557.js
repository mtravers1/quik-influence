exports.id = 4557;
exports.ids = [4557];
exports.modules = {

/***/ 1250:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__EtNt2",
	"section": "Home_section__Ffc8d",
	"sectionFilter": "Home_sectionFilter__xym9t",
	"footer": "Home_footer__7dKhS",
	"title": "Home_title__FX7xZ",
	"description": "Home_description__Qwq1f",
	"code": "Home_code__aGV0U",
	"grid": "Home_grid__c_g6N",
	"card": "Home_card__7oz7W",
	"logo": "Home_logo__80mSr"
};


/***/ }),

/***/ 2379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/loader.f36d3387.gif","height":200,"width":200});

/***/ }),

/***/ 2992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1135);
/* harmony import */ var _alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7197);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_loader_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2379);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8081);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_10__);











const styles = _emotion_react__WEBPACK_IMPORTED_MODULE_7__.css`
  & {
    position: absolute;
    right: 0;
    align-items: center;
  }
`;
const filterProps = (props)=>{
    const { children , sectionId , data , sectionName , isImage , as , ...rest } = props;
    return rest;
};
const EditableWrapper = (props)=>{
    const { children , sectionId , data , sectionName , isImage =false , setData ,  } = props;
    const { user  } = (0,react_redux__WEBPACK_IMPORTED_MODULE_10__.useSelector)((state)=>state.auth
    );
    const parent = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
    const { 0: editing , 1: setEditing  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        edit: false,
        close: false
    });
    const { 0: loading1 , 1: setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const startEditing = ()=>{
        setEditing({
            edit: true,
            close: true
        });
    };
    const finishEditing = async (imgurl)=>{
        showLoader(true);
        // edit API call
        const element = document.querySelector(`#${sectionName}_${sectionId}`);
        let mutatedData = {
            ...data
        };
        let object = mutatedData;
        const stack = `content__${sectionId}`.split('__') || [];
        while(stack.length > 1){
            object = object[stack.shift() || 0];
        }
        const lastObj = stack.shift();
        if (object[lastObj || 0] === element?.textContent && !isImage) {
            showLoader(false);
            return;
        }
        object[lastObj || 0] = isImage ? imgurl : element?.textContent;
        if (!object[lastObj || 0]) {
            return;
        }
        try {
            await utils_helpers__WEBPACK_IMPORTED_MODULE_9__/* .axiosInstance.patch */ .be.patch(`/content/${data.id}`, {
                content: {
                    ...data.content
                }
            });
            if (isImage) {
                showLoader(false);
                window.location.reload();
            }
        } catch (err) {
            console.log(err);
        }
        showLoader(false);
    };
    const showLoader = (loading)=>{
        if (loading) {
            setEditing({
                edit: true,
                close: false
            });
            setLoading(true);
        } else {
            setEditing({
                edit: false,
                close: false
            });
            setLoading(false);
        }
    };
    const onBlur = (e)=>{
        const leavingParent = !parent?.current?.contains(e.relatedTarget);
        if (leavingParent) {
            finishEditing();
        }
    };
    if (!user.admin) return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "relative",
        ...filterProps(props),
        children: children
    }));
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        position: "relative",
        ...filterProps(props),
        className: "asd-media-wrapper__editable_wrapper",
        onBlur: onBlur,
        tabIndex: -1,
        ref: parent,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    css: styles,
                    transition: "0.3s ease",
                    opacity: editing.edit ? '1' : '0',
                    top: editing.edit ? '-30px' : '0',
                    background: "white",
                    mixBlendMode: "difference",
                    padding: "5px",
                    backdropFilter: "blur(2px)",
                    zIndex: 10,
                    children: [
                        editing.close && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__.FontAwesomeIcon, {
                            style: {
                                marginRight: '10px',
                                width: '20px',
                                fontWeight: 300
                            },
                            color: "#000",
                            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__.faCheck,
                            onClick: finishEditing
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/close.png",
                            alt: "Close",
                            style: {
                                width: '10px',
                                height: '10px'
                            }
                        }),
                        loading1 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_8__["default"], {
                            src: assets_loader_gif__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,
                            alt: "loader",
                            width: 30,
                            height: 30
                        })
                    ]
                }),
                isImage ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ImageSection, {
                    sectionId: sectionId,
                    sectionName: sectionName,
                    children: children,
                    showLoader: showLoader,
                    finishEditing: finishEditing
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    as: props.as,
                    // ...children.props,
                    id: `${sectionName}_${sectionId}`,
                    contentEditable: editing.edit,
                    onClick: startEditing,
                    suppressContentEditableWarning: true,
                    children: children
                })
            ]
        })
    }));
};
const ImageSection = ({ sectionName , sectionId , children , showLoader , finishEditing ,  })=>{
    const asdMediaRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const translation = {
        buttons: {
            choose: {
                images: {
                    one: ''
                }
            }
        }
    };
    const handleFileSelect = (file)=>{
        showLoader(true);
    };
    const handleClick = ()=>{
        asdMediaRef.current?.openDialog();
    };
    const handleChange = (e)=>{
        finishEditing(e.cdnUrl);
    };
    const handleDialogClose = ()=>{
        showLoader(false);
    };
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                // ...children.props,
                id: `${sectionName}_${sectionId}`,
                tabIndex: -1,
                onClick: handleClick,
                cursor: "pointer",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_alliance_software_development_asd_media_react__WEBPACK_IMPORTED_MODULE_3__.ASDMedia, {
                // @ts-ignore
                ref: asdMediaRef,
                publicKey: "6a12dbb10199ec6bfeb3",
                onChange: handleChange,
                onDialogClose: handleDialogClose,
                localeTranslations: translation,
                imagesOnly: true,
                previewStep: true,
                onFileSelect: handleFileSelect,
                clearable: true
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EditableWrapper);


/***/ }),

/***/ 1301:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HomePage_Banner)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/EditableWrapper/index.tsx
var EditableWrapper = __webpack_require__(2992);
// EXTERNAL MODULE: ./src/components/HomePage/Section/index.tsx
var Section = __webpack_require__(6830);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/hooks/useForm.ts
var useForm = __webpack_require__(8091);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: ./src/utils/constants/regexConstants.ts
var regexConstants = __webpack_require__(5851);
;// CONCATENATED MODULE: ./src/utils/constants/formData/contactus.ts


/* harmony default export */ const contactus = ([
    {
        name: 'name',
        label: 'Your Name',
        icon: free_solid_svg_icons_.faUser,
        errorMessage: 'Enter your full name',
        required: true,
        pattern: regexConstants/* FULL_NAME_REGEX */._t
    },
    {
        name: 'phone',
        label: 'Phone Number',
        icon: free_solid_svg_icons_.faPhone,
        required: true,
        errorMessage: 'Enter your phone number',
        pattern: regexConstants/* PHONE_NUMBER_REGEX */.d0
    },
    {
        name: 'email',
        label: 'Your Email Address',
        icon: free_solid_svg_icons_.faMailBulk,
        errorMessage: 'Enter your address',
        required: true,
        pattern: regexConstants/* EMAIL_REFEX */.Vm
    }, 
]);

// EXTERNAL MODULE: ./src/components/CustomInput/index.tsx
var CustomInput = __webpack_require__(1767);
;// CONCATENATED MODULE: ./src/components/HomePage/Banner/ContactForm/index.tsx








const ContactForm = ()=>{
    const { handleChange , inputTypes , handleSubmit , errors  } = (0,useForm/* default */.Z)({
        inputs: contactus,
        cb: async (inputs)=>{
        // do what you will with inputs
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        display: "flex",
        width: "full",
        as: "form",
        flexWrap: {
            base: 'wrap',
            lg: 'unset'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                flexGrow: 1,
                justifyContent: "space-between",
                flexWrap: {
                    base: 'wrap',
                    lg: 'unset'
                },
                children: contactus.map((data, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        width: {
                            base: '100%',
                            lg: '32%'
                        },
                        maxW: {
                            base: '100%',
                            md: '300px',
                            lg: 'unset'
                        },
                        isInvalid: errors[data.name],
                        isRequired: data.required,
                        marginBottom: {
                            base: '10px',
                            lg: 'unset'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                position: 'relative',
                                children: [
                                    ' ',
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        name: data.name,
                                        placeholder: data.label,
                                        onChange: handleChange,
                                        value: inputTypes[data.name],
                                        "datatest-id": `test-${data.name}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        style: {
                                            width: '10px',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '30px',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1
                                        },
                                        icon: data.icon,
                                        color: "red"
                                    })
                                ]
                            }),
                            errors[data.name] && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                                paddingLeft: 50,
                                fontSize: 12,
                                children: data.errorMessage
                            })
                        ]
                    }, `contact_form_${i}`)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                borderRadius: 40,
                maxWidth: 320,
                fontSize: 14,
                padding: "25px 10px",
                marginLeft: {
                    base: 'unset',
                    lg: '50px'
                },
                onClick: handleSubmit,
                children: "CONTACT US"
            })
        ]
    }));
};
/* harmony default export */ const Banner_ContactForm = (ContactForm);

// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./src/components/HomePage/Banner/index.tsx






const Banner = ({ banner , height , minHeight  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        background: `linear-gradient(to right, #000 50%, transparent), right / cover no-repeat url("/homepage.jpg")`,
        padding: {
            base: '200px 15px 50px',
            lg: '173px 15px 0'
        },
        minHeight: minHeight || '1000px',
        h: {
            base: 'unset',
            lg: height || '75vh'
        },
        zIndex: 1,
        paddingBottom: minHeight ? {
            base: '70px',
            sm: '200px'
        } : null,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                w: "100%",
                h: "100%",
                backdropFilter: "blur(20px)",
                position: "absolute",
                inset: "0",
                zIndex: "-1"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                maxW: "1440px",
                margin: "auto",
                alignItems: "center",
                justifyContent: "center",
                direction: "column",
                h: "100%",
                position: "relative",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: {
                            lg: '90px',
                            base: '40px'
                        },
                        direction: {
                            base: 'column',
                            lg: 'row'
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                width: {
                                    base: '100%',
                                    lg: '55%'
                                },
                                marginBottom: {
                                    lg: 0,
                                    base: '40px'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                        sectionId: "sub_header",
                                        data: banner,
                                        sectionName: "banner",
                                        as: "h3",
                                        color: "white",
                                        padding: "10px 20px",
                                        bg: "#FF0000",
                                        width: "fit-content",
                                        fontWeight: "bold",
                                        marginBottom: "24px",
                                        textTransform: "uppercase",
                                        children: banner.content.sub_header
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                        sectionId: "header",
                                        data: banner,
                                        sectionName: "banner",
                                        as: "h1",
                                        color: "white",
                                        fontSize: {
                                            base: '30px',
                                            lg: '50px',
                                            xl: '76px'
                                        },
                                        marginBottom: "15px",
                                        fontWeight: "500",
                                        children: banner.content.header
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                        sectionId: "header",
                                        data: banner,
                                        sectionName: "banner",
                                        as: "h3",
                                        color: "red",
                                        fontSize: {
                                            base: '20px',
                                            lg: '25px',
                                            xl: '32px'
                                        },
                                        marginBottom: "20px",
                                        fontWeight: "500",
                                        children: banner.content.second_header
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                        sectionId: "header_desc",
                                        data: banner,
                                        sectionName: "banner",
                                        fontFamily: [
                                            'Roboto',
                                            'sans-serif'
                                        ],
                                        as: "p",
                                        color: "#D9D9D9",
                                        fontSize: {
                                            base: '15px',
                                            lg: '16px',
                                            xl: '18px'
                                        },
                                        textAlign: {
                                            base: 'justify',
                                            sm: 'left'
                                        },
                                        whiteSpace: {
                                            base: 'pre-line',
                                            md: 'unset'
                                        },
                                        css: external_emotion_react_.css`
                & {
                  hyphens: auto;
                }
              `,
                                        children: banner.content.header_desc
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                width: {
                                    base: '100%',
                                    sm: '80%',
                                    lg: '38%'
                                },
                                height: "fit-content",
                                position: "relative",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                        sectionId: "image_url",
                                        data: banner,
                                        sectionName: "banner",
                                        border: "4px solid red",
                                        isImage: true,
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                            src: banner.content.image_url,
                                            alt: "Homepage",
                                            w: "100%",
                                            h: "100%",
                                            objectFit: "cover"
                                        })
                                    }),
                                    banner.content.image_url_2 && /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                        sectionId: "image_url_2",
                                        data: banner,
                                        border: "4px solid red",
                                        sectionName: "banner",
                                        isImage: true,
                                        position: "absolute",
                                        top: "58%",
                                        left: {
                                            base: '3%',
                                            sm: '10%',
                                            xl: '5%',
                                            '2xl': '10%'
                                        },
                                        w: "100%",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                            src: banner.content.image_url_2,
                                            alt: "Homepage",
                                            w: "100%",
                                            h: "100%",
                                            objectFit: "cover"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    !banner.content.disable_footer && (!banner.content.second_desc ? /*#__PURE__*/ jsx_runtime_.jsx(Banner_ContactForm, {}) : /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        marginTop: {
                            base: '70px',
                            sm: '50px',
                            md: '100px',
                            xl: '80px'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                            sectionId: "header_desc",
                            data: banner,
                            sectionName: "banner",
                            w: {
                                base: '100%',
                                '2xl': '1600px'
                            },
                            as: "h1",
                            color: "white",
                            fontWeight: "600",
                            textShadow: "0px 3px 30px #000000B4",
                            fontSize: {
                                base: '35px',
                                sm: '50px',
                                md: '70px',
                                lg: '80px',
                                xl: '90px',
                                '2xl': '100px'
                            },
                            whiteSpace: "pre-line",
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            transform: {
                                base: 'translateY(80%)',
                                sm: 'translateY(50%)',
                                lg: 'translateY(20%)'
                            },
                            children: banner.content.second_desc
                        })
                    }))
                ]
            })
        ]
    }));
};
/* harmony default export */ const HomePage_Banner = (Banner);


/***/ }),

/***/ 4608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ HomePage_Footer)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/EditableWrapper/index.tsx
var EditableWrapper = __webpack_require__(2992);
// EXTERNAL MODULE: ./src/components/HomePage/Section/index.tsx
var Section = __webpack_require__(6830);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/hooks/useForm.ts
var useForm = __webpack_require__(8091);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: ./src/utils/constants/regexConstants.ts
var regexConstants = __webpack_require__(5851);
;// CONCATENATED MODULE: ./src/utils/constants/formData/meetTeam.ts


/* harmony default export */ const meetTeam = ([
    {
        name: 'phone',
        label: 'Phone Number',
        icon: free_solid_svg_icons_.faPhone,
        required: true,
        errorMessage: 'Enter your phone number',
        pattern: regexConstants/* PHONE_NUMBER_REGEX */.d0
    },
    {
        name: 'isInfluencer',
        label: 'Are You an Influencer',
        icon: free_solid_svg_icons_.faPhone,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'name',
        label: 'Your Name',
        icon: free_solid_svg_icons_.faUser,
        errorMessage: 'Enter your full name',
        required: true,
        pattern: regexConstants/* FULL_NAME_REGEX */._t
    },
    {
        name: 'company',
        label: 'Company Name',
        icon: free_solid_svg_icons_.faUser,
        errorMessage: 'Enter your company name',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'email',
        label: 'Your Email Address',
        icon: free_solid_svg_icons_.faMailBulk,
        errorMessage: 'Enter your address',
        required: true,
        pattern: regexConstants/* EMAIL_REFEX */.Vm
    },
    {
        name: 'industry',
        label: 'Industry',
        icon: free_solid_svg_icons_.faMailBulk,
        errorMessage: 'Enter your industry',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

// EXTERNAL MODULE: ./src/components/CustomInput/index.tsx
var CustomInput = __webpack_require__(1767);
;// CONCATENATED MODULE: ./src/components/HomePage/Footer/MeetupForm/index.tsx








const MeetupForm = ()=>{
    const { handleChange , inputTypes , handleSubmit , errors  } = (0,useForm/* default */.Z)({
        inputs: meetTeam,
        cb: async (inputs)=>{
        // do what you will with inputs
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        display: "flex",
        as: "form",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                flexWrap: "wrap",
                marginBottom: 30,
                justifyContent: "space-between",
                children: meetTeam.map((data, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        width: {
                            base: '100%',
                            md: '48%'
                        },
                        isInvalid: errors[data.name],
                        isRequired: data.required,
                        margin: "3px 0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                position: 'relative',
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(CustomInput/* default */.Z, {
                                        name: data.name,
                                        placeholder: data.label,
                                        paddingLeft: 50,
                                        onChange: handleChange,
                                        value: inputTypes[data.name],
                                        "datatest-id": `test-${data.name}`
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                                        style: {
                                            width: '10px',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '30px',
                                            transform: 'translateY(-50%)',
                                            zIndex: 1
                                        },
                                        icon: data.icon,
                                        color: "red"
                                    })
                                ]
                            }),
                            errors[data.name] && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                                paddingLeft: 50,
                                fontSize: 12,
                                children: data.errorMessage
                            })
                        ]
                    }, `contact_form_${i}`)
                )
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Button/* default */.Z, {
                borderRadius: 40,
                maxWidth: 320,
                fontSize: 14,
                paddingTop: 23,
                paddingBottom: 23,
                onClick: handleSubmit,
                children: "CONTACT US"
            })
        ]
    }));
};
/* harmony default export */ const Footer_MeetupForm = (MeetupForm);

// EXTERNAL MODULE: ./src/components/NextLink.tsx
var NextLink = __webpack_require__(3629);
;// CONCATENATED MODULE: ./src/components/HomePage/Footer/index.tsx






const Footer = ({ footer  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Section/* default */.Z, {
        background: "#282828",
        h: {
            base: '100%',
            lg: '500px'
        },
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                maxW: "1440px",
                margin: "auto",
                alignItems: "center",
                justifyContent: "center",
                h: "100%",
                padding: {
                    base: '50px 15px',
                    lg: '70px 15px',
                    xl: '0 15px'
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    justifyContent: "space-between",
                    direction: {
                        base: 'column',
                        lg: 'row'
                    },
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            width: {
                                base: '100%',
                                lg: '55%'
                            },
                            marginBottom: {
                                lg: 0,
                                base: '30px'
                            },
                            marginRight: 20,
                            flexShrink: 0,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                    sectionId: "sub_header",
                                    data: footer,
                                    sectionName: "footer",
                                    as: "h3",
                                    padding: "10px 0",
                                    color: "#FF0000",
                                    width: "fit-content",
                                    fontWeight: "400",
                                    fontSize: "20px",
                                    children: footer.content.sub_header
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                    sectionId: "header",
                                    data: footer,
                                    sectionName: "footer",
                                    as: "h1",
                                    color: "white",
                                    fontSize: {
                                        base: '30px',
                                        lg: '35px',
                                        xl: '50px'
                                    },
                                    marginBottom: "15px",
                                    fontWeight: "500",
                                    children: footer.content.header
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                                    sectionId: "header_desc",
                                    data: footer,
                                    sectionName: "footer",
                                    as: "p",
                                    color: "white",
                                    fontSize: {
                                        base: '15px',
                                        lg: '16px',
                                        xl: '18px'
                                    },
                                    children: footer.content.header_desc
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Footer_MeetupForm, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                bg: "#000",
                p: 10,
                px: [
                    10,
                    56
                ],
                justify: "space-between",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        href: "/",
                        mr: 10,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            src: "/logo-white.png",
                            alt: "logo",
                            marginRight: "100px",
                            h: "40px",
                            objectFit: "contain",
                            objectPosition: "left"
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                        w: [
                            '80%',
                            '20%'
                        ],
                        justify: "space-between",
                        alignItems: "center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    _hover: {
                                        color: 'red'
                                    },
                                    href: "/terms-of-service",
                                    children: "Terms of service"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {
                                orientation: "vertical"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Stack, {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    _hover: {
                                        color: 'red'
                                    },
                                    href: "/privacy-policy",
                                    children: "Privacy Policy"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const HomePage_Footer = (Footer);


/***/ }),

/***/ 6830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const Section = (props)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        as: "section",
        h: "100vh",
        w: "100vw",
        position: "relative",
        zIndex: 0,
        ...props,
        children: props.children
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Section);


/***/ }),

/***/ 5957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_NavBar)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/NextLink.tsx
var NextLink = __webpack_require__(3629);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/components/NavBar/NavWrapper.tsx


const defaultStyles = {
    position: 'static',
    top: '0',
    background: 'linear-gradient(#000, transparent)'
};
const NavBar = ({ children  })=>{
    const navRef = (0,external_react_.useRef)();
    const currentScroll = (0,external_react_.useRef)();
    const { 0: styles , 1: setStyles  } = (0,external_react_.useState)({
        ...defaultStyles
    });
    (0,external_react_.useEffect)(()=>{
        let reqId;
        const scroll = window.requestAnimationFrame || function(callback) {
            window.setTimeout(callback, 1000 / 60);
        };
        const loop = ()=>{
            if (currentScroll.current !== window.scrollY) {
                currentScroll.current = window.scrollY;
                if (currentScroll.current > 150) {
                    let newState = {
                        position: 'fixed',
                        top: '-200px',
                        background: '#000',
                        transition: 'unset'
                    };
                    if (currentScroll.current > 250) {
                        newState = {
                            position: 'fixed',
                            top: '0',
                            background: '#000',
                            transition: 'top 0.5s ease'
                        };
                    }
                    setStyles((prevStyles)=>({
                            ...prevStyles,
                            ...newState
                        })
                    );
                } else {
                    setStyles(defaultStyles);
                }
            }
            reqId = scroll(loop);
        };
        loop();
        return ()=>{
            window.cancelAnimationFrame(reqId);
        };
    }, [
        currentScroll,
        navRef
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        ref: navRef,
        children: children(styles)
    }));
};
/* harmony default export */ const NavWrapper = (NavBar);

// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./src/components/NavBar/useLinks.ts

const useLinks = (links)=>{
    const { 0: accordionMap , 1: setAccordionMap  } = (0,external_react_.useState)({});
    const isActive = (path, link, index)=>{
        return path.split('/')[index] === link?.split('/')[index];
    };
    const getLinkColor = (path, link, index)=>{
        return isActive(path, link, index) ? 'red' : '#333';
    };
    const showBorder = (i)=>{
        return i !== 0 || i !== links.length - 1 ? '2px solid #414141' : 'none';
    };
    const setMap = (index)=>{
        setAccordionMap((prevMap)=>{
            const newlinks = Object.keys(prevMap).reduce((acc, key)=>{
                return {
                    ...acc,
                    [key]: false
                };
            }, {});
            return {
                ...newlinks,
                [index]: !prevMap[index]
            };
        });
    };
    return {
        accordionMap,
        setMap,
        isActive,
        getLinkColor,
        showBorder
    };
};
/* harmony default export */ const NavBar_useLinks = (useLinks);

;// CONCATENATED MODULE: ./src/components/NavBar/Links.tsx





const DeskTopLinks = ({ links , path  })=>{
    const { accordionMap , setMap , getLinkColor , showBorder , isActive  } = NavBar_useLinks(links);
    const accodionOpenStyles = external_emotion_react_.css`
    width: 100%;
  `;
    const accodionClosedStyles = external_emotion_react_.css`
    width: 0px;
  `;
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
        justifyContent: "space-between",
        display: {
            base: 'none',
            lg: 'flex'
        },
        background: "white",
        flexGrow: 1,
        padding: "10px",
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            children: links?.length && links.map((link, i)=>{
                return link?.isNotClickable ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    display: "inline-flex",
                    alignItems: "center",
                    borderRight: showBorder(i),
                    onClick: ()=>setMap(i)
                    ,
                    transition: "all 0.5s ease-in-out",
                    overflow: "hidden",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            fontSize: "16px",
                            padding: "0px 30px",
                            fontWeight: "600",
                            cursor: "pointer",
                            color: getLinkColor(path, link?.link, 1),
                            children: link.name
                        }, `nav_links_${i}`),
                        link.submenu && /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            css: accordionMap[i] || isActive(path, link?.link, 1) ? accodionOpenStyles : accodionClosedStyles,
                            flexWrap: "nowrap",
                            flexShrink: 0,
                            children: link.submenu.map((menu, j)=>/*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    href: menu?.link || '/',
                                    marginRight: "20px",
                                    fontSize: "14px",
                                    padding: "0px 15px",
                                    style: {
                                        fontWeight: '600',
                                        color: getLinkColor(path, menu?.link, 2)
                                    },
                                    whiteSpace: "nowrap",
                                    children: menu.name
                                }, `nav_links_${i}_${j}`)
                            )
                        })
                    ]
                }) : /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                    href: link?.link || '/',
                    fontSize: "16px",
                    padding: "0px 15px",
                    style: {
                        fontWeight: '600',
                        color: getLinkColor(path, link?.link, 1),
                        borderRight: showBorder(i)
                    },
                    children: link.name
                }, `nav_links_${i}`);
            })
        })
    }));
};
/* harmony default export */ const Links = (DeskTopLinks);

;// CONCATENATED MODULE: ./src/components/NavBar/MobileLinks.tsx





const MobileLinks = ({ links , path  })=>{
    const { accordionMap , setMap , getLinkColor , showBorder  } = NavBar_useLinks(links);
    const accodionOpenStyles = external_emotion_react_.css`
    height: fit-content;
  `;
    const accodionClosedStyles = external_emotion_react_.css`
    height: 0px;
  `;
    // const [] = useState
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        justifyContent: "flex-end",
        display: {
            base: 'flex',
            lg: 'none'
        },
        width: "100%",
        position: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                background: "white",
                padding: "10px",
                justifyContent: "flex-end",
                as: "label",
                htmlFor: "nav-toggle",
                cursor: "pointer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                    src: "/hamburger.png",
                    alt: "logo",
                    objectFit: "contain",
                    width: "30px"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                id: "nav-toggle",
                style: {
                    display: 'none'
                },
                type: "checkbox"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                direction: "column",
                position: "absolute",
                background: "white",
                padding: "20px 20px 50px",
                w: "350px",
                top: "100%",
                className: "nav-links",
                children: links?.length && links.map((link, i)=>{
                    return link?.isNotClickable ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        display: "inline-flex",
                        alignItems: "flex-start",
                        borderBottom: showBorder(i),
                        onClick: ()=>setMap(i)
                        ,
                        transition: "all 0.5s ease-in-out",
                        padding: "10px 30px 10px 0",
                        overflow: "hidden",
                        flexDir: "column",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                                fontSize: "16px",
                                fontWeight: "600",
                                cursor: "pointer",
                                color: getLinkColor(path, link?.link, 1),
                                children: link.name
                            }, `nav_links_${i}`),
                            link.submenu && /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                                css: accordionMap[i] ? accodionOpenStyles : accodionClosedStyles,
                                flexWrap: "nowrap",
                                flexShrink: 0,
                                overflow: "hidden",
                                direction: "column",
                                children: link.submenu.map((menu, j)=>/*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                        href: menu?.link || '/',
                                        marginRight: "20px",
                                        fontSize: "14px",
                                        style: {
                                            fontWeight: '600',
                                            color: getLinkColor(path, menu?.link, 2)
                                        },
                                        whiteSpace: "nowrap",
                                        padding: "10px 0",
                                        children: menu.name
                                    }, `nav_links_${i}_${j}`)
                                )
                            })
                        ]
                    }) : /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                        href: link?.link || '/',
                        fontSize: "16px",
                        padding: "10px 30px 10px 0",
                        style: {
                            fontWeight: '600',
                            color: getLinkColor(path, link?.link, 1),
                            borderBottom: showBorder(i)
                        },
                        children: link.name
                    }, `nav_links_${i}`);
                })
            })
        ]
    }));
};
/* harmony default export */ const NavBar_MobileLinks = (MobileLinks);

;// CONCATENATED MODULE: ./src/components/NavBar/index.tsx







const NavBar_NavBar = ({ links  })=>{
    const router = (0,router_.useRouter)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "header",
        position: "absolute",
        zIndex: 2,
        w: "100%",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
            as: "nav",
            h: "173px",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                    h: {
                        base: 'auto',
                        md: '73px'
                    },
                    background: "#fff",
                    alignItems: "center",
                    padding: {
                        base: '5px 15px',
                        md: '0 15px'
                    },
                    justifyContent: "center",
                    direction: {
                        base: 'column',
                        md: 'row'
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            marginRight: "5",
                            height: "auto",
                            width: "fit-content",
                            fontSize: "14px",
                            textAlign: "center",
                            color: "#333",
                            children: "Get help for this site or any of our apps with - QUIK ASSISTANT"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                            marginTop: {
                                base: '5px',
                                md: '0'
                            },
                            alignItems: "center",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    href: '/video-help',
                                    marginRight: {
                                        base: 2,
                                        md: 6
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        color: "white",
                                        background: "#000",
                                        borderRadius: "40px",
                                        _hover: {
                                            bg: '#000'
                                        },
                                        fontSize: {
                                            base: '10px',
                                            md: '14ps'
                                        },
                                        p: {
                                            base: '10px 20px',
                                            md: '15px 30px'
                                        },
                                        height: "auto",
                                        children: "Get Video Help"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                    href: '/text-help',
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Button, {
                                        color: "white",
                                        background: "#000",
                                        borderRadius: "40px",
                                        _hover: {
                                            bg: '#000'
                                        },
                                        fontSize: {
                                            base: '10px',
                                            md: '14ps'
                                        },
                                        p: {
                                            base: '10px 20px',
                                            md: '15px 30px'
                                        },
                                        height: "auto",
                                        children: "Get Text Help"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(NavWrapper, {
                    children: (styles)=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ...styles,
                            w: "100%",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                                alignItems: "center",
                                maxW: "1440px",
                                margin: "auto",
                                h: {
                                    base: '73px',
                                    md: '100px'
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                        src: "/logo-white.png",
                                        alt: "logo",
                                        marginRight: "100px",
                                        height: "90%",
                                        objectFit: "contain",
                                        objectPosition: "left"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Links, {
                                        links: links,
                                        path: router.asPath
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar_MobileLinks, {
                                        links: links,
                                        path: router.asPath
                                    })
                                ]
                            })
                        })
                })
            ]
        })
    }));
};
/* harmony default export */ const components_NavBar = (NavBar_NavBar);


/***/ }),

/***/ 6385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iC": () => (/* binding */ APP_NAME),
/* harmony export */   "lO": () => (/* binding */ HOME_PAGE_NAME),
/* harmony export */   "_k": () => (/* binding */ HOME_PAGE_SERVICES_EMAIL_AND_SMS),
/* harmony export */   "mM": () => (/* binding */ HOME_PAGE_SERVICES_LEADS_GENERATION),
/* harmony export */   "to": () => (/* binding */ HOME_PAGE_SERVICES_INFLUENCER_ACCESS),
/* harmony export */   "Qp": () => (/* binding */ NAV_NAME)
/* harmony export */ });
/* unused harmony exports HOME_PAGE_BANNER, HOME_PAGE_BANNER_SUB_HEADER, HOME_PAGE_BANNER_HEADER, HOME_PAGE_BANNER_HEADER_DESC, HOME_PAGE_BANNER_IMAGE */
const APP_NAME = 'quik-influence';
const HOME_PAGE_NAME = 'Home Page';
const HOME_PAGE_BANNER = 'banner';
const HOME_PAGE_BANNER_SUB_HEADER = 'sub_header';
const HOME_PAGE_BANNER_HEADER = 'header';
const HOME_PAGE_BANNER_HEADER_DESC = 'header_dec';
const HOME_PAGE_BANNER_IMAGE = 'image_url';
const HOME_PAGE_SERVICES_EMAIL_AND_SMS = 'Email and Sms';
const HOME_PAGE_SERVICES_LEADS_GENERATION = 'Lead Generation';
const HOME_PAGE_SERVICES_INFLUENCER_ACCESS = 'Influencer Access';
const NAV_NAME = 'Nav';


/***/ })

};
;