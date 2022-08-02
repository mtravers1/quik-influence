import { FREE_TEXT_REGEX } from '../regexConstants';

export default [
  {
    name: 'password',
    label: 'Enter a new password',
    errorMessage: 'Enter a valid password',
    required: true,
    type: 'password',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'confirm_password',
    label: 'Please confirm your password',
    errorMessage: 'Enter a valid password',
    required: true,
    type: 'password',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'otp',
    label: 'Enter your reset otp',
    errorMessage: 'Enter your reset otp',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
];
