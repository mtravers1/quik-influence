"use strict";
(() => {
var exports = {};
exports.id = 277;
exports.ids = [277];
exports.modules = {

/***/ 6562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ profile)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/MainContent/index.tsx + 4 modules
var MainContent = __webpack_require__(1273);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./src/modules/Profile/ViewProfile/UserImage.tsx
var UserImage = __webpack_require__(2245);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@fortawesome/free-solid-svg-icons"
var free_solid_svg_icons_ = __webpack_require__(6466);
// EXTERNAL MODULE: external "@fortawesome/react-fontawesome"
var react_fontawesome_ = __webpack_require__(7197);
;// CONCATENATED MODULE: ./src/modules/Profile/ViewProfile/BasicInfoWrap.tsx




const BasicInfoWrap = ({ title , name , icon  })=>{
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        flexDirection: "row",
        my: "12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_fontawesome_.FontAwesomeIcon, {
                color: colorMode !== 'dark' ? 'red' : 'inherit',
                icon: icon
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                pl: "12px",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Text, {
                        fontFamily: "Avenir",
                        fontWeight: "bold",
                        fontSize: "2xl",
                        children: [
                            ' ',
                            title ? title : 'N/A'
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Text, {
                        fontFamily: "Avenir",
                        fontSize: "md",
                        children: name
                    }),
                    ' '
                ]
            })
        ]
    }));
};
/* harmony default export */ const ViewProfile_BasicInfoWrap = (BasicInfoWrap);

// EXTERNAL MODULE: ./src/redux/selectors/auth.ts
var auth = __webpack_require__(8635);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
;// CONCATENATED MODULE: ./src/modules/Profile/ViewProfile/BasicInfo.tsx









const BasicInfo = ()=>{
    const { admin  } = (0,external_react_redux_.useSelector)(auth/* getUser */.P);
    const basicInfoConstant = [
        {
            icon: free_solid_svg_icons_.faUserTag,
            name: 'Gender',
            title: admin?.gender
        },
        {
            icon: free_solid_svg_icons_.faEnvelope,
            name: 'Email',
            title: admin?.email
        },
        {
            icon: free_solid_svg_icons_.faAddressCard,
            name: 'Address 1',
            title: admin?.address1
        },
        {
            icon: free_solid_svg_icons_.faAddressBook,
            name: 'Address 2',
            title: admin?.address2
        },
        {
            icon: free_solid_svg_icons_.faPhone,
            name: 'Cell phone',
            title: admin?.phone
        },
        {
            icon: free_solid_svg_icons_.faCalendar,
            name: 'DOB',
            title: admin?.dateOfBirth
        },
        {
            icon: free_solid_svg_icons_.faGlobeAmericas,
            name: 'Country',
            title: admin?.country
        },
        {
            icon: free_solid_svg_icons_.faCity,
            name: 'City',
            title: admin?.city
        },
        {
            icon: free_solid_svg_icons_.faMailBulk,
            name: 'Zip-Code',
            title: admin?.zipCode
        },
        {
            icon: free_solid_svg_icons_.faLocationArrow,
            name: 'State',
            title: admin?.state
        }, 
    ];
    const { colorMode  } = (0,react_.useColorMode)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
        bgColor: colorConstants/* cardThemeColor */.fP[colorMode],
        w: "100%",
        flexDirection: "column",
        p: "12",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                size: "md",
                children: "Basic Info"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                w: "100%",
                flexGrow: 1,
                flexDirection: {
                    base: 'column',
                    md: 'column',
                    lg: 'row'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        flexGrow: "inherit",
                        children: basicInfoConstant.slice(0, 5).map(({ name , icon , title  })=>/*#__PURE__*/ jsx_runtime_.jsx(ViewProfile_BasicInfoWrap, {
                                icon: icon,
                                name: name,
                                title: title
                            }, name)
                        )
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        flexGrow: "inherit",
                        children: basicInfoConstant.slice(5).map(({ name , icon , title  })=>/*#__PURE__*/ jsx_runtime_.jsx(ViewProfile_BasicInfoWrap, {
                                icon: icon,
                                name: name,
                                title: title
                            }, name)
                        )
                    })
                ]
            })
        ]
    }));
};
// This gets called on every request
async function getServerSideProps() {
    // Fetch data from external API
    const response = await axiosInstance.get('/auth/profile/admin');
    // Pass data to the page via props
    return {
        props: {
            data: response.data.data
        }
    };
}
/* harmony default export */ const ViewProfile_BasicInfo = (BasicInfo);

;// CONCATENATED MODULE: ./src/modules/Profile/ViewProfile/ProfileOverview.tsx






const ProfileOverview = ()=>{
    const { admin  } = (0,external_react_redux_.useSelector)(auth/* getUser */.P);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        overflowY: "scroll",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(UserImage/* default */.Z, {
                avatar: admin?.avatar
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ViewProfile_BasicInfo, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Divider, {})
        ]
    }));
};
/* harmony default export */ const ViewProfile_ProfileOverview = (ProfileOverview);

;// CONCATENATED MODULE: ./src/pages/profile/index.tsx



const Profile = ()=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(MainContent/* default */.Z, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(ViewProfile_ProfileOverview, {})
    }));
};
/* harmony default export */ const profile = (Profile);


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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,5675,8081,3629,3814,2341,6089,3821,9229,4974,4392,1273,5566,2245], () => (__webpack_exec__(6562)));
module.exports = __webpack_exports__;

})();