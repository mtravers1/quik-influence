"use strict";
(() => {
var exports = {};
exports.id = 605;
exports.ids = [605];
exports.modules = {

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 7096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: ./src/utils/stripeConfig.ts
const CURRENCY = 'usd';
// Set your amount limits: Use float for decimal currencies and
// Integer for zero-decimal currencies: https://stripe.com/docs/currencies#zero-decimal.
const MIN_AMOUNT = 10;
const MAX_AMOUNT = 5000;
const AMOUNT_STEP = 5;

// EXTERNAL MODULE: external "stripe"
var external_stripe_ = __webpack_require__(8174);
var external_stripe_default = /*#__PURE__*/__webpack_require__.n(external_stripe_);
;// CONCATENATED MODULE: ./src/pages/api/create_charge/index.ts


const stripe = new (external_stripe_default())(process.env.STRIPE_SECRET_KEY, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27'
});
async function handler(req, res) {
    if (req.method === 'POST') {
        const amount = req.body.amount;
        const token = req.body.token;
        const receipt_email = req.body.receipt_email;
        try {
            // Validate the amount that was passed from the client.
            if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
                throw new Error('Invalid amount.');
            }
            // Validate that token was passed from the client.
            if (!token) {
                throw new Error('Token was not passed.');
            }
            // Create Charge from body params.
            const params = {
                amount: amount,
                currency: CURRENCY,
                source: token,
                receipt_email
            };
            const charge = await stripe.charges.create(params);
            res.status(200).json(charge);
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
var __webpack_exports__ = (__webpack_exec__(7096));
module.exports = __webpack_exports__;

})();