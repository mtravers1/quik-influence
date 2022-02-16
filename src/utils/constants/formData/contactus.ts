import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  PHONE_NUMBER_REGEX,
  FULL_NAME_REGEX,
  EMAIL_REFEX,
} from 'utils/constants/regexConstants';

export default [
  {
    name: 'name',
    label: 'Your Name',
    icon: faUser,
    errorMessage: 'Enter your full name',
    required: true,
    pattern: FULL_NAME_REGEX,
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    icon: faPhone,
    required: true,
    errorMessage: 'Enter your phone number',
    pattern: PHONE_NUMBER_REGEX,
  },
  {
    name: 'email',
    label: 'Your Email Address',
    icon: faMailBulk,
    errorMessage: 'Enter your address',
    required: true,
    pattern: EMAIL_REFEX,
  },
];
