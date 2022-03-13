import {
    FREE_TEXT_REGEX,
} from 'utils/constants/regexConstants';

export default [
    {
        name: 'message',
        label: 'Message',
        type: 'textarea',
        placeholder: "Welcome to Quik Session! Here you will find all the information you need to get settled in within the app.Did you know that there are over 3000 studios Listed on quiksession? You have access to all of the m with one click.Visit www.wuiksession.com or enter the app to explore all of the possibilities!",
        required: true,
        errorMessage: 'Enter message',
        pattern: FREE_TEXT_REGEX,
    },

];
