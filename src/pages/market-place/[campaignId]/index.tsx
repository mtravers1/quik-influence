import {
  CategoryDataType,
  PaginatedProductDataType,
} from 'modules/MarketPlace/interfaces';
import { MarketPlaceView } from 'modules/MarketPlace/MarketPlace';
import { getPageData } from 'modules/MarketPlace/serverSideFunc';

const MarketPlaceInfluencer = ({
  newProducts,
  mostViewedProducts,
}: {
  newProducts: PaginatedProductDataType;
  mostViewedProducts: PaginatedProductDataType;
  catogories: CategoryDataType[];
}) => {
  return (
    <MarketPlaceView
      newProducts={newProducts}
      mostViewedProducts={mostViewedProducts}
    />
  );
};

export async function getServerSideProps(ctx: any) {
  const { campaignId } = ctx.query;
  const { newProducts, mostViewedProducts } = await getPageData(campaignId);

  return { props: { newProducts, mostViewedProducts } };
}

export default MarketPlaceInfluencer;
