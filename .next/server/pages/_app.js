"use strict";
(() => {
var exports = {};
exports.id = 2888;
exports.ids = [2888];
exports.modules = {

/***/ 4203:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./src/utils/Fonts.tsx


const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_.Global, {
        styles: ` 
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 100;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 200;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 300;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 500;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 600;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        /* cyrillic-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WRhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
        }
        /* cyrillic */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459W1hyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
        }
        /* vietnamese */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WZhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;
        }
        /* latin-ext */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WdhyyTh89ZNpQ.woff2) format('woff2');
          unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
        }
        /* latin */
        @font-face {
          font-family: 'Montserrat';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: url(https://fonts.gstatic.com/s/montserrat/v23/JTUSjIg1_i6t8kCHKm459WlhyyTh89Y.woff2) format('woff2');
          unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
        }
        `
    })
;
/* harmony default export */ const utils_Fonts = (Fonts);

// EXTERNAL MODULE: ./src/utils/helpers.ts
var helpers = __webpack_require__(8081);
// EXTERNAL MODULE: ./src/styles/theme.tsx
var theme = __webpack_require__(9229);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-devtools-extension/logOnly"
const logOnly_namespaceObject = require("redux-devtools-extension/logOnly");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
// EXTERNAL MODULE: ./src/redux/actionTypes.ts
var actionTypes = __webpack_require__(1356);
;// CONCATENATED MODULE: ./src/redux/reducers/nav.ts

const presets = (state = null, action)=>{
    switch(action.type){
        case actionTypes/* CREATE_NAV */.Bl:
            return action.payload;
        default:
            return state;
    }
};
/* harmony default export */ const nav = (presets);

;// CONCATENATED MODULE: ./src/redux/reducers/auth.ts

const initialState = {
    user: null,
    loading: false,
    permissions: []
};
const user = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes/* LOGIN */.ym:
            return {
                ...state,
                user: action.payload
            };
        case actionTypes/* LOGOUT */.Nv:
            return {
                ...initialState
            };
        case actionTypes/* AUTH_LOADING */.zd:
            return {
                ...state,
                loading: action.payload
            };
        case actionTypes/* SET_PERMISSIONS */.mE:
            return {
                ...state,
                permissions: action.payload
            };
        case 'RESET':
            return initialState;
        default:
            return state;
    }
};
/* harmony default export */ const auth = (user);

;// CONCATENATED MODULE: ./src/redux/reducers/campaigns.ts

const campaigns_initialState = {
    campaigns: null,
    SMSCampaign: null,
    loading: true,
    leads: {},
    firstCampaigns: null
};
const campaigns = (state = campaigns_initialState, action)=>{
    switch(action.type){
        case actionTypes/* CAMPAIGNS_LOADING */.pw:
            return {
                ...state,
                loading: action.payload
            };
        case actionTypes/* FIRST_TEN_CAMPAIGNS */.B5:
            return {
                ...state,
                firstCampaigns: action.payload
            };
        case actionTypes/* CAMPAIGNS */.hJ:
            return {
                ...state,
                campaigns: action.payload.rows,
                count: action.payload.count,
                totalPages: action.payload.totalPages,
                currentPage: action.payload.currentPage
            };
        case actionTypes/* GET_CAMPAIGN_LEADS */.$q:
            return {
                ...state,
                leads: {
                    [action.payload.campaignId]: action.payload.leads
                }
            };
        case actionTypes/* GET_SINGLE_CAMPAIGN */.t8:
            return {
                ...state,
                currentCampaign: action.payload
            };
        case actionTypes/* SET_SMS_CAMPAIGN */.cZ:
            return {
                ...state,
                SMSCampaign: action.payload
            };
        case actionTypes/* UPDATE_CAMPAIGN */.tY:
            return {
                ...state,
                campaigns: (state.campaigns || [])?.map((campaign)=>{
                    if (campaign.id === action.payload.campaignId) {
                        return {
                            ...campaign,
                            ...action.payload.rows
                        };
                    }
                    return campaign;
                })
            };
        case actionTypes/* ARCHIVE_CAMPAIGN */.kS:
            return {
                ...state,
                campaigns: (state.campaigns || [])?.filter((campaign)=>campaign.id !== action.payload
                )
            };
        case actionTypes/* CAMPAIGNS_ERROR */.S0:
            return {
                ...state,
                error: action.payload,
                loading: state.loading
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_campaigns = (campaigns);

;// CONCATENATED MODULE: ./src/redux/reducers/generals.ts

const generals = (state = {
    formData: undefined,
    tags: undefined
}, action)=>{
    switch(action.type){
        case actionTypes/* CREATE_FORM_DATA */.Ng:
            return {
                ...state,
                formData: action.payload
            };
        case actionTypes/* CREATE_TAGS */.qE:
            return {
                ...state,
                tags: action.payload
            };
        case actionTypes/* ADD_TAGS */.bo:
            return {
                ...state,
                tags: [
                    ...state.tags || [],
                    action.payload
                ]
            };
        default:
            return state;
    }
};
/* harmony default export */ const reducers_generals = (generals);

;// CONCATENATED MODULE: ./src/redux/reducers/leads.ts

const leads_initialState = {
    allLeads: null,
    loading: true
};
const leads_campaigns = (state = leads_initialState, action)=>{
    switch(action.type){
        case actionTypes/* LEADS_LOADING */.Vk:
            return {
                ...state,
                loading: action.payload
            };
        case actionTypes/* LEADS */.vi:
            return {
                ...state,
                allLeads: action.payload
            };
        // case GET_SINGLE_LEAD:
        //   return {
        //     ...state,
        //     currentLead: action.payload,
        //   };
        // case UPDATE_LEADS:
        //   return {
        //     ...state,
        //     leads: (state.leads || [])?.map((leads: any) => {
        //       if (leads.id === action.payload.leadsId) {
        //         return { ...leads, ...action.payload.data };
        //       }
        //       return leads;
        //     }),
        //   };
        // case ARCHIVE_LEADS:
        //   return {
        //     ...state,
        //     leads: (state.leads || [])?.filter(
        //       (lead: any) => lead.id !== action.payload
        //     ),
        //   };
        case actionTypes/* LEADS_ERROR */.$W:
            return {
                ...state,
                error: action.payload,
                loading: state.loading
            };
        default:
            return state;
    }
};
/* harmony default export */ const leads = (leads_campaigns);

;// CONCATENATED MODULE: ./src/redux/reducers/index.ts






const reducers = (0,external_redux_namespaceObject.combineReducers)({
    nav: nav,
    auth: auth,
    campaigns: reducers_campaigns,
    leads: leads,
    generals: reducers_generals
});
/* harmony default export */ const redux_reducers = (reducers);

;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: external "redux-logger"
const external_redux_logger_namespaceObject = require("redux-logger");
;// CONCATENATED MODULE: ./src/store.ts






let middleware = [];
if (false) {} else middleware = [
    (external_redux_thunk_default())
];
const makeStore = (context)=>(0,external_redux_namespaceObject.createStore)(redux_reducers,  false ? 0 : (0,external_redux_namespaceObject.applyMiddleware)(...middleware))
;
// const debug = process.env.NODE_ENV;
const debug = false;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore, {
    debug
});

// EXTERNAL MODULE: ./src/utils/constants/index.ts
var constants = __webpack_require__(3329);
// EXTERNAL MODULE: ./src/utils/constants/pageDataConstants.ts
var pageDataConstants = __webpack_require__(6385);
// EXTERNAL MODULE: ./src/redux/actions/auth.ts
var actions_auth = __webpack_require__(3821);
// EXTERNAL MODULE: ./src/redux/actions/general.ts
var general = __webpack_require__(6099);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
















function QuikInfluenceApp({ Component , pageProps  }) {
    const queryClient = new external_react_query_namespaceObject.QueryClient({
        defaultOptions: {
            queries: {}
        }
    });
    const dispatch = (0,external_react_redux_.useDispatch)();
    const { 0: loading , 1: setLoading  } = (0,external_react_.useState)(true);
    const router = (0,router_.useRouter)();
    const runBeforeLoad = async ()=>{
        dispatch((0,general/* createFormData */.ki)(pageProps?.formData));
        dispatch((0,general/* createTags */.E0)(pageProps?.tags));
        setLoading(true);
        dispatch((0,actions_auth/* login */.x4)());
        setLoading(false);
    };
    (0,external_react_.useEffect)(()=>{
        runBeforeLoad();
        helpers/* axiosInstance.interceptors.response.use */.be.interceptors.response.use((res)=>{
            return res;
        }, (err)=>{
            if (err.response.status === 401 && router.asPath !== '/') {
                localStorage.removeItem('_q_inf');
                router.push(`/login?redirect=${router.asPath}`);
            }
            return Promise.reject(err);
        });
    }, []);
    return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: loading ? /*#__PURE__*/ jsx_runtime_.jsx("div", {}) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
            theme: theme/* default */.Z,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(utils_Fonts, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_namespaceObject.QueryClientProvider, {
                    client: queryClient,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    })
                })
            ]
        })
    }));
}
QuikInfluenceApp.getInitialProps = async ()=>{
    if (true) {
        let nav;
        let formData;
        let tags;
        try {
            nav = await helpers/* axiosInstance.get */.be.get(`${constants/* CONTENT_URL */.ks}?resource=${pageDataConstants/* APP_NAME */.iC}&page=${pageDataConstants/* NAV_NAME */.Qp}`);
            formData = await helpers/* axiosInstance.get */.be.get(`/admin/form-element`);
            tags = await helpers/* axiosInstance.get */.be.get('/admin/tag');
        } catch (err) {
            console.log(err);
        }
        return {
            pageProps: {
                nav: nav?.data?.data,
                formData: formData?.data.data,
                tags: tags?.data.data
            }
        };
    }
    return {};
};
/* harmony default export */ const _app = (wrapper.withRedux(QuikInfluenceApp));


/***/ }),

/***/ 6099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ki": () => (/* binding */ createFormData),
/* harmony export */   "E0": () => (/* binding */ createTags),
/* harmony export */   "zl": () => (/* binding */ addTags)
/* harmony export */ });
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1356);

const createFormData = (data)=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CREATE_FORM_DATA */ .Ng,
            payload: data
        });
    }
;
const createTags = (data)=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .CREATE_TAGS */ .qE,
            payload: data
        });
    }
;
const addTags = (data)=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__/* .ADD_TAGS */ .bo,
            payload: data
        });
    }
;


/***/ }),

/***/ 6385:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8081,3821,9229], () => (__webpack_exec__(4203)));
module.exports = __webpack_exports__;

})();