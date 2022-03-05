
import { NextApiRequest, NextApiResponse } from 'next'
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {

        const subject: string = req.body.subject
        const to: string = req.body.to
        const body: string = req.body.body

        try {

            // Validate that data were passed from the client.
            if (!to) {
                throw new Error('Email Receipient was not passed.')
            }
            if (!subject) {
                throw new Error('Email Subject was not passed.')
            }

            if (!body) {
                throw new Error('Email body was not passed.')
            }

            const msg = {
                to,
                from: process.env.SENDGRID_VERIFY_SENDER_EMAIL as string, // Change to your verified sender
                subject,
                text: body,
                html: body,
            }

            await sgMail
                .send(msg)

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