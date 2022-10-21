import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { useProduct } from 'hooks/useProduct';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { axiosInstance } from 'utils/helpers';
import { Box } from '@chakra-ui/react';

let source = axios.CancelToken.source();

const Product = () => {
  const router = useRouter();
  const { productId } = router.query;

  const { currentProduct } = useSelector(state => state.product);
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);

    try {
      source = axios.CancelToken.source();

      const res = await axiosInstance.get(`/products/${productId}`, {
        cancelToken: source.token,
      });

      currentProduct = res.data.data;
    } catch (err) {
      // Use error modal here
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!currentProduct) {
      fetchProduct();
    }

    return () => {
      source.cancel('The component unmounted');
    };
  }, []);

  return (
    <MarketPlaceLayout>
      <Box>
        <Box>{currentProduct?.name || ''}</Box>
      </Box>

      {loading && <Box>Loading...</Box>}
    </MarketPlaceLayout>
  );
};

export default Product;
