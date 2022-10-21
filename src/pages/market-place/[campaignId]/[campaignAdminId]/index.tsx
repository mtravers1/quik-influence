import { useRouter } from 'next/router';
import { MarketPlaceLayout } from 'layout/marketPlace';
import { BannerSection } from 'components/MarketPlace/BannerSection';
import { ProductCategories } from 'components/MarketPlace/Categories';
import { Fragment, useState } from 'react';
import { ProductCard } from 'components/MarketPlace/ProductCard';
import { Box } from '@chakra-ui/react';
import { ProductList } from 'layout/marketPlace/productList';
import { ProductDataType } from 'components/MarketPlace/ProductCard';
import {
  MARKET_PLACE_NEW_PRODUCTS,
  MARKET_PLACE_POPULAR_PRODUCTS,
} from 'utils/constants';
import { PageTitle } from 'components/MarketPlace/PageTitle';
import { axiosInstance } from 'utils/helpers';

const AllProducts = ({ products }: { products: ProductDataType[] }) => {
  const router = useRouter();
  const { params } = router.query;

  const [selectedProducts, setSelectedProducts] = useState(
    MARKET_PLACE_NEW_PRODUCTS
  );

  const setNew = () => setSelectedProducts(MARKET_PLACE_NEW_PRODUCTS);
  const setPopular = () => setSelectedProducts(MARKET_PLACE_POPULAR_PRODUCTS);

  const productSelectData = [
    {
      title: 'New',
      onClick: setNew,
      active: selectedProducts === MARKET_PLACE_NEW_PRODUCTS,
    },
    {
      title: 'Popular',
      onClick: setPopular,
      active: selectedProducts === MARKET_PLACE_POPULAR_PRODUCTS,
    },
  ];

  return (
    <MarketPlaceLayout>
      <BannerSection />
      <ProductCategories />
      <Box paddingBottom="100px">
        <PageTitle title="Check Out Our Products" />
        <Box
          display="flex"
          justifyContent="center"
          fontSize="30px"
          fontWeight="500"
          alignItems="center"
        >
          {productSelectData.map((selection, i) => (
            <Fragment key={`product_selection_${i}`}>
              <Box
                as="h2"
                onClick={selection.onClick}
                opacity={selection.active ? 1 : 0.5}
                cursor="pointer"
              >
                {selection.title}
              </Box>

              {i === 0 && <Box margin="0 20px"> / </Box>}
            </Fragment>
          ))}
        </Box>
        <ProductList>
          {(openQuickViewModal: any) => (
            <>
              {products?.map((product: ProductDataType, i) => (
                <ProductCard
                  data={product}
                  openQuickViewModal={openQuickViewModal}
                  key={`product_card_${i}`}
                />
              ))}
            </>
          )}
        </ProductList>
      </Box>
    </MarketPlaceLayout>
  );
};

export interface CategoryDataType {
  name: string;
  image: string;
  id: string;
  description: string;
  meta?: any;
}

export async function getServerSideProps(ctx: any) {
  const { campaignId } = ctx.query;

  let products: ProductDataType[] = [];
  let catories: any[] = [];

  try {
    const response = await axiosInstance.get(
      `/users/campaign/products/${campaignId}`
    );

    products = response.data.data || [];
  } catch (err) {
    console.log(err);
  }

  try {
    const response = await axiosInstance.get(
      `/users/campaign/product-categories`
      // `/users/campaign/product-categories/${campaignId}`
    );

    catories = response.data.data;
  } catch (err) {}

  return { props: { products } };
}

export default AllProducts;
