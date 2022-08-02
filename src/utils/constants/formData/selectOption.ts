import { FREE_TEXT_REGEX } from '../regexConstants';

export default [
  {
    name: 'label',
    errorMessage: 'Enter a label',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
    label: 'Label',
  },
  {
    name: 'value',
    label: 'Value',
    errorMessage: 'Enter a value',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
];
