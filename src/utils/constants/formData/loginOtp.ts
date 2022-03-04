import { EMAIL_REFEX, FREE_TEXT_REGEX } from '../regexConstants';

export default [
  {
    name: 'email',
    label: 'Email Address',
    errorMessage: 'Enter your address',
    required: true,
    type: 'text',
    pattern: EMAIL_REFEX,
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
