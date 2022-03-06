import {
  faPhone,
  faUser,
  faMailBulk,
  faAt,
} from '@fortawesome/free-solid-svg-icons';

import {
  PHONE_NUMBER_REGEX,
  FREE_TEXT_REGEX,
  EMAIL_REFEX,
  NUMBER_REGEX,
} from 'utils/constants/regexConstants';

export default [
  {
    name: 'firstName',
    label: 'First Name',
    icon: faUser,
    errorMessage: 'Enter your First name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    icon: faUser,
    errorMessage: 'Enter your last name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'phone',
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
  {
    name: 'instagramId',
    label: 'Your Instagram handle',
    icon: faAt,
    errorMessage: 'Enter your instagram handle',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'facebookHandle',
    label: 'Your Facebook profile',
    icon: faAt,
    errorMessage: 'Enter your facebook profile',
    required: false,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'tiktokHandle',
    label: 'Your Tiktok handle',
    icon: faAt,
    errorMessage: 'Enter your tiktok handle',
    required: false,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'twitterHandle',
    label: 'Your twitter Handle',
    icon: faAt,
    errorMessage: 'Enter your twitter handle',
    required: false,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'age',
    label: 'Age',
    icon: faUser,
    errorMessage: 'Please add your age',
    required: true,
    pattern: NUMBER_REGEX,
  },
];
