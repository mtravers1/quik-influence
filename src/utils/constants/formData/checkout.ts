import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  FREE_TEXT_REGEX,
  PHONE_NUMBER_REGEX,
  FULL_NAME_REGEX,
  EMAIL_REFEX,
} from 'utils/constants/regexConstants';

export default [
  {
    name: 'firstName',
    label: 'First Name *',
    type: 'text',
    errorMessage: 'Enter your first name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'lastName',
    label: 'Last Name *',
    type: 'text',
    errorMessage: 'Enter your Last name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'email',
    label: 'Email Address *',
    type: 'email',
    errorMessage: 'Enter your address',
    required: true,
    pattern: EMAIL_REFEX,
  },
  {
    name: 'phone',
    label: 'Phone *',
    type: 'phone',
    errorMessage: 'Enter your phone',
    required: true,
    pattern: PHONE_NUMBER_REGEX,
  },
  {
    name: 'address',
    label: 'Address *',
    type: 'text',
    errorMessage: 'Enter your city',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'city',
    label: 'Town/City *',
    type: 'text',
    errorMessage: 'Enter your city',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'state',
    label: 'State *',
    type: 'select',
    errorMessage: 'Enter your state',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'country',
    label: 'Country *',
    type: 'select',
    errorMessage: 'Enter your country',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
];
