import { ProductDataType } from 'modules/MarketPlace/interfaces';
import { MarketPlaceView } from 'modules/MarketPlace/MarketPlace';
import { getProducts } from 'modules/MarketPlace/serverSideFunc';

const MarketPlaceInfluencer = ({
  products,
}: {
  products: ProductDataType[];
}) => {
  return <MarketPlaceView products={products} />;
};

export async function getServerSideProps(ctx: any) {
  const { campaignId } = ctx.query;
  const { products } = await getProducts(campaignId);

  return { props: { products } };
}

export default MarketPlaceInfluencer;
