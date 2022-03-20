import { FILTER_SEARCH_TYPE } from './constants';

export const allFilters = [
  {
    name: 'Email',
    type: FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH,
    key: 'email',
    id: 'email',
  },
  {
    name: 'First name',
    type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
    key: 'firstName',
    id: 'firstName',
  },
  {
    name: 'Last name',
    type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
    key: 'lastName',
    id: 'lastName',
  },
  {
    name: 'Phone Number',
    type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
    key: 'phone',
    id: 'phone',
  },
  {
    name: 'Address',
    type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
    key: 'address',
    id: 'address',
  },
  {
    name: 'City',
    type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
    key: 'city',
    id: 'city',
  },
  {
    name: 'Age',
    type: FILTER_SEARCH_TYPE.INTEGER_SEARCH,
    key: 'age',
    id: 'age',
  },
  {
    name: 'Age greater than',
    type: FILTER_SEARCH_TYPE.INTEGER_GREATER_THAN_SEARCH,
    key: 'age',
    id: 'age_greater',
  },
  {
    name: 'Age less than',
    type: FILTER_SEARCH_TYPE.INTEGER_LESS_THAN_SEARCH,
    key: 'age',
    id: 'age_less',
  },
  // {
  //     name: 'Age is between',
  //     type: FILTER_SEARCH_TYPE.INTEGER_RANGE_SEARCH,
  //     key: 'age',
  //     id: 'age_between'
  // },
  {
    name: 'State',
    type: FILTER_SEARCH_TYPE.FUZZY_TEXT_SEARCH,
    key: 'state',
    id: 'state',
  },
  {
    name: 'Zip Code',
    type: FILTER_SEARCH_TYPE.FULL_TEXT_SEARCH,
    key: 'postalCode',
    id: 'postalCode',
  },
  {
    name: 'Gender',
    type: FILTER_SEARCH_TYPE.OPTIONS_SEARCH,
    key: 'gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
    id: 'gender',
  },
  // {
  //     name: 'status',
  //     type: FILTER_SEARCH_TYPE.OPTIONS_SEARCH,
  //     key: 'status',
  //     options: [
  //         { label: 'Active', value: 'active' },
  //         { label: 'Inactive', value: 'inactive' },
  //         { label: 'Incomplete', value: 'incomplete' },
  //         { label: 'Complete', value: 'complete' },
  //     ],
  //     id: 'status',
  // }
];
