import {
  CLOSED,
  DIRECT,
  DRIP,
  OPEN,
  PAID,
  SCHEDULED,
  UNPAID,
} from '../formConstants';
import { FREE_TEXT_REGEX, NUMBER_REGEX, URL_REGEX } from '../regexConstants';

export default [
  {
    name: 'name',
    label: 'Campaign Name',
    errorMessage: 'Enter your campaign name',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'description',
    label: 'Campaign Description',
    errorMessage: 'Describe your campaign',
    required: true,
    type: 'text',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'status',
    label: 'Campaign Status',
    required: true,
    errorMessage: 'Select a campaign status',
    type: 'select',
    options: [
      { label: 'OPEN', value: OPEN },
      { label: 'CLOSED', value: CLOSED },
      //   { label: 'DRIP', value: DRIP },
      //   { label: 'SCHEDULED', value: SCHEDULED },
    ],
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'campaignDate',
    label: 'Campaign Start Date',
    errorMessage: 'Enter your campaign start date',
    required: true,
    type: 'date',
    pattern: FREE_TEXT_REGEX,
  },
  // {
  //     name: 'type',
  //     label: 'Campaign Type',
  //     errorMessage: 'Enter your campaign type',
  //     required: true,
  //     disabled: true,
  //     type: 'multi-select',
  //     options: [
  //         { label: 'Direct', value: 'direct' },
  //     ],
  //     pattern: FREE_TEXT_REGEX,
  //     extraLabel: '(add as many as apply)'
  // },
  // {
  //     name: 'audience',
  //     label: 'Select Audience Interest',
  //     errorMessage: 'Enter your audience name',
  //     required: false,
  //     disabled: true,
  //     type: 'multi-select',
  //     options: [
  //         { label: 'Male', value: 'male' },
  //         { label: 'Female', value: 'female' },
  //         { label: 'Other', value: 'other' },],
  //     pattern: FREE_TEXT_REGEX,
  //     extraLabel: '(add as many as apply)'
  // },
  // {
  //     name: 'adSpend',
  //     label: 'Ad Spend',
  //     disabled: true,
  //     extraLabel: 'Select daily spending for your campaign',
  //     errorMessage: 'Enter your ad spend',
  //     required: true,
  //     type: 'range-selector',
  //     pattern: FREE_TEXT_REGEX,
  //     ranges: [
  //         {
  //             title: 'Spend per Day',
  //             min: 10,
  //             max: 1000,
  //             isMoney: true
  //         },
  //         {
  //             title: 'Number of days',
  //             min: 1,
  //             max: 365,
  //             isMoney: false
  //         },
  //     ]

  // },
  {
    name: 'formData',
    label: 'Select Form Fields',
    errorMessage: 'Enter your form fields',
    required: false,
    disabled: false,
    ranges: [],
    type: 'multi-select',
    pattern: FREE_TEXT_REGEX,
    extraLabel: '(add as many as apply)',
  },

  {
    name: 'redirectUrl',
    label: 'Redirect Url',
    errorMessage: 'Enter a valid URL e.g: http://test.com/something',
    required: false,
    type: 'text',
    pattern: URL_REGEX,
  },
  // {
  //   name: 'postingDocUrl',
  //   label: 'Posting Doc Url',
  //   errorMessage: 'Enter a valid URL e.g: http://test.com/something',
  //   required: false,
  //   type: 'text',
  //   pattern: URL_REGEX,
  // },
  {
    name: 'banner',
    label: 'Campaign Banner',
    errorMessage: 'Upload campaign banner',
    required: true,
    type: 'image-upload',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'isJoinable',
    label: 'Is this campaign Joinable?',
    errorMessage: 'Choose',
    required: true,
    type: 'checkbox',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'postingDocUrl',
    label: 'Posting Doc Url',
    errorMessage: 'Enter a valid URL e.g: http://test.com/something',
    required: true,
    type: 'text',
    pattern: URL_REGEX,
  },
  {
    name: 'expectedResponse',
    label: 'Expected Response success or failure key',
    required: false,
    type: 'key_value',
    fields: [
      {
        keyName: 'successKey',
        valueName: 'successValue',
      },
      {
        keyName: 'failureKey',
        valueName: 'failureValue',
      },
    ],
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'successKey',
    label: 'Enter Success Key and value',
    errorMessage: 'Please Success Key and value',
    required: false,
    type: 'key_value',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'successValue',
    label: 'Enter Success Key and value',
    errorMessage: 'Please Success Key and value',
    required: false,
    type: 'key_value',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'failureKey',
    label: 'Enter Success Key and value',
    errorMessage: 'Please Success Key and value',
    required: false,
    type: 'key_value',
    pattern: FREE_TEXT_REGEX,
  },
  {
    name: 'failureValue',
    label: 'Enter Success Key and value',
    errorMessage: 'Please Success Key and value',
    required: false,
    type: 'key_value',
    pattern: FREE_TEXT_REGEX,
  },
];
