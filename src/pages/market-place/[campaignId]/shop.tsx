import { MarketPlaceShop } from 'modules/MarketPlace/Shop';
import { getShopItems } from 'modules/MarketPlace/serverSideFunc';
import { PaginatedProductDataType } from 'modules/MarketPlace/interfaces';

const shop = ({ products }: { products: PaginatedProductDataType }) => {
  return <MarketPlaceShop initialproducts={products} />;
};

export async function getServerSideProps(ctx: any) {
  const { products } = await getShopItems(ctx.query);

  return { props: { products } };
}

export default shop;
