import {
    CREDIT_CARD_REGEX,
    FREE_TEXT_REGEX,
    FULL_NAME_REGEX,
} from 'utils/constants/regexConstants';

export default [
    {
        name: 'credit',
        label: 'How many credits would you like to add?',
        type: 'number',
        placeholder: '$',
        required: true,
        errorMessage: 'Enter credit to add',
        pattern: FREE_TEXT_REGEX,
        colSpan: 2
    },
    {
        name: 'cardName',
        label: 'Full Name on Card',
        errorMessage: 'Enter Full Name on Card',
        type: 'text',
        placeholder: 'Noah',
        required: true,
        pattern: FULL_NAME_REGEX,
        colSpan: 2

    },
    {
        name: 'cardNumber',
        label: 'Card Number',
        errorMessage: 'Enter a valid card number',
        type: 'number',
        placeholder: "0000 0000 0000 0000",
        required: true,
        pattern: CREDIT_CARD_REGEX,
        colSpan: 2

    },
    {
        name: 'cardIssuer',
        label: 'Card Issuer',
        errorMessage: 'Select Card Issuer',
        type: 'select',
        required: true,
        pattern: FREE_TEXT_REGEX,
        colSpan: 1

    },
    {
        name: 'address1',
        label: 'Address 1',
        type: 'text',
        placeholder: "000 place drive",
        errorMessage: 'Enter your address 1',
        required: true,
        pattern: FREE_TEXT_REGEX,
        colSpan: 2

    },
    {
        name: 'address2',
        label: 'Address 2',
        type: 'text',
        placeholder: "000 place drive",
        errorMessage: '',
        required: false,
        pattern: FREE_TEXT_REGEX,
        colSpan: 2

    },
    {
        name: 'zipCode',
        label: 'Zip Code',
        type: 'text',
        placeholder: "030303",
        errorMessage: 'Enter your zip code',
        required: true,
        pattern: FREE_TEXT_REGEX,
        colSpan: 1

    },
    {
        name: 'state',
        label: 'State',
        type: 'select',
        errorMessage: 'Select a state',
        required: true,
        pattern: FREE_TEXT_REGEX,
        colSpan: 1

    },
];
