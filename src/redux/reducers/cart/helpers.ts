import { CartItemDataType, CartDataType } from 'modules/MarketPlace/interfaces';

export const itemInCart = (
  cart: CartItemDataType[],
  item: CartItemDataType
) => {
  return cart.find((cartItem: any) => cartItem.id === item.id);
};

export const calculateTotal = (cart: any, item: CartItemDataType) => {
  console.log('item ====>', item);
  console.log('cart ====>', cart);

  return (cart.total || 0) + item.CampaignProduct.amount * item.quantity;
};

export const addToCartLoggedOut = (cartItem: CartItemDataType) => {
  const localCartStr: CartDataType | string =
    localStorage.getItem('cartItems') || '{}';

  const localCart: CartDataType = JSON.parse(localCartStr);

  const CampaignCartProducts = localCart.CampaignCartProducts || [];
  CampaignCartProducts.push(cartItem);

  localCart.total = calculateTotal(localCart, cartItem);
  localCart.CampaignCartProducts = CampaignCartProducts;
  localStorage.setItem('cartItems', JSON.stringify(localCart));
};

export const updateCartItemQuantity = (
  cart: CartDataType,
  cartItem: CartItemDataType
) => {
  const _cart = Object.assign({}, cart);

  const previousItem: CartItemDataType | undefined = itemInCart(
    _cart.CampaignCartProducts,
    cartItem
  );

  // check if its a change in quantity
  if (previousItem?.quantity !== cartItem.quantity) {
    const previousItemAmount =
      (previousItem?.CampaignProduct?.amount || 0) *
      (previousItem?.quantity || 0);

    // remove the cost of the previous amount from the total
    let newTotal = _cart.total - previousItemAmount;
    // now add the cost of the new amount to the total
    newTotal = newTotal + cartItem.CampaignProduct.amount * cartItem.quantity;
    _cart.total = newTotal;
  }

  // if the new quantity is 0, remove the item from the cart
  if (cartItem.quantity === 0) {
    _cart.CampaignCartProducts = _cart.CampaignCartProducts.filter(
      (item: any) => item.id !== cartItem.id
    );
  } else {
    _cart.CampaignCartProducts = _cart.CampaignCartProducts.map((item: any) => {
      if (item.id === cartItem.id) {
        return cartItem;
      }
      return item;
    });
  }

  return _cart;
};

export const deleteCartItemLocal = (cart: CartDataType, cartItemId: string) => {
  const _cart: CartDataType = Object.assign({}, cart);

  const previousItem: CartItemDataType | undefined =
    _cart.CampaignCartProducts.find(
      (cartItem: any) => cartItem.id === cartItemId
    );

  // remove the cost of the previous amount from the total
  let newTotal =
    _cart.total -
    (previousItem?.CampaignProduct?.amount || 0) *
      (previousItem?.quantity || 0);
  _cart.total = newTotal;

  _cart.CampaignCartProducts = _cart.CampaignCartProducts.filter(
    (item: any) => item.id !== cartItemId
  );

  return _cart;
};
