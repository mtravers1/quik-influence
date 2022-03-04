import queryString from 'query-string';
import React from 'react';
import { T } from 'types';
import { useRouter } from 'next/router';

const Filter = (initialvalues: any) => {
  const router = useRouter() || { push: () => {} };
  const [filters, setFilters] = React.useState<T>(initialvalues);

  const handleChange = (val: any) => {
    setFilters(prevFilters => ({ ...prevFilters, ...val }));
  };

  const handleClick = () => {
    const _queryString = queryString.stringify(filters, {
      arrayFormat: 'comma',
    });

    router.push(`?${_queryString}`);
  };

  return {
    handleChange,
    handleClick,
    filters,
  };
};

export default Filter;
