import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';

export default [
  {
    name: 'name',
    label: 'Your Name',
    icon: faUser,
    errorMessage: 'Enter your full name',
    required: true,
  },
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    icon: faPhone,
    required: true,
    errorMessage: 'Enter your phone number',
  },
  {
    name: 'email',
    label: 'Your Email Address',
    icon: faMailBulk,
    errorMessage: 'Enter your address',
    required: true,
  },
];