import { EMAIL_REFEX, FREE_TEXT_REGEX } from '../regexConstants';

export default [
    {
        name: 'name',
        label: 'Campaign Name',
        errorMessage: 'Enter your campaign name',
        required: true,
        type: 'text',
        pattern: FREE_TEXT_REGEX,
    },
    {
        name: 'description',
        label: 'Campaign Description',
        errorMessage: 'Describe your campaign',
        required: true,
        type: 'text',
        pattern: FREE_TEXT_REGEX,
    },
    {
        name: 'startDate',
        label: 'Campaign Start Date',
        errorMessage: 'Enter your campaign name',
        required: true,
        type: 'date',
        pattern: FREE_TEXT_REGEX,
    },
    {
        name: 'paymentType',
        label: 'Payment Type',
        errorMessage: 'Select payment type',
        required: true,
        type: 'select',
        options: [
            { label: 'Paid', value: 'paid' },
            { label: 'Unpaid', value: 'unpaid' },
        ],
        pattern: FREE_TEXT_REGEX,
    },
    {
        name: 'type',
        label: 'Campaign Type',
        errorMessage: 'Enter your campaign type',
        required: true,
        disabled: true,
        type: 'multi-select',
        options: [
            { label: 'Direct', value: 'direct' },
        ],
        pattern: FREE_TEXT_REGEX,
        extraLabel: '(add as many as apply)'
    },
    {
        name: 'audience',
        label: 'Select Audience Interest',
        errorMessage: 'Enter your audience name',
        required: false,
        disabled: true,
        type: 'multi-select',
        options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },],
        pattern: FREE_TEXT_REGEX,
        extraLabel: '(add as many as apply)'
    },
    {
        name: 'adSpend',
        label: 'Ad Spend',
        disabled: true,
        extraLabel: 'Select daily spending for your campaign',
        errorMessage: 'Enter your ad spend',
        required: true,
        type: 'range-selector',
        ranges: [
            {
                title: 'Spend per Day',
                min: 10,
                max: 1000,
                isMoney: true
            },
            {
                title: 'Number of days',
                min: 1,
                max: 365,
                isMoney: false
            },
        ]

    },
    {
        name: 'formFields',
        label: 'Select Form Fields',
        errorMessage: 'Enter your form fields',
        required: true,
        type: 'multi-select',
        options: [
            { label: 'First Name', value: 'firstName' },
            { label: 'Last Name', value: 'lastName' },
            { label: 'Phone', value: 'phone' },
            { label: 'Email Address', value: 'email' },
            { label: 'Instagram Handle', value: 'instagramId' },
            { label: 'Age', value: 'age' },
        ],
        pattern: FREE_TEXT_REGEX,
        extraLabel: '(add as many as apply)'
    },

    {
        name: 'redirectUrl',
        label: 'Redirect Url',
        errorMessage: 'enter the redirect URL',
        required: true,
        type: 'text',
        pattern: FREE_TEXT_REGEX,
    },
];
