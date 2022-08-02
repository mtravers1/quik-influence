import { EMAIL_REFEX, FREE_TEXT_REGEX } from '../regexConstants';

export default [
  {
    name: 'phone',
    label: 'Phone Number',
    errorMessage: '',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
    disabled: true,
  },
  {
    name: 'otp',
    label: 'Please check your email to retrieve your One Time Password (OTP).',
    errorMessage: 'Enter an Otp',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
];
