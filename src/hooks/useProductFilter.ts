import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import queryString from 'query-string';

export const useProductFilters = () => {
  const router = useRouter();
  const params = router.query;
  const [pathQuery, setPathQuery] = useState(queryString.stringify(params));

  const [filters, setFilters] = useState({
    price: {
      min: Number(params.minPrice || 1),
      max: Number(params.maxPrice || 1000000),
    },
    sort: `${params.sortField || ''}${
      params.orderBy ? `-${params.orderBy}` : ''
    }`,
  });

  const {
    generals: { marketPlacePresets },
  } = useSelector((state: any) => state);

  const handleSortChange: any = (e: any) => {
    const { value } = e.target;
    const [title, order] = value.split('-');

    setFilters((prev: any) => ({
      ...prev,
      sort: value,
    }));

    const newParams = {
      ...params,
      sortField: title,
      orderBy: order || 'DESC',
    };

    changeRoute(newParams);
  };

  const changeRoute = (params: any) => {
    const query = `?${queryString.stringify(params)}`;
    setPathQuery(query);
    router.push(query);
  };

  const sorts = [
    { label: 'Relevance', value: 'views_count' },
    { label: 'Price: Low to High', value: 'amount-asc' },
    { label: 'Price: High to Low', value: 'amount-desc' },
    { label: 'Alphabetically: A-Z', value: 'name-asc' },
    { label: 'Alphabetically: Z-A', value: 'name-desc' },
  ];

  const filterStatics = {
    categories: marketPlacePresets?.categories || [],
  };

  const handlePriceChange: any = (e: any) => {
    if (Array.isArray(e)) {
      setFilters((prev: any) => ({
        ...prev,
        price: {
          min: e[0],
          max: e[1],
        },
      }));
    } else {
      const { value, name } = e.target;
      setFilters((prev: any) => ({
        ...prev,
        price: {
          ...prev.price,
          [name]: value,
        },
      }));
    }
  };

  const applyFilters = () => {
    const newParams = {
      ...params,
      sortField: undefined,
      orderBy: undefined,
      minPrice: filters.price.min,
      maxPrice: filters.price.max,
    };

    changeRoute(newParams);
  };

  const handlePagination = (page: number) => {
    console.log(page);

    const newParams = {
      ...params,
      page,
    };

    changeRoute(newParams);
  };

  return {
    handleSortChange,
    sorts,
    path: router.asPath,
    pathQuery,
    filterStatics,
    filters,
    handlePriceChange,
    applyFilters,
    handlePagination,
  };
};
