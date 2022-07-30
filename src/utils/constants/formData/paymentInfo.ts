import { FREE_TEXT_REGEX, FULL_NAME_REGEX } from '../regexConstants';

export default [
  {
    name: 'accName',
    label: 'Enter an account name',
    errorMessage: 'Enter a valid name',
    type: 'text',
    pattern: FULL_NAME_REGEX,
  },
  {
    name: 'accNo',
    label: 'Enter an account number',
    errorMessage: 'Enter a valid account number',
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'bankName',
    label: 'Enter your bank name',
    errorMessage: 'Enter your bank name',
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'sortCode',
    label: 'Enter your sortcode',
    errorMessage: 'Enter your sort code',
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'instructions',
    label: 'Enter your instructions',
    errorMessage: 'Enter your instructions',
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'isDefault',
    label: 'Set as default account',
    errorMessage: 'Choose a default account',
    type: 'checkbox',
    pattern: FREE_TEXT_REGEX,
  },
];
