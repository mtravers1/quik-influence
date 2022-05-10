"use strict";
(() => {
var exports = {};
exports.id = 2684;
exports.ids = [2684];
exports.modules = {

/***/ 1020:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ influencer_access),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/styles/Home.module.css
var Home_module = __webpack_require__(1250);
var Home_module_default = /*#__PURE__*/__webpack_require__.n(Home_module);
// EXTERNAL MODULE: ./src/utils/constants/pageDataConstants.ts
var pageDataConstants = __webpack_require__(6385);
// EXTERNAL MODULE: ./src/utils/constants/index.ts
var constants = __webpack_require__(3329);
// EXTERNAL MODULE: ./src/components/NavBar/index.tsx + 4 modules
var NavBar = __webpack_require__(5957);
// EXTERNAL MODULE: ./src/components/HomePage/Banner/index.tsx + 2 modules
var Banner = __webpack_require__(1301);
// EXTERNAL MODULE: ./src/components/HomePage/Footer/index.tsx + 2 modules
var Footer = __webpack_require__(4608);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: ./src/components/EditableWrapper/index.tsx
var EditableWrapper = __webpack_require__(2992);
// EXTERNAL MODULE: ./src/components/HomePage/Section/index.tsx
var Section = __webpack_require__(6830);
;// CONCATENATED MODULE: ./src/components/HomePage/ImgSec/index.tsx




const ImgSec = ({ info  })=>{
    return(/*#__PURE__*/ jsx_runtime_.jsx(Section/* default */.Z, {
        background: "#fff",
        h: "unset",
        padding: {
            base: '50px 15px',
            lg: '70px 15px',
            xl: '100px 15px'
        },
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
            maxW: "1440px",
            margin: "auto",
            alignItems: "center",
            justifyContent: "center",
            direction: "column",
            h: "100%",
            position: "relative",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                justifyContent: "space-between",
                alignItems: "center",
                direction: {
                    base: 'column-reverse',
                    lg: 'row'
                },
                marginTop: {
                    base: '80px',
                    lg: '0'
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        width: {
                            base: '100%',
                            sm: '80%',
                            lg: '38%'
                        },
                        height: "fit-content",
                        position: "relative",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                            sectionId: "image_url",
                            data: info,
                            sectionName: "info",
                            isImage: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                                src: info.content.image_url,
                                alt: "Homepage",
                                w: "100%",
                                h: "100%",
                                objectFit: "cover"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        width: {
                            base: '100%',
                            lg: '55%'
                        },
                        marginBottom: {
                            lg: 0,
                            base: '40px'
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx(EditableWrapper/* default */.Z, {
                            sectionId: "header",
                            data: info,
                            sectionName: "info",
                            as: "h1",
                            color: "red",
                            fontSize: {
                                base: '25px',
                                lg: '50px',
                                xl: '76px'
                            },
                            marginBottom: "15px",
                            fontWeight: "700",
                            textAlign: {
                                base: 'center',
                                lg: 'left'
                            },
                            children: info.content.header
                        })
                    })
                ]
            })
        })
    }));
};
/* harmony default export */ const HomePage_ImgSec = (ImgSec);

;// CONCATENATED MODULE: ./src/pages/services/influencer-access.tsx










const Home = ({ pageContent , nav  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Quick Influence"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Access to thousands of real leads through our multi-platform funnel and management system."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: (Home_module_default()).main,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(NavBar/* default */.Z, {
                        links: nav[0].content.navLinks
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Banner/* default */.Z, {
                        banner: pageContent.banner,
                        height: "60vh",
                        minHeight: "unset"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(HomePage_ImgSec, {
                        info: pageContent.info
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer/* default */.Z, {
                        footer: pageContent.footer
                    })
                ]
            })
        ]
    }));
};
const getStaticProps = async ()=>{
    const content = await helpers/* axiosInstance.get */.be.get(`${constants/* CONTENT_URL */.ks}?resource=${pageDataConstants/* APP_NAME */.iC}&page=${pageDataConstants/* HOME_PAGE_SERVICES_INFLUENCER_ACCESS */.to}`);
    const footer = await helpers/* axiosInstance.get */.be.get(`${constants/* CONTENT_URL */.ks}?resource=${pageDataConstants/* APP_NAME */.iC}&page=${pageDataConstants/* HOME_PAGE_NAME */.lO}&type=footer`);
    const pageContent = content.data.data.reduce((acc, cur)=>({
            ...acc,
            [cur.type]: cur
        })
    , {});
    return {
        props: {
            pageContent: {
                ...pageContent,
                footer: footer.data.data[0]
            }
        },
        revalidate: 10
    };
};
/* harmony default export */ const influencer_access = (Home);


/***/ }),

/***/ 1135:
/***/ ((module) => {

module.exports = require("@alliance-software-development/asd-media-react");

/***/ }),

/***/ 1271:
/***/ ((module) => {

module.exports = require("@chakra-ui/layout");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [7730,1664,5675,8081,3629,3814,2341,6089,1767,4557], () => (__webpack_exec__(1020)));
module.exports = __webpack_exports__;

})();