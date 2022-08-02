import { EMAIL_REFEX } from '../regexConstants';

export default [
  {
    name: 'email',
    label: 'Email Address',
    errorMessage: 'Enter your address',
    required: true,
    type: 'text',
    pattern: EMAIL_REFEX,
  },
];
