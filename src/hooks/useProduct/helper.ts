import { nanoid } from 'nanoid';
import { ProductDataType } from 'components/MarketPlace/ProductCard';

export const generateCartItems = (
  itemInCart: any,
  product: ProductDataType,
  quantity: number,
  user: any,
  productVariant: any
) => {
  let cartItem: any;

  if (!product.meta.options?.length) {
    cartItem = {
      id: itemInCart?.id || nanoid(),
      productId: product.id,
      quantity,
      userId: user?.id,
    };
  } else {
    let totalQuantity = quantity;

    if (itemInCart) {
      const prevTotalQuantity = itemInCart.variant.reduce(
        (acc: number, curr: any) => acc + curr.quantity,
        0
      );

      totalQuantity = quantity + prevTotalQuantity;
    }

    cartItem = {
      id: itemInCart?.id || nanoid(),
      productId: product.id,
      quantity: totalQuantity,
      variant: { ...productVariant, quantity },
    };
  }

  return cartItem;
};

export const generateUpdatedCartItem = (
    itemInCart: any,
    product: ProductDataType,
    quantity: number,
    user: any,
    productVariant: any
  ) => {
    let cartItem: any;
  
    if (!product.meta.options?.length) {
      cartItem = {
        id: itemInCart?.id || nanoid(),
        productId: product.id,
        quantity,
        userId: user?.id,
      };
    } else {
      let totalQuantity = quantity;
  
      if (itemInCart) {
        const prevTotalQuantity = itemInCart.variant.reduce(
          (acc: number, curr: any) => acc + curr.quantity,
          0
        );
  
        totalQuantity = quantity + prevTotalQuantity;
      }
  
      cartItem = {
        id: itemInCart?.id || nanoid(),
        productId: product.id,
        quantity: totalQuantity,
        variant: { ...productVariant, quantity },
      };
    }
  
    return cartItem;
  };