import {
    faPhone,
    faUser,
    faMailBulk,
    faAt,
    faAddressBook,
    faBirthdayCake,
    faCity,
    faCode,
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
      type: 'text',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'lastName',
      label: 'Last Name',
      icon: faUser,
      errorMessage: 'Enter your last name',
      required: true,
      type: 'string',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'phone',
      label: 'Phone Number',
      icon: faPhone,
      required: true,
      type: 'text',
      errorMessage: 'Enter your phone number',
      pattern: PHONE_NUMBER_REGEX,
    },
    {
      name: 'email',
      label: 'Your Email Address',
      icon: faMailBulk,
      errorMessage: 'Enter your address',
      required: true,
      type: 'text',
      pattern: EMAIL_REFEX,
    },
    {
      name: 'dateOfBirth',
      label: 'Date of Birth',
      icon: faBirthdayCake,
      errorMessage: 'Enter your date of birth',
      required: true,
      type: 'date',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'address',
      label: 'Adress 1',
      icon: faAddressBook,
      errorMessage: 'Enter your address',
      required: true,
      type: 'text',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'address2',
      label: 'Adress 2',
      icon: faAddressBook,
      errorMessage: 'Enter your address',
      required: false,
      type: 'text',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'address3',
      label: 'Adress 3',
      icon: faAddressBook,
      errorMessage: 'Enter your address',
      required: false,
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'city',
      label: 'City',
      icon: faCity,
      errorMessage: 'Enter your city',
      required: true,
      type: 'text',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'state',
      label: 'State',
      icon: faCity,
      errorMessage: 'Enter your state',
      required: true,
      type: 'text',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'zipCode',
      label: 'Zip code',
      icon: faCode,
      errorMessage: 'Enter your zip code',
      required: true,
      type: 'number',
      pattern: FREE_TEXT_REGEX,
    },
    {
      name: 'gender',
      label: 'Gender',
      icon: faUser,
      errorMessage: 'Please select a gender',
      required: true,
      type: 'select',
      options: ['male', 'female', 'other'],
      pattern: FREE_TEXT_REGEX,
    },
  ];
  