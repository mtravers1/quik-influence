"use strict";
exports.id = 5843;
exports.ids = [5843];
exports.modules = {

/***/ 6305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2341);
/* harmony import */ var hooks_useForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8091);
/* harmony import */ var components_CustomInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1767);
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8081);








const LeadsForm = ({ campaignId , handleStripe , redirectUrl , form , paidType , showConsent =true  })=>{
    const toast = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.createStandaloneToast)();
    const { 0: submitForm , 1: setSubmitForm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const isPaidCampaign = paidType === "PAID";
    const { handleChange , inputTypes , handleSubmit , errors , loading , resetInputs  } = (0,hooks_useForm__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({
        inputs: form,
        cb: async (inputs)=>{
            if (showConsent && !submitForm) return;
            let payload, url;
            if (!!campaignId) {
                url = "/users/campaign/";
                payload = {
                    ...inputs,
                    campaignId
                };
            } else {
                url = "/users/admin/";
                payload = {
                    ...inputs
                };
            }
            await utils_helpers__WEBPACK_IMPORTED_MODULE_6__/* .axiosInstance.post */ .be.post(url, payload).then(async (res)=>{
                if (res.status === 200) {
                    resetInputs();
                    toast({
                        title: "Registered Successfully.",
                        description: isPaidCampaign ? "You would be redirected to a payment screen" : "",
                        duration: 9000,
                        position: "top-right",
                        variant: "subtle",
                        isClosable: false
                    });
                }
                // redirect to stripe checkout
                // handleStripe(inputs.email, res.status === 200);
                if (false) {}
            }).catch((err)=>{
                toast({
                    title: err?.response?.data?.message || err.message,
                    status: "error",
                    duration: 9000,
                    position: "top-right"
                });
            });
        }
    });
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
        display: "flex",
        as: "form",
        flexDirection: "column",
        flexGrow: 1,
        alignItems: "center",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                flexWrap: "wrap",
                marginBottom: 30,
                justifyContent: "space-between",
                children: [
                    form?.map((data, i)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormControl, {
                            width: "100%",
                            isInvalid: errors[data?.name],
                            isRequired: data?.required,
                            margin: "3px 0",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_CustomInput__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                    name: data?.name,
                                    placeholder: data?.label,
                                    paddingLeft: 50,
                                    onChange: handleChange,
                                    value: inputTypes[data?.name],
                                    "datatest-id": `test-${data?.name}`,
                                    options: data?.options,
                                    type: data?.type,
                                    icon: data?.icon
                                }),
                                errors[data.name] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.FormErrorMessage, {
                                    paddingLeft: 50,
                                    fontSize: 12,
                                    children: data.errorMessage
                                })
                            ]
                        }, `contact_form_${i}`)
                    ),
                    showConsent && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                        p: "10px",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "checkbox",
                                checked: submitForm,
                                onChange: ()=>setSubmitForm(!submitForm)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                                as: "small",
                                marginLeft: "20px",
                                children: "By submitting yes, I consent to having a representative from QuikInfluence or their partners contact me at this number (insert submitted number) and/or this email (insert submitted email address). I understand these calls or texts may be generated using an automated dialer or software and that my consent is not required as a precondition for purchasing or receiving any property, goods or service."
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Button__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                borderRadius: 40,
                maxWidth: 320,
                fontSize: 14,
                paddingTop: 23,
                paddingBottom: 23,
                onClick: handleSubmit,
                children: loading ? "Loading..." : "Submit"
            })
        ]
    }));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeadsForm);


/***/ }),

/***/ 2986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6466);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5851);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        name: 'firstName',
        label: 'First Name',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUser,
        errorMessage: 'Enter your First name',
        required: true,
        type: 'text',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'lastName',
        label: 'Last Name',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUser,
        errorMessage: 'Enter your last name',
        required: true,
        type: 'string',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'phone',
        label: 'Phone Number',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faPhone,
        required: true,
        type: 'text',
        errorMessage: 'Enter your phone number',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .PHONE_NUMBER_REGEX */ .d0
    },
    {
        name: 'email',
        label: 'Your Email Address',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faMailBulk,
        errorMessage: 'Enter your address',
        required: true,
        type: 'text',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .EMAIL_REFEX */ .Vm
    },
    {
        name: 'dateOfBirth',
        label: 'Date of Birth',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faBirthdayCake,
        errorMessage: 'Enter your date of birth',
        required: true,
        type: 'date',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'address',
        label: 'Adress 1',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAddressBook,
        errorMessage: 'Enter your address',
        required: true,
        type: 'text',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'address2',
        label: 'Adress 2',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAddressBook,
        errorMessage: 'Enter your address',
        required: false,
        type: 'text',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'address3',
        label: 'Adress 3',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faAddressBook,
        errorMessage: 'Enter your address',
        required: false,
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'city',
        label: 'City',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCity,
        errorMessage: 'Enter your city',
        required: true,
        type: 'text',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'state',
        label: 'State',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCity,
        errorMessage: 'Enter your state',
        required: true,
        type: 'text',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'postalCode',
        label: 'Zip code',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCode,
        errorMessage: 'Enter your zip code',
        required: true,
        type: 'number',
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    },
    {
        name: 'gender',
        label: 'Gender',
        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faUser,
        errorMessage: 'Please select a gender',
        required: true,
        type: 'select',
        options: [
            'male',
            'female',
            'other'
        ],
        pattern: utils_constants_regexConstants__WEBPACK_IMPORTED_MODULE_1__/* .FREE_TEXT_REGEX */ .Y1
    }, 
]);


/***/ })

};
;