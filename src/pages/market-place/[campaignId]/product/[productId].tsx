import React from 'react';
import { ProductDataType } from 'modules/MarketPlace/interfaces';
import { ProductView } from 'modules/MarketPlace/productView';
import { getASingleProduct } from 'modules/MarketPlace/serverSideFunc';

const ProductWithInfluencer = ({ product }: { product: ProductDataType[] }) => {
  return <ProductView product={product} />;
};

export async function getServerSideProps(ctx: any) {
  const { productId } = ctx.query;
  const product = await getASingleProduct(productId);

  return { props: { product } };
}

export default ProductWithInfluencer;
