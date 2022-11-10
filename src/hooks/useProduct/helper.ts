import { nanoid } from 'nanoid';
import {
  ProductDataType,
  CartItemDataType,
} from 'modules/MarketPlace/interfaces';

export const generateCartItems = ({
  itemInCart,
  quantity,
  user,
  productVariant,
  CampaignProduct,
}: {
  itemInCart: any;
  quantity: number;
  user: any;
  productVariant: any;
  CampaignProduct: ProductDataType;
}): CartItemDataType => {
  let cartItem: CartItemDataType;

  cartItem = {
    id: itemInCart?.id || nanoid(),
    productId: CampaignProduct?.id,
    quantity,
    userId: user?.admin?.id || user?.user?.id,
    variant: productVariant,
    CampaignProduct,
  };

  return cartItem;
};

export const getVariantItemInCart = (
  itemInCart: any,
  productVariant: any,
  product: ProductDataType
): CartItemDataType | undefined => {
  if (product?.meta?.options?.length) {
    return itemInCart?.find((item: any) => {
      const isSame = product.meta.options.every((option: any) => {
        return item.variant[option.key] === productVariant?.[option.key];
      }, true);

      return isSame;
    });
  }
};
