
import { NextApiRequest, NextApiResponse } from 'next'
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
const service = client.notify.services(process.env.TWILIO_NOTIFY_SERVICE_SID);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {

        const to: string[] = req.body.to
        const body: string = req.body.body
        const media_urls: string[] = req.body.mediaUrls

        try {

            // Validate that data were passed from the client.
            if (!to) {
                throw new Error('SMS Receipient was not passed.')
            }

            // Validate that data were passed from the client.
            if (!body) {
                throw new Error('SMS body was not passed.')
            }

            // New Approach: To send SMS to almost 10,000 numbers, the binding approach below work well.
            // See here: https://www.twilio.com/blog/2017/12/send-bulk-sms-twilio-node-js.html

            const bindings = to.map(number => {
                return JSON.stringify({ binding_type: 'sms', address: number });
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
            await service.notifications
                .create({
                    toBinding: bindings,
                    body: body,
                    sms: { media_urls }
                })

            res.status(200).json({ status: 'success', sent: true })
        } catch (err) {
            const errorMessage =
                err instanceof Error ? err.message : 'Internal server error'
            res.status(500).json({ statusCode: 500, message: errorMessage })
        }
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}