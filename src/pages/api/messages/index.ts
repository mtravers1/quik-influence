
import { NextApiRequest, NextApiResponse } from 'next'
const client = require('twilio')(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {

        const to: string = req.body.to
        const body: string = req.body.body

        try {

            // Validate that data were passed from the client.
            if (!to) {
                throw new Error('SMS Receipient was not passed.')
            }

            // Validate that data were passed from the client.
            if (!body) {
                throw new Error('SMS body was not passed.')
            }

            await client.messages
                .create({
                    from: process.env.TWILIO_PHONE_NUMBER,
                    to: req.body.to,
                    body: req.body.body
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