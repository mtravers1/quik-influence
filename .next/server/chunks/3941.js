"use strict";
exports.id = 3941;
exports.ids = [3941];
exports.modules = {

/***/ 3941:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ modules_Authentication)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./public/homepage.jpg
/* harmony default export */ const homepage = ({"src":"/_next/static/media/homepage.edaa9f7d.jpg","height":3534,"width":5351,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAUACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABgEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAJoS/wD/xAAbEAACAgMBAAAAAAAAAAAAAAABAwIEABESof/aAAgBAQABPwDpcpmqayAsKLNCHmf/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/AH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/AH//2Q=="});
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/components/Input/index.ts + 1 modules
var Input = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/hooks/useForm.ts
var useForm = __webpack_require__(8091);
// EXTERNAL MODULE: ./src/utils/constants/regexConstants.ts
var regexConstants = __webpack_require__(5851);
;// CONCATENATED MODULE: ./src/utils/constants/formData/loginOtp.ts

/* harmony default export */ const loginOtp = ([
    {
        name: 'email',
        label: 'Email Address',
        errorMessage: 'Enter your address',
        required: true,
        type: 'text',
        pattern: regexConstants/* EMAIL_REFEX */.Vm
    },
    {
        name: 'otp',
        label: 'Please check your email to retrieve your One Time Password (OTP).',
        errorMessage: 'Enter an Otp',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/redux/actions/auth.ts
var auth = __webpack_require__(3821);
// EXTERNAL MODULE: ./src/assets/loader.gif
var loader = __webpack_require__(2379);
// EXTERNAL MODULE: ./src/utils/apiHelpers.ts
var apiHelpers = __webpack_require__(662);
;// CONCATENATED MODULE: ./src/modules/Authentication/LoginOtp.tsx
















const Login = ()=>{
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const toast = (0,react_.useToast)();
    const { 0: showOtpInput , 1: setShowOtpInput  } = (0,external_react_.useState)(false);
    const { 0: loadingOtp , 1: setLoadingOtp  } = (0,external_react_.useState)(false);
    const { redirect  } = router.query;
    let email;
    // due to nextjs being server side
    if (false) {}
    const { handleChange , inputTypes , handleSubmit , errors , loading  } = (0,useForm/* default */.Z)({
        inputs: loginOtp,
        initials: {
            email
        },
        cb: async (inputs)=>{
            const response = await helpers/* axiosInstance.post */.be.post('/auth/admin/otpLogin', inputs);
            dispatch((0,auth/* login */.x4)(response.data.data));
            toast({
                title: `Welcome back ${response.data.data.admin.firstName}`,
                description: '',
                status: 'success',
                duration: 4000,
                isClosable: true
            });
            if (redirect) {
                return router.push(redirect);
            }
            router.push('/dashboard');
        }
    });
    const getOpt = async ()=>{
        // This is a quick fix and only works because there are just 2 elements in the form
        if (!inputTypes.email) {
            return handleSubmit({});
        }
        setLoadingOtp(true);
        try {
            await helpers/* axiosInstance.post */.be.post('/auth/admin/getLoginOtp', {
                email: inputTypes.email
            });
            setShowOtpInput(true);
        } catch (err) {
            const errMessage = (0,apiHelpers/* errorParser */.LT)(err);
            toast({
                title: errMessage,
                description: '',
                status: 'error',
                duration: 4000,
                position: 'top-right',
                isClosable: true
            });
        }
        setLoadingOtp(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                marginBottom: "15px",
                children: loginOtp.slice(0, showOtpInput ? 2 : 1).map((data, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        isInvalid: errors[data.name],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                                name: data.name,
                                label: data.label,
                                labelProps: {
                                    fontSize: '1.2rem'
                                },
                                value: inputTypes[data.name],
                                formControlProps: {
                                    pt: 8
                                },
                                handleChange: handleChange,
                                type: data.type,
                                placeholder: data.label,
                                TextInputProps: {
                                    border: data.name === 'otp' ? `2px solid ${colorConstants/* default.influenceRed */.ZP.influenceRed} !important` : undefined
                                }
                            }),
                            errors[data.name] && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                                fontSize: "14px",
                                children: data.errorMessage
                            })
                        ]
                    }, `register_${i}`)
                )
            }),
            showOtpInput && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                onClick: getOpt,
                height: "30px",
                alignItems: "center",
                cursor: "pointer",
                children: [
                    "Resend Otp",
                    loadingOtp && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: loader/* default */.Z,
                        alt: "",
                        width: 30,
                        height: 30
                    })
                ]
            }),
            showOtpInput ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                maxW: "204px",
                height: "50px",
                padding: 0,
                mt: 4,
                onClick: handleSubmit,
                children: [
                    "Login",
                    ' ',
                    loading && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: loader/* default */.Z,
                        alt: "",
                        width: 50,
                        height: 50
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                maxW: "204px",
                height: "50px",
                padding: 0,
                mt: 4,
                onClick: getOpt,
                children: [
                    "Get Otp",
                    ' ',
                    loadingOtp && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: loader/* default */.Z,
                        alt: "",
                        width: 50,
                        height: 50
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const LoginOtp = (Login);

;// CONCATENATED MODULE: ./src/utils/constants/formData/register.ts

/* harmony default export */ const register = ([
    {
        name: 'firstName',
        label: 'First Name',
        errorMessage: 'Enter your first name',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'lastName',
        label: 'Last Name',
        required: true,
        errorMessage: 'Enter your fisrt number',
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    },
    {
        name: 'email',
        label: 'Email Address',
        errorMessage: 'Enter your address',
        required: true,
        type: 'email',
        pattern: regexConstants/* EMAIL_REFEX */.Vm
    },
    {
        name: 'phone',
        label: 'Phone Number',
        errorMessage: 'Enter your phone',
        required: true,
        type: 'tel',
        pattern: regexConstants/* PHONE_NUMBER_REGEX */.d0
    },
    {
        name: 'otp',
        label: 'Please check your email to retrieve your One Time Password (OTP).',
        errorMessage: 'Enter your otp',
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

// EXTERNAL MODULE: ./src/components/NextLink.tsx
var NextLink = __webpack_require__(3629);
// EXTERNAL MODULE: external "query-string"
var external_query_string_ = __webpack_require__(9103);
var external_query_string_default = /*#__PURE__*/__webpack_require__.n(external_query_string_);
;// CONCATENATED MODULE: ./src/modules/Authentication/Register.tsx
















const Register = ()=>{
    const toast = (0,react_.useToast)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const router = (0,router_.useRouter)();
    const { query  } = router;
    const isTermsChecked = query.terms === "checked";
    const { 0: showOtpInput , 1: setShowOtpInput  } = (0,external_react_.useState)(false);
    const { 0: loadingOtp , 1: setLoadingOtp  } = (0,external_react_.useState)(false);
    const { 0: stripeRedirectUrl , 1: setStripeRedirectUrl  } = (0,external_react_.useState)();
    const { 0: submitForm , 1: setSubmitForm  } = (0,external_react_.useState)(isTermsChecked);
    const { 0: showTermsError , 1: setShowTermsError  } = (0,external_react_.useState)(query?.terms ? false : isTermsChecked ? true : false);
    let { handleChange , handleModChange , inputTypes , handleSubmit , errors , loading  } = (0,useForm/* default */.Z)({
        inputs: register,
        cb: async (inputs)=>{
            if (!submitForm) return setShowTermsError(true);
            const response = await helpers/* axiosInstance.post */.be.post("/auth/admin/otpRegister", inputs);
            toast({
                title: "Account created.",
                description: "We've created your account for you.",
                status: "success",
                duration: 4000,
                isClosable: true
            });
            if (false) {}
            setShowOtpInput(true);
            setStripeRedirectUrl(response.data.data.url);
        }
    });
    (0,external_react_.useEffect)(()=>{
        delete query.terms;
        handleModChange(query);
    }, [
        query
    ]);
    const submitOtp = async ()=>{
        setLoadingOtp(true);
        try {
            const response = await helpers/* axiosInstance.post */.be.post("/auth/admin/otpLogin", {
                email: inputTypes.email,
                otp: inputTypes.otp
            });
            dispatch((0,auth/* login */.x4)(response.data.data));
            if (false) {}
        } catch (err) {}
        setLoadingOtp(false);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        action: "post",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                marginBottom: "15px",
                children: register.slice(0, showOtpInput ? 5 : 4).map((data, i)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                        isInvalid: errors[data.name],
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                                name: data.name,
                                label: data.label,
                                labelProps: {
                                    fontSize: "1.2rem"
                                },
                                value: inputTypes[data.name] || query[data.name],
                                formControlProps: {
                                    pt: 8
                                },
                                handleChange: handleChange,
                                type: data.type,
                                placeholder: data.label,
                                TextInputProps: {
                                    border: data.name === "otp" ? `2px solid ${colorConstants/* default.influenceRed */.ZP.influenceRed} !important` : undefined
                                }
                            }),
                            errors[data.name] && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                                fontSize: "14px",
                                children: data.errorMessage
                            })
                        ]
                    }, `register_${i}`)
                )
            }),
            showTermsError && /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                color: "red",
                children: "Please accept the Terms of Service"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                p: "10px",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "checkbox",
                        checked: submitForm,
                        onChange: ()=>{
                            setSubmitForm(!submitForm);
                            setShowTermsError(false);
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                        as: "small",
                        marginLeft: "20px",
                        children: [
                            "Please Agree to the",
                            " ",
                            /*#__PURE__*/ jsx_runtime_.jsx(NextLink/* default */.Z, {
                                href: `/terms-of-service?${external_query_string_default().stringify(inputTypes)}`,
                                textDecor: "underline",
                                children: "Terms of Service"
                            }),
                            " ",
                            "before submitting"
                        ]
                    })
                ]
            }),
            !showOtpInput ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                maxW: "204px",
                height: "50px",
                padding: 0,
                mt: 4,
                onClick: handleSubmit,
                children: [
                    "Signup",
                    loading && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: loader/* default */.Z,
                        alt: "",
                        width: 50,
                        height: 50
                    })
                ]
            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                maxW: "250px",
                height: "50px",
                padding: 0,
                mt: 4,
                onClick: submitOtp,
                children: [
                    "Enter Otp to continue",
                    loadingOtp && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: loader/* default */.Z,
                        alt: "",
                        width: 50,
                        height: 50
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Authentication_Register = (Register);

;// CONCATENATED MODULE: ./src/modules/Authentication/AuthTab.tsx







const CustomTab = ({ title  })=>/*#__PURE__*/ jsx_runtime_.jsx(react_.Tab, {
        color: colorConstants/* default.influenceRedWithOpacity */.ZP.influenceRedWithOpacity,
        _selected: {
            color: colorConstants/* default.influenceRed */.ZP.influenceRed,
            borderColor: colorConstants/* default.influenceRed */.ZP.influenceRed
        },
        fontSize: "15px",
        children: title
    })
;
const pageMap = {
    login: 0,
    signup: 1
};
const pageIndexArr = [
    'login',
    'signup'
];
const AuthTab = ({ type  })=>{
    const router = (0,router_.useRouter)();
    const { 0: tabIndex , 1: setTabIndex  } = (0,external_react_.useState)(pageMap[type]);
    const handleTabsChange = (index)=>{
        setTabIndex(index);
        router.push(`/${pageIndexArr[index]}`);
    };
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Tabs, {
        mt: 6,
        index: tabIndex,
        onChange: handleTabsChange,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabList, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTab, {
                        title: "Login"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomTab, {
                        title: "Sign up"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.TabPanels, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        padding: 0,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(LoginOtp, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.TabPanel, {
                        padding: 0,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Authentication_Register, {})
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const Authentication_AuthTab = (AuthTab);

;// CONCATENATED MODULE: ./src/modules/Authentication/Authentication.tsx






const Authentication = ({ type  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "section",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
            height: "100vh",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    width: "55%",
                    position: "relative",
                    display: [
                        'none',
                        'block'
                    ],
                    as: "div",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                        src: homepage,
                        alt: "staff at the office",
                        layout: "fill",
                        objectFit: "cover"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                    width: [
                        '100%',
                        '45%'
                    ],
                    children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                        width: "full",
                        height: "full",
                        justifyContent: "center",
                        alignItems: [
                            'unset',
                            'center'
                        ],
                        p: 6,
                        pt: [
                            '10rem',
                            '0'
                        ],
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                            maxW: "440px",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                    fontFamily: "montserrat",
                                    children: "Get more things done with us"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                                    py: 8,
                                    children: "Access to thousands of real leads through our multi-platform funnel and management system."
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Authentication_AuthTab, {
                                    type: type
                                })
                            ]
                        })
                    })
                })
            ]
        })
    }));
};
/* harmony default export */ const Authentication_Authentication = (Authentication);

;// CONCATENATED MODULE: ./src/modules/Authentication/index.ts

/* harmony default export */ const modules_Authentication = (Authentication_Authentication);


/***/ })

};
;