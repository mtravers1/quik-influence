import { useRouter } from 'next/router';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { BannerSection } from 'components/MarketPlace/BannerSection';
import { ProductCategories } from 'components/MarketPlace/Categories';

const AllProducts = () => {
  const router = useRouter();
  const { params } = router.query;

  return (
    <MarketPlaceLayout>
      <BannerSection />

      <ProductCategories />

      
    </MarketPlaceLayout>
  );
};

export default AllProducts;
