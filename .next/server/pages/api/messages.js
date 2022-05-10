"use strict";
(() => {
var exports = {};
exports.id = 5293;
exports.ids = [5293];
exports.modules = {

/***/ 7202:
/***/ ((module) => {

module.exports = require("twilio");

/***/ }),

/***/ 8721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
const client = __webpack_require__(7202)(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
const service = client.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);
async function handler(req, res) {
    if (req.method === 'POST') {
        const to = req.body.to;
        const body = req.body.body;
        const media_urls = req.body.mediaUrls;
        try {
            // Validate that data were passed from the client.
            if (!to) {
                throw new Error('SMS Receipient was not passed.');
            }
            // Validate that data were passed from the client.
            if (!body) {
                throw new Error('SMS body was not passed.');
            }
            // New Approach: To send SMS to almost 10,000 numbers, the binding approach below work well.
            // See here: https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html
            const bindings = to.map((number)=>{
                return JSON.stringify({
                    binding_type: 'sms',
                    address: number
                });
            });
            // Prev Approach: The below approach works for pretty small number - 100 or so
            // await Promise.all(
            //     to.map(number => {
            //         return client.messages.create({
            //             to: number,
            //             from: process.env.TWILIO_MESSAGING_SERVICE_SID,
            //             body: body
            //         });
            //     })
            // )
            await service.notifications.create({
                toBinding: bindings,
                body: body,
                sms: {
                    media_urls
                }
            });
            res.status(200).json({
                status: 'success',
                sent: true
            });
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
var __webpack_exports__ = (__webpack_exec__(8721));
module.exports = __webpack_exports__;

})();