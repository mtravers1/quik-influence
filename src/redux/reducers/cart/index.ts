import { ADD_ITEMS_TO_CART, UPDATE_CART_ITEM } from '../../actionTypes';
import {
  itemInCart,
  calculateTotal,
  addToCartLoggedOut,
  updateCartItemQuantity,
} from './helpers';

const cart = (
  state = {
    total: 0,
    CampaignCartProducts: [],
  },
  action: any
) => {
  switch (action.type) {
    case ADD_ITEMS_TO_CART:
      if (!action.payload.userId) {
        addToCartLoggedOut(action.payload.cartItem);
      }

      return {
        ...state,
        total: calculateTotal(state, action.payload.cartItem),
        CampaignCartProducts: [
          ...state.CampaignCartProducts,
          action.payload.cartItem,
        ],
      };

    case UPDATE_CART_ITEM:
      if (!action.payload.user) {
        let prevcartItems: any = localStorage.getItem('cartItems') || '{}';
        prevcartItems = JSON.parse(prevcartItems) || {};

        const newCart = updateCartItemQuantity(
          prevcartItems,
          action.payload.cartItem
        );

        localStorage.setItem('cartItems', JSON.stringify(newCart));
      }

      return {
        ...state,
        ...updateCartItemQuantity(state, action.payload.cartItem),
      };

    default:
      return state;
  }
};

export default cart;
