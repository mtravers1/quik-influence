import { CartDataType } from 'modules/MarketPlace/interfaces';
import { CartPageView } from 'modules/MarketPlace/cartPageView';
import { getCartItems } from 'modules/MarketPlace/serverSideFunc';

const CartPageInfluencer = ({ serverCart }: { serverCart: CartDataType }) => {
  return <CartPageView serverCart={serverCart} />;
};

export async function getServerSideProps(ctx: any) {
  const { campaignId, campaignAdminId } = ctx.query;

  const serverCart = await getCartItems(campaignId, campaignAdminId);

  return { props: { serverCart } };
}

export default CartPageInfluencer;
