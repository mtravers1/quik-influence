"use strict";
exports.id = 3821;
exports.ids = [3821];
exports.modules = {

/***/ 1356:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bl": () => (/* binding */ CREATE_NAV),
/* harmony export */   "zd": () => (/* binding */ AUTH_LOADING),
/* harmony export */   "ym": () => (/* binding */ LOGIN),
/* harmony export */   "Nv": () => (/* binding */ LOGOUT),
/* harmony export */   "pw": () => (/* binding */ CAMPAIGNS_LOADING),
/* harmony export */   "hJ": () => (/* binding */ CAMPAIGNS),
/* harmony export */   "S0": () => (/* binding */ CAMPAIGNS_ERROR),
/* harmony export */   "t8": () => (/* binding */ GET_SINGLE_CAMPAIGN),
/* harmony export */   "tY": () => (/* binding */ UPDATE_CAMPAIGN),
/* harmony export */   "kS": () => (/* binding */ ARCHIVE_CAMPAIGN),
/* harmony export */   "cZ": () => (/* binding */ SET_SMS_CAMPAIGN),
/* harmony export */   "$q": () => (/* binding */ GET_CAMPAIGN_LEADS),
/* harmony export */   "B5": () => (/* binding */ FIRST_TEN_CAMPAIGNS),
/* harmony export */   "Vk": () => (/* binding */ LEADS_LOADING),
/* harmony export */   "$W": () => (/* binding */ LEADS_ERROR),
/* harmony export */   "vi": () => (/* binding */ LEADS),
/* harmony export */   "Ng": () => (/* binding */ CREATE_FORM_DATA),
/* harmony export */   "qE": () => (/* binding */ CREATE_TAGS),
/* harmony export */   "bo": () => (/* binding */ ADD_TAGS),
/* harmony export */   "mE": () => (/* binding */ SET_PERMISSIONS)
/* harmony export */ });
/* unused harmony export RESET */
const CREATE_NAV = 'CREATE_NAV';
const AUTH_LOADING = 'AUTH_LOADING';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
const RESET = 'RESET';
const CAMPAIGNS_LOADING = 'CAMPAIGNS_LOADING';
const CAMPAIGNS = 'CAMPAIGNS';
const CAMPAIGNS_ERROR = 'CAMPAIGNS_ERROR';
const GET_SINGLE_CAMPAIGN = 'GET_SINGLE_CAMPAIGN';
const UPDATE_CAMPAIGN = 'UPDATE_CAMPAIGN';
const ARCHIVE_CAMPAIGN = 'ARCHIVE_CAMPAIGN';
const SET_SMS_CAMPAIGN = 'SET_SMS_CAMPAIGN';
const GET_CAMPAIGN_LEADS = 'GET_CAMPAIGN_LEADS';
const FIRST_TEN_CAMPAIGNS = 'FIRST_TEN_CAMPAIGNS';
const LEADS_LOADING = 'LEADS_LOADING';
const LEADS_ERROR = 'LEADS_ERROR';
const LEADS = 'LEADS';
const CREATE_FORM_DATA = 'CREATE_FORM_DATA';
const CREATE_TAGS = 'CREATE_TAGS';
const ADD_TAGS = 'ADD_TAGS';
const SET_PERMISSIONS = 'SET_PERMISSIONS';


/***/ }),

/***/ 3821:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x4": () => (/* binding */ login),
/* harmony export */   "$h": () => (/* binding */ getUserPermissions),
/* harmony export */   "kS": () => (/* binding */ logout)
/* harmony export */ });
/* unused harmony exports loading, doneloading */
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1356);


const loading = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_LOADING */ .zd,
            payload: true
        });
    }
;
const doneloading = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .AUTH_LOADING */ .zd,
            payload: false
        });
    }
;
const login = (userData)=>async (dispatch)=>{
        dispatch(loading());
        let user = userData;
        if (!user) {
            // call for re-authentication
            user = (0,utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .getUser */ .PR)();
        }
        user && (0,utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .setToken */ .o4)(user.token);
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LOGIN */ .ym,
            payload: user
        });
        dispatch(doneloading());
    }
;
const getUserPermissions = ()=>async (dispatch)=>{
        try {
            let url = "/auth/permissions/admin";
            const response = await utils_helpers__WEBPACK_IMPORTED_MODULE_0__/* .axiosInstance.get */ .be.get(url);
            const { permissions  } = response.data.data;
            dispatch({
                type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .SET_PERMISSIONS */ .mE,
                payload: permissions
            });
        } catch (error) {
            console.log(error);
        }
    }
;
const logout = ()=>async (dispatch)=>{
        dispatch({
            type: _actionTypes__WEBPACK_IMPORTED_MODULE_1__/* .LOGOUT */ .Nv
        });
    }
;


/***/ })

};
;