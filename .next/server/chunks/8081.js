"use strict";
exports.id = 8081;
exports.ids = [8081];
exports.modules = {

/***/ 3329:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ks": () => (/* binding */ CONTENT_URL),
/* harmony export */   "af": () => (/* binding */ Q_TOKEN),
/* harmony export */   "L8": () => (/* binding */ DEFAULT_PAGE_SIZE),
/* harmony export */   "iz": () => (/* binding */ ADMINS_ID),
/* harmony export */   "Ih": () => (/* binding */ FILE_STATUS),
/* harmony export */   "_r": () => (/* binding */ formDataRelatedToSpecificUser)
/* harmony export */ });
/* unused harmony export headers */
const CONTENT_URL = "/content";
const Q_TOKEN = "_q_inf";
const DEFAULT_PAGE_SIZE = "100";
const ADMINS_ID = [
    2
];
const FILE_STATUS = {
    PENDING: "pending",
    PROCESSING: "processing",
    UPLOADING: "uploading",
    PAUSED: "paused",
    COMPLETED: "completed",
    FAILED: "failed",
    IDLE: "idle"
};
const headers = (/* unused pure expression or super */ null && ([
    "phone",
    "avatar",
    "email",
    "firstName",
    "lastName",
    "address",
    "city",
    "dateOfBirth",
    "instagramId",
    "socialMediaHandle",
    "state",
    "country",
    "postalCode",
    "gender",
    "address2",
    "address3",
    "facebookHandle",
    "tiktokHandle",
    "twitterHandle"
]));
const formDataRelatedToSpecificUser = [
    "updatedAt",
    "twitterHandle",
    "avatar",
    "phone",
    "address2",
    "email",
    "address1",
    "postalCode",
    "socialMediaHandle",
    "lastName",
    "firstName",
    "instagramId",
    "tiktokHandle",
    "address",
    "address3",
    "facebookHandle",
    "gender"
];


/***/ }),

/***/ 8081:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gA": () => (/* binding */ baseurl),
/* harmony export */   "be": () => (/* binding */ axiosInstance),
/* harmony export */   "kS": () => (/* binding */ logout),
/* harmony export */   "Gu": () => (/* binding */ validate),
/* harmony export */   "o4": () => (/* binding */ setToken),
/* harmony export */   "PR": () => (/* binding */ getUser),
/* harmony export */   "hN": () => (/* binding */ getNumberRange),
/* harmony export */   "Wz": () => (/* binding */ getQueryString),
/* harmony export */   "M6": () => (/* binding */ getSocialHandleHeader),
/* harmony export */   "hY": () => (/* binding */ similarity),
/* harmony export */   "kz": () => (/* binding */ stringSearch),
/* harmony export */   "GJ": () => (/* binding */ isAdmin),
/* harmony export */   "Fs": () => (/* binding */ hasPermission),
/* harmony export */   "yL": () => (/* binding */ getReportOpenDate),
/* harmony export */   "eA": () => (/* binding */ getReportUnsub)
/* harmony export */ });
/* unused harmony exports parseJwt, isInViewport, truncateText */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3329);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4146);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);




const baseurl = "https://api.quikinfluence.com";
const axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
    baseURL: `${baseurl}/api/v1`,
    // withCredentials: true,
    headers: {
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Origin, Access-Control-Allow-Headers, Content-Type',
        'Access-Control-Allow-Origin': '*'
    }
});
const logout = ()=>{
    localStorage.removeItem(_constants__WEBPACK_IMPORTED_MODULE_2__/* .Q_TOKEN */ .af);
    window.location.href = '/login';
};
const validate = (field, pattern)=>{
    const parts = /\/(.*)\/(.*)/.exec(pattern) || [];
    let restoredRegex = new RegExp(parts[1], parts[2]);
    if (restoredRegex.test(field)) return true;
    return false;
};
const setToken = (token)=>{
    axiosInstance.defaults.headers.common['token'] = token;
    if (false) {}
};
const tokens = {};
function parseJwt(token) {
    if (!token) return;
    if (tokens[token]) return tokens[token];
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64)// Buffer.from(base64, 'base64')
    .split('').map((c)=>{
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    const result = JSON.parse(jsonPayload);
    tokens[token] = result;
    return result;
}
function getUser() {
    let user;
    let ctoken;
    let isExpired = false;
    if (false) {}
    if (ctoken !== 'null') {
        user = parseJwt(ctoken);
    }
    isExpired = user && user.exp && user.exp < Date.now() / 1000;
    return {
        admin: user,
        token: ctoken,
        isExpired
    };
}
const getNumberRange = (start, stop, step)=>Array.from({
        length: (stop - start) / step + 1
    }, (_, i)=>({
            label: (start + i * step).toString(),
            value: (start + i * step).toString()
        })
    )
;
const getQueryString = (params)=>{
    const paramsFilters = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(params, lodash__WEBPACK_IMPORTED_MODULE_1__.isNil);
    const query = Object.keys(paramsFilters).map((k)=>encodeURIComponent(k) + '=' + encodeURIComponent(paramsFilters[k])
    ).join('&');
    return query;
};
const getSocialHandleHeader = (socialColumns)=>{
    let socialHeader = [];
    socialColumns.forEach((socialColumn)=>{
        switch(socialColumn){
            case 'facebookHandle':
                socialHeader.push('Facebook');
                break;
            case 'twitterHandle':
                socialHeader.push('Twitter');
                break;
            case 'instagramId':
                socialHeader.push('Instagram');
                break;
            case 'tiktokHandle':
                socialHeader.push('Tik Tok');
                break;
            default:
                break;
        }
    });
    return socialHeader;
};
const similarity = (s1, s2)=>{
    let longer = s1;
    let shorter = s2;
    if (s1.length < s2.length) {
        longer = s2;
        shorter = s1;
    }
    let longerLength = longer.length;
    if (longerLength == 0) {
        return 1;
    }
    return (longerLength - editDistance(longer, shorter)) / longerLength;
};
function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();
    let costs = new Array();
    for(let i = 0; i <= s1.length; i++){
        let lastValue = i;
        for(let j = 0; j <= s2.length; j++){
            if (i == 0) costs[j] = j;
            else {
                if (j > 0) {
                    let newValue = costs[j - 1];
                    if (s1.charAt(i - 1) != s2.charAt(j - 1)) newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
                    costs[j - 1] = lastValue;
                    lastValue = newValue;
                }
            }
        }
        if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
}
const stringSearch = (val, string)=>string && string.toLowerCase().search(val.toLowerCase()) !== -1
;
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}
const isAdmin = ()=>{
    const user = getUser();
    return user.admin && _constants__WEBPACK_IMPORTED_MODULE_2__/* .ADMINS_ID.includes */ .iz.includes(user.admin.roleId);
};
const hasPermission = (userPerm, permission)=>{
    if (userPerm?.length === 0) return true;
    return userPerm?.some((perm)=>permission?.includes(perm)
    );
};
const getReportOpenDate = (events)=>{
    if (!events) return 'NA';
    const openEvent = events.find((evt)=>evt['event_name'] === 'open'
    );
    if (!openEvent) return 'Not opened yet';
    return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.format)(new Date(openEvent['processed']), 'dd/MM/yyyy');
};
const getReportUnsub = (events)=>{
    if (!events) return 'NA';
    const unsubEvent = events.find((evt)=>evt['event_name'] === 'unsubscribe'
    );
    if (!unsubEvent) return 'No';
    return 'Yes';
};
const truncateText = (str, num)=>{
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
};


/***/ })

};
;