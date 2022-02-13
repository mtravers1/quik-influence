import { faPhone, faUser, faMailBulk } from '@fortawesome/free-solid-svg-icons';

export default [
  {
    name: 'phoneNumber',
    label: 'Phone Number',
    icon: faPhone,
    required: true,
    errorMessage: 'Enter your phone number',
  },
  {
    name: 'isInfluencer',
    label: 'Are You an Influencer',
    icon: faPhone,
  },
  {
    name: 'name',
    label: 'Your Name',
    icon: faUser,
    errorMessage: 'Enter your full name',
    required: true,
  },
  {
    name: 'company',
    label: 'Company Name',
    icon: faUser,
    errorMessage: 'Enter your company name',
    required: true,
  },
  {
    name: 'email',
    label: 'Your Email Address',
    icon: faMailBulk,
    errorMessage: 'Enter your address',
    required: true,
  },
  {
    name: 'industry',
    label: 'Industry',
    icon: faMailBulk,
    errorMessage: 'Enter your industry',
  },
];