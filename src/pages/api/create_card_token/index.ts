import { NextApiRequest, NextApiResponse } from 'next'

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
        const cardNumber: string = req.body.number
        const exp_month: string = req.body.exp_month
        const exp_year: string = req.body.exp_year
        const cvc: string = req.body.cvc
        const name: string = req.body.name
        const address_line1: string = req.body.address_line1
        const address_line2: string = req.body.address_line2
        const address_state: string = req.body.address_state
        const address_zip: string = req.body.address_zip

        try {
            // Validate the request body that was passed from the client.
            if (!(cardNumber || exp_month || exp_year || cvc)) {
                throw new Error('Invalid data, please check and try again.')
            }

            const params: Stripe.TokenCreateParams = {
                card: {
                    number: cardNumber,
                    exp_month,
                    exp_year,
                    cvc,
                    name,
                    address_line1,
                    address_line2,
                    address_state,
                    address_zip,
                }
            }
            // Create Checkout token from body params.
            const token = await stripe.tokens.create(params);


            res.status(200).json(token)
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