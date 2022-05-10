"use strict";
(() => {
var exports = {};
exports.id = 5402;
exports.ids = [5402];
exports.modules = {

/***/ 4562:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@sendgrid/mail"
const mail_namespaceObject = require("@sendgrid/mail");
var mail_default = /*#__PURE__*/__webpack_require__.n(mail_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/send_email/index.ts

mail_default().setApiKey(process.env.SENDGRID_API_KEY);
async function handler(req, res) {
    if (req.method === 'POST') {
        const subject = req.body.subject;
        const to = req.body.to;
        const body = req.body.body;
        try {
            // Validate that data were passed from the client.
            if (!to) {
                throw new Error('Email Receipient was not passed.');
            }
            if (!subject) {
                throw new Error('Email Subject was not passed.');
            }
            if (!body) {
                throw new Error('Email body was not passed.');
            }
            const msg = {
                to,
                from: process.env.SENDGRID_VERIFY_SENDER_EMAIL,
                subject,
                text: body,
                html: body
            };
            await mail_default().sendMultiple(msg);
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
var __webpack_exports__ = (__webpack_exec__(4562));
module.exports = __webpack_exports__;

})();