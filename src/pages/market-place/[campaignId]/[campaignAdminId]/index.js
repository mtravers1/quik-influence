import { useRouter } from 'next/router';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { BannerSection } from 'components/MarketPlace/BannerSection';
import { ProductCategories } from 'components/MarketPlace/Categories';
import { ProductCard } from 'components/MarketPlace/ProductCard';
import { Box } from '@chakra-ui/react';
import { ProductList } from 'layout/marketPlace/productList';

const AllProducts = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <MarketPlaceLayout>
      <BannerSection />
      <ProductCategories />
      <ProductList>
        <ProductCard />
      </ProductList>
    </MarketPlaceLayout>
  );
};

export default AllProducts;
