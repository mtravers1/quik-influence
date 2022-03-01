
import { NextApiRequest, NextApiResponse } from 'next'

import { CURRENCY, MIN_AMOUNT, MAX_AMOUNT } from 'utils/stripeConfig'
import { formatAmountForStripe } from 'utils/stripeHelpers'


import Stripe from 'stripe'
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    // https://github.com/stripe/stripe-node#configuration
    apiVersion: '2020-08-27',
})

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === 'POST') {
        const amount: number = req.body.amount
        const token: string = req.body.token
        const receipt_email: string = req.body.receipt_email
        try {
            // Validate the amount that was passed from the client.
            if (!(amount >= MIN_AMOUNT && amount <= MAX_AMOUNT)) {
                throw new Error('Invalid amount.')
            }

            // Validate that token was passed from the client.
            if (!token) {
                throw new Error('Token was not passed.')
            }
            // Create Charge from body params.
            const params: Stripe.ChargeCreateParams = {
                amount: amount,
                currency: CURRENCY,
                source: token,
                receipt_email
            }


            const charge: Stripe.Charge = await stripe.charges.create(params);

            res.status(200).json(charge)
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