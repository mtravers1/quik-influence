"use strict";
(() => {
var exports = {};
exports.id = 5991;
exports.ids = [5991];
exports.modules = {

/***/ 5101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ edit)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/MainContent/index.tsx + 4 modules
var MainContent = __webpack_require__(1273);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/assets/loader.gif
var loader = __webpack_require__(2379);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/hooks/useForm.ts
var useForm = __webpack_require__(8091);
// EXTERNAL MODULE: ./src/utils/constants/regexConstants.ts
var regexConstants = __webpack_require__(5851);
;// CONCATENATED MODULE: ./src/utils/constants/formData/editUserBasicInfo.tsx

/* harmony default export */ const editUserBasicInfo = ([
    {
        name: 'firstName',
        label: 'First name',
        errorMessage: 'Enter your first name',
        required: true,
        value: 'amen',
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'lastName',
        label: 'Last name',
        errorMessage: 'Enter your last name',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'gender',
        label: 'Gender',
        errorMessage: 'Enter your gender',
        required: true,
        type: 'text',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'address_line1',
        label: 'Address 1',
        type: 'text',
        placeholder: '000 place drive',
        errorMessage: 'Enter your address 1',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'address_line2',
        label: 'Address 2',
        type: 'text',
        placeholder: '000 place drive',
        errorMessage: '',
        required: false,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 2
    },
    {
        name: 'phone',
        label: 'Phone Number',
        errorMessage: 'Enter your phone',
        required: true,
        type: 'tel',
        pattern: regexConstants/* PHONE_NUMBER_REGEX */.d0,
        colSpan: 1
    },
    {
        name: 'dob',
        label: 'Date of birth',
        errorMessage: 'Enter your date of birth',
        required: true,
        type: 'date',
        pattern: regexConstants/* PHONE_NUMBER_REGEX */.d0,
        colSpan: 1
    },
    {
        name: 'city',
        label: 'City',
        type: 'text',
        errorMessage: 'Select country',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'address_zip',
        label: 'Zip Code',
        type: 'text',
        placeholder: '030303',
        errorMessage: 'Enter your zip code',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'address_state',
        label: 'State',
        type: 'select',
        errorMessage: 'Select a state',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'country',
        label: 'Country',
        type: 'select',
        errorMessage: 'Select your country',
        required: true,
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1,
        colSpan: 1
    },
    {
        name: 'avatar',
        label: 'Profile picture',
        errorMessage: 'Upload profile picture',
        required: true,
        type: 'image-upload',
        pattern: regexConstants/* FREE_TEXT_REGEX */.Y1
    }, 
]);

// EXTERNAL MODULE: ./src/components/Button/index.ts + 1 modules
var Button = __webpack_require__(2341);
// EXTERNAL MODULE: ./src/components/Input/index.ts + 1 modules
var Input = __webpack_require__(2666);
// EXTERNAL MODULE: ./src/components/DropdownSelect/index.tsx
var DropdownSelect = __webpack_require__(7030);
// EXTERNAL MODULE: ./src/utils/constants/stateConstants.ts
var stateConstants = __webpack_require__(5868);
;// CONCATENATED MODULE: ./src/utils/constants/countryConstant.ts
const countryNames = [
    'US'
];

// EXTERNAL MODULE: ./src/redux/selectors/auth.ts
var auth = __webpack_require__(8635);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/modules/Profile/ViewProfile/UserImage.tsx
var UserImage = __webpack_require__(2245);
// EXTERNAL MODULE: ./src/utils/constants/index.ts
var constants = __webpack_require__(3329);
// EXTERNAL MODULE: ./src/redux/actions/auth.ts
var actions_auth = __webpack_require__(3821);
;// CONCATENATED MODULE: ./src/modules/Profile/EditProfile/EditBasicInfo.tsx



















const stateSelectOptions = stateConstants/* stateNames.map */.D.map((stateName)=>({
        label: stateName,
        value: stateName
    })
);
const countrySelectOptions = countryNames.map((countryName)=>({
        label: countryName,
        value: countryName
    })
);
const textInputLabelProps = {
    fontWeight: 'bold',
    fontSize: 'lg'
};
const textInputProps = {
    p: '.50rem'
};
const EditBasicInfo = ()=>{
    const { colorMode  } = (0,react_.useColorMode)();
    const dispatch = (0,external_react_redux_.useDispatch)();
    const toast = (0,react_.useToast)();
    const { admin  } = (0,external_react_redux_.useSelector)(auth/* getUser */.P);
    const getSelectionOptions = (selectionType)=>{
        switch(selectionType){
            case 'address_state':
                return stateSelectOptions;
            case 'country':
                return countrySelectOptions;
            default:
                return [];
        }
    };
    const colSpan = (0,react_.useBreakpointValue)({
        base: 2,
        md: 1
    });
    const { handleChange , inputTypes , handleSubmit , errors , loading  } = (0,useForm/* default */.Z)({
        inputs: editUserBasicInfo,
        initials: {
            address_line1: admin['address1'],
            address_line2: admin['address2'],
            address_state: admin['state'],
            address_zip: admin['zipCode'],
            city: admin['city'],
            country: admin['country'],
            dob: admin['dateOfBirth'],
            firstName: admin['firstName'],
            gender: admin['gender'],
            lastName: admin['lastName'],
            phone: admin['phone'],
            avatar: admin['avatar']
        },
        cb: async (inputs)=>{
            const response = await helpers/* axiosInstance.put */.be.put('/auth/profile/admin', {
                address1: inputs.address_line1,
                address2: inputs.address_line2,
                state: inputs.address_state,
                zipCode: inputs.address_zip,
                city: inputs.city,
                country: inputs.country,
                dateOfBirth: inputs.dob,
                firstName: inputs.firstName,
                gender: inputs.gender,
                lastName: inputs.lastName,
                phone: inputs.phone,
                avatar: inputs.avatar
            });
            if (response) {
                dispatch((0,actions_auth/* login */.x4)({
                    admin: response.data.data,
                    token: localStorage.getItem(constants/* Q_TOKEN */.af)
                }));
                toast({
                    title: 'Your profile has been updated succesfully',
                    description: '',
                    status: 'success',
                    duration: 4000,
                    isClosable: true
                });
            }
        }
    });
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UserImage/* default */.Z, {
                name: "avatar",
                handleChange: handleChange,
                avatar: inputTypes.avatar
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                bgColor: colorConstants/* cardThemeColor */.fP[colorMode],
                w: "100%",
                flexDirection: "column",
                p: "12",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                        pb: "12",
                        size: "md",
                        children: "Edit profile"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                        action: "post",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(react_.VStack, {
                                spacing: "10",
                                width: "full",
                                alignItems: "flex-start",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.SimpleGrid, {
                                    w: "full",
                                    columns: 2,
                                    columnGap: 3,
                                    rowGap: 6,
                                    children: editUserBasicInfo.map((data, i)=>{
                                        if (data.type === 'select') {
                                            return(/*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                                colSpan: data.colSpan === 1 ? colSpan : data.colSpan,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(DropdownSelect/* default */.Z, {
                                                    selectProps: {
                                                        name: data.name,
                                                        value: inputTypes[data.name]
                                                    },
                                                    onChange: handleChange,
                                                    label: data.label,
                                                    labelProps: {
                                                        ...textInputLabelProps
                                                    },
                                                    options: getSelectionOptions(data.name) || [],
                                                    error: errors[data.name] && data.errorMessage
                                                })
                                            }, `gridItem_${i}`));
                                        }
                                        if (data.type === 'image-upload') {
                                            return;
                                        }
                                        return(/*#__PURE__*/ jsx_runtime_.jsx(react_.GridItem, {
                                            colSpan: data.colSpan === 1 ? colSpan : data.colSpan,
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.FormControl, {
                                                isInvalid: errors[data.name],
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(Input/* TextInput */.o, {
                                                        name: data.name,
                                                        label: data.label,
                                                        value: inputTypes[data.name],
                                                        type: data.type,
                                                        placeholder: data.placeholder,
                                                        TextInputProps: {
                                                            ...textInputProps
                                                        },
                                                        labelProps: {
                                                            ...textInputLabelProps
                                                        },
                                                        handleChange: handleChange
                                                    }),
                                                    errors[data.name] && /*#__PURE__*/ jsx_runtime_.jsx(react_.FormErrorMessage, {
                                                        fontSize: "xl",
                                                        children: data.errorMessage
                                                    })
                                                ]
                                            }, `credits_${i}`)
                                        }, `gridItem_${i}`));
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Button/* default */.Z, {
                                maxW: "204px",
                                height: "35px",
                                padding: 0,
                                mt: 4,
                                onClick: handleSubmit,
                                children: [
                                    "Save",
                                    loading && /*#__PURE__*/ jsx_runtime_.jsx(next_image["default"], {
                                        src: loader/* default */.Z,
                                        alt: "",
                                        width: 50,
                                        height: 50
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    }));
};
/* harmony default export */ const EditProfile_EditBasicInfo = (EditBasicInfo);

;// CONCATENATED MODULE: ./src/modules/Profile/EditProfile/index.tsx



const EditProfile = (props)=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(EditProfile_EditBasicInfo, {})
    }));
};
/* harmony default export */ const Profile_EditProfile = (EditProfile);

;// CONCATENATED MODULE: ./src/pages/profile/edit/index.tsx



const Profile = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(MainContent/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Profile_EditProfile, {})
    }));
};
/* harmony default export */ const edit = (Profile);


/***/ }),

/***/ 1135:
/***/ ((module) => {

module.exports = require("@alliance-software-development/asd-media-react");

/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 6466:
/***/ ((module) => {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ 7197:
/***/ ((module) => {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 562:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 8028:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 9103:
/***/ ((module) => {

module.exports = require("query-string");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3655:
/***/ ((module) => {

module.exports = require("recharts");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,5675,8081,3629,3814,2341,6089,3821,9229,4974,4392,1273,5566,2245], () => (__webpack_exec__(5101)));
module.exports = __webpack_exports__;

})();