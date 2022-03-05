import {
  EMAIL_REFEX,
  FREE_TEXT_REGEX,
  PHONE_NUMBER_REGEX,
} from '../regexConstants';

export default [
  {
    name: 'firstName',
    label: 'First Name',
    errorMessage: 'Enter your first name',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    required: true,
    errorMessage: 'Enter your fisrt number',
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'email',
    label: 'Email Address',
    errorMessage: 'Enter your address',
    required: true,
    type: 'email',
    pattern: EMAIL_REFEX,
  },
  {
    name: 'phone',
    label: 'Phone Number',
    errorMessage: 'Enter your phone',
    required: true,
    type: 'tel',
    pattern: PHONE_NUMBER_REGEX,
  },
  {
    name: 'otp',
    label: 'Please check your email to retrieve your One Time Password (OTP).',
    errorMessage: 'Enter your otp',
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
];
