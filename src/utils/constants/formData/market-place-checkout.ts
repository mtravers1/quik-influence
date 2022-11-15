import { FREE_TEXT_REGEX, EMAIL_REFEX } from 'utils/constants/regexConstants';

export default [
  {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    errorMessage: 'Enter your address',
    required: true,
    pattern: EMAIL_REFEX,
  },
  // {
  //   name: 'emailMarket',
  //   type: 'checkbox',
  //   label: 'Email me with news and offers',
  //   errorMessage: '',
  //   pattern: FREE_TEXT_REGEX,
  // },
  {
    name: 'country',
    label: 'Country/Region',
    type: 'select',
    errorMessage: 'Enter your country',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    errorMessage: 'Enter your first name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    errorMessage: 'Enter your Last name',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'address',
    label: 'Address',
    type: 'text',
    errorMessage: 'Enter your city',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'city',
    label: 'Town/City',
    type: 'text',
    errorMessage: 'Enter your city',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'state',
    label: 'State',
    type: 'select',
    errorMessage: 'Enter your state',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'postalCode',
    label: 'Postal code',
    type: 'text',
    errorMessage: 'Enter your postal code',
    required: true,
    pattern: FREE_TEXT_REGEX,
  },
  // {
  //   name: 'saveInformation',
  //   label: 'Save this information for next time',
  //   type: 'checkbox',
  //   errorMessage: '',
  //   pattern: FREE_TEXT_REGEX,
  // },
];
