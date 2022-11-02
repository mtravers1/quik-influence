import React, { FC } from 'react';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { MarketProductCarousel } from 'components/MarketPlace/ProductCarousel';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { ProductInfo } from 'components/MarketPlace/ProductInfo';
import { Box } from '@chakra-ui/react';
import { ProductReview } from 'components/MarketPlace/ProductReview';
import { ProductDataType } from 'modules/MarketPlace/interfaces';
import { TitlePlace } from 'components/MarketPlace/TitlePlace';

export const ProductView = ({ product }: { product: ProductDataType[] }) => {
  let { currentProduct } = useSelector((state: any) => state.product);
  const router = useRouter();

  // If the product is not in the redux store, use the server version
  if (!currentProduct) {
    currentProduct = product;
  }

  if (!currentProduct) {
    router.push('/market-place');
    return <></>;
  }

  return (
    <MarketPlaceLayout>
      <TitlePlace>{currentProduct?.name || ''}</TitlePlace>

      <Box
        display="flex"
        padding="0 15px"
        flexDirection={{ base: 'column', md: 'row' }}
        maxWidth="1200px"
        margin="0 auto 100px"
      >
        <Box
          width={{ base: '100%', md: '50%' }}
          flexShrink={0}
          marginBottom={{ base: '40px', md: '0' }}
        >
          <MarketProductCarousel
            images={currentProduct.meta.images}
            showThumbs={Boolean(currentProduct.meta.images.length > 0)}
          />
        </Box>

        <Box
          flexShrink={0}
          width={{ base: '100%', md: '50%' }}
          padding="0 15px"
          overflow="scroll"
        >
          <ProductInfo product={currentProduct} />
        </Box>
      </Box>

      <Box maxW="800px" margin="0 auto 100px">
        <ProductReview product={currentProduct} />
      </Box>
    </MarketPlaceLayout>
  );
};
