const filterOptions = [
  {
    name: 'status',
    options: [
      { label: 'Active', value: 'active' },
      { label: 'Inactive', value: 'inactive' },
      { label: 'Incomplete', value: 'incomplete' },
      { label: 'Complete', value: 'complete' },
    ],
  },
  {
    name: 'age',
    options: [
      { label: '18-25', value: '18-25' },
      { label: '26-32', value: '26-32' },
      { label: '33-50', value: '33-50' },
      { label: '51-above', value: '51-above' },
    ],
  },
  {
    name: 'gender',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
      { label: 'Other', value: 'other' },
    ],
  },
  {
    name: 'application',
    options: [
      { label: 'QuikSession', value: 'quikSession' },
      { label: 'IdemandBeauti', value: 'idemandBeauti' },
      { label: 'ASD Exchange', value: 'asd_exchange' },
    ],
  },
];

export default filterOptions;
