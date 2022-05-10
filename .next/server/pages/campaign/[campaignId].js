"use strict";
(() => {
var exports = {};
exports.id = 2271;
exports.ids = [2271];
exports.modules = {

/***/ 2279:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _campaignId_),
  "getStaticPaths": () => (/* binding */ getStaticPaths),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/constants/colorConstants.ts
var colorConstants = __webpack_require__(3814);
// EXTERNAL MODULE: ./src/components/Leads/LeadsForm/index.tsx
var LeadsForm = __webpack_require__(6305);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "@stripe/stripe-js"
const stripe_js_namespaceObject = require("@stripe/stripe-js");
// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/utils/constants/formData/leads.ts
var leads = __webpack_require__(2986);
;// CONCATENATED MODULE: ./src/pages/campaign/[campaignId]/index.tsx









const stripePromise = (0,stripe_js_namespaceObject.loadStripe)(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || "");
const getPaymentInfo = (amount)=>{
    const _amount = parseInt(amount, 10);
    const fee = _amount * (12 + 2.9 + 0.33) / 100;
    return {
        campaignAmount: _amount,
        fee,
        actualAmount: Math.round(_amount + fee) * 100
    };
};
const CloseFriendsCampaign = ({ data  })=>{
    const { query  } = (0,router_.useRouter)();
    const { colorMode  } = (0,react_.useColorMode)();
    const { 0: showSuccessMessage , 1: setShowSuccessMessage  } = (0,external_react_.useState)(false);
    const handleStripe = async (email, success)=>{
        if (data.paidType === "PAID") {
            const stripe = await stripePromise;
            const paymentInfo = getPaymentInfo(data.prices);
            const response = await helpers/* axiosInstance.post */.be.post("/stripe/create-payment-session", {
                email,
                image: data?.banner,
                title: data?.name,
                amount: paymentInfo.actualAmount,
                campaignId: query.campaignId
            });
            const result = await stripe?.redirectToCheckout({
                sessionId: response.data.data.id
            });
        } else if (success) {
            setShowSuccessMessage(true);
        }
    };
    const getFormFields = (optionalFields)=>{
        if (!optionalFields) return leads/* default */.Z;
        return [
            ...leads/* default */.Z,
            ...optionalFields
        ];
    };
    if (!data) window.location.href = "/404";
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "section",
        bgColor: colorConstants/* bgThemeColor */.YI[colorMode],
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
            as: "section",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Flex, {
                height: [
                    "unset",
                    "100vh"
                ],
                direction: [
                    "column",
                    "row"
                ],
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        width: [
                            "100%",
                            "55%"
                        ],
                        maxHeight: [
                            "50%",
                            "100%"
                        ],
                        position: "relative",
                        display: [
                            "block"
                        ],
                        as: "div",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Image, {
                            src: data?.banner || "",
                            alt: data?.name || "",
                            width: [
                                "100%"
                            ],
                            height: [
                                "100%"
                            ],
                            objectFit: "cover"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                        zIndex: 2,
                        bgColor: colorConstants/* bgThemeColor */.YI[colorMode],
                        py: [
                            0,
                            10
                        ],
                        width: [
                            "100%",
                            "45%"
                        ],
                        overflowY: "scroll",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                            justifyContent: "center",
                            alignItems: "center",
                            p: [
                                6
                            ],
                            pt: [
                                "1rem",
                                "0"
                            ],
                            height: showSuccessMessage ? "-webkit-fill-available" : "unset",
                            children: showSuccessMessage ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Alert, {
                                status: "success",
                                variant: "subtle",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                textAlign: "center",
                                height: "250px",
                                lineHeight: "2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.AlertIcon, {
                                        boxSize: "40px",
                                        mr: 0
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.AlertTitle, {
                                        mt: 5,
                                        mb: 5,
                                        fontSize: "3xl",
                                        color: "green.400",
                                        children: "Registration submitted!"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.AlertDescription, {
                                        maxWidth: "sm",
                                        children: "Thanks for submitting your registration."
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                                maxW: "440px",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                                        textAlign: "center",
                                        py: 8,
                                        fontFamily: "montserrat",
                                        children: data?.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(LeadsForm/* default */.Z, {
                                        campaignId: query.campaignId,
                                        // handleStripe={handleStripe}
                                        redirectUrl: data?.redirectUrl,
                                        form: getFormFields(data?.formData?.form),
                                        paidType: data?.paidType
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    }));
};
async function getStaticPaths() {
    const response = await helpers/* axiosInstance.get */.be.get(`/users/all-campaigns`);
    const urls = response.data.data.map((campaign)=>({
            params: {
                campaignId: campaign.id
            }
        })
    );
    return {
        paths: urls,
        fallback: true
    };
}
async function getStaticProps({ params  }) {
    const response = await helpers/* axiosInstance.get */.be.get(`/users/all-campaigns`);
    const pageData = response.data.data.reduce((acc, campaign)=>({
            ...acc,
            [campaign.id]: campaign
        })
    , {});
    const data = pageData[params.campaignId];
    return {
        props: {
            data: data || {}
        },
        revalidate: 10
    };
}
/* harmony default export */ const _campaignId_ = (CloseFriendsCampaign);


/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

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

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_exports__ = __webpack_require__.X(0, [8081,3814,2341,6089,1767,5843], () => (__webpack_exec__(2279)));
module.exports = __webpack_exports__;

})();