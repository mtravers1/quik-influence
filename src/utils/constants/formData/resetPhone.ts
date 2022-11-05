import { PHONE_NUMBER_REGEX } from '../regexConstants';

export default [
  {
    name: 'phone',
    label: 'Phone Number',
    errorMessage: 'Enter your phone number',
    required: true,
    type: 'text',
    pattern: PHONE_NUMBER_REGEX,
  },
];
