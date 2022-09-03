import { FREE_TEXT_REGEX } from '../regexConstants';

export default [
  {
    name: 'name',
    label: 'Enter the name of product',
    errorMessage: 'Enter name',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'description',
    label: 'Please enter the description',
    errorMessage: 'Enter label',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'price',
    label: 'Price ( $ )',
    errorMessage: '',
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'payoutAmount',
    label: 'Payout Amount ( $ )',
    errorMessage: '',
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },

  {
    name: 'weight',
    label: 'Weight ( kg )',
    errorMessage: 'Incorrect',
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'width',
    label: 'Width ( in )',
    errorMessage: '',
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'length',
    label: 'Length ( in )',
    errorMessage: '',
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'height',
    label: 'Height ( in )',
    errorMessage: '',
    required: true,
    type: 'number',
    pattern: FREE_TEXT_REGEX,
  },
];
