import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';
import {
  PHONE_NUMBER_REGEX,
  FREE_TEXT_REGEX,
  FULL_NAME_REGEX,
  EMAIL_REFEX,
} from 'utils/constants/regexConstants';

export default [
  {
    name: 'phone',
    label: 'Phone Number',
    icon: faPhone,
    required: true,
    errorMessage: 'Enter your phone number',
    pattern: PHONE_NUMBER_REGEX,
  },
  {
    name: 'isInfluencer',
    label: 'Are You an Influencer',
    icon: faPhone,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'name',
    label: 'Your Name',
    icon: faUser,
    errorMessage: 'Enter your full name',
    required: true,
    pattern: FULL_NAME_REGEX,
  },
  {
    name: 'company',
    label: 'Company Name',
    icon: faUser,
    errorMessage: 'Enter your company name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'email',
    label: 'Your Email Address',
    icon: faMailBulk,
    errorMessage: 'Enter your address',
    required: true,
    pattern: EMAIL_REFEX,
  },
  {
    name: 'industry',
    label: 'Industry',
    icon: faMailBulk,
    errorMessage: 'Enter your industry',
    pattern: FREE_TEXT_REGEX,
  },
];
