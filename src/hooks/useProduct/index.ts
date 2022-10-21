import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { ProductDataType } from 'components/MarketPlace/ProductCard';
import { addItemsToCart, updateCartItems } from 'redux/actions/cart';
import { nanoid } from 'nanoid';
import { generateCartItems, generateUpdatedCartItem } from './helper';

export const useProduct = (product: ProductDataType) => {
  const {
    cart,
    wishlist,
    auth: { user },
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { query } = useRouter();

  const itemInCart = cart.CampaignCartProducts.find(
    (item: any) => item.product.id === product.id
  );

  const { campaignId, campaignAdminId } = query;

  const [quantity, setQuantity] = useState(itemInCart?.quantity || 1);
  const [productVariant, setProductVariant] = useState<any>();

  const bookmarked = wishlist;

  let discountPrice;

  if (product.discount) {
    discountPrice = product.amount - (product.amount * product.discount) / 100;
  }

  // If a product has variants, then the product facing the user will seem like for every variation they choose we have added a new product to th cart. mean while on the backend we will just update the the array of variants in the cart, an update to this will just be an update the quantity of the variant in the cart. Which means the user can supposedly add this item multiple times to the cart.

  // On the other hand if the product doesn't have a variant, then we can only add it to the cart and make update to it in the cart.

  const addToCart = async () => {

    if(product.meta.options?.length) {
      
    }
    
    const cartItem = generateCartItems(
      itemInCart,
      product,
      quantity,
      user,
      productVariant
    );

    await dispatch(addItemsToCart(cartItem, product));
  };

  const updateCartItem = async () => {
    const cartItem = generateUpdatedCartItem(
      itemInCart,
      product,
      quantity,
      user,
      productVariant
    );

    await dispatch(updateCartItems(cartItem, product));
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < product?.meta.stock) {
      setQuantity(newQuantity);
    }
  };

  const updateProductVariant = (variant: any) => {
    setProductVariant({ ...(productVariant || {}), ...variant });
  };

  const productLink = `/market-place/${campaignId}/${campaignAdminId}/product/${product.id}`;

  return {
    quantity,
    updateQuantity,
    bookmarked,
    discountPrice,
    productLink,
    addToCart,
    isProductInCart: !!itemInCart as boolean,
    updateProductVariant,
    updateCartItem,
  };
};
