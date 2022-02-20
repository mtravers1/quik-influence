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
        name: 'startDate',
        label: 'Campaign Start Date',
        errorMessage: 'Enter your campaign name',
        required: true,
        type: 'date',
        pattern: FREE_TEXT_REGEX,
    },
    {
        name: 'type',
        label: 'Campaign Type',
        errorMessage: 'Enter your campaign type',
        required: true,
        type: 'multi-select',
        options: [
            { label: 'Male', value: 'male' },
            { label: 'Female', value: 'female' },
            { label: 'Other', value: 'other' },],
        pattern: FREE_TEXT_REGEX,
        extraLabel: '(add as many as apply)'
    },
    {
        name: 'audience',
        label: 'Select Audience Interest',
        errorMessage: 'Enter your audience name',
        required: true,
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
        extraLabel: 'Select daily spending for your campaign',
        errorMessage: 'Enter your ad spend',
        required: true,
        type: 'range-selector',
        ranges: [
            {
                title: 'Spend per Day',
                min: 10,
                max: 1000
            },
            {
                title: 'Number of days',
                min: 1,
                max: 365
            },
        ]

    }
];
