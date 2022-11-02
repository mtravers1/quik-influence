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
  product,
}: {
  itemInCart: any;
  quantity: number;
  user: any;
  productVariant: any;
  product: ProductDataType;
}): CartItemDataType => {
  let cartItem: CartItemDataType;

  cartItem = {
    id: itemInCart?.id || nanoid(),
    productId: product?.id,
    quantity,
    userId: user?.id,
    variant: productVariant,
    product,
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
