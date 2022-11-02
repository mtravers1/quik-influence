import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import {
  ProductDataType,
  CartItemDataType,
} from 'modules/MarketPlace/interfaces';
import { addItemsToCart, updateCartItems } from 'redux/actions/cart';
import { generateCartItems, getVariantItemInCart } from './helper';
import { useNavLink } from 'components/MarketPlace/NavBar/buttonList';
import { CART_CLICK_NAME } from 'utils/constants';
import {} from 'components/MarketPlace/Cart/miniCartItem';

export const useProduct = (product: ProductDataType) => {
  const {
    cart,
    wishlist,
    auth: { user },
  } = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const { query } = useRouter();
  const { campaignId, campaignAdminId } = query;
  const { openMenu } = useNavLink();

  const itemInCart = cart.CampaignCartProducts.filter(
    (item: any) => item.product.id === product.id
  );

  const [quantity, setQuantity] = useState(itemInCart?.at?.(0)?.quantity || 1);

  const [productVariant, setProductVariant] = useState<any>();
  const [variantItemInCart, setVariantItemInCart] = useState<any>(
    getVariantItemInCart(itemInCart, productVariant, product)
  );

  const [discountPrice] = useState(
    product.discount
      ? product.amount - (product.amount * product.discount) / 100
      : 0
  );

  const bookmarked = wishlist;

  useEffect(() => {
    if (product.meta.options?.length) {
      setVariantItemInCart(
        getVariantItemInCart(itemInCart, productVariant, product)
      );
    }
  }, [productVariant, itemInCart]);

  const addToCart = async () => {
    let added;

    if (
      (product.meta.options?.length && !variantItemInCart) ||
      (!product.meta.options?.length && !itemInCart.length)
    ) {
      added = await addNewItemToCart();
    } else {
      added = await updateCartItem();
    }

    if (added) {
      openMenu(CART_CLICK_NAME);
    }
  };

  const addNewItemToCart = async () => {
    if (product.meta.options?.length) {
      // be sure the client has chosen all the options
      if (
        Object.keys(productVariant || {}).length !== product.meta.options.length
      ) {
        // jude:(todo) show the user an error message
        return;
      }
    }

    const cartItem: CartItemDataType = generateCartItems({
      itemInCart: itemInCart?.at?.(0),
      product,
      quantity,
      user,
      productVariant,
    });

    await dispatch(addItemsToCart(cartItem, product));
    return true;
  };

  const updateCartItem = async () => {
    const prevItemInCart = product?.meta?.options?.length
      ? variantItemInCart
      : itemInCart?.at?.(0);

    const cartItem = generateCartItems({
      itemInCart: prevItemInCart,
      product,
      quantity,
      user,
      productVariant,
    });

    await dispatch(updateCartItems(cartItem, product));
    return true;
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < product?.meta.stock) {
      setQuantity(newQuantity);
    }
  };

  const updateProductVariant = (variant: any) => {
    setProductVariant({ ...(productVariant || {}), ...variant });
  };

  const productLink = campaignAdminId
    ? `/market-place/${campaignId}/${campaignAdminId}/product/${product.id}`
    : `/market-place/${campaignId}/product/${product.id}`;

  return {
    quantity,
    updateQuantity,
    bookmarked,
    discountPrice,
    productLink,
    addToCart,
    isProductInCart: !!itemInCart?.length as boolean,
    updateProductVariant,
    updateCartItem,
  };
};
