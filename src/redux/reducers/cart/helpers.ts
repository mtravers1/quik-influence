export const itemInCart = (cart: any, item: any) => {
  return cart.find((cartItem: any) => cartItem.id === item.id);
};

export const calculateTotal = (cart: any, item: any) => {
  return (cart.total || 0) + item.product.amount * item.quantity;
};

export const addToCartLoggedOut = (cartItem: any) => {
  let prevcartItems: any = localStorage.getItem('cartItems') || '{}';
  prevcartItems = JSON.parse(prevcartItems) || {};

  const CampaignCartProducts = prevcartItems.prevcartItems || [];
  CampaignCartProducts.push(cartItem);

  prevcartItems.total = calculateTotal(prevcartItems, cartItem);
  prevcartItems.CampaignCartProducts = CampaignCartProducts;
  localStorage.setItem('cartItems', JSON.stringify(prevcartItems));
};

export const updateCartItemQuantity = (cart: any, cartItem: any) => {
  const _cart = Object.assign({}, cart);

  const previousItem = itemInCart(_cart.CampaignCartProducts, cartItem);

  // check if its a change in quantity
  if (previousItem.quantity !== cartItem.quantity) {
    const previousItemAmount =
      previousItem.product.amount * previousItem.quantity;

    // remove the cost of the previous amount from the total
    let newTotal = _cart.total - previousItemAmount;
    // now add the cost of the new amount to the total
    newTotal = newTotal + cartItem.product.amount * cartItem.quantity;

    _cart.total = calculateTotal(_cart, cartItem);
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
