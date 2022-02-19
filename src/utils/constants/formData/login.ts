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
    name: 'loginPassword',
    label: 'Password',
    errorMessage: 'Enter a password',
    required: true,
    type: 'password',
    pattern: FREE_TEXT_REGEX,
  },
];
