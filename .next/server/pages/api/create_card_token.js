"use strict";
(() => {
var exports = {};
exports.id = 1734;
exports.ids = [1734];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8174);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);

const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())(process.env.STRIPE_SECRET_KEY, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27'
});
async function handler(req, res) {
    if (req.method === 'POST') {
        const cardNumber = req.body.number;
        const exp_month = req.body.exp_month;
        const exp_year = req.body.exp_year;
        const cvc = req.body.cvc;
        const name = req.body.name;
        const address_line1 = req.body.address_line1;
        const address_line2 = req.body.address_line2;
        const address_state = req.body.address_state;
        const address_zip = req.body.address_zip;
        try {
            // Validate the request body that was passed from the client.
            if (!(cardNumber || exp_month || exp_year || cvc)) {
                throw new Error('Invalid data, please check and try again.');
            }
            const params = {
                card: {
                    number: cardNumber,
                    exp_month,
                    exp_year,
                    cvc,
                    name,
                    address_line1,
                    address_line2,
                    address_state,
                    address_zip
                }
            };
            // Create Checkout token from body params.
            const token = await stripe.tokens.create(params);
            res.status(200).json(token);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Internal server error';
            res.status(500).json({
                statusCode: 500,
                message: errorMessage
            });
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6153));
module.exports = __webpack_exports__;

})();